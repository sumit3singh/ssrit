import React, { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('glass-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out ${
        isHovered
          ? 'w-10 h-10 -ml-5 -mt-5 bg-brand-lime/20 border border-brand-lime scale-125'
          : 'w-4 h-4 -ml-2 -mt-2 bg-brand-lime/60 border border-brand-lime'
      }`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        boxShadow: isHovered
          ? '0 0 20px rgba(163, 230, 53, 0.5)'
          : '0 0 10px rgba(163, 230, 53, 0.3)'
      }}
    />
  );
}
