import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Blog header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Ekam Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, trends, and expert perspectives on AI, automation, and digital transformation
          </p>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group/button">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Coming soon message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More insightful articles coming soon. Stay tuned!
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogList;