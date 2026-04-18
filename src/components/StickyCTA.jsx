import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[90] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
      <button className="flex items-center gap-2 md:gap-3 bg-brand-slate text-white p-1.5 pr-4 md:p-2 md:pr-6 rounded-full shadow-xl hover:shadow-brand-indigo/20 ring-2 ring-transparent hover:ring-brand-indigo/10 active:scale-95 transition-all duration-300 group">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-indigo rounded-full flex items-center justify-center group-hover:bg-brand-violet transition-colors shadow-lg shadow-brand-indigo/20 shrink-0">
          <Calendar className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="text-left">
          <p className="text-[8px] md:text-[10px] font-black text-brand-indigo uppercase tracking-[0.2em] leading-none mb-1 md:mb-1.5">Free Consult</p>
          <p className="text-[10px] sm:text-xs md:text-sm font-black text-white leading-none whitespace-nowrap">Book Expert Slot</p>
        </div>
        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all ml-0.5 md:ml-1" />
      </button>
    </div>
  );
};

export default StickyCTA;
