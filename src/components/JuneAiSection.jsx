import React from "react";
import { Zap, FileSearch, Bell, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import video1 from "../assets/video2.mp4"

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-3xl md:rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-brand-indigo/5 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-indigo group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
      <Icon className="w-5 h-5 md:w-5 md:h-5 text-slate-600 group-hover:text-white transition-colors duration-500" />
    </div>
    <div className="min-w-0 pr-1 md:pr-2">
      <h3 className="font-bold text-slate-800 text-base md:text-lg leading-tight mb-1 md:mb-1.5 group-hover:text-brand-indigo transition-colors duration-300">{title}</h3>
      <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function JuneAiSection() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Decorative AI Glow atmosphere */}
      <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none hidden md:block" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            {/* Dark Styled AI Badge */}
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-slate-900 border border-slate-800 mb-6 md:mb-8 shadow-xl shadow-brand-indigo/10">
              <Sparkles size={14} className="text-[#a28af7]" />
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-white">
                Powered by AI
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-5 md:mb-6">
              Smarter compliance,{" "}
              <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet">
                zero friction.
              </span>
            </h2>
            
            <p className="text-slate-500 text-base sm:text-xl font-medium leading-relaxed mb-8 md:mb-10">
              Automate document drafting, smart reminders, and continuous compliance checks using intelligent workflows. Keep your team focused entirely on growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              <Feature icon={FileSearch} title="Smart Drafts" desc="Turn raw requirements into ready documents." />
              <Feature icon={Bell} title="Active Alerts" desc="Never miss deadlines with predictive notifications." />
              <Feature icon={ShieldCheck} title="Audit Trails" desc="Maintain a flawless, automated history of changes." />
              <Feature icon={Zap} title="Quick Flows" desc="Execute complex filings with guided checklists." />
            </div>
            
            <button className="group inline-flex items-center gap-3 text-brand-indigo font-black text-xs md:text-sm uppercase tracking-widest hover:text-brand-violet transition-colors">
              Explore AI Capabilities
              <div className="w-8 h-8 rounded-full bg-brand-indigo/10 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-brand-violet/10 transition-all">
                 <ChevronRight size={18} />
              </div>
            </button>
          </div>

          {/* Right Visuals Column */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none mt-4 md:mt-0">
            {/* Mock App Window for Video */}
            <div className="relative rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-200/60 shadow-2xl shadow-brand-indigo/10 overflow-hidden transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-700">
              
              {/* macOS Style Bar */}
              <div className="h-10 md:h-14 border-b border-slate-100 bg-white/50 backdrop-blur-xl flex items-center px-4 md:px-6 gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
              </div>

              <div className="aspect-[4/3] relative bg-[#f1f5f9]">
                <video
                  src={video1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover mix-blend-darken"
                />
                
                {/* Internal gradient overlay to ensure UI elements are readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Animated Live Demo Pill */}
                <div className="absolute left-3 md:left-6 bottom-3 md:bottom-6 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl md:rounded-[1.25rem] p-2 md:p-3 pr-4 md:pr-6 flex items-center gap-3 md:gap-4 transform hover:scale-105 transition-transform duration-500 cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1rem] bg-brand-violet/10 flex items-center justify-center text-brand-violet relative shrink-0">
                    <div className="absolute inset-0 rounded-xl md:rounded-[1rem] bg-brand-violet/20 animate-ping opacity-20" />
                    <Zap size={18} className="fill-brand-violet/20 relative z-10 md:w-[22px] md:h-[22px]" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-violet mb-0.5 whitespace-nowrap">Live Analysis</p>
                    <p className="text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">Workflow Automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* High-End Stats Metrics */}
            <div className="mt-4 md:mt-8 grid grid-cols-2 gap-3 md:gap-6 md:px-8">
              <div className="p-4 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
                  <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest md:tracking-[0.15em] text-slate-400">Steps Automated</p>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">14<span className="text-brand-indigo">+</span></p>
              </div>
              <div className="p-4 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-violet shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-pulse shrink-0" />
                  <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest md:tracking-[0.15em] text-slate-400">Time Saved</p>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">8h<span className="text-lg md:text-2xl text-slate-300 font-medium tracking-normal">/wk</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

