import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Use service role key for server-side uploads (more permissions)
// Fall back to anon key if service role is not set
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables are not set. Image upload will not work.');
  if (!supabaseUrl) console.warn('Missing: NEXT_PUBLIC_SUPABASE_URL');
  if (!supabaseKey) console.warn('Missing: NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY');
}

// Server-side Supabase client
// Using service role key if available for better upload permissions
export const supabase = createClient(supabaseUrl, supabaseKey);

