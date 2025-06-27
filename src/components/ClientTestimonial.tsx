
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const ClientTestimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Play className="h-8 w-8 sm:h-10 sm:w-10 text-ekam-primary mr-3 sm:mr-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Client Success Stories
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI automation solutions are transforming businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* First Video - AI Automation Success */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  AI Automation Success
                </h3>
                <p className="text-sm text-gray-600">
                  How we transformed their business processes
                </p>
              </div>
              
              <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
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

          {/* Second Video - App Sumo Integration */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Custom API Integration for App Sumo
                </h3>
                <p className="text-sm text-gray-600">
                  Finding relevant product information through AI Agents
                </p>
              </div>
              
              <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/jM_dnvqkad8"
                  title="Custom API Integration for App Sumo: Streamlining Workflow with n8n | Client Success Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
