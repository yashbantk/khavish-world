"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, MapPin } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";

const packages = [
  {
    id: 1,
    title: "7-Day Japan Discovery Tour",
    subtitle: "Tokyo, Fuji, Kyoto, Osaka",
    image: "/images/japan-thumbnail.jpg",
    description: "Explore the best of Japan in this immersive 7-day journey across Tokyo, Mt. Fuji, Kyoto, Nara, and Osaka.",
    duration: "7 Days",
    groupSize: "Small Group",
    destinations: ["Tokyo", "Kyoto", "Osaka", "Mt. Fuji"],
    features: ["Private Transfers", "Bullet Trains", "Entry Tickets", "Tourist Visa"],
    isPopular: true,
    slug: "japan-discovery",
  },
  {
    id: 2,
    title: "European Grand Tour",
    subtitle: "14 Days of Luxury",
    image: "/images/paris-thumbnail.jpg",
    description: "Experience the best of Europe with our premium 14-day tour covering Paris, Rome, Barcelona, and Amsterdam.",
    duration: "14 Days",
    groupSize: "Max 12",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    features: ["5-Star Hotels", "Private Guide", "All Meals", "Airport Transfers"],
    isPopular: false,
    slug: "european-grand-tour",
  },
  {
    id: 3,
    title: "Mediterranean Cruise",
    subtitle: "10 Days of Luxury",
    image: "/images/mediterranean-cruise-thumbnail.jpg",
    description: "Sail through the Mediterranean's most beautiful destinations on a luxury cruise.",
    duration: "10 Days",
    groupSize: "Max 12",
    destinations: ["Santorini", "Mykonos", "Sicily", "Barcelona"],
    features: ["Luxury Cruise Ship", "All Meals Included", "Shore Excursions", "Spa Services"],
    isPopular: true,
    slug: "mediterranean-cruise",
  },
];

export default function PackagesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleGetQuote = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

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
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-100 space-y-3">
                      <Button 
                        onClick={() => handleGetQuote(pkg.title)}
                        className="w-full gold-button group-hover:scale-105 transition-transform duration-300 py-3 text-lg font-semibold"
                      >
                        Get Quote
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3"
                      >
                        <Link href={`/packages/${pkg.slug}`}>
                          View Details
                        </Link>
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
          <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link href="/packages">
              View All Packages
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage}
      />
    </section>
  );
}


