
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, TrendingUp, Zap, Sparkles, Play, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-ekam-primary/5 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-ekam-primary/10 via-ekam-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-ekam-secondary/30 via-ekam-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ekam-primary/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-ekam-primary/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-ekam-primary/25 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-ekam-secondary/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-ekam-primary/20 rounded-full animate-float-medium"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge with shimmer effect */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-ekam-primary/10 to-ekam-primary/5 border border-ekam-primary/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Sparkles className="h-4 w-4 text-ekam-primary animate-pulse" />
              <span className="text-sm font-medium text-ekam-primary">AI-Powered Business Automation</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Cutting-Edge</span>{" "}
                <span className="relative inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="text-ekam-primary">
                    AI Automation
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 4 150 2 298 10" stroke="#013a37" strokeWidth="4" strokeLinecap="round" className="animate-draw-line"/>
                  </svg>
                </span>
                <br />
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>for Modern Businesses</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                From intelligent lead enrichment to multi-channel customer engagement, our agent
                portfolio enables seamless, efficient workflows reducing manual work and driving
                business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button
                className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group px-5 h-11 text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const agentsSection = document.getElementById('agents');
                  if (agentsSection) {
                    agentsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Agents
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white px-5 h-11 text-sm transition-all duration-300 group bg-white"
                onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Book a Consultation
              </Button>
            </div>

            {/* Enhanced Stats row */}
            <div className="flex flex-wrap gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-ekam-primary group-hover:scale-110 transition-transform inline-flex items-baseline">
                  10<span className="text-2xl text-ekam-primary/70">+</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">AI Agents</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-ekam-primary group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-gray-500 font-medium">Automation</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-ekam-primary group-hover:scale-110 transition-transform inline-flex items-baseline">
                  50<span className="text-2xl text-ekam-primary/70">%</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">Time Saved</div>
              </div>
            </div>

          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className={`relative lg:pl-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Floating decorations */}
            <div className="absolute -top-8 -right-8 w-96 h-96 bg-gradient-to-br from-ekam-primary/10 via-ekam-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-ekam-secondary/20 to-transparent rounded-full blur-2xl"></div>

            {/* Orbital ring decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-ekam-primary/10 rounded-full animate-spin-very-slow pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-ekam-primary/5 rounded-full animate-spin-reverse pointer-events-none"></div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Card 1 - Smart Automation */}
                <div className="group bg-white rounded-2xl p-5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-ekam-primary/30 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center mb-4 group-hover:bg-ekam-primary/15 transition-colors">
                    <Bot className="h-6 w-6 text-ekam-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Smart Automation</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">AI agents that work 24/7 to handle your business processes</p>
                </div>

                {/* Card 2 - Efficiency */}
                <div className="group bg-white rounded-2xl p-5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-yellow-400/50 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4 group-hover:bg-yellow-100/80 transition-colors">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Lightning Fast</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Streamline workflows and eliminate bottlenecks instantly</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Card 3 - Save Time */}
                <div className="group bg-white rounded-2xl p-5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-blue-400/50 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100/80 transition-colors">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Save Time</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Focus on creative tasks while AI handles routine work</p>
                </div>

                {/* Card 4 - Growth */}
                <div className="group bg-white rounded-2xl p-5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-green-400/50 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100/80 transition-colors">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Scale Up</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Accelerate growth with intelligent automation</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Live AI agents running</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
