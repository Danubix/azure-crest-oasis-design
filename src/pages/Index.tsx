
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import RoomsCarousel from "@/components/home/RoomsCarousel";
import ExperiencesGrid from "@/components/home/ExperiencesGrid";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Update the page title
    document.title = "Azure Crest Boutique Hotel | Luxury Adriatic Retreat";
  }, []);

  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      <RoomsCarousel />
      <ExperiencesGrid />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
