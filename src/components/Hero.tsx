
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Clock, TrendingUp, Zap, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Client Testimonial Video */}
        <Card className="border-0 shadow-xl mb-12 sm:mb-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-ekam-primary mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Client Success Story
                </h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our AI automation solutions are transforming businesses
              </p>
            </div>
            
            <div className="aspect-video max-w-4xl mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6gp2a6llZYM"
                title="Client Testimonial - AI Automation Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Main Hero Content - Centered */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Cutting-Edge{" "}
              <span className="text-ekam-primary">AI Automation</span>
              <br />
              for Modern Businesses
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From intelligent lead enrichment to multi-channel customer engagement, our agent 
              portfolio enables seamless, efficient workflows reducing manual work and driving 
              business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group px-8"
              onClick={() => {
                const agentsSection = document.getElementById('agents');
                if (agentsSection) {
                  agentsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Our Agents
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
              onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
            >
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* Feature Cards - Below Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Bot className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">AI agents that work 24/7</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Clock className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Focus on creative tasks while AI handles routine work</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Zap className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Streamline workflows and eliminate bottlenecks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <TrendingUp className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Growth Acceleration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Scale your business with intelligent automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
