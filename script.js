// --- 1. DEFAULT DATA (12 Sample Articles) ---
const defaultArticles = [
    {
        id: "1",
        slug: "best-open-source-video-editors-2026",
        title: "Top 5 Open Source Video Editors in 2026",
        category: "Open Source",
        excerpt: "Discover the most powerful free and open-source video editing software for content creators this year.",
        content: `
            <p>Video editing no longer requires an expensive subscription. The open-source community has developed powerful alternatives that rival industry standards.</p>
            <h3>1. Kdenlive</h3>
            <p>Kdenlive remains a top choice for Linux and Windows users, offering multi-track editing and numerous effects.</p>
            <h3>2. Shotcut</h3>
            <p>Known for its wide format support, Shotcut is perfect for users who need cross-platform compatibility.</p>
            <h3>3. Blender</h3>
            <p>While primarily a 3D creation suite, Blender's built-in Video Sequence Editor is incredibly powerful for advanced users.</p>
            <!-- AdSense Placeholder inside content -->
            <div class="ad-placeholder content-ad"><span>AdSense In-Article Placeholder</span></div>
            <h3>4. Olive</h3>
            <p>A fast, non-linear editor that is gaining rapid popularity for its performance.</p>
            <h3>5. OpenShot</h3>
            <p>Great for beginners, OpenShot provides an intuitive interface without overwhelming the user.</p>
        `,
        date: "2026-10-20",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["video", "editing", "foss"],
        popularity: 95,
        published: true
    },
    {
        id: "2",
        slug: "affinity-designer-2-review",
        title: "Affinity Designer 2: Comprehensive Review",
        category: "Reviews",
        excerpt: "Is Affinity Designer 2 the ultimate Adobe Illustrator killer? We dive deep into the new features.",
        content: `
            <p>Since its release, Affinity Designer 2 has promised a subscription-free future for vector graphics professionals. In this review, we examine if it delivers.</p>
            <h3>New Features</h3>
            <p>The updated node tool and shape builder bring significant quality-of-life improvements. The interface feels refined, and performance on M-series Macs is stellar.</p>
            <h3>Pros and Cons</h3>
            <p><strong>Pros:</strong> No subscription, lightning-fast, excellent iPad companion app.</p>
            <p><strong>Cons:</strong> Lacks some niche tools found in Illustrator, file compatibility can sometimes be a hurdle with external agencies.</p>
            <h3>Verdict</h3>
            <p>For 90% of designers, Affinity Designer 2 is more than capable. It earns a solid 4.5/5 from us.</p>
        `,
        date: "2026-10-18",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["design", "vector", "software"],
        popularity: 88,
        published: true
    },
    {
        id: "3",
        slug: "github-copilot-pro-promo",
        title: "GitHub Copilot Pro Promotion",
        category: "Deals",
        excerpt: "Grab an extended trial of GitHub Copilot Pro. See details on how to claim this developer deal.",
        content: `
            <p>Boost your coding efficiency with this illustrative promotional deal for GitHub Copilot Pro. This AI pair programmer helps you write code faster and with less work.</p>
            <p>Below are the details of the offer.</p>
        `,
        date: "2026-10-15",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["development", "ai", "github"],
        popularity: 92,
        published: true,
        dealSourceUrl: "https://github.example.com/promo",
        dealStart: "2026-10-01",
        dealExpiry: "2026-11-30",
        dealPlatforms: "VS Code, JetBrains, Visual Studio",
        dealVerificationDate: "2026-10-15",
        dealInclusions: "60-day extended trial, Access to GPT-4 based models",
        dealLimitations: "New subscribers only. Valid payment method required.",
        isIllustrative: true
    },
    {
        id: "4",
        slug: "nextcloud-hub-setup-guide",
        title: "Setting up Nextcloud Hub: The Ultimate FOSS Cloud",
        category: "Open Source",
        excerpt: "Take back control of your data. Learn how to deploy Nextcloud Hub on your own server.",
        content: "<p>Nextcloud has evolved from a simple file sync tool into a complete collaboration platform. In this guide, we'll walk you through a Docker-based installation.</p><p>First, ensure you have Docker and Docker Compose installed...</p>",
        date: "2026-10-10",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["self-hosting", "cloud", "foss"],
        popularity: 75,
        published: true
    },
    {
        id: "5",
        slug: "bitwarden-vs-1password",
        title: "Bitwarden vs 1Password: 2026 Comparison",
        category: "Reviews",
        excerpt: "Which password manager reigns supreme? We compare security, UI, and pricing.",
        content: "<p>Choosing a password manager is crucial. Bitwarden offers incredible open-source value, while 1Password provides a highly polished experience.</p><p>We compare them across usability, security audits, and sharing features.</p>",
        date: "2026-10-05",
        image: "https://images.unsplash.com/photo-1614064641913-6b71a30a5015?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["security", "passwords", "comparison"],
        popularity: 89,
        published: true
    },
    {
        id: "6",
        slug: "adobe-creative-cloud-student",
        title: "Adobe Creative Cloud Student Discount",
        category: "Deals",
        excerpt: "Save up to 60% on Adobe Creative Cloud with a valid student ID.",
        content: "<p>Students and teachers can get the entire collection of Adobe creative apps at a massive discount. This is a standard illustrative educational offer.</p>",
        date: "2026-09-28",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["design", "adobe", "education"],
        popularity: 80,
        published: true,
        dealSourceUrl: "https://adobe.example.com/student",
        dealStart: "2026-01-01",
        dealExpiry: "2026-12-31",
        dealPlatforms: "Windows, macOS, iPadOS",
        dealVerificationDate: "2026-10-01",
        dealInclusions: "All CC apps (Photoshop, Illustrator, Premiere, etc.), 100GB Cloud Storage",
        dealLimitations: "Requires valid .edu email or proof of enrollment.",
        isIllustrative: true
    },
    {
        id: "7",
        slug: "penpot-figma-alternative",
        title: "Penpot: The Open Source Figma Alternative",
        category: "Open Source",
        excerpt: "Designers are migrating to Penpot. Here is why this open-source design tool matters.",
        content: "<p>Since Adobe's attempt to acquire Figma, the community has rallied behind Penpot. Built on web standards (SVG), Penpot ensures you truly own your design files.</p>",
        date: "2026-09-20",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["ui", "ux", "design", "foss"],
        popularity: 82,
        published: true
    },
    {
        id: "8",
        slug: "brave-browser-review",
        title: "Brave Browser Review: Privacy by Default?",
        category: "Reviews",
        excerpt: "Is Brave still the best privacy-focused browser in 2026? Let's test its limits.",
        content: "<p>Brave promises speed and privacy by blocking trackers natively. We benchmarked it against Chrome and Firefox to see if the claims hold up.</p>",
        date: "2026-09-15",
        image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["browser", "privacy"],
        popularity: 70,
        published: true
    },
    {
        id: "9",
        slug: "nordvpn-black-friday-sample",
        title: "NordVPN Black Friday Early Access",
        category: "Deals",
        excerpt: "Secure your internet connection with this illustrative Black Friday deal for NordVPN.",
        content: "<p>VPNs are essential for public Wi-Fi security. This sample deal outlines typical Black Friday savings you might expect.</p>",
        date: "2026-10-22",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["vpn", "privacy", "security"],
        popularity: 91,
        published: true,
        dealSourceUrl: "https://nordvpn.example.com/deal",
        dealStart: "2026-10-20",
        dealExpiry: "2026-11-30",
        dealPlatforms: "All platforms",
        dealVerificationDate: "2026-10-24",
        dealInclusions: "2-year plan + 3 months free, Malware protection",
        dealLimitations: "Only valid on new 2-year subscriptions.",
        isIllustrative: true
    },
    {
        id: "10",
        slug: "linux-mint-23-overview",
        title: "Linux Mint 23 Overview: The Perfect OS?",
        category: "Open Source",
        excerpt: "Linux Mint 23 arrives with immense polish. We explore the Cinnamon desktop updates.",
        content: "<p>Linux Mint continues to be the gateway for Windows users moving to open source. The new release brings better Wayland support and a snappier software manager.</p>",
        date: "2026-09-01",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["linux", "os", "foss"],
        popularity: 65,
        published: true
    },
    {
        id: "11",
        slug: "davinci-resolve-19-review",
        title: "DaVinci Resolve 19 Real-World Review",
        category: "Reviews",
        excerpt: "Blackmagic's latest NLE update brings AI magic. We test it on a real documentary project.",
        content: "<p>DaVinci Resolve Studio 19 integrates Neural Engine AI features that drastically cut down editing time. The voice isolation is particularly mind-blowing.</p>",
        date: "2026-08-25",
        image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["video", "production", "review"],
        popularity: 78,
        published: true
    },
    {
        id: "12",
        slug: "webstorm-anniversary-promo",
        title: "WebStorm 50% Off Anniversary Sale",
        category: "Deals",
        excerpt: "JetBrains is offering a massive discount on WebStorm for their anniversary. (Sample Deal)",
        content: "<p>Elevate your JavaScript development with WebStorm. Grab this illustrative sample deal and enjoy top-tier IDE features.</p>",
        date: "2026-08-15",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["development", "ide", "javascript"],
        popularity: 85,
        published: true,
        dealSourceUrl: "https://jetbrains.example.com/webstorm",
        dealStart: "2026-08-10",
        dealExpiry: "2026-08-31",
        dealPlatforms: "Windows, macOS, Linux",
        dealVerificationDate: "2026-08-15",
        dealInclusions: "1-year personal license",
        dealLimitations: "Not valid for commercial/organization licenses.",
        isIllustrative: true
    }
];

