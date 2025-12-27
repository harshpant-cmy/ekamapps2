
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb, Code2, Plug, TrendingUp, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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
      number: "01",
      title: "AI Strategy Consultation",
      description: "We identify business challenges and align AI solutions with your vision.",
      icon: Lightbulb,
      highlights: ["Deep-dive analysis", "Goal alignment", "Roadmap creation"],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      number: "02",
      title: "Custom AI Development",
      description: "We build AI models for automation, decision-making, and customer interactions.",
      icon: Code2,
      highlights: ["Tailored solutions", "Advanced ML models", "Quality testing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Seamless Integration",
      description: "We deploy AI into existing workflows for immediate efficiency gains.",
      icon: Plug,
      highlights: ["Zero disruption", "API integration", "Team training"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "04",
      title: "Continuous Optimization",
      description: "We monitor and expand AI capabilities to keep you competitive.",
      icon: TrendingUp,
      highlights: ["Performance tracking", "Iterative improvements", "Scalable growth"],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-ekam-primary/[0.03] rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl translate-x-1/2"></div>

      {/* Floating tech elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-ekam-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-32 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-40 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Your Journey to <span className="text-ekam-primary">AI Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven 4-step process designed to transform your business with intelligent automation—from strategy to scale
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[100px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-ekam-primary/20 via-ekam-primary/40 to-ekam-primary/20 rounded-full">
            <div
              className={`h-full bg-gradient-to-r from-ekam-primary to-ekam-primary/80 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
              style={{ transitionDelay: '500ms' }}
            ></div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Card */}
                  <div className={`group relative bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${activeStep === index ? 'border-ekam-primary/30' : ''}`}>
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-px bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                    <div className="relative">
                      {/* Number badge & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-gray-100 group-hover:text-ekam-primary/20 transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ekam-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {step.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className={`flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 ${activeStep === index ? 'translate-x-1' : ''}`}
                            style={{ transitionDelay: `${hIndex * 50}ms` }}
                          >
                            <CheckCircle2 className={`h-4 w-4 flex-shrink-0 transition-colors duration-300 ${activeStep === index ? 'text-ekam-primary' : 'text-gray-300'}`} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[100px] -right-3 z-10 items-center justify-center">
                      <div className={`w-8 h-8 rounded-full bg-white shadow-lg border-2 border-ekam-primary/20 flex items-center justify-center transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: `${600 + index * 200}ms` }}>
                        <ArrowRight className="w-4 h-4 text-ekam-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition Banner */}
        <div className={`mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="relative bg-ekam-primary rounded-2xl py-10 px-6 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:20px_20px]"></div>

            <div className="relative flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Fast Implementation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 max-w-xl mb-6">
                Get started with a free consultation—no commitments, just insights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Free 30-min consultation</span>
                </div>
                <button
                  className="group bg-white text-ekam-primary hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Book Your Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
