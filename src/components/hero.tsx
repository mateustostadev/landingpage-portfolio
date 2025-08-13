import { motion } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { Brain, Code2, Database, Cpu, Bot, Blocks, MessageSquareIcon } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

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
      className="relative min-h-[85vh] bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden z-10"
    >
      <GradientBlur />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20 xl:gap-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
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
                  <img
                    src="/assets/perfil.jpeg"
                    alt="Mateus Tosta"
                    className="rounded-xl w-full aspect-square object-cover"
                    loading="eager"
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
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent text-6xl sm:text-7xl lg:text-8xl">
                <TypewriterText text="Mateus Tosta" />
              </span>
              <span className="block text-green-600 dark:text-green-500 mt-4 text-2xl sm:text-4xl lg:text-5xl">
                Desenvolvedor Fullstack & IA
              </span>
            </h1>

            {/* Subtítulo comercial */}
            <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-700 dark:text-emerald-300">
              Transformando ideias em soluções digitais inovadoras para empresas que querem crescer.
            </p>

            {/* Indicadores de destaque */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-2 bg-white/90 dark:bg-card px-4 py-2 rounded-xl shadow-md border border-gray-200 dark:border-border min-w-[150px] justify-center w-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-7 h-7 text-green-600 dark:text-green-400 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-6.13V7a4 4 0 00-3-3.87M4 10V7a4 4 0 013-3.87m13 6.13a4 4 0 01-3 3.87m-9 0A4 4 0 014 10m13 6.13A4 4 0 0117 20m-9 0A4 4 0 017 20" /></svg>
                <div className="flex flex-col items-start">
                  <span className="font-extrabold text-base text-green-700 dark:text-green-300">+10</span>
                  <span className="text-green-700 dark:text-green-300 text-xs">clientes atendidos</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2 bg-white/90 dark:bg-card px-4 py-2 rounded-xl shadow-md border border-gray-200 dark:border-border min-w-[150px] justify-center w-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m-6 6v2a4 4 0 004 4h4m-6-6a4 4 0 01-4-4V7a4 4 0 014-4h4a4 4 0 014 4v6a4 4 0 01-4 4H9z" /></svg>
                <div className="flex flex-col items-start">
                  <span className="font-extrabold text-base text-green-700 dark:text-green-300">+15</span>
                  <span className="text-green-700 dark:text-green-300 text-xs">projetos entregues</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-2 bg-white/90 dark:bg-card px-4 py-2 rounded-xl shadow-md border border-gray-200 dark:border-border min-w-[150px] justify-center w-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-7 h-7 text-teal-600 dark:text-teal-400 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="flex flex-col items-start">
                  <span className="font-extrabold text-base text-green-700 dark:text-green-300">3</span>
                  <span className="text-green-700 dark:text-green-300 text-xs">anos de experiência</span>
                </div>
              </motion.div>
            </div>

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
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white font-extrabold text-lg shadow-lg border-0 hover:brightness-110 hover:shadow-emerald-300/40 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <MessageSquareIcon className="w-5 h-5 mr-2 text-white opacity-80 transition-colors duration-200" />
                Solicite um orçamento
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                href="#projects"
                onClick={scrollToProjects}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full sm:w-auto px-8 py-3 rounded-full border-2 border-emerald-400 text-emerald-700 dark:text-emerald-300 font-extrabold text-lg bg-white/90 dark:bg-card shadow-xl hover:bg-gray-50 dark:hover:bg-card hover:shadow-emerald-200/60 transition-all duration-200 text-center ring-2 ring-emerald-100/60 focus:ring-4 focus:ring-emerald-300/60"
              >
                Veja meus projetos
              </motion.a>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              Atendimento personalizado, tecnologia de ponta e resultados reais para o seu negócio.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
