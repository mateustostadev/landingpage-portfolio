import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBadgeProps {
  icon: ReactNode;
  title: string;
}

export function SectionBadge({ icon, title }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-6"
    >
      <div className="p-1.5 rounded-full bg-green-500 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider">
        {title}
      </span>
    </motion.div>
  );
}