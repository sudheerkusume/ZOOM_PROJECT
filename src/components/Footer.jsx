import React from 'react';
import { Send, Play, Camera, Mail, Phone, Briefcase } from 'lucide-react';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  const footerLinks = {
    "ZOO": ["About Us", "Learning Center", "News", "Careers", "Contact Us", "Reviews"],
    "Platforms": ["Business Search", "Trademark Search", "GST Search", "Udyam Search", "PAN Search", "Pricing"],
    "Usage": ["Terms & Conditions", "Privacy Policy", "Refund Policy", "Confidentiality", "Disclaimer", "Security"],
    "Compliance": ["GST Filing", "Income Tax Filing", "ROC Compliance", "Annual Filing", "TDS Filing", "Payroll Management"]
  };

  return (
    <footer className="pt-24 pb-12 bg-brand-slate text-white border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo1} alt="ZOO" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">ZOO</span>
            </div>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
              A modern compliance and registrations experience for founders. Simple steps, clear status updates, and expert support when you need it.
            </p>
            <div className="flex gap-4">
              {[Send, Briefcase, Camera, Play].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-indigo transition-all duration-300 group">
                  <Icon size={20} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="animate-fade-up">
              <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-[0.2em] opacity-40">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-brand-indigo text-sm font-medium transition-colors inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2 hover:text-brand-indigo transition-colors cursor-pointer">
                <Mail size={16} className="text-brand-indigo" />
                <span>support@zoo.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-brand-indigo transition-colors cursor-pointer">
                <Phone size={16} className="text-brand-indigo" />
                <span>+91 1800 123 4567</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
                &copy; 2026 ZOO. All rights reserved. <br className="md:hidden" />
                <span className="mx-2 hidden md:inline opacity-20">|</span>
                Your Compliance Partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
