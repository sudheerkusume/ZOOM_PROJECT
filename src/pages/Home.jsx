import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import PricingPreview from '../components/PricingPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatsAppButton from '../components/WhatsAppButton';
import StickyCTA from '../components/StickyCTA';
import Footer from '../components/Footer';
import ClientsLogos from '../components/ClientsLogos';
import JuneAiSection from '../components/JuneAiSection';
import ComplianceSolutionSection from '../components/ComplianceSolutionSection';
import PartnersLogos from '../components/PartnersLogos';
import FaqSection from '../components/FaqSection';
import { ArrowRight, Zap, Star, ShieldCheck, Users } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import background from '../assets/background.jpg';

const Counter = ({ target, duration = 3000 }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const end = parseFloat(target);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(easedProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  const isDecimal = target.toString().includes('.');
  return <span ref={elementRef}>{isDecimal ? count.toFixed(1) : Math.floor(count)}</span>;
};

const StatCard = ({ label, value, icon: Icon }) => {
  // Enhanced parser to preserve text order around the number
  const numMatch = value.match(/(\d+(\.\d+)?)/);
  if (!numMatch) return null;

  const targetNum = numMatch[0];
  const parts = value.split(targetNum);
  const prefix = parts[0];
  const suffix = parts[1];

  return (
    <div className="group flex flex-col items-center p-4 md:p-5 bg-white rounded-[1.25rem] md:rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-indigo/5 text-brand-indigo rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:bg-brand-indigo/10 transition-all duration-500 shrink-0">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <p className="font-display text-lg sm:text-xl md:text-2xl font-black text-brand-slate mb-0.5 md:mb-1 tracking-tight text-center leading-none">
        {prefix}
        <Counter target={targetNum} />
        {suffix}
      </p>
      <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1 md:mt-2 text-center max-w-[90%] leading-tight">{label}</p>
    </div>
  );
};

const Home = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fff8f4]">
      <Navbar />

      <main className="relative">
        {/* HERO SECTION */}
        <Hero />

        {/* TRUST STATS SECTION */}
        <section className="pb-16 md:pb-24 pt-0 section-muted">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <StatCard icon={Users} label="Active Users" value="100K+" />
              <StatCard icon={Star} label="Trust Score" value="4.9/5" />
              <StatCard icon={ShieldCheck} label="Secure" value="ISO 27001" />
              <StatCard icon={Zap} label="Speed" value="24h Turnaround" />
            </div>
          </div>
        </section>

        {/* CLIENTS STRIP */}
        <ClientsLogos />

        {/* SERVICES (BENTO GRID) SECTION */}
        <section className="relative overflow-hidden py-16 md:py-32 bg-[#fafafc]">
          {/* Premium Background Atmosphere */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
            {/* Background Image with Overlay and Blend Mode */}
            <div
              className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            />

            {/* Abstract Glowing Orbs (Premium SaaS Feel) */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full bg-gradient-to-br from-orange-400/20 to-orange-200/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[60%] rounded-full bg-gradient-to-tl from-indigo-500/10 to-indigo-300/5 blur-[140px]" />

            {/* Elegant Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzIgMGgtMnY3MmgyeXpNMCAwcjJoNzJ2LTJ6IiBmaWxsPSJyZ2JhKDAsMCwwLDAuMDM1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] bg-[length:72px_72px]" />

            {/* Soft fade-outs at the top and bottom edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fafafc] via-transparent to-transparent h-32" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#fafafc] via-transparent to-transparent h-32" />
          </div>

          <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
              <div
                ref={ref}
                className="w-full"
                style={{
                  maxWidth: 600,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.7s cubic-bezier(.22,1,.36,1)",
                }}
              >
                {/* Pill Badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 14px", borderRadius: 100,
                  background: "#FF6B2B0f", border: "1px solid #FF6B2B33",
                  marginBottom: 16,
                  boxShadow: "0 0 20px rgba(255,107,43,0.1) inset"
                }}>
                  <span style={{ fontSize: 11 }}>⚡</span>
                  <span style={{
                    fontSize: 9, fontWeight: 800, letterSpacing: "0.16em",
                    textTransform: "uppercase", color: "#FF6B2B",
                    fontFamily: "sans-serif",
                  }}>
                    Our Expertise
                  </span>
                </div>

                {/* Headline */}
                <h2 style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#0f172a",
                  marginBottom: 16,
                  fontFamily: "'Georgia', serif",
                }}>
                  Premium Solutions for{" "}
                  <span style={{ color: "#FF6B2B", position: "relative", display: "inline-block" }}>
                    Modern Founders
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

                {/* Description */}
                <p style={{
                  fontSize: 16, color: "#64748b", lineHeight: 1.7,
                  fontWeight: 400, maxWidth: 480,
                  fontFamily: "sans-serif",
                  marginTop: 20,
                }}>
                  The all-in-one compliance ecosystem to build, register, and protect your brand name globally.
                </p>
              </div>
              <a href="#" className="btn-secondary py-3.5 md:py-4 px-6 md:px-8 w-full md:w-auto text-center justify-center whitespace-nowrap shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1">
                Browse All Services
                <ArrowRight size={18} />
              </a>
            </div>
            <BentoGrid />
          </div>
        </section>

        {/* AI + COMPLIANCE SECTIONS */}
        <JuneAiSection />

        <ComplianceSolutionSection />

        <PartnersLogos />

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* PRICING HINT SECTION */}
        <PricingPreview />

        {/* WHY CHOOSE US SECTION */}
        <WhyChooseUs />

        {/* FAQ SECTION */}
        <FaqSection />

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-36 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-3 sm:mx-8 mb-16 md:mb-24 bg-[#0B101E] shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-slate-800 group">
          
          {/* Massive Abstract Floating Orbs */}
          <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-brand-indigo/20 rounded-full blur-[100px] md:blur-[140px] mix-blend-screen group-hover:bg-brand-indigo/30 transition-colors duration-1000"></div>
          <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] bg-brand-violet/10 rounded-full blur-[100px] md:blur-[160px] mix-blend-screen group-hover:bg-brand-violet/20 transition-colors duration-1000"></div>
          
          {/* Subtle Grid Overlay for tech feel */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px] md:[background-size:40px_40px] mix-blend-screen"></div>

          <div className="container-custom relative z-10 text-center px-4 md:px-0">
            <div className="max-w-4xl mx-auto">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 mb-6 md:mb-8 backdrop-blur-md">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                <span className="text-white/80 font-bold text-[9px] md:text-[11px] uppercase tracking-[0.2em]">Incorporating Daily</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-4 md:mb-8 tracking-tighter leading-[1.05]">
                Ready to build <br className="hidden sm:block" /> your <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet drop-shadow-[0_0_60px_rgba(249,115,22,0.4)] mt-1 sm:mt-0">legacy?</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 mb-8 md:mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
                Join thousands of founders who use a simpler, faster way to start and stay compliant. Begin your journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <button className="group/btn relative px-6 py-4 md:px-10 md:py-6 bg-white text-[#0B101E] font-black rounded-xl md:rounded-2xl text-base md:text-xl w-full sm:w-auto shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 border border-white">
                  Launch My Startup
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-4 ring-white/10 group-hover/btn:ring-white/30 transition-all duration-500 scale-105 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-100"></div>
                </button>
                <button className="px-6 py-4 md:px-10 md:py-6 rounded-xl md:rounded-2xl border-2 border-slate-700/50 bg-slate-800/30 text-white font-bold hover:bg-brand-indigo/10 hover:border-brand-indigo/30 transition-all duration-300 text-base md:text-xl w-full sm:w-auto backdrop-blur-md">
                  Talk to a CS Expert
                </button>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default Home;
