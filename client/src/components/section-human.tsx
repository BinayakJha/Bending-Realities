import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Heart, Users } from "lucide-react";
import { useRef } from "react";

export default function HumanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Users className="h-16 w-16 text-[#00FFFF]" />
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
              className="absolute inset-0 rounded-full bg-[#00FFFF] blur-xl opacity-20"
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
          Human Potential
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg sm:text-xl text-[#EAEAEA] opacity-80"
        >
          Unlocking the boundless capabilities of human consciousness,
          where creativity meets intuition in perfect harmony.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#00FFFF]/20 bg-black/20 backdrop-blur-sm"
          >
            <Brain className="h-8 w-8 text-[#00FFFF] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Intelligence</h3>
            <p className="text-[#EAEAEA] opacity-70">Natural cognitive abilities enhanced by boundless imagination</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-6 rounded-lg border border-[#00FFFF]/20 bg-black/20 backdrop-blur-sm"
          >
            <Heart className="h-8 w-8 text-[#00FFFF] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Emotion</h3>
            <p className="text-[#EAEAEA] opacity-70">Deep emotional understanding driving meaningful connections</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}