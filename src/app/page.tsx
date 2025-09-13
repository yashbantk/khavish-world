import Layout from "@/components/layout";
import HeroSection from "@/components/sections/hero-section";
import FeaturedDestinations from "@/components/sections/featured-destinations";
import WhyChooseUs from "@/components/sections/why-choose-us";
import PackagesSection from "@/components/sections/packages-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}