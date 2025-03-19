import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function NeuralNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]);

  useEffect(() => {
    if (!svgRef.current) return;

    // Create neural network nodes
    const nodes = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      scale: 1,
    }));

    // Animate nodes
    nodes.forEach((node, i) => {
      // Position animation
      gsap.to(node, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      // Scale animation
      gsap.to(node, {
        scale: Math.random() * 0.5 + 1.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Update SVG
    const animate = () => {
      if (!svgRef.current) return;

      const paths: string[] = [];
      const currentTime = Date.now() * 0.001; // For oscillating opacity

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (distance < 150) {
            // Calculate dynamic opacity based on distance and time
            const baseOpacity = 0.2;
            const oscillation = Math.sin(currentTime + distance * 0.01) * 0.1;
            const opacity = Math.max(0, baseOpacity + oscillation);

            paths.push(`<path d="M${nodes[i].x},${nodes[i].y} L${nodes[j].x},${nodes[j].y}" stroke="#A19CFF" stroke-width="0.5" opacity="${opacity}" />`);
          }
        }
      }

      svgRef.current.innerHTML = `
        ${paths.join('')}
        ${nodes.map((node) => `
          <circle 
            cx="${node.x}" 
            cy="${node.y}" 
            r="${node.radius * node.scale}" 
            fill="#00FFFF" 
            opacity="${0.3 + Math.sin(currentTime * 2) * 0.2}"
          />
        `).join('')}
      `;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ scale, opacity }}
      className="absolute inset-0"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full opacity-30"
        style={{ filter: 'blur(1px)' }}
      />
    </motion.div>
  );
}