// --- 2. STATE MANAGEMENT ---
let articles = [];
const ARTICLES_KEY = 'linkdit_articles';

function loadArticles() {
    const stored = localStorage.getItem(ARTICLES_KEY);
    if (stored) {
        articles = JSON.parse(stored);
    } else {
        articles = [...defaultArticles];
        saveArticles();
    }
}

function saveArticles() {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
}

function resetDemoData() {
    if(confirm("Are you sure you want to reset all data to the demo defaults?")) {
        articles = [...defaultArticles];
        saveArticles();
        alert("Data reset successfully.");
        window.location.reload();
    }
}

// --- 3. ROUTER & RENDER ENGINE ---
const mainContent = document.getElementById('main-content');
let currentPage = 1;
const POSTS_PER_PAGE = 6;

function handleRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.split('?')[0].replace('#', '');
    const segments = path.split('/').filter(Boolean);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update active nav state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (segments.length === 0) {
        document.querySelector('a[href="#/"]').classList.add('active');
        renderHome();
    } else if (segments[0] === 'category') {
        const cat = decodeURIComponent(segments[1]);
        const navEl = document.querySelector(`a[href="#/category/${cat}"]`);
        if(navEl) navEl.classList.add('active');
        renderCategory(cat);
    } else if (segments[0] === 'post') {
        renderPost(segments[1]);
    } else if (segments[0] === 'admin') {
        renderAdmin();
    } else if (segments[0] === 'search') {
        const query = decodeURIComponent(hash.split('?q=')[1] || '');
        renderSearch(query);
    } else {
        renderStaticPage(segments[0]);
    }

    renderSidebar();
}

