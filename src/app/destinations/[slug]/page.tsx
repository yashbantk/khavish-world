"use client";

import { useState, use } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Star, Check, X, Calendar } from "lucide-react";
import Link from "next/link";
import QuoteModal from "@/components/quote-modal";
import { notFound } from "next/navigation";

// Destination data - you can expand this with more destinations
const destinationsData = {
  "paris-france": {
    name: "Paris, France",
    title: "Paris, France",
    subtitle: "The City of Light",
    description: "The City of Light awaits with its romantic charm, world-class cuisine, and iconic landmarks. Experience the magic of Paris with its beautiful architecture, rich history, and vibrant culture.",
    duration: "7 Days",
    bestTime: "April - October",
    rating: 4.9,
    highlights: [
      "Eiffel Tower - Iconic iron lattice tower and symbol of Paris",
      "Louvre Museum - World's largest art museum and historic monument",
      "Notre-Dame Cathedral - Gothic masterpiece with stunning architecture",
      "Champs-Élysées - Famous avenue for shopping and entertainment",
      "Seine River Cruise - Romantic boat ride through the heart of Paris",
      "Montmartre - Historic hilltop neighborhood with artistic heritage"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & City Introduction",
        activities: [
          "Arrive in Paris and check into hotel",
          "Evening walk along the Seine River",
          "Welcome dinner at a traditional French bistro"
        ]
      },
      {
        day: 2,
        title: "Iconic Landmarks Tour",
        activities: [
          "Visit the Eiffel Tower and take in panoramic views",
          "Explore the Louvre Museum and see the Mona Lisa",
          "Walk through the Tuileries Garden"
        ]
      },
      {
        day: 3,
        title: "Historic Paris",
        activities: [
          "Tour Notre-Dame Cathedral (exterior)",
          "Visit Sainte-Chapelle for stunning stained glass",
          "Explore the Latin Quarter and Sorbonne University"
        ]
      },
      {
        day: 4,
        title: "Art & Culture",
        activities: [
          "Visit Musée d'Orsay for Impressionist masterpieces",
          "Explore Montmartre and Sacré-Cœur Basilica",
          "Evening at a traditional cabaret show"
        ]
      },
      {
        day: 5,
        title: "Royal Heritage",
        activities: [
          "Day trip to Palace of Versailles",
          "Tour the Hall of Mirrors and Royal Apartments",
          "Stroll through the magnificent gardens"
        ]
      },
      {
        day: 6,
        title: "Shopping & Leisure",
        activities: [
          "Shop on Champs-Élysées and Avenue Montaigne",
          "Visit Galeries Lafayette for luxury shopping",
          "Relax at a Parisian café and people-watch"
        ]
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Final morning in Paris",
          "Transfer to airport for departure"
        ]
      }
    ],
    inclusions: [
      "Private airport transfers",
      "6 nights accommodation in 4-star hotel",
      "Daily breakfast",
      "Professional English-speaking guide",
      "Entrance fees to all major attractions",
      "Metro passes for city transportation",
      "Welcome dinner and farewell lunch"
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
        question: "What's the best time to visit Paris?",
        answer: "Spring (April-June) and fall (September-November) offer pleasant weather and fewer crowds. Summer is popular but can be crowded and expensive."
      },
      {
        question: "Do I need to speak French?",
        answer: "While French is the official language, English is widely spoken in tourist areas. Learning basic French phrases is appreciated by locals."
      },
      {
        question: "Is Paris safe for tourists?",
        answer: "Paris is generally safe for tourists. Use common sense, be aware of pickpockets in crowded areas, and keep valuables secure."
      },
      {
        question: "What currency is used in Paris?",
        answer: "France uses the Euro (€). Credit cards are widely accepted, but it&apos;s good to have some cash for small purchases."
      },
      {
        question: "What should I pack for Paris?",
        answer: "Pack comfortable walking shoes, layers for changing weather, and dress stylishly as Parisians appreciate good fashion sense."
      }
    ]
  },
  "tokyo-japan": {
    name: "Tokyo, Japan",
    title: "Tokyo, Japan",
    subtitle: "Where Tradition Meets Innovation",
    description: "Experience the perfect blend of tradition and modernity in Japan's vibrant capital. From ancient temples to cutting-edge technology, Tokyo offers an unforgettable journey through time and culture.",
    duration: "10 Days",
    bestTime: "March - May, September - November",
    rating: 4.8,
    highlights: [
      "Senso-ji Temple - Tokyo's oldest temple in historic Asakusa",
      "Tokyo Skytree - Modern tower with panoramic city views",
      "Shibuya Crossing - World's busiest pedestrian crossing",
      "Tsukiji Outer Market - Fresh seafood and traditional cuisine",
      "Meiji Shrine - Peaceful shrine dedicated to Emperor Meiji",
      "Harajuku - Youth culture and fashion district"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        activities: [
          "Arrive in Tokyo and check into hotel",
          "Evening orientation walk in Ginza district",
          "Welcome dinner with traditional Japanese cuisine"
        ]
      },
      {
        day: 2,
        title: "Historic Tokyo",
        activities: [
          "Visit Senso-ji Temple in Asakusa",
          "Explore Nakamise shopping street",
          "Traditional rickshaw ride through historic district"
        ]
      },
      {
        day: 3,
        title: "Modern Tokyo",
        activities: [
          "Tokyo Skytree observation deck",
          "Explore Akihabara electronics district",
          "Evening in Shibuya with famous crossing"
        ]
      },
      {
        day: 4,
        title: "Cultural Immersion",
        activities: [
          "Meiji Shrine and Yoyogi Park",
          "Harajuku fashion district exploration",
          "Traditional tea ceremony experience"
        ]
      },
      {
        day: 5,
        title: "Food & Markets",
        activities: [
          "Tsukiji Outer Market tour",
          "Sushi making class",
          "Evening in Roppongi entertainment district"
        ]
      },
      {
        day: 6,
        title: "Day Trip to Nikko",
        activities: [
          "Visit Toshogu Shrine complex",
          "Explore beautiful natural surroundings",
          "Return to Tokyo in evening"
        ]
      },
      {
        day: 7,
        title: "Traditional Arts",
        activities: [
          "Kabuki theater performance",
          "Traditional crafts workshop",
          "Evening in traditional ryokan district"
        ]
      },
      {
        day: 8,
        title: "Modern Entertainment",
        activities: [
          "Tokyo Disneyland or DisneySea",
          "Evening in Odaiba entertainment complex"
        ]
      },
      {
        day: 9,
        title: "Shopping & Leisure",
        activities: [
          "Shopping in Ginza luxury district",
          "Traditional onsen (hot spring) experience",
          "Farewell dinner with kaiseki cuisine"
        ]
      },
      {
        day: 10,
        title: "Departure",
        activities: [
          "Final morning in Tokyo",
          "Transfer to airport for departure"
        ]
      }
    ],
    inclusions: [
      "Private airport transfers",
      "9 nights accommodation in 4-star hotel",
      "Daily breakfast",
      "Professional English-speaking guide",
      "Entrance fees to all major attractions",
      "JR Pass for train transportation",
      "Traditional experiences and workshops"
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
        question: "What's the best time to visit Tokyo?",
        answer: "Spring (March-May) for cherry blossoms and fall (September-November) for pleasant weather and autumn colors."
      },
      {
        question: "Do I need a visa for Japan?",
        answer: "Visa requirements depend on your nationality. Many countries have visa-free entry for short stays. Check with your local Japanese embassy."
      },
      {
        question: "Is Tokyo expensive?",
        answer: "Tokyo can be expensive, but there are options for all budgets. Street food, convenience stores, and capsule hotels offer affordable alternatives."
      },
      {
        question: "What should I know about Japanese etiquette?",
        answer: "Remove shoes indoors, bow when greeting, don&apos;t eat while walking, and be quiet on public transportation. Respect is highly valued in Japanese culture."
      },
      {
        question: "Can I use credit cards in Tokyo?",
        answer: "Major credit cards are accepted in hotels, restaurants, and large stores. However, many small shops and restaurants are cash-only, so carry yen."
      }
    ]
  }
  // Add more destinations here as needed
};

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const resolvedParams = use(params);
  const destination = destinationsData[resolvedParams.slug as keyof typeof destinationsData];
  
  if (!destination) {
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
              <Link href="/destinations" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Destinations
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              {destination.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-body mb-8">
              {destination.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                {destination.duration}
              </Badge>
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Best Time: {destination.bestTime}
              </Badge>
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                {destination.rating} Rating
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

      {/* Destination Description */}
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
              About {destination.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {destination.description}
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
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.highlights.map((highlight, index) => (
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
              {destination.itinerary.map((day, index) => (
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
                {destination.inclusions.map((item, index) => (
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
                {destination.exclusions.map((item, index) => (
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
              {destination.faqs.map((faq, index) => (
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
              Ready to Explore {destination.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get your personalized quote for this amazing {destination.name} experience.
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
        destination={destination.name}
      />
    </Layout>
  );
}
