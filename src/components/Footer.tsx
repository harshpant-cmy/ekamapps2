
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ekam-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/dfb03ea5-aa2e-4225-b2ee-5646200da187.png" 
              alt="Ekam Logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-ekam-secondary/80 text-sm">
              Transform Your Business With AI-Powered Automation
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@ekamapps.com" className="hover:text-ekam-secondary transition-colors">
                  hello@ekamapps.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:+919971117162" className="hover:text-ekam-secondary transition-colors">
                  +91 99711 17162
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ekam-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-ekam-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ekam-secondary transition-colors">About</a></li>
              <li><a href="#agents" className="hover:text-ekam-secondary transition-colors">AI Agents</a></li>
              <li><a href="#contact" className="hover:text-ekam-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ekam-secondary">AI Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>Lead Enrichment</li>
              <li>Content Automation</li>
              <li>Customer Support</li>
              <li>Sales Automation</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ekam-secondary">Get Started</h3>
            <p className="text-sm text-ekam-secondary/80">
              Ready to transform your business with AI?
            </p>
            <a 
              href="https://calendly.com/nitin26gupta/callwithnitin?month=2025-05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-ekam-secondary text-ekam-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-ekam-secondary/90 transition-colors"
            >
              <span>Book Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-ekam-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm text-ekam-secondary/60">
            © 2025 Ekam. All rights reserved. | Built with ❤️ for businesses ready to embrace AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
