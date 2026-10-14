import React, { useState } from 'react';
import { erpEcosystem, databaseDepth, businessWorkflows, careerTimeline } from '../data/portfolioData';
import { Server, Database, Workflow, Briefcase, CheckCircle2, Terminal, Copy, Check, ArrowRight, Building2 } from 'lucide-react';

export default function ExperienceEcosystem() {
  const [activeTab, setActiveTab] = useState('erp');

  // ERP State
  const [selectedErpModule, setSelectedErpModule] = useState(erpEcosystem.modules[0]);

  // SQL Copy State
  const [copiedSql, setCopiedSql] = useState(false);

  // Workflow State
  const [selectedWorkflow, setSelectedWorkflow] = useState(businessWorkflows[0]);

  // Career Timeline State
  const [selectedCareerIdx, setSelectedCareerIdx] = useState(2);

  const handleCopySql = () => {
    navigator.clipboard.writeText(databaseDepth.sampleSqlSnippet);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const tabs = [
    { id: 'erp', label: '360° ERP Ecosystem', icon: Server },
    { id: 'database', label: 'PostgreSQL & SQL Depth', icon: Database },
    { id: 'workflows', label: 'Business Process Workflows', icon: Workflow },
    { id: 'timeline', label: 'Career Journey & Roles', icon: Briefcase }
  ];

  return (
    <section id="experience" className="py-16 scroll-mt-section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            CORE DOMAIN EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ERP, SOFTWARE, DATABASE & WORKFLOWS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Unified interactive view of ERP modules, database engineering, operational workflows, and professional background.
          </p>
        </div>

        {/* Master Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all border ${
                  isActive
                    ? 'bg-[#34d399] text-[#0b192c] border-[#34d399] font-extrabold shadow-md'
                    : 'bg-[#13253e] border-slate-700 text-slate-200 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0b192c]' : 'text-slate-400'}`} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 360° ERP Ecosystem */}
        {activeTab === 'erp' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {erpEcosystem.modules.map((mod) => {
                  const isSelected = selectedErpModule.name === mod.name;
                  return (
                    <button
                      key={mod.name}
                      onClick={() => setSelectedErpModule(mod)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-[#34d399]/20 border-[#34d399] text-[#34d399] font-bold scale-[1.02] shadow-sm'
                          : 'bg-[#13253e] border-slate-700/80 text-slate-200 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs uppercase font-extrabold">{mod.name}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{mod.desc}</div>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl glass-card border border-emerald-500/40 p-6 space-y-5 bg-[#13253e] shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">MODULE DEEP DIVE</span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/30 font-bold">
                      {selectedErpModule.name}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-black text-white">{selectedErpModule.name} WORKFLOW</h3>
                    <p className="text-slate-200 text-sm mt-2 leading-relaxed">{selectedErpModule.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-700 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">Key Scope & Validation:</span>
                    <div className="text-xs text-slate-200 space-y-1.5 font-mono">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Business process requirement mapping</span></div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Master table & parameter configuration</span></div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>PostgreSQL database transaction validation</span></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Skill Levels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-[#0b192c] border border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400"><span>CORE EXPERIENCE</span><span className="w-2 h-2 rounded-full bg-emerald-400" /></div>
                <p className="text-xs text-slate-300 leading-relaxed">Purchase, Inventory / Store, Sales, Reporting, Transaction Flow, Troubleshooting</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b192c] border border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-lime-400"><span>WORKING EXPERIENCE</span><span className="w-2 h-2 rounded-full bg-lime-400" /></div>
                <p className="text-xs text-slate-300 leading-relaxed">Production, Quality, Finance, POS, Master Configuration, UAT Coordination</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b192c] border border-slate-700 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400"><span>SUPPORTING KNOWLEDGE</span><span className="w-2 h-2 rounded-full bg-slate-500" /></div>
                <p className="text-xs text-slate-300 leading-relaxed">PPC, MRP, Costing Models, Advanced Taxations & Compliance</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: PostgreSQL & SQL Depth */}
        {activeTab === 'database' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="p-6 rounded-2xl bg-[#13253e] border border-emerald-500/40 text-center shadow-md">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-bold">SIGNATURE TECHNICAL PHILOSOPHY</div>
              <blockquote className="text-lg sm:text-xl font-bold text-white max-w-4xl mx-auto italic">"{databaseDepth.signatureStatement}"</blockquote>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl glass-card border border-slate-700 p-6 space-y-4 bg-[#13253e]">
                  <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <span>PostgreSQL & SQL Engineering Scope</span>
                  </h3>
                  <div className="space-y-2.5">
                    {databaseDepth.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#0b192c] border border-slate-700 overflow-hidden shadow-2xl font-mono text-xs text-slate-100">
                  <div className="px-4 py-3 bg-[#13253e] border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="text-white font-semibold">psql_query_trace.sql</span>
                    </div>
                    <button onClick={handleCopySql} className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0b192c] text-slate-300 hover:text-white border border-slate-700 text-[11px]">
                      {copiedSql ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSql ? 'Copied!' : 'Copy SQL'}</span>
                    </button>
                  </div>

                  <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed bg-[#0b192c]">
                    <pre><code>{databaseDepth.sampleSqlSnippet}</code></pre>
                  </div>

                  <div className="px-4 py-2 bg-[#13253e]/60 border-t border-slate-700 text-[11px] text-slate-300 flex items-center justify-between">
                    <span>PostgreSQL 16.1 • Transaction Isolation: Read Committed</span>
                    <span className="text-emerald-400 font-bold">Query Executed: 14ms</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Business Workflows */}
        {activeTab === 'workflows' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {businessWorkflows.map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => setSelectedWorkflow(wf)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                    selectedWorkflow.id === wf.id
                      ? 'bg-[#34d399] text-[#0b192c] border-[#34d399] font-extrabold shadow-md'
                      : 'bg-[#13253e] border-slate-700 text-slate-200'
                  }`}
                >
                  {wf.title}
                </button>
              ))}
            </div>

            <div className="rounded-2xl glass-card border border-slate-700 p-6 sm:p-8 space-y-6 bg-[#13253e]">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">END-TO-END WORKFLOW STEPPER</span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">{selectedWorkflow.title} — {selectedWorkflow.subtitle}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {selectedWorkflow.steps.map((step, idx) => (
                  <div key={step.name} className="p-4 rounded-xl bg-[#0b192c] border border-slate-800 space-y-2 hover:border-emerald-400/60 transition-colors shadow-sm">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400">
                      <span>0{idx + 1}</span>
                      {idx < selectedWorkflow.steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />}
                    </div>
                    <div className="font-bold text-xs text-white">{step.name}</div>
                    <div className="text-[11px] text-slate-300">{step.detail}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Career Journey & Roles */}
        {activeTab === 'timeline' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {careerTimeline.map((item, idx) => {
                const isSelected = selectedCareerIdx === idx;
                return (
                  <button
                    key={item.year + item.role}
                    onClick={() => setSelectedCareerIdx(idx)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-[#13253e] border-emerald-400 shadow-md text-emerald-400 font-bold'
                        : 'bg-[#0b192c]/60 border-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-sm font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`}>{item.year}</span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#34d399] text-[#0b192c] font-extrabold">{item.badge}</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate">{item.company}</div>
                    <div className="text-[11px] text-slate-300 truncate">{item.role}</div>
                  </button>
                );
              })}
            </div>

            {careerTimeline[selectedCareerIdx] && (
              <div className="rounded-2xl glass-card border border-emerald-400/40 p-6 sm:p-8 relative overflow-hidden transition-all shadow-lg bg-[#13253e]">
                <div className="relative z-10 space-y-4 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#34d399] text-[#0b192c]">
                      {careerTimeline[selectedCareerIdx].period}
                    </span>
                    <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      {careerTimeline[selectedCareerIdx].company}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">{careerTimeline[selectedCareerIdx].role}</h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{careerTimeline[selectedCareerIdx].description}</p>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
