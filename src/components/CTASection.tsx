
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ekam-primary/10 via-transparent to-ekam-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ekam-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="h-4 w-4 text-ekam-primary" />
            <span className="text-gray-300 text-sm">Start automating today</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to transform your
              <span className="block gradient-text">business with AI?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join hundreds of companies already using Ekam to automate their workflows,
              reduce manual work, and scale their operations with intelligent AI agents.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-opacity rounded-full px-8 h-14 text-base font-medium group"
              onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-medium"
              onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="pt-8">
            <p className="text-gray-500 text-sm mb-4">No credit card required • Free consultation • Cancel anytime</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                GDPR Ready
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                99.9% Uptime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
