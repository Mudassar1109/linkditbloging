let supabase;
let session = null;
let isAdmin = false;

// DOM Elements
const appContainer = document.getElementById('app-container');
const mainContent = document.getElementById('main-content');
const publicSidebar = document.getElementById('sidebar');
const publicHeader = document.getElementById('public-header');
const publicFooter = document.getElementById('public-footer');
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// --- 1. INITIALIZATION & AUTH ---
async function initApp() {
    try {
        // Fetch environment config securely from Vercel Serverless Function
        const res = await fetch('/api/config');
        if (!res.ok) throw new Error("Failed to load configuration.");
        const config = await res.json();
        
        supabase = window.supabase.createClient(config.url, config.anonKey);
        
        // Restore session
        const { data: { session: savedSession } } = await supabase.auth.getSession();
        session = savedSession;
        
        if (session) {
            await checkAdminStatus();
        }

        // Setup Auth Listener
        supabase.auth.onAuthStateChange(async (event, currentSession) => {
            session = currentSession;
            if (session) {
                await checkAdminStatus();
            } else {
                isAdmin = false;
            }
        });

        initTheme();
        handleRoute();
        window.addEventListener('hashchange', handleRoute);
        
    } catch (error) {
        mainContent.innerHTML = `<div class="empty-state"><h3>System Error</h3><p>Could not initialize application. Please check backend configuration.</p></div>`;
        console.error(error);
    }
}

async function checkAdminStatus() {
    // Check if user is in admin_roles table securely via RLS
    const { data, error } = await supabase.from('admin_roles').select('user_id').eq('user_id', session.user.id).single();
    isAdmin = !!data;
}

// --- 2. ROUTER ---
function handleRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.split('?')[0].replace('#', '');
    const segments = path.split('/').filter(Boolean);
    window.scrollTo(0, 0);

    // Close mobile nav
    document.getElementById('main-nav').classList.remove('active');

    // Admin Route Protection
    if (segments[0] === 'admin') {
        if (segments[1] === 'login') {
            if (isAdmin) return window.location.hash = '#/admin/dashboard';
            renderLogin();
        } else {
            if (!session || !isAdmin) return window.location.hash = '#/admin/login';
            renderAdminDashboard(segments[1] || 'dashboard', segments[2]);
        }
        return;
    }

    // Public Routes
    publicHeader.style.display = 'block';
    publicFooter.style.display = 'block';
    appContainer.style.display = 'grid';
    
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (segments.length === 0) {
        document.querySelector('a[href="#/"]').classList.add('active');
        renderHome();
    } else if (segments[0] === 'category') {
        renderCategory(decodeURIComponent(segments[1]));
    } else if (segments[0] === 'post') {
        renderPost(segments[1]);
    } else if (segments[0] === 'search') {
        renderSearch(decodeURIComponent(hash.split('?q=')[1] || ''));
    } else {
        renderStaticPage(segments[0]);
    }
    
    renderPublicSidebar();
}

// --- 3. PUBLIC VIEWS (Reads from Supabase) ---
async function renderHome() {
    mainContent.innerHTML = '<p>Loading latest discoveries...</p>';
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(10);
        
    if (error) {
        mainContent.innerHTML = `<p class="muted">Error loading articles.</p>`;
        return;
    }
    renderArticleList(data, "Latest Discoveries");
}

async function renderCategory(cat) {
    mainContent.innerHTML = `<p>Loading ${cat}...</p>`;
    const { data, error } = await supabase
        .from('articles')
        .select('*, categories!inner(name)')
        .eq('status', 'published')
        .eq('categories.name', cat)
        .order('published_at', { ascending: false });
        
    renderArticleList(data || [], cat);
}

