
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Award, Target, Building, TrendingUp, ArrowRight, MessageSquare, Globe, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const features = [
    { icon: Award, title: "19+ years experience", description: "Proven expertise", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Building, title: "Major brand track record", description: "Industry leaders", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Target, title: "Custom AI solutions", description: "Tailored for you", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: TrendingUp, title: "Measurable ROI", description: "Proven results", color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,58,55,0.03),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ekam-primary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <MessageSquare className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started <span className="text-ekam-primary">Today</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {/* Contact Info Card */}
          <Card className={`group border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden bg-white transition-all duration-700 delay-200 hover:-translate-y-1 hover:border-ekam-primary/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Gradient accent */}
            <div className="h-1 bg-gradient-to-r from-ekam-primary via-ekam-primary/70 to-ekam-primary"></div>

            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-ekam-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-ekam-primary" />
                </div>
                <div>
                  <span className="block">Let's Connect</span>
                  <span className="text-sm font-normal text-gray-500">We're here to help</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 pb-8">
              {/* Email */}
              <a href="mailto:hello@ekamapps.com" className="group/item flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-all duration-300 border border-gray-100 hover:border-ekam-primary/20">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-ekam-primary font-medium">hello@ekamapps.com</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover/item:text-ekam-primary group-hover/item:translate-x-1 transition-all" />
              </a>

              {/* Phone */}
              <a href="tel:+919971117162" className="group/item flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-all duration-300 border border-gray-100 hover:border-ekam-primary/20">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-ekam-primary font-medium">+91 99711 17162</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover/item:text-ekam-primary group-hover/item:translate-x-1 transition-all" />
              </a>

              {/* Schedule */}
              <div className="group/item flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-all duration-300 border border-gray-100 hover:border-ekam-primary/20 cursor-pointer"
                onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}>
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Schedule a Call</p>
                  <p className="text-gray-600">Book a personalized consultation</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover/item:text-ekam-primary group-hover/item:translate-x-1 transition-all" />
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Global Reach</p>
                  <p className="text-gray-600">Serving businesses worldwide</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-600 font-medium">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us Card - Light Theme */}
          <Card className={`group border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden bg-white transition-all duration-700 delay-400 hover:-translate-y-1 hover:border-ekam-primary/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Gradient accent */}
            <div className="h-1 bg-gradient-to-r from-ekam-primary via-ekam-primary/70 to-ekam-primary"></div>

            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-ekam-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-7 w-7 text-ekam-primary" />
                </div>
                <div>
                  <span className="block">Why Choose Ekam?</span>
                  <span className="text-sm font-normal text-gray-500">Trusted by businesses worldwide</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 pb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group/item flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-all duration-300 border border-gray-100 hover:border-ekam-primary/20">
                    <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                      <IconComponent className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Simple CTA Banner */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-ekam-primary rounded-2xl py-10 px-8 relative overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Book Your Free Consultation
                </h3>
                <p className="text-white/80">
                  See how our AI agents can transform your business in just 30 minutes.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-ekam-primary hover:bg-white/90 shadow-lg h-12 px-8 flex-shrink-0"
                onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
              >
                Schedule Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
