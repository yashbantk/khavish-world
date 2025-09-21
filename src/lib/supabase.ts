import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have real environment variables
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if we're using placeholder values (for build time)
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
}

// Database types (you can generate these from your Supabase schema)
export interface Database {
  public: {
    Tables: Record<string, unknown> // eslint-disable-line @typescript-eslint/no-empty-object-type
  }
}
