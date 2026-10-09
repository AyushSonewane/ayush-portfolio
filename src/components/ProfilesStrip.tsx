import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../data/content';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ProfilesStrip: React.FC = () => {
  const { socials } = portfolioContent;

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <GithubIcon size={26} className="text-[#7C5CFF]" />;
      case 'LinkedIn':
        return <LinkedinIcon size={26} className="text-[#22D3EE]" />;
      case 'LeetCode':
        // Custom LeetCode glyph
        return (
          <svg className="w-7 h-7 text-[#FFA116]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.246 2.148 5.617 2.138 7.852-.023 2.235-2.161 2.245-5.65.023-7.812l-2.73-2.673a.81.81 0 0 1-.023-1.144.814.814 0 0 1 1.145-.024l2.73 2.673c2.859 2.784 2.846 7.28-.039 10.054-2.885 2.774-7.234 2.787-10.12.028l-.045-.043-4.277-4.193a7.537 7.537 0 0 1-1.619-2.316 7.15 7.15 0 0 1-.446-1.303 7.027 7.027 0 0 1-.08-2.996 6.84 6.84 0 0 1 1.54-2.68l3.856-4.128 5.405-5.787a2.983 2.983 0 0 1 2.083-.949 2.98 2.98 0 0 1 2.1 5.097l-3.056 3.272a.81.81 0 0 1-1.145.023.814.814 0 0 1-.024-1.144l3.056-3.272a1.365 1.365 0 0 0 .373-.974 1.368 1.368 0 0 0-1.367-1.367z" />
          </svg>
        );
      default:
        return <Terminal size={26} className="text-[#C6FF3D]" />;
    }
  };

  return (
    <section className="py-16 relative bg-[var(--bg-space)] border-t border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-sub)] mb-8">
          <span className="text-[#C6FF3D] font-semibold">// find_me_online</span>
          <span>• Direct profile portals</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl glass-panel relative overflow-hidden border border-[var(--border-main)] hover:border-[var(--border-active)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-between cursor-pointer"
              style={{
                boxShadow: `0 0 0 0 ${social.color}`,
              }}
              whileHover={{
                boxShadow: `0 0 30px -5px ${social.color}35`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-main)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(social.name)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-[var(--text-heading)] group-hover:text-[#C6FF3D] transition-colors">
                    {social.name}
                  </h4>
                  <p className="font-mono text-xs text-[var(--text-sub)] mt-0.5">
                    {social.handle}
                  </p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-[var(--chip-bg)] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-sub)] group-hover:text-[var(--text-heading)] group-hover:bg-white/[0.1] transition-all">
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
