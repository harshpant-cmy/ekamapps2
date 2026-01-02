
import { Button } from "@/components/ui/button";
import { Users, Video, MessageSquare, Headphones, FileText, Plane, Camera, Phone, Scale, ArrowRight, Sparkles, Check, ExternalLink, ChevronLeft, ChevronRight, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const agentsData = [
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Agent",
    description: "End-to-end automation: Scrapes leads from Apollo, extracts and verifies LinkedIn usernames and email addresses, and cleans raw data for downstream use.",
    features: ["Advanced email validation", "Profile insights", "Dynamic workflow", "Seamless integration"],
    image: "/lovable-uploads/cb2b96e7-c445-4928-9cfa-57ececb9641a.png",
    category: "sales",
    icon: Users,
    badge: "Popular",
    stats: { automation: "95%", accuracy: "99%" }
  },
  {
    id: "content-automation",
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step.",
    features: ["AI script generation", "Text-to-speech", "Visual storyboards", "Ready-to-publish"],
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    category: "content",
    icon: Video,
    stats: { automation: "90%", accuracy: "98%" }
  },
  {
    id: "ecommerce-whatsapp",
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages.",
    features: ["Order workflows", "Product discovery", "Transaction validation", "Real-time tracking"],
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    category: "support",
    icon: MessageSquare,
    badge: "New",
    stats: { automation: "85%", accuracy: "99%" }
  },
  {
    id: "customer-support",
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents.",
    features: ["AI classification", "Ticket creation", "LLM responses", "Status updates"],
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    category: "support",
    icon: Headphones,
    stats: { automation: "80%", accuracy: "97%" }
  },
  {
    id: "sales-multichannel",
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp.",
    features: ["Multi-channel", "Calendar integration", "AI-powered calls", "Auto follow-ups"],
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    category: "sales",
    icon: Phone,
    stats: { automation: "88%", accuracy: "96%" }
  },
  {
    id: "blog-posting",
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models.",
    features: ["AI content gen", "Revision workflows", "Image generation", "Direct publishing"],
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    category: "content",
    icon: FileText,
    stats: { automation: "92%", accuracy: "98%" }
  },
  {
    id: "travel-assistant",
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow.",
    features: ["Multi-platform", "AI conversations", "Lead qualification", "Sales journey"],
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    category: "sales",
    icon: Plane,
    stats: { automation: "87%", accuracy: "95%" }
  },
  {
    id: "instagram-intelligence",
    title: "Instagram Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or competitor accounts, extracting insights on engagement and trends.",
    features: ["Performance tracking", "Competitor analysis", "AI insights", "Structured reports"],
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    category: "content",
    icon: Camera,
    stats: { automation: "94%", accuracy: "99%" }
  },
  {
    id: "callassist-ai",
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation.",
    features: ["Auto transcription", "Info extraction", "Task generation", "Zero manual docs"],
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    category: "support",
    icon: Phone,
    stats: { automation: "91%", accuracy: "98%" }
  },
  {
    id: "legal-consultant",
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models.",
    features: ["Document indexing", "Vector search", "Voice queries", "Citation answers"],
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    category: "operations",
    icon: Scale,
    stats: { automation: "89%", accuracy: "97%" }
  }
];

const categories = [
  { id: "all", label: "All Agents", icon: Sparkles },
  { id: "sales", label: "Sales & Marketing", icon: Users },
  { id: "content", label: "Content Creation", icon: Video },
  { id: "support", label: "Customer Support", icon: Headphones },
  { id: "operations", label: "Operations", icon: Scale },
];

