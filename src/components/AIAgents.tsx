
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Video, MessageSquare, Headphones, FileText, Plane, Camera, Phone, Scale, Bot, ArrowRight, Sparkles } from "lucide-react";
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
    icon: Users
  },
  {
    id: "content-automation",
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step.",
    features: ["AI script generation", "Text-to-speech", "Visual storyboards", "Ready-to-publish"],
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    category: "content",
    icon: Video
  },
  {
    id: "ecommerce-whatsapp",
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages.",
    features: ["Order workflows", "Product discovery", "Transaction validation", "Real-time tracking"],
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    category: "support",
    icon: MessageSquare
  },
  {
    id: "customer-support",
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents.",
    features: ["AI classification", "Ticket creation", "LLM responses", "Status updates"],
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    category: "support",
    icon: Headphones
  },
  {
    id: "sales-multichannel",
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp.",
    features: ["Multi-channel", "Calendar integration", "AI-powered calls", "Auto follow-ups"],
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    category: "sales",
    icon: Phone
  },
  {
    id: "blog-posting",
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models.",
    features: ["AI content gen", "Revision workflows", "Image generation", "Direct publishing"],
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    category: "content",
    icon: FileText
  },
  {
    id: "travel-assistant",
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow.",
    features: ["Multi-platform", "AI conversations", "Lead qualification", "Sales journey"],
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    category: "sales",
    icon: Plane
  },
  {
    id: "instagram-intelligence",
    title: "Instagram Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or competitor accounts, extracting insights on engagement and trends.",
    features: ["Performance tracking", "Competitor analysis", "AI insights", "Structured reports"],
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    category: "content",
    icon: Camera
  },
  {
    id: "callassist-ai",
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation.",
    features: ["Auto transcription", "Info extraction", "Task generation", "Zero manual docs"],
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    category: "support",
    icon: Phone
  },
  {
    id: "legal-consultant",
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models.",
    features: ["Document indexing", "Vector search", "Voice queries", "Citation answers"],
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    category: "operations",
    icon: Scale
  }
];

const categories = [
  { id: "all", label: "All Agents" },
  { id: "sales", label: "Sales & Marketing" },
  { id: "content", label: "Content Creation" },
  { id: "support", label: "Customer Support" },
  { id: "operations", label: "Operations" },
];

const AIAgents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

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

  const filteredAgents = activeCategory === "all"
    ? agentsData
    : agentsData.filter(agent => agent.category === activeCategory);

  return (
    <section ref={sectionRef} id="agents" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.05),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#4ade80]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#4ade80]/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
            <Bot className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">AI Agent Suite</span>
          </div>
          <h2 className="heading-section text-gray-900 mb-4">
            Pre-Built AI <span className="text-ekam-primary">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deploy powerful AI agents in days, not months. Each solution is battle-tested, customizable, and ready to integrate with your existing systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-ekam-primary text-white shadow-lg shadow-ekam-primary/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-ekam-primary/30"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card
                key={agent.id}
                className={`group relative bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 border border-gray-100 hover:border-[#4ade80]/30 overflow-hidden flex flex-col h-full rounded-2xl hover:shadow-premium-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/[0.02] to-[#22c55e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative space-y-4 flex-shrink-0 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ade80]/20 to-[#22c55e]/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#4ade80]/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-[#4ade80]" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-[#4ade80] transition-colors leading-tight">
                      {agent.title}
                    </CardTitle>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border border-gray-100 group-hover:border-[#4ade80]/20 transition-colors">
                    <img
                      src={agent.image}
                      alt={`${agent.title} workflow`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4 flex flex-col flex-grow pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {agent.description}
                  </p>

                  <div className="space-y-3 flex-grow">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 font-medium border border-gray-100 group-hover:border-[#4ade80]/30 group-hover:bg-[#4ade80]/5 transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-[#4ade80] hover:bg-[#4ade80]/5 group/btn mt-auto h-11 rounded-xl"
                    asChild
                  >
                    <Link to={`/agent/${agent.id}`}>
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        Explore Agent
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <div className="relative bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] rounded-3xl p-12 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4ade80]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Sparkles className="h-4 w-4 text-[#4ade80]" />
                <span className="text-sm font-medium text-white/80">Custom Solutions Available</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Don't See What You Need?
              </h3>
              <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg">
                We build custom AI agents tailored to your unique business workflows and integration requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-ekam-primary hover:bg-white/90 shadow-lg hover:shadow-xl h-12 px-8 rounded-xl transition-all duration-300 group"
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Discuss Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white h-12 px-8 rounded-xl transition-all duration-300"
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
    </section>
  );
};

export default AIAgents;
