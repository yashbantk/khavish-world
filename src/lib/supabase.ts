import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (you can generate these from your Supabase schema)
export interface Database {
  public: {
    Tables: Record<string, unknown> // eslint-disable-line @typescript-eslint/no-empty-object-type
  }
}
