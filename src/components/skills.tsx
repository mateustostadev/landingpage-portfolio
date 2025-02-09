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
      "OpenAI GPT",
      "Modelos LLM",
      "Prompt Engineering",
      "Automação com IA",
      "NLP",
    ],
  },
];

export default function Skills() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-green-50 dark:from-background dark:to-green-900/10 relative overflow-hidden">
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
            Habilidades & Expertise
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
              <Card className="bg-background/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-green-500/20 shadow-lg shadow-green-500/5 h-full">
                <CardContent className="p-6">
                  <category.icon className="h-8 w-8 mb-4 text-green-500" />
                  <h3 className="font-semibold text-xl mb-4">
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
