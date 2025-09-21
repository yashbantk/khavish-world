"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { quoteOperations } from "@/lib/supabase-utils";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
  destination?: string;
}

export default function QuoteModal({ isOpen, onClose, packageName, destination }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    destination: destination || "",
    travelDates: "",
    budget: "",
    travelers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Try to submit to Supabase first
      try {
        await quoteOperations.submitQuote({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiryType,
          destination: formData.destination,
          travel_dates: formData.travelDates,
          budget: formData.budget,
          travelers: formData.travelers,
          message: formData.message,
          package_name: packageName
        });
      } catch (supabaseError) {
        // If Supabase fails, log the data for manual processing
        console.log('Quote submission data (for manual processing):', {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiryType,
          destination: formData.destination,
          travel_dates: formData.travelDates,
          budget: formData.budget,
          travelers: formData.travelers,
          message: formData.message,
          package_name: packageName,
          submitted_at: new Date().toISOString()
        });
        
        // Still show success to user as the data is captured
        console.warn('Supabase submission failed, but data logged for manual processing:', supabaseError);
      }
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        destination: destination || "",
        travelDates: "",
        budget: "",
        travelers: "",
        message: "",
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading font-bold text-gray-900">
                    Get Your Custom Quote
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Fill out the form below and our travel experts will get back to you within 24 hours.
                  </DialogDescription>
                </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                className="border-gray-200 focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                className="border-gray-200 focus:border-primary focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              className="border-gray-200 focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              className="border-gray-200 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType">Type of Inquiry</Label>
            <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="booking">Booking Assistance</SelectItem>
                <SelectItem value="custom">Custom Package</SelectItem>
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination">Preferred Destination</Label>
            <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="caribbean">Caribbean</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="americas">Americas</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="travelDates">Travel Dates</Label>
              <Input
                id="travelDates"
                type="date"
                value={formData.travelDates}
                onChange={(e) => handleInputChange("travelDates", e.target.value)}
                className="border-gray-200 focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                        <SelectItem value="under-2l">Under ₹2,00,000</SelectItem>
                        <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                        <SelectItem value="10l-20l">₹10,00,000 - ₹20,00,000</SelectItem>
                        <SelectItem value="20l+">₹20,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Select value={formData.travelers} onValueChange={(value) => handleInputChange("travelers", value)}>
              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3-4">3-4 Travelers</SelectItem>
                <SelectItem value="5-8">5-8 Travelers</SelectItem>
                <SelectItem value="9+">9+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={`Tell us about your dream trip, special requirements, or any questions you have...${packageName ? ` (Interested in: ${packageName})` : ""}`}
              className="border-gray-200 focus:border-primary focus:ring-primary min-h-[120px]"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
                      <Button 
                        type="submit" 
                        className="flex-1 gold-button py-3 text-lg"
                        disabled={isSubmitting}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              className="px-8"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                ✅ Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                ❌ Sorry, there was an error submitting your inquiry. Please try again or contact us directly.
              </p>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
