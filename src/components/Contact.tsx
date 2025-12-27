import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, MapPin, Award, Target, Building, TrendingUp, ArrowRight, MessageSquare } from "lucide-react";
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

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ekam-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <MessageSquare className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Info - Left Side */}
          <Card className={`border-0 shadow-xl rounded-2xl overflow-hidden bg-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="h-1 bg-gradient-to-r from-ekam-primary to-ekam-primary/60"></div>
            <CardHeader className="pt-8">
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-ekam-primary" />
                </div>
                <span>Let's Connect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-8">

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center group-hover:bg-ekam-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <a href="mailto:hello@ekamapps.com" className="text-ekam-primary hover:text-ekam-primary/80 transition-colors">
                    hello@ekamapps.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center group-hover:bg-ekam-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <a href="tel:+919971117162" className="text-ekam-primary hover:text-ekam-primary/80 transition-colors">
                    +91 99711 17162
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center group-hover:bg-ekam-primary/20 transition-colors">
                  <Calendar className="h-5 w-5 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Schedule a Free Consultation</p>
                  <p className="text-gray-600">Book a personalized consultation</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-ekam-primary/5 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-ekam-primary/10 flex items-center justify-center group-hover:bg-ekam-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Serving businesses globally</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Ekam - Right Side */}
          <div className={`bg-ekam-primary rounded-2xl p-8 text-white shadow-xl relative overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

            <div className="relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Why Choose Ekam?</h3>
                <p className="text-white/80">Trusted by businesses worldwide for AI transformation</p>
              </div>

              <div className="space-y-4">

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">19+ years of industry experience</p>
                    <p className="text-sm text-white/70">Proven expertise in business transformation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Proven track record with major brands</p>
                    <p className="text-sm text-white/70">Trusted by industry leaders worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Custom AI solutions for every business</p>
                    <p className="text-sm text-white/70">Tailored to your specific needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Measurable ROI and business growth</p>
                    <p className="text-sm text-white/70">Proven results that drive success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-ekam-primary rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Book Your Free Consultation</h3>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              See how our AI agents can transform your business operations in just 30 minutes.
            </p>

            {/* Bullet points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Personalized AI solution walkthrough</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Custom workflow demonstration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>ROI analysis for your business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Implementation timeline discussion</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
              className="bg-white text-ekam-primary hover:bg-white/90 font-bold text-lg h-14 px-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
