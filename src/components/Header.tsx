
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/dfb03ea5-aa2e-4225-b2ee-5646200da187.png" 
              alt="Ekam Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-ekam-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-ekam-primary transition-colors">
              About
            </a>
            <a href="#agents" className="text-gray-700 hover:text-ekam-primary transition-colors">
              AI Agents
            </a>
            <a href="#contact" className="text-gray-700 hover:text-ekam-primary transition-colors">
              Contact
            </a>
            <Button className="bg-ekam-primary hover:bg-ekam-primary/90 text-white">
              Book Demo
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-ekam-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-ekam-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-ekam-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#agents"
                className="text-gray-700 hover:text-ekam-primary transition-colors"
                onClick={toggleMenu}
              >
                AI Agents
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-ekam-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="bg-ekam-primary hover:bg-ekam-primary/90 text-white w-fit">
                Book Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
