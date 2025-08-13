import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
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
    title: "E-commerce Cantinho das Flores",
    description:
      "Sistema E-commerce para uma floricultura localizada em Salvador-BA, especializados na venda de flores e arranjos personalizados para diversas ocasiões.",
    image:
      "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Wordpress", "PHP", "MySQL", "Mercado Pago API"],
    link: "https://cantinhodasflores.com",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-24 bg-white dark:bg-background"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"
          >
            Projetos em Destaque
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
            className="text-muted-foreground"
          >
            Principais projetos desenvolvidos recentemente
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.5, 
                delay: index * 0.1 
              }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 border-gray-200/50 dark:border-border shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <div className="relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-green-800 dark:text-green-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-card text-green-800 dark:text-green-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full group shadow-sm hover:shadow-md transition-shadow border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-card"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Visualizar
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
  );
}
