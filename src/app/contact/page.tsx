"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Calendar, Users } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our travel experts",
    details: "+1 (555) 123-4567",
    subDetails: "24/7 Support Available",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your travel requirements",
    details: "info@khavishworld.com",
    subDetails: "Response within 24 hours",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us instantly",
    details: "+1 (555) 123-4567",
    subDetails: "Instant messaging support",
    action: "Start Chat",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our office",
    details: "123 Travel Street, City, Country",
    subDetails: "Mon-Fri: 9AM-6PM",
    action: "Get Directions",
  },
];

const offices = [
  {
    city: "New York",
    address: "123 Travel Street, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@khavishworld.com",
    hours: "Mon-Fri: 9AM-6PM EST",
  },
  {
    city: "London",
    address: "456 Travel Lane, London, UK SW1A 1AA",
    phone: "+44 20 7123 4567",
    email: "london@khavishworld.com",
    hours: "Mon-Fri: 9AM-6PM GMT",
  },
  {
    city: "Dubai",
    address: "789 Travel Boulevard, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@khavishworld.com",
    hours: "Sun-Thu: 9AM-6PM GST",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Get in
              <span className="block text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Ready to plan your next adventure? Our travel experts are here to help you create the perfect journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with our travel experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="premium-card text-center group hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {method.description}
                        </p>
                        <p className="text-primary font-semibold mb-1">
                          {method.details}
                        </p>
                        <p className="text-gray-500 text-xs mb-4">
                          {method.subDetails}
                        </p>
                        <Button className="gold-button w-full">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                        Send Us a Message
                      </h3>
                      <p className="text-gray-600">
                        Fill out the form below and our travel experts will get back to you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            className="border-gray-200 focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            className="border-gray-200 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          className="border-gray-200 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="border-gray-200 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Type of Inquiry</Label>
                        <Select>
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
                        <Select>
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
                            className="border-gray-200 focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select>
                            <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-5k">Under $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                              <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                              <SelectItem value="50k+">$50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your dream trip, special requirements, or any questions you have..."
                          className="border-gray-200 focus:border-primary focus:ring-primary min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" className="w-full gold-button py-3 text-lg">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact Info */}
              <Card className="premium-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    Quick Contact Info
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">+1 (555) 123-4567</div>
                        <div className="text-sm text-gray-500">24/7 Support</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">info@khavishworld.com</div>
                        <div className="text-sm text-gray-500">General Inquiries</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">WhatsApp Available</div>
                        <div className="text-sm text-gray-500">Instant Chat Support</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="premium-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    Office Hours
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">Monday - Friday</div>
                        <div className="text-sm text-gray-500">9:00 AM - 6:00 PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">Saturday</div>
                        <div className="text-sm text-gray-500">10:00 AM - 4:00 PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-gray-900">Sunday</div>
                        <div className="text-sm text-gray-500">Emergency Support Only</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Global Offices */}
              <Card className="premium-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    Our Global Offices
                  </h4>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={office.city} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h5 className="font-semibold text-gray-900 mb-2">{office.city}</h5>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{office.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and booking process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="premium-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">How far in advance should I book?</h4>
                <p className="text-gray-600 text-sm">
                  We recommend booking 3-6 months in advance for the best availability and rates, especially for peak seasons and popular destinations.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom packages?</h4>
                <p className="text-gray-600 text-sm">
                  Yes! We specialize in creating personalized travel experiences tailored to your specific needs, preferences, and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What is your cancellation policy?</h4>
                <p className="text-gray-600 text-sm">
                  Our cancellation policy varies by package and destination. We offer flexible options and travel insurance to protect your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide 24/7 support?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, we offer 24/7 emergency support for all our travelers. Our team is always available to assist you during your journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
