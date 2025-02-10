import { motion, AnimatePresence } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "SEBRAE",
    role: "Suporte e Infraestrutura de TI",
    type: "Estagiário",
    period: "05/2024 – Atual",
    activities: [
      "Desenvolvi consultas SQL para uso em relatórios gerenciais",
      "Criei e implementei scripts de automação",
      "Integrei ferramentas de IA em processos internos",
      "Automatizei processos usando modelos de IA",
      "Prestei suporte técnico (N1 e N2)",
      "Gerenciei relatórios via TOTVS SmartView e RM Reports",
      "Migrei relatórios Delphi para .NET",
    ],
  },
  {
    company: "LF Promotora",
    role: "Analista de Dados",
    type: "Integral",
    period: "04/2024 – 06/2024",
    activities: [
      "Realizei higienização e tratamento de leads",
      "Administrei bancos de dados",
      "Desenvolvi fluxos automatizados para WhatsApp",
      "Criei sistema disparador de mensagens",
      "Implementei soluções ETL",
    ],
  },
  {
    company: "LF Promotora",
    role: "Desenvolvedor FullStack",
    type: "Estagiário",
    period: "06/2023 – 04/2024",
    activities: [
      "Gerenciei chatbots e discadoras",
      "Desenvolvi sistema web PHP com MySQL",
      "Integrei sistema ao banco digital Master",
      "Desenvolvi sistema de ponto eletrônico",
      "Criei manager de disparo de mensagens WhatsApp",
    ],
  },
  {
    company: "R2T Telecomunicações",
    role: "Assistente Administrativo de TI",
    type: "Aprendiz",
    period: "05/2019 – 10/2020",
    activities: [
      "Realizei manutenção de hardware",
      "Prestei suporte administrativo",
      "Organizei documentação",
      "Utilizei Power BI para análise de dados",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-green-50 dark:from-background dark:to-green-900/10">
      <GradientBlur />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
            Experiência Profissional
          </h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-300/30 via-green-300/50 to-green-300/30 dark:from-green-600/30 dark:via-green-600/50 dark:to-green-600/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-600 dark:bg-green-400 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] z-10" />
                  <div className="absolute w-4 h-4 rounded-full bg-green-400/20 dark:bg-green-400/20 animate-pulse" />
                </div>

                {/* Card */}
                <Card
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className={`w-full md:w-[calc(45%-2rem)] p-4 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer border-green-200/50 dark:border-green-800/50 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <h3 className="font-semibold text-base text-green-800 dark:text-green-300">
                          {exp.company}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-green-600/80 dark:text-green-400/80 text-xs">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Activities with smooth transition */}
                    <AnimatePresence initial={false}>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                            {exp.activities.map((activity, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className="list-disc list-inside"
                              >
                                {activity}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
