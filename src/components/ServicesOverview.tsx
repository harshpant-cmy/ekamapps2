
import { useEffect, useRef, useState } from "react";
import { Lightbulb, Code2, Plug, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
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
      icon: Lightbulb,
      title: "AI Consulting & Strategy",
      description: "We analyze your business processes, identify automation opportunities, and create a tailored AI roadmap with clear ROI projections.",
      features: ["Process Discovery", "ROI Analysis", "Implementation Roadmap"],
      color: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Code2,
      title: "Custom AI Development",
      description: "Our team builds intelligent agents using LangChain, RAG systems, and document AI to solve your unique business challenges.",
      features: ["LangChain Agents", "RAG Systems", "Document Intelligence"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Plug,
      title: "Integration & Automation",
      description: "Seamlessly connect AI solutions to your existing tools with n8n workflows, API integrations, and automated data pipelines.",
      features: ["n8n Workflows", "API Integration", "Data Pipelines"],
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const technologies = [
    "LangChain",
    "n8n",
    "OpenAI",
    "Claude",
    "Pinecone",
    "Supabase",
    "Make.com",
    "Zapier",
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.03),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
            <span className="text-sm font-medium text-ekam-primary">Our Services</span>
          </div>
          <h2 className="heading-section text-gray-900 mb-4">
            Strategic AI Solutions for{' '}
            <span className="text-ekam-primary">Enterprise Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From strategy to implementation, we deliver end-to-end AI solutions that transform your operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-7 w-7 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ekam-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-ekam-primary/60" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies Row */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 font-medium">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600 hover:border-ekam-primary/30 hover:bg-ekam-primary/5 hover:text-ekam-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-ekam-primary hover:bg-ekam-primary/90 text-white h-12 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
