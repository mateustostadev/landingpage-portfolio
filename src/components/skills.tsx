import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Database, Globe, Server, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";

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

export default function Skills() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50 dark:from-background dark:to-green-900/10 relative overflow-hidden">
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
            Habilidades
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-green-100 dark:border-green-900 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] h-full">
                <CardContent className="p-6">
                  <category.icon className="h-8 w-8 mb-4 text-green-600 dark:text-green-500" />
                  <h3 className="font-semibold text-xl mb-4 text-green-800 dark:text-green-300">
                    {category.title}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
