
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight, FileText, Users, ShoppingCart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
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

  const useCases = [
    {
      category: "DOCUMENT AUTOMATION",
      title: "Automate document collection and reduce processing time by 80%",
      features: [
        { bold: "Collect documents", text: "via WhatsApp, Email, or Web portals" },
        { bold: "Extract data automatically", text: "from Aadhaar, PAN, GST, invoices with 99% accuracy" },
        { bold: "Verify in real-time", text: "with government API integrations" },
        { bold: "Sync with your CRM", text: "and auto-reconcile records" },
      ],
      cta: "Explore Turrant.ai",
      ctaLink: "https://turrant.ai",
      icon: FileText,
      gradient: "from-blue-50 to-indigo-50",
      accentColor: "text-blue-600",
      visual: (
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
          <div className="space-y-4 w-full max-w-sm">
            {/* Document card mockup */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aadhaar Card Verified</p>
                  <p className="text-xs text-gray-500">Auto-extracted & validated</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="text-gray-500">Name</span>
                  <p className="font-medium text-gray-900">John Doe</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="text-gray-500">DOB</span>
                  <p className="font-medium text-gray-900">15/03/1990</p>
                </div>
              </div>
            </div>
            {/* Progress indicator */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Processing</span>
                <span className="text-sm font-semibold text-green-600">95%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "SALES AUTOMATION",
      title: "Scale outbound sales with AI-powered multi-channel engagement",
      features: [
        { bold: "Enrich leads automatically", text: "from Apollo, LinkedIn, and databases" },
        { bold: "Personalize outreach", text: "with AI-generated messages" },
        { bold: "Automate follow-ups", text: "via Email, WhatsApp, and voice calls" },
        { bold: "Track conversions", text: "with real-time analytics dashboard" },
      ],
      cta: "See Sales Agents",
      ctaLink: "/#agents",
      icon: Users,
      gradient: "from-purple-50 to-pink-50",
      accentColor: "text-purple-600",
      reverse: true,
      visual: (
        <div className="relative bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
          <div className="space-y-4 w-full max-w-sm">
            {/* Lead card mockup */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">Jane Smith</p>
                  <p className="text-xs text-gray-500">VP of Operations, TechCorp</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Hot Lead
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">Email Sent</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">LinkedIn</span>
                <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">WhatsApp</span>
              </div>
            </div>
            {/* Pipeline mockup */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">Pipeline Overview</p>
              <div className="flex justify-between items-end h-16">
                {[40, 65, 45, 80, 55].map((height, i) => (
                  <div key={i} className="w-8 bg-gradient-to-t from-purple-400 to-pink-400 rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "CUSTOMER SUPPORT",
      title: "Resolve customer queries 5x faster with AI-powered support",
      features: [
        { bold: "Auto-classify tickets", text: "using intelligent categorization" },
        { bold: "Generate responses", text: "with context-aware AI suggestions" },
        { bold: "Escalate smartly", text: "based on sentiment and urgency" },
        { bold: "Integrate seamlessly", text: "with Zendesk, Freshdesk, or custom CRM" },
      ],
      cta: "View Support Agents",
      ctaLink: "/#agents",
      icon: Headphones,
      gradient: "from-emerald-50 to-teal-50",
      accentColor: "text-emerald-600",
      visual: (
        <div className="relative bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
          <div className="space-y-4 w-full max-w-sm">
            {/* Support ticket mockup */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  High Priority
                </span>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">"I can't access my account after password reset..."</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-8 bg-emerald-50 rounded-lg flex items-center px-3">
                  <span className="text-xs text-emerald-700">AI: Password reset link sent ✓</span>
                </div>
              </div>
            </div>
            {/* Stats mockup */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 text-center">
                <p className="text-2xl font-bold text-emerald-600">92%</p>
                <p className="text-xs text-gray-500">Auto-resolved</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 text-center">
                <p className="text-2xl font-bold text-emerald-600">&lt;2m</p>
                <p className="text-xs text-gray-500">Avg Response</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-ekam-primary uppercase tracking-wider mb-4">USE CASES</p>
          <h2 className="heading-section text-gray-900">
            From document to decision, <span className="text-ekam-primary">automated</span>
          </h2>
        </div>

        {/* Use Cases */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Content */}
                <div className={useCase.reverse ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-2 mb-4">
                    <IconComponent className={`h-5 w-5 ${useCase.accentColor}`} />
                    <p className={`text-sm font-semibold ${useCase.accentColor} uppercase tracking-wider`}>
                      {useCase.category}
                    </p>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {useCase.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    {useCase.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600">
                          <span className="font-semibold text-gray-900">{feature.bold}</span> {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="group border-gray-200 hover:border-ekam-primary hover:bg-ekam-primary/5 text-gray-700 hover:text-ekam-primary rounded-xl h-12 px-6"
                    onClick={() => {
                      if (useCase.ctaLink.startsWith('http')) {
                        window.open(useCase.ctaLink, '_blank');
                      } else {
                        const section = document.querySelector(useCase.ctaLink);
                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {useCase.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={useCase.reverse ? 'lg:order-1' : ''}>
                  {useCase.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
