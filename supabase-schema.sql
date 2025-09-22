-- Khavish World Database Schema
-- Run these commands in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create quote_inquiries table
CREATE TABLE IF NOT EXISTS quote_inquiries (
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

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
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
CREATE TABLE IF NOT EXISTS destinations (
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

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  text TEXT NOT NULL,
  trip TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quote_inquiries_created_at ON quote_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_inquiries_email ON quote_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_packages_slug ON packages(slug);
CREATE INDEX IF NOT EXISTS idx_packages_is_popular ON packages(is_popular);
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_team_members_order ON team_members(order_index);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE quote_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Allow anyone to insert quote inquiries
CREATE POLICY "Allow public insert on quote_inquiries" ON quote_inquiries
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read packages and destinations
CREATE POLICY "Allow public read on packages" ON packages
  FOR SELECT USING (true);

CREATE POLICY "Allow public read on destinations" ON destinations
  FOR SELECT USING (true);

-- Allow anyone to subscribe to newsletter
CREATE POLICY "Allow public insert on newsletter_subscriptions" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read team members and testimonials
CREATE POLICY "Allow public read on team_members" ON team_members
  FOR SELECT USING (true);

CREATE POLICY "Allow public read on testimonials" ON testimonials
  FOR SELECT USING (true);

-- Insert sample data
INSERT INTO packages (title, subtitle, description, duration, group_size, destinations, features, highlights, is_popular, slug) VALUES
('7-Day Japan Discovery Tour', 'Tokyo, Fuji, Kyoto, Osaka', 'Explore the best of Japan in this immersive 7-day journey across Tokyo, Mt. Fuji, Kyoto, Nara, and Osaka.', '7 Days', 'Small Group', ARRAY['Tokyo', 'Kyoto', 'Osaka', 'Mt. Fuji'], ARRAY['Private Transfers', 'Bullet Trains', 'Entry Tickets', 'Tourist Visa'], ARRAY['Tokyo City Tour: Meiji Shrine, Asakusa, Shibuya', 'Full Day at Disneyland or DisneySea', 'Mt. Fuji 5th Station + Hakone Ropeway & Lake Ashi Cruise'], true, 'japan-discovery'),
('European Grand Tour', '14 Days of Luxury', 'Experience the best of Europe with our premium 14-day tour covering Paris, Rome, Barcelona, and Amsterdam.', '14 Days', 'Max 12', ARRAY['Paris', 'Rome', 'Barcelona', 'Amsterdam'], ARRAY['5-Star Hotels', 'Private Guide', 'All Meals', 'Airport Transfers'], ARRAY['Paris: Eiffel Tower, Louvre Museum, Seine River Cruise', 'Rome: Colosseum, Vatican City, Trevi Fountain', 'Barcelona: Sagrada Familia, Park Güell, Gothic Quarter'], false, 'european-grand-tour'),
('Caribbean Paradise', '7 Days of Relaxation', 'Unwind in the pristine beaches and crystal-clear waters of the Caribbean islands.', '7 Days', 'Max 8', ARRAY['Barbados', 'St. Lucia', 'Antigua'], ARRAY['Beachfront Villas', 'Water Sports', 'Sunset Cruises', 'Spa Services'], ARRAY['Luxury beachfront accommodations', 'Water sports and activities', 'Sunset cruises and romantic dinners', 'Spa treatments and relaxation'], true, 'caribbean-paradise');

INSERT INTO destinations (name, title, subtitle, description, duration, best_time, rating, highlights, slug) VALUES
('Paris, France', 'Paris, France', 'The City of Light', 'The City of Light awaits with its romantic charm, world-class cuisine, and iconic landmarks.', '7 Days', 'April - October', 4.9, ARRAY['Eiffel Tower - Iconic iron lattice tower and symbol of Paris', 'Louvre Museum - World''s largest art museum and historic monument', 'Notre-Dame Cathedral - Gothic masterpiece with stunning architecture'], 'paris-france'),
('Tokyo, Japan', 'Tokyo, Japan', 'Where Tradition Meets Innovation', 'Experience the perfect blend of tradition and modernity in Japan''s vibrant capital.', '10 Days', 'March - May, September - November', 4.8, ARRAY['Senso-ji Temple - Tokyo''s oldest temple in historic Asakusa', 'Tokyo Skytree - Modern tower with panoramic city views', 'Shibuya Crossing - World''s busiest pedestrian crossing'], 'tokyo-japan');

INSERT INTO team_members (name, role, bio, order_index) VALUES
('Bindiya Juneja', 'Founder & CEO', 'With over 7 years in luxury travel, Bindiya founded Khavish World to create extraordinary journeys that inspire and delight.', 1),
('Vaibhav Juneja', 'Head of Operations', 'Vaibhav ensures every detail of your journey is flawlessly executed, from planning to execution.', 2),
('Ishan Kalra', 'Travel Curator', 'Ishan handpicks the most exceptional destinations and experiences to create unforgettable memories.', 3),
('Saksham Bhutani', 'Legal Advisor', 'Saksham provides expert legal guidance ensuring all travel arrangements comply with international regulations and protect our clients'' interests.', 4),
('Himanshu Sharma', 'Customer Experience', 'Himanshu leads our customer service team, ensuring every client feels valued and supported throughout their journey.', 5),
('Sahil', 'Marketing Lead', 'Sahil drives our marketing initiatives, connecting travelers with their dream destinations through innovative campaigns.', 6),
('Abhishek Yadav', 'Tech Lead', 'Abhishek leads our technology initiatives, ensuring our digital platforms provide seamless experiences for our travelers.', 7);

INSERT INTO testimonials (name, location, text, trip, rating, is_featured, order_index) VALUES
('Sarah Johnson', 'New York, USA', 'Khavish World exceeded all our expectations! The European Grand Tour was absolutely magical. Every detail was perfectly planned, and our guide was exceptional. We can''t wait to book our next adventure with them.', 'European Grand Tour', 5, true, 1),
('Michael Chen', 'San Francisco, USA', 'The level of service and attention to detail is unmatched. Our Asian Adventure was flawless from start to finish. The luxury accommodations and cultural experiences were beyond our wildest dreams.', 'Asian Adventure', 5, true, 2),
('Emily Rodriguez', 'Miami, USA', 'Khavish World made our honeymoon absolutely perfect. The Caribbean Paradise package was everything we hoped for and more. The private beachfront villa and sunset cruises were unforgettable.', 'Caribbean Paradise', 5, true, 3);




