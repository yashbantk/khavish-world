"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Search, Filter, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    continent: "Europe",
    image: "/api/placeholder/400/300",
    description: "The City of Light awaits with its romantic charm, world-class cuisine, and iconic landmarks.",
    price: "From $2,499",
    rating: 4.9,
    duration: "7 Days",
    bestTime: "Apr - Oct",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Champs-Élysées"],
    category: "Cultural",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    continent: "Asia",
    image: "/api/placeholder/400/300",
    description: "Experience the perfect blend of tradition and modernity in Japan's vibrant capital.",
    price: "From $3,299",
    rating: 4.8,
    duration: "10 Days",
    bestTime: "Mar - May, Sep - Nov",
    highlights: ["Senso-ji Temple", "Tokyo Skytree", "Shibuya Crossing", "Tsukiji Market"],
    category: "Cultural",
  },
  {
    id: 3,
    name: "Dubai, UAE",
    continent: "Middle East",
    image: "/api/placeholder/400/300",
    description: "Luxury and opulence meet in this dazzling desert metropolis with world-class attractions.",
    price: "From $1,899",
    rating: 4.7,
    duration: "5 Days",
    bestTime: "Nov - Mar",
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert Safari"],
    category: "Luxury",
  },
  {
    id: 4,
    name: "Maldives",
    continent: "Asia",
    image: "/api/placeholder/400/300",
    description: "Paradise on earth with crystal-clear waters, pristine beaches, and overwater bungalows.",
    price: "From $4,599",
    rating: 4.9,
    duration: "8 Days",
    bestTime: "Nov - Apr",
    highlights: ["Overwater Bungalows", "Snorkeling", "Sunset Cruises", "Spa Retreats"],
    category: "Beach",
  },
  {
    id: 5,
    name: "Switzerland",
    continent: "Europe",
    image: "/api/placeholder/400/300",
    description: "Alpine beauty and charming cities in the heart of Europe with breathtaking landscapes.",
    price: "From $3,799",
    rating: 4.8,
    duration: "9 Days",
    bestTime: "Jun - Sep",
    highlights: ["Matterhorn", "Lucerne", "Interlaken", "Swiss Alps"],
    category: "Adventure",
  },
  {
    id: 6,
    name: "Santorini, Greece",
    continent: "Europe",
    image: "/api/placeholder/400/300",
    description: "Stunning sunsets and white-washed buildings on this iconic Greek island.",
    price: "From $2,199",
    rating: 4.9,
    duration: "6 Days",
    bestTime: "May - Oct",
    highlights: ["Oia Sunset", "Fira Town", "Red Beach", "Wine Tasting"],
    category: "Beach",
  },
  {
    id: 7,
    name: "New York, USA",
    continent: "North America",
    image: "/api/placeholder/400/300",
    description: "The city that never sleeps offers endless entertainment, culture, and iconic landmarks.",
    price: "From $2,999",
    rating: 4.6,
    duration: "7 Days",
    bestTime: "Apr - Jun, Sep - Nov",
    highlights: ["Statue of Liberty", "Central Park", "Broadway", "Times Square"],
    category: "Cultural",
  },
  {
    id: 8,
    name: "Bali, Indonesia",
    continent: "Asia",
    image: "/api/placeholder/400/300",
    description: "Tropical paradise with rich culture, stunning temples, and beautiful beaches.",
    price: "From $1,599",
    rating: 4.8,
    duration: "8 Days",
    bestTime: "Apr - Oct",
    highlights: ["Ubud Temples", "Tegallalang Rice Terraces", "Beach Clubs", "Volcano Tours"],
    category: "Beach",
  },
];

const categories = ["All", "Cultural", "Beach", "Luxury", "Adventure"];
const continents = ["All", "Europe", "Asia", "North America", "Middle East"];

export default function DestinationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const handleGetQuote = (destinationName: string) => {
    setSelectedDestination(destinationName);
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
              Discover Amazing
              <span className="block text-gradient">Destinations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-body">
              Explore our handpicked collection of the world&apos;s most captivating destinations, each offering unique experiences and unforgettable memories.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Search className="h-4 w-4 mr-2 text-primary" />
                    Search
                  </label>
                  <Input placeholder="Search destinations..." className="border-gray-200 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-primary" />
                    Category
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-primary">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Continent
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-primary">
                      <SelectValue placeholder="All Continents" />
                    </SelectTrigger>
                    <SelectContent>
                      {continents.map((continent) => (
                        <SelectItem key={continent} value={continent.toLowerCase()}>
                          {continent}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-primary">
                      <SelectValue placeholder="Any Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-2k">Under $2,000</SelectItem>
                      <SelectItem value="2k-3k">$2,000 - $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5k+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="beach">Beach</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
              <TabsTrigger value="adventure">Adventure</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="premium-card group overflow-hidden h-full">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">✈️</span>
                            </div>
                            <p className="text-sm text-gray-500">Beautiful destination image</p>
                          </div>
                        </div>
                        
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                        
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white">
                            {destination.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                              {destination.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {destination.description}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{destination.duration}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{destination.continent}</span>
                              </div>
                            </div>
                            
                            <div className="text-sm text-gray-600">
                              <strong>Best Time:</strong> {destination.bestTime}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 text-sm">Highlights:</h4>
                            <div className="flex flex-wrap gap-1">
                              {destination.highlights.slice(0, 3).map((highlight, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                              {destination.highlights.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{destination.highlights.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-100 space-y-3">
                            <Button 
                              onClick={() => handleGetQuote(destination.name)}
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
                              <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
      
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDestination}
      />
    </Layout>
  );
}
