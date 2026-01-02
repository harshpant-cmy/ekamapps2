
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, FileCheck, Shield, Zap, ExternalLink, CheckCircle2 } from "lucide-react";

const TurrantShowcase = () => {
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

  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp-Native Collection",
      description: "Customers submit documents via WhatsApp - the platform they already use daily",
    },
    {
      icon: FileCheck,
      title: "AI-Powered OCR",
      description: "99% accuracy on Indian documents with intelligent data extraction",
    },
    {
      icon: Shield,
      title: "Real-Time Verification",
      description: "Government API validation for Aadhaar, PAN, GST, and more",
    },
    {
      icon: Zap,
      title: "No-Code Configuration",
      description: "Set up custom workflows in hours, not weeks",
    },
  ];

  const stats = [
    { value: "95%", label: "Completion Rate" },
    { value: "99%", label: "OCR Accuracy" },
    { value: "24-48h", label: "Deployment Time" },
  ];

  const benefits = [
    "Reduce document collection time by 80%",
    "Eliminate manual data entry errors",
    "Integrate with your existing CRM",
    "Scale to millions of customers"
  ];

  return (
    <section ref={sectionRef} id="turrant" className="py-24 bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 noise-overlay" />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4ade80]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Flagship Product</span>
            </div>

            {/* Logo/Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Turrant<span className="text-[#4ade80]">.ai</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              AI-powered document collection and validation platform that transforms how businesses gather and verify customer documents.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs - Fixed visibility */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-14 px-8 bg-white text-ekam-primary hover:bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold text-base"
                onClick={() => window.open('https://turrant.ai', '_blank')}
              >
                Explore Turrant.ai
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="h-14 px-8 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-xl transition-all duration-300 font-semibold text-base"
                onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center transition-all duration-500 hover:bg-white/15 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#4ade80]/20 flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-[#4ade80]" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Finance", "Insurance", "HR", "Logistics", "Healthcare"].map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurrantShowcase;
