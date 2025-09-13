"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, Calendar, Users, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Plan Your Perfect Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Ready to embark on your next adventure? Get in touch with our travel experts to create a personalized itinerary just for you.
          </p>
        </motion.div>

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
                      Get Your Custom Quote
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
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select>
                        <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select a destination" />
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
                        <Label htmlFor="duration">Duration</Label>
                        <Select>
                          <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-5">3-5 Days</SelectItem>
                            <SelectItem value="6-10">6-10 Days</SelectItem>
                            <SelectItem value="11-15">11-15 Days</SelectItem>
                            <SelectItem value="16+">16+ Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select>
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
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select budget range" />
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Requirements</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your dream trip, special requirements, or any questions you have..."
                        className="border-gray-200 focus:border-primary focus:ring-primary min-h-[100px]"
                      />
                    </div>

                    <Button type="submit" className="w-full gold-button py-3 text-lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                    <div className="text-sm text-gray-500">24/7 Support</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@khavishworld.com</div>
                    <div className="text-sm text-gray-500">Response within 24h</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                    <div className="text-sm text-gray-500">Instant Chat</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book With Us */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  Why Book With Khavish World?
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Free consultation and itinerary planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Best price guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Flexible booking and cancellation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Exclusive access to premium experiences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="premium-card bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  Emergency Support
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Need immediate assistance while traveling? Our emergency support team is available 24/7.
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

