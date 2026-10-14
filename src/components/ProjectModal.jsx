import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl glass-card border border-slate-700 bg-[#13253e] text-slate-100 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-700 bg-[#0b192c]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-extrabold bg-[#34d399] text-[#0b192c]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-300">
                {project.industry}
              </span>
            </div>
            <h2 className="text-2xl font-display font-black text-white mt-1">
              {project.title}
            </h2>
            <div className="text-xs font-bold text-slate-300">
              {project.subtitle}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#13253e] text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed">
          
          <div className="p-4 rounded-xl bg-[#0b192c] border border-slate-700 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold">PROJECT ROLE & SCOPE</span>
            <div className="font-bold text-white text-sm">{project.role}</div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
              BUSINESS CHALLENGE & PROBLEM STATEMENT
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              DELIVERED SOLUTION & SYSTEM ARCHITECTURE
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-700">
            <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
              KEY DELIVERED CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-700">
            <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0b192c] border border-slate-700 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-700 bg-[#0b192c] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-[#0b192c] bg-[#34d399]"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
}
