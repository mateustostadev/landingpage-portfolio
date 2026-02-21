import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const { t, language } = useLanguage();

  const workflowSteps = {
    pt: [
      {
        title: "// Iniciando análise do projeto...",
        code: `const clientNeeds = await analyzeRequirements({
  business: "e-commerce",
  painPoints: ["slow_process", "manual_work"],
  goals: ["automation", "efficiency"]
});

console.log("Análise concluída - 3 pontos críticos identificados");`,
        result: "Requisitos mapeados - Próximo: Arquitetura"
      },
      {
        title: "// Definindo arquitetura da solução...",
        code: `const architecture = {
  frontend: "React + TypeScript",
  backend: "Node.js + Express",
  database: "PostgreSQL",
  automation: "Python + Selenium",
  ai: "LangChain + OpenAI"
};

console.log("Arquitetura definida - Escalável e modular");`,
        result: "Arquitetura validada - Próximo: Desenvolvimento"
      },
      {
        title: "// Desenvolvendo solução personalizada...",
        code: `async function developSolution() {
  const core = await buildCoreSystem();
  const automation = await implementAutomation();
  const ai = await integrateAI();
  
  return { core, automation, ai };
}

console.log("Desenvolvimento em andamento...");`,
        result: "Sistema desenvolvido - Próximo: Testes"
      },
      {
        title: "// Executando testes e otimizações...",
        code: `const testResults = await runTests({
  unit: "100% coverage",
  integration: "passed",
  performance: "2.1s load time",
  security: "validated"
});

console.log("Testes concluídos - Performance otimizada");`,
        result: "Testes aprovados - Próximo: Deploy"
      },
      {
        title: "// Deploy e monitoramento...",
        code: `await deploySolution({
  environment: "production",
  monitoring: "enabled",
  backup: "automated",
  scaling: "auto"
});

console.log("Solução ativa - Monitoramento ativo");`,
        result: "Deploy concluído - Cliente satisfeito!"
      }
    ],
    en: [
      {
        title: "// Initializing project analysis...",
        code: `const clientNeeds = await analyzeRequirements({
  business: "e-commerce",
  painPoints: ["slow_process", "manual_work"],
  goals: ["automation", "efficiency"]
});

console.log("Analysis completed - 3 critical points identified");`,
        result: "Requirements mapped - Next: Architecture"
      },
      {
        title: "// Defining solution architecture...",
        code: `const architecture = {
  frontend: "React + TypeScript",
  backend: "Node.js + Express",
  database: "PostgreSQL",
  automation: "Python + Selenium",
  ai: "LangChain + OpenAI"
};

console.log("Architecture defined - Scalable and modular");`,
        result: "Architecture validated - Next: Development"
      },
      {
        title: "// Developing custom solution...",
        code: `async function developSolution() {
  const core = await buildCoreSystem();
  const automation = await implementAutomation();
  const ai = await integrateAI();
  
  return { core, automation, ai };
}

console.log("Development in progress...");`,
        result: "System developed - Next: Testing"
      },
      {
        title: "// Running tests and optimizations...",
        code: `const testResults = await runTests({
  unit: "100% coverage",
  integration: "passed",
  performance: "2.1s load time",
  security: "validated"
});

console.log("Tests completed - Performance optimized");`,
        result: "Tests approved - Next: Deploy"
      },
      {
        title: "// Deployment and monitoring...",
        code: `await deploySolution({
  environment: "production",
  monitoring: "enabled",
  backup: "automated",
  scaling: "auto"
});

console.log("Solution active - Monitoring enabled");`,
        result: "Deployment completed - Happy client!"
      }
    ]
  };

  const stepsToUse = language === "pt" ? workflowSteps.pt : workflowSteps.en;

  useEffect(() => {
    let currentIndex = 0;
    const currentStepData = stepsToUse[currentStep];
    const fullText = `${currentStepData.title}\n${currentStepData.code}`;

    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentStep, language]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % stepsToUse.length);
    }, 15000);

    return () => clearInterval(stepInterval);
  }, [stepsToUse.length]);

  return (
    <div
      id="about"
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<User className="w-4 h-4" />} title={t('about.badge')} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.6,
              delay: 0.2
            }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8"
          >
            <motion.p
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {language === 'pt' ? (
                <>
                  Sou <span className="font-semibold text-green-700 dark:text-green-300">Mateus Tosta</span>,
                  tenho 26 anos e sou um desenvolvedor que acredita que boas soluções não nascem apenas de linhas de código — mas da
                  <span className="font-semibold text-green-700 dark:text-green-300"> escuta atenta</span>, do
                  <span className="font-semibold text-green-700 dark:text-green-300"> entendimento real dos problemas</span> e da
                  <span className="font-semibold text-green-700 dark:text-green-300"> capacidade de transformar ideias</span> em
                  ferramentas que funcionam de verdade.
                </>
              ) : (
                <>
                  I am <span className="font-semibold text-green-700 dark:text-green-300">Mateus Tosta</span>,
                  26 years old, and a developer who believes that good solutions aren't just born from lines of code — but from
                  <span className="font-semibold text-green-700 dark:text-green-300"> active listening</span>, from
                  <span className="font-semibold text-green-700 dark:text-green-300"> truly understanding problems</span>, and from the
                  <span className="font-semibold text-green-700 dark:text-green-300"> ability to transform ideas</span> into
                  tools that actually work.
                </>
              )}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {language === 'pt' ? (
                <>
                  Com habilidades em desenvolvimento web, automações e inteligência artificial, venho criando
                  <span className="font-semibold text-green-700 dark:text-green-300"> soluções</span> que
                  <span className="font-semibold text-green-700 dark:text-green-300"> simplificam rotinas</span>,
                  <span className="font-semibold text-green-700 dark:text-green-300"> otimizam tempo</span> e geram
                  <span className="font-semibold text-green-700 dark:text-green-300"> impacto direto</span> no dia a dia de
                  empresas e pessoas.
                </>
              ) : (
                <>
                  With skills in web development, automation, and AI, I have been creating
                  <span className="font-semibold text-green-700 dark:text-green-300"> solutions</span> that
                  <span className="font-semibold text-green-700 dark:text-green-300"> simplify routines</span>,
                  <span className="font-semibold text-green-700 dark:text-green-300"> optimize time</span>, and generate a
                  <span className="font-semibold text-green-700 dark:text-green-300"> direct impact</span> on the daily lives of
                  companies and people.
                </>
              )}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {language === 'pt' ? (
                <>
                  <span className="font-bold text-green-700 dark:text-green-300">Meu trabalho tem um objetivo claro:</span> tornar a tecnologia uma aliada estratégica,
                  acessível e eficiente.
                </>
              ) : (
                <>
                  <span className="font-bold text-green-700 dark:text-green-300">My work has a clear goal:</span> to make technology a strategic,
                  accessible, and efficient ally.
                </>
              )}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {language === 'pt' ? (
                <>
                  Gosto de construir <span className="font-semibold text-green-700 dark:text-green-300">sistemas sob medida</span>,
                  que resolvem, organizam e entregam valor. Se você busca alguém que una técnica, visão e
                  <span className="font-semibold text-green-700 dark:text-green-300"> compromisso com resultados reais</span>, estou pronto para
                  colaborar com seu projeto.
                </>
              ) : (
                <>
                  I enjoy building <span className="font-semibold text-green-700 dark:text-green-300">custom systems</span>
                  that solve, organize, and deliver value. If you're looking for someone who combines technique, vision, and a
                  <span className="font-semibold text-green-700 dark:text-green-300"> commitment to real results</span>, I am ready to
                  collaborate on your project.
                </>
              )}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.6,
              delay: 0.4
            }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="relative lg:pl-4"
          >
            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 dark:border-gray-600 min-h-[400px] sm:min-h-[450px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                </div>
                <div className="ml-4 text-xs sm:text-sm text-gray-400 font-mono">
                  mateus@workflow:~$
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm text-green-400 dark:text-green-300">
                <div className="whitespace-pre-wrap min-h-[200px] sm:min-h-[250px]">
                  {displayText}
                  {isTyping && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>

                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.5
                    }}
                    className="mt-4 text-blue-400 dark:text-blue-300"
                  >
                    {stepsToUse[currentStep].result}
                  </motion.div>
                )}
              </div>

              <div className="mt-4 sm:mt-6 flex gap-1 justify-center">
                {stepsToUse.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 sm:h-2 rounded-full transition-all duration-300 ${index === currentStep
                        ? "bg-green-500 w-6 sm:w-8 md:w-12"
                        : "bg-gray-600 w-2 sm:w-3"
                      }`}
                    whileHover={{
                      scaleY: 1.5,
                      originY: 0.5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 