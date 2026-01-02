
import { useEffect, useRef, useState } from "react";
import { Zap, ArrowRight, Phone, MessageSquare, BarChart3, Code2, FileCheck, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const services = [
    {
      icon: Phone,
      title: "Voice AI Agents",
      description: "Intelligent voice systems that answer calls, collect information, and handle customer inquiries 24/7 without human intervention.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Bots",
      description: "Conversational AI bots that engage customers on WhatsApp, handling queries, processing documents, and driving conversions.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    },
    {
      icon: BarChart3,
      title: "Custom Dashboards",
      description: "Real-time analytics dashboards that give you complete visibility into your automated workflows and business metrics.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    },
    {
      icon: Code2,
      title: "Web Applications",
      description: "Full-stack web applications with AI capabilities, from customer portals to internal tools that streamline operations.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    },
    {
      icon: FileCheck,
      title: "Document Processing",
      description: "AI-powered extraction from invoices, IDs, and forms with 99% accuracy. Auto-verify with government APIs in real-time.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    },
    {
      icon: Link2,
      title: "System Integration",
      description: "Connect your existing tools like CRM, ERP, and databases into unified workflows that run automatically without constant attention.",
      gradient: "from-[#4ade80] to-[#22c55e]",
      bgGlow: "bg-[#4ade80]/10"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.08),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
            <Zap className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">What We Build</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Systems That Run{" "}
            <span className="text-ekam-primary">24/7</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in taking repetitive, manual processes and automating them using AI.
            Whether it's handling customer inquiries, processing documents, or connecting your existing tools—
            <span className="font-semibold text-gray-900"> we build systems that run without needing constant attention.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${service.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ekam-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            size="lg"
            className="bg-ekam-primary hover:bg-ekam-primary/90 text-white h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
