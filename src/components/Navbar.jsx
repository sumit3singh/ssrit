import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume, scrollProgress }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About & Hero', href: '#hero' },
    { name: 'ERP & Technical Depth', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Contact & CV', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 110; // 110px top breathing space under navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0b192c]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-sm">
      
      {/* Scroll Progress Top Line Indicator */}
      <div
        className="h-[3px] bg-gradient-to-r from-brand-accent via-emerald-400 to-lime-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#34d399] text-[#0b192c] font-mono font-black text-sm flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              SS
            </div>
            <div>
              <div className="font-display font-extrabold text-sm tracking-tight text-white group-hover:text-brand-accent transition-colors">
                SUMIT SINGH
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
                ERP & SOFTWARE DEVELOPER
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-200 hover:text-brand-accent transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#13253e] border border-slate-700 text-slate-200 hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-brand-accent" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0b192c] bg-[#34d399] hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#13253e] border border-slate-700 text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0b192c]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col gap-2 font-mono text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg bg-[#13253e] text-slate-200 hover:text-brand-accent cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl font-mono text-xs font-bold bg-[#13253e] text-slate-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>View Executive Resume</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
