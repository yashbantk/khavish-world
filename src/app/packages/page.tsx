"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";

const packages = [
  {
    id: 1,
    title: "European Grand Tour",
    subtitle: "14 Days of Luxury",
    image: "/images/paris-thumbnail.jpg",
    description: "Experience the best of Europe with our premium 14-day tour covering Paris, Rome, Barcelona, and Amsterdam.",
    price: 8999,
    originalPrice: 10999,
    rating: 4.9,
    duration: "14 Days",
    groupSize: "Max 12",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    features: ["5-Star Hotels", "Private Guide", "All Meals", "Airport Transfers", "Museum Passes", "Wine Tasting"],
    highlights: ["Eiffel Tower", "Colosseum", "Sagrada Familia", "Canal Cruise"],
    isPopular: true,
    category: "Cultural",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Asian Adventure",
    subtitle: "10 Days of Discovery",
    image: "/images/japan-thumbnail.jpg",
    description: "Discover the vibrant cultures and stunning landscapes of Japan, Thailand, and Singapore.",
    price: 6999,
    originalPrice: 8499,
    rating: 4.8,
    duration: "10 Days",
    groupSize: "Max 10",
    destinations: ["Tokyo", "Bangkok", "Singapore"],
    features: ["Luxury Resorts", "Cultural Tours", "Fine Dining", "Spa Treatments", "Temple Visits", "Market Tours"],
    highlights: ["Tokyo Skytree", "Grand Palace", "Marina Bay Sands", "Traditional Temples"],
    isPopular: false,
    category: "Cultural",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Mediterranean Cruise",
    subtitle: "10 Days of Luxury",
    image: "/images/mediterranean-cruise-thumbnail.jpg",
    description: "Sail through the Mediterranean's most beautiful destinations on a luxury cruise ship.",
    price: 7999,
    originalPrice: 9999,
    rating: 4.9,
    duration: "10 Days",
    groupSize: "Max 12",
    destinations: ["Santorini", "Mykonos", "Sicily", "Barcelona"],
    features: ["Luxury Cruise Ship", "All Meals Included", "Shore Excursions", "Spa Services", "Entertainment", "WiFi"],
    highlights: ["Stunning Mediterranean views", "Gourmet dining experiences", "Cultural shore excursions", "Luxury onboard amenities"],
    isPopular: true,
    category: "Luxury",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    subtitle: "8 Days of Alpine Beauty",
    image: "/images/swiss-alps-thumbnail.jpg",
    description: "Experience the breathtaking beauty of the Swiss Alps with luxury accommodations and outdoor activities.",
    price: 7999,
    originalPrice: 9499,
    rating: 4.8,
    duration: "8 Days",
    groupSize: "Max 8",
    destinations: ["Zermatt", "Interlaken", "Lucerne", "St. Moritz"],
    features: ["Mountain Hotels", "Cable Car Rides", "Hiking Tours", "Skiing", "Chocolate Tasting", "Lake Cruises"],
    highlights: ["Matterhorn", "Jungfraujoch", "Lake Geneva", "Alpine Villages"],
    isPopular: false,
    category: "Adventure",
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "African Safari",
    subtitle: "12 Days of Wildlife",
    image: "/images/african-safari-thumbnail.jpg",
    description: "Embark on an unforgettable safari adventure through Kenya and Tanzania&apos;s most famous national parks.",
    price: 11999,
    originalPrice: 13999,
    rating: 4.9,
    duration: "12 Days",
    groupSize: "Max 6",
    destinations: ["Nairobi", "Maasai Mara", "Serengeti", "Ngorongoro"],
    features: ["Luxury Lodges", "Game Drives", "Hot Air Balloon", "Cultural Visits", "Photography Tours", "Bush Dinners"],
    highlights: ["Big Five", "Great Migration", "Maasai Culture", "Ngorongoro Crater"],
    isPopular: true,
    category: "Adventure",
    difficulty: "Medium",
  },
  {
    id: 6,
    title: "Mediterranean Cruise",
    subtitle: "10 Days of Coastal Beauty",
    image: "/images/mediterranean-cruise-thumbnail.jpg",
    description: "Sail through the Mediterranean&apos;s most beautiful ports with luxury accommodations and gourmet dining.",
    price: 9999,
    originalPrice: 11999,
    rating: 4.7,
    duration: "10 Days",
    groupSize: "Max 200",
    destinations: ["Barcelona", "Monaco", "Florence", "Santorini", "Mykonos"],
    features: ["Luxury Cruise Ship", "All Meals", "Shore Excursions", "Spa Services", "Entertainment", "Fine Dining"],
    highlights: ["Sagrada Familia", "Monaco Casino", "Uffizi Gallery", "Oia Sunset"],
    isPopular: false,
    category: "Luxury",
    difficulty: "Easy",
  },
  {
    id: 7,
    title: "Bali Paradise",
    subtitle: "7 Days of Tropical Bliss",
    image: "/images/bali-thumbnail.jpg",
    description: "Discover the magic of Bali with its stunning beaches, ancient temples, and vibrant culture.",
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    duration: "7 Days",
    groupSize: "Max 10",
    destinations: ["Ubud", "Seminyak", "Canggu", "Nusa Penida"],
    features: ["Luxury Villas", "Temple Tours", "Beach Activities", "Spa Treatments", "Cultural Experiences", "Rice Terrace Visits"],
    highlights: ["Tanah Lot Temple", "Ubud Rice Terraces", "Seminyak Beach", "Mount Batur Sunrise"],
    isPopular: true,
    category: "Beach",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "New York City Explorer",
    subtitle: "5 Days of Urban Adventure",
    image: "/images/usa-thumbnail.jpg",
    description: "Experience the energy and excitement of the Big Apple with iconic landmarks and world-class attractions.",
    price: 3999,
    originalPrice: 4999,
    rating: 4.7,
    duration: "5 Days",
    groupSize: "Max 12",
    destinations: ["Manhattan", "Brooklyn", "Queens", "Staten Island"],
    features: ["City Tours", "Broadway Shows", "Museum Visits", "Fine Dining", "Shopping", "Skyline Views"],
    highlights: ["Statue of Liberty", "Central Park", "Times Square", "Brooklyn Bridge"],
    isPopular: false,
    category: "Cultural",
    difficulty: "Easy",
  },
];

// const categories = ["All", "Cultural", "Beach", "Adventure", "Luxury"];

export default function PackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleGetQuote = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

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
              Curated Travel
              <span className="block text-gradient">Packages</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-body">
              Handcrafted itineraries that combine the best destinations, accommodations, and experiences for an unforgettable journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="all">All Packages</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="beach">Beach</TabsTrigger>
              <TabsTrigger value="adventure">Adventure</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{pkg.rating}</span>
                        </div>

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white">
                            {pkg.category}
                          </Badge>
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
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-gray-600">{pkg.difficulty}</span>
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

                          {/* Highlights */}
                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 text-sm">Key Highlights:</h4>
                            <div className="flex flex-wrap gap-2">
                              {pkg.highlights.map((highlight, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 text-sm">What&apos;s Included:</h4>
                            <div className="grid grid-cols-2 gap-1">
                              {pkg.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Check className="h-3 w-3 text-primary" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {pkg.features.length > 4 && (
                                <div className="text-sm text-primary font-medium">
                                  +{pkg.features.length - 4} more features
                                </div>
                              )}
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
                              <Link href={`/packages/${pkg.title.toLowerCase().replace(/\s+/g, '-')}`}>
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our travel experts can create a custom package tailored to your specific needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-button px-8 py-3">
                Create Custom Package
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage}
      />
    </Layout>
  );
}
