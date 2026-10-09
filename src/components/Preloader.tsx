import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast kinetic counter 0 to 100
    const duration = 1400; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(100, Math.round((step / steps) * 100));
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 650);
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0A0F] text-white select-none overflow-hidden"
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle background ambient mesh */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7C5CFF]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram drawing in */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center font-display font-black text-2xl tracking-tighter text-[#C6FF3D] shadow-[0_0_20px_rgba(198,255,61,0.25)]">
                AS
              </div>
              <div className="text-left font-mono text-xs text-slate-400">
                <span className="text-[#C6FF3D] font-semibold">// sys.init</span>
                <div className="text-[10px] text-slate-500">ayush_sonewane.dev</div>
              </div>
            </motion.div>

            {/* Kinetic Progress Number */}
            <div className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">
              {count}
              <span className="text-[#C6FF3D] text-4xl sm:text-5xl font-mono ml-1">%</span>
            </div>

            {/* Kinetic Progress Bar */}
            <div className="w-56 sm:w-72 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C6FF3D] via-[#22D3EE] to-[#7C5CFF]"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Monospace telemetry */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              className="mt-4 font-mono text-xs text-slate-400 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
              <span>ALLOCATING HIGH-VELOCITY THREADS</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
