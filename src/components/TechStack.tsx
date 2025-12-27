import { Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
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
  // First row - scrolls left
  const techRow1 = [
    { name: "OpenAI", description: "Advanced language models for intelligent automation", icon: "🤖" },
    { name: "Google Cloud", description: "Scalable cloud infrastructure and AI services", icon: "☁️" },
    { name: "WhatsApp API", description: "Business messaging and customer engagement", icon: "💬" },
    { name: "Shopify", description: "E-commerce platform integration", icon: "🛒" },
    { name: "Apollo", description: "Sales intelligence and lead generation", icon: "🚀" },
    { name: "LinkedIn", description: "Professional networking and B2B outreach", icon: "💼" },
  ];

  // Second row - scrolls right
  const techRow2 = [
    { name: "Slack", description: "Team collaboration and notifications", icon: "💬" },
    { name: "Google Drive", description: "Document storage and collaboration", icon: "📁" },
    { name: "Zapier", description: "Workflow automation and app connections", icon: "⚡" },
    { name: "HubSpot", description: "CRM and marketing automation", icon: "🧡" },
    { name: "Notion", description: "Knowledge base and documentation", icon: "📓" },
    { name: "Stripe", description: "Payment processing integration", icon: "💳" },
  ];

  const TechCard = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">{name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <Layers className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Connect to the Tools You Love
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge AI technologies and platforms to build powerful, scalable solutions
          </p>
        </div>
      </div>

      {/* Scrolling Rows Container */}
      <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* First Row - Scrolls Left */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-scroll-left">
            {/* First set */}
            {techRow1.map((tech, index) => (
              <TechCard key={`row1-first-${index}`} {...tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {techRow1.map((tech, index) => (
              <TechCard key={`row1-second-${index}`} {...tech} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Right */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-scroll-right">
            {/* First set */}
            {techRow2.map((tech, index) => (
              <TechCard key={`row2-first-${index}`} {...tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {techRow2.map((tech, index) => (
              <TechCard key={`row2-second-${index}`} {...tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          And many more integrations to power your automation workflows
        </p>
      </div>
    </section>
  );
};

export default TechStack;
