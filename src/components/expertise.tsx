import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { MouseEvent, useState } from "react";
import {
  Cloud,
  Smartphone,
  Settings,
  Server,
  Bot,
  ChevronDown,
  Layout,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const servicesData = {
    pt: [
      {
        icon: Layout,
        title: "Desenvolvimento de Landing Pages",
        description:
          "Landing pages otimizadas para conversão com design moderno e responsivo.",
        faq: [
          {
            question: "Quais elementos são importantes em uma landing page eficaz?",
            answer: "Uma landing page eficaz inclui um título claro, descrição concisa do valor, depoimentos, demonstração do produto e um call-to-action bem posicionado."
          },
          {
            question: "Quanto tempo leva para desenvolver uma landing page?",
            answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto, mas normalmente leva de 3 a 7 dias úteis após a aprovação do design e conteúdo."
          },
          {
            question: "Como você otimiza as landing pages para conversão?",
            answer: "Utilizo técnicas de UX/UI, testes A/B e análise de comportamento do usuário para otimizar elementos como layout, cores, botões e formulários."
          }
        ]
      },
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
    ],
    en: [
      {
        icon: Layout,
        title: "Landing Page Development",
        description:
          "Conversion-optimized landing pages with modern and responsive design.",
        faq: [
          {
            question: "What elements are important in an effective landing page?",
            answer: "An effective landing page includes a clear headline, concise value description, testimonials, product demonstration, and a well-positioned call-to-action."
          },
          {
            question: "How long does it take to develop a landing page?",
            answer: "Development time varies according to project complexity, but it usually takes 3 to 7 business days after design and content approval."
          },
          {
            question: "How do you optimize landing pages for conversion?",
            answer: "I use UX/UI techniques, A/B testing, and user behavior analysis to optimize elements such as layout, colors, buttons, and forms."
          }
        ]
      },
      {
        icon: Cloud,
        title: "SaaS Development",
        description:
          "Custom SaaS platforms to automate processes and scale operations.",
        faq: [
          {
            question: "How long does it take to develop a SaaS platform?",
            answer: "Development time varies according to project complexity and defined scope. After analyzing requirements, we provide a customized timeline."
          },
          {
            question: "What technologies do you use for SaaS development?",
            answer: "I work with modern technologies suitable for each specific project, choosing the best options according to needs and goals."
          },
          {
            question: "How is post-launch maintenance and updates handled?",
            answer: "I offer continuous support with security updates, performance improvements, and new features as needed, ensuring platform stability."
          }
        ]
      },
      {
        icon: Smartphone,
        title: "App Development",
        description:
          "Intuitive and powerful mobile applications for iOS and Android.",
        faq: [
          {
            question: "Do you develop apps for iOS and Android?",
            answer: "Yes, I develop native applications for both platforms, ensuring performance and native experience on each system."
          },
          {
            question: "What is the investment to develop an app?",
            answer: "The investment varies according to features, complexity, and project scope. After analyzing requirements, we provide a custom proposal."
          },
          {
            question: "How does the store publishing process work?",
            answer: "I assist throughout the publishing process, from preparing assets to submission to the Apple App Store and Google Play Store."
          }
        ]
      },
      {
        icon: Settings,
        title: "Infrastructure, Support & Maintenance",
        description:
          "Specialized technical support and scalable infrastructure solutions.",
        faq: [
          {
            question: "What infrastructure services do you offer?",
            answer: "I offer complete infrastructure solutions, including server configuration, monitoring, automated backup, scalability, and security."
          },
          {
            question: "How does technical support work?",
            answer: "I provide specialized support with incident resolution, preventive maintenance, and regular updates to ensure system stability."
          },
          {
            question: "Do you work with cloud computing?",
            answer: "Yes, I work with cloud solutions for scalable, secure, and optimized infrastructure, adapted to the needs of each project."
          }
        ]
      },
      {
        icon: Bot,
        title: "Automation and AI Development",
        description:
          "Intelligent systems that automate processes and generate valuable insights.",
        faq: [
          {
            question: "What kind of processes can be automated?",
            answer: "Repetitive processes such as report generation, email sending, data analysis, customer service, and system integration can be automated."
          },
          {
            question: "How can AI help my company?",
            answer: "AI can optimize decisions, personalize customer experiences, predict trends, automate service, and significantly increase productivity."
          },
          {
            question: "Are large volumes of data necessary to use AI?",
            answer: "Not necessarily. We can start with available data and scale according to results, always tailored to your company's needs and goals."
          }
        ]
      },
      {
        icon: Server,
        title: "Technical Consulting",
        description:
          "Specialized guidance for making the best technological decisions.",
        faq: [
          {
            question: "In which areas can I receive consulting?",
            answer: "I offer consulting in system architecture, technology choice, process optimization, information security, scalability, and digital transformation."
          },
          {
            question: "How does the consulting process work?",
            answer: "I conduct a detailed analysis of needs, define customized strategies, implement solutions, and monitor the results obtained."
          },
          {
            question: "Is consulting for companies of all sizes?",
            answer: "Yes, I adapt solutions for startups, small businesses, and large corporations, always considering the specific context and goals of each client."
          }
        ]
      },
    ]
  };

  const services = language === 'pt' ? servicesData.pt : servicesData.en;

  const ServiceCard = ({ service, index }: any) => {
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

  const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
    return (
      <div className="border-b border-gray-200 dark:border-border py-4">
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full text-left"
        >
          <span className="font-medium text-gray-800 dark:text-gray-200">{question}</span>
          <ChevronDown
            className={`h-5 w-5 text-green-600 dark:text-green-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
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

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setOpenFaqIndex(null);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setOpenFaqIndex(null);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
    setOpenFaqIndex(null);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      id="services"
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<Settings className="w-4 h-4" />} title={t('expertise.badge')} />
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
                      className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
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
