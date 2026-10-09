import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const About: React.FC = () => {
  const { stats, personal } = portfolioContent;

  return (
    <section id="about" className="py-24 relative bg-[var(--bg-space)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7C5CFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D]">
            <Terminal size={14} />
            <span>// 01. background &amp; ethos</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-heading)] tracking-tight">
            ENGINEERING FOR <span className="text-gradient-violet-cyan">SPEED &amp; PRECISION</span>
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Bio Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C6FF3D]/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full font-mono text-[11px] bg-[var(--chip-bg)] border border-[var(--border-main)] text-[var(--text-sub)]">
                MCA SCHOLAR &bull; CREATIVE BUILDER
              </span>

              <h3 className="mt-6 font-display font-bold text-2xl sm:text-3xl text-[var(--text-heading)] leading-snug">
                Bridging low-level socket protocol efficiency with fluid, modern cross-platform design.
              </h3>

              <p className="mt-4 text-[var(--text-main)] text-base sm:text-lg leading-relaxed font-light">
                {personal.bio}
              </p>

              <div className="mt-8 pt-6 border-t border-[var(--border-main)] flex flex-wrap gap-4 text-xs font-mono text-[var(--text-sub)]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
                  <span>Cross-Platform (Flutter / Android / Windows)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  <span>Socket Networking &amp; LAN Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
                  <span>Full-Stack Application Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Side Bento Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 p-8 rounded-3xl glass-panel flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 flex items-center justify-center text-[#7C5CFF] mb-6">
                <Award size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[var(--text-heading)]">Academic Excellence</h4>
              <p className="mt-2 text-sm text-[var(--text-sub)] font-light">
                Consistently ranked at the top of my cohort with an outstanding <strong>9.14 CGPA</strong> in MCA and <strong>8.16 CGPA</strong> in BCCA.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border-main)] font-mono text-xs text-[var(--text-sub)] flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-[var(--text-heading)] font-medium">Nagpur, Maharashtra, IN</span>
              </div>
              <div className="flex justify-between">
                <span>Current Degree:</span>
                <span className="text-[#C6FF3D] font-bold">MCA (2025–2027)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Stat Counters Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-heading)] tracking-tight flex items-baseline gap-1">
                <span className={idx === 0 ? 'text-[#C6FF3D]' : idx === 1 ? 'text-[#22D3EE]' : idx === 2 ? 'text-[#7C5CFF]' : 'text-[var(--text-heading)]'}>
                  {stat.value}
                </span>
                {stat.suffix && <span className="text-xl font-mono text-[var(--text-sub)]">{stat.suffix}</span>}
              </div>
              <span className="mt-2 font-mono text-xs text-[var(--text-sub)] uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
