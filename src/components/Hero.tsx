
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-ekam-secondary/20 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your{" "}
                <span className="text-ekam-primary">Business</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We build intelligent AI solutions that simplify complexity, streamline processes, 
                and accelerate growth—empowering your team to achieve more with less effort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group"
                onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white"
              >
                Explore AI Agents
              </Button>
            </div>
          </div>

          {/* Feature Cards - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-ekam-primary/5 to-ekam-secondary/20 rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Bot className="h-10 w-10 text-ekam-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Smart Automation</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">AI agents that work 24/7</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Clock className="h-10 w-10 text-ekam-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Save Time</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Focus on creative tasks while AI handles routine work</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Zap className="h-10 w-10 text-ekam-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Efficiency</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Streamline workflows and eliminate bottlenecks</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <TrendingUp className="h-10 w-10 text-ekam-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Growth Acceleration</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Scale your business with intelligent automation</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="relative">
              <div className="absolute -top-8 -right-4 w-16 h-16 bg-ekam-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-12 h-12 bg-ekam-secondary/40 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
