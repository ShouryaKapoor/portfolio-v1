
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay for better UX
    setTimeout(() => {
      // In a real-world application, you'd handle the form submission here
      // For now, we'll just show a success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset the form
      e.currentTarget.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="section-container">
        <h2 className="section-title text-white after:bg-portfolio-blue">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-blue font-mono flex items-center">
              <Terminal className="mr-2" />
              Let's Connect
            </h3>
            <p className="text-lg text-gray-300">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gray-800 rounded-lg tech-border">
                <Mail className="w-6 h-6 text-portfolio-blue mr-4" />
                <a href="mailto:shouryakapoor13@gmail.com" className="portfolio-link hover:underline text-gray-200">
                  shouryakapoor13@gmail.com
                </a>
              </div>
              
              <div className="flex items-center p-4 bg-gray-800 rounded-lg tech-border">
                <Phone className="w-6 h-6 text-portfolio-blue mr-4" />
                <a href="tel:+918448839239" className="portfolio-link hover:underline text-gray-200">
                  +91-8448839239
                </a>
              </div>
              
              <div className="flex items-center p-4 bg-gray-800 rounded-lg tech-border">
                <Github className="w-6 h-6 text-portfolio-blue mr-4" />
                <a href="https://github.com/ShouryaKapoor" target="_blank" rel="noopener noreferrer" className="portfolio-link hover:underline text-gray-200">
                  github.com/ShouryaKapoor
                </a>
              </div>
              
              <div className="flex items-center p-4 bg-gray-800 rounded-lg tech-border">
                <Linkedin className="w-6 h-6 text-portfolio-blue mr-4" />
                <a href="https://linkedin.com/in/shouryakapoor" target="_blank" rel="noopener noreferrer" className="portfolio-link hover:underline text-gray-200">
                  linkedin.com/in/shouryakapoor
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800 p-6 rounded-lg border border-portfolio-blue/30 shadow-xl">
              <div className="flex items-center p-2 bg-gray-900 rounded mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">message.js</div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 font-mono">
                      const name =
                    </label>
                    <Input
                      id="name"
                      placeholder='"Your Name"'
                      required
                      className="w-full bg-gray-700 border-portfolio-blue/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-mono">
                      const email =
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder='"your@email.com"'
                      required
                      className="w-full bg-gray-700 border-portfolio-blue/30 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 font-mono">
                    const subject =
                  </label>
                  <Input
                    id="subject"
                    placeholder='"How can I help you?"'
                    required
                    className="w-full bg-gray-700 border-portfolio-blue/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-mono">
                    const message =
                  </label>
                  <Textarea
                    id="message"
                    placeholder='"Write your message here..."'
                    required
                    className="w-full min-h-[150px] bg-gray-700 border-portfolio-blue/30 text-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-dark-blue group relative overflow-hidden" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>sendMessage()</span>
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-400 font-mono pt-2">
                  // Your data will be processed securely
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
