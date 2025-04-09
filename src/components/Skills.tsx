
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
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
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "NodeJS", level: 85 },
        { name: "ExpressJS", level: 80 },
        { name: "ThreeJS", level: 70 },
      ]
    },
    {
      title: "Tools & Platforms",
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
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Presentation Skills", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <Card className="mt-16">
          <CardContent className="p-6">
            <Tabs defaultValue="Languages" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.title} value={category.title} className="text-sm md:text-base">
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
      </div>
    </section>
  );
};

export default Skills;
