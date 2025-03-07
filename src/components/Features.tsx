
import { useEffect } from 'react';
import { CheckCircle, Lock, TrendingUp, Zap, Code, Users } from 'lucide-react';
import { animateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";

const Features = () => {
  useEffect(() => {
    const cleanup = animateOnScroll();
    return cleanup;
  }, []);

  const features = [
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "Multi-layered security architecture with encryption, secure authentication, and regulatory compliance.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Systems designed to handle growing transaction volumes and user bases without performance degradation.",
    },
    {
      icon: Zap,
      title: "High-Performance",
      description: "Optimized code and infrastructure for lightning-fast processing of financial transactions.",
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless integration with banking APIs, payment processors, and financial data providers.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces that simplify complex financial processes for end-users.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Features List */}
          <div className="flex flex-col space-y-8 appear-animation" style={{transitionDelay: '0.1s'}}>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-finance-navy">
                Why Choose Our Financial Software Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-md">
                We combine deep financial domain expertise with cutting-edge technology to deliver secure, reliable, and user-friendly solutions.
              </p>
            </div>
            
            <div className="flex flex-col space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 appear-animation" 
                  style={{transitionDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="h-6 w-6 text-finance-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-finance-navy mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                Learn About Our Process
              </Button>
            </div>
          </div>
          
          {/* Stats and Image */}
          <div className="relative appear-animation" style={{transitionDelay: '0.4s'}}>
            <div className="relative z-10 glass overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1000&auto=format&fit=crop"
                alt="Financial analysis dashboard" 
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-finance-navy/90 to-finance-navy/0 p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 text-white">
                  {[
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "100+", label: "Financial Projects" },
                    { value: "10+", label: "Years Experience" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs md:text-sm text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-finance-blue rounded-full blur-xl opacity-20" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-finance-blue-light rounded-full blur-lg opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
