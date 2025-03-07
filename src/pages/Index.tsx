
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { animateOnScroll } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Initialize animations
    const cleanup = animateOnScroll();
    
    // Clean up animation observers when component unmounts
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
