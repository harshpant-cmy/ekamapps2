
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink, ChevronDown, FileCheck, Workflow, ArrowRight, Download, HelpCircle, BookOpen, Presentation, FolderOpen, MessageCircle, Users, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Check if we're still in the hero section (dark background)
      const heroHeight = window.innerHeight * 0.9;
      setIsOnDarkSection(scrollY < heroHeight - 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#agents", label: "AI Agents" },
    { href: "https://turrant.ai/blog.html", label: "Blog", isExternal: true },
    { href: "/#contact", label: "Contact" },
  ];

  const products = [
    {
      id: "turrant",
      sectionId: "#turrant",
      externalUrl: "https://turrant.ai",
      name: "Turrant.ai",
      tagline: "Document Intelligence Platform",
      description: "AI-powered document collection & verification via WhatsApp",
      icon: FileCheck,
      isNew: true,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: "intelliflo",
      sectionId: null,
      externalUrl: "https://intelliflo.ai",
      name: "Intelliflo",
      tagline: "Workflow Automation",
      description: "Intelligent process automation for enterprises",
      icon: Workflow,
      isNew: false,
      gradient: "from-blue-500 to-indigo-500"
    },
  ];

  const resources = {
    downloads: [
      {
        id: "portfolio",
        name: "Company Portfolio",
        description: "Overview of our services and capabilities",
        url: "https://drive.google.com/file/d/1jW6TW97sk5uFVHp6tXp95xg3TjK7qsvn/view",
        icon: FolderOpen
      },
      {
        id: "turrant-deck",
        name: "Turrant.ai Presentation",
        description: "Product deck for document intelligence platform",
        url: "https://drive.google.com/file/d/1Z_QGYKn1AuhX4phWJmJc1pA36N59XV_d/view",
        icon: Presentation
      },
    ],
    learn: [
      {
        id: "case-studies",
        name: "Case Studies",
        description: "Real results from our AI solutions",
        href: "/case-studies",
        isRoute: true,
        icon: FileText
      },
      {
        id: "blog",
        name: "Blog",
        description: "Insights on AI, automation, and more",
        href: "https://turrant.ai/blog.html",
        isExternal: true,
        icon: BookOpen
      },
      {
        id: "careers",
        name: "Careers",
        description: "Join our growing team",
        href: "/careers",
        isRoute: true,
        icon: Users
      },
      {
        id: "faq",
        name: "FAQ",
        description: "Frequently asked questions",
        href: "#faq",
        icon: HelpCircle
      },
    ]
  };

  // Determine text colors based on scroll position
  const isDarkMode = isOnDarkSection && !isScrolled;
  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  const textHoverColor = isDarkMode ? "hover:text-white/80" : "hover:text-ekam-primary";
  const underlineColor = isDarkMode ? "bg-white" : "bg-ekam-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : isDarkMode
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="block group">
              <img
                src="/lovable-uploads/dfb03ea5-aa2e-4225-b2ee-5646200da187.png"
                alt="Ekam Logo"
                className={`h-12 w-auto object-contain transition-all duration-300 cursor-pointer group-hover:scale-105 ${
                  isDarkMode ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap group`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineColor} group-hover:w-full transition-all duration-300`}></span>
                </a>
              ) : link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap group`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineColor} group-hover:w-full transition-all duration-300`}></span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap group`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineColor} group-hover:w-full transition-all duration-300`}></span>
                </a>
              )
            )}

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap inline-flex items-center gap-1`}
              >
                Products
                <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 min-w-[320px]">
                  {/* Products Header */}
                  <div className="px-3 py-2 mb-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Our Products</p>
                  </div>

                  {/* Product Items */}
                  <div className="space-y-1">
                    {products.map((product) => {
                      const IconComponent = product.icon;
                      return (
                        <div key={product.id} className="group/item">
                          <a
                            href={product.sectionId || product.externalUrl}
                            onClick={(e) => {
                              if (product.sectionId) {
                                e.preventDefault();
                                const element = document.querySelector(product.sectionId);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-900 text-sm">{product.name}</span>
                                {product.isNew && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-semibold">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{product.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover/item:text-ekam-primary group-hover/item:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                          </a>

                          {/* External link option */}
                          <div className="flex items-center justify-end px-3 pb-2 -mt-1">
                            <a
                              href={product.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-ekam-primary transition-colors"
                            >
                              Visit website
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 my-2" />

                  {/* View All Projects Link */}
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-ekam-primary/5 transition-all duration-200 group/all"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover/all:text-ekam-primary">View all projects</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover/all:text-ekam-primary group-hover/all:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap inline-flex items-center gap-1`}
              >
                Resources
                <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[480px]">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column - Downloads */}
                    <div>
                      <div className="flex items-center gap-2 px-2 mb-3">
                        <Download className="h-4 w-4 text-ekam-primary" />
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Downloads</p>
                      </div>
                      <div className="space-y-1">
                        {resources.downloads.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <a
                              key={item.id}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                            >
                              <div className="w-9 h-9 rounded-lg bg-ekam-primary/10 flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-4 w-4 text-ekam-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                                  <ExternalLink className="h-3 w-3 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column - Learn & Explore */}
                    <div>
                      <div className="flex items-center gap-2 px-2 mb-3">
                        <BookOpen className="h-4 w-4 text-ekam-primary" />
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Learn & Explore</p>
                      </div>
                      <div className="space-y-1">
                        {resources.learn.map((item) => {
                          const IconComponent = item.icon;
                          const colorMap: Record<string, { bg: string; text: string }> = {
                            "case-studies": { bg: "bg-emerald-50", text: "text-emerald-600" },
                            blog: { bg: "bg-blue-50", text: "text-blue-600" },
                            careers: { bg: "bg-purple-50", text: "text-purple-600" },
                            faq: { bg: "bg-amber-50", text: "text-amber-600" }
                          };
                          const colors = colorMap[item.id] || { bg: "bg-gray-50", text: "text-gray-600" };

                          return item.isExternal ? (
                            <a
                              key={item.id}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                            >
                              <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className={`h-4 w-4 ${colors.text}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                                  <ExternalLink className="h-3 w-3 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </a>
                          ) : item.isRoute ? (
                            <Link
                              key={item.id}
                              to={item.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                            >
                              <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className={`h-4 w-4 ${colors.text}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-gray-900 text-sm block">{item.name}</span>
                                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </Link>
                          ) : (
                            <a
                              key={item.id}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(item.href);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                            >
                              <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className={`h-4 w-4 ${colors.text}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-gray-900 text-sm block">{item.name}</span>
                                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Contact CTA */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector('#contact');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-ekam-primary/5 hover:bg-ekam-primary/10 transition-all duration-200 group/contact"
                        >
                          <div className="w-9 h-9 rounded-lg bg-ekam-primary flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-ekam-primary text-sm block">Get in Touch</span>
                            <p className="text-xs text-gray-500">Schedule a free consultation</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-ekam-primary group-hover/contact:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              className={`${
                isDarkMode
                  ? "bg-white text-ekam-primary hover:bg-white/90"
                  : "bg-ekam-primary hover:bg-ekam-primary/90 text-white"
              } shadow-md hover:shadow-lg transition-all h-10 px-6 rounded-lg text-sm font-medium`}
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg ${textColor} ${textHoverColor} hover:bg-white/10 transition-all ml-auto`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[800px] pb-4" : "max-h-0"
          }`}
        >
          <nav className={`flex flex-col space-y-1 pt-4 border-t ${isDarkMode ? "border-white/10" : "border-gray-100"}`}>
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-2`}
                  onClick={toggleMenu}
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              ) : link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              )
            )}

            {/* Products section in mobile */}
            <div className={`px-4 py-2 ${isDarkMode ? "text-white/50" : "text-gray-400"} text-xs uppercase tracking-wider font-semibold`}>
              Our Products
            </div>
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <a
                  key={product.id}
                  href={product.sectionId || product.externalUrl}
                  onClick={(e) => {
                    if (product.sectionId) {
                      e.preventDefault();
                      const element = document.querySelector(product.sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    toggleMenu();
                  }}
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-3`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{product.name}</span>
                      {product.isNew && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-semibold">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>{product.description}</p>
                  </div>
                </a>
              );
            })}

            {/* View All Projects - Mobile */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                toggleMenu();
              }}
              className={`px-4 py-3 ${isDarkMode ? "text-white/70 hover:bg-white/10" : "text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-2`}
            >
              <ArrowRight className="h-4 w-4" />
              View all projects
            </a>

            {/* Resources section in mobile */}
            <div className={`px-4 py-2 mt-2 ${isDarkMode ? "text-white/50" : "text-gray-400"} text-xs uppercase tracking-wider font-semibold`}>
              Resources
            </div>

            {/* Downloads */}
            {resources.downloads.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-3`}
                  onClick={toggleMenu}
                >
                  <div className="w-8 h-8 rounded-lg bg-ekam-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-4 w-4 text-ekam-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{item.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </div>
                    <p className={`text-xs ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>{item.description}</p>
                  </div>
                </a>
              );
            })}

            {/* Learn & Explore */}
            {resources.learn.map((item) => {
              const IconComponent = item.icon;
              const colorMap: Record<string, { bg: string; text: string }> = {
                "case-studies": { bg: "bg-emerald-50", text: "text-emerald-600" },
                blog: { bg: "bg-blue-50", text: "text-blue-600" },
                careers: { bg: "bg-purple-50", text: "text-purple-600" },
                faq: { bg: "bg-amber-50", text: "text-amber-600" }
              };
              const colors = colorMap[item.id] || { bg: "bg-gray-50", text: "text-gray-600" };

              return item.isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-3`}
                  onClick={toggleMenu}
                >
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-4 w-4 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{item.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </div>
                    <p className={`text-xs ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>{item.description}</p>
                  </div>
                </a>
              ) : item.isRoute ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-3`}
                  onClick={toggleMenu}
                >
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-4 w-4 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{item.name}</span>
                    <p className={`text-xs ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>{item.description}</p>
                  </div>
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    toggleMenu();
                  }}
                  className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium flex items-center gap-3`}
                >
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-4 w-4 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{item.name}</span>
                    <p className={`text-xs ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>{item.description}</p>
                  </div>
                </a>
              );
            })}

            <div className="pt-2 px-4">
              <Button
                className={`${
                  isDarkMode
                    ? "bg-white text-ekam-primary hover:bg-white/90"
                    : "bg-ekam-primary hover:bg-ekam-primary/90 text-white"
                } w-full h-12 rounded-lg`}
                onClick={() => {
                  window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank');
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
