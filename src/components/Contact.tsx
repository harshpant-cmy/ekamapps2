import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, MapPin, Award, Users, Target, Building, Clock, Shield, Zap, TrendingUp } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-ekam-secondary/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info - Left Side */}
          <Card className="border-l-4 border-l-ekam-primary shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center space-x-3">
                <Mail className="h-8 w-8 text-ekam-primary" />
                <span>Let's Connect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-ekam-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <a href="mailto:hello@ekamapps.com" className="text-ekam-primary hover:text-ekam-primary/80 transition-colors">
                    hello@ekamapps.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-ekam-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <a href="tel:+919971117162" className="text-ekam-primary hover:text-ekam-primary/80 transition-colors">
                    +91 99711 17162
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-ekam-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Schedule a Free Consultation</p>
                  <p className="text-gray-600">Book a personalized consultation</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-ekam-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-ekam-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Serving businesses globally</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Ekam - Right Side - Enhanced */}
          <div className="from-ekam-primary to-ekam-primary/90 rounded-xl p-8 text-white shadow-xl bg-[s] bg-[#013a37]">
            <div className="text-center mb-8">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-3xl font-bold mb-4 text-slate-50">Why Choose Ekam?</h3>
              <p className="text-lg opacity-90 text-slate-50">Trusted by businesses worldwide for AI transformation</p>
            </div>
            
            <div className="space-y-4">
              
              <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">19+ years of industry experience</p>
                  <p className="text-sm opacity-90">Proven expertise in business transformation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Proven track record with major brands</p>
                  <p className="text-sm opacity-90">Trusted by industry leaders worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Custom AI solutions for every business</p>
                  <p className="text-sm opacity-90">Tailored to your specific needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-2 bg-white/20 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Measurable ROI and business growth</p>
                  <p className="text-sm opacity-90">Proven results that drive success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <Card className="bg-gradient-to-r from-ekam-primary via-ekam-primary/95 to-ekam-primary/90 text-white shadow-2xl overflow-hidden relative">
          <CardContent className="p-12 text-center relative z-10 bg-[#013a37]">
            <div className="max-w-4xl mx-auto">
              <Calendar className="h-20 w-20 mx-auto mb-8 opacity-90" />
              <h3 className="text-4xl font-bold mb-6">Book Your Free Consultation</h3>
              <p className="text-xl opacity-95 mb-8 leading-relaxed">
                See how our AI agents can transform your business operations in just 30 minutes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10 text-lg">
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Personalized AI solution walkthrough</span>
                  </div>
                  <div className="flex items-center justify-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Custom workflow demonstration</span>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>ROI analysis for your business</span>
                  </div>
                  <div className="flex items-center justify-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Implementation timeline discussion</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" variant="secondary" className="bg-white text-ekam-primary hover:bg-gray-100 font-bold text-xl py-6 px-12 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full" onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}>
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Free Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Contact;