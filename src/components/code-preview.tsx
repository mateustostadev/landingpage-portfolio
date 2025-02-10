import { motion } from "framer-motion";

const codeSnippet = `// AI Integration Example
const agent = new CrewAI({
  model: 'gpt-4',
  tools: [langchain, langflow],
});

await agent.run({
  task: 'analyze_data',
  input: data
});`;

export default function CodePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg bg-zinc-900 p-6 border border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden font-mono text-sm text-emerald-400 w-[300px]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
      </div>
      <pre className="overflow-x-auto">
        {codeSnippet.split("\n").map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {line}
          </motion.div>
        ))}
      </pre>
    </motion.div>
  );
}
