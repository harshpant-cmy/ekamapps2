
import { useEffect, useRef, useState } from "react";
import { Shield, Award, Globe } from "lucide-react";

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Client companies where founder has worked
  const clients = [
    { name: "India Today Group", logo: null },
    { name: "Lenskart", logo: null },
    { name: "Senior World", logo: null },
    { name: "Zecross", logo: null },
  ];

  const trustBadges = [
    { icon: Shield, label: "Enterprise Ready" },
    { icon: Award, label: "19+ Years Expertise" },
    { icon: Globe, label: "Global Delivery" },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Marquee */}
        <div className={`relative mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 lg:mx-12"
                >
                  <div className="flex items-center justify-center h-12 px-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-ekam-primary/20 transition-all duration-300 group">
                    <span className="text-gray-400 font-semibold text-lg group-hover:text-ekam-primary transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-4 lg:gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100"
              >
                <IconComponent className="h-4 w-4 text-ekam-primary" />
                <span className="text-sm text-gray-600 font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
