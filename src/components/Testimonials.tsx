
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ekam's AI agents have transformed how we handle customer support. Response times dropped by 80% and customer satisfaction is at an all-time high.",
      author: "Sarah Chen",
      role: "VP of Customer Success",
      company: "TechFlow Inc.",
      rating: 5,
    },
    {
      quote: "The lead enrichment agent alone has saved our sales team 20+ hours per week. The ROI was evident within the first month.",
      author: "Michael Rodriguez",
      role: "Sales Director",
      company: "GrowthMax",
      rating: 5,
    },
    {
      quote: "We were skeptical about AI automation, but Ekam delivered beyond expectations. Their platform integrates seamlessly with our existing tools.",
      author: "Emily Watson",
      role: "Operations Manager",
      company: "ScaleUp Solutions",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ekam-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by teams
            <span className="gradient-text"> worldwide</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers are saying about their experience with Ekam's AI automation platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-ekam-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-dark-card rounded-2xl p-8 border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Companies Trust Us" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "10M+", label: "Tasks Automated" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
