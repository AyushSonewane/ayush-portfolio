import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for trailing circle
  const springX = useSpring(0, { damping: 28, stiffness: 220, mass: 0.5 });
  const springY = useSpring(0, { damping: 28, stiffness: 220, mass: 0.5 });

  // Faster spring for center dot
  const dotX = useSpring(0, { damping: 35, stiffness: 400 });
  const dotY = useSpring(0, { damping: 35, stiffness: 400 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, springX, springY, dotX, dotY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#C6FF3D] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 56 : 28,
          height: isPointer ? 56 : 28,
          backgroundColor: isPointer ? 'rgba(198, 255, 61, 0.15)' : 'rgba(198, 255, 61, 0.03)',
          borderColor: isPointer ? '#C6FF3D' : 'rgba(198, 255, 61, 0.6)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />

      {/* Snappy Inner Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#C6FF3D] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
