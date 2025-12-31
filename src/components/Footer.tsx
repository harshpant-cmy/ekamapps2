
import { Mail, Phone, ExternalLink, ArrowRight, Bot, Linkedin, Twitter, MapPin, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#agents", label: "AI Agents" },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "/#contact", label: "Contact" },
  ];

  const solutions = [
    { href: "/agent/lead-enrichment", label: "Lead Enrichment" },
    { href: "/agent/content-automation", label: "Content Automation" },
    { href: "/agent/customer-support", label: "Customer Support" },
    { href: "/agent/sales-multichannel", label: "Sales Automation" },
    { href: "/agent/blog-posting", label: "Blog Automation" },
  ];

  const products = [
    { href: "https://turrant.ai", label: "Turrant.ai", external: true, highlight: true },
    { href: "https://intelliflo.ai", label: "Intelliflo", external: true },
  ];

  const technologies = ["LangChain", "n8n", "OpenAI", "Claude", "Pinecone", "Supabase"];

  return (
    <footer className="relative bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] text-white overflow-hidden">
      {/* Background effects - Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ekam-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with CTA */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Transform with AI?
              </h3>
              <p className="text-white/60">
                Schedule a free consultation and discover how AI can accelerate your business growth.
              </p>
            </div>
            <a
              href="https://calendar.app.google/p5iQtkxptFhS75GW8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-ekam-primary hover:bg-white/90 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="block group">
              <img
                src="/lovable-uploads/dfb03ea5-aa2e-4225-b2ee-5646200da187.png"
                alt="Ekam Logo"
                className="h-12 w-auto filter brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Enterprise AI solutions built on 25+ years of technology expertise. We help businesses automate, scale, and innovate with intelligent AI agents and document automation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@ekamapps.com" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>hello@ekamapps.com</span>
              </a>
              <a href="tel:+919971117162" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 99711 17162</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Delhi NCR, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/ekamapps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com/ekamapps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <Twitter className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              AI Agents
            </h3>
            <ul className="space-y-3">
              {solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Technologies */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Products
              </h3>
              <ul className="space-y-3">
                {products.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                      {link.highlight && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold">
                          NEW
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white/50 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white/40">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Award className="h-4 w-4" />
              <span className="text-xs">19+ Years Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Bot className="h-4 w-4" />
              <span className="text-xs">10+ AI Agents</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <span className="text-xs">Running 24/7</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/40">
              <span>&copy; {currentYear} Ekam. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-white/40 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
