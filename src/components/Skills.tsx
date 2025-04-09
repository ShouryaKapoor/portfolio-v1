
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal, Database, Cpu, User } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

const SkillSection: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => {
        const delay = index * 0.1;
        
        return (
          <div 
            key={skill.name} 
            className="space-y-2 animate-fade-in tech-border p-4 rounded-lg bg-white"
            style={{ animationDelay: `${delay}s` }}
          >
            <div className="flex justify-between">
              <span className="font-medium font-mono text-portfolio-dark-blue">{skill.name}</span>
              <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" 
              // Different color for high skills
              indicatorClassName={skill.level > 85 ? "bg-gradient-to-r from-portfolio-blue to-green-400" : ""}
            />
          </div>
        );
      })}
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="mr-2 h-5 w-5 text-portfolio-blue" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 75 },
        { name: "CSS", level: 85 },
        { name: "HTML", level: 95 },
      ]
    },
    {
      title: "Frameworks",
      icon: <Terminal className="mr-2 h-5 w-5 text-portfolio-blue" />,
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "NodeJS", level: 85 },
        { name: "ExpressJS", level: 80 },
        { name: "ThreeJS", level: 70 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="mr-2 h-5 w-5 text-portfolio-blue" />,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git", level: 85 },
        { name: "Postman", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Windows", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Atlas", level: 75 },
      ]
    },
    {
      title: "Soft Skills",
      icon: <User className="mr-2 h-5 w-5 text-portfolio-blue" />,
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Presentation Skills", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        
        <Card className="mt-16 border-2 border-portfolio-blue/20 shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-cyan-400"></div>
          <CardContent className="p-6">
            <Tabs defaultValue="Languages" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.title} 
                    value={category.title} 
                    className="text-sm md:text-base flex items-center justify-center">
                    {category.icon}
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skillCategories.map((category) => (
                <TabsContent key={category.title} value={category.title} className="mt-4">
                  <SkillSection skills={category.skills} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">
            <span className="font-mono text-portfolio-blue">&lt;code&gt;</span> is poetry written for machines but read by humans <span className="font-mono text-portfolio-blue">&lt;/code&gt;</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
