import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "API de Competições de Surfe",
    description:
      "API RESTful em Laravel para gerenciamento de competições de surfe, incluindo surfistas, baterias, ondas e sistema de pontuação.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&h=300&fit=crop",
    tech: ["Laravel", "MySQL", "RESTful API", "PHP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema de Disparo WhatsApp",
    description:
      "Plataforma automatizada para disparo de mensagens WhatsApp com verificação de números ativos e gestão de campanhas.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=300&fit=crop",
    tech: ["Node.js", "React", "MongoDB", "WhatsApp API"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground">
            Principais projetos desenvolvidos recentemente
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-green-500/20 shadow-lg shadow-green-500/5">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-green-500/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button variant="outline" className="flex-1 group" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Código
                    </a>
                  </Button>
                  <Button className="flex-1 group" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
