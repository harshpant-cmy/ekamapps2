import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "ai-leap-generative-to-agentic",
      title: "The AI Leap: From Generative to Agentic – And Why It Matters for Customer Experience",
      excerpt: "AI used to be a field reserved for the exceptionally bright—only the most brilliant minds could truly understand it. But everything changed in 2022, when ChatGPT burst onto the scene...",
      author: "Ekam Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "/lovable-uploads/8a7db7e6-d5ea-4259-9f1f-d8329aab8fc7.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <BookOpen className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Insights & Resources</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ekam <span className="text-ekam-primary">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, trends, and expert perspectives on AI, automation, and digital transformation
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ekam-primary/20">
              {/* Gradient accent line */}
              <div className="h-1 bg-gradient-to-r from-ekam-primary via-ekam-primary/70 to-ekam-primary"></div>

              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-ekam-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="line-clamp-3 mb-4 text-gray-600">
                  {post.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>

                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-ekam-primary hover:bg-ekam-primary/5 group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming soon message */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-gray-100 shadow-sm">
            <div className="w-2 h-2 bg-ekam-primary rounded-full animate-pulse"></div>
            <p className="text-gray-600 text-sm font-medium">
              More insightful articles coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogList;
