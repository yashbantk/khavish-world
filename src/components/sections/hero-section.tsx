"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight">
              Discover the World with
              <span className="block text-gradient">Khavish World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body">
              Experience luxury travel like never before. We curate unforgettable journeys that combine adventure, culture, and premium comfort.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="gold-button px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Plan Your Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/destinations">
                Explore Destinations
              </Link>
            </Button>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="p-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Destination
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Where to?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Paris, France</SelectItem>
                      <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="maldives">Maldives</SelectItem>
                      <SelectItem value="switzerland">Switzerland</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Check-in
                  </label>
                  <Input type="date" placeholder="Select date" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Check-out
                  </label>
                  <Input type="date" placeholder="Select date" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Guests
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="2 Adults" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                      <SelectItem value="5+">5+ Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full mt-6 gold-button" size="lg" asChild>
                <Link href="/packages">
                  <Search className="h-5 w-5 mr-2" />
                  Search Packages
                </Link>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

