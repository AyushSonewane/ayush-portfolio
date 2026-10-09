import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-gradient-to-r from-[#C6FF3D] via-[#22D3EE] to-[#7C5CFF] shadow-[0_0_12px_rgba(198,255,61,0.8)]"
      style={{ scaleX }}
    />
  );
};