// SEO & Metadata updates
function updateMeta(title, description, urlSlug) {
    document.title = `${title} | Linkdit`;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    
    document.getElementById('og-title').setAttribute("content", title);
    document.getElementById('og-desc').setAttribute("content", description);
    
    const canonical = `https://linkdit.example.com/#/${urlSlug}`;
    document.getElementById('canonical-url').setAttribute("href", canonical);
}

function injectJSONLD(data) {
    document.getElementById('json-ld').textContent = JSON.stringify(data);
}

// --- 4. VIEWS ---

// Render List of Articles (Reusable)
function renderArticleList(filteredArticles, title, emptyMessage = "No articles found.") {
    let html = `<div class="page-header"><h1 style="font-size: 2rem;">${title}</h1></div>`;
    
    if (filteredArticles.length === 0) {
        html += `<p>${emptyMessage}</p>`;
        mainContent.innerHTML = html;
        return;
    }

    const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginated = filteredArticles.slice(startIndex, startIndex + POSTS_PER_PAGE);

    html += `<div class="article-grid">`;
    paginated.forEach(art => {
        html += `
            <article class="article-card">
                <div class="card-image-wrap">
                    <span class="category-badge">${art.category}</span>
                    <a href="#/post/${art.slug}" aria-label="Read ${art.title}">
                        <img src="${art.image}" alt="${art.title}" loading="lazy">
                    </a>
                </div>
                <div class="card-content">
                    <h2 class="card-title"><a href="#/post/${art.slug}">${art.title}</a></h2>
                    <p class="card-excerpt">${art.excerpt}</p>
                    <div class="card-meta">
                        <span>${new Date(art.date).toLocaleDateString()}</span>
                        <a href="#/post/${art.slug}" class="read-more">Read More →</a>
                    </div>
                </div>
            </article>
        `;
    });
    html += `</div>`;

    // Pagination
    if (totalPages > 1) {
        html += `<div class="pagination">`;
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="btn ${i === currentPage ? '' : 'btn-outline'}" onclick="changePage(${i})">${i}</button>`;
        }
        html += `</div>`;
    }

    mainContent.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    handleRoute();
}

function renderHome() {
    updateMeta("Home", "Discover premium software, open-source tools, and deals.", "");
    injectJSONLD({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Linkdit",
        "url": "https://linkdit.example.com/"
    });
    
    const published = articles.filter(a => a.published).sort((a,b) => new Date(b.date) - new Date(a.date));
    renderArticleList(published, "Latest Articles");
}

function renderCategory(category) {
    updateMeta(`${category} Software`, `Browse our latest ${category} articles and finds.`, `category/${category}`);
    currentPage = 1; // reset on new view
    const filtered = articles.filter(a => a.published && a.category === category).sort((a,b) => new Date(b.date) - new Date(a.date));
    renderArticleList(filtered, `${category}`);
}

function renderSearch(query) {
    updateMeta(`Search results for "${query}"`, `Search results for ${query} on Linkdit.`, `search?q=${query}`);
    currentPage = 1;
    const q = query.toLowerCase();
    const filtered = articles.filter(a => a.published && (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.content.toLowerCase().includes(q)));
    renderArticleList(filtered, `Search Results for "${query}"`);
}

function renderPost(slug) {
    const post = articles.find(a => a.slug === slug);
    if (!post) {
        mainContent.innerHTML = `<h1>404 - Article Not Found</h1><p>The article you are looking for does not exist.</p>`;
        return;
    }

    updateMeta(post.title, post.excerpt, `post/${slug}`);
    document.getElementById('og-image').setAttribute("content", post.image);
    
    injectJSONLD({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.date,
        "description": post.excerpt
    });

    let dealHtml = '';
    if (post.category === 'Deals') {
        dealHtml = `
            <div class="deal-box">
                <h3>Deal Details</h3>
                <ul>
                    <li><strong>Status:</strong> ${post.isIllustrative ? '<span class="deal-disclaimer">Illustrative Sample Deal (Not Verified)</span>' : 'Verified'}</li>
                    <li><strong>Source:</strong> <a href="${post.dealSourceUrl || '#'}" target="_blank" rel="noopener nofollow">Official Offer Link</a></li>
                    <li><strong>Validity:</strong> ${post.dealStart || 'N/A'} to ${post.dealExpiry || 'N/A'}</li>
                    <li><strong>Platforms:</strong> ${post.dealPlatforms || 'N/A'}</li>
                    <li><strong>Inclusions:</strong> ${post.dealInclusions || 'N/A'}</li>
                    <li><strong>Limitations:</strong> ${post.dealLimitations || 'N/A'}</li>
                </ul>
                <p class="muted text-sm">Last verified on: ${post.dealVerificationDate || 'N/A'}</p>
            </div>
        `;
    }

    const tagsHtml = post.tags ? post.tags.map(t => `<span class="tag">#${t}</span>`).join('') : '';

    mainContent.innerHTML = `
        <article class="single-post">
            <header class="single-post-header">
                <span class="category-badge" style="position:static; display:inline-block; margin-bottom:15px;">${post.category}</span>
                <h1 class="single-post-title">${post.title}</h1>
                <div class="single-post-meta">
                    <span>📅 ${new Date(post.date).toLocaleDateString()}</span>
                </div>
            </header>
            <img src="${post.image}" alt="${post.title}" class="single-post-image">
            <div class="single-post-content">
                ${post.content}
                ${dealHtml}
            </div>
            <div class="tags">
                ${tagsHtml}
            </div>
        </article>
    `;
}

// Static Pages
const staticPages = {
    'about': { title: 'About Linkdit', content: '<p>Linkdit is a premium software discovery blog dedicated to helping creators, developers, and businesses find the perfect tools. We curate open-source alternatives, deeply review industry-standard software, and hunt down verified lifetime deals.</p>' },
    'contact': { title: 'Contact Us', content: '<p>Got a software suggestion or a deal tip? Reach out to us.</p><form id="contact-form"><div class="form-group"><label>Name</label><input type="text" class="form-control" required></div><div class="form-group"><label>Email</label><input type="email" class="form-control" required></div><div class="form-group"><label>Message</label><textarea class="form-control" rows="5" required></textarea></div><button type="submit" class="btn">Send Message</button></form><p id="contact-msg" class="form-msg"></p>' },
    'privacy': { title: 'Privacy Policy', content: '<p>Your privacy is important to us. We do not track you unnecessarily. We use local storage for themes and settings. We serve ads through AdSense which may use cookies to personalize content.</p>' },
    'terms': { title: 'Terms of Service', content: '<p>By using Linkdit, you agree to our terms. Content is for informational purposes. Deals and prices are subject to change by the respective software vendors.</p>' },
    'disclaimer': { title: 'Disclaimer', content: '<p>Information provided on Linkdit is "as is". We make no warranties regarding the accuracy of third-party software details. Deal validations are accurate as of the stated verification date.</p>' },
    'affiliate': { title: 'Affiliate Disclosure', content: '<p>Some links on this site may be affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This helps keep Linkdit running.</p>' }
};

function renderStaticPage(pageSlug) {
    const page = staticPages[pageSlug];
    if (!page) {
        mainContent.innerHTML = `<h1>404 - Page Not Found</h1>`;
        return;
    }
    updateMeta(page.title, `Read the ${page.title} for Linkdit.`, pageSlug);
    mainContent.innerHTML = `<div class="page-header"><h1 style="font-size: 2rem;">${page.title}</h1></div><div class="single-post-content">${page.content}</div>`;
    
    // Attach fake submit handler if contact page
    if(pageSlug === 'contact') {
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('contact-msg').textContent = "Thank you for reaching out! We will get back to you soon.";
            e.target.reset();
        });
    }
}

