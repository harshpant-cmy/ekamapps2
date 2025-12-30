import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();

  // For now, we'll handle the first blog post directly
  if (slug === "ai-leap-generative-to-agentic") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to blog button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 text-ekam-primary hover:bg-ekam-primary/5">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
              <BookOpen className="h-3 w-3 text-ekam-primary" />
              <span className="text-xs font-medium text-ekam-primary">AI Insights</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The AI Leap: From Generative to Agentic – And Why It Matters for Customer Experience
            </h1>

            <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-01-15">January 15, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Ekam Team</span>
              </div>
              <span>8 min read</span>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                AI used to be a field reserved for the exceptionally bright—only the most brilliant minds could truly understand it, let alone use it in their daily lives to solve real problems. But everything changed in 2022, when ChatGPT burst onto the scene.
              </p>

              <p>
                Much like how mobile phones revolutionised internet access, ChatGPT did the same for AI—it made it accessible to everyone.
              </p>

              <p>
                What once felt like a distant, futuristic concept suddenly landed on our doorsteps, captivating users and businesses alike. In a remarkably short span of time, Generative AI found widespread adoption across industries. Businesses began using it to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to customer complaints</li>
                <li>Generate marketing content</li>
                <li>Automate reporting</li>
                <li>Write code</li>
                <li>Detect fraud</li>
                <li>Perform predictive analysis</li>
              </ul>

              <p>
                All the while trying to keep pace with the blistering speed at which AI continues to evolve.
              </p>

              <p>
                For many leaders, fully utilising AI to improve the bottom line feels like reaching for a fruit just out of reach—every time they move closer, it seems to move further away.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                And now, AI Has Taken Another Leap Forward. And it's called Agentic AI.
              </h2>

              <p>
                To understand what makes Agentic AI such a game-changer, let's explore three key questions:
              </p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>What is Agentic AI?</li>
                <li>How is it different from Generative AI and traditional AI workflows?</li>
                <li>How can it be used to solve business problems more effectively?</li>
              </ol>

              <p>
                And finally, we'll see how all three—Generative AI, AI Workflows, and Agentic AI—would each tackle a real business challenge.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                What Is Agentic AI?
              </h2>

              <p>
                In simple terms, Agentic AI refers to an AI system capable of acting autonomously to accomplish goals, without needing constant human input. Think of it as an AI that can plan, decide, and execute independently.
              </p>

              {/* First image - Agentic AI Characteristics */}
              <figure className="my-10">
                <img
                  src="/lovable-uploads/8a7db7e6-d5ea-4259-9f1f-d8329aab8fc7.png"
                  alt="Agentic AI Characteristics showing autonomous goal achievement, goal-oriented focus, multi-step reasoning, learning and adaptation, and context awareness"
                  className="w-full rounded-2xl shadow-lg border border-gray-100"
                  loading="lazy"
                />
                <figcaption className="text-sm text-gray-500 mt-3 text-center">
                  Key characteristics of Agentic AI systems
                </figcaption>
              </figure>

              <p>Key characteristics include:</p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-gray-900">Goal-oriented:</strong> Given a high-level objective, it figures out how to reach it</li>
                <li><strong className="text-gray-900">Multi-step reasoning:</strong> Breaks down complex tasks into logical steps</li>
                <li><strong className="text-gray-900">Autonomous execution:</strong> Makes decisions and acts without human approvals at every stage</li>
                <li><strong className="text-gray-900">Learning and adaptation:</strong> Evolves based on feedback and outcomes</li>
                <li><strong className="text-gray-900">Context awareness:</strong> Understands its environment and limitations</li>
              </ul>

              <p>
                Imagine a very smart and curious subordinate. You give them a problem and a set of tools, and they'll use their intelligence, insights, and the context you provided to find a solution with minimal intervention from your side.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                How Is Agentic AI Different from Generative AI and AI Workflows?
              </h2>

              <p>
                It's a common misconception to lump Agentic AI together with Generative AI or AI workflows. But they are fundamentally different systems.
              </p>

              {/* Second image - Comparison of AI Systems */}
              <figure className="my-10">
                <img
                  src="/lovable-uploads/48a0d445-5fd3-402f-8354-149332bf6352.png"
                  alt="Comparison of AI Systems showing differences between Generative AI, AI Workflows, and Agentic AI across various characteristics"
                  className="w-full rounded-2xl shadow-lg border border-gray-100"
                  loading="lazy"
                />
                <figcaption className="text-sm text-gray-500 mt-3 text-center">
                  Comparison matrix of different AI system types
                </figcaption>
              </figure>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Generative AI
              </h3>

              <p>
                Generative AI creates new content—text, images, videos, code—based on patterns in its training data. ChatGPT is a prime example.
              </p>

              <p>You give it a prompt like:</p>

              <blockquote className="border-l-4 border-ekam-primary bg-ekam-primary/5 pl-6 py-4 my-6 italic rounded-r-lg">
                "Write a funny out-of-office message for my vacation in Malaysia,"
              </blockquote>

              <p>…and it delivers.</p>

              <p>
                Want a different tone, language, or style? Just prompt it again. It's powerful—but it still relies heavily on human input. It's reactive by nature.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                AI Workflows
              </h3>

              <p>
                AI workflows are rule-based systems that follow predefined steps to complete tasks.
              </p>

              <p>For example, consider a system that:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sends a WhatsApp message to a lead</li>
                <li>Follows up with an email</li>
                <li>Sends a reminder</li>
                <li>Assigns the lead to a sales agent if they respond</li>
              </ul>

              <p>
                This is an AI workflow. It works within a clearly defined path with set inputs and outputs. It's reliable—but inflexible. If something unusual happens, it won't adapt on its own.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Agentic AI
              </h3>

              <p>
                Agentic AI, on the other hand, combines reasoning, autonomy, and adaptability.
              </p>

              <p>
                It doesn't just follow rules or wait for prompts. It makes decisions on the fly, adjusts to new information, and figures out the best path forward—just like a smart teammate.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                So, How Can Agentic AI Solve Business Problems More Effectively?
              </h2>

              <p>
                This is where Agentic AI shines—it fits into complex business systems, or even replaces them entirely.
              </p>

              <p>Need AI to:</p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-gray-900">Cold-call leads,</strong> talk in a human-like tone, qualify them, assign hot ones to real agents, and set reminders? Agentic AI can do that.</li>
                <li><strong className="text-gray-900">Run a CRM</strong> that integrates WhatsApp, email, chat, IVR, and generates daily reports on customer satisfaction? Agentic AI can manage the whole suite.</li>
                <li><strong className="text-gray-900">Evaluate creditworthiness</strong> using dozens of data points, request more info if needed, and flag suspicious behaviour? Absolutely within its scope.</li>
              </ul>

              <p>
                Agentic AI takes the best parts of Generative AI and traditional workflows—and elevates them by adding autonomy and intelligence.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Real-World Application: Increasing Customer Satisfaction by 10%
              </h2>

              <p>
                Let's bring all this together with a real business goal:
              </p>

              <div className="bg-ekam-primary/5 border-l-4 border-ekam-primary p-6 my-6 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">The Problem:</h4>
                <p className="mb-0 text-gray-700">
                  Company A wants to improve customer satisfaction by 10%. They turn to AI for help.
                </p>
              </div>

              {/* Third image - AI-Driven Customer Satisfaction Boost */}
              <figure className="my-10">
                <img
                  src="/lovable-uploads/baa9f48e-91cd-4e86-b035-181abbbe0162.png"
                  alt="AI-Driven Customer Satisfaction Boost showing how Generative AI Chatbot, AI Workflow System, and Agentic AI Service Agent each contribute to improving customer satisfaction"
                  className="w-full rounded-2xl shadow-lg border border-gray-100"
                  loading="lazy"
                />
                <figcaption className="text-sm text-gray-500 mt-3 text-center">
                  Three AI approaches to boosting customer satisfaction
                </figcaption>
              </figure>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Generative AI
              </h3>

              <p>Deploys a conversational chatbot across website and app:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Trained on past support transcripts, FAQs, and product info</li>
                <li>Handles queries like "Where's my order?", "What's the return policy?", or "Suggest a gift for my dad's birthday"</li>
                <li>Provides real-time, human-like responses</li>
              </ul>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r-lg">
                <p className="text-emerald-800 font-medium mb-0">
                  <strong>Impact:</strong> Customers get answers fast, reducing frustration and support costs.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                AI Workflow
              </h3>

              <p>Implements a smart support system that:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Classifies issues (returns, payments, delivery)</li>
                <li>Detects urgency from customer sentiment (e.g., "This is my third complaint...")</li>
                <li>Automatically routes the issue to the right team or triggers actions (like issuing refunds or assigning a pickup)</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
                <p className="text-blue-800 font-medium mb-0">
                  <strong>Impact:</strong> Faster resolutions, fewer escalations, and better ticket management.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                Agentic AI
              </h3>

              <p>Deploys an autonomous service agent that:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monitors logistics data in real time</li>
                <li>Detects delivery delays or stock-outs</li>
                <li>Proactively sends apology emails and offers (e.g., "Your order is delayed — here's a ₹100 coupon")</li>
                <li>Automatically re-orders if stock is replenished within 24 hours</li>
              </ul>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-4 rounded-r-lg">
                <p className="text-purple-800 font-medium mb-0">
                  <strong>Impact:</strong> The customer never has to complain—issues are resolved before they even ask.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Takeaway
              </h2>

              <p>
                Agentic AI is the next big leap in the AI journey.
              </p>

              <p>
                It's not just smarter—it's more independent, context-aware, and goal-driven. It turns AI from a passive tool into an active collaborator that can take on real responsibilities in your business.
              </p>

              <p>
                We're entering a future where instead of giving step-by-step instructions, we'll delegate entire goals.
              </p>

              <p>This means:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>More empowered entrepreneurs</li>
                <li>More responsive governance</li>
                <li>More personalised healthcare</li>
                <li>And autonomous systems that negotiate, trade, and operate on our behalf</li>
              </ul>

              <p className="text-xl font-medium text-gray-900 mt-8">
                The technology is ready. The question is—are we?
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  // Handle other blog posts or 404
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blog">
          <Button className="bg-ekam-primary hover:bg-ekam-primary/90">Back to Blog</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
