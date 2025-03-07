
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { animateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "The financial software solution developed by Money Bridge has transformed our lending operations. We've seen a 40% increase in processing efficiency and significantly reduced our decision time.",
    author: "Sarah Johnson",
    position: "CTO, Meridian Financial",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    content: "Their payment processing platform has been rock-solid for our business. The integration was seamless, and the system has handled our growth from 10,000 to 250,000 transactions per month without a hitch.",
    author: "Michael Chen",
    position: "Head of Operations, PayFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    content: "Working with Money Bridge on our wealth management platform was a game-changer. Their attention to detail and deep understanding of investment processes resulted in a product our clients absolutely love.",
    author: "Alexandra Santos",
    position: "Product Director, Wealth Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const cleanup = animateOnScroll();
    return cleanup;
  }, []);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto appear-animation">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-finance-blue mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-finance-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            We've helped financial institutions of all sizes transform their operations with custom software solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass p-8 md:p-10 rounded-2xl">
                    <Quote className="h-10 w-10 text-finance-blue opacity-20 mb-6" />
                    <p className="text-lg md:text-xl text-finance-navy mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-finance-navy">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-finance-blue w-6" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              onClick={prevSlide}
              className="rounded-full h-12 w-12 bg-white text-finance-navy shadow-md hover:bg-finance-blue hover:text-white pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextSlide}
              className="rounded-full h-12 w-12 bg-white text-finance-navy shadow-md hover:bg-finance-blue hover:text-white pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
