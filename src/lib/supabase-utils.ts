import { supabase } from './supabase'

// Common Supabase operations for the travel website

// Quote/Inquiry operations
export interface QuoteInquiry {
  id?: number
  first_name: string
  last_name: string
  email: string
  phone?: string
  inquiry_type?: string
  destination?: string
  travel_dates?: string
  budget?: string
  travelers?: string
  message: string
  package_name?: string
  created_at?: string
}

export const quoteOperations = {
  // Submit a new quote inquiry
  async submitQuote(inquiry: Omit<QuoteInquiry, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('quote_inquiries')
      .insert([inquiry])
      .select()
    
    if (error) {
      console.error('Error submitting quote:', error)
      throw error
    }
    
    return data
  },

  // Get all quote inquiries (admin only)
  async getAllQuotes() {
    const { data, error } = await supabase
      .from('quote_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching quotes:', error)
      throw error
    }
    
    return data
  }
}

// Package operations
export interface Package {
  id?: number
  title: string
  subtitle: string
  description: string
  duration: string
  group_size: string
  destinations: string[]
  features: string[]
  highlights: string[]
  is_popular: boolean
  slug: string
  created_at?: string
  updated_at?: string
}

export const packageOperations = {
  // Get all packages
  async getAllPackages() {
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching packages:', error)
      throw error
    }
    
    return data
  },

  // Get package by slug
  async getPackageBySlug(slug: string) {
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Error fetching package:', error)
      throw error
    }
    
    return data
  },

  // Create new package (admin only)
  async createPackage(packageData: Omit<Package, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('packages')
      .insert([packageData])
      .select()
    
    if (error) {
      console.error('Error creating package:', error)
      throw error
    }
    
    return data
  }
}

// Destination operations
export interface Destination {
  id?: number
  name: string
  title: string
  subtitle: string
  description: string
  duration: string
  best_time: string
  rating: number
  highlights: string[]
  slug: string
  created_at?: string
  updated_at?: string
}

export const destinationOperations = {
  // Get all destinations
  async getAllDestinations() {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching destinations:', error)
      throw error
    }
    
    return data
  },

  // Get destination by slug
  async getDestinationBySlug(slug: string) {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Error fetching destination:', error)
      throw error
    }
    
    return data
  }
}

// Newsletter subscription
export interface NewsletterSubscription {
  id?: number
  email: string
  created_at?: string
}

export const newsletterOperations = {
  // Subscribe to newsletter
  async subscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])
      .select()
    
    if (error) {
      console.error('Error subscribing to newsletter:', error)
      throw error
    }
    
    return data
  }
}
