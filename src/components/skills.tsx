import { motion } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { Globe, Server, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "HTML5/CSS3",
      "JavaScript",
      "Redux",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "PHP/Laravel",
      "Node.js",
      "Python",
      "RESTful APIs",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: Brain,
    skills: [
      "LangChain",
      "CrewAI",
      "LangFlow",
      "Agentes Verticais",
      "R.A.G",
      "Prompt Engineering",
      "Automação com IA",
      "RPA",
    ],
  },
];

const SkillTag = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="px-3 py-2 text-sm font-medium bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[40px]"
    >
      <span className="text-gray-700 dark:text-gray-300 text-center">{skill}</span>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
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
        
        <div className="flex flex-wrap gap-2 flex-grow">
          {category.skills.map((skill, skillIndex) => (
            <SkillTag
              key={skillIndex}
              skill={skill}
              delay={index * 0.1 + skillIndex * 0.05}
            />
          ))}
        </div>
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
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"
          >
            Habilidades Técnicas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Tecnologias e ferramentas com as quais trabalho para entregar soluções de alta qualidade
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
