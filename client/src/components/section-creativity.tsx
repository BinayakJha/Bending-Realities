import { motion } from "framer-motion";
import { Lightbulb, Shapes, Wand2 } from "lucide-react";

export default function CreativitySection() {
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
            <Wand2 className="h-16 w-16 text-[#EAEAEA]" />
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
              className="absolute inset-0 rounded-full bg-[#EAEAEA] blur-xl opacity-20"
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
          Unlimited Creativity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg sm:text-xl text-[#EAEAEA] opacity-80"
        >
          Breaking free from conventional thinking to explore
          new dimensions of possibility and innovation.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#EAEAEA]/20 bg-black/20 backdrop-blur-sm"
          >
            <Lightbulb className="h-8 w-8 text-[#EAEAEA] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-[#EAEAEA] opacity-70">Transforming ideas into groundbreaking solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#EAEAEA]/20 bg-black/20 backdrop-blur-sm"
          >
            <Shapes className="h-8 w-8 text-[#EAEAEA] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
            <p className="text-[#EAEAEA] opacity-70">Crafting experiences that challenge perception</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
