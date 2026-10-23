# Linkdit CMS (Secure Upgrade)

This repository contains the upgraded, fully secure version of Linkdit running on Vanilla JS, Vercel, and Supabase.

## Security Features
- **Zero Dummy Data:** Real database-driven content. Empty states rendered cleanly.
- **Row Level Security (RLS):** Database operations are blocked natively for public users.
- **Vercel API Routes:** Supabase keys are passed safely without breaking static builds.
- **DOMPurify Protection:** All HTML article content is sanitized before DOM injection to prevent XSS.

## Deployment Instructions

### 1. Setup Supabase
1. Create a new Supabase project.
2. Go to the **SQL Editor** and run the contents of `schema.sql`.
3. Create your admin user in the Supabase **Authentication -> Users** dashboard.
4. Copy the `User ID (UUID)` of that new user.
5. In the SQL Editor, run: `INSERT INTO admin_roles (user_id) VALUES ('paste-uuid-here');`

### 2. Vercel Deployment
1. Import the repository into Vercel.
2. In the Vercel project **Settings -> Environment Variables**, add:
   - `SUPABASE_URL` (Your Supabase Project URL)
   - `SUPABASE_ANON_KEY` (Your public anon key)
   *(Never add the service_role key to Vercel!)*
3. Deploy.

### 3. Usage
Navigate to `https://your-domain.com/#/admin/login` and sign in with the credentials you created in step 1 to access the secure dashboard.