function renderArticleList(articles, title) {
    let html = `<div class="page-header"><h1 style="font-size: 2rem;">${title}</h1></div>`;
    
    if (!articles || articles.length === 0) {
        html += `<div class="empty-state">
                    <h3>No articles published yet.</h3>
                    <p>Check back soon for verified software discoveries.</p>
                 </div>`;
        mainContent.innerHTML = html;
        return;
    }

    html += `<div class="article-grid">`;
    articles.forEach(art => {
        html += `
            <article class="article-card">
                <div class="card-image-wrap">
                    <a href="#/post/${art.slug}">
                        <img src="${art.image_url || 'default.jpg'}" alt="${art.image_alt || art.title}">
                    </a>
                </div>
                <div class="card-content">
                    <h2 class="card-title"><a href="#/post/${art.slug}">${DOMPurify.sanitize(art.title)}</a></h2>
                    <p class="card-excerpt">${DOMPurify.sanitize(art.excerpt || '')}</p>
                    <div class="card-meta">
                        <span>📅 ${new Date(art.published_at).toLocaleDateString()}</span>
                        <a href="#/post/${art.slug}">Read More →</a>
                    </div>
                </div>
            </article>
        `;
    });
    html += `</div>`;
    mainContent.innerHTML = html;
}

async function renderPost(slug) {
    mainContent.innerHTML = '<p>Loading article...</p>';
    const { data, error } = await supabase
        .from('articles')
        .select('*, categories(name)')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (error || !data) {
        mainContent.innerHTML = `<div class="empty-state"><h3>404 - Not Found</h3><p>The article does not exist or has been removed.</p></div>`;
        return;
    }

    let dealHtml = '';
    if (data.article_type === 'Deal') {
        const isExpired = data.deal_expiry && new Date(data.deal_expiry) < new Date();
        dealHtml = `
            <div class="deal-box ${isExpired ? 'expired' : ''}">
                <h3>Deal Details ${isExpired ? '<span class="status-badge badge-expired">Expired</span>' : '<span class="status-badge badge-active">Active</span>'}</h3>
                <ul>
                    <li><strong>Status:</strong> ${data.deal_is_verified ? 'Verified on ' + new Date(data.deal_verification_date).toLocaleDateString() : 'Unverified User Submission'}</li>
                    <li><strong>Source:</strong> <a href="${data.deal_source_url}" target="_blank" rel="noopener nofollow">Official Offer Link</a></li>
                    <li><strong>Validity:</strong> ${data.deal_start ? new Date(data.deal_start).toLocaleDateString() : 'Unknown'} to ${data.deal_expiry ? new Date(data.deal_expiry).toLocaleDateString() : 'Unknown'}</li>
                    <li><strong>Platforms:</strong> ${data.deal_platforms || 'N/A'}</li>
                </ul>
                ${data.deal_limitations ? `<p class="text-sm muted"><strong>Limitations:</strong> ${DOMPurify.sanitize(data.deal_limitations)}</p>` : ''}
            </div>
        `;
    }

    // Sanitize content via DOMPurify to prevent XSS
    const safeContent = DOMPurify.sanitize(data.content);
    
    mainContent.innerHTML = `
        <article class="single-post">
            <header class="single-post-header">
                <span class="category-badge" style="position:static; display:inline-block; margin-bottom:15px;">${data.categories?.name || 'Uncategorized'}</span>
                <h1 class="single-post-title">${DOMPurify.sanitize(data.title)}</h1>
                <div class="single-post-meta">
                    <span>📅 ${new Date(data.published_at).toLocaleDateString()}</span>
                    <span>✍️ ${DOMPurify.sanitize(data.author || 'Admin')}</span>
                </div>
            </header>
            ${data.image_url ? `<img src="${data.image_url}" alt="${data.image_alt || ''}" class="single-post-image">` : ''}
            <div class="single-post-content">
                ${safeContent}
                ${dealHtml}
            </div>
        </article>
    `;
}

