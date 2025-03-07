
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-finance-navy pt-16 pb-8 text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white mr-2">Money</span>
              <span className="text-2xl font-bold text-finance-blue-light">Bridge</span>
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Custom financial software development for forward-thinking institutions. Secure, scalable, and user-friendly solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-500 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Banking Systems",
                "Payment Processing",
                "Investment Platforms",
                "Lending Software",
                "Compliance Solutions",
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                "Documentation",
                "Support Center",
                "API Reference",
                "Privacy Policy",
                "Terms of Service",
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} MoneyBridge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Use</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
