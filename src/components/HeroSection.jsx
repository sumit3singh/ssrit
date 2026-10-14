import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, snapshotStats } from '../data/portfolioData';
import { ArrowRight, FileText, Award, Building, Layers, CheckCircle } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  const canvasRef = useRef(null);

  // Typewriter effect state
  const [typewriterText, setTypewriterText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated Counters
  const [counts, setCounts] = useState(snapshotStats.map(() => 0));

  const icons = [Award, Building, Layers, CheckCircle];

  // Typewriter Logic
  useEffect(() => {
    const titles = personalInfo.typewriterTitles;
    const currentFullText = titles[titleIdx % titles.length];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typewriterText === currentFullText) {
      typingSpeed = 2200;
    } else if (isDeleting && typewriterText === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => prev + 1);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setTypewriterText((prev) => {
        if (!isDeleting) {
          if (prev === currentFullText) {
            setIsDeleting(true);
            return prev;
          }
          return currentFullText.substring(0, prev.length + 1);
        } else {
          return currentFullText.substring(0, prev.length - 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, titleIdx]);

  // Animated Count-Up Stats
  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        snapshotStats.map((s) => {
          const target = parseFloat(s.value);
          if (isNaN(target)) return s.value;
          return Math.min(Math.round(target * progress), target);
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // HTML5 Interactive Canvas Node Graph Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 420;
    };
    window.addEventListener('resize', handleResize);

    const nodes = [
      { id: 'Business', label: 'BUSINESS', x: 0.15, y: 0.25, color: '#a3e635' },
      { id: 'ERP', label: 'ERP CORE', x: 0.50, y: 0.20, color: '#34d399' },
      { id: 'Software', label: 'SOFTWARE', x: 0.82, y: 0.30, color: '#86efac' },
      { id: 'Database', label: 'POSTGRESQL', x: 0.35, y: 0.65, color: '#10b981' },
      { id: 'Data', label: 'DATA & MIS', x: 0.65, y: 0.60, color: '#38bdf8' },
      { id: 'Automation', label: 'AUTOMATION', x: 0.20, y: 0.80, color: '#f59e0b' },
      { id: 'AI', label: 'AI AGENTS', x: 0.80, y: 0.80, color: '#a3e635' }
    ];

    const connections = [
      ['Business', 'ERP'],
      ['ERP', 'Software'],
      ['ERP', 'Database'],
      ['Software', 'Database'],
      ['Database', 'Data'],
      ['Data', 'Automation'],
      ['Software', 'Automation'],
      ['Automation', 'AI'],
      ['Data', 'AI'],
      ['Business', 'Data']
    ];

    const pulses = connections.map(([fromId, toId]) => ({
      from: fromId,
      to: toId,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      connections.forEach(([fromId, toId]) => {
        const fromNode = nodes.find((n) => n.id === fromId);
        const toNode = nodes.find((n) => n.id === toId);
        if (!fromNode || !toNode) return;

        const x1 = fromNode.x * width;
        const y1 = fromNode.y * height;
        const x2 = toNode.x * width;
        const y2 = toNode.y * height;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, fromNode.color + '40');
        grad.addColorStop(1, toNode.color + '40');

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const fromNode = nodes.find((n) => n.id === p.from);
        const toNode = nodes.find((n) => n.id === p.to);
        if (!fromNode || !toNode) return;

        const px = fromNode.x * width + (toNode.x * width - fromNode.x * width) * p.progress;
        const py = fromNode.y * height + (toNode.y * height - fromNode.y * height) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = fromNode.color;
        ctx.shadowColor = fromNode.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((n) => {
        const nx = n.x * width;
        const ny = n.y * height;

        const dist = Math.hypot(mouseX - nx, mouseY - ny);
        const isHovered = dist < 45;

        ctx.beginPath();
        ctx.arc(nx, ny, isHovered ? 18 : 12, 0, Math.PI * 2);
        ctx.fillStyle = n.color + '20';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, isHovered ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = isHovered ? 15 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#ffffff' : '#94a3b8';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, nx, ny + 24);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden scroll-mt-section">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#13253e] border border-slate-700 text-slate-200 shadow-sm">
                ● Full-Time / Freelance / Consulting
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase font-bold">
                BUSINESS × TECHNOLOGY × DATA × AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
                SUMIT SINGH
              </h1>
              
              {/* Typewriter Line */}
              <div className="text-xl sm:text-2xl font-display font-bold min-h-[36px] flex items-center gap-1">
                <span className="text-slate-300 font-normal">I am a </span>
                <span className="text-emerald-400 font-extrabold border-b-2 border-emerald-400">
                  {typewriterText}
                </span>
                <span className="w-0.5 h-6 bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-display font-semibold text-slate-100 leading-snug">
              "{personalInfo.tagline}"
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.supportingParagraph}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0b192c] bg-[#34d399] hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 group"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-[#13253e] hover:bg-[#1a304f] border border-slate-700 rounded-xl transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

          </div>

          {/* Right Hero Visualization Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-card border border-slate-700/80 p-4 shadow-2xl overflow-hidden bg-[#13253e]">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 ml-2">enterprise_system.node.graph</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                  LIVE SYSTEM FLOW
                </span>
              </div>

              {/* Interactive Canvas Graph */}
              <div className="relative w-full h-[300px] sm:h-[340px] rounded-xl bg-[#0b192c] overflow-hidden border border-slate-700/60 shadow-inner">
                <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#0b192c] border border-slate-800">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Current Role</div>
                  <div className="font-semibold text-white truncate">Mawai Infotech Pvt. Ltd.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0b192c] border border-slate-800">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Location</div>
                  <div className="font-semibold text-white">Noida, India</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Executive Proof Counter Bar */}
        <div className="rounded-2xl glass-card border border-slate-700/80 p-6 shadow-xl bg-[#13253e]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {snapshotStats.map((stat, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={stat.label} className="p-4 rounded-xl bg-[#0b192c] border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {counts[idx]}
                      {stat.suffix}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#34d399] text-[#0b192c]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 font-bold mt-1">
                    {stat.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
