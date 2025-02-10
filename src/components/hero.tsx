import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CodePreview from "./code-preview";
import { GradientBlur } from "@/components/ui/gradient-blur";
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  Cpu,
  Bot,
  Blocks,
} from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: Brain, delay: 0, x: -80, y: -40 },
  { Icon: Code2, delay: 0.2, x: 80, y: -20 },
  { Icon: Database, delay: 0.4, x: -60, y: 60 },
  { Icon: Cpu, delay: 0.6, x: 70, y: 40 },
  { Icon: Bot, delay: 0.8, x: 0, y: -70 },
  { Icon: Blocks, delay: 1, x: -20, y: 80 },
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <GradientBlur />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Abstract Shape Behind Profile */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-800/30 dark:to-emerald-900/30 blur-3xl rounded-full" />
            <div className="absolute -inset-4 bg-gradient-to-b from-green-100 to-emerald-100 dark:from-green-800/30 dark:to-emerald-900/30 blur-2xl rounded-[40%] rotate-12" />

            <div className="relative">
              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    x: [0, x, 0],
                    y: [0, y, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon className="h-8 w-8 text-green-600/60 dark:text-green-400/60" />
                </motion.div>
              ))}

              {/* Profile Image */}
              <div className="relative group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGq3z3aRyjhww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718228723300?e=1744848000&v=beta&t=h1TBrq7unUz111HOuWhVE8sq2dZVaAH86MKNdaVO_LQ"
                    alt="Mateus Tosta"
                    className="rounded-xl w-[300px] h-[300px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
            <div className="mt-8">
              <CodePreview />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-extrabold tracking-tight text-6xl/tight sm:text-8xl/tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
              <TypewriterText text="Mateus Tosta" />
              <span className="block text-green-600 dark:text-green-500 mt-2 text-4xl sm:text-5xl">
                Desenvolvedor Fullstack & IA
              </span>
            </h1>
            <p className="mt-6 text-xl/relaxed font-medium text-muted-foreground">
              Transformando ideias em soluções digitais inovadoras com expertise
              em desenvolvimento fullstack e inteligência artificial.
              Especializado em criar experiências web únicas e sistemas
              inteligentes que impulsionam o sucesso do seu negócio.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                size="lg"
                className="group bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-green-50 dark:hover:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Ver Projetos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
