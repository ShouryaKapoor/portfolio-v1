
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Code, Laptop } from "lucide-react";

const Hero: React.FC = () => {
  // Animation for typing effect
  const [displayText, setDisplayText] = React.useState("");
  const fullText = "MERN Stack Developer";
  
  React.useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        
        // Reset after a delay to repeat the animation
        setTimeout(() => {
          setDisplayText("");
          i = 0;
        }, 2000);
      }
    }, 100);
    
    return () => {
      clearInterval(typingInterval);
    };
  }, [displayText.length === 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16 text-white">
      <div className="section-container flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="flex items-center justify-center mb-6 text-portfolio-blue">
          <Terminal size={40} className="mr-2" />
          <Code size={40} className="mx-2" />
          <Laptop size={40} className="ml-2" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-cyan-400 bg-clip-text text-transparent">
          Shourya Kapoor
        </h1>
        
        <div className="h-12 mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-mono border-r-4 border-portfolio-blue inline-block pr-1">
            {displayText}<span className="animate-ping">_</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light">
          Passionate about crafting user-friendly applications using
          <span className="text-portfolio-blue font-medium"> HTML</span>,
          <span className="text-portfolio-blue font-medium"> CSS</span>,
          <span className="text-portfolio-blue font-medium"> JavaScript</span>, and
          <span className="text-portfolio-blue font-medium"> NodeJS</span>.
          Experienced in AI applications with Python for data visualization.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-portfolio-blue hover:bg-portfolio-dark-blue transition-colors group relative overflow-hidden">
            <a href="#projects" className="flex items-center">
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-portfolio-dark-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-portfolio-blue text-portfolio-blue hover:text-white hover:border-portfolio-blue group relative overflow-hidden">
            <a href="#contact" className="flex items-center">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-portfolio-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </Button>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 animate-bounce flex flex-col items-center justify-center mt-16 text-gray-400 hover:text-portfolio-blue transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
