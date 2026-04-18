import React from 'react';
import { UserPlus, FileSearch, CheckCircle, Rocket } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, last, delay }) => (
  <div 
    className="relative flex flex-col items-start lg:items-center text-left lg:text-center group animate-fade-up pl-4 md:pl-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    {/* Floating animated connection line between steps (Desktop only) */}
    {!last && (
      <div className="hidden lg:block absolute top-[3rem] left-[65%] w-[70%] h-px bg-slate-200">
        {/* Animated progressive glow on hover */}
        <div className="absolute inset-0 w-full h-[2px] -translate-y-[0.5px] bg-gradient-to-r from-brand-indigo to-brand-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
      </div>
    )}

    {/* Elegant Glowing Background Number Overlay */}
    <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 lg:left-auto lg:-top-10 opacity-[0.03] group-hover:opacity-10 text-[6rem] md:text-[8rem] font-black text-brand-indigo transition-all duration-500 pointer-events-none select-none font-display leading-none">
      {number}
    </div>

    {/* Ultra-premium Morphing Icon Container */}
    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-4 md:mb-8 relative z-10 transition-all duration-500 group-hover:border-brand-indigo/20 group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] group-hover:-translate-y-2 overflow-hidden`}>
      {/* Expanding background circle inside the box */}
      <div className="absolute inset-0 bg-brand-indigo/5 scale-0 group-hover:scale-[1.8] transition-transform duration-700 ease-out rounded-full origin-center"></div>
      
      <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand-slate group-hover:text-brand-indigo transition-colors relative z-10 duration-500" strokeWidth={1.5} />
      
      {/* Super subtle inner glass reflection */}
      <div className="absolute inset-0 rounded-[2rem] border border-white opacity-0 group-hover:opacity-100 shadow-[inset_0_2px_20px_rgba(255,255,255,1)] pointer-events-none"></div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 bg-white/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 md:p-5 -ml-4 md:-ml-5 lg:ml-0 lg:p-0 rounded-2xl border border-white/50 lg:border-none shadow-sm lg:shadow-none transition-all duration-300">
      <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
        <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-indigo/10 text-brand-indigo text-[9px] md:text-[10px] font-black shrink-0">
          {number}
        </span>
        <h3 className="text-lg md:text-xl font-black text-brand-slate tracking-tight group-hover:text-brand-indigo transition-colors">{title}</h3>
      </div>
      <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500 leading-relaxed max-w-[280px]">
        {desc}
      </p>
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consult Experts",
      desc: "Talk to our CAs and CSs to understand the right structure for your vision.",
      icon: UserPlus
    },
    {
      number: "02",
      title: "Digital Setup",
      desc: "We apply for your DSC and DIN instantly through our secure portal.",
      icon: FileSearch
    },
    {
      number: "03",
      title: "Compliance Check",
      desc: "Comprehensive review of all MCA/GST documents for 100% approval rate.",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "Launch Ready",
      desc: "Your company is incorporated. PAN/TAN & Bank account details delivered.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-16 md:py-36 bg-[#fffcfc] relative overflow-hidden">
      
      {/* Abstract Background Shapes & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.02] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-brand-indigo/10 shadow-sm mb-4 md:mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-indigo animate-pulse"></span>
            <span className="text-brand-indigo font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Streamlined Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight text-brand-slate animate-fade-up leading-tight" style={{ animationDelay: "100ms" }}>
            From Idea to <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet">Incorporation</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg lg:text-xl font-medium animate-fade-up max-w-2xl mx-auto px-4 md:px-0" style={{ animationDelay: "200ms" }}>
            We've simplified the complex legal maze into 4 clear, digital steps designed for modern founders.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 max-w-sm md:max-w-none mx-auto">
          {steps.map((step, idx) => (
            <Step key={idx} {...step} last={idx === steps.length - 1} delay={100 * (idx + 1)} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;

