import React from "react";
import { ShieldCheck, FileText, Calendar, Globe, Users, Scale, ArrowUpRight } from "lucide-react";

// Premium Solution Card with robust hover effects and glassmorphism elements
const SolutionCard = ({ icon: Icon, title, desc, meta, delay }) => (
  <div 
    className="group relative p-6 md:p-8 lg:p-10 bg-white rounded-3xl md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500 overflow-hidden flex flex-col h-full animate-fade-up hover:-translate-y-1"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    {/* Decorative Hover Radial Area */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 md:w-64 md:h-64 rounded-full bg-brand-indigo/5 blur-3xl group-hover:bg-brand-indigo/10 transition-colors duration-500 z-0"></div>

    <div className="relative z-10 flex items-start justify-between gap-4 md:gap-6 mb-6 md:mb-8 mt-1 md:mt-2">
      <div className="relative">
        {/* Glowing backdrop shadow under icon box */}
        <div className="absolute inset-0 bg-brand-indigo/20 blur-md rounded-2xl group-hover:bg-brand-indigo/30 group-hover:scale-110 transition-all duration-500"></div>
        {/* Icon Container */}
        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 relative bg-white/90 backdrop-blur-sm shadow-sm border border-brand-indigo/10 rounded-xl md:rounded-2xl text-brand-indigo flex items-center justify-center transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500">
          <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:text-brand-violet transition-colors duration-500" strokeWidth={2.5} />
        </div>
      </div>
      
      {meta ? (
        <div className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-1.5 rounded-full bg-slate-50/80 backdrop-blur-md border border-slate-100 text-[10px] md:text-[11px] font-bold text-slate-500 whitespace-nowrap shadow-sm group-hover:border-brand-indigo/20 group-hover:text-brand-indigo transition-colors duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo/60 group-hover:animate-ping relative shrink-0">
             <div className="absolute inset-0 rounded-full bg-brand-indigo/50 animate-ping"></div>
          </div>
          {meta}
        </div>
      ) : null}
    </div>

    <div className="relative z-10 mt-auto">
      <h3 className="text-xl md:text-2xl font-black text-brand-slate tracking-tight mb-2 md:mb-3 group-hover:text-brand-indigo transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-5 md:mb-6">
        {desc}
      </p>
      
      {/* Premium Read More link style */}
      <div className="flex items-center text-xs md:text-sm font-bold text-slate-300 group-hover:text-brand-indigo transition-colors duration-300 mt-auto">
        Learn more <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </div>

    {/* Bottom animated border line representing progress or activation */}
    <div className="absolute bottom-0 left-0 h-1 md:h-1.5 bg-gradient-to-r from-brand-indigo to-brand-violet w-0 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
  </div>
);

export default function ComplianceSolutionSection() {
  const solutions = [
    {
      icon: FileText,
      title: "Paperless onboarding",
      desc: "Collect requirements, generate drafts, and keep a clean submission trail from day one.",
      meta: "Fast start",
    },
    {
      icon: Calendar,
      title: "GST & returns workflow",
      desc: "Monthly filing support with guided steps and smart reminders to reduce mistakes.",
      meta: "On-time tracking",
    },
    {
      icon: Scale,
      title: "Income tax filing",
      desc: "Prepare and file common returns with structured inputs and review checkpoints.",
      meta: "Guided filing",
    },
    {
      icon: Globe,
      title: "MCA annual compliance",
      desc: "Stay on top of periodic filings with a calendar-driven checklist and status visibility.",
      meta: "Audit-ready",
    },
    {
      icon: ShieldCheck,
      title: "Trademark support",
      desc: "Help with searches, documentation, and filing steps for stronger brand protection.",
      meta: "Brand safety",
    },
    {
      icon: Users,
      title: "Expert review when needed",
      desc: "Talk to professionals for edge cases so you can move forward with confidence.",
      meta: "Human assistance",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Premium Background Textures & Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none hidden md:block"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-brand-indigo/10 shadow-sm mb-5 md:mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-indigo animate-pulse"></span>
            <span className="text-brand-indigo font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">All-In-One Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-brand-slate animate-fade-up leading-[1.1] md:leading-[1.1]" style={{ animationDelay: "100ms" }}>
            Build, file, and stay <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet py-1 block sm:inline">compliant in one flow</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg lg:text-xl font-medium leading-relaxed mt-4 md:mt-6 animate-fade-up mx-auto max-w-2xl px-4" style={{ animationDelay: "200ms" }}>
            A modern compliance experience designed for founders:<br className="hidden md:block"/> simple steps, clear status, and fewer surprises.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {solutions.map((s, idx) => (
            <SolutionCard key={s.title} {...s} delay={100 * (idx + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

