import { motion } from "framer-motion";
import CodePreview from "./code-preview";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { Brain, Code2, Database, Cpu, Bot, Blocks } from "lucide-react";
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
      className="relative min-h-[85vh] bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <GradientBlur />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[280px] lg:max-w-[320px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-800/30 dark:to-emerald-900/30 blur-3xl rounded-full" />
            <div className="absolute -inset-4 bg-gradient-to-b from-green-100 to-emerald-100 dark:from-green-800/30 dark:to-emerald-900/30 blur-2xl rounded-[40%] rotate-12" />

            <div className="relative">
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
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600/60 dark:text-green-400/60" />
                </motion.div>
              ))}

              <div className="relative group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGq3z3aRyjhww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718228723300?e=1744848000&v=beta&t=h1TBrq7unUz111HOuWhVE8sq2dZVaAH86MKNdaVO_LQ"
                    alt="Mateus Tosta"
                    className="rounded-xl w-full aspect-square object-cover"
                  />
                </motion.div>
              </div>
            </div>
            <div className="mt-8 w-full">
              <CodePreview />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl text-center lg:text-left"
          >
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent text-6xl sm:text-7xl lg:text-8xl">
                <TypewriterText text="Mateus Tosta" />
              </span>
              <span className="block text-green-600 dark:text-green-500 mt-4 text-2xl sm:text-4xl lg:text-5xl">
                Desenvolvedor Fullstack & IA
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium text-muted-foreground">
              Transformando ideias em{" "}
              <span className="text-green-600 font-semibold">
                soluções digitais inovadoras
              </span>{" "}
              com expertise em{" "}
              <span className="text-green-600 font-semibold">
                desenvolvimento fullstack
              </span>{" "}
              e{" "}
              <span className="text-green-600 font-semibold">
                inteligência artificial
              </span>
              . Especializado em criar{" "}
              <span className="text-green-600 font-semibold">
                experiências web únicas
              </span>{" "}
              e{" "}
              <span className="text-green-600 font-semibold">
                {" "}
                sistemas inteligentes
              </span>{" "}
              que impulsionam o sucesso do seu negócio.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
