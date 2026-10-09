import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Terminal,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Contact: React.FC = () => {
  const { personal, socials } = portfolioContent;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setFormSubmitted(true);

    // Fallback mailto trigger
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-28 pb-12 relative bg-[var(--bg-space)] overflow-hidden border-t border-[var(--border-main)] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#7C5CFF]/15 via-[#C6FF3D]/10 to-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline, Direct Details & Socials (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D] mb-4">
                <Terminal size={14} />
                <span>// 05. contact &amp; collaboration</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-heading)] tracking-tight leading-[1.05]">
                Let's build <br />
                <span className="text-gradient-lime">something awesome.</span>
              </h2>

              <p className="mt-6 text-[var(--text-main)] text-base sm:text-lg leading-relaxed font-light max-w-md">
                Have a challenging project, opportunity, or cross-platform socket application in mind? My inbox is always open.
              </p>

              {/* Direct Communication Badges */}
              <div className="mt-8 space-y-3 font-mono text-xs sm:text-sm">
                {/* Email with copy button */}
                <div className="p-3.5 rounded-2xl glass-panel flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-[var(--border-main)] flex items-center justify-center text-[#C6FF3D]">
                      <Mail size={16} />
                    </div>
                    <span className="text-[var(--text-heading)] select-all">{personal.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-[var(--chip-bg)] hover:bg-white/[0.1] text-xs text-[var(--text-sub)] hover:text-[var(--text-heading)] flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={14} className="text-[#C6FF3D]" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl glass-panel flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-[var(--border-main)] flex items-center justify-center text-[#22D3EE]">
                      <Phone size={16} />
                    </div>
                    <span className="text-[var(--text-heading)] select-all">{personal.phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 rounded-lg bg-[var(--chip-bg)] hover:bg-white/[0.1] text-xs text-[var(--text-sub)] hover:text-[var(--text-heading)] flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-[#22D3EE]" /> : <Copy size={14} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl glass-panel flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-[var(--border-main)] flex items-center justify-center text-[#7C5CFF]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[var(--text-main)]">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Link Badges */}
            <div className="mt-10 pt-8 border-t border-[var(--border-main)]">
              <span className="font-mono text-xs text-[var(--text-sub)] block mb-3">// external_links</span>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-[var(--border-main)] bg-[var(--chip-bg)] hover:bg-white/[0.08] hover:border-[#C6FF3D]/50 text-[var(--text-main)] hover:text-[var(--text-heading)] font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>{social.name}</span>
                    <ExternalLink size={12} className="text-[var(--text-sub)]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[var(--border-main)] relative">
              <h3 className="font-display font-bold text-2xl text-[var(--text-heading)] mb-2">
                Send a Direct Dispatch
              </h3>
              <p className="font-mono text-xs text-[var(--text-sub)] mb-6">
                Fill the fields below to initiate an immediate mail channel.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C6FF3D] text-[#0A0A0F] flex items-center justify-center mx-auto mb-4 font-bold">
                    <Check size={24} />
                  </div>
                  <h4 className="font-display font-bold text-xl text-[var(--text-heading)]">Transmission Initiated!</h4>
                  <p className="font-mono text-xs text-[var(--text-main)] mt-2">
                    Your email client will open to finalize delivery to {personal.email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-4 py-2 rounded-xl bg-white/10 font-mono text-xs text-[var(--text-heading)] hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block font-mono text-xs text-[var(--text-sub)] mb-1.5">
                      Your Name <span className="text-[#C6FF3D]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] focus:border-[#C6FF3D] focus:ring-1 focus:ring-[#C6FF3D] text-[var(--text-heading)] placeholder:text-[var(--text-sub)] font-mono text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[var(--text-sub)] mb-1.5">
                      Email Address <span className="text-[#C6FF3D]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] text-[var(--text-heading)] placeholder:text-[var(--text-sub)] font-mono text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[var(--text-sub)] mb-1.5">
                      Project Brief or Message <span className="text-[#C6FF3D]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Let's build an offline LAN sharing solution or chat about opportunities..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] focus:border-[#7C5CFF] focus:ring-1 focus:ring-[#7C5CFF] text-[var(--text-heading)] placeholder:text-[var(--text-sub)] font-mono text-xs outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C6FF3D] hover:bg-[#d4ff66] text-[#0A0A0F] font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(198,255,61,0.25)] hover:scale-[1.01] active:scale-[0.99] mt-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-24 pt-8 border-t border-[var(--border-main)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-sub)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-heading)]">Ayush Sonewane</span>
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-slate-600">•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[var(--text-main)] hover:text-[#C6FF3D] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
