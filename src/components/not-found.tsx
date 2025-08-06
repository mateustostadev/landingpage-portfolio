import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-background relative flex items-center justify-center p-4">
      <GradientBlur />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-2">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Voltar para o início
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
