
import { useEffect, useRef, useState } from "react";

const Integrations = () => {
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

  // Curated list of most impactful and recognizable integrations
  const integrations = [
    // Row 1
    [
      { name: "Your Internal Systems", highlight: true },
      { name: "Google Drive", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledrive.svg", color: "#4285F4" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg", color: "#4A154B" },
      { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg", color: "#25D366" },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg", color: "#7AB55C" },
    ],
    // Row 2
    [
      { name: "Gmail", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg", color: "#EA4335" },
      { name: "HubSpot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg", color: "#FF7A59" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", color: "#000000" },
      { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg", color: "#FF4A00" },
      { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg", color: "#0A66C2" },
    ],
    // Row 3
    [
      { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg", color: "#00A1E0" },
      { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", color: "#412991" },
      { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg", color: "#635BFF" },
      { name: "Apollo", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apollo.svg", color: "#311C87" },
      { name: "and 100+ more", moreLink: true },
    ],
  ];

  return (
    <section ref={sectionRef} id="integrations" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Connect With Your Favorite Tools
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ekam integrates seamlessly with the platforms you already use.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="space-y-4">
          {integrations.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-4 flex-wrap transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + rowIndex * 150}ms` }}
            >
              {row.map((integration, index) => (
                <div
                  key={index}
                  className={`
                    rounded-2xl p-6 transition-all duration-200 w-[180px]
                    ${integration.highlight
                      ? "bg-ekam-primary text-white shadow-lg"
                      : integration.moreLink
                        ? "bg-ekam-primary/10 border-2 border-dashed border-ekam-primary/30"
                        : "bg-white border border-gray-100 hover:shadow-md hover:border-gray-200"
                    }
                  `}
                >
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[90px]">
                    {!integration.highlight && !integration.moreLink && integration.icon && (
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${integration.color}15` }}
                      >
                        <img
                          src={integration.icon}
                          alt={integration.name}
                          className="w-7 h-7"
                          style={{ filter: `brightness(0) saturate(100%)` }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <span className={`text-sm text-center font-medium ${
                      integration.highlight
                        ? "text-white"
                        : integration.moreLink
                          ? "text-ekam-primary"
                          : "text-gray-700"
                    }`}>
                      {integration.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
