import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, Clock, ShieldCheck, Globe, Star } from 'lucide-react';

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

const ContactPage = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        
        const formData = new FormData(e.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
        
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const contactMethods = [
        {
            icon: <MapPin className="text-brand-indigo" size={24} />,
            title: "Visit Us",
            details: "Flat No: 405, Jaya Bharathi Apartments, Hyderabad - 500049",
            subDetails: "Nandini Nagar, Miyapur",
            link: "https://maps.google.com/?q=Flat+No+405+Jaya+Bharathi+Kalpana+Apartments+Hyderabad",
            label: "Get Directions"
        },
        {
            icon: <Phone className="text-brand-indigo" size={24} />,
            title: "Call Us",
            details: "+91 7731 45 4545",
            subDetails: "Alternative: 7721 45 4545",
            link: "tel:+917731454545",
            label: "Speak with Expert"
        },
        {
            icon: <Mail className="text-brand-indigo" size={24} />,
            title: "Email Us",
            details: "support@zoofilings.com",
            subDetails: "24/7 Support Available",
            link: "mailto:support@zoofilings.com",
            label: "Send an Email"
        }
    ];

    const socials = [
        { icon: <FacebookIcon size={18} />, name: "Facebook", url: "#" },
        { icon: <InstagramIcon size={18} />, name: "Instagram", url: "#" },
        { icon: <YoutubeIcon size={18} />, name: "YouTube", url: "#" },
        { icon: <LinkedinIcon size={18} />, name: "LinkedIn", url: "#" }
    ];

    return (
        <div className="min-h-screen bg-[#fafbfc] font-sans">
            <Navbar />

            <main className="pt-24 lg:pt-32">
                {/* Refined Centered Hero */}
                <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden text-center">
                    <div className="container-custom relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/5 border border-brand-indigo/10 text-brand-indigo font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
                                <MessageSquare size={12} className="fill-brand-indigo/20" />
                                <span>Get in Touch</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-slate mb-6 leading-[1.1] tracking-tight">
                                Let's build your <br />
                                <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">business legacy</span> together.
                            </h1>
                            <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                                Our team of legal and financial experts in Hyderabad is ready to assist you with company registration, GST, and compliance.
                            </p>
                        </div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05)_0%,transparent_50%)]"></div>
                </section>

                <section className="pb-24 lg:pb-32">
                    <div className="container-custom">
                        
                        {/* Horizontal Quick-Contact Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {contactMethods.map((method, idx) => (
                                <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-indigo/5 transition-all duration-500 text-center flex flex-col items-center">
                                    <div className="w-14 h-14 bg-brand-indigo/[0.03] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-brand-indigo">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-slate mb-2">{method.title}</h3>
                                    <p className="text-sm font-bold text-slate-600 mb-1">{method.details}</p>
                                    <p className="text-xs font-medium text-slate-400 mb-6">{method.subDetails}</p>
                                    <a 
                                        href={method.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-brand-indigo font-bold text-[11px] uppercase tracking-widest hover:gap-3 transition-all"
                                    >
                                        {method.label}
                                        <ArrowRight size={14} />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Centered Premium Inquiry Form */}
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-white p-8 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden group">
                                {/* Glassmorphism Background Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-indigo/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-110 transition-transform duration-1000"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full translate-y-32 -translate-x-32 group-hover:scale-110 transition-transform duration-1000"></div>
                                
                                <div className="relative z-10">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-black text-brand-slate mb-4">Send us a Message</h2>
                                        <p className="text-slate-500 font-medium max-w-md mx-auto">Fill out the form below and an expert will get back to you within 24 hours.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between ml-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <label>Full Name</label>
                                                </div>
                                                <input 
                                                    required 
                                                    name="name"
                                                    type="text" 
                                                    placeholder="John Doe"
                                                    className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between ml-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <label>Phone Number</label>
                                                </div>
                                                <input 
                                                    required 
                                                    name="phone"
                                                    type="tel" 
                                                    placeholder="+91 91773 14545"
                                                    className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between ml-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <label>Email Address</label>
                                                </div>
                                                <input 
                                                    required 
                                                    name="email"
                                                    type="email" 
                                                    placeholder="john@example.com"
                                                    className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between ml-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <label>Subject</label>
                                                </div>
                                                <div className="relative">
                                                    <select 
                                                        name="subject"
                                                        className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo outline-none transition-all font-semibold appearance-none cursor-pointer"
                                                    >
                                                        <option>Company Registration</option>
                                                        <option>GST & Taxation</option>
                                                        <option>Compliance & Filings</option>
                                                        <option>Others</option>
                                                    </select>
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                        <ArrowRight size={16} className="rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between ml-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                <label>Message Requirements</label>
                                            </div>
                                            <textarea 
                                                required 
                                                name="message"
                                                rows="5" 
                                                placeholder="Tell us about your business goals..."
                                                className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo outline-none transition-all font-semibold resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4">
                                            <button 
                                                type="submit"
                                                disabled={status === "sending"}
                                                className={`w-full py-6 rounded-3xl font-black text-white text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-brand-indigo/10 ${status === "sending" ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-indigo hover:bg-brand-violet hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-indigo/20'}`}
                                            >
                                                {status === "sending" ? "Processing..." : "Submit Inquiry"}
                                                <Send size={22} className={status === "sending" ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
                                            </button>
                                        </div>

                                        {status === "success" && (
                                            <div className="p-5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-center border border-emerald-100">
                                                Thank you! An expert will contact you shortly.
                                            </div>
                                        )}
                                        {status === "error" && (
                                            <div className="p-5 bg-rose-50 text-rose-700 rounded-2xl font-bold text-center border border-rose-100">
                                                Something went wrong. Please try again.
                                            </div>
                                        )}
                                    </form>

                                    {/* Trust & Socials Row */}
                                    <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                                        <div className="flex items-center gap-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-brand-indigo/5 flex items-center justify-center text-brand-indigo">
                                                    <Clock size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Office Hours</p>
                                                    <p className="text-xs font-bold text-brand-slate">Mon - Sat: 9 AM - 7 PM</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-500/5 flex items-center justify-center text-emerald-500">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Certified Advice</p>
                                                    <p className="text-xs font-bold text-brand-slate">CA/CS Expert Desk</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {socials.map((social) => (
                                                <a 
                                                    key={social.name} 
                                                    href={social.url}
                                                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-indigo hover:text-white hover:scale-110 transition-all border border-slate-100"
                                                    aria-label={social.name}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default ContactPage;
