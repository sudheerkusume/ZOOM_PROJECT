import React, { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="group border-b border-slate-100 last:border-0 transition-colors duration-300">
    <button
      type="button"
      className="w-full text-left py-5 md:py-8 flex items-center justify-between gap-4 md:gap-6"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <h3 className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 leading-snug md:leading-normal ${isOpen ? 'text-brand-indigo' : 'text-brand-slate group-hover:text-brand-indigo/60'}`}>
        {q}
      </h3>
      
      {/* Morphing Plus/Minus Icon */}
      <div className={`relative flex-none flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border transition-all duration-500 ${isOpen ? 'border-brand-indigo bg-brand-indigo/5' : 'border-slate-200 bg-slate-50 group-hover:border-brand-indigo/30'}`}>
         {/* Horizontal line */}
         <div className={`absolute w-2.5 md:w-3 h-[1.5px] rounded-full transition-all duration-500 ${isOpen ? 'bg-brand-indigo' : 'bg-slate-400 group-hover:bg-brand-indigo'}`} />
         {/* Vertical line */}
         <div className={`absolute w-[1.5px] h-2.5 md:h-3 rounded-full transition-all duration-400 ${isOpen ? 'rotate-90 opacity-0 bg-brand-indigo' : 'bg-slate-400 group-hover:bg-brand-indigo'}`} />
      </div>
    </button>

    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-60 md:max-h-96 opacity-100 mb-4 md:mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
      <p className="text-slate-500 font-medium leading-relaxed pr-8 md:pr-16 text-xs sm:text-sm md:text-lg">
        {a}
      </p>
    </div>
  </div>
);

export default function FaqSection() {
  const items = useMemo(
    () => [
      {
        q: "How does your compliance process work?",
        a: "You choose a service, we guide you through the required inputs, and we generate drafts and filing steps with clear status updates at every milestone.",
      },
      {
        q: "Do I need to have all documents ready before I start?",
        a: "Not at all. We help you understand exactly what is needed, and our platform allows you to securely upload missing details later so you can move forward immediately.",
      },
      {
        q: "Can I track the status of my filing?",
        a: "Absolutely. You get a structured dashboard with real-time progress updates so you always know what is done, what is pending, and what step comes next.",
      },
      {
        q: "Is the documentation process secure?",
        a: "Yes. We follow strict, bank-level secure handling practices and keep an audit-friendly record of actions to ensure your business data is absolutely private.",
      },
      {
        q: "Do you support GST monthly filings?",
        a: "We provide comprehensive workflow support for monthly filings and help reduce human errors with guided steps, automated reconciliations, and timely reminders.",
      },
    ],
    []
  );

  // Initialize with the first item open
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-32 bg-white relative">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          
          {/* Left Column: Title Context */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 md:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50 mb-4 md:mb-6">
                <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-indigo" />
                <span className="text-brand-slate font-bold text-[9px] md:text-[10px] uppercase tracking-widest">Support FAQ</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-slate tracking-tight leading-tight md:leading-tight mb-4 md:mb-6">
                Common <br className="hidden lg:block"/> Questions.
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                Everything you need to know about our corporate registration and tax compliance services. Can't find the answer you're looking for? Check out our documentation or contact support.
              </p>
            </div>
          </div>

          {/* Right Column: Sleek Accordion */}
          <div className="lg:w-2/3">
            <div className="border-t border-slate-100">
              {items.map((it, idx) => (
                <FaqItem
                  key={it.q}
                  q={it.q}
                  a={it.a}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

