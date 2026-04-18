import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PricingCard = ({ title, price, features, highlighted }) => (
  <div className={`p-4 sm:p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border h-full flex flex-col transition-all duration-300 ${highlighted ? 'border-brand-indigo bg-brand-indigo/5 shadow-xl shadow-brand-indigo/10' : 'border-slate-100 bg-white hover:border-brand-indigo/30'}`}>
    <h3 className="text-sm sm:text-base md:text-xl font-black text-brand-slate mb-3 md:mb-6">{title}</h3>

    <div className="space-y-2.5 md:space-y-4 mb-4 md:mb-8 flex-grow">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start md:items-center gap-2 md:gap-3">
          <CheckCircle2 className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 mt-[2px] md:mt-0 ${highlighted ? 'text-brand-indigo' : 'text-emerald-500'}`} />
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-600 leading-tight">{feature}</span>
        </div>
      ))}
    </div>

    <button className={`w-full py-2.5 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-1.5 md:gap-2 transition-all text-xs md:text-base ${highlighted ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20 hover:bg-brand-violet' : 'bg-slate-50 text-brand-slate hover:bg-slate-100'}`}>
      Select
      <ArrowRight className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
    </button>
  </div>
);

const PricingPreview = () => {
  const plans = [
    {
      title: "Pvt Ltd Startup",
      features: ["2 DIN & DSC", "Standard MOA/AOA", "PAN & TAN Application", "PF/ESI Registration"],
      highlighted: true
    },
    {
      title: "GST Compliance",
      features: ["Monthly Filings", "GSTR-1 & 3B", "Reconciliation Report", "Unlimited Consults"],
      highlighted: false
    },
    {
      title: "Trademark Filing",
      features: ["Brand Name Search", "Filing & Drafting", "MSME Discounts", "Status Tracking"],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom px-3 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 text-brand-slate tracking-tight">Transparent Pricing, <br className="hidden sm:block"/> <span className="text-brand-indigo">No Surprises.</span></h2>
          <p className="text-sm md:text-lg text-slate-500 font-medium px-2">Join 100K+ founders who trust our straightforward professional fees starting at just ₹499.</p>
        </div>

        {/* explicitly grid-cols-2 per user request, handling dynamic spanning for odd card out */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
             <div key={idx} className={idx === 2 ? "col-span-2 md:col-span-1" : "col-span-1"}>
               <PricingCard {...plan} />
             </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[9px] md:text-sm font-bold text-slate-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span>Trusted Infrastructure</span>
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-200 hidden sm:block"></span>
            <span>100% Online Process</span>
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-200 hidden sm:block"></span>
            <span>CA/CS Support</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
