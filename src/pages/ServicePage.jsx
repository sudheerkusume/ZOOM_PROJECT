import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ChevronRight, ArrowRight, User, FileText, ShieldCheck, Calendar, TrendingUp, FileDown, FileKey, X, Activity } from 'lucide-react';

const IconMap = {
  User,
  FileText,
  ShieldCheck,
  Calendar,
  TrendingUp,
  FileDown,
  FileKey,
  CheckCircle2,
  Activity
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import StickyCTA from '../components/StickyCTA';
import LeadCaptureForm from '../components/LeadCaptureForm';

import { servicesData } from '../data/servicesData';

const ServicePage = () => {
  const { category, serviceSlug } = useParams();
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const service = servicesData[serviceSlug];

  // 404 Not Found State
  if (!service) {
    return (
      <div className="min-h-screen bg-[#fff8f4] flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 text-center px-4">
          <div className="w-24 h-24 bg-brand-slate/5 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-slate mb-4">Page Not Found</h1>
          <p className="text-lg text-slate-500 mb-8 max-w-md">
            We couldn't find the service you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/" className="btn-primary py-3 px-8">
            Return to Homepage
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const { seo, hero, whatsappPackageName, inclusions, requiredDocuments, features, pricing, faqs, relatedServices } = service;

  return (
    <div className="min-h-screen bg-[#fff8f4]">
      {/* Dynamic SEO */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <Navbar />

      <main className="relative">

        {/* HERO SECTION (Dark Theme) */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B101E] overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:32px_32px]"></div>

          <div className="container-custom relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest text-[10px]">
              <Link to="/" className="hover:text-brand-indigo transition-colors">ZOO Filings</Link>
              <ChevronRight size={12} />
              <span className="text-white">{category}</span>
              <ChevronRight size={12} />
              <span className="text-brand-indigo">{hero.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 pr-0 lg:pr-10">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 md:mb-6 min-h-[100px] md:min-h-[140px]">
                  <TypeAnimation
                    key={hero.title}
                    sequence={[
                      hero.title,
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    repeat={0}
                  />
                </h1>
                <p className="text-base md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-2xl">
                  {hero.description}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 sm:gap-8 mt-8 md:mt-10">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg sm:text-xl">4.8/5</span>
                    <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Trusted Rating</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
                    <span className="text-white font-bold text-lg sm:text-xl">100K+</span>
                    <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Happy Clients</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
                    <span className="text-white font-bold text-lg sm:text-xl">100%</span>
                    <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Secure</span>
                  </div>
                </div>

                {/* INCLUSIONS LIST */}
                {inclusions && inclusions.length > 0 && (
                  <div className="mt-12 space-y-5">
                    {inclusions.map((item, idx) => {
                      const Icon = IconMap[item.icon] || CheckCircle2;
                      return (
                        <div key={idx} className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-full border border-slate-700/60 bg-[#161b2b] flex items-center justify-center shrink-0 shadow-sm">
                            <Icon size={20} className="text-brand-indigo" />
                          </div>
                          <span className="text-slate-300 font-medium text-[1.1rem] tracking-wide">{item.title}</span>
                        </div>
                      )
                    })}

                    {/* Required Documents Modal Trigger */}
                    {requiredDocuments && requiredDocuments.length > 0 && (
                      <div
                        className="flex items-center gap-5 cursor-pointer group w-fit mt-2"
                        onClick={() => setIsDocsModalOpen(true)}
                      >
                        <div className="w-12 h-12 rounded-full border border-slate-700/60 bg-[#161b2b] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#c084fc]/10 transition-colors">
                          <FileDown size={20} className="text-[#c084fc]" />
                        </div>
                        <span className="text-[#c084fc] font-medium text-[1.1rem] tracking-wide underline underline-offset-4 decoration-[#c084fc]/40 group-hover:decoration-[#c084fc] transition-colors">
                          Required Documents
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Form */}
              <div className="lg:col-span-5 w-full">
                <LeadCaptureForm packageName={whatsappPackageName} />
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-slate mb-4 md:mb-6 tracking-tight">
                Simple packages. <br /><span className="text-brand-indigo">Transparent pricing.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-500">Pick the best plan for your business needs. No hidden fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pricing.map((plan, idx) => (
                <div key={idx} className={`relative flex flex-col p-6 md:p-8 rounded-3xl border ${plan.isPopular ? 'border-brand-indigo shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] scale-100 md:scale-105 z-10 bg-white' : 'border-slate-100 shadow-sm bg-slate-50/50'}`}>
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-indigo text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-1 px-3 md:px-4 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl font-bold text-brand-slate mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{plan.description}</p>



                  <div className={`w-full h-px ${plan.isPopular ? 'bg-brand-indigo/10' : 'bg-slate-200'} mb-6`}></div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Scroll to form on click */}
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-brand-indigo text-white hover:bg-brand-indigo/90 shadow-lg shadow-brand-indigo/25' : 'bg-white border-2 border-slate-200 text-brand-slate hover:border-brand-indigo hover:text-brand-indigo'}`}>
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES / BENEFITS SECTION */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 border-b">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-slate mb-10 md:mb-16 tracking-tight text-center">
              Why choose <span className="text-brand-indigo">{whatsappPackageName}</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-indigo/10 text-brand-indigo rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-brand-slate mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs SECTION */}
        {faqs && faqs.length > 0 && (
          <section className="py-20 md:py-32 bg-white">
            <div className="container-custom max-w-4xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-slate mb-8 md:mb-12 tracking-tight text-center">
                Frequently Asked <span className="text-brand-indigo">Questions</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-100 p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                    <summary className="flex items-center justify-between text-base md:text-xl font-bold text-brand-slate">
                      {faq.question}
                      <span className="transition group-open:rotate-180 bg-white p-2 rounded-full shadow-sm text-brand-indigo">
                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9" /></svg>
                      </span>
                    </summary>
                    <p className="text-sm md:text-base text-slate-500 mt-3 md:mt-4 leading-relaxed pr-6 md:pr-10">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RELATED SERVICES */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="py-16 md:py-24 bg-brand-slate text-white">
            <div className="container-custom">
              <h3 className="text-2xl font-bold mb-8">Related Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rs, idx) => (
                  <Link key={idx} to={rs.slug} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                    <span className="font-semibold text-lg">{rs.name}</span>
                    <ArrowRight size={20} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* REQUIRED DOCUMENTS MODAL */}
      {isDocsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity opacity-100" onClick={() => setIsDocsModalOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsDocsModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl md:text-3xl font-black text-brand-slate mb-6 pr-8 tracking-tight">Required Documents</h3>
            <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-brand-indigo" />
                  </div>
                  <span className="text-slate-700 font-medium leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button onClick={() => { setIsDocsModalOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="w-full btn-primary py-4">Got it, let's proceed</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default ServicePage;
