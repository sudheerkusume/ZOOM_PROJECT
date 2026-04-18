import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ChevronRight, Search } from 'lucide-react';
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Startup',
      href: '/startup',
      subLinks: [
        { name: 'Proprietorship', href: '/startup/proprietorship' },
        { name: 'Partnership', href: '/startup/partnership' },
        { name: 'One Person Company', href: '/startup/opc' },
        { name: 'Limited Liability Partnership', href: '/startup/llp' },
        { name: 'Private Limited Company', href: '/startup/private-limited' },
        { name: 'Section 8 Company', href: '/startup/section-8' },
        { name: 'Trust Registration', href: '/startup/trust' },
        { name: 'Public Limited Company', href: '/startup/public-limited' },
        { name: 'Producer Company', href: '/startup/producer' },
        { name: 'Indian Subsidiary', href: '/startup/indian-subsidiary' }
      ]
    },
    {
      name: 'Registrations',
      href: '/registrations',
      subLinks: [
        { name: 'Trade License', href: '/registrations/trade-license' },
        { name: 'FSSAI Registration', href: '/registrations/fssai' },
        { name: '12A and 80G Registration', href: '/registrations/12a-80g' },
        { name: 'Udyam Registration', href: '/registrations/udyam' },
        { name: 'Shop Act Registration', href: '/registrations/shop-act' }
      ]
    },
    {
      name: 'Trademark',
      href: '/trademark',
      subLinks: [
        { name: 'Trademark Registration', href: '/trademark/registration' },
        { name: 'Trademark Certificate', href: '/trademark/certificate' }
      ]
    },
    {
      name: 'GST',
      href: '/gst',
      subLinks: [
        { name: 'GST Registration', href: '/gst/gst_registration' },
        { name: 'GST Return Filing by Accountant', href: '/gst/rfba' },
        { name: 'GST LUT Form', href: '/gst/lut' },
        { name: 'GST Notice', href: '/gst/notice' },
        { name: 'GST Annual Return Filing (GSTR-9)', href: '/gst/arf' },
        { name: 'GST Registration for Foreigners', href: '/gst/rff' },
        { name: 'GST Amendment', href: '/gst/amendment' },
        { name: 'GST Revocation', href: '/gst/recovation' },
        { name: 'GSTR - 10', href: '/gst/gstr-10' },
        { name: 'Virtual Office + GSTIN', href: '/gst/vog' },
      ]
    },
    {
      name: 'Income Tax',
      href: '/incometax',
      subLinks: [
        { name: 'Income Tax E-Filing', href: '/incometax/e-filing' },
        { name: 'Business Tax Filing', href: '/incometax/business-tax-filing' },
        { name: 'Partnership Firm / LLP ITR', href: '/incometax/partnership-firm-llp-itr' },
        { name: 'Company ITR Filing', href: '/incometax/company-itr-filing' },
        { name: 'Trust / NGO Tax Filing', href: '/incometax/trust-ngo-tax-filing' },
        { name: '15CA - 15CB Filing', href: '/incometax/15ca-15cb-filing' },
        { name: 'TAN Registration', href: '/incometax/tan-registration' },
        { name: 'TDS Return Filing', href: '/incometax/tds-return-filing' },
        { name: 'Income Tax Notice', href: '/incometax/income-tax-notice' },
        { name: 'Revised ITR Return (ITR-U)', href: '/incometax/Revised' }
      ]
    },
    {
      name: 'MCA',
      href: '/mca',
      subLinks: [
        { name: 'Company Compliance', href: '/mca/company' },
        { name: 'LLP Compliance', href: '/mca/llp' },
        { name: 'OPC Compliance', href: '/mca/opc' },
        { name: 'Name Change-Company', href: '/mca/ncc' },
        { name: 'Registered Office Change', href: '/mca/roc' },
        { name: 'DIN eKYC Filing', href: '/mca/def' },
        { name: 'DIN Reactivation', href: '/mca/dr' },
        { name: 'Director Change', href: '/mca/dc' },
        { name: 'Remove Director', href: '/mca/rd' },
        { name: 'ADT - 1 Filing', href: '/mca/adt' },
        { name: 'DPT - 3 Filing', href: '/mca/dpt' },
        { name: 'LLP Form 11 Filing', href: '/mca/llp' },
        { name: 'Dormant Status Filing', href: '/mca/dsf' },
        { name: 'MOA Amendment', href: '/mca/moa' },
        { name: 'AOA Amendment', href: '/mca/aoa' },
        { name: 'Authorized Capital Increase', href: '/mca/aci' },
        { name: 'Share Transfer', href: '/mca/sf' },
        { name: 'Demat of Shares', href: '/mca/dos' },
        { name: 'Winding Up - LLP', href: '/mca/llp' },
        { name: 'Winding Up - Company', href: '/mca/company' },
        { name: 'Commencement (INC - 20A)', href: '/mca/commencement' },
        { name: 'CCFS Scheme', href: '/mca/ccfs' }
      ]
    },
    {
      name: 'Compliance',
      href: '/compliance',
      subLinks: [
        { name: 'Business Plan', href: '/compliance/business' },
        { name: 'HR & Payroll', href: '/compliance/hr' },
        { name: 'Bookkeeping', href: '/compliance/bookkeeping' }
      ]
    },
    {
      name: 'Global',
      href: '/global',
      subLinks: [
        { name: 'UAE Company', href: '/global/uae' },
        { name: 'USA Company', href: '/global/usa' },
        { name: 'Singapore Company', href: '/global/singapore' },
        { name: 'UK Company', href: '/global/uk' },
        { name: 'Ajman Free Zone', href: '/global/afz' }
      ]
    },

  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group cursor-pointer">
            <img src={logo} className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" alt="ZOO Logo" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `flex items-center gap-1 font-semibold text-sm transition-colors py-2 uppercase tracking-widest text-[11px] ${isActive ? 'text-brand-indigo' : 'text-brand-slate/80 hover:text-brand-indigo'}`}
                >
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform opacity-50" />
                </NavLink>
                {/* Dropdown Mega-Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white shadow-2xl rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-7 border border-slate-100 mt-2 z-50">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.href}
                        className={({ isActive }) => `flex items-center justify-between text-[12px] font-medium transition-all group/sub py-1 ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-500 hover:text-brand-indigo'}`}
                      >
                        {sub.name}
                        <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-brand-indigo" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* <button className="p-2 text-brand-slate/60 hover:text-brand-indigo transition-colors">
              <Search size={20} />
            </button> */}
            <NavLink to="/get-started" className="btn-primary py-3 px-6 text-sm">
              Contact
              <ArrowRight size={14} />
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-3 text-brand-slate bg-slate-50 rounded-2xl transition-all active:scale-95" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Full-screen Mobile Menu */}
        <div className={`fixed inset-0 bg-brand-slate z-[200] transition-all duration-700 flex flex-col ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/10">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logo} className="h-10 w-auto object-contain brightness-0 invert" alt="ZOO Logo" />
            </NavLink>
            <button onClick={() => { setIsMobileMenuOpen(false); setActiveAccordion(null); }} className="p-3 text-white bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <ul className="space-y-2 md:space-y-4">
              {navLinks.map((link, idx) => (
                <li key={link.name} className={`transition-all duration-500 delay-[${idx * 100}ms] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center justify-between group py-3 px-4 rounded-2xl hover:bg-white/5">
                    <NavLink
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `text-xl md:text-2xl font-bold transition-colors ${isActive ? 'text-brand-indigo' : 'text-white hover:text-brand-indigo'}`}
                    >
                      {link.name}
                    </NavLink>
                    <button onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)} className="p-2">
                      <ChevronDown size={20} className={`transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180 text-brand-indigo' : 'text-white opacity-40'}`} />
                    </button>
                  </div>

                  {/* Accordion Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === idx ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2 pl-4 mt-2">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <NavLink
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) => `text-base font-medium transition-colors flex items-center gap-3 py-2 px-4 rounded-xl hover:bg-white/5 group/sub ${isActive ? 'text-white bg-white/5' : 'text-white/50 hover:text-white'}`}
                          >
                            <div className="w-1 h-1 rounded-full bg-brand-indigo opacity-0 group-hover/sub:opacity-100 transition-opacity"></div>
                            {sub.name}
                            <ChevronRight size={14} className="opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all ml-auto" />
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 border-t border-white/10 flex flex-col gap-4">
            <NavLink to="/get-started" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center py-4 text-lg shadow-xl shadow-brand-indigo/20 ring-2 ring-brand-indigo/5">Get Started Now</NavLink>
            <p className="text-center text-white/40 text-xs font-medium uppercase tracking-widest">Trusted by 100,000+ businesses</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
