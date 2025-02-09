import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background relative overflow-hidden">
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Estou sempre interessado em novos projetos e desafios. Entre em
              contato para discutirmos como posso ajudar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:contato@mateustosta.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <Input placeholder="Seu nome" />
            </div>
            <div>
              <Input type="email" placeholder="Seu email" />
            </div>
            <div>
              <Textarea placeholder="Sua mensagem" className="min-h-[150px]" />
            </div>
            <Button className="w-full">Enviar Mensagem</Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
