import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Star, ShieldCheck, Clock, ChevronRight, Zap } from "lucide-react";

const services = [
  { name: "Business Registration", tag: "Most Popular", time: "3-5 days", color: "#f97316", emoji: "🏢" },
  { name: "GST Compliance", tag: "Fast Track", time: "1-2 days", color: "#ec4899", emoji: "📄" },
  { name: "MCA Compliance", tag: "Essential", time: "2-4 days", color: "#c026d3", emoji: "📘" },
  { name: "Income Tax Filing", tag: "Popular", time: "1-3 days", color: "#9333ea", emoji: "🧾" },
];

const words = ["Business", "Startup", "Company", "Brand"];

export default function Hero() {
  const [activeService, setActiveService] = useState(0);
  const [, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("Business");
  const [fading, setFading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const suggestions = ["GST", "PVT LTD", "Trademark", "LLP"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx(i => {
          const next = (i + 1) % words.length;
          setDisplayed(words[next]);
          return next;
        });
        setFading(false);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    const idx = services.findIndex(
      (s) => s.name.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q)
    );
    if (idx !== -1) setActiveService(idx);
  };

  return (
    <section className="relative min-h-[auto] overflow-hidden bg-gradient-to-b from-[#fff8f4] via-[#fff6f0] to-[#fff3ec] pt-24 pb-16 lg:pt-32 lg:pb-24 font-sans">
      {/* Abstract Background Visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-brand-indigo/10 hidden md:block" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-brand-indigo/5" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(249,115,22,0.12)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_80%_at_80%_40%,black_30%,transparent_80%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-br from-brand-indigo/5 to-transparent blur-3xl opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl w-full animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo font-bold text-[10px] uppercase tracking-wider mb-6 md:mb-8 mx-auto lg:mx-0 shadow-sm whitespace-nowrap">
              <Zap size={12} className="fill-brand-indigo" />
              <span>THE OPERATING SYSTEM FOR BUSINESS</span>
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-brand-slate mb-6 md:mb-8">
              Start Your {" "}
              <span className={`inline-block text-brand-indigo min-w-[200px] md:min-w-[220px] transition-all duration-300 relative ${fading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}>
                {displayed}
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full text-brand-indigo/40" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 5 Q25 0 50 5 Q75 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br /> with Confidence
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg">
              Register your company, file GST, and manage compliance easily.
              Trusted by <span className="text-brand-slate font-bold">100,000+ Founders</span> across India with expert legal support.
            </p>

            {/* Premium Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative group mb-8 md:mb-10 w-full"
              role="search"
            >
              <div className="absolute inset-y-0 left-0 pl-4 md:pl-6 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-brand-indigo transition-colors hidden sm:block" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search services (e.g. GST)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 sm:pl-14 pr-32 md:pr-40 py-4 md:py-5 bg-white border border-slate-200 rounded-[1rem] md:rounded-2xl shadow-sm focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all text-sm md:text-base font-semibold placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-indigo text-white px-5 md:px-8 rounded-[0.85rem] md:rounded-xl font-bold flex items-center gap-2 hover:bg-brand-violet transition-colors text-xs md:text-sm shadow-md"
              >
                <span className="hidden sm:inline">Search</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="px-3 py-1 md:py-1.5 rounded-full bg-white border border-slate-100 text-slate-600 text-[10px] md:text-[11px] font-bold tracking-widest hover:border-brand-indigo/30 hover:text-brand-indigo hover:shadow-sm transition-all"
                  onClick={() => setSearchQuery(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Trust Badges adapted for mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-2 md:gap-3 p-3 md:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-center xl:text-left">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-600 shrink-0">
                  <Star size={18} fill="currentColor" />
                </div>
                <div>
                  <div className="text-brand-slate font-black text-xs md:text-sm leading-tight mb-1">4.8/5 Review</div>
                  <div className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Trustpilot score</div>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-2 md:gap-3 p-3 md:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-center xl:text-left">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-brand-slate font-black text-xs md:text-sm leading-tight mb-1">ISO 27001</div>
                  <div className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Certified Secure</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL - DIGITAL ISLAND */}
          <div className="relative animate-fade-up w-full max-w-md mx-auto lg:max-w-none" style={{ animationDelay: "200ms" }}>
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-indigo text-white font-bold text-[9px] md:text-[10px] uppercase tracking-widest shadow-lg z-20 flex items-center gap-1.5 whitespace-nowrap">
              <Zap size={12} fill="white" />
              LIVE PRICING — NO HIDDEN FEES
            </div>

            <div className="relative bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 shadow-premium z-10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="p-3 md:p-4 pb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-[28px] font-extrabold text-brand-slate tracking-tight leading-none">Core Services</h3>
                  <p className="text-[11px] md:text-xs font-semibold text-slate-400 mt-1 md:mt-2">Get started instantly with expert help</p>
                </div>
                <button className="text-[11px] md:text-xs font-bold text-brand-indigo flex items-center gap-1 hover:underline whitespace-nowrap">
                  View All <ChevronRight size={14} />
                </button>
              </div>

              <div className="px-3 md:px-4 pb-2">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-[10px] md:text-[11px] font-bold whitespace-nowrap">Avg. TAT 48 hrs</span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] md:text-[11px] font-bold whitespace-nowrap">Success 98.9%</span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] md:text-[11px] font-bold whitespace-nowrap">24x7 Support</span>
                </div>
              </div>

              <div className="p-2 md:p-3 pt-1 space-y-1.5 md:space-y-2">
                {services.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={activeService === i}
                    className={`w-full text-left flex items-center gap-2.5 p-2.5 md:p-3 rounded-2xl transition-all border ${
                      activeService === i
                        ? "bg-brand-indigo/[0.06] border-brand-indigo/25 shadow-sm"
                        : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                    } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-indigo/15`}
                    onClick={() => setActiveService(i)}
                  >
                    <div
                      className={`w-1md:w-1.5 self-stretch rounded-full transition-colors ${
                        activeService === i ? "bg-brand-indigo" : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-lg md:text-xl shrink-0" style={{ backgroundColor: s.color + "15" }}>
                      {s.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm md:text-[15px] font-bold text-brand-slate leading-tight truncate">{s.name}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5 mt-1.5">
                        <span
                          className="text-[9px] md:text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0"
                          style={{ backgroundColor: s.color + "20", color: s.color }}
                        >
                          {s.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-bold text-slate-400 shrink-0">
                          <Clock size={12} />
                          <span>{s.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`hidden sm:block text-slate-300 transition-all ${activeService === i ? "text-brand-indigo translate-x-0" : "translate-x-0.5"}`}>
                      <ChevronRight size={18} />
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-2 md:p-3 mt-1 md:mt-2">
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 md:gap-3 items-center">
                  <button className="w-full py-3.5 md:py-4 bg-brand-indigo text-white rounded-xl md:rounded-2xl text-sm md:text-base font-bold flex items-center justify-center gap-2 hover:bg-brand-violet transition-all shadow-lg shadow-brand-indigo/20">
                    Register Now <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    className="w-full items-center justify-center py-3.5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white text-brand-slate text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-indigo/10"
                  >
                    Talk to an expert
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
