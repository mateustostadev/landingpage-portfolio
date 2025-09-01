import { motion } from "framer-motion";
import { TrendingUp, Users, FolderOpen } from "lucide-react";

const indicators = [
  {
    icon: Users,
    value: "+10",
    label: "CLIENTES ATENDIDOS",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: FolderOpen,
    value: "+15",
    label: "PROJETOS ENTREGUES",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: TrendingUp,
    value: "3",
    label: "ANOS DE EXPERIÊNCIA",
    color: "text-teal-600 dark:text-teal-400",
  },
];

export function SuccessIndicators() {
  return (
    <div className="pt-8 bg-white dark:bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Transformando ideias em soluções digitais inovadoras para empresas que querem crescer.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                <indicator.icon className={`w-8 h-8 ${indicator.color}`} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                  {indicator.value}
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium tracking-wider">
                  {indicator.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}