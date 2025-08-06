import { motion } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { useState, useEffect } from "react";

export default function About() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const workflowSteps = [
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
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentStepData = workflowSteps[currentStep];
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
  }, [currentStep]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
    }, 15000); // Aumentado para 15 segundos

    return () => clearInterval(stepInterval);
  }, [workflowSteps.length]);

  return (
    <div
      id="about"
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <GradientBlur />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 inline-block">
            Sobre Mim
          </h2>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Texto lateralizado à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8"
          >
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Sou <span className="font-semibold text-green-700 dark:text-green-300">Mateus Tosta</span>, 
              tenho 26 anos e sou um desenvolvedor que acredita que boas soluções não nascem apenas de linhas de código — mas da 
              <span className="font-semibold text-green-700 dark:text-green-300"> escuta atenta</span>, do 
              <span className="font-semibold text-green-700 dark:text-green-300"> entendimento real dos problemas</span> e da 
              <span className="font-semibold text-green-700 dark:text-green-300"> capacidade de transformar ideias</span> em 
              ferramentas que funcionam de verdade.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Com habilidades em desenvolvimento web, automações e inteligência artificial, venho criando 
              <span className="font-semibold text-green-700 dark:text-green-300"> soluções</span> que 
              <span className="font-semibold text-green-700 dark:text-green-300"> simplificam rotinas</span>, 
              <span className="font-semibold text-green-700 dark:text-green-300"> otimizam tempo</span> e geram 
              <span className="font-semibold text-green-700 dark:text-green-300"> impacto direto</span> no dia a dia de 
              empresas e pessoas.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              <span className="font-bold text-green-700 dark:text-green-300">Meu trabalho tem um objetivo claro:</span> tornar a tecnologia uma aliada estratégica, 
              acessível e eficiente.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Gosto de construir <span className="font-semibold text-green-700 dark:text-green-300">sistemas sob medida</span>, 
              que resolvem, organizam e entregam valor. Se você busca alguém que una técnica, visão e 
              <span className="font-semibold text-green-700 dark:text-green-300"> compromisso com resultados reais</span>, estou pronto para 
              colaborar com seu projeto.
            </p>
          </motion.div>

          {/* Terminal animado à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative lg:pl-4"
          >
            {/* Terminal */}
            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 dark:border-gray-600 min-h-[400px] sm:min-h-[450px]">
              {/* Header do terminal */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-xs sm:text-sm text-gray-400 font-mono">
                  mateus@workflow:~$
                </div>
              </div>

              {/* Conteúdo do terminal */}
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
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-blue-400 dark:text-blue-300"
                  >
                    {workflowSteps[currentStep].result}
                  </motion.div>
                )}
              </div>

              {/* Indicador de progresso - Responsivo */}
              <div className="mt-4 sm:mt-6 flex gap-1 justify-center">
                {workflowSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? "bg-green-500 w-6 sm:w-8 md:w-12"
                        : "bg-gray-600 w-2 sm:w-3"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Linhas decorativas */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-r-2 border-green-300/30 dark:border-green-400/30 rounded-tr-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-l-2 border-emerald-300/30 dark:border-emerald-400/30 rounded-bl-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 