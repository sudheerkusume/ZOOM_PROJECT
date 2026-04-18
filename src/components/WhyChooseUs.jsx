import React, { useState, useEffect } from 'react';
import { Shield, Clock, Award, Headphones } from 'lucide-react';

const Feature = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="group relative bg-white rounded-2xl md:rounded-[2.5rem] p-4 sm:p-5 md:p-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden text-left flex flex-col h-full animate-fade-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    {/* Ambient hover glow inside card */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

    {/* Massive Faded Background Watermark */}
    <Icon 
      className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-8 md:-right-8 md:w-56 md:h-56 text-brand-slate opacity-[0.02] group-hover:opacity-[0.04] group-hover:scale-110 group-hover:-rotate-[-15deg] transition-all duration-700 pointer-events-none z-0" 
      strokeWidth={1}
    />

    {/* Floating Icon Wrapper */}
    <div className="relative w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 md:mb-10 z-10 group-hover:bg-gradient-to-br group-hover:from-brand-indigo group-hover:to-brand-violet transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-indigo/20 group-hover:scale-110 origin-left">
      <Icon 
        className="w-5 h-5 md:w-8 md:h-8 text-brand-slate group-hover:text-white transition-colors duration-500" 
        strokeWidth={1.5} 
      />
    </div>

    <div className="relative z-10 flex-grow">
      <h3 className="text-xs sm:text-sm md:text-2xl font-black mb-2 md:mb-4 text-brand-slate tracking-tight group-hover:text-brand-indigo transition-colors duration-300 leading-tight">
        {title}
      </h3>
      <p className="text-slate-500 font-medium leading-snug md:leading-relaxed text-[10px] sm:text-xs md:text-base">
        {description}
      </p>
    </div>
    
    {/* Subtle bottom accent line */}
    <div className="absolute bottom-0 left-0 h-1 md:h-1.5 bg-gradient-to-r from-brand-indigo to-brand-violet w-0 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
  </div>
);

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the SVG stroke animation shortly after mounting
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "ISO 27001 certified platform ensuring your sensitive business data is always protected with bank-grade encryption and access controls."
    },
    {
      icon: Clock,
      title: "Fastest Turnaround",
      description: "Our streamlined processes and direct integration with government portals ensure your corporate registrations happen in record time."
    },
    {
      icon: Award,
      title: "Expert Oversight",
      description: "Get dedicated support from top-tier Chartered Accountants and Company Secretaries who review your filings with absolute precision."
    },
    {
      icon: Headphones,
      title: "Lifetime Compliance",
      description: "We don't just register your company; we manage your ongoing lifetime compliance footprint so you never face regulatory penalties."
    }
  ];

  return (
    <section className="py-16 md:py-36 bg-[#fffcfc] border-y border-slate-100/50 relative overflow-hidden">


      {/* Premium Ambient Background Textures */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-indigo/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-violet/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.02] [background-size:24px_24px] pointer-events-none"></div>

      <div className="container-custom relative z-10 px-3 md:px-8">

        {/* Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 mb-10 lg:mb-24">
          <div className="max-w-2xl px-2 md:px-0">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-brand-indigo/10 shadow-sm mb-4 md:mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-indigo animate-pulse"></span>
              <span className="text-brand-indigo font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">The Zoo Advantage</span>
            </div>

            {/* <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-tight font-black tracking-tight text-brand-slate animate-fade-up" style={{ animationDelay: "100ms" }}>
              Why visionary founders <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet">choose us.</span>
            </h2> */}
            <h2 className="flex flex-col sm:inline" style={{
              fontSize: "clamp(26px, 6vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: 16,
              fontFamily: "'Georgia', serif",
            }}>
              <span className="mr-2">Why visionary founders</span>
              <span style={{ color: "#FF6B2B", position: "relative", display: "inline-block", width: "fit-content" }}>
                choose us
                {/* Animated underline SVG */}
                <svg
                  viewBox="0 0 340 12"
                  style={{
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <path
                    d="M4 8 Q85 2 170 8 Q255 14 336 5"
                    stroke="#FF6B2B"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="340"
                    strokeDashoffset={visible ? "0" : "340"}
                    style={{
                      transition: "stroke-dashoffset 1s cubic-bezier(.22,1,.36,1) 0.4s",
                    }}
                  />
                </svg>
              </span>
            </h2>

          </div>

          <div className="max-w-md animate-fade-up px-2 md:px-0" style={{ animationDelay: "200ms" }}>
            <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed pl-4 md:pl-6 border-l-2 border-brand-indigo/20">
              We lead the way in digital corporate compliance with an unrelenting focus on speed, data security, and professional integrity.
            </p>
          </div>
        </div>

        {/* 2x2 Bento Feature Grid (Forced to 2-columns on mobile per user request) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} delay={100 * (index + 1)} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
