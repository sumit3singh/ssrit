import React, { useState } from 'react';
import { MessageSquare, FileText, ArrowUp, X, Sparkles } from 'lucide-react';

export default function FloatingWidget({ onOpenResume }) {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Quick Menu Options */}
      {open && (
        <div className="flex flex-col gap-2 mb-2 animate-fadeIn">
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b241c] border border-brand-border text-slate-200 text-xs font-mono font-bold shadow-xl hover:border-brand-lime transition-all"
          >
            <ArrowUp className="w-4 h-4 text-brand-lime" />
            <span>Scroll To Top</span>
          </button>

          <button
            onClick={() => { onOpenResume(); setOpen(false); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b241c] border border-brand-border text-slate-200 text-xs font-mono font-bold shadow-xl hover:border-brand-lime transition-all"
          >
            <FileText className="w-4 h-4 text-brand-lime" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-lime to-brand-accent text-slate-950 text-xs font-mono font-bold shadow-xl transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>

        </div>
      )}

      {/* Main Trigger Floating Ball */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lime to-brand-accent text-slate-950 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform font-bold"
        aria-label="Quick Actions"
        title="Quick Menu"
      >
        {open ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
      </button>

    </div>
  );
}
