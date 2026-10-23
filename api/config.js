export default function handler(req, res) {
  // Only expose the public URL and public ANON key. 
  // NEVER expose the SERVICE_ROLE key here.
  res.status(200).json({
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY
  });
}
