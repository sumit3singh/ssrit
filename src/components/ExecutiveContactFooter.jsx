import React, { useState } from 'react';
import { personalInfo, whyMePoints } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, Send, FileText, ArrowUp } from 'lucide-react';

export default function ExecutiveContactFooter({ onOpenResume, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    if (onShowToast) onShowToast("Message sent successfully!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 scroll-mt-section relative bg-[#0b192c]/90 border-t border-slate-800 transition-colors space-y-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Profile Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyMePoints.map((point) => (
            <div key={point.number} className="p-6 rounded-2xl glass-card border border-slate-700/80 space-y-3 shadow-sm bg-[#13253e]">
              <div className="font-mono text-2xl font-black text-emerald-400">{point.number}</div>
              <h3 className="text-lg font-display font-bold text-white">{point.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* 2. Executive Printable Resume Banner */}
        <div className="rounded-2xl bg-[#13253e] border border-emerald-500/40 p-8 sm:p-10 text-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#34d399] text-[#0b192c]">
              OFFICIAL CV & RESUME
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">Need a Printable Executive Resume?</h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Access Sumit Singh's high-definition printable resume overlay with one-click PDF export.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#34d399] text-[#0b192c] hover:bg-emerald-300 transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>VIEW EXECUTIVE RESUME</span>
          </button>
        </div>

        {/* 3. Get In Touch & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white">LET'S CONNECT.</h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Have an ERP implementation, software requirement or consulting query? Reach out directly.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-5 rounded-2xl glass-card border border-slate-700 flex items-center justify-between shadow-sm bg-[#13253e]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34d399] text-[#0b192c] flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Email Address</div>
                  <div className="font-semibold text-white text-xs sm:text-sm">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#0b192c] text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 font-mono"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-xl glass-card border border-slate-700 hover:border-emerald-400 transition-all flex items-center gap-3 group bg-[#13253e]">
                <Linkedin className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400">LINKEDIN</div>
                  <div className="font-bold text-xs text-white group-hover:text-emerald-400">Sumit Singh</div>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-4 rounded-xl glass-card border border-slate-700 hover:border-emerald-400 transition-all flex items-center gap-3 group bg-[#13253e]">
                <Github className="w-5 h-5 text-slate-300" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400">GITHUB</div>
                  <div className="font-bold text-xs text-white group-hover:text-emerald-400">sumitsinghssrit</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card border border-slate-700 p-6 sm:p-8 shadow-md bg-[#13253e]">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Message Delivered!</h3>
                  <p className="text-xs text-slate-300">Sumit will review your message and reply promptly.</p>
                  <button onClick={() => setSubmitted(false)} className="px-4 py-2 text-xs font-mono font-bold text-[#0b192c] bg-[#34d399] rounded-lg">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Your Name *</label>
                      <input type="text" required placeholder="Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-3.5 py-2 rounded-xl bg-[#0b192c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Your Email *</label>
                      <input type="email" required placeholder="Email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-3.5 py-2 rounded-xl bg-[#0b192c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Subject</label>
                    <input type="text" placeholder="Subject" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full px-3.5 py-2 rounded-xl bg-[#0b192c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Message *</label>
                    <textarea required rows={4} placeholder="Your message..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-3.5 py-2 rounded-xl bg-[#0b192c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none resize-none" />
                  </div>

                  <button type="submit" className="w-full py-3 px-6 rounded-xl font-bold text-xs text-[#0b192c] bg-[#34d399] hover:bg-emerald-300 transition-all flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* 4. Visual Signature Pipeline Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-bold">
            <span className="text-white">BUSINESS</span>
            <span>↓</span>
            <span>REQUIREMENT</span>
            <span>↓</span>
            <span>ERP</span>
            <span>↓</span>
            <span>SOFTWARE</span>
            <span>↓</span>
            <span>DATABASE</span>
            <span>↓</span>
            <span>DATA</span>
            <span>↓</span>
            <span className="text-emerald-400">AI</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} SUMIT SINGH</span>
            <button onClick={scrollToTop} className="hover:text-white flex items-center gap-1">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
