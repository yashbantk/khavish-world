"use client";

import { useState, use } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star, Check, X } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";
import { notFound } from "next/navigation";

// Package data - you can expand this with more packages
const packagesData = {
  "japan-discovery": {
    name: "7-Day Japan Discovery Tour",
    title: "7-Day Japan Discovery Tour",
    subtitle: "Tokyo, Fuji, Kyoto, Osaka",
    description: "Explore the best of Japan in this immersive 7-day journey across Tokyo, Mt. Fuji, Kyoto, Nara, and Osaka. From the cutting-edge vibes of Tokyo to the ancient temples of Kyoto and the friendly deer of Nara, this tour offers a perfect balance of culture, nature, and fun.",
    duration: "7 Days",
    groupSize: "Small Group",
    rating: 4.9,
    destinations: ["Tokyo", "Kyoto", "Osaka", "Mt. Fuji"],
    highlights: [
      "Tokyo City Tour: Meiji Shrine, Asakusa, Shibuya",
      "Full Day at Disneyland or DisneySea",
      "Mt. Fuji 5th Station + Hakone Ropeway & Lake Ashi Cruise",
      "Kyoto: Bamboo Forest, Fushimi Inari, Kiyomizu-dera",
      "Nara Deer Park & Todai-ji Temple",
      "Osaka Castle & Dotonbori Night Walk"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Leisure",
        activities: [
          "10:00 AM – Hotel breakfast and rest",
          "12:00 PM – Explore nearby shopping areas",
          "04:00 PM – Optional experiences (teamLab, sumo session, Harry Potter Studio, etc.)",
          "07:00 PM – Dinner on own"
        ]
      },
      {
        day: 2,
        title: "Tokyo City Tour",
        activities: [
          "09:00 AM – Depart from hotel",
          "09:30 AM – Meiji Shrine - A peaceful forested sanctuary dedicated to Emperor Meiji and Empress Shoken",
          "11:00 AM – Asakusa & Nakamise Street - Enjoy traditional shopping leading to the famous Senso-ji Temple",
          "01:00 PM – Lunch break",
          "02:30 PM – Tokyo Skytree (Photo Stop) - Iconic tower offering panoramic city views",
          "04:00 PM – Shibuya Crossing & Hachiko Statue - Experience Tokyo's vibrant hustle and snap a photo at the famous crossing",
          "06:00 PM – Return to hotel"
        ]
      },
      {
        day: 3,
        title: "Disneyland or DisneySea",
        activities: [
          "09:00 AM – Transfer to theme park",
          "10:00 AM to 05:00 PM – Enjoy the full-day magical experience",
          "06:30 PM – Return to hotel"
        ]
      },
      {
        day: 4,
        title: "Mt. Fuji & Hakone Tour + Travel to Osaka",
        activities: [
          "08:00 AM – Depart from Tokyo",
          "10:30 AM – Mt. Fuji 5th Station - A scenic stopover on Japan's iconic mountain",
          "12:00 PM – Lake Kawaguchi - A serene lake with mirror views of Mt. Fuji",
          "02:00 PM – Hakone Ropeway & Lake Ashi Cruise - Stunning aerial and water views of volcanic valleys and Mt. Fuji",
          "04:30 PM – Transfer to train station",
          "07:00 PM – Arrive and check-in at Osaka hotel"
        ]
      },
      {
        day: 5,
        title: "Kyoto Day Tour",
        activities: [
          "08:00 AM – Depart from Osaka",
          "09:30 AM – Arashiyama Bamboo Grove - Walk through towering bamboo for a mystical experience",
          "11:30 AM – Fushimi Inari Shrine - Iconic path lined with thousands of red torii gates",
          "01:00 PM – Lunch break",
          "02:30 PM – Kiyomizu-dera Temple - Panoramic views and ancient sacred waters",
          "06:00 PM – Return to hotel"
        ]
      },
      {
        day: 6,
        title: "Nara & Osaka Tour",
        activities: [
          "08:30 AM – Depart Osaka",
          "10:00 AM – Todai-ji Temple - Home to Japan's largest bronze Buddha statue",
          "11:30 AM – Nara Deer Park - Interact with friendly, free-roaming deer",
          "01:00 PM – Return to Osaka",
          "03:00 PM – Osaka Castle - A majestic feudal-era castle with a history museum",
          "05:00 PM – Dotonbori Street Walk - Experience Osaka nightlife, neon signs, and street food"
        ]
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Optional leisure or sightseeing depending on flight time",
          "Transfer to airport as per departure schedule"
        ]
      }
    ],
    inclusions: [
      "All private transfers (Japanese Speaking Driver) & bullet trains",
      "Entry tickets to listed attractions (except temples)",
      "Japan tourist visa",
      "Hindi-speaking translator – ¥30,000/day",
      "English-speaking Japanese guide – ¥40,000/day (7 days advance booking required)"
    ],
    exclusions: [
      "Hotels & daily breakfast",
      "International & domestic flights",
      "Entry fees for Todai-ji, Kiyomizu-dera, Fushimi Inari, Kinkaku-ji (pay directly)"
    ],
    faqs: [
      {
        question: "What currency is used in Japan?",
        answer: "Japan uses the Japanese Yen (JPY). Most places accept cards, but cash is recommended for temples, small shops, and rural areas."
      },
      {
        question: "Can I use international debit/credit cards in Japan?",
        answer: "Yes, Visa and Mastercard are widely accepted, but always carry some cash for convenience."
      },
      {
        question: "What language is spoken in Japan? Will I face communication issues?",
        answer: "Japanese is the primary language. English is spoken in major tourist areas, but having a translator app or phrasebook is helpful."
      },
      {
        question: "Is Japan safe for tourists?",
        answer: "Extremely safe. Japan is one of the safest countries for travelers, even for solo and female tourists."
      },
      {
        question: "What's the weather like in Japan during different seasons?",
        answer: "Spring (Mar–May): Mild & pleasant, cherry blossom season. Summer (Jun–Aug): Hot & humid. Autumn (Sep–Nov): Cool with beautiful foliage. Winter (Dec–Feb): Cold, especially in Mt. Fuji & northern areas."
      },
      {
        question: "What type of clothes should I pack?",
        answer: "Dress according to the season. Carry layered clothing, comfortable walking shoes, and something modest for temples."
      },
      {
        question: "Do I need an umbrella or rain gear?",
        answer: "Yes, especially during June and early July (rainy season). A foldable umbrella is handy year-round."
      },
      {
        question: "Are power sockets different in Japan?",
        answer: "Yes, Japan uses Type A/B plugs (same as the US) with 100V. Carry a universal adapter if needed."
      },
      {
        question: "What essentials should I carry?",
        answer: "Passport, travel insurance, local SIM or pocket Wi-Fi, yen cash, universal adapter, sunscreen, medications, and a small backpack."
      },
      {
        question: "Is tipping expected in Japan?",
        answer: "No. Tipping is not a part of Japanese culture and may even be considered rude."
      }
    ]
  },
  "european-grand-tour": {
    name: "European Grand Tour",
    title: "European Grand Tour",
    subtitle: "14 Days of Luxury",
    description: "Experience the best of Europe with our premium 14-day tour covering Paris, Rome, Barcelona, and Amsterdam. This luxury journey takes you through the most iconic cities of Europe with first-class accommodations and exclusive experiences.",
    duration: "14 Days",
    groupSize: "Max 12",
    rating: 4.9,
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    highlights: [
      "Paris: Eiffel Tower, Louvre Museum, Seine River Cruise",
      "Rome: Colosseum, Vatican City, Trevi Fountain",
      "Barcelona: Sagrada Familia, Park Güell, Gothic Quarter",
      "Amsterdam: Canal Cruise, Anne Frank House, Van Gogh Museum",
      "Luxury accommodations in 5-star hotels",
      "Private guided tours and exclusive experiences"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        activities: [
          "Arrive in Paris and check into luxury hotel",
          "Evening welcome dinner at a Michelin-starred restaurant",
          "Seine River cruise with champagne"
        ]
      },
      {
        day: 2,
        title: "Paris City Tour",
        activities: [
          "Visit the Eiffel Tower with skip-the-line access",
          "Explore the Louvre Museum with private guide",
          "Lunch at a traditional French bistro",
          "Evening at the Opera Garnier"
        ]
      },
      {
        day: 3,
        title: "Paris Cultural Experience",
        activities: [
          "Visit Notre-Dame Cathedral and Sainte-Chapelle",
          "Explore Montmartre and Sacré-Cœur",
          "Traditional French cooking class",
          "Evening cabaret show at Moulin Rouge"
        ]
      },
      {
        day: 4,
        title: "Versailles Day Trip",
        activities: [
          "Full day at Palace of Versailles",
          "Private tour of the Hall of Mirrors",
          "Garden tour and musical fountain show",
          "Return to Paris for evening at leisure"
        ]
      },
      {
        day: 5,
        title: "Travel to Rome",
        activities: [
          "Morning flight to Rome",
          "Check into luxury hotel in city center",
          "Evening walking tour of historic Rome",
          "Traditional Italian dinner in Trastevere"
        ]
      },
      {
        day: 6,
        title: "Ancient Rome",
        activities: [
          "Colosseum and Roman Forum with private guide",
          "Visit the Pantheon and Trevi Fountain",
          "Lunch at a traditional Roman trattoria",
          "Evening at the Spanish Steps"
        ]
      },
      {
        day: 7,
        title: "Vatican City",
        activities: [
          "Private tour of Vatican Museums",
          "Visit Sistine Chapel and St. Peter's Basilica",
          "Lunch in Vatican City",
          "Afternoon at leisure for shopping"
        ]
      },
      {
        day: 8,
        title: "Travel to Barcelona",
        activities: [
          "Morning flight to Barcelona",
          "Check into luxury hotel on Las Ramblas",
          "Evening tapas tour in Gothic Quarter",
          "Flamenco show experience"
        ]
      },
      {
        day: 9,
        title: "Barcelona Architecture",
        activities: [
          "Visit Sagrada Familia with skip-the-line access",
          "Explore Park Güell and Casa Batlló",
          "Lunch at a traditional Catalan restaurant",
          "Evening at leisure in the city"
        ]
      },
      {
        day: 10,
        title: "Barcelona Culture",
        activities: [
          "Visit Picasso Museum and Gothic Quarter",
          "Traditional paella cooking class",
          "Afternoon at Barceloneta Beach",
          "Evening at a rooftop bar with city views"
        ]
      },
      {
        day: 11,
        title: "Travel to Amsterdam",
        activities: [
          "Morning flight to Amsterdam",
          "Check into luxury canal-side hotel",
          "Evening canal cruise with dinner",
          "Explore the historic city center"
        ]
      },
      {
        day: 12,
        title: "Amsterdam Museums",
        activities: [
          "Visit Rijksmuseum and Van Gogh Museum",
          "Anne Frank House tour",
          "Lunch at a traditional Dutch restaurant",
          "Afternoon at leisure for shopping"
        ]
      },
      {
        day: 13,
        title: "Amsterdam Experience",
        activities: [
          "Visit Keukenhof Gardens (seasonal) or Zaanse Schans",
          "Traditional Dutch cheese tasting",
          "Evening farewell dinner cruise",
          "Final night in Amsterdam"
        ]
      },
      {
        day: 14,
        title: "Departure",
        activities: [
          "Final morning in Amsterdam",
          "Transfer to airport for departure"
        ]
      }
    ],
    inclusions: [
      "Luxury 5-star accommodations",
      "Private airport transfers",
      "All domestic flights between cities",
      "Professional English-speaking guides",
      "Skip-the-line access to major attractions",
      "Daily breakfast and selected meals",
      "Private tours and exclusive experiences"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses and shopping",
      "Additional meals not specified",
      "Optional activities and tours",
      "Tips and gratuities"
    ],
    faqs: [
      {
        question: "What's included in the luxury accommodations?",
        answer: "All hotels are 5-star properties in prime locations with premium amenities, concierge service, and luxury facilities."
      },
      {
        question: "Are meals included?",
        answer: "Daily breakfast is included, plus selected lunches and dinners at premium restaurants. Some meals are at leisure for you to explore local cuisine."
      },
      {
        question: "What's the group size?",
        answer: "Maximum 12 guests to ensure personalized attention and intimate experiences at each destination."
      },
      {
        question: "Do I need visas for all countries?",
        answer: "Visa requirements depend on your nationality. We provide guidance and assistance with visa applications for all countries on the tour."
      },
      {
        question: "What's the dress code?",
        answer: "Smart casual for most activities. Some restaurants and venues may require more formal attire. We'll provide specific guidance before departure."
      }
    ]
  }
  // Add more packages here as needed
};

