import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { MouseEvent, useState } from "react";
import {
  Cloud,
  Smartphone,
  Settings,
  Server,
  Bot,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Desenvolvimento de SaaS",
    description:
      "Plataformas SaaS sob medida para automatizar processos e escalar operações.",
    faq: [
      {
        question: "Quanto tempo leva para desenvolver uma plataforma SaaS?",
        answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto e escopo definido. Após análise das necessidades, fornecemos um cronograma personalizado."
      },
      {
        question: "Quais tecnologias você utiliza para desenvolvimento SaaS?",
        answer: "Trabalho com tecnologias modernas e adequadas para cada projeto específico, escolhendo as melhores opções de acordo com as necessidades e objetivos."
      },
      {
        question: "Como é feita a manutenção e atualizações pós-lançamento?",
        answer: "Ofereço suporte contínuo com atualizações de segurança, melhorias de performance e novas funcionalidades conforme necessário, garantindo a estabilidade da plataforma."
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description:
      "Aplicativos móveis intuitivos e poderosos para iOS e Android.",
    faq: [
      {
        question: "Vocês desenvolvem apps para iOS e Android?",
        answer: "Sim, desenvolvo aplicativos nativos para ambas as plataformas, garantindo performance e experiência nativa em cada sistema."
      },
      {
        question: "Qual o investimento para desenvolver um app?",
        answer: "O investimento varia conforme as funcionalidades, complexidade e escopo do projeto. Após análise das necessidades, fornecemos uma proposta personalizada."
      },
      {
        question: "Como funciona o processo de publicação nas lojas?",
        answer: "Auxilio em todo o processo de publicação, desde a preparação dos assets até a submissão nas lojas Apple Store e Google Play."
      }
    ]
  },
  {
    icon: Settings,
    title: "Infraestrutura, Suporte e Manutenção",
    description:
      "Suporte técnico especializado e soluções de infraestrutura escaláveis.",
    faq: [
      {
        question: "Quais serviços de infraestrutura você oferece?",
        answer: "Ofereço soluções completas de infraestrutura, incluindo configuração de servidores, monitoramento, backup automatizado, escalabilidade e segurança."
      },
      {
        question: "Como funciona o suporte técnico?",
        answer: "Disponibilizo suporte especializado com resolução de incidentes, manutenção preventiva e atualizações regulares para garantir a estabilidade dos sistemas."
      },
      {
        question: "Trabalham com cloud computing?",
        answer: "Sim, trabalho com soluções em nuvem para infraestrutura escalável, segura e otimizada, adaptada às necessidades de cada projeto."
      }
    ]
  },
  {
    icon: Bot,
    title: "Desenvolvimento de Automações e IA",
    description:
      "Sistemas inteligentes que automatizam processos e geram insights valiosos.",
    faq: [
      {
        question: "Que tipo de processos podem ser automatizados?",
        answer: "Processos repetitivos como geração de relatórios, envio de e-mails, análise de dados, atendimento ao cliente e integração entre sistemas podem ser automatizados."
      },
      {
        question: "Como a IA pode ajudar minha empresa?",
        answer: "A IA pode otimizar decisões, personalizar experiências do cliente, prever tendências, automatizar atendimento e aumentar a produtividade de forma significativa."
      },
      {
        question: "É necessário ter grandes volumes de dados para usar IA?",
        answer: "Não necessariamente. Podemos começar com os dados disponíveis e escalar conforme os resultados, sempre adaptado às necessidades e objetivos da sua empresa."
      }
    ]
  },
  {
    icon: Server,
    title: "Consultoria Técnica",
    description:
      "Orientação especializada para as melhores decisões tecnológicas.",
    faq: [
      {
        question: "Em quais áreas posso receber consultoria?",
        answer: "Ofereço consultoria em arquitetura de sistemas, escolha de tecnologias, otimização de processos, segurança da informação, escalabilidade e transformação digital."
      },
      {
        question: "Como funciona o processo de consultoria?",
        answer: "Realizo análise detalhada das necessidades, definição de estratégias personalizadas, implementação de soluções e acompanhamento dos resultados obtidos."
      },
      {
        question: "A consultoria é para empresas de todos os portes?",
        answer: "Sim, adapto as soluções para startups, pequenas empresas e grandes corporações, sempre considerando o contexto e objetivos específicos de cada cliente."
      }
    ]
  },
];

const ServiceCard = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.15), transparent 80%)`;

  return (
    <div className="group relative h-full">
      <div 
        className="relative rounded-xl border border-gray-200/50 dark:border-border bg-background/50 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        <div className="relative">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 w-fit mb-4">
            <service.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200">
            {service.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-border py-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-gray-800 dark:text-gray-200">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-green-600 dark:text-green-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-muted-foreground">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setOpenFaqIndex(null);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setOpenFaqIndex(null);
  };

  const goToService = (index) => {
    setCurrentIndex(index);
    setOpenFaqIndex(null);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      id="services"
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20 
            }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"
          >
            Serviços
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20, 
              delay: 0.1 
            }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Soluções completas para transformar sua ideia em realidade digital
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cards de serviços à esquerda */}
          <div className="w-full lg:w-2/5">
            <div className="relative h-full flex flex-col">
              <div className="relative flex-grow rounded-xl overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ServiceCard 
                    service={services[currentIndex]} 
                    index={0} 
                  />
                </motion.div>
              </div>

              {/* Botões de navegação */}
              <div className="flex justify-center mt-6 gap-4">
                <button
                  onClick={prevService}
                  className="p-2 rounded-full bg-gray-100 dark:bg-card border border-gray-200 dark:border-border hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Serviço anterior"
                >
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Indicadores de posição */}
                <div className="flex items-center gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToService(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-green-600 dark:bg-green-400 w-6' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Ir para o serviço ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextService}
                  className="p-2 rounded-full bg-gray-100 dark:bg-card border border-gray-200 dark:border-border hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Próximo serviço"
                >
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ à direita */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                delay: 0.2 
              }}
              className="bg-white dark:bg-card rounded-xl border border-gray-200/50 dark:border-border p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="space-y-2">
                  {services[currentIndex].faq.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaqIndex === index}
                      onClick={() => toggleFaq(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
