import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Terminal } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Education: React.FC = () => {
  const { education } = portfolioContent;

  return (
    <section id="education" className="py-24 relative bg-[var(--bg-space)] overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D]">
            <Terminal size={14} />
            <span>// 04. academic_milestones</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-heading)] tracking-tight">
            EDUCATION &amp; <span className="text-gradient-lime">SCHOLARSHIP</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[var(--border-main)] space-y-12 ml-4 sm:ml-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[var(--bg-space)] border-2 border-[#C6FF3D] flex items-center justify-center shadow-[0_0_12px_rgba(198,255,61,0.5)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-[var(--border-main)] hover:border-[#C6FF3D]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-sub)]">
                    <Calendar size={13} className="text-[#22D3EE]" />
                    <span>{item.period}</span>
                  </div>

                  {/* CGPA Badge */}
                  <span className="px-3.5 py-1 rounded-full bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/40 font-mono text-xs font-bold shadow-[0_0_12px_rgba(198,255,61,0.2)]">
                    {item.cgpa}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-heading)] group-hover:text-[#C6FF3D] transition-colors">
                  {item.degree}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-main)] font-medium">
                  <GraduationCap size={16} className="text-[#7C5CFF]" />
                  <span>{item.institution}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed font-light">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
