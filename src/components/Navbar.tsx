
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-finance-navy mr-2">Money</span>
            <span className="text-2xl font-bold text-finance-blue">Bridge</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'Solutions', 'Why Us', 'Case Studies', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-finance-blue transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-finance-blue hover:bg-finance-blue/90 text-white rounded-full px-6 transition-all duration-200 hover:shadow-md"
            >
              Get Started
            </Button>
          </nav>
          
          <button 
            className="md:hidden text-finance-navy" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slideDown">
          <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4">
            {['Services', 'Solutions', 'Why Us', 'Case Studies', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-base font-medium text-gray-700 hover:text-finance-blue py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-finance-blue hover:bg-finance-blue/90 text-white rounded-full w-full mt-2"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
