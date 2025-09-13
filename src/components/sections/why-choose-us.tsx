"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Crown, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Luxury Stays",
    description: "Handpicked 5-star accommodations and boutique hotels that define luxury and comfort.",
  },
  {
    icon: Shield,
    title: "Premium Support",
    description: "24/7 concierge service and dedicated travel experts to ensure your journey is seamless.",
  },
  {
    icon: Award,
    title: "Best Deals",
    description: "Exclusive partnerships with top hotels and airlines guarantee you the best prices.",
  },
  {
    icon: Headphones,
    title: "Personalized Service",
    description: "Tailored itineraries designed specifically for your preferences and travel style.",
  },
];

export default function WhyChooseUs() {
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
            Why Choose Khavish World?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We go beyond ordinary travel to deliver extraordinary experiences that create lasting memories.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card text-center group hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600 font-medium">Destinations</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

