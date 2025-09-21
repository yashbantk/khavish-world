-- Complete fix for Row Level Security Policy
-- Copy and paste this entire script into your Supabase SQL Editor

-- First, let's check if RLS is enabled and disable it temporarily
ALTER TABLE public.quote_inquiries DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow public insert on quote_inquiries" ON public.quote_inquiries;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.quote_inquiries;
DROP POLICY IF EXISTS "Allow all operations on quote_inquiries" ON public.quote_inquiries;

-- Re-enable RLS
ALTER TABLE public.quote_inquiries ENABLE ROW LEVEL SECURITY;

-- Create a very permissive policy for testing
CREATE POLICY "Allow all operations on quote_inquiries" ON public.quote_inquiries
    FOR ALL 
    USING (true) 
    WITH CHECK (true);

-- Alternative: If you want to be more specific, use this instead:
-- CREATE POLICY "Allow insert for anonymous users" ON public.quote_inquiries
--     FOR INSERT 
--     TO anon
--     WITH CHECK (true);

-- Grant necessary permissions
GRANT ALL ON public.quote_inquiries TO anon;
GRANT ALL ON public.quote_inquiries TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
