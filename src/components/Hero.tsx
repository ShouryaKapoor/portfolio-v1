
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="section-container flex flex-col items-center justify-center text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Shourya Kapoor
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">
          MERN Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
          Passionate about crafting user-friendly applications using HTML, CSS, JavaScript, and NodeJS.
          Experienced in AI applications with Python for data visualization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-portfolio-blue hover:bg-portfolio-dark-blue transition-colors">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-portfolio-blue text-portfolio-blue hover:text-portfolio-dark-blue hover:border-portfolio-dark-blue">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 animate-bounce flex flex-col items-center justify-center mt-16 text-gray-500 hover:text-portfolio-blue transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
