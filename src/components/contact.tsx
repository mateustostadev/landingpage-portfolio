import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageSquareIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/mateustostadev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mateus-tosta-dev/",
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
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<Send className="w-4 h-4" />} title="Vamos Conversar?" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              duration: 0.5 
            }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-muted-foreground text-lg mb-8">
                Estou sempre interessado em novos projetos e desafios. Entre em
                contato para discutirmos como posso ajudar.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20,
                  duration: 0.5, 
                  delay: 0.2 
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  <svg 
                    className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Button>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
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
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20,
                      delay: index * 0.1 
                    }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1 
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="group"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="relative bg-white dark:bg-card hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-border shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform group-hover:scale-110" />
                    </Button>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              duration: 0.5, 
              delay: 0.4 
            }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-border text-center text-sm text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} Mateus Tosta. Todos os direitos
            reservados.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
