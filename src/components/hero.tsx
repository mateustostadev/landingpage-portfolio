import { motion } from "framer-motion";
import { Brain, Code2, Database, Cpu, Bot, Blocks, User, Eye } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
  // Função para scroll suave até a seção de projetos
  const scrollToProjects = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-[85vh] bg-white dark:bg-background pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20 xl:gap-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-[250px] lg:max-w-[300px] xl:max-w-[350px]"
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
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <OptimizedImage
                    src="/assets/perfil.jpeg"
                    alt="Mateus Tosta"
                    className="rounded-xl w-full aspect-square object-cover"
                    loading="eager"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl text-center lg:text-left"
          >
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900 dark:text-white">
              <span className="block text-6xl sm:text-7xl lg:text-8xl">
                <TypewriterText text="Mateus Tosta" />
              </span>
              <span className="block text-green-600 dark:text-green-400 mt-4 text-2xl sm:text-4xl lg:text-5xl">
                Desenvolvedor Fullstack & IA
              </span>
            </h1>

            {/* Botão de CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                href="https://api.whatsapp.com/send?phone=5571996590332&text=Ol%C3%A1,%20Mateus!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-extrabold text-lg shadow-lg hover:brightness-110 hover:shadow-green-300/40 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <User className="w-5 h-5 mr-2 text-white" />
                Contrate-me
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                href="#projects"
                onClick={scrollToProjects}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 dark:text-gray-300 font-extrabold text-lg bg-white dark:bg-gray-800 shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-gray-200/60 transition-all duration-200 text-center ring-2 ring-gray-100/60 focus:ring-4 focus:ring-gray-300/60"
              >
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                  <span>Veja meus projetos</span>
                </div>
              </motion.a>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-sm text-gray-600 dark:text-gray-400"
            >
              Atendimento personalizado, tecnologia de ponta e resultados reais para o seu negócio.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
