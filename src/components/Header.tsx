
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#agents", label: "AI Agents" },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="block">
              <img
                src="/lovable-uploads/dfb03ea5-aa2e-4225-b2ee-5646200da187.png"
                alt="Ekam Logo"
                className="h-14 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-ekam-primary transition-colors font-medium text-sm whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-ekam-primary transition-colors font-medium text-sm whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="https://intelliflo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-ekam-primary transition-colors font-medium text-sm whitespace-nowrap inline-flex items-center gap-1"
            >
              Intelliflo
              <ExternalLink className="h-3 w-3" />
            </a>
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              className="bg-ekam-primary hover:bg-ekam-primary/90 text-white shadow-md hover:shadow-lg transition-all h-10 px-6 rounded-lg text-sm font-medium"
              onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5 transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}>
          <nav className="flex flex-col space-y-1 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5 rounded-lg transition-all font-medium"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5 rounded-lg transition-all font-medium"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="https://intelliflo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5 rounded-lg transition-all font-medium inline-flex items-center gap-1"
              onClick={toggleMenu}
            >
              Intelliflo
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="pt-2 px-4">
              <Button
                className="bg-ekam-primary hover:bg-ekam-primary/90 text-white w-full h-12"
                onClick={() => {
                  window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank');
                  toggleMenu();
                }}
              >
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
