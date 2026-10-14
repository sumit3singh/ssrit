import React, { useState } from 'react';
import { certificatesData, projectsData, selectedClients } from '../data/portfolioData';
import { Award, ShieldCheck, X, ArrowRight, Sparkles, Building } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ShowcaseGrid() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const marqueeList = [...certificatesData, ...certificatesData];

  const projectCategories = ['ALL', 'ERP', 'AI & Platform', 'Hospitality & POS', 'POS & Billing'];

  const filteredProjects = selectedProjectCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedProjectCategory);

  return (
    <div className="space-y-16">
      
      {/* 1. Floating Certificates Screen Marquee */}
      <section id="certificates" className="scroll-mt-section py-8 bg-[#0b192c]/90 border-y border-slate-800 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              CREDENTIALS & SPECIALIZATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              CERTIFICATES & QUALIFICATIONS
            </h2>
            <p className="text-slate-300 text-sm">
              Professional certifications and academic credentials flowing seamlessly across the screen.
            </p>
          </div>
        </div>

        {/* Marquee Banner with Edge Gradient Fade Masks */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0b192c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0b192c] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-6">
            {marqueeList.map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                onClick={() => setSelectedCert(cert)}
                className="w-[300px] sm:w-[340px] shrink-0 rounded-2xl glass-card border border-slate-700/80 p-5 space-y-4 glass-card-hover cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl transition-all bg-[#13253e]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#34d399] text-[#0b192c] flex items-center justify-center group-hover:scale-105 transition-transform font-bold shadow-md shadow-emerald-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-extrabold bg-[#34d399] text-[#0b192c]">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold">
                      {cert.category}
                    </span>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-emerald-400 transition-colors mt-0.5 line-clamp-1">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-300 mt-1">
                      {cert.issuer}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#0b192c] border border-slate-700 text-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Projects & Case Studies */}
      <section id="projects" className="scroll-mt-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            REAL-WORLD CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            FEATURED ENTERPRISE PROJECTS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Detailed case studies across ERP implementations, POS systems, software platforms, and AI automation.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedProjectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all border ${
                selectedProjectCategory === cat
                  ? 'bg-[#34d399] text-[#0b192c] border-[#34d399] font-extrabold shadow-md'
                  : 'bg-[#13253e] border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card border border-slate-700/80 p-6 sm:p-8 space-y-6 glass-card-hover group flex flex-col justify-between bg-[#13253e]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    {project.industry}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-300 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0b192c] border border-slate-700 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">ROLE: {project.role}</span>
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0b192c] bg-[#34d399] hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Selected Enterprise Clients Grid */}
        <div className="rounded-2xl glass-card border border-slate-700/80 p-6 sm:p-8 space-y-6 bg-[#13253e]">
          <div className="flex items-center justify-between border-b border-slate-700 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">CLIENT EXPERIENCE</span>
              <h3 className="text-xl font-display font-bold text-white mt-1">Selected Enterprise Implementations</h3>
            </div>
            <span className="text-xs font-mono text-slate-300 font-bold">7+ Key Clients</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {selectedClients.map((client) => (
              <div key={client.name} className="p-4 rounded-xl bg-[#0b192c] border border-slate-800 space-y-1 hover:border-emerald-400/60 transition-colors shadow-sm">
                <div className="flex items-center gap-2 font-bold text-xs text-white">
                  <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{client.name}</span>
                </div>
                <div className="text-[11px] text-slate-300 truncate">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-2xl glass-card border border-slate-700 bg-[#13253e] p-6 space-y-5 text-slate-100 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-700 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34d399] text-[#0b192c] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">{selectedCert.category}</span>
                  <h3 className="text-xl font-display font-bold text-white">{selectedCert.title}</h3>
                </div>
              </div>
              <button onClick={() => setSelectedCert(null)} className="p-1.5 rounded-lg bg-[#0b192c] text-slate-400 hover:text-white border border-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400">Issuer / Organization:</span>
                <div className="font-semibold text-emerald-400">{selectedCert.issuer} ({selectedCert.date})</div>
              </div>
              <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">{selectedCert.description}</p>
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2 font-bold">Skills Covered:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((sk) => (
                    <span key={sk} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0b192c] border border-slate-700 text-slate-200">
                      ✓ {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700 flex justify-end">
              <button onClick={() => setSelectedCert(null)} className="px-5 py-2 text-xs font-bold text-[#0b192c] bg-[#34d399] rounded-xl">
                Close Credential
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />

    </div>
  );
}
