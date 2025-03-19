import { motion } from "framer-motion";
import { Users, Cpu, Wand2 } from "lucide-react";

export default function FinalSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 via-[#A19CFF]/20 to-[#EAEAEA]/20 opacity-60" />

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-20 mb-8">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Users className="h-16 w-16 text-[#00FFFF]" />
              <p className="text-center mt-2 text-[#00FFFF]">Human</p>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Cpu className="h-16 w-16 text-[#A19CFF]" />
              <p className="text-center mt-2 text-[#A19CFF]">AI</p>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Wand2 className="h-16 w-16 text-[#EAEAEA]" />
              <p className="text-center mt-2 text-[#EAEAEA]">Creativity</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#A19CFF] to-[#EAEAEA] text-center"
            >
              thereisnobox.xyz
            </motion.h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-subscription-modal'))}
            className="group mt-12 relative overflow-hidden rounded-full border border-[#00FFFF] bg-transparent px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-[#00FFFF] transition-all hover:bg-[#00FFFF]/10"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-[#00FFFF] blur-2xl opacity-20" />
            </div>
            <span className="relative z-10">Enter the Future</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}