import React from 'react';
import { ShieldCheck, FileText, Globe, TrendingUp, Users, ArrowUpRight, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BentoGrid = () => {
  const navigate = useNavigate();

  const tiles = [
    {
      title: "Company Registration",
      desc: "Incorporate your Private Limited or LLP with full legal compliance in 10-15 days.",
      icon: <ShieldCheck size={28} />,
      tag: "Most Popular",
      span: "md:col-span-2 md:row-span-2",
      path: "/startup/private-limited",
      content: (
        <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
          <div className="flex items-center gap-3 p-3 md:p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <TrendingUp size={16} className="text-emerald-500" />
            <span className="text-[11px] md:text-xs font-bold text-slate-700">99.8% Approval Rate</span>
          </div>
          <div className="flex items-center gap-3 p-3 md:p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <Scale size={16} className="text-brand-indigo" />
            <span className="text-[11px] md:text-xs font-bold text-slate-700">Digital Signature Incl.</span>
          </div>
        </div>
      )
    },
    {
      title: "GST Compliance",
      desc: "Hassle-free GST registration and monthly filings with expert CA support.",
      icon: <FileText size={20} />,
      tag: "Essential",
      span: "md:col-span-2 md:row-span-1",
      path: "/gst/gst_registration"
    },
    {
      title: "Trademark Filing",
      desc: "Secure your brand identity with IP protection.",
      icon: <Globe size={20} />,
      span: "md:col-span-1 md:row-span-1",
      path: "/trademark/registration"
    },
    {
      title: "Real-time Metrics",
      desc: "100k+ Businesses",
      icon: <TrendingUp size={20} />,
      span: "md:col-span-1 md:row-span-1",
      content: <div className="mt-3 md:mt-4 text-2xl md:text-3xl font-black text-brand-indigo">12,000+</div>
    },
    {
      title: "Expert Consulting",
      desc: "Talk to CS/CA experts for complex structures.",
      icon: <Users size={20} />,
      span: "md:col-span-2 md:row-span-1",
      path: "/compliance/bookkeeping"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      {tiles.map((tile, idx) => (
        <div
          key={idx}
          onClick={() => tile.path && navigate(tile.path)}
          className={`relative p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-indigo/5 transition-all duration-300 group ${tile.span} ${tile.path ? 'cursor-pointer' : ''}`}
        >
          <div className="flex justify-between items-start mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-indigo/5 text-brand-indigo rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              {tile.icon}
            </div>
            {tile.tag && (
              <span className="px-3 py-1 rounded-full bg-brand-indigo/5 text-brand-indigo text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                {tile.tag}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3 text-brand-slate tracking-tight">
            {tile.title}
          </h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed">
            {tile.desc}
          </p>

          {tile.content && tile.content}

          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 text-slate-300 group-hover:text-brand-indigo transition-colors hidden sm:block">
            <ArrowUpRight size={20} className="md:w-6 md:h-6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
