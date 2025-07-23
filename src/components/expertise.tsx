import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { MouseEvent } from "react";
import {
  Palette,
  Brain,
  LineChart,
  Bot,
  Globe,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Transformo ideias em experiências digitais memoráveis através de landing pages impactantes e aplicações front-end intuitivas. Especializado em protótipos e MVPs que capturam a essência do seu negócio, garantindo interfaces que não só impressionam visualmente, mas também convertem visitantes em clientes.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Desenvolvo sistemas inteligentes que automatizam processos, aumentam a produtividade e geram insights valiosos. Da otimização de workflows à análise preditiva, transformo dados em vantagem competitiva para sua empresa.",
  },
  {
    icon: LineChart,
    title: "Análise de Dados",
    description:
      "Crio automações e visualizações que transformam dados brutos em decisões estratégicas. Especializado em limpeza, análise e visualização de dados que impulsionam resultados reais.",
  },
  {
    icon: Bot,
    title: "Agentes Verticais",
    description:
      "Revolucione seus processos com agentes de IA especializados. Assistentes inteligentes focados em setores específicos, que automatizam tarefas complexas, tomam decisões baseadas em dados e otimizam operações.  Ideal para empresas que buscam eficiência e inovação em nichos específicos.",
  },
  {
    icon: Globe,
    title: "Sistemas Web",
    description:
      "Do e-commerce ao ERP, desenvolvo soluções personalizadas que atendem às necessidades específicas do seu negócio, garantindo performance, segurança e uma experiência excepcional para seus usuários.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    description:
      "Eleve o atendimento ao cliente com chatbots inteligentes e personalizados. Desenvolvo assistentes virtuais que combinam processamento de linguagem natural com regras de negócio específicas, oferecendo suporte 24/7, qualificação de leads e automação de processos de forma natural e eficiente.",
  },
];

const ExpertiseCard = ({ service, index }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseMove={handleMouseMove}
    >
      <div className="relative rounded-xl border border-green-200/30 dark:border-green-800/30 bg-background/50 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden h-full">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        <div className="relative">
          <service.icon className="h-8 w-8 mb-4 text-green-600 dark:text-green-500" />
          <h3 className="font-semibold text-xl mb-3 text-green-800 dark:text-green-300">
            {service.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Expertise() {
  return (
    <div
      id="expertise"
      className="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 dark:from-green-900/20 dark:to-background relative overflow-hidden"
    >
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
            Áreas de Atuação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluções especializadas para impulsionar seu negócio com tecnologia
            de ponta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ExpertiseCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
