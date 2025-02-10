import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/mateustostadev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mateus-tosta-335908178/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/mateusdev__",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:mateusbrcase@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background relative overflow-hidden"
    >
      <GradientBlur />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
                Vamos Conversar?
              </h2>
              <p className="text-muted-foreground text-lg">
                Estou sempre interessado em novos projetos e desafios. Entre em
                contato para discutirmos como posso ajudar.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                Me encontre nas redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="relative bg-background hover:bg-green-50 dark:hover:bg-green-900/20 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5 text-green-600 dark:text-green-400 transition-transform group-hover:scale-110" />
                    </Button>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
            action={`mailto:mateusbrcase@gmail.com`}
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Seu nome"
                required
                className="bg-background shadow-sm hover:shadow-md transition-shadow border-green-200 dark:border-green-800 focus-visible:ring-green-500"
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu email"
                required
                className="bg-background shadow-sm hover:shadow-md transition-shadow border-green-200 dark:border-green-800 focus-visible:ring-green-500"
              />
            </div>
            <Input
              name="subject"
              placeholder="Assunto"
              required
              className="bg-background shadow-sm hover:shadow-md transition-shadow border-green-200 dark:border-green-800 focus-visible:ring-green-500"
            />
            <Textarea
              name="message"
              placeholder="Sua mensagem"
              required
              className="min-h-[150px] bg-background shadow-sm hover:shadow-md transition-shadow border-green-200 dark:border-green-800 focus-visible:ring-green-500"
            />
            <Button
              type="submit"
              className="w-full group shadow-lg hover:shadow-xl transition-all duration-300 bg-green-600 hover:bg-green-700"
            >
              Enviar Mensagem
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-green-200 dark:border-green-800 text-center text-sm text-green-600/80 dark:text-green-400/80"
        >
          © {new Date().getFullYear()} Mateus Tosta. Todos os direitos
          reservados.
        </motion.div>
      </div>
    </footer>
  );
}
