-- Fix Row Level Security Policy for quote_inquiries table
-- Copy and paste this into your Supabase SQL Editor

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert on quote_inquiries" ON public.quote_inquiries;

-- Create a new policy that allows anyone to insert
CREATE POLICY "Enable insert for all users" ON public.quote_inquiries
    FOR INSERT 
    WITH CHECK (true);

-- Alternative: If the above doesn't work, try this more permissive policy
-- CREATE POLICY "Allow all operations on quote_inquiries" ON public.quote_inquiries
--     FOR ALL 
--     USING (true) 
--     WITH CHECK (true);




