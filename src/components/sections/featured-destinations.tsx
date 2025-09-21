"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "/images/paris-thumbnail.jpg",
    description: "The City of Light awaits with its romantic charm and cultural treasures.",
    rating: 4.9,
    duration: "7 Days",
    slug: "paris-france",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "/images/japan-thumbnail.jpg",
    description: "Experience the perfect blend of tradition and modernity in Japan's capital.",
    rating: 4.8,
    duration: "10 Days",
    slug: "tokyo-japan",
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image: "/images/dubai-thumbnail.jpg",
    description: "Luxury and opulence meet in this dazzling desert metropolis.",
    rating: 4.7,
    duration: "5 Days",
    slug: "dubai-uae",
  },
  {
    id: 4,
    name: "Maldives",
    image: "/images/maldives-thumbnail.webp",
    description: "Paradise on earth with crystal-clear waters and pristine beaches.",
    rating: 4.9,
    duration: "8 Days",
    slug: "maldives",
  },
  {
    id: 5,
    name: "Swiss Alps",
    image: "/images/swiss-alps-thumbnail.jpg",
    description: "Breathtaking alpine beauty and charming mountain towns.",
    rating: 4.8,
    duration: "8 Days",
    slug: "swiss-alps",
  },
  {
    id: 6,
    name: "Bali, Indonesia",
    image: "/images/bali-thumbnail.jpg",
    description: "Tropical paradise with stunning beaches and rich culture.",
    rating: 4.9,
    duration: "7 Days",
    slug: "bali-indonesia",
  },
  {
    id: 7,
    name: "New York, USA",
    image: "/images/usa-thumbnail.jpg",
    description: "The city that never sleeps with iconic landmarks and vibrant energy.",
    rating: 4.7,
    duration: "5 Days",
    slug: "new-york-usa",
  },
  {
    id: 8,
    name: "African Safari",
    image: "/images/african-safari-thumbnail.jpg",
    description: "Wildlife adventure in the heart of Africa's most beautiful landscapes.",
    rating: 4.9,
    duration: "10 Days",
    slug: "african-safari",
  },
];

export default function FeaturedDestinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const handleGetQuote = (destinationName: string) => {
    setSelectedDestination(destinationName);
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
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Discover our handpicked selection of the world&apos;s most captivating destinations, each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Destinations Grid */}
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
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-white rounded-full px-3 py-1 text-sm font-medium">
                    {destination.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {destination.description}
                      </p>
                    </div>

                    <div className="space-y-3">
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
                        <Link href={`/destinations/${destination.slug}`}>
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
            <Link href="/destinations">
              View All Destinations
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDestination}
      />
    </section>
  );
}