const AIAgents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredAgents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, activeCategory]);

  const filteredAgents = activeCategory === "all"
    ? agentsData
    : agentsData.filter(agent => agent.category === activeCategory);

  const nextAgent = () => {
    setActiveIndex((prev) => (prev + 1) % filteredAgents.length);
  };

  const prevAgent = () => {
    setActiveIndex((prev) => (prev - 1 + filteredAgents.length) % filteredAgents.length);
  };

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const activeAgent = filteredAgents[activeIndex];
  const IconComponent = activeAgent?.icon;

  return (
    <section ref={sectionRef} id="agents" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a1f1c] to-[#0d2818]" />

      {/* Animated gradient orbs - smaller */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#4ade80]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - More compact */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 backdrop-blur-sm mb-4">
            <Zap className="h-3.5 w-3.5 text-[#4ade80]" />
            <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-wider">AI Agent Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            No Code AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-emerald-400">Solutions</span>
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            Enterprise-grade AI agents ready to deploy. Battle-tested and built for scale.
          </p>
        </div>

        {/* Category Filter - More compact */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                  activeCategory === category.id
                    ? "bg-[#4ade80] text-gray-900 shadow-lg shadow-[#4ade80]/30"
                    : "bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-[#4ade80]/30 hover:bg-white/10 backdrop-blur-sm"
                }`}
              >
                <CategoryIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${activeCategory === category.id ? '' : 'group-hover:scale-110'}`} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Area */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {activeAgent && (
            <div className="relative">
              {/* Featured Agent Card - Large Format */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden">

                <div className="relative grid lg:grid-cols-2 gap-6 p-6 lg:p-8">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center order-2 lg:order-1">
                    {/* Badge & Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold uppercase tracking-wider">
                        {activeAgent.category}
                      </span>
                      {activeAgent.badge && (
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                          activeAgent.badge === 'Popular'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          <Star className="h-2.5 w-2.5 fill-current" />
                          {activeAgent.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#4ade80] to-emerald-500 flex items-center justify-center shadow-lg shadow-[#4ade80]/30">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {activeAgent.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base text-white/70 leading-relaxed mb-5">
                      {activeAgent.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-5">
                      <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-2xl font-bold text-[#4ade80] mb-0.5">{activeAgent.stats.automation}</div>
                        <div className="text-xs text-white/50">Task Automation</div>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-2xl font-bold text-[#4ade80] mb-0.5">{activeAgent.stats.accuracy}</div>
                        <div className="text-xs text-white/50">Accuracy Rate</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {activeAgent.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-white/80">
                          <div className="w-4 h-4 rounded-full bg-[#4ade80]/20 flex items-center justify-center flex-shrink-0">
                            <Check className="h-2.5 w-2.5 text-[#4ade80]" />
                          </div>
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/agent/${activeAgent.id}`}
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4ade80] to-emerald-500 text-gray-900 font-semibold rounded-lg shadow-lg shadow-[#4ade80]/30 hover:shadow-xl hover:shadow-[#4ade80]/40 transition-all duration-300 hover:-translate-y-1 w-fit text-sm"
                    >
                      <span>Explore This Agent</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Visual */}
                  <div className="relative order-1 lg:order-2 flex items-center justify-center">
                    {/* Workflow Image - Fixed size container */}
                    <div className="relative w-full max-w-[420px] mx-auto">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white shadow-xl">
                        <img
                          src={activeAgent.image}
                          alt={`${activeAgent.title} workflow`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Floating badges */}
                    <div className="absolute top-1 right-1 lg:-top-1 lg:-right-1 px-2.5 py-1 bg-[#4ade80] rounded-full text-gray-900 text-xs font-bold shadow-lg">
                      Ready to Deploy
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-5">
                {/* Carousel Indicators */}
                <div className="flex items-center gap-1.5">
                  {filteredAgents.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === activeIndex
                          ? 'w-6 h-1.5 bg-[#4ade80]'
                          : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevAgent}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white hover:bg-[#4ade80] hover:text-gray-900 transition-all duration-300 group"
                  >
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={nextAgent}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white hover:bg-[#4ade80] hover:text-gray-900 transition-all duration-300 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mini Agent Grid - Thumbnail Preview */}
        <div className={`mt-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {filteredAgents.map((agent, idx) => {
              const AgentIcon = agent.icon;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative p-3 rounded-lg transition-all duration-300 border border-white/5 ${
                    idx === activeIndex
                      ? 'bg-[#4ade80]/20'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center mb-1.5 transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-[#4ade80] text-gray-900'
                      : 'bg-white/10 text-white/70 group-hover:text-[#4ade80]'
                  }`}>
                    <AgentIcon className="h-4 w-4" />
                  </div>
                  <p className={`text-[10px] font-medium truncate transition-colors ${
                    idx === activeIndex ? 'text-[#4ade80]' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {agent.title.replace(' Agent', '')}
                  </p>
                  {agent.badge && (
                    <div className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${
                      agent.badge === 'Popular' ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-r from-[#4ade80]/10 via-white/5 to-emerald-500/10 rounded-2xl border border-white/5 p-5 sm:p-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#4ade80]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Need a Custom AI Agent?
                </h3>
                <p className="text-white/60 max-w-lg text-sm">
                  We build bespoke AI solutions tailored to your unique workflows and integration requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-[#4ade80] hover:bg-[#22c55e] text-gray-900 h-11 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#4ade80]/30 hover:shadow-xl hover:shadow-[#4ade80]/40 group text-sm"
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 h-11 px-6 rounded-lg font-semibold transition-all duration-300 text-sm"
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AIAgents;
