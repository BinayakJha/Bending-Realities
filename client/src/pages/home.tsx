import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/particles-background";
import NeuralNetwork from "@/components/neural-network";
import AnimatedTitle from "@/components/animated-title";
import SubscriptionModal from "@/components/subscription-modal";
import HumanSection from "@/components/section-human";
import AISection from "@/components/section-ai";
import CreativitySection from "@/components/section-creativity";
import FinalSection from "@/components/section-final";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden bg-black">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#000033] to-[#4B0082] opacity-90" />
      <div className="fixed inset-0">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>

      {/* Scrolling Content */}
      <div className="relative snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start py-20">
          <div className="text-center">
            <AnimatedTitle />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-center text-base sm:text-lg md:text-xl font-light tracking-wider text-[#EAEAEA] opacity-80"
            >
              the future of intelligence
            </motion.p>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-[#00FFFF] text-sm">Scroll to explore</p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-5 h-8 border-2 border-[#00FFFF] rounded-full flex items-start justify-center p-1"
                >
                  <div className="w-1 h-2 bg-[#00FFFF] rounded-full"/>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections with Snap Points */}
        <div className="snap-start">
          <HumanSection />
        </div>
        <div className="snap-start">
          <AISection />
        </div>
        <div className="snap-start">
          <CreativitySection />
        </div>
        <div className="snap-start">
          <FinalSection />
        </div>
      </div>

      {/* Subscription Modal */}
      <SubscriptionModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}