// Sidebar Popular Posts
function renderSidebar() {
    const list = document.getElementById('popular-posts-list');
    const popular = articles.filter(a => a.published).sort((a,b) => b.popularity - a.popularity).slice(0, 5);
    
    list.innerHTML = popular.map(p => `
        <li>
            <a href="#/post/${p.slug}">${p.title}</a>
            <span class="text-sm muted">${p.category}</span>
        </li>
    `).join('');
}

// --- 5. ADMIN PANEL ---
function renderAdmin() {
    updateMeta("Admin Dashboard", "Manage Linkdit Articles", "admin");
    
    let html = `
        <div class="page-header admin-header">
            <h1 style="font-size: 2rem;">Admin Dashboard</h1>
            <div class="admin-actions">
                <button class="btn" onclick="openAdminModal()">+ New Article</button>
                <button class="btn btn-outline" onclick="resetDemoData()" style="border-color: var(--danger); color: var(--danger);">Reset Demo Data</button>
            </div>
        </div>
        
        <div style="background: rgba(239,68,68,0.1); border-left: 4px solid var(--danger); padding: 15px; margin-bottom: 20px; border-radius: 4px;">
            <strong>Note:</strong> This is a local demo admin panel stored in your browser's LocalStorage. It does not possess secure multi-user authentication, nor does it connect to a shared production database. Do not use this configuration to protect real production data.
        </div>

        <div style="overflow-x:auto;">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;

    articles.forEach(art => {
        html += `
            <tr>
                <td><strong>${art.title}</strong><br><span class="text-sm muted">/${art.slug}</span></td>
                <td>${art.category}</td>
                <td>${art.date}</td>
                <td>${art.published ? '<span style="color:var(--success)">Published</span>' : '<span style="color:var(--danger)">Draft</span>'}</td>
                <td>
                    <button class="btn text-sm" onclick="editArticle('${art.id}')">Edit</button>
                    <button class="btn btn-outline text-sm" style="border-color: var(--danger); color: var(--danger);" onclick="deleteArticle('${art.id}')">Delete</button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;

    // Modal Template
    html += `
        <div class="modal" id="admin-modal">
            <div class="modal-content">
                <button class="close-modal" onclick="closeAdminModal()">&times;</button>
                <h2 id="modal-title" style="margin-bottom:20px;">Add New Article</h2>
                <form id="admin-form">
                    <input type="hidden" id="art-id">
                    
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" id="art-title" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Slug</label>
                        <input type="text" id="art-slug" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Category</label>
                        <select id="art-category" class="form-control" required onchange="toggleDealFields()">
                            <option value="Deals">Deals</option>
                            <option value="Open Source">Open Source</option>
                            <option value="Reviews">Reviews</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Image URL</label>
                        <input type="url" id="art-image" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Excerpt</label>
                        <textarea id="art-excerpt" class="form-control" rows="3" required></textarea>
                    </div>

                    <div class="form-group">
                        <label>Content (HTML)</label>
                        <textarea id="art-content" class="form-control" rows="8" required></textarea>
                    </div>

                    <!-- Deal Specific Fields -->
                    <div id="deal-fields" style="display:none; background: rgba(0,0,0,0.1); padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                        <h3 style="margin-bottom:10px; font-size:1.1rem; color:var(--accent);">Deal Information</h3>
                        <div class="form-group"><label>Source URL</label><input type="url" id="d-url" class="form-control"></div>
                        <div style="display:flex; gap:10px;">
                            <div class="form-group" style="flex:1"><label>Start Date</label><input type="date" id="d-start" class="form-control"></div>
                            <div class="form-group" style="flex:1"><label>Expiry Date</label><input type="date" id="d-expiry" class="form-control"></div>
                        </div>
                        <div class="form-group"><label>Platforms</label><input type="text" id="d-platforms" class="form-control"></div>
                        <div class="form-group"><label>Inclusions</label><input type="text" id="d-inclusions" class="form-control"></div>
                        <div class="form-group"><label>Limitations</label><input type="text" id="d-limitations" class="form-control"></div>
                        <div class="form-group">
                            <label style="display:flex; align-items:center; gap:10px;">
                                <input type="checkbox" id="d-illustrative"> Mark as Illustrative Sample Deal (Unverified)
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Tags (comma separated)</label>
                        <input type="text" id="art-tags" class="form-control">
                    </div>

                    <div class="form-group">
                        <label style="display:flex; align-items:center; gap:10px;">
                            <input type="checkbox" id="art-published" checked> Published
                        </label>
                    </div>

                    <button type="submit" class="btn" style="width:100%">Save Article</button>
                </form>
            </div>
        </div>
    `;

    mainContent.innerHTML = html;

    document.getElementById('admin-form').addEventListener('submit', saveAdminForm);
}

