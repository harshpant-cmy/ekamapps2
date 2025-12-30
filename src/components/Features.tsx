
import { Zap, Shield, Clock, TrendingUp, Users, Settings, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Embrace versatility, tame complexity",
      description: "Eliminate tool sprawl with one platform for all needs and unify your teams with a single experience. Focus on work that moves your business forward.",
      color: "text-ekam-primary",
      bgColor: "bg-ekam-primary/10",
    },
    {
      icon: TrendingUp,
      title: "Democratize transformation",
      description: "Accelerate success using our AI-powered no-code platform featuring over 1200 pre-built connectors and ready-to-use accelerators. Empower your teams to transform work.",
      color: "text-ekam-secondary",
      bgColor: "bg-ekam-secondary/10",
    },
    {
      icon: Shield,
      title: "Scale your success with AI",
      description: "Effortlessly integrate AI into your business processes, boosting efficiency and innovation for your business without sacrificing data privacy and control.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  const capabilities = [
    {
      title: "No-Code Automation",
      description: "Build powerful workflows without writing a single line of code",
      icon: Settings,
    },
    {
      title: "24/7 AI Availability",
      description: "Your AI agents work around the clock, never taking a break",
      icon: Clock,
    },
    {
      title: "Team Collaboration",
      description: "Share workflows and insights across your entire organization",
      icon: Users,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and data encryption",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ekam-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Universal Connectivity Banner */}
        <div className="mb-20">
          <div className="bg-dark-card rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Universal Connectivity
            </h3>
            <p className="text-gray-300 text-lg">
              SaaS/On-Prem | Data Warehouse/Data Lakes | Databases | LLMs | Unstructured | Traditional
            </p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-dark-lighter rounded-3xl p-8 lg:p-12 border border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Every department.
                <span className="block gradient-text">One platform.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                From sales to support, marketing to operations — Ekam's AI agents work across your entire organization to automate workflows, reduce manual work, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="gradient-primary text-white rounded-full px-6"
                  onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-6"
                  onClick={() => {
                    const agentsSection = document.getElementById('agents');
                    if (agentsSection) {
                      agentsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore AI Agents
                </Button>
              </div>
            </div>

            {/* Right - Capabilities Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-dark-card rounded-xl p-5 border border-white/5 hover:border-ekam-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-ekam-primary/10 transition-colors">
                    <capability.icon className="h-5 w-5 text-gray-400 group-hover:text-ekam-primary transition-colors" />
                  </div>
                  <h4 className="text-white font-medium mb-2">{capability.title}</h4>
                  <p className="text-gray-500 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "1200+", label: "Pre-built Connectors" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "500K+", label: "Automations Daily" },
            { value: "24/7", label: "AI Availability" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
