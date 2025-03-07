
import { useEffect, useState } from 'react';
import { Check, Mail, MessageSquare, Phone } from 'lucide-react';
import { animateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const cleanup = animateOnScroll();
    return cleanup;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch with you shortly.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-finance-navy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-finance-blue opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-finance-blue-light opacity-5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col space-y-8 appear-animation" style={{transitionDelay: '0.1s'}}>
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Services?
              </h2>
              <p className="text-blue-100/80 text-lg max-w-md">
                Let's discuss how our custom financial software solutions can help your organization innovate and grow.
              </p>
            </div>
            
            <div className="flex flex-col space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "contact@moneybridge.com",
                  link: "mailto:contact@moneybridge.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  description: "+1 (555) 123-4567",
                  link: "tel:+15551234567",
                },
                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  description: "Available 24/7 for urgent inquiries",
                  link: "#",
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 appear-animation" 
                  style={{transitionDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-blue-200 hover:text-blue-100 transition-colors"
                    >
                      {item.description}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="appear-animation" style={{transitionDelay: '0.4s'}}>
            <div className="glass-dark p-6 md:p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-blue-100">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-blue-100">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-blue-100">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-blue-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-md bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 rounded-xl transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
