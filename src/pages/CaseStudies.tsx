
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, FileCheck, TrendingUp, Clock, CheckCircle2, BarChart3, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: "smartys",
      title: "Smartys Autozubehor",
      subtitle: "German Auto Parts Company",
      category: "Customer Service AI",
      description: "A complete AI customer service system combining voice AI, WhatsApp automation, and real-time dashboard for a German auto parts company.",
      challenge: "Manual customer service was slow, expensive, and unavailable 24/7. The company needed to handle customer inquiries about vehicle parts efficiently.",
      solution: "We built a comprehensive system where Voice AI answers calls, collects customer info, then hands off to WhatsApp where customers upload their vehicle registration for automated parts lookup.",
      results: [
        { metric: "24/7", label: "Availability" },
        { metric: "<3s", label: "Response Time" },
        { metric: "99%", label: "OCR Accuracy" },
        { metric: "80%", label: "Cost Reduction" }
      ],
      technologies: ["Voice AI", "WhatsApp API", "OCR", "Custom Dashboard"],
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 via-cyan-50/50 to-white",
      icon: Phone
    },
    {
      id: "turrant",
      title: "Turrant.ai",
      subtitle: "Document Intelligence Platform",
      category: "Product Development",
      description: "Our flagship SaaS product for AI-powered document collection and verification via WhatsApp, serving financial services, insurance, and HR industries.",
      challenge: "Traditional document collection is slow, error-prone, and has poor completion rates. Customers drop off due to complex upload processes.",
      solution: "Built a WhatsApp-native platform where customers submit documents naturally. AI-powered OCR extracts data with 99% accuracy, and real-time government API validation ensures authenticity.",
      results: [
        { metric: "95%", label: "Completion Rate" },
        { metric: "99%", label: "OCR Accuracy" },
        { metric: "24-48h", label: "Deployment" },
        { metric: "80%", label: "Time Saved" }
      ],
      technologies: ["WhatsApp API", "AI OCR", "Government APIs", "No-Code Config"],
      gradient: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 via-teal-50/50 to-white",
      icon: FileCheck
    },
    {
      id: "contentflow",
      title: "ContentFlow",
      subtitle: "Marketing Intelligence Platform",
      category: "AI Analytics",
      description: "A platform that automatically discovers trending content across social media platforms and uses AI to analyze what's working and why.",
      challenge: "Marketing teams spend hours manually tracking competitors and trends across multiple platforms. Insights are often outdated by the time they're compiled.",
      solution: "Built an automated system that crawls Instagram, YouTube, TikTok, LinkedIn, and Twitter to discover trending content, then uses AI to analyze engagement patterns and provide actionable insights.",
      results: [
        { metric: "5+", label: "Platforms" },
        { metric: "10K+", label: "Posts Analyzed" },
        { metric: "80%", label: "Time Saved" },
        { metric: "Real-time", label: "Insights" }
      ],
      technologies: ["Social Media APIs", "AI Analytics", "Trend Detection", "Dashboard"],
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 via-pink-50/50 to-white",
      icon: TrendingUp
    },
    {
      id: "shopify-catalog",
      title: "Shopify Product Catalog",
      subtitle: "E-commerce Automation",
      category: "Retail Tech",
      description: "A visual product catalog app that connects to Shopify, displays product variants with QR codes, and enables direct customer inquiries via WhatsApp.",
      challenge: "Offline stores couldn't effectively showcase their full online inventory. Customers had no easy way to inquire about products they saw in-store.",
      solution: "Created a tablet-friendly catalog app synced with Shopify in real-time. Each product displays a QR code that opens a pre-filled WhatsApp message for instant inquiry.",
      results: [
        { metric: "Real-time", label: "Catalog Sync" },
        { metric: "3x", label: "More Inquiries" },
        { metric: "<1 day", label: "Setup Time" },
        { metric: "0", label: "Manual Updates" }
      ],
      technologies: ["Shopify API", "WhatsApp", "QR Codes", "Mobile App"],
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 via-emerald-50/50 to-white",
      icon: MessageSquare
    }
  ];

  const stats = [
    { value: "15+", label: "Projects Delivered", icon: CheckCircle2 },
    { value: "95%", label: "Client Satisfaction", icon: Users },
    { value: "24-48h", label: "Avg. Deployment", icon: Clock },
    { value: "10x", label: "ROI for Clients", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Light theme with emerald gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-400/15 to-emerald-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" />

        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-emerald-500 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute top-48 right-32 w-2 h-2 bg-teal-500 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-emerald-400/50 rounded-full hidden lg:block" />
        <div className="absolute bottom-48 right-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-8">
                <FileCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Case Studies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Real Results from
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">AI Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
                Explore how we've helped businesses transform their operations with custom AI solutions.
                From voice AI to document intelligence, see the impact we've delivered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 group font-semibold text-base"
                  onClick={() => document.getElementById('case-studies-list')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 rounded-xl transition-all duration-300 font-semibold text-base"
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Discuss Your Project
                </Button>
              </div>
            </div>

            {/* Right Visual - Stats Grid */}
            <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl shadow-xl shadow-emerald-500/5 border border-emerald-100/50 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
                      </div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-xs text-gray-500">From idea to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section id="case-studies-list" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
              <BarChart3 className="h-4 w-4 text-ekam-primary" />
              <span className="text-sm font-medium text-ekam-primary">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-ekam-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep dives into the challenges we solved and the results we delivered for our clients.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <div
                  key={study.id}
                  className={`bg-gradient-to-br ${study.bgGradient} rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="p-8 lg:p-12">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-medium shadow-lg mb-6`}>
                        <IconComponent className="h-4 w-4" />
                        {study.category}
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-500 mb-4">{study.subtitle}</p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {study.description}
                      </p>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div className="bg-white/60 rounded-xl p-4 border border-gray-100">
                          <p className="text-sm font-semibold text-gray-900 mb-1">The Challenge</p>
                          <p className="text-sm text-gray-600">{study.challenge}</p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-4 border border-gray-100">
                          <p className="text-sm font-semibold text-gray-900 mb-1">Our Solution</p>
                          <p className="text-sm text-gray-600">{study.solution}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right - Results */}
                    <div className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-600" />
                        Results Achieved
                      </h4>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
                          >
                            <p className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>
                              {result.metric}
                            </p>
                            <p className="text-sm text-gray-500">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`self-start bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white h-12 px-6 rounded-xl shadow-lg transition-all duration-300 group`}
                        onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                      >
                        Build Something Similar
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative">
              <Zap className="h-12 w-12 text-[#55c5d1] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Let's discuss how AI can solve your specific challenges. Schedule a free consultation to explore the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-white text-ekam-primary hover:bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold"
                  onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  className="h-14 px-8 bg-[#4ade80] text-white hover:bg-[#22c55e] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold"
                  onClick={() => window.location.href = '/#projects'}
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
