import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceEcosystem from './components/ExperienceEcosystem';
import ShowcaseGrid from './components/ShowcaseGrid';
import ExecutiveContactFooter from './components/ExecutiveContactFooter';
import ResumeModal from './components/ResumeModal';
import MagicCursor from './components/MagicCursor';
import FloatingWidget from './components/FloatingWidget';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Scroll Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0b192c] bg-grid-pattern text-slate-100 relative font-sans selection:bg-brand-accent/20 selection:text-brand-accent overflow-x-hidden">
      
      {/* Magic Cursor Follower */}
      <MagicCursor />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-20 z-50 px-4 py-3 rounded-xl bg-[#13253e] border border-brand-accent/50 text-brand-accent text-xs font-mono font-bold shadow-2xl animate-bounce">
          ✓ {toastMessage}
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        scrollProgress={scrollProgress}
      />

      {/* Hero Section */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Master Content Flow */}
      <main className="space-y-6 w-full max-w-full overflow-x-hidden">
        <ExperienceEcosystem />
        <ShowcaseGrid />
        <ExecutiveContactFooter
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={handleShowToast}
        />
      </main>

      {/* Floating Action Widget */}
      <FloatingWidget onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Viewer Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

    </div>
  );
}
