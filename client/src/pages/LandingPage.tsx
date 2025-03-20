import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTaglineVisible, setIsTaglineVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation for the main title
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Trigger the fade-in animation for the tagline with a delay
    setTimeout(() => {
      setIsTaglineVisible(true);
    }, 300);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden" 
         style={{
           background: 'linear-gradient(to bottom, rgba(234, 234, 234, 1) 0%, rgba(135, 168, 227, 1) 50%, rgba(208, 162, 168, 0.92) 100%)'
         }}>
      <div 
        className="absolute w-[180px] h-[180px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(116, 209, 234, 0.8) 30%, rgba(74, 163, 193, 0.3) 70%)',
          filter: 'blur(20px)',
          animation: 'glow 4s ease-in-out infinite',
          transform: 'translate(50%, -50%)',
          right: '47%',
          top: '50%',
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
      />
      <div className="text-center relative z-10">
        <h1 
          className={`text-[45px] font-bold transition-opacity ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            transitionDuration: '800ms', 
            fontFamily: '"Space Grotesk", sans-serif', 
            fontWeight: '700',
            background: 'linear-gradient(to right, #1C1F29 0%, #4AA3C1 50%, #1C1F29 100%)',
            WebkitBackgroundClip: 'text' as any,
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          thereisnobox.xyz
        </h1>

        <p 
          className={`mt-2 text-[20px] text-center transition-opacity ${
            isTaglineVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            transitionDuration: '800ms',
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: '500',
            background: 'linear-gradient(to right, rgba(28, 31, 41, 1) 0%, rgba(5, 5, 5, 0.76) 50%, rgba(174, 34, 53, 0.92) 100%)',
            WebkitBackgroundClip: 'text' as any,
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          the future of intelligence
        </p>
      </div>
    </div>
  );
}