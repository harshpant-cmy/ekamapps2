
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How Are You Different From Other Automation Tools?",
      answer: "Unlike generic automation tools, our AI Agents are designed for end-to-end business automation, integrating seamlessly with your workflows to operate autonomously without constant human input."
    },
    {
      question: "What Makes This Different From ChatGPT?",
      answer: "ChatGPT is a conversational AI, while our AI Agents go beyond chat—they execute tasks, automate processes, and integrate with business tools to drive real productivity and efficiency."
    },
    {
      question: "Do I Need Technical Expertise To Use AI Agents?",
      answer: "Not at all! Our AI solutions are designed to be user-friendly, with easy setup and seamless integration into your existing systems."
    },
    {
      question: "How Secure Is The Data Processed By AI Agents?",
      answer: "We prioritize security and compliance, ensuring that all AI-driven processes follow strict data protection measures and integrate safely within your business ecosystem. 🔒"
    },
    {
      question: "Is This Solution Customizable For My Business Needs?",
      answer: "Absolutely! We tailor AI automation to fit your specific workflows, ensuring a perfect match for your operations and goals."
    },
    {
      question: "How Do I Get Started With AI Automation?",
      answer: "Simply reach out to us! We'll assess your needs, recommend the best AI solutions, and get you up and running in no time. 🚀"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our AI solutions
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50/50 rounded-lg border border-gray-200 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-ekam-primary text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