async function renderPublicSidebar() {
    const { data: cats } = await supabase.from('categories').select('*');
    
    let html = `
        <div class="widget">
            <h3>About Linkdit</h3>
            <p>Your destination for verified software reviews and deals.</p>
        </div>
        <div class="widget">
            <h3>Categories</h3>
            <ul class="category-list">
                ${(cats || []).map(c => `<li><a href="#/category/${c.name}">${c.name}</a></li>`).join('')}
            </ul>
        </div>
    `;
    publicSidebar.innerHTML = html;
}

function renderStaticPage(page) {
    const content = {
        'privacy': 'Privacy Policy content here.',
        'terms': 'Terms of Service content here.',
        'about': 'About Linkdit...'
    };
    mainContent.innerHTML = `<div class="page-header"><h1>${page.toUpperCase()}</h1></div><div class="single-post-content">${content[page] || 'Page not found.'}</div>`;
}

// --- 4. SECURE ADMIN LOGIN ---
function renderLogin() {
    publicHeader.style.display = 'none';
    publicFooter.style.display = 'none';
    publicSidebar.innerHTML = '';
    appContainer.style.display = 'block';

    mainContent.innerHTML = `
        <div class="login-wrapper">
            <div class="login-box">
                <a href="#/" class="logo" style="margin-bottom: 20px; display:block;">Link<span>dit</span>.</a>
                <h2>Admin Secure Login</h2>
                <form id="login-form">
                    <div class="form-group" style="text-align:left;">
                        <label>Email Address</label>
                        <input type="email" id="login-email" class="form-control" required autocomplete="email">
                    </div>
                    <div class="form-group" style="text-align:left;">
                        <label>Password</label>
                        <div class="password-wrap">
                            <input type="password" id="login-pass" class="form-control" required autocomplete="current-password">
                            <button type="button" onclick="togglePass()">Show</button>
                        </div>
                    </div>
                    <p id="login-error" class="error-msg"></p>
                    <button type="submit" class="btn" style="width:100%; margin-top:10px;">Secure Sign In</button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value;
        const btn = e.target.querySelector('button');
        const err = document.getElementById('login-error');
        
        btn.textContent = "Authenticating...";
        btn.disabled = true;
        
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        
        if (error) {
            err.textContent = "Invalid credentials or unauthorized.";
            err.style.display = 'block';
            btn.textContent = "Secure Sign In";
            btn.disabled = false;
        } else {
            // Verify if user is in admin_roles table
            const { data: roleData } = await supabase.from('admin_roles').select('user_id').eq('user_id', data.user.id).single();
            if (!roleData) {
                await supabase.auth.signOut();
                err.textContent = "Your account does not have administrator privileges.";
                err.style.display = 'block';
                btn.textContent = "Secure Sign In";
                btn.disabled = false;
                return;
            }
            isAdmin = true;
            window.location.hash = '#/admin/dashboard';
        }
    });
}

window.togglePass = function() {
    const p = document.getElementById('login-pass');
    p.type = p.type === 'password' ? 'text' : 'password';
}

async function handleLogout() {
    await supabase.auth.signOut();
    isAdmin = false;
    window.location.hash = '#/admin/login';
}

// --- 5. SECURE ADMIN DASHBOARD ---
function renderAdminDashboard(view, param) {
    publicHeader.style.display = 'none';
    publicFooter.style.display = 'none';
    appContainer.style.display = 'block';
    appContainer.style.margin = '0';
    appContainer.style.width = '100%';
    appContainer.style.maxWidth = '100%';

    let html = `
        <div id="admin-layout">
            <aside class="admin-sidebar">
                <a href="#/" class="logo">Link<span>dit</span>. <span style="font-size:0.8rem;color:var(--text-muted)">CMS</span></a>
                <nav class="admin-nav">
                    <a href="#/admin/dashboard" class="${view === 'dashboard' ? 'active' : ''}">📊 Overview</a>
                    <a href="#/admin/articles" class="${view === 'articles' ? 'active' : ''}">📝 All Articles</a>
                    <a href="#/admin/editor" class="${view === 'editor' ? 'active' : ''}">➕ Add New</a>
                    <a href="#/admin/categories" class="${view === 'categories' ? 'active' : ''}">🏷️ Categories</a>
                    <a href="#/" target="_blank">🌐 View Site</a>
                    <a href="#" onclick="handleLogout()" style="margin-top:auto; color:var(--danger)">🚪 Logout</a>
                </nav>
            </aside>
            <main class="admin-content" id="admin-content">
                Loading...
            </main>
        </div>
    `;
    mainContent.innerHTML = html;

    const contentArea = document.getElementById('admin-content');

    if (view === 'dashboard') loadAdminOverview(contentArea);
    if (view === 'articles') loadAdminArticles(contentArea);
    if (view === 'editor') loadAdminEditor(contentArea, param);
    if (view === 'categories') loadAdminCategories(contentArea);
}

async function loadAdminOverview(container) {
    // Real counts driven by RLS (Admins can read all)
    const [{ count: totalArts }, { count: pubArts }, { count: cats }] = await Promise.all([
        supabase.from('articles').select('*', { count: 'exact', head: true }),
        supabase.from('articles').select('*', { count: 'exact', head: true }).eq('status', 'published'),
        supabase.from('categories').select('*', { count: 'exact', head: true })
    ]);

    container.innerHTML = `
        <div class="admin-header">
            <h2>Dashboard Overview</h2>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><h4>Total Articles</h4><div class="value">${totalArts || 0}</div></div>
            <div class="stat-card"><h4>Published</h4><div class="value">${pubArts || 0}</div></div>
            <div class="stat-card"><h4>Categories</h4><div class="value">${cats || 0}</div></div>
        </div>
        <div class="empty-state">
            <p>Welcome to the secure Linkdit CMS. Select an option from the sidebar to manage content.</p>
        </div>
    `;
}

async function loadAdminArticles(container) {
    const { data, error } = await supabase.from('articles').select('id, title, slug, status, created_at, article_type').order('created_at', { ascending: false });
    
    let rows = '';
    if (data && data.length > 0) {
        rows = data.map(a => `
            <tr>
                <td><strong>${DOMPurify.sanitize(a.title)}</strong><br><span class="text-sm muted">/${a.slug}</span></td>
                <td>${a.article_type}</td>
                <td>${a.status === 'published' ? '<span class="status-badge badge-active">Published</span>' : '<span class="status-badge">Draft</span>'}</td>
                <td>${new Date(a.created_at).toLocaleDateString()}</td>
                <td class="admin-actions">
                    <button class="btn btn-outline" onclick="window.location.hash='#/admin/editor/${a.id}'">Edit</button>
                    <button class="btn btn-danger" onclick="deleteArticle('${a.id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } else {
        rows = `<tr><td colspan="5" style="text-align:center;">No articles found.</td></tr>`;
    }

    container.innerHTML = `
        <div class="admin-header">
            <h2>Manage Articles</h2>
            <a href="#/admin/editor" class="btn">+ New Article</a>
        </div>
        <div class="admin-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Title & Slug</th><th>Type</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    `;
}

