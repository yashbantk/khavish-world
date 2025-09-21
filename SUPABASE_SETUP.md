# Supabase Database Setup Instructions

## Quick Setup

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project: `vxwdloojmohxxykqroqx`

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Database Schema**
   - Copy the entire content from `supabase-schema.sql`
   - Paste it into the SQL Editor
   - Click "Run" to execute

4. **Verify Tables Created**
   - Go to "Table Editor" in the left sidebar
   - You should see these tables:
     - `quote_inquiries`
     - `packages`
     - `destinations`
     - `newsletter_subscriptions`
     - `team_members`
     - `testimonials`

## What This Fixes

- ✅ Quote form submissions will be saved to database
- ✅ No more console errors when submitting quotes
- ✅ Data is properly stored and can be viewed in Supabase dashboard
- ✅ Sample data is pre-populated for testing

## Testing

After running the SQL:
1. Go to your website
2. Click "Get Quote" on any package
3. Fill out and submit the form
4. Check the `quote_inquiries` table in Supabase to see the submission

## Troubleshooting

If you still get errors:
1. Check that the table names match exactly
2. Verify your Supabase project URL and API key in `.env.local`
3. Make sure Row Level Security policies are enabled
4. Check the Supabase logs for any permission issues
