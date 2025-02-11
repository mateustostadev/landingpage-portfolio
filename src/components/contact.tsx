import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageSquareIcon,
} from "lucide-react";
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
        <div className="mx-auto max-w-2xl text-center">
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
              <p className="text-muted-foreground text-lg mb-8">
                Estou sempre interessado em novos projetos e desafios. Entre em
                contato para discutirmos como posso ajudar.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5571996590332&text=Ol%C3%A1,%20Mateus!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site!",
                      "_blank",
                    )
                  }
                >
                  <MessageSquareIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Entre em contato
                </Button>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                Me encontre nas redes
              </h3>
              <div className="flex gap-4 justify-center">
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
      </div>
    </footer>
  );
}
