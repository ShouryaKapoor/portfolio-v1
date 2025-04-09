
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, GitHub, Linkedin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real-world application, you'd handle the form submission here
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-light-gray">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-2xl font-bold text-portfolio-dark-blue">Let's Connect</h3>
            <p className="text-lg text-gray-700">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-portfolio-blue mr-3" />
                <a href="mailto:shouryakapoor13@gmail.com" className="portfolio-link hover:underline">
                  shouryakapoor13@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-portfolio-blue mr-3" />
                <a href="tel:+918448839239" className="portfolio-link hover:underline">
                  +91-8448839239
                </a>
              </div>
              <div className="flex items-center">
                <GitHub className="w-5 h-5 text-portfolio-blue mr-3" />
                <a href="https://github.com/ShouryaKapoor" target="_blank" rel="noopener noreferrer" className="portfolio-link hover:underline">
                  github.com/ShouryaKapoor
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-portfolio-blue mr-3" />
                <a href="https://linkedin.com/in/shouryakapoor" target="_blank" rel="noopener noreferrer" className="portfolio-link hover:underline">
                  linkedin.com/in/shouryakapoor
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-dark-blue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
