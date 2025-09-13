"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Users, MapPin } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "European Grand Tour",
    subtitle: "14 Days of Luxury",
    image: "/api/placeholder/400/300",
    description: "Experience the best of Europe with our premium 14-day tour covering Paris, Rome, Barcelona, and Amsterdam.",
    price: 8999,
    originalPrice: 10999,
    rating: 4.9,
    duration: "14 Days",
    groupSize: "Max 12",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    features: ["5-Star Hotels", "Private Guide", "All Meals", "Airport Transfers"],
    isPopular: true,
  },
  {
    id: 2,
    title: "Asian Adventure",
    subtitle: "10 Days of Discovery",
    image: "/api/placeholder/400/300",
    description: "Discover the vibrant cultures and stunning landscapes of Japan, Thailand, and Singapore.",
    price: 6999,
    originalPrice: 8499,
    rating: 4.8,
    duration: "10 Days",
    groupSize: "Max 10",
    destinations: ["Tokyo", "Bangkok", "Singapore"],
    features: ["Luxury Resorts", "Cultural Tours", "Fine Dining", "Spa Treatments"],
    isPopular: false,
  },
  {
    id: 3,
    title: "Caribbean Paradise",
    subtitle: "7 Days of Relaxation",
    image: "/api/placeholder/400/300",
    description: "Unwind in the pristine beaches and crystal-clear waters of the Caribbean islands.",
    price: 5499,
    originalPrice: 6999,
    rating: 4.9,
    duration: "7 Days",
    groupSize: "Max 8",
    destinations: ["Barbados", "St. Lucia", "Antigua"],
    features: ["Beachfront Villas", "Water Sports", "Sunset Cruises", "Spa Services"],
    isPopular: true,
  },
];

export default function PackagesSection() {
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
            Curated Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Handcrafted itineraries that combine the best destinations, accommodations, and experiences for an unforgettable journey.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className="premium-card group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🌍</span>
                      </div>
                      <p className="text-sm text-gray-500">Stunning package image</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">
                        {pkg.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">{pkg.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Package Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-gray-600">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-gray-600">{pkg.groupSize}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <div className="flex flex-wrap gap-1">
                          {pkg.destinations.map((dest, idx) => (
                            <span key={idx} className="text-sm text-gray-600">
                              {dest}{idx < pkg.destinations.length - 1 && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">What&apos;s Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold text-primary">
                              ${pkg.price.toLocaleString()}
                            </span>
                            <span className="text-lg text-gray-500 line-through">
                              ${pkg.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">per person</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-600 font-medium">
                            Save ${(pkg.originalPrice - pkg.price).toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <Button className="w-full gold-button group-hover:scale-105 transition-transform duration-300">
                        Book Now
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
            View All Packages
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


