import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Users } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const SoftSkills: React.FC = () => {
  const { spokenLanguages, softSkills } = portfolioContent;

  return (
    <section className="py-20 relative bg-[var(--bg-space)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Spoken Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl glass-panel flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#22D3EE]">
                <Languages size={16} />
                <span>// spoken_languages</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-heading)]">
                Multilingual Communication
              </h3>
              <p className="mt-2 text-sm text-[var(--text-sub)] font-light">
                Fluent communication across regional and global engineering teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang.language}
                  className="px-4 py-2 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-main)] font-mono text-xs flex items-center gap-2 text-[var(--text-main)] hover:border-[#22D3EE]/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  <span className="font-semibold text-[var(--text-heading)]">{lang.language}</span>
                  <span className="text-[10px] text-[var(--text-sub)]">({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Soft Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-3xl glass-panel flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#C6FF3D]">
                <Users size={16} />
                <span>// core_competencies</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-heading)]">
                Interpersonal &amp; Problem Solving
              </h3>
              <p className="mt-2 text-sm text-[var(--text-sub)] font-light">
                Engineering mindset combining analytical problem decomposition with empathetic team collaboration.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="px-3.5 py-2 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-main)] font-mono text-xs text-[var(--text-main)] hover:border-[#C6FF3D]/50 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C6FF3D]">&bull;</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
