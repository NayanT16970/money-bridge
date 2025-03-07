
import { useEffect } from 'react';
import { Building, CreditCard, PieChart, Briefcase, Shield, Wallet } from 'lucide-react';
import { animateOnScroll } from "@/utils/animations";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, delay, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] appear-animation",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-finance-blue">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-finance-navy">{title}</h3>
        
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    const cleanup = animateOnScroll();
    return cleanup;
  }, []);

  const services = [
    {
      icon: Building,
      title: "Banking Systems",
      description: "Custom core banking solutions, mobile banking apps, and digital transformation for financial institutions.",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment gateways, digital wallet solutions, and real-time transaction processing systems.",
    },
    {
      icon: PieChart,
      title: "Investment Platforms",
      description: "Trading platforms, portfolio management tools, and robo-advisory solutions for wealth management.",
    },
    {
      icon: Briefcase,
      title: "Lending Software",
      description: "Loan origination, credit scoring, and automated underwriting systems for traditional and P2P lending.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "KYC/AML solutions, fraud detection, and regulatory reporting tools to ensure compliance.",
    },
    {
      icon: Wallet,
      title: "Personal Finance",
      description: "Budgeting apps, expense tracking, and financial planning tools for individuals and small businesses.",
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-50/70 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto appear-animation">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-finance-blue mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-finance-navy mb-6">
            Financial Software Solutions for Every Need
          </h2>
          <p className="text-gray-600 text-lg">
            We build secure, scalable, and user-friendly financial software tailored to your unique business requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
