"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Our Ladakh trip with Khavish World was absolutely breathtaking! From the crystal-clear Pangong Lake to the ancient monasteries, every moment was magical. The team handled all logistics perfectly, making our high-altitude adventure seamless and unforgettable.",
    trip: "Ladakh Adventure",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Delhi, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Sikkim was a dream come true! The pristine beauty of Gangtok, the spiritual aura of Rumtek Monastery, and the stunning views of Kanchenjunga left us speechless. Khavish World's local expertise made all the difference in this incredible journey.",
    trip: "Sikkim Discovery",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Khavish World exceeded all our expectations! The European Grand Tour was absolutely magical. Every detail was perfectly planned, and our guide was exceptional. We can't wait to book our next adventure with them.",
    trip: "European Grand Tour",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    location: "Bangalore, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Our Kerala backwaters experience was pure bliss! From the houseboat cruise to the spice plantations in Munnar, every detail was perfectly orchestrated. The local cuisine and cultural experiences were authentic and enriching.",
    trip: "Kerala Backwaters",
  },
  {
    id: 5,
    name: "Anita Singh",
    location: "Pune, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The Rajasthan royal experience was beyond our wildest dreams! From the majestic palaces of Jaipur to the golden sands of Jaisalmer, we felt like royalty. The heritage hotels and cultural performances were absolutely spectacular.",
    trip: "Rajasthan Royal Tour",
  },
  {
    id: 6,
    name: "Michael Chen",
    location: "San Francisco, USA",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The level of service and attention to detail is unmatched. Our Asian Adventure was flawless from start to finish. The luxury accommodations and cultural experiences were beyond our wildest dreams.",
    trip: "Asian Adventure",
  },
  {
    id: 7,
    name: "Vikram Mehta",
    location: "Chennai, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Our Andaman Islands getaway was paradise on earth! The pristine beaches, crystal-clear waters, and vibrant marine life were incredible. Khavish World's island-hopping itinerary was perfectly planned, giving us the ultimate tropical escape.",
    trip: "Andaman Islands",
  },
  {
    id: 8,
    name: "Emily Rodriguez",
    location: "Miami, USA",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Khavish World made our honeymoon absolutely perfect. The Caribbean Paradise package was everything we hoped for and more. The private beachfront villa and sunset cruises were unforgettable.",
    trip: "Caribbean Paradise",
  },
  {
    id: 9,
    name: "Deepika Reddy",
    location: "Hyderabad, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Our Himachal Pradesh mountain retreat was absolutely magical! From the snow-capped peaks of Manali to the spiritual vibes of Dharamshala, every moment was filled with wonder. The local homestays and adventure activities were perfectly organized.",
    trip: "Himachal Pradesh",
  },
  {
    id: 10,
    name: "David Thompson",
    location: "London, UK",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "As a frequent traveler, I can confidently say that Khavish World provides the most premium travel experience available. Their attention to detail and personalized service is second to none.",
    trip: "Swiss Alps Adventure",
  },
  {
    id: 11,
    name: "Rohit Agarwal",
    location: "Kolkata, India",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The Northeast India exploration was an eye-opening experience! From the living root bridges of Meghalaya to the vibrant culture of Assam, we discovered India's hidden gems. The local guides were incredibly knowledgeable and friendly.",
    trip: "Northeast India",
  },
  {
    id: 12,
    name: "Lisa Wang",
    location: "Toronto, Canada",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The team at Khavish World truly understands luxury travel. Every aspect of our trip was meticulously planned and executed. We felt like VIPs throughout our entire journey.",
    trip: "Japanese Cultural Tour",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their Khavish World experiences.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card h-full group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Trip Reference */}
                    <div className="text-sm text-primary font-medium">
                      {testimonial.trip}
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


