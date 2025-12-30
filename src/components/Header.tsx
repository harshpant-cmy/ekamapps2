
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
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
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "/#contact", label: "Contact" },
  ];

  const externalLinks = [
    { href: "https://turrant.ai", label: "Turrant.ai", highlight: true },
    { href: "https://intelliflo.ai", label: "Intelliflo" },
  ];

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
              link.isRoute ? (
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

            {/* Products Dropdown Indicator */}
            <div className="relative group">
              <button
                className={`relative ${textColor} ${textHoverColor} transition-colors font-medium text-sm whitespace-nowrap inline-flex items-center gap-1`}
              >
                Products
                <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[180px]">
                  {externalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        link.highlight
                          ? "text-ekam-primary hover:bg-ekam-primary/5"
                          : "text-gray-700 hover:bg-gray-50 hover:text-ekam-primary"
                      }`}
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                      {link.highlight && (
                        <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-semibold">
                          NEW
                        </span>
                      )}
                    </a>
                  ))}
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
            isMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <nav className={`flex flex-col space-y-1 pt-4 border-t ${isDarkMode ? "border-white/10" : "border-gray-100"}`}>
            {navLinks.map((link) =>
              link.isRoute ? (
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
            <div className={`px-4 py-2 ${isDarkMode ? "text-white/50" : "text-gray-400"} text-xs uppercase tracking-wider`}>
              Products
            </div>
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-3 ${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:text-ekam-primary hover:bg-ekam-primary/5"} rounded-lg transition-all font-medium inline-flex items-center gap-2`}
                onClick={toggleMenu}
              >
                {link.label}
                <ExternalLink className="h-4 w-4 opacity-50" />
                {link.highlight && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-semibold">
                    NEW
                  </span>
                )}
              </a>
            ))}

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
