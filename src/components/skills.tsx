import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Code, Server, Brain, Figma } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React", "TypeScript", "TailwindCSS", "Next.js", 
      "HTML5/CSS3", "JavaScript", "Redux", "Styled Components"
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "PHP/Laravel", "Node.js", "Python", "RESTful APIs", 
      "MySQL", "PostgreSQL", "MongoDB", "Docker"
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: Brain,
    skills: [
      "LangChain", "CrewAI", "LangFlow", "Agentes Verticais", 
      "R.A.G", "Prompt Engineering", "Automação com IA", "RPA"
    ],
  },
  {
    title: "UX/UI Design",
    icon: Figma,
    skills: [
      "Figma", "Framer", "Design Systems", "Prototipagem", 
      "User Research", "Wireframing", "Design Thinking", "Mobile First"
    ],
  },
];

const SkillCategory = ({ category, index }: { category: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
            <category.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {category.title}
          </h3>
        </div>
        
        <ul className="space-y-3 flex-grow">
          {category.skills.map((skill: string, skillIndex: number) => (
            <motion.li
              key={skillIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 + skillIndex * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
            >
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
              <span className="text-sm">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div
      id="skills"
      className="py-20 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<Code className="w-4 h-4" />} title="Habilidades Técnicas" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
