
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Shield, Zap, BarChart } from "lucide-react";
import { animateOnScroll } from "@/utils/animations";

const Hero = () => {
  useEffect(() => {
    const cleanup = animateOnScroll();
    return cleanup;
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl appear-animation" style={{transitionDelay: '0.1s'}}>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-finance-blue-light font-medium animate-fadeIn">
              <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-finance-blue-light"></span>
              Financial Software Development Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-finance-navy">
              Building Advanced <span className="text-gradient">Financial Solutions</span> for Tomorrow
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Custom software development for banking, investment, lending, payment processing, and financial management systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                Schedule Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-finance-blue text-finance-blue hover:bg-finance-blue/5 rounded-full px-8 py-6 text-base transition-all duration-300">
                View Our Work
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 pt-4">
              {[
                { icon: Shield, label: "Secure By Design" },
                { icon: Zap, label: "High Performance" },
                { icon: BarChart, label: "Data Driven" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center appear-animation" style={{transitionDelay: `${0.3 + index * 0.1}s`}}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-finance-blue mb-3">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative appear-animation" style={{transitionDelay: '0.4s'}}>
            <div className="relative z-10 glass overflow-hidden rounded-2xl shadow-xl animate-slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                alt="Financial dashboard" 
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-finance-blue rounded-xl blur-md opacity-20 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-finance-blue-light rounded-full blur-md opacity-10 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowRight className="h-6 w-6 text-finance-blue transform rotate-90" />
        <span className="text-xs text-gray-500 mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