interface PackagePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PackagePage({ params }: PackagePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const resolvedParams = use(params);
  const packageData = packagesData[resolvedParams.slug as keyof typeof packagesData];
  
  if (!packageData) {
    notFound();
  }

  const handleGetQuote = () => {
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
            <div className="mb-6">
              <Link href="/packages" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Packages
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              {packageData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-body mb-8">
              {packageData.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                {packageData.duration}
              </Badge>
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                {packageData.groupSize}
              </Badge>
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                {packageData.rating} Rating
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-button px-8 py-3" onClick={handleGetQuote}>
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                Download Itinerary
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              About This Package
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {packageData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Package Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="premium-card h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Star className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{highlight}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Detailed Itinerary
            </h2>
            <div className="space-y-8">
              {packageData.itinerary.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {day.day}
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                          Day {day.day} – {day.title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {day.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Inclusions */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                <Check className="h-6 w-6 text-green-600 mr-3" />
                What&apos;s Included
              </h3>
              <div className="space-y-4">
                {packageData.inclusions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                <X className="h-6 w-6 text-red-600 mr-3" />
                Not Included
              </h3>
              <div className="space-y-4">
                {packageData.exclusions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {packageData.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="premium-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
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
              Ready to Book This Package?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get your personalized quote for this amazing {packageData.name} experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-button px-8 py-3" onClick={handleGetQuote}>
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={packageData.name}
      />
    </Layout>
  );
}
