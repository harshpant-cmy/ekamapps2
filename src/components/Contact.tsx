
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-ekam-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info */}
          <div className="flex">
            <Card className="border-l-4 border-l-ekam-primary w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <div className="flex items-center space-x-4">
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

                <div className="flex items-center space-x-4">
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

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-ekam-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-ekam-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Schedule a Free Consultation</p>
                    <p className="text-gray-600">Book a personalized consultation</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
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
          </div>

          {/* CTA Card */}
          <div className="flex flex-col space-y-8">
            <Card className="bg-gradient-to-br from-ekam-primary to-ekam-primary/90 text-white flex-1">
              <CardContent className="p-8 text-center bg-[#013a37] h-full flex flex-col justify-between">
                <div>
                  <Calendar className="h-16 w-16 mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Book Your Free Consultation</h3>
                  <p className="text-lg opacity-90 mb-6">
                    See how our AI agents can transform your business operations in just 30 minutes.
                  </p>
                  <ul className="text-left space-y-2 mb-8 opacity-90">
                    <li>✓ Personalized AI solution walkthrough</li>
                    <li>✓ Custom workflow demonstration</li>
                    <li>✓ ROI analysis for your business</li>
                    <li>✓ Implementation timeline discussion</li>
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full bg-white text-ekam-primary hover:bg-gray-100 font-bold text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
                  onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Ekam?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ekam-primary rounded-full mt-2"></div>
                    <p className="text-gray-600">19+ years of industry experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ekam-primary rounded-full mt-2"></div>
                    <p className="text-gray-600">Proven track record with major brands</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ekam-primary rounded-full mt-2"></div>
                    <p className="text-gray-600">Custom AI solutions for every business</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ekam-primary rounded-full mt-2"></div>
                    <p className="text-gray-600">Ongoing support and optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
