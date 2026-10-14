import React from 'react';
import { Compass, Server, Award, Layers, Mail } from 'lucide-react';

export default function QuickExplorer({ activePerspective, onSelectPerspective }) {
  const perspectives = [
    { id: 'all', label: 'All Profile', icon: Compass, target: '#hero' },
    { id: 'erp', label: 'ERP & Software', icon: Server, target: '#experience' },
    { id: 'certificates', label: 'Certificates', icon: Award, target: '#certificates' },
    { id: 'projects', label: 'Case Studies', icon: Layers, target: '#projects' },
    { id: 'contact', label: 'Contact & CV', icon: Mail, target: '#contact' }
  ];

  const handleSelect = (p) => {
    onSelectPerspective(p.id);
    const element = document.querySelector(p.target);
    if (element) {
      const headerOffset = 145;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[64px] z-30 py-2.5 bg-[#0b192c]/90 backdrop-blur-xl border-y border-slate-800/80 mb-8 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 uppercase tracking-wider whitespace-nowrap font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>WHAT DO YOU WANT TO EXPLORE?</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
          {perspectives.map((p) => {
            const Icon = p.icon;
            const isActive = activePerspective === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelect(p)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#34d399] text-[#0b192c] border-[#34d399] font-extrabold shadow-sm'
                    : 'bg-[#13253e] border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0b192c]' : 'text-slate-400'}`} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
