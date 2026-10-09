import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioContent } from '../data/content';

interface NavItem {
  name: string;
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about', label: '// about' },
  { name: 'Projects', href: '#projects', label: '// projects' },
  { name: 'Skills', href: '#skills', label: '// skills' },
  { name: 'Contact', href: '#contact', label: '// contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('ayush-portfolio-theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsLight(false);
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle logic
  const toggleTheme = () => {
    const nextTheme = !isLight;
    setIsLight(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('ayush-portfolio-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('ayush-portfolio-theme', 'dark');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border-main)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Ayush Sonewane Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-[var(--border-main)] group-hover:border-[#C6FF3D]/50 flex items-center justify-center font-display font-black text-lg text-[var(--text-heading)] group-hover:text-[#C6FF3D] transition-all duration-300 shadow-[0_0_15px_rgba(198,255,61,0)] group-hover:shadow-[0_0_15px_rgba(198,255,61,0.25)]">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[var(--text-heading)] group-hover:text-[#C6FF3D] transition-colors">
                Ayush Sonewane
              </span>
              <span className="font-mono text-[10px] text-[var(--text-sub)] group-hover:text-[var(--text-main)]">
                cross_platform.dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-[var(--border-main)] bg-[var(--chip-bg)] backdrop-blur-md px-4 py-1.5 shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-1.5 font-mono text-xs text-[var(--text-sub)] hover:text-[#C6FF3D] transition-colors duration-200 group rounded-full"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#C6FF3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] hover:bg-white/[0.1] text-[var(--text-main)] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Toggle light/dark theme"
              title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {isLight ? (
                <Moon size={18} className="text-[#7C5CFF]" />
              ) : (
                <Sun size={18} className="text-[#C6FF3D]" />
              )}
            </button>

            {/* Resume Download Button */}
            <a
              href={portfolioContent.personal.resumeUrl}
              download="Ayush_Sonewane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold text-[#0A0A0F] bg-[#C6FF3D] hover:bg-[#d4ff66] transition-all duration-200 shadow-[0_0_20px_rgba(198,255,61,0.25)] hover:shadow-[0_0_25px_rgba(198,255,61,0.45)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileText size={14} />
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] text-[var(--text-heading)] flex items-center justify-center hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full-Screen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--drawer-bg)] backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-[#C6FF3D]">// navigation_index</span>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="font-display font-bold text-3xl text-[var(--text-heading)] hover:text-[#C6FF3D] transition-colors flex items-center justify-between py-2 border-b border-[var(--border-main)]"
                  >
                    <span>{item.name}</span>
                    <span className="font-mono text-xs text-[var(--text-sub)]">{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-4">
                <a
                  href={portfolioContent.personal.resumeUrl}
                  download="Ayush_Sonewane_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-semibold text-[#0A0A0F] bg-[#C6FF3D] shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={16} />
                  <span>Download Resume PDF</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-main)] flex items-center justify-between font-mono text-xs text-[var(--text-sub)]">
              <span>Nagpur, Maharashtra, IN</span>
              <span className="text-[#C6FF3D]">v1.0.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
