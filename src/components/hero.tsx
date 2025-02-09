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
import { AnimatedText } from "@/components/ui/animated-text";

const floatingIcons = [
  { Icon: Brain, delay: 0, x: -80, y: -40 },
  { Icon: Code2, delay: 0.2, x: 80, y: -20 },
  { Icon: Database, delay: 0.4, x: -60, y: 60 },
  { Icon: Cpu, delay: 0.6, x: 70, y: 40 },
  { Icon: Bot, delay: 0.8, x: 0, y: -70 },
  { Icon: Blocks, delay: 1, x: -20, y: 80 },
];

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background py-24 sm:py-32 overflow-hidden">
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
                  <Icon className="h-8 w-8 text-green-500/60" />
                </motion.div>
              ))}

              {/* Profile Image with Gradient Border */}
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-1"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Mateus Tosta"
                    className="rounded-xl w-[280px] h-[280px] object-cover"
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
            <h1 className="font-extrabold tracking-tight text-5xl/tight sm:text-7xl/tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
              Mateus Tosta
              <span className="block text-primary mt-2">
                Desenvolvedor Fullstack & IA
              </span>
            </h1>
            <p className="mt-6 text-lg/relaxed font-medium text-muted-foreground">
              <AnimatedText
                text="Transformando ideias em soluções digitais inovadoras com expertise em desenvolvimento fullstack e inteligência artificial."
                highlightWords={["inteligência", "artificial", "inovadoras"]}
              />
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="group">
                Iniciar Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground transition-colors"
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
