"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Users, Globe, Heart, Target, Eye, Users2, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We believe travel has the power to transform lives and create lasting memories that enrich the soul.",
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "We strive for perfection in every detail, ensuring our clients receive nothing but the best.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We promote responsible tourism that respects local cultures and contributes to sustainable travel.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "Every journey is tailored to individual preferences, creating truly personalized experiences.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/api/placeholder/200/200",
    bio: "With over 15 years in luxury travel, Sarah founded Khavish World to create extraordinary journeys that inspire and delight.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "/api/placeholder/200/200",
    bio: "Michael ensures every detail of your journey is flawlessly executed, from planning to execution.",
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Curator",
    image: "/api/placeholder/200/200",
    bio: "Emily handpicks the most exceptional destinations and experiences to create unforgettable memories.",
  },
  {
    name: "David Thompson",
    role: "Customer Experience",
    image: "/api/placeholder/200/200",
    bio: "David leads our customer service team, ensuring every client feels valued and supported throughout their journey.",
  },
];

const stats = [
  { number: "50K+", label: "Happy Travelers" },
  { number: "100+", label: "Destinations" },
  { number: "15+", label: "Years Experience" },
  { number: "4.9", label: "Average Rating" },
];

export default function AboutPage() {
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
              About
              <span className="block text-gradient">Khavish World</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              We are passionate travel curators dedicated to creating extraordinary journeys that inspire, delight, and create lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Khavish World began as a small team of passionate travelers who believed that every journey should be extraordinary. What started as a dream to share the world's most beautiful destinations has grown into a premier luxury travel company.
                </p>
                <p>
                  Our name "Khavish" means "desire" in several languages, reflecting our commitment to fulfilling your deepest travel desires. We understand that travel is not just about visiting places—it's about experiencing cultures, creating connections, and discovering yourself.
                </p>
                <p>
                  Today, we're proud to have helped over 50,000 travelers discover the world, creating memories that last a lifetime. Our team of expert curators, local guides, and travel specialists work tirelessly to ensure every journey exceeds expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✈️</span>
                  </div>
                  <p className="text-gray-500">Our journey through the years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape every experience we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="premium-card text-center group hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-gray-500">Our vision for the future</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To inspire and enable extraordinary travel experiences that connect people with the world's most beautiful destinations, cultures, and communities.
                </p>
                <p>
                  We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our mission is to make these transformative experiences accessible to everyone, while maintaining the highest standards of luxury and service.
                </p>
                <p>
                  Through responsible tourism and sustainable practices, we aim to preserve the beauty of our destinations for future generations while creating meaningful connections between travelers and local communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind every extraordinary journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="premium-card text-center group hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-semibold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let us create an extraordinary travel experience tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-button px-8 py-3">
                Plan Your Trip
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
