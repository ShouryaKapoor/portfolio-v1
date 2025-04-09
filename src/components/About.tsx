
import React from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-16 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              I'm a MERN stack web developer skilled in crafting user-friendly applications using HTML, CSS, JavaScript, and NodeJS. 
              With experience in creating AI applications using Gen-AI integration in Python and leveraging Python libraries for Data Visualization, 
              I excel at managing technical projects, solving real-world problems, and writing clean, efficient code.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <strong className="text-portfolio-dark-blue mr-2">Education:</strong>
                <span>Bachelor of Engineering in Computer Science (CGPA: 8.00) from Chandigarh University</span>
              </div>
              
              <div className="flex items-center">
                <strong className="text-portfolio-dark-blue mr-2">Based in:</strong>
                <span>Mohali, Punjab</span>
              </div>
              
              <div className="flex items-start">
                <strong className="text-portfolio-dark-blue mr-2">Email:</strong>
                <a href="mailto:shouryakapoor13@gmail.com" className="portfolio-link hover:underline">
                  shouryakapoor13@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:text-portfolio-dark-blue hover:border-portfolio-dark-blue">
                <a href="https://linkedin.com/in/shouryakapoor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:text-portfolio-dark-blue hover:border-portfolio-dark-blue">
                <a href="https://github.com/ShouryaKapoor" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Solved 100+ Problems on LeetCode</li>
                <li>Winner, Code Quest 2.0 Intra-Department Coding and Aptitude Challenge</li>
                <li>Finalist in Smart India Hackathon, proposing actionable solutions to real-world challenges</li>
              </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>SQL (Intermediate) by HackerRank</li>
                <li>C Programming Bootcamp by Udemy</li>
                <li>Introduction to Databases by Meta by Coursera</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
