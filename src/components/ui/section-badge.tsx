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
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-6 shadow-[0_0_5px_rgba(34,197,94,0.2)] dark:shadow-[0_0_8px_rgba(74,222,128,0.3)]"
    >
      <div className="p-1.5 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_4px_rgba(34,197,94,0.3)] dark:shadow-[0_0_6px_rgba(74,222,128,0.4)]">
        {icon}
      </div>
      <span className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider [text-shadow:_0_0_4px_rgba(34,197,94,0.2)] dark:[text-shadow:_0_0_6px_rgba(74,222,128,0.3)]">
        {title}
      </span>
    </motion.div>
  );
}