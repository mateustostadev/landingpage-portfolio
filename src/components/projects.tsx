import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useAnimationFrame } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SectionBadge } from "@/components/ui/section-badge";
import { FolderOpen } from "lucide-react";
import React, { useRef } from "react";

const projects = [
  {
    title: "Landing Page - Psicóloga Josiane Cordeiro",
    description:
      "Landing page profissional para a psicóloga Josiane Cordeiro, com informações sobre seus serviços, especialidades e contato.",
    image: "/assets/projeto-josiane.png",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Shadcn/ui"],
    link: "https://josianecordeiro.com.br",
  },
  {
    title: "API de Competições de Surfe",
    description:
      "API RESTful em Laravel para gerenciamento de competições de surfe, incluindo surfistas, baterias, ondas e sistema de pontuação.",
    image:
      "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Laravel", "MySQL", "RESTful API", "PHP"],
    link: "https://github.com/mateustostadev/surf-api",
  },
  {
    title: "Sistema de Disparo WhatsApp",
    description:
      "Plataforma automatizada para disparo de mensagens WhatsApp com verificação de números ativos e gestão de instâncias.",
    image:
      "https://plus.unsplash.com/premium_photo-1683936163516-ec4c53227e26?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Node.js", "PHP", "MySQL", "WhatsApp API"],
    link: "https://github.com/mateustostadev/verificador",
  },
  {
    title: "E-commerce - Cantinho das Flores",
    description:
      "Sistema E-commerce para uma floricultura localizada em Salvador-BA, especializados na venda de flores e arranjos personalizados para diversas ocasiões.",
    image: "/assets/projeto-cantinho.png",
    tech: ["Wordpress", "PHP", "MySQL", "Mercado Pago API"],
    link: "https://cantinhodasflores.com",
  },
  {
    title: "Landing Page - ChamaAI da Oncode",
    description:
      "Landing page para o produto ChamaAI da Oncode, a plataforma exclusiva da Oncode que transforma a maneira como sua empresa lida com o atendimento, utilizando as mais avançadas tecnologias de Inteligência Artificial.",
    image: "/assets/imagem-chama.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://chamaai.online",
  },
];

// Duplicar a lista para efeito de loop infinito
const duplicatedProjects = [...projects, ...projects];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= (delta / 1000) * 30; // velocidade em px/s - moving items to the left
      const containerWidth = containerRef.current.scrollWidth / 2; // Width of one complete set of items
      if (Math.abs(x.current) >= containerWidth) {
        x.current = 0; // Reset to start position to maintain smooth loop
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<FolderOpen className="w-4 h-4" />} title="Projetos em Destaque" />
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mt-4"
        >
          Conheça alguns dos projetos em que atuei
        </motion.p>
        
        {/* Container do carrossel com overflow hidden */}
        <div className="relative w-full overflow-hidden mt-16">
          {/* Efeito de fade nas extremidades do carrossel */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent/0 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent/0 z-10 pointer-events-none"></div>
          
          <div
            ref={containerRef}
            className="flex gap-6 md:gap-8 items-start w-max select-none py-4"
            style={{ willChange: "transform" }}
          >
            {duplicatedProjects.map((project, i) => (
              <motion.div
                key={`${project.title}-${i}`}
                className="flex-shrink-0 w-64 sm:w-72 bg-transparent dark:bg-transparent rounded-xl shadow-none border-0 transition-all duration-300 p-1.5"
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation(); // Prevent hover events from bubbling up to container
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation(); // Prevent hover events from bubbling up to container
                }}
              >
                <Card className="overflow-hidden group hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-300 border-gray-200/50 dark:border-border shadow-[0_3px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_3px_12px_rgba(0,0,0,0.2)] h-full flex flex-col rounded-lg min-h-[440px]">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image.includes('imagem-chama') ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-36 object-cover"
                          loading="lazy"
                          width={1901}
                          height={886}
                        />
                      ) : (
                        <OptimizedImage
                          src={project.image}
                          alt={project.title}
                          className="w-full h-36 object-cover"
                          loading="lazy"
                          width={project.image.includes('imagem-chama') ? 1901 : 480}
                          height={project.image.includes('imagem-chama') ? 886 : 240}
                        />
                      )}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100 flex-grow">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 dark:bg-card text-gray-700 dark:text-gray-300 px-2 py-0.5 text-xs"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 mt-auto">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full group shadow-sm hover:shadow transition-all duration-300 border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-card rounded-lg py-3"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3.5 w-3.5 group-hover:scale-110 transition-transform text-gray-600 dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300 text-xs">Visualizar Projeto</span>
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
