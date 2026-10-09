import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, X, Check, Lock, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { portfolioContent, type ProjectItem } from '../data/content';
import { PacketTransferDemo } from './PacketTransferDemo';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const localShare = portfolioContent.projects.find((p) => p.id === 'localshare')!;
  const higherUp = portfolioContent.projects.find((p) => p.id === 'higherup')!;

  return (
    <section id="projects" className="py-28 relative bg-[var(--bg-space)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#7C5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D]">
            <Terminal size={14} />
            <span>// 02. engineered_projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-heading)] tracking-tight">
              FEATURED <span className="text-gradient-lime">CASE STUDIES</span>
            </h2>
            <p className="font-mono text-xs text-[var(--text-sub)] max-w-md">
              Real-world products engineered for high throughput, socket mesh connectivity, and zero-compromise UX.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE 1: LocalShare (Primary Showcase Card) */}
        {/* ========================================================================= */}
        <motion.div
          id="localshare"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden border border-[var(--border-main)] hover:border-[#C6FF3D]/40 transition-all duration-300 shadow-xl"
        >
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C6FF3D]/10 via-[#22D3EE]/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Badges Strip */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5 font-mono text-xs">
                  {/* LIVE Status Badge with pulsing beacon */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/40 font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
                    LIVE PRODUCT
                  </span>

                  {/* Available on Microsoft Store Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ADEF]/15 text-[#00ADEF] border border-[#00ADEF]/40 font-medium">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                    Available on Microsoft Store
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--text-heading)] tracking-tight leading-tight">
                  {localShare.title}
                </h3>
                <p className="mt-2 font-mono text-sm text-[#22D3EE] font-medium">
                  {localShare.tagline}
                </p>

                {/* One line pitch */}
                <p className="mt-4 text-[var(--text-main)] text-base sm:text-lg leading-relaxed font-light">
                  {localShare.oneLiner}
                </p>

                {/* Highlights List */}
                <div className="mt-6 space-y-2.5">
                  {localShare.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)]">
                      <div className="w-4 h-4 rounded-full bg-[#C6FF3D]/20 text-[#C6FF3D] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {localShare.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg font-mono text-xs bg-[var(--chip-bg)] border border-[var(--border-main)] text-[var(--text-main)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[var(--border-main)] flex flex-wrap items-center gap-3">
                {/* 1. Visit Website (Primary) */}
                {localShare.links.website && (
                  <a
                    href={localShare.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#C6FF3D] hover:bg-[#d4ff66] text-[#0A0A0F] font-mono font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(198,255,61,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                {/* 2. Custom Microsoft Store Button (Windows-style Icon, Custom Style) */}
                <a
                  href="#localshare-store"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Microsoft Store URL placeholder: TODO_MICROSOFT_STORE_URL (Pending official link supply).");
                  }}
                  className="px-5 py-3 rounded-xl border border-[#00ADEF]/40 bg-[#00ADEF]/10 hover:bg-[#00ADEF]/20 text-[var(--text-heading)] font-mono font-medium text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  title="Available on Microsoft Store (TODO placeholder)"
                >
                  {/* Geometric 4-tile Windows glyph */}
                  <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                    <span className="bg-[#00ADEF] rounded-[1px]" />
                    <span className="bg-[#00ADEF] rounded-[1px]" />
                    <span className="bg-[#00ADEF] rounded-[1px]" />
                    <span className="bg-[#00ADEF] rounded-[1px]" />
                  </div>
                  <span>Get on Microsoft Store</span>
                </a>

                {/* 3. GitHub (Only rendered if real URL provided) */}
                {localShare.links.github && localShare.links.github !== '#' && (
                  <a
                    href={localShare.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] hover:bg-white/[0.08] text-[var(--text-main)] font-mono text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                )}

                {/* Case Study Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(localShare)}
                  className="px-4 py-3 rounded-xl text-[var(--text-sub)] hover:text-[var(--text-heading)] font-mono text-xs sm:text-sm flex items-center gap-1.5 transition-colors ml-auto cursor-pointer"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Interactive Packet Stage (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <PacketTransferDemo />

              {/* Mockup Preview Area / Dropzone Slot */}
              <div className="p-4 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-main)] flex flex-col items-center justify-center text-center py-8 relative group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-sub)] mb-2">
                  <Layers size={18} />
                </div>
                <span className="font-mono text-xs text-[var(--text-heading)] font-medium">
                  Flutter Cross-Platform Engine
                </span>
                <span className="font-mono text-[10px] text-[var(--text-sub)] mt-1">
                  Android APK &bull; Windows .exe &bull; Zero Server Middleware
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CENTERPIECE 2: HigherUp Showcase Card */}
        {/* ========================================================================= */}
        <motion.div
          id="higherup"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl glass-panel p-6 sm:p-10 relative overflow-hidden border border-[var(--border-main)] hover:border-[#7C5CFF]/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-[#7C5CFF]/15 text-[#7C5CFF] border border-[#7C5CFF]/30 font-semibold">
                  STARTUP PLATFORM
                </span>
                <span className="text-[var(--text-sub)]">• Full-Stack System</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-heading)] tracking-tight">
                {higherUp.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-[#7C5CFF] font-medium">
                {higherUp.tagline}
              </p>

              <p className="mt-3 text-[var(--text-main)] text-base leading-relaxed font-light">
                {higherUp.oneLiner}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                {higherUp.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)]">
                    <div className="w-4 h-4 rounded-full bg-[#7C5CFF]/20 text-[#7C5CFF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {higherUp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg font-mono text-xs bg-[var(--chip-bg)] border border-[var(--border-main)] text-[var(--text-main)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[var(--border-main)] flex flex-wrap items-center gap-3">
                {/* Safe GitHub Button with subtle disabled state */}
                {higherUp.links.github && higherUp.links.github !== '#' ? (
                  <a
                    href={higherUp.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] hover:bg-white/[0.08] text-[var(--text-heading)] font-mono text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <div
                    className="px-4 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] text-[var(--text-sub)] font-mono text-xs flex items-center gap-2 cursor-not-allowed select-none opacity-60"
                    title="Repository URL pending release"
                  >
                    <Lock size={13} />
                    <span>Repo coming soon</span>
                  </div>
                )}

                <button
                  onClick={() => setSelectedProject(higherUp)}
                  className="px-4 py-2.5 rounded-xl text-[var(--text-sub)] hover:text-[var(--text-heading)] font-mono text-xs flex items-center gap-1.5 transition-colors ml-auto cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Visual Bento area (4 cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-main)] flex flex-col justify-between h-full">
              <div className="font-mono text-xs text-[var(--text-sub)]">
                <span className="text-[#7C5CFF] font-semibold">// database_architecture</span>
                <p className="mt-2 text-[var(--text-main)] text-xs font-light">
                  Normalized MySQL relational schema managing triple-actor relationships (Investors, Ventures, Job Seekers).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-main)] font-mono text-[11px] text-[var(--text-sub)] flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span>Backend Engine:</span>
                  <span className="text-[var(--text-heading)] font-medium">PHP 8 + MySQL</span>
                </div>
                <div className="flex justify-between">
                  <span>Interface:</span>
                  <span className="text-[var(--text-heading)] font-medium">Semantic JS + CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* SHARED-ELEMENT EXPANDING CASE STUDY MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-active)] p-6 sm:p-10 shadow-2xl relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-main)] hover:text-[var(--text-heading)] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="font-mono text-xs text-[#C6FF3D] mb-2">// case_study_dossier</div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-heading)]">
                {selectedProject.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-[#22D3EE]">{selectedProject.tagline}</p>

              <p className="mt-4 text-[var(--text-main)] text-base leading-relaxed">
                {selectedProject.oneLiner}
              </p>

              <div className="mt-8">
                <h4 className="font-display font-bold text-lg text-[var(--text-heading)] mb-3">Architectural Highlights</h4>
                <div className="space-y-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--chip-bg)] border border-[var(--border-main)]">
                      <Cpu size={16} className="text-[#C6FF3D] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-main)]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-display font-bold text-lg text-[var(--text-heading)] mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[var(--chip-bg)] border border-[var(--border-main)] font-mono text-xs text-[var(--text-main)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.id === 'localshare' && (
                <div className="mt-8 pt-6 border-t border-[var(--border-main)]">
                  <h4 className="font-display font-bold text-lg text-[var(--text-heading)] mb-3">App Screenshot Gallery</h4>
                  <div className="p-6 rounded-2xl bg-[var(--chip-bg)] border border-dashed border-[var(--border-active)] text-center font-mono text-xs text-[var(--text-sub)]">
                    <p className="text-[var(--text-heading)] font-medium mb-1">LocalShare High-Res UI Gallery Dropzone</p>
                    <p className="text-[var(--text-sub)]">
                      Screenshots from <a href="https://www.localshare.co.in/" target="_blank" rel="noopener noreferrer" className="text-[#22D3EE] underline">localshare.co.in</a> ready to be previewed in production.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
