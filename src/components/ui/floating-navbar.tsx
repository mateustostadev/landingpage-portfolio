import { motion } from "framer-motion";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Habilidades", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function FloatingNavbar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/3 -translate-x-1/3 z-50 w-auto"
    >
      <div className="relative bg-background/50 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <nav className="flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
