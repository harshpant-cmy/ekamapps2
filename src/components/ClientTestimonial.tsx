
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const ClientTestimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
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
      </div>
    </section>
  );
};

export default ClientTestimonial;
