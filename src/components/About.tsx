
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Building, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Led by Experience: AI Solutions Crafted by an Industry Leader
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep understanding of cross-functional business challenges from firsthand experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Info */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-ekam-primary">
              <CardHeader>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/f51f535d-b175-4696-9d43-7c25ca27c315.png" 
                      alt="Nitin Gupta - Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Nitin Gupta</h3>
                    <p className="text-lg text-ekam-primary font-semibold">Founder & CEO</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Tech leader with 19+ years of experience, including 12+ years in leadership roles, 
                  specializing in AI solutions since 2018.
                </p>
                <p className="text-gray-600">
                  Led product development at prominent organizations, including India Today Group, 
                  Lenskart, Senior World, and own startup, Zecross.
                </p>
                <p className="text-gray-600">
                  Passionate about delivering practical AI solutions that drive measurable impact 
                  and create a competitive advantage for businesses.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-ekam-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-ekam-primary mb-2">19+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-ekam-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-ekam-primary mb-2">12+</div>
                <div className="text-sm text-gray-600">Years in Leadership</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-ekam-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-ekam-primary mb-2">7+</div>
                <div className="text-sm text-gray-600">Years in AI</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-ekam-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-ekam-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Success Focus</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