window.toggleDealFields = function() {
    const cat = document.getElementById('art-category').value;
    document.getElementById('deal-fields').style.display = cat === 'Deals' ? 'block' : 'none';
};

window.openAdminModal = function() {
    document.getElementById('admin-form').reset();
    document.getElementById('art-id').value = '';
    document.getElementById('modal-title').textContent = 'Add New Article';
    document.getElementById('admin-modal').classList.add('active');
    toggleDealFields();
};

window.closeAdminModal = function() {
    document.getElementById('admin-modal').classList.remove('active');
};

window.editArticle = function(id) {
    const art = articles.find(a => a.id === id);
    if(!art) return;
    
    document.getElementById('art-id').value = art.id;
    document.getElementById('art-title').value = art.title;
    document.getElementById('art-slug').value = art.slug;
    document.getElementById('art-category').value = art.category;
    document.getElementById('art-image').value = art.image;
    document.getElementById('art-excerpt').value = art.excerpt;
    document.getElementById('art-content').value = art.content;
    document.getElementById('art-tags').value = art.tags ? art.tags.join(', ') : '';
    document.getElementById('art-published').checked = art.published;

    if(art.category === 'Deals') {
        document.getElementById('d-url').value = art.dealSourceUrl || '';
        document.getElementById('d-start').value = art.dealStart || '';
        document.getElementById('d-expiry').value = art.dealExpiry || '';
        document.getElementById('d-platforms').value = art.dealPlatforms || '';
        document.getElementById('d-inclusions').value = art.dealInclusions || '';
        document.getElementById('d-limitations').value = art.dealLimitations || '';
        document.getElementById('d-illustrative').checked = art.isIllustrative || false;
    }

    document.getElementById('modal-title').textContent = 'Edit Article';
    toggleDealFields();
    document.getElementById('admin-modal').classList.add('active');
};

