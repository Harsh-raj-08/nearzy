import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    `Missing NEXT_PUBLIC_SUPABASE_URL environment variable. Current value: ${supabaseUrl}`
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    `Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. Current value: ${supabaseAnonKey}`
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
