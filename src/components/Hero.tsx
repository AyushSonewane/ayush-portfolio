import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, Radio } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioContent.personal.roles;

  // Cycle roles every 2.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[var(--bg-space)] transition-colors duration-300"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7C5CFF]/15 via-[#22D3EE]/10 to-[#C6FF3D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#7C5CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C6FF3D]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[var(--noise-opacity)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Terminal Micro-Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[var(--border-main)] bg-[var(--chip-bg)] backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
          <span className="font-mono text-xs text-[var(--text-sub)]">
            // creative_coder &bull; nagpur, in
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#7C5CFF]/15 text-[#7C5CFF] font-mono font-medium">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        {/* Oversized Kinetic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-[var(--text-heading)]"
        >
          AYUSH <br />
          <span className="text-gradient-lime">SONEWANE</span>
        </motion.h1>

        {/* Dynamic Rotating Role Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex items-center gap-3 font-mono text-lg sm:text-2xl md:text-3xl text-[var(--text-sub)]"
        >
          <span className="text-[#22D3EE] font-bold">&gt;</span>
          <div className="h-10 sm:h-12 overflow-hidden relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="font-semibold text-[var(--text-heading)] drop-shadow-sm flex items-center gap-2"
              >
                {roles[roleIndex]}
                <span className="inline-block w-2 sm:w-2.5 h-6 bg-[#C6FF3D] animate-pulse" />
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 max-w-2xl font-sans text-base sm:text-xl text-[var(--text-main)] leading-relaxed font-light"
        >
          {portfolioContent.personal.tagline} Focused on socket networking, Flutter multi-platform performance, and clean reactive architectures.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary View Projects */}
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-2xl bg-[#C6FF3D] text-[#0A0A0F] font-mono font-bold text-sm flex items-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(198,255,61,0.3)] hover:shadow-[0_0_35px_rgba(198,255,61,0.5)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform duration-200"
            />
          </a>

          {/* Secondary Resume */}
          <a
            href={portfolioContent.personal.resumeUrl}
            download="Ayush_Sonewane_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl border border-[var(--border-main)] bg-[var(--chip-bg)] hover:bg-white/[0.1] text-[var(--text-heading)] font-mono text-sm flex items-center gap-2 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <FileText size={16} className="text-[#22D3EE]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Live Pill: LocalShare is live on the Microsoft Store */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <a
            href="#localshare"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C6FF3D]/40 bg-[#C6FF3D]/[0.08] hover:bg-[#C6FF3D]/[0.16] hover:border-[#C6FF3D]/70 transition-all duration-300 text-xs font-mono text-[var(--text-main)] shadow-[0_0_20px_rgba(198,255,61,0.1)] hover:shadow-[0_0_25px_rgba(198,255,61,0.25)]"
          >
            <Radio size={14} className="text-[#C6FF3D] animate-pulse" />
            <span className="font-semibold text-[var(--text-heading)]">LocalShare is live on the Microsoft Store</span>
            <span className="text-[#C6FF3D] group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-sub)] font-mono text-[10px]"
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-3 rounded-full bg-[#C6FF3D]"
        />
      </motion.div>
    </section>
  );
};
