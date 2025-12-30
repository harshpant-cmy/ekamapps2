
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, Zap, Database, Cloud, Lock, Eye, Settings, Workflow } from "lucide-react";

const Platform = () => {
  const platformAgents = [
    { icon: Bot, label: "Claude" },
    { icon: Bot, label: "OpenAI" },
    { icon: Bot, label: "Gemini" },
    { icon: Bot, label: "Cursor" },
  ];

  const skills = [
    "Skills Builder",
    "MCP Composition",
    "MCP Registry",
    "MCP Proxy",
  ];

  const orchestration = [
    { label: "Process Automation", color: "bg-ekam-primary/20 text-ekam-primary" },
    { label: "Application Integration", color: "bg-ekam-secondary/20 text-ekam-secondary" },
    { label: "Data Orchestration", color: "bg-ekam-primary/20 text-ekam-primary" },
    { label: "API Management", color: "bg-ekam-secondary/20 text-ekam-secondary" },
  ];

  const trustFeatures = [
    "Observability",
    "Governance",
    "Security",
    "Compliance",
    "Explainability",
  ];

  return (
    <section id="platform" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ekam-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            One platform to build, govern, and scale your
            <span className="gradient-text"> AI Agents</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Enterprise-grade infrastructure for deploying, managing, and scaling AI automation across your organization
          </p>
          <Button
            className="gradient-primary text-white rounded-full px-6"
            onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Architecture Diagram */}
        <div className="relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-2xl">
          {/* Main Container */}
          <div className="grid lg:grid-cols-[200px_1fr_200px] gap-6 items-center">

            {/* Left Column - AI Clients */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-4">
                AI Clients
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {platformAgents.map((agent, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow"
                  >
                    <agent.icon className="h-6 w-6 text-gray-700" />
                    <span className="text-xs font-medium text-gray-600">{agent.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column - Ekam Enterprise Platform */}
            <div className="bg-gradient-to-br from-blue-100/80 to-cyan-50/80 rounded-2xl p-6 border border-blue-200/50">
              <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider text-center mb-6">
                Ekam Enterprise Platform
              </h3>

              {/* Skills Section */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">
                  Skills
                </div>
                <div className="bg-white/60 rounded-xl p-4 border border-blue-100">
                  <div className="text-center text-sm font-medium text-gray-700 mb-3">MCP Gateway</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orchestration Section */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">
                  Orchestration
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {orchestration.map((item, index) => (
                    <div
                      key={index}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-center ${item.color}`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="bg-ekam-primary/10 rounded-xl p-3 text-center">
                <span className="text-sm font-medium text-ekam-primary">Powered by Advanced AI</span>
              </div>
            </div>

            {/* Right Column - Trust & Outputs */}
            <div className="space-y-6">
              {/* Outputs */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-4">
                  Outputs
                </h3>
                <div className="space-y-2">
                  {["API Collections", "Cloud Services", "Workato Assets", "Enterprise Skills"].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 text-center text-xs font-medium text-gray-600 border border-gray-100 border-dashed"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-4">
                  Trust
                </h3>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="space-y-2">
                    {trustFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 text-center"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="hidden lg:block absolute left-[220px] top-1/2 w-12 h-0.5 border-t-2 border-dashed border-gray-300" />
          <div className="hidden lg:block absolute right-[220px] top-1/2 w-12 h-0.5 border-t-2 border-dashed border-gray-300" />
        </div>

        {/* Feature Cards Below */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-dark-lighter rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-ekam-primary/20 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-ekam-primary" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Give agents proven business actions
            </h3>
            <p className="text-gray-400 text-sm">
              Not raw APIs — so they execute predictably every time with built-in error handling and validation.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-ekam-secondary/20 flex items-center justify-center mb-4">
              <Workflow className="h-6 w-6 text-ekam-secondary" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Orchestrate across systems
            </h3>
            <p className="text-gray-400 text-sm">
              With memory, rollback, and transactional integrity across all your enterprise applications.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Deploy with confidence
            </h3>
            <p className="text-gray-400 text-sm">
              Through built-in governance, authentication, and audit trails at every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
