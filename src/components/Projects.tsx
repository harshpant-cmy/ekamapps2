
import { useEffect, useRef, useState } from "react";
import { Phone, TrendingUp, ShoppingBag, Gamepad2, ArrowRight, Play, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: "smartys",
      name: "Smartys Autozubehor",
      tagline: "Voice + WhatsApp + Dashboard",
      category: "Customer Service AI",
      description: "A complete AI customer service system for a German auto parts company. A voice AI agent answers calls, collects customer info, then hands off to WhatsApp where customers upload their vehicle registration.",
      stats: [
        { label: "Call Handling", value: "24/7" },
        { label: "Response Time", value: "<3s" },
        { label: "Accuracy", value: "99%" }
      ],
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 via-cyan-50 to-white",
      icon: Phone,
      tags: ["Voice AI", "WhatsApp", "OCR", "Dashboard"]
    },
    {
      id: "contentflow",
      name: "ContentFlow",
      tagline: "AI Content Discovery",
      category: "Marketing Intelligence",
      description: "A platform that automatically discovers trending content across Instagram, YouTube, TikTok, LinkedIn, and Twitter—then uses AI to analyze what's working and why.",
      stats: [
        { label: "Platforms", value: "5+" },
        { label: "Posts Analyzed", value: "10K+" },
        { label: "Time Saved", value: "80%" }
      ],
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 via-pink-50 to-white",
      icon: TrendingUp,
      tags: ["Social Media", "AI Analytics", "Trend Detection"]
    },
    {
      id: "shopify-catalog",
      name: "Shopify Product Catalog",
      tagline: "E-commerce + WhatsApp",
      category: "E-commerce Automation",
      description: "A visual product catalog app that connects to Shopify, shows product variants with QR codes, and lets customers inquire directly via WhatsApp.",
      stats: [
        { label: "Catalog Sync", value: "Real-time" },
        { label: "Inquiries", value: "3x more" },
        { label: "Setup Time", value: "<1 day" }
      ],
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 via-emerald-50 to-white",
      icon: ShoppingBag,
      tags: ["Shopify", "WhatsApp", "QR Codes", "Mobile"]
    },
    {
      id: "riddlering",
      name: "RiddleRing",
      tagline: "Real-time Multiplayer",
      category: "Consumer Application",
      description: "A multiplayer trivia game with AI-generated riddles, real-time sync across devices, and voice recognition for consumer-facing applications.",
      stats: [
        { label: "Sync", value: "Real-time" },
        { label: "AI Riddles", value: "Infinite" },
        { label: "Voice Input", value: "Yes" }
      ],
      gradient: "from-orange-600 to-amber-500",
      bgGradient: "from-orange-50 via-amber-50 to-white",
      icon: Gamepad2,
      tags: ["Real-time", "AI Generation", "Voice Recognition"]
    }
  ];

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

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];
  const IconComponent = activeProject.icon;

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.05),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-4">
            <Play className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Projects That <span className="text-ekam-primary">Deliver Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real solutions we've built for clients across industries
          </p>
        </div>

        {/* Project Card */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className={`bg-gradient-to-br ${activeProject.bgGradient} rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden`}>
            <div className="grid lg:grid-cols-2">
              {/* Left: Visual Mockup */}
              <div className="p-8 lg:p-12 flex items-center justify-center">
                <div
                  key={activeProject.id}
                  className="w-full max-w-sm space-y-4 transition-all duration-500"
                >
                  {/* Mock UI Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeProject.gradient} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{activeProject.name}</p>
                          <p className="text-sm text-gray-500">{activeProject.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">Live</span>
                      </div>
                    </div>

                    {/* Mini stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {activeProject.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                          <p className={`text-lg font-bold bg-gradient-to-r ${activeProject.gradient} bg-clip-text text-transparent`}>
                            {stat.value}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wide">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.slice(0, 3).map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-xl shadow-md border border-gray-100">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-xs font-medium text-gray-700">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/80 backdrop-blur-sm">
                <span className={`inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeProject.gradient} text-white text-sm font-medium shadow-lg mb-5`}>
                  <IconComponent className="h-4 w-4" />
                  {activeProject.category}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {activeProject.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {activeProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className={`self-start bg-gradient-to-r ${activeProject.gradient} hover:opacity-90 text-white h-12 px-6 rounded-xl shadow-lg transition-all duration-300 group`}
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Build Something Similar
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-ekam-primary transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-3 bg-ekam-primary'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-ekam-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 mb-4">
            Have a project in mind? Let's discuss how we can build something amazing together.
          </p>
          <Button
            variant="outline"
            className="border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white h-12 px-6 rounded-xl transition-all duration-300 group"
            onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
          >
            Schedule a Discovery Call
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