window.deleteArticle = function(id) {
    if(confirm("Delete this article?")) {
        articles = articles.filter(a => a.id !== id);
        saveArticles();
        renderAdmin();
    }
};

function saveAdminForm(e) {
    e.preventDefault();
    const id = document.getElementById('art-id').value || Date.now().toString();
    const category = document.getElementById('art-category').value;
    
    const newArt = {
        id: id,
        title: document.getElementById('art-title').value,
        slug: document.getElementById('art-slug').value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        category: category,
        image: document.getElementById('art-image').value,
        excerpt: document.getElementById('art-excerpt').value,
        content: document.getElementById('art-content').value,
        tags: document.getElementById('art-tags').value.split(',').map(t => t.trim()).filter(Boolean),
        published: document.getElementById('art-published').checked,
        date: new Date().toISOString().split('T')[0],
        popularity: 0 // default for new
    };

    if(category === 'Deals') {
        newArt.dealSourceUrl = document.getElementById('d-url').value;
        newArt.dealStart = document.getElementById('d-start').value;
        newArt.dealExpiry = document.getElementById('d-expiry').value;
        newArt.dealPlatforms = document.getElementById('d-platforms').value;
        newArt.dealInclusions = document.getElementById('d-inclusions').value;
        newArt.dealLimitations = document.getElementById('d-limitations').value;
        newArt.isIllustrative = document.getElementById('d-illustrative').checked;
        newArt.dealVerificationDate = new Date().toISOString().split('T')[0];
    }

    const existingIndex = articles.findIndex(a => a.id === id);
    if(existingIndex > -1) {
        // preserve original date and popularity if editing
        newArt.date = articles[existingIndex].date;
        newArt.popularity = articles[existingIndex].popularity;
        articles[existingIndex] = newArt;
    } else {
        articles.push(newArt);
    }

    saveArticles();
    closeAdminModal();
    renderAdmin();
}


// --- 6. UI INTERACTIONS ---

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function initTheme() {
    const savedTheme = localStorage.getItem('linkdit_theme');
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('linkdit_theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    const isActive = mainNav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
});

// Close mobile menu on link click
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Search Form
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encodeURIComponent(searchInput.value.trim());
    if (query) {
        window.location.hash = `#/search?q=${query}`;
        mainNav.classList.remove('active'); // Close mobile menu if open
    }
});

// Newsletter Form Fake Submit
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('newsletter-msg').textContent = "Thanks for subscribing!";
    newsletterForm.reset();
});

// --- 7. INITIALIZATION ---
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadArticles();
    handleRoute();
});
