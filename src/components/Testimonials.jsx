import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ZOO made my company registration effortless. The process was smooth, digital, and truly professional.",
      name: "Sandeep Rao",
      role: "CEO, TechFlow AI",
      rating: 5
    },
    {
      quote: "The expert consultation was top-notch. They handled my complex GST queries with remarkable ease.",
      name: "Priya Sharma",
      role: "Founder, Bloom Decor",
      rating: 5
    },
    {
      quote: "Reliable, transparent, and fast. The best platform for any startup looking for compliance peace of mind.",
      name: "Arjun Mehta",
      role: "Director, Solify Solar",
      rating: 5
    },
    {
      quote: "Using their platform completely eliminated our manual paperwork. Highly recommended for fast-scaling startups.",
      name: "Neha Gupta",
      role: "CFO, Nexa Retail",
      rating: 5
    },
    {
      quote: "The dashboard is incredibly intuitive. Being able to track every filing in real-time has been a game changer for us.",
      name: "Karthik Iyer",
      role: "Founder, Spark Media",
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3500); // changes every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-16 md:py-32 bg-slate-50/50 overflow-hidden relative border-y border-slate-100/50">
      <div className="container-custom relative z-10">
        
        {/* Distinctive Header Design (Breaking the mold from rest of homepage) */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 flex flex-col items-center">
             {/* Decorative Centered Icon */}
             <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center mb-4 md:mb-6 border border-slate-100">
                <Quote className="w-5 h-5 md:w-7 md:h-7 text-brand-indigo/60" fill="currentColor" />
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-slate tracking-tight leading-[1.1] md:leading-tight px-4 md:px-0">
               Don't just take <span className="italic font-light opacity-60">our word</span> for it.
             </h2>
             <p className="mt-4 md:mt-8 text-slate-500 font-bold tracking-[0.2em] uppercase text-[9px] md:text-xs">Real stories from the Founder ecosystem</p>
        </div>

        {/* 3D Coverflow Gallery System */}
        <div 
          className="relative w-full max-w-[1000px] mx-auto flex flex-col items-center" 
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <div className="relative w-full h-[320px] md:h-[350px] flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
            {testimonials.map((t, index) => {
                let offset = index - currentSlide;

                // Handle loop-around interpolation
                if (offset > testimonials.length / 2) offset -= testimonials.length;
                if (offset < -testimonials.length / 2) offset += testimonials.length;

                const absOffset = Math.abs(offset);
                const isActive = index === currentSlide;

                // "Lighter" scaling math for card sizing
                let translateX = offset * 70; // percentage spread (increased so cards don't overlap as aggressively)
                let translateZ = absOffset * -120; // pushback depth
                let rotateY = offset * -25; // gentler slant
                let opacity = 1 - (absOffset * 0.4); // aggressive fade away
                let zIndex = 20 - absOffset;

                // Culling extreme offsets
                if (absOffset > 2) opacity = 0;

                return (
                    <div
                        key={index}
                        className="absolute w-[260px] md:w-[380px] transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer"
                        style={{
                            transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                            opacity: opacity,
                            zIndex: zIndex,
                        }}
                        onClick={() => {
                            if (!isActive) setCurrentSlide(index);
                        }}
                    >
                      {/* Lighter, sleeker card surface */}
                      <div className={`p-5 md:p-8 bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl border ${isActive ? 'border-brand-indigo/30 shadow-[0_15px_40px_rgba(249,115,22,0.12)]' : 'border-slate-100 shadow-sm'} flex flex-col h-full transition-all duration-700`}>
                        <div className="flex justify-between items-center mb-4 md:mb-6">
                            <div className="flex gap-1">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 md:w-[14px] md:h-[14px] fill-brand-indigo text-brand-indigo drop-shadow-sm" />
                                ))}
                            </div>
                        </div>
                        
                        <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8 flex-grow italic ${isActive ? 'text-brand-slate' : 'text-slate-400'} transition-colors duration-500`}>
                            "{t.quote}"
                        </p>
                        
                        <div className="flex items-center gap-3 md:gap-4 border-t border-slate-50 pt-4 md:pt-5">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-base md:text-lg transition-colors duration-500 ${isActive ? 'bg-gradient-to-br from-brand-indigo to-brand-violet text-white shadow-inner' : 'bg-slate-100 text-slate-300'} shrink-0`}>
                                {t.name[0]}
                            </div>
                            <div>
                                <h4 className={`font-bold tracking-tight text-xs md:text-sm ${isActive ? 'text-brand-slate' : 'text-slate-500'}`}>{t.name}</h4>
                                <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.role}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 z-30">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-brand-indigo hover:text-white hover:border-brand-indigo flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
              >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
              </button>

              <div className="flex gap-2 md:gap-3">
                  {testimonials.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ease-out ${index === currentSlide ? 'w-6 md:w-8 bg-brand-indigo' : 'w-1.5 md:w-2 bg-slate-200 hover:bg-slate-300 hover:scale-110'}`}
                      ></button>
                  ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-brand-indigo hover:text-white hover:border-brand-indigo flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
              >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
              </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
