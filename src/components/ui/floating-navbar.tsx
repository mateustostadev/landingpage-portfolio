import { motion } from "framer-motion";
import { Button } from "./button";

export function FloatingNavbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-green-500/20 shadow-lg shadow-green-500/10">
        <nav className="flex gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            Início
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Habilidades
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Experiência
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Projetos
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Contato
          </Button>
        </nav>
      </div>
    </motion.div>
  );
}
