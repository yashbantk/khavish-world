"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "/api/placeholder/400/300",
    description: "The City of Light awaits with its romantic charm and cultural treasures.",
    price: "From $2,499",
    rating: 4.9,
    duration: "7 Days",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "/api/placeholder/400/300",
    description: "Experience the perfect blend of tradition and modernity in Japan's capital.",
    price: "From $3,299",
    rating: 4.8,
    duration: "10 Days",
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image: "/api/placeholder/400/300",
    description: "Luxury and opulence meet in this dazzling desert metropolis.",
    price: "From $1,899",
    rating: 4.7,
    duration: "5 Days",
  },
  {
    id: 4,
    name: "Maldives",
    image: "/api/placeholder/400/300",
    description: "Paradise on earth with crystal-clear waters and pristine beaches.",
    price: "From $4,599",
    rating: 4.9,
    duration: "8 Days",
  },
  {
    id: 5,
    name: "Switzerland",
    image: "/api/placeholder/400/300",
    description: "Alpine beauty and charming cities in the heart of Europe.",
    price: "From $3,799",
    rating: 4.8,
    duration: "9 Days",
  },
  {
    id: 6,
    name: "Santorini, Greece",
    image: "/api/placeholder/400/300",
    description: "Stunning sunsets and white-washed buildings on this Greek island.",
    price: "From $2,199",
    rating: 4.9,
    duration: "6 Days",
  },
];

export default function FeaturedDestinations() {
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
            Discover our handpicked selection of the world's most captivating destinations, each offering unique experiences and unforgettable memories.
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

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">{destination.price}</p>
                        <p className="text-sm text-gray-500">per person</p>
                      </div>
                      <Button className="gold-button group-hover:scale-105 transition-transform duration-300" asChild>
                        <Link href={`/destinations?destination=${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          Explore
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
    </section>
  );
}

