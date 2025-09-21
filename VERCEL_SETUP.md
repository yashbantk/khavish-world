# 🚀 Vercel Deployment Setup

## Environment Variables Setup

To deploy your Khavish World website to Vercel, you need to add your Supabase environment variables to Vercel.

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Select your project (or create a new one)

### Step 2: Add Environment Variables
1. Go to **Settings** → **Environment Variables**
2. Add these two variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://vxwdloojmohxxykqroqx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4d2Rsb29qbW9oeHh5a3Fyb3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NDY0MTUsImV4cCI6MjA3NDAyMjQxNX0.fubR_denmtxSJRRxqeRygAr2bz0n9GxJGQosb_CjsUc
```

### Step 3: Deploy
1. Go to **Deployments** tab
2. Click **Redeploy** on your latest deployment
3. Or push new changes to trigger a new deployment

## What I Fixed

- ✅ **Build Error**: Added fallback values for missing environment variables
- ✅ **Graceful Degradation**: App works even without Supabase configured
- ✅ **Development**: Still works locally with your `.env.local` file
- ✅ **Production**: Will work on Vercel once environment variables are added

## Testing

After adding environment variables to Vercel:
1. Your quote form will work on the live site
2. All submissions will be saved to Supabase
3. No more build errors during deployment

## Alternative: Deploy Without Supabase

If you want to deploy without Supabase for now:
- The app will still work
- Quote forms will log data to console
- You can add Supabase later
