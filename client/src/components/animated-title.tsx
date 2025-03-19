import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedTitle() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Pulsing background rings */}
      <div className="relative">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            className="absolute left-1/2 top-1/2 h-24 sm:h-32 w-24 sm:w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFFF] blur-3xl"
          />
        ))}
      </div>

      {/* Title text with enhanced hover effect */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative text-center font-sans text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white"
        style={{
          textShadow: isHovered
            ? "0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4), 0 0 90px rgba(0, 255, 255, 0.2)"
            : "0 0 20px rgba(0, 255, 255, 0.3)",
          transition: "text-shadow 0.5s ease",
        }}
      >
        <motion.span
          animate={isHovered ? {
            color: ["#ffffff", "#00FFFF", "#ffffff"],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          thereisnobox.xyz
        </motion.span>
      </motion.h1>
    </div>
  );
}