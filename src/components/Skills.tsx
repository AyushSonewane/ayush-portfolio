import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Database, Wrench, Sparkles } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Skills: React.FC = () => {
  const { skillsGrid, marqueeTech } = portfolioContent;

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code size={18} className="text-[#C6FF3D]" />,
    'Frameworks & UI': <Cpu size={18} className="text-[#7C5CFF]" />,
    Databases: <Database size={18} className="text-[#22D3EE]" />,
    'Developer Tools': <Wrench size={18} className="text-[#C6FF3D]" />,
  };

  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-space)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7C5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D]">
            <Terminal size={14} />
            <span>// 03. technical_arsenal</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-heading)] tracking-tight">
            SKILLS &amp; <span className="text-gradient-lime">COMPETENCIES</span>
          </h2>
          <p className="font-mono text-xs text-[var(--text-sub)] max-w-lg mt-1">
            Engineered with modern toolchains. Focused on cross-platform development with Flutter &amp; React.
          </p>
        </div>

        {/* 1. Infinite Velocity Marquee */}
        <div className="relative w-full overflow-hidden py-4 mb-14 border-y border-[var(--border-main)] bg-[var(--chip-bg)]">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-space)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-space)] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-[var(--chip-bg)] border border-[var(--border-main)] font-mono text-xs sm:text-sm text-[var(--text-main)] flex items-center gap-2 whitespace-nowrap hover:border-[#C6FF3D]/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
                <span>{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. Grouped Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsGrid.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--chip-bg)] border border-[var(--border-main)] flex items-center justify-center">
                    {categoryIcons[cat.name] || <Code size={18} className="text-[#C6FF3D]" />}
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-widest">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[var(--text-heading)] mb-4">{cat.name}</h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all duration-200 ${
                        skill.isPrimary
                          ? 'bg-[#C6FF3D]/15 border border-[#C6FF3D]/50 text-[#C6FF3D] font-bold shadow-[0_0_12px_rgba(198,255,61,0.15)]'
                          : 'bg-[var(--chip-bg)] border border-[var(--border-main)] text-[var(--text-main)] hover:border-[var(--border-active)]'
                      }`}
                    >
                      {skill.name}
                      {skill.isPrimary && <span className="ml-1 text-[10px]">&bull;</span>}
                    </span>
                  ))}
                </div>
              </div>

              {cat.skills.some((s) => s.isPrimary) && (
                <div className="mt-6 pt-4 border-t border-[var(--border-main)] font-mono text-[11px] text-[#C6FF3D] flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Primary Specialization</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
