import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export const EasterEgg: React.FC = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'k' || e.key === 'K') {
        // Trigger high energy confetti burst in accent colors: Lime, Violet, Cyan
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#C6FF3D', '#7C5CFF', '#22D3EE'],
          disableForReducedMotion: true,
        });

        setShowHint(true);
        setTimeout(() => setShowHint(false), 2400);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {showHint && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-xl bg-[#12121A] border border-[#C6FF3D]/50 text-white font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(198,255,61,0.3)] animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
          <span>⚡ Kinetic Burst Activated! (Key [K])</span>
        </div>
      )}
    </>
  );
};
