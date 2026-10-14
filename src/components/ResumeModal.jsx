import React from 'react';
import { X, Printer, Mail, Linkedin, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { personalInfo, detailedExperience, certificatesData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-card border border-slate-700 bg-[#13253e] text-slate-100 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-[#0b192c] shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">OFFICIAL EXECUTIVE RESUME OVERLAY</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0b192c] bg-[#34d399] hover:bg-emerald-300 transition-all shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#13253e] text-slate-400 hover:text-white transition-colors border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#13253e] print:bg-white print:text-slate-900 text-slate-100 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-700 print:border-slate-300 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-extrabold tracking-tight text-white print:text-slate-900">{personalInfo.name}</h1>
                <div className="text-sm font-mono text-emerald-400 print:text-emerald-700 font-bold mt-1 uppercase">{personalInfo.title}</div>
              </div>

              <div className="text-xs font-mono text-slate-300 print:text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center gap-1.5 sm:justify-end"><MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />{personalInfo.currentLocation}</div>
                <div className="flex items-center gap-1.5 sm:justify-end"><Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />{personalInfo.email}</div>
                <div className="flex items-center gap-1.5 sm:justify-end"><Linkedin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />LinkedIn: /in/sumit-singh-ssrit</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 print:text-slate-700 italic pt-2 leading-relaxed">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest border-b border-slate-700 print:border-slate-300 pb-1">
              EXECUTIVE PROFILE & POSITIONING
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 print:text-slate-700 leading-relaxed">
              ERP Consultant and Software Developer with 5+ years of experience bridging business process requirements with scalable technology solutions. Specialized in full-lifecycle ERP implementations, PostgreSQL query engineering, business analysis, and Python enterprise automation.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest border-b border-slate-700 print:border-slate-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {detailedExperience.map((exp) => (
              <div key={exp.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-sm text-white print:text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400 print:text-emerald-700" />
                    <span>{exp.company}</span>
                    <span className="text-slate-300 print:text-slate-500 font-normal">| {exp.role}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 print:text-emerald-700 font-bold">{exp.period}</div>
                </div>

                <p className="text-xs text-slate-300 print:text-slate-600">{exp.summary}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-200 print:text-slate-700 font-mono">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Credentials */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest border-b border-slate-700 print:border-slate-300 pb-1">
              CREDENTIALS & EDUCATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificatesData.map((c) => (
                <div key={c.id} className="p-3 rounded-lg bg-[#0b192c] print:bg-slate-100 border border-slate-700 print:border-slate-300">
                  <div className="font-bold text-white print:text-slate-900">{c.title}</div>
                  <div className="text-emerald-400 print:text-emerald-700 font-mono text-[11px]">{c.issuer} ({c.date})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
