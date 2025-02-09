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
      className="relative rounded-lg bg-zinc-900 p-4 border border-green-500/20 shadow-lg shadow-green-500/10 overflow-hidden font-mono text-sm text-green-400"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
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
