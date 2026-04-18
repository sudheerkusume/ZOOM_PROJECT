import React from "react";
import Client from "../assets/Client.png";
import Client1 from "../assets/Client1.png";
import Client2 from "../assets/Client2.png";
import Client3 from "../assets/Client3.png";
import Client4 from "../assets/Client4.png";
import Client5 from "../assets/Client5.png";
import Client6 from "../assets/Client6.png";
import Client7 from "../assets/Client7.png";
import Client8 from "../assets/Client8.png";
import Client9 from "../assets/Client9.png";
import Client10 from "../assets/Client10.png";

const clientLogoData = [
  { id: "c0", src: Client, label: "Client" },
  { id: "c1", src: Client1, label: "Client 1" },
  { id: "c2", src: Client2, label: "Client 2" },
  { id: "c3", src: Client3, label: "Client 3" },
  { id: "c4", src: Client4, label: "Client 4" },
  { id: "c5", src: Client5, label: "Client 5" },
  { id: "c6", src: Client6, label: "Client 6" },
  { id: "c7", src: Client7, label: "Client 7" },
  { id: "c8", src: Client8, label: "Client 8" },
  { id: "c9", src: Client9, label: "Client 9" },
  { id: "c10", src: Client10, label: "Client 10" },
];

const ClientLogo = ({ src, label }) => (
  <div
    className="flex-shrink-0 w-32 h-14 px-4 mx-2 rounded-2xl md:w-52 md:h-24 md:px-6 md:mx-3 md:rounded-[2rem] bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex items-center justify-center cursor-pointer group hover:bg-white hover:shadow-glow hover:border-brand-indigo/30 transition-all duration-300"
    aria-label={label}
    role="img"
  >
    <img 
      src={src} 
      alt={label} 
      className="max-h-8 md:max-h-12 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
    />
  </div>
);

export default function ClientsLogos() {
  // Duplicating the data precisely to create a seamless infinite loop
  const duplicatedLogos = [...clientLogoData, ...clientLogoData];
  const reversedLogos = [...clientLogoData].reverse().concat([...clientLogoData].reverse());

  return (
    <section className="py-16 md:py-28 bg-linear-to-b from-[#fff8f4] to-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-indigo/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10 mb-10 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 relative z-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="w-8 md:w-10 h-[2px] md:h-[3px] bg-brand-indigo rounded-full"></span>
              <p className="text-brand-indigo font-black text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">Trusted by Industry Leaders</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-brand-slate tracking-tight leading-[1.1]">
              Built for founders who value <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet py-1 block sm:inline"> Speed and Clarity</span>
            </h2>
          </div>

          <div className="hidden md:flex shrink-0 pb-2">
            <button className="btn-secondary group">
              <span>View Success Stories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Marquees */}
      <div className="flex flex-col gap-4 md:gap-8 relative z-10">
        
        {/* Track 1 - Moves Left */}
        <div 
          className="w-full relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex whitespace-nowrap w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] py-2">
            {duplicatedLogos.map((c, idx) => (
              <ClientLogo key={`t1-${c.id}-${idx}`} src={c.src} label={c.label} />
            ))}
          </div>
        </div>

        {/* Track 2 - Moves Right */}
        <div 
          className="w-full relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex whitespace-nowrap w-max animate-[marquee_50s_linear_infinite_reverse] hover:[animation-play-state:paused] py-2 ml-[-150px] md:ml-[-500px]">
            {reversedLogos.map((c, idx) => (
              <ClientLogo key={`t2-${c.id}-${idx}`} src={c.src} label={c.label} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

