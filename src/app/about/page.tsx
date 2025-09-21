"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Globe, Heart, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "Every journey is uniquely yours. We don&apos;t believe in one-size-fits-all travel. Whether you&apos;re chasing sunsets or exploring ancient temples, we craft experiences that speak to your heart.",
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "From the moment you dream about your next adventure to the day you return home with memories, we handle every detail. Consider it all taken care of.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "Our network of passionate travel experts and local guides ensures you don&apos;t just visit a destination — you truly experience it. From hidden gems to exclusive access.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "We open doors that others can't. From flights and accommodations to tours and insurance — we make travel seamless and extraordinary.",
  },
];

const team = [
  {
    name: "Bindiya Juneja",
    role: "Founder & CEO",
    image: "/api/placeholder/200/200",
    bio: "With over 7 years in luxury travel, Bindiya founded Khavish World to create extraordinary journeys that inspire and delight.",
  },
  {
    name: "Vaibhav Juneja",
    role: "Head of Operations",
    image: "/api/placeholder/200/200",
    bio: "Vaibhav ensures every detail of your journey is flawlessly executed, from planning to execution.",
  },
  {
    name: "Ishan Kalra",
    role: "Travel Curator",
    image: "/api/placeholder/200/200",
    bio: "Ishan handpicks the most exceptional destinations and experiences to create unforgettable memories.",
  },
  {
    name: "Saksham Bhutani",
    role: "Legal Advisor",
    image: "/api/placeholder/200/200",
    bio: "Saksham provides expert legal guidance ensuring all travel arrangements comply with international regulations and protect our clients' interests.",
  },
  {
    name: "Himanshu Sharma",
    role: "Customer Experience",
    image: "/api/placeholder/200/200",
    bio: "Himanshu leads our customer service team, ensuring every client feels valued and supported throughout their journey.",
  },
  {
    name: "Sahil",
    role: "Marketing Lead",
    image: "/api/placeholder/200/200",
    bio: "Sahil drives our marketing initiatives, connecting travelers with their dream destinations through innovative campaigns.",
  },
  {
    name: "Abhishek Yadav",
    role: "Tech Lead",
    image: "/api/placeholder/200/200",
    bio: "Abhishek leads our technology initiatives, ensuring our digital platforms provide seamless experiences for our travelers.",
  },
];

const stats = [
  { number: "50K+", label: "Happy Travelers" },
  { number: "100+", label: "Destinations" },
  { number: "7+", label: "Years Experience" },
  { number: "24/7", label: "Support" },
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
              We believe that travel is the ultimate adventure of the soul — a journey that transforms not just your passport, but your perspective on life itself. We don&apos;t just plan trips; we architect experiences that become the stories you&apos;ll tell for a lifetime.
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
                  At Khavish World, we believe travel is more than just visiting new places — it&apos;s about creating unforgettable memories, discovering diverse cultures, and exploring the world with confidence and ease. As a full-service travel company, we specialize in crafting personalized travel experiences that cater to every type of traveler.
                </p>
                <p>
                  Our name &quot;Khavish&quot; means &quot;desire&quot; in several languages, reflecting our commitment to fulfilling your deepest travel desires. Whether you&apos;re seeking adventure, relaxation, cultural immersion, or luxury, we understand that every journey should be extraordinary.
                </p>
                <p>
                  With a dedicated team of travel experts, local guides, and global partners, we provide seamless planning and support for every step of your journey. From curated tour packages and custom itineraries to flight bookings, accommodations, and travel insurance, we handle all the details so you can focus on enjoying the trip of a lifetime.
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
                  <strong>Your Travel Dreams, Our Mission:</strong> Whether you&apos;re planning a solo getaway, a family vacation, a romantic honeymoon, or a corporate retreat, Khavish World is your trusted partner in travel. Let us turn your travel dreams into reality.
                </p>
                <p>
                  We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our mission is to make these transformative experiences accessible to everyone, while maintaining the highest standards of luxury and service.
                </p>
                <p>
                  Through responsible tourism and sustainable practices, we aim to preserve the beauty of our destinations for future generations while creating meaningful connections between travelers and local communities. Because life is short, but the memories we create last forever.
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