// --- 6. ARTICLE EDITOR (With Real Validations) ---
async function loadAdminEditor(container, id) {
    const { data: cats } = await supabase.from('categories').select('id, name');
    let article = {};
    if (id) {
        const { data } = await supabase.from('articles').select('*').eq('id', id).single();
        if (data) article = data;
    }

    const catOptions = (cats || []).map(c => `<option value="${c.id}" ${article.category_id === c.id ? 'selected' : ''}>${c.name}</option>`).join('');

    container.innerHTML = `
        <div class="admin-header">
            <h2>${id ? 'Edit Article' : 'Create New Article'}</h2>
        </div>
        <form id="editor-form" class="editor-grid">
            <div class="editor-main">
                <div class="form-group">
                    <label>Article Title *</label>
                    <input type="text" id="ed-title" class="form-control" required value="${article.title || ''}">
                </div>
                <div class="form-group">
                    <label>URL Slug *</label>
                    <input type="text" id="ed-slug" class="form-control" required pattern="[a-z0-9-]+" title="Only lowercase letters, numbers, and hyphens" value="${article.slug || ''}">
                </div>
                <div class="form-group">
                    <label>Excerpt</label>
                    <textarea id="ed-excerpt" class="form-control" rows="3">${article.excerpt || ''}</textarea>
                </div>
                <div class="form-group">
                    <label>Full Content (HTML) *</label>
                    <textarea id="ed-content" class="form-control" rows="15" required>${article.content || ''}</textarea>
                </div>

                <!-- Deal Specifics -->
                <div id="ed-deal-section" class="deal-fields ${article.article_type === 'Deal' ? 'active' : ''}">
                    <h3>Deal Properties</h3>
                    <div class="form-group">
                        <label>Official Source URL</label>
                        <input type="url" id="ed-d-url" class="form-control" value="${article.deal_source_url || ''}">
                    </div>
                    <div style="display:flex; gap:20px;">
                        <div class="form-group" style="flex:1"><label>Start Date</label><input type="date" id="ed-d-start" class="form-control" value="${article.deal_start || ''}"></div>
                        <div class="form-group" style="flex:1"><label>Expiry Date</label><input type="date" id="ed-d-expiry" class="form-control" value="${article.deal_expiry || ''}"></div>
                    </div>
                    <div class="form-group">
                        <label>Limitations & Conditions</label>
                        <input type="text" id="ed-d-limit" class="form-control" value="${article.deal_limitations || ''}">
                    </div>
                    <div class="form-group" style="background: rgba(0,0,0,0.2); padding:15px; border-radius:5px;">
                        <label style="display:flex; align-items:center; gap:10px; cursor:pointer;">
                            <input type="checkbox" id="ed-d-verified" ${article.deal_is_verified ? 'checked' : ''}> 
                            <strong>Mark Deal as Verified</strong> (Requires manual check)
                        </label>
                        <p class="text-sm muted" style="margin-top:5px;">Never auto-verify placeholder deals. Verify directly with vendor.</p>
                    </div>
                </div>
            </div>
            
            <div class="editor-sidebar">
                <div class="form-group">
                    <label>Status</label>
                    <select id="ed-status" class="form-control">
                        <option value="draft" ${article.status === 'draft' ? 'selected' : ''}>Draft</option>
                        <option value="published" ${article.status === 'published' ? 'selected' : ''}>Published</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Article Type</label>
                    <select id="ed-type" class="form-control" onchange="document.getElementById('ed-deal-section').classList.toggle('active', this.value === 'Deal')">
                        <option value="Standard" ${article.article_type !== 'Deal' ? 'selected' : ''}>Standard Post</option>
                        <option value="Deal" ${article.article_type === 'Deal' ? 'selected' : ''}>Software Deal</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <select id="ed-category" class="form-control">
                        <option value="">-- Select --</option>
                        ${catOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Featured Image URL</label>
                    <input type="url" id="ed-image" class="form-control" value="${article.image_url || ''}">
                </div>
                <hr style="border-color:var(--border)">
                <button type="submit" class="btn">Save Article</button>
                <p id="ed-msg" class="form-msg"></p>
            </div>
        </form>
    `;

    document.getElementById('editor-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Security: Prevent fake domain URLs for deals
        const dUrl = document.getElementById('ed-d-url').value;
        if (dUrl && dUrl.includes('example.com')) {
            alert("Security Policy: Cannot publish deals pointing to placeholder domains (example.com). Use real verified URLs.");
            return;
        }

        const payload = {
            title: document.getElementById('ed-title').value,
            slug: document.getElementById('ed-slug').value,
            excerpt: document.getElementById('ed-excerpt').value,
            content: document.getElementById('ed-content').value,
            status: document.getElementById('ed-status').value,
            article_type: document.getElementById('ed-type').value,
            category_id: document.getElementById('ed-category').value || null,
            image_url: document.getElementById('ed-image').value,
            published_at: document.getElementById('ed-status').value === 'published' ? (article.published_at || new Date().toISOString()) : null,
            
            deal_source_url: dUrl,
            deal_start: document.getElementById('ed-d-start').value || null,
            deal_expiry: document.getElementById('ed-d-expiry').value || null,
            deal_limitations: document.getElementById('ed-d-limit').value,
            deal_is_verified: document.getElementById('ed-d-verified') ? document.getElementById('ed-d-verified').checked : false,
            deal_verification_date: document.getElementById('ed-d-verified') && document.getElementById('ed-d-verified').checked ? new Date().toISOString() : null
        };

        const msg = document.getElementById('ed-msg');
        msg.textContent = 'Saving...';
        
        let res;
        if (id) {
            res = await supabase.from('articles').update(payload).eq('id', id);
        } else {
            res = await supabase.from('articles').insert([payload]);
        }

        if (res.error) {
            msg.style.color = 'var(--danger)';
            msg.textContent = `Error: ${res.error.message}`;
        } else {
            msg.style.color = 'var(--success)';
            msg.textContent = 'Saved successfully!';
            setTimeout(() => window.location.hash = '#/admin/articles', 1000);
        }
    });
}

