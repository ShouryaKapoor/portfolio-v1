
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: Technology[];
  github?: string;
  liveDemo?: string;
  image?: string;
  features: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  github,
  liveDemo,
  image,
  features
}) => {
  return (
    <Card className="project-card">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold text-portfolio-dark-blue">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="secondary">{tech.name}</Badge>
          ))}
        </div>
        <div>
          <h4 className="font-medium mb-2">Features:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="justify-end space-x-2">
        {github && (
          <Button asChild variant="outline" size="sm">
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={16} className="mr-1" />
              Code
            </a>
          </Button>
        )}
        {liveDemo && (
          <Button asChild size="sm" className="bg-portfolio-blue hover:bg-portfolio-dark-blue">
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Dynamic Apple Web Page",
      description: "A clone of Apple iPhone 15 Pro website using React and TailwindCSS",
      technologies: [
        { name: "JavaScript" },
        { name: "TailwindCSS" },
        { name: "HTML" },
        { name: "ReactJS" },
        { name: "NodeJS" },
        { name: "ThreeJS" },
        { name: "GSAP" }
      ],
      github: "https://github.com/ShouryaKapoor/Apple-Web-Page-Clone",
      liveDemo: "https://apple-website-clone-ox6q.vercel.app/",
      image: "https://placehold.co/600x400/e2e8f0/64748b?text=Apple+Store+Clone",
      features: [
        "Beautiful Subtle Smooth Animations using GSAP (Greensock Animations) and ThreeJs for displaying iPhone 15 Pro models in various colors and shapes.",
        "Custom Video Carousel (made with GSAP): Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience."
      ]
    },
    {
      title: "#Flex - Social Media App",
      description: "Full-stack Next.js 14 app using App Router, Prisma, Postgres, Clerk, and Shadcn — with full authentication, file uploads, server actions, and optimistic UI updates",
      technologies: [
        { name: "JavaScript" },
        { name: "MongoDB" }, 
        { name: "Express" },
        { name: "ReactJS" },
        { name: "NodeJS" }
      ],
      github: "https://github.com/ShouryaKapoor/Flex-Social",
      liveDemo: "https://flex-social-wine.vercel.app/",
      image: "https://placehold.co/600x400/e2e8f0/64748b?text=Auth+System",
      features: [
        "App Router: Server Components, Layouts, Route Handlers",
        "Authentication & Authorization with Clerk.",
        "Optimistic updates, caching, and revalidation magic.",
      ]
    },
    {
      title: "Scriptify — AI Movie Script Generator",
      description: "An AI-powered movie script generator using Python and Gemini AI",
      technologies: [
        { name: "Python" },
        { name: "Gemini AI" },
        { name: "Flask" },
        { name: "React" }
      ],
      github: "https://github.com/ShouryaKapoor/scriptify",
      liveDemo: "https://scriptify-demo.vercel.app",
      image: "https://placehold.co/600x400/e2e8f0/64748b?text=Scriptify+AI",
      features: [
        "Developed Scriptify, an AI-powered movie script generator using Python. Integrated the Gemini API to generate dynamic and contextually relevant script responses based on user prompts.",
        "Designed a responsive interface to ensure a seamless and adaptive user experience across different devices."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light-gray">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
