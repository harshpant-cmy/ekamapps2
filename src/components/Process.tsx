
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Cpu, Rocket, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Process = () => {
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

  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "We analyze your workflows, identify automation opportunities, and map out an AI roadmap.",
      icon: Search,
    },
    {
      number: "2",
      title: "Design",
      description: "Our team architects custom AI solutions using LangChain, RAG, and document intelligence.",
      icon: Cpu,
    },
    {
      number: "3",
      title: "Deploy",
      description: "Seamless integration with your existing tools—CRM, WhatsApp, Slack, and more.",
      icon: Rocket,
    },
    {
      number: "4",
      title: "Optimize",
      description: "Continuous monitoring and improvement to maximize ROI and scale capabilities.",
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-ekam-primary uppercase tracking-wider mb-4">HOW IT WORKS</p>
          <h2 className="heading-section text-gray-900">
            Drive end-to-end <span className="text-ekam-primary">process automation</span>
          </h2>
        </div>

        {/* Process Visual - Large Illustration Area */}
        <div className={`relative mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-3xl p-8 lg:p-12">
            {/* Workflow mockup */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-4">
              {/* Step 1: Input */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">G</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">New email in Gmail</p>
                      <p className="text-[10px] text-gray-500">client@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">D</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">New file in Drive</p>
                      <p className="text-[10px] text-gray-500">Invoice_2024.pdf</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">W</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">WhatsApp message</p>
                      <p className="text-[10px] text-gray-500">Document received</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Process */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-ekam-primary/10 text-ekam-primary text-xs font-semibold rounded-full">
                    AI Processing
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-ekam-primary to-ekam-accent rounded-full animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                      <p className="font-semibold text-blue-700">OCR</p>
                      <p className="text-blue-600">Extracting...</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2 text-center">
                      <p className="font-semibold text-purple-700">NLP</p>
                      <p className="text-purple-600">Analyzing...</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-2 text-center text-[10px]">
                    <p className="font-semibold text-amber-700">Validation</p>
                    <p className="text-amber-600">API verification...</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Action */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs font-semibold text-green-700">Auto-approved</span>
                    </div>
                    <p className="text-[10px] text-green-600">Document verified successfully</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-xs font-semibold text-blue-700">CRM Updated</span>
                    </div>
                    <p className="text-[10px] text-blue-600">Record synced to HubSpot</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs font-semibold text-green-700">Notification sent</span>
                    </div>
                    <p className="text-[10px] text-green-600">Team alerted via WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Step 4: Output */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Results</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs text-gray-600">Time saved</span>
                    <span className="text-xs font-bold text-emerald-600">80%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs text-gray-600">Accuracy</span>
                    <span className="text-xs font-bold text-emerald-600">99%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs text-gray-600">Cost reduction</span>
                    <span className="text-xs font-bold text-emerald-600">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Row - Enhanced Design */}
        <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-ekam-primary/20 via-ekam-primary/40 to-ekam-primary/20" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const gradients = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-amber-500",
                "from-emerald-500 to-teal-500"
              ];
              return (
                <div
                  key={index}
                  className="relative text-center group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Step number with gradient ring */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${gradients[index]} p-[3px] shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className={`text-2xl font-bold bg-gradient-to-br ${gradients[index]} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                    {/* Pulse animation on hover */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  </div>

                  {/* Title with gradient on hover */}
                  <h3 className={`text-xl font-bold mb-3 transition-all duration-300 bg-gradient-to-r ${gradients[index]} bg-clip-text group-hover:text-transparent text-gray-900`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>

                  {/* Icon indicator */}
                  <div className={`mt-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[index]} bg-opacity-10 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            size="lg"
            className="bg-ekam-primary hover:bg-ekam-primary/90 text-white h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
          >
            Start Your Automation Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
