import { motion } from "framer-motion";
import { Cpu, Network, Sparkles } from "lucide-react";

export default function AISection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Cpu className="h-16 w-16 text-[#A19CFF]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-[#A19CFF] blur-xl opacity-20"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Artificial Intelligence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg sm:text-xl text-[#EAEAEA] opacity-80"
        >
          Pushing the boundaries of machine learning and neural networks
          to create systems that think beyond traditional constraints.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#A19CFF]/20 bg-black/20 backdrop-blur-sm"
          >
            <Network className="h-8 w-8 text-[#A19CFF] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Neural Networks</h3>
            <p className="text-[#EAEAEA] opacity-70">Advanced architectures mimicking human brain patterns</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#A19CFF]/20 bg-black/20 backdrop-blur-sm"
          >
            <Sparkles className="h-8 w-8 text-[#A19CFF] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-[#EAEAEA] opacity-70">Breakthrough algorithms pushing technological boundaries</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