window.deleteArticle = async function(id) {
    if (confirm("Are you sure you want to permanently delete this article? This action cannot be undone.")) {
        const { error } = await supabase.from('articles').delete().eq('id', id);
        if (error) alert("Error deleting: " + error.message);
        else handleRoute(); // reload view
    }
}

// --- 7. CATEGORY MANAGEMENT ---
async function loadAdminCategories(container) {
    const { data, error } = await supabase.from('categories').select('*');
    
    const rows = (data || []).map(c => `
        <tr>
            <td>${c.name}</td>
            <td>${c.slug}</td>
            <td>
                <button class="btn btn-danger btn-outline" onclick="deleteCategory('${c.id}')">Delete</button>
            </td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="admin-header">
            <h2>Categories</h2>
        </div>
        <div class="editor-main" style="margin-bottom:30px;">
            <h3>Add Category</h3>
            <form id="cat-form" style="display:flex; gap:10px; margin-top:15px;">
                <input type="text" id="cat-name" placeholder="Category Name" class="form-control" required>
                <input type="text" id="cat-slug" placeholder="slug" class="form-control" required>
                <button type="submit" class="btn">Add</button>
            </form>
        </div>
        <div class="admin-table-wrap">
            <table class="admin-table">
                <thead><tr><th>Name</th><th>Slug</th><th>Actions</th></tr></thead>
                <tbody>${rows || '<tr><td colspan="3">No categories.</td></tr>'}</tbody>
            </table>
        </div>
    `;

    document.getElementById('cat-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
            name: document.getElementById('cat-name').value,
            slug: document.getElementById('cat-slug').value
        };
        const { error } = await supabase.from('categories').insert([payload]);
        if (error) alert("Error: " + error.message);
        else handleRoute();
    });
}

window.deleteCategory = async function(id) {
    // RLS and DB Foreign Keys prevent deleting if articles exist
    if (confirm("Delete this category? Will fail if articles are assigned to it.")) {
        const { error } = await supabase.from('categories').delete().eq('id', id);
        if (error) alert("Could not delete. Check if articles are still using this category. " + error.message);
        else handleRoute();
    }
}

// Theme Controls
function initTheme() {
    const saved = localStorage.getItem('linkdit_theme') || 'dark';
    htmlEl.setAttribute('data-theme', saved);
    if(themeToggle) themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}
if(themeToggle) themeToggle.addEventListener('click', () => {
    const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('linkdit_theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Boot App
window.addEventListener('DOMContentLoaded', initApp);
