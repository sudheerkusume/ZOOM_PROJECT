import React from 'react';
import { Mail, Phone } from 'lucide-react';
import logo1 from '../assets/logo1.png';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.88 23 12 23 12s0-3.88-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const footerLinks = {
    "ZOO": ["About Us", "Learning Center", "News", "Careers", "Contact Us", "Reviews"],
    "Platforms": ["Business Search", "Trademark Search", "GST Search", "Udyam Search", "PAN Search", "Pricing"],
    "Usage": ["Terms & Conditions", "Privacy Policy", "Refund Policy", "Confidentiality", "Disclaimer", "Security"],
    "Compliance": ["GST Filing", "Income Tax Filing", "ROC Compliance", "Annual Filing", "TDS Filing", "Payroll Management"]
  };

  const socials = [
    { icon: FacebookIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: YoutubeIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" }
  ];

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
              {socials.map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-indigo transition-all duration-300 group">
                  <social.icon size={20} className="text-slate-400 group-hover:text-white" />
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
                <span>support@zoofilings.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-brand-indigo transition-colors cursor-pointer">
                <Phone size={16} className="text-brand-indigo" />
                <span>+91 7731 45 4545 / 7721 45 4545</span>
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
