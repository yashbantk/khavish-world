# 🚀 Step-by-Step Supabase Setup

## Quick Fix - Create Tables One by One

### Step 1: Go to Supabase Dashboard
1. Open: https://supabase.com/dashboard
2. Click on your project: `vxwdloojmohxxykqroqx`

### Step 2: Open SQL Editor
1. Click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**

### Step 3: Create the Quote Inquiries Table (Copy & Paste This)

```sql
-- Create quote_inquiries table
CREATE TABLE public.quote_inquiries (
    id BIGSERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    inquiry_type TEXT,
    destination TEXT,
    travel_dates DATE,
    budget TEXT,
    travelers TEXT,
    message TEXT NOT NULL,
    package_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.quote_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote inquiries
CREATE POLICY "Allow public insert on quote_inquiries" ON public.quote_inquiries
    FOR INSERT WITH CHECK (true);
```

### Step 4: Click "Run" Button
After pasting the above SQL, click the **"Run"** button.

### Step 5: Test Your Quote Form
1. Go back to your website
2. Click "Get Quote" on any package
3. Fill out the form and submit
4. Check if it works!

### Step 6: Verify Table Created
1. Go to **"Table Editor"** in Supabase
2. You should see `quote_inquiries` table
3. Check if your form submission appears there

## If You Want All Tables (Optional)

After the quote form works, you can create the other tables by running this SQL:

```sql
-- Create packages table
CREATE TABLE public.packages (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    duration TEXT NOT NULL,
    group_size TEXT NOT NULL,
    destinations TEXT[] NOT NULL,
    features TEXT[] NOT NULL,
    highlights TEXT[] NOT NULL,
    is_popular BOOLEAN DEFAULT FALSE,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create destinations table
CREATE TABLE public.destinations (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    duration TEXT NOT NULL,
    best_time TEXT NOT NULL,
    rating DECIMAL(2,1) DEFAULT 0.0,
    highlights TEXT[] NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for other tables
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read on packages" ON public.packages FOR SELECT USING (true);
CREATE POLICY "Allow public read on destinations" ON public.destinations FOR SELECT USING (true);
```

## Troubleshooting

If you get any errors:
1. Make sure you're in the correct Supabase project
2. Check that you copied the SQL exactly as shown
3. Try running just the first table creation SQL first
4. Check the Supabase logs for any permission issues
