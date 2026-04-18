import React from "react";
import logo1 from "../assets/logo1.png";
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

// Dark-mode optimized Frosted Glass Tile
const LogoTile = ({ src, alt }) => {
  return (
    <div
      className="h-16 w-36 md:h-24 md:w-64 px-4 md:px-8 rounded-2xl md:rounded-[2rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.2)] hover:-translate-y-2 hover:bg-white/[0.08] hover:border-brand-indigo/30 transition-all duration-500 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer group shrink-0 relative overflow-hidden"
    >
      {/* Dynamic top highlight line simulating a neon edge glow */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-indigo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Logos inside dark mode usually need brightness/invert if they are black text, 
          but if they are standard colored PNGs we'll use a high contrast saturation boost on hover. */}
      <img
        src={src}
        alt={alt}
        className="max-h-8 md:max-h-12 max-w-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 saturate-0 group-hover:saturate-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
      />
    </div>
  );
};

export default function PartnersLogos() {
  const logos = [
    { src: logo1, alt: "Partner 1" },
    { src: Client, alt: "Partner 2" },
    { src: Client1, alt: "Partner 3" },
    { src: Client2, alt: "Partner 4" },
    { src: Client3, alt: "Partner 5" },
    { src: Client4, alt: "Partner 6" },
    { src: Client5, alt: "Partner 7" },
    { src: Client6, alt: "Partner 8" },
  ];

  const topTrack = [...logos, ...logos];
  const bottomTrack = [...logos.slice(4), ...logos.slice(0, 4), ...logos.slice(4), ...logos.slice(0, 4)];

  return (
    <section className="py-16 md:py-36 bg-[#040914] relative overflow-hidden border-y border-white/5">

      {/* Deep Space Grid & Radial Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-indigo/10 rounded-[100%] blur-[120px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-violet/10 rounded-[100%] blur-[120px] md:blur-[150px] pointer-events-none"></div>

      <div className="container-custom relative z-20 mb-12 md:mb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Cyberpunk style pulsing indicator */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-6 md:mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-brand-indigo shadow-[0_0_10px_#f97316]"></span>
            </span>
            <span className="text-white font-bold text-[9px] md:text-[11px] uppercase tracking-[0.3em]">The Compliance Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-black text-white tracking-tight animate-fade-up leading-[1.1] md:leading-tight" style={{ animationDelay: "100ms" }}>
            Unrivaled scale. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-orange-400 to-brand-violet py-1 block sm:inline">Zero compromises.</span>
          </h2>
          <p className="mt-4 md:mt-8 text-slate-400 text-sm md:text-xl font-medium max-w-2xl mx-auto animate-fade-up px-4" style={{ animationDelay: "200ms" }}>
            We seamlessly connect with the ecosystem of tools you already trust, putting powerful automation right at your fingertips.
          </p>
        </div>
      </div>

      {/* Dramatic Tilted Marquee Container */}
      <div className="relative z-10 w-[120%] -left-[10%] md:w-[110%] md:-left-[5%] flex flex-col gap-4 md:gap-8 my-8 md:my-20 transform -rotate-[2deg] md:-rotate-3 scale-105 pointer-events-auto">

        {/* We use an internal un-rotated mask so the fade sits straight relative to the screen, but the items flow diagonally */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] py-2 md:py-4">

          {/* ROW 1: STANDARD SCROLL */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite] md:animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] items-center gap-4 md:gap-8 px-4">
            {topTrack.map((logo, idx) => (
              <LogoTile key={`top-${idx}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>

        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] py-2 md:py-4">

          {/* ROW 2: REVERSE SCROLL */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite_reverse] md:animate-[marquee_50s_linear_infinite_reverse] hover:[animation-play-state:paused] items-center gap-4 md:gap-8 px-4 ml-[-60px] md:ml-[-120px]">
            {bottomTrack.map((logo, idx) => (
              <LogoTile key={`bottom-${idx}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>

        </div>
      </div>
      {/* Floating decorative elements to enhance depth */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-brand-indigo/50 animate-ping"></div>
      <div className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full bg-brand-violet/50 animate-pulse"></div>
    </section>
  );
}


