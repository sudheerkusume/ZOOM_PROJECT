import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ChevronRight, Search } from 'lucide-react';
import { navLinks } from '../data/navLinks';
import logo from "../assets/Mainlogo.png"

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



  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group cursor-pointer">
            <img src={logo} className="h-10 md:h-18 md:-ml-4 -my-3 md:-my-4 w-auto object-contain transition-transform group-hover:scale-105" alt="ZOO Logo" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link, index) => (
              <div key={link.name} className="group relative">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `flex items-center gap-1 font-semibold text-sm transition-colors py-2 uppercase tracking-widest text-[11px] ${isActive ? 'text-brand-indigo' : 'text-brand-slate/80 hover:text-brand-indigo'}`}
                >
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform opacity-50" />
                </NavLink>
                {/* Dropdown Mega-Menu */}
                <div className={`absolute top-full w-[480px] bg-white shadow-2xl rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-7 border border-slate-100 mt-2 z-50 ${index <= 2 ? 'left-0' :
                  index >= navLinks.length - 2 ? 'right-0' :
                    'left-1/2 -translate-x-1/2'
                  }`}>
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
            <NavLink to="/contact" className="btn-primary py-3 px-6 text-sm">
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
              <img src={logo} className="h-16 -my-3 w-auto object-contain brightness-0 invert" alt="ZOO Logo" />
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
