import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Linkedin, ArrowRight, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        
        const formData = new FormData(e.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Should be handled via props or env if possible, but keeping consistent with existing pattern
        
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

    const contactInfo = [
        {
            icon: <MapPin className="text-brand-indigo" size={24} />,
            title: "Our Headquarters",
            details: "Flat No: 405, Jaya Bharathi Kalpana Apartments, Nandini Nagar, Indira Nagar Colony, Hafeezpet, Miyapur, Hyderabad - 500049.",
            link: "https://maps.google.com/?q=Flat+No+405+Jaya+Bharathi+Kalpana+Apartments+Hyderabad",
            label: "Get Directions"
        },
        {
            icon: <Phone className="text-brand-indigo" size={24} />,
            title: "Phone Support",
            details: "+91 7731 45 45 / +91 7721 45 45",
            link: "tel:+917731454545",
            label: "Call Now"
        },
        {
            icon: <Mail className="text-brand-indigo" size={24} />,
            title: "Email Inquiry",
            details: "support@zoofilings.com",
            link: "mailto:support@zoofilings.com",
            label: "Send Email"
        }
    ];

    const socials = [
        { icon: <Facebook size={20} />, name: "Facebook", url: "#" },
        { icon: <Instagram size={20} />, name: "Instagram", url: "#" },
        { icon: <Youtube size={20} />, name: "YouTube", url: "#" },
        { icon: <Linkedin size={20} />, name: "LinkedIn", url: "#" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="pt-24 lg:pt-32">
                {/* Hero Section */}
                <section className="relative py-16 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10"></div>
                    <div className="container-custom relative">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo font-bold text-[10px] uppercase tracking-wider mb-8 shadow-sm">
                                <MessageSquare size={12} className="fill-brand-indigo" />
                                <span>Get in Touch</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-slate mb-8 leading-[1.1] tracking-tight">
                                Let's build your <br />
                                <span className="text-brand-indigo">business legacy</span> together.
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                                Have questions about company registration, GST, or compliance? Our team of legal and financial experts in Hyderabad is ready to assist you.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pb-24">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                            
                            {/* Left Column: Info Cards */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="grid gap-6">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="group p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-indigo/5 transition-all duration-500">
                                            <div className="w-12 h-12 bg-brand-indigo/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                {info.icon}
                                            </div>
                                            <h3 className="text-xl font-black text-brand-slate mb-3">{info.title}</h3>
                                            <p className="text-slate-500 font-medium leading-relaxed mb-6">{info.details}</p>
                                            <a 
                                                href={info.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-brand-indigo font-bold text-sm hover:underline"
                                            >
                                                {info.label}
                                                <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="p-8 bg-brand-slate rounded-[2.5rem] text-white">
                                    <h3 className="text-xl font-bold mb-6">Follow our journey</h3>
                                    <div className="flex gap-4">
                                        {socials.map((social) => (
                                            <a 
                                                key={social.name} 
                                                href={social.url}
                                                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-indigo hover:scale-110 transition-all"
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">@zoofilings on all platforms</p>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="lg:col-span-7">
                                <div className="bg-white p-6 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                                    {/* Decorative element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full -translate-y-16 translate-x-16"></div>
                                    
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-black text-brand-slate mb-4">Send us a Message</h2>
                                        <p className="text-slate-500 font-medium mb-10">Fill out the form below and an expert will get back to you within 24 hours.</p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                    <input 
                                                        required 
                                                        name="name"
                                                        type="text" 
                                                        placeholder="John Doe"
                                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                    <input 
                                                        required 
                                                        name="phone"
                                                        type="tel" 
                                                        placeholder="+91 99999 99999"
                                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <input 
                                                    required 
                                                    name="email"
                                                    type="email" 
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all font-semibold"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                                <select 
                                                    name="subject"
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all font-semibold appearance-none"
                                                >
                                                    <option>Company Registration</option>
                                                    <option>GST & Taxation</option>
                                                    <option>Compliance & Filings</option>
                                                    <option>Others</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">How can we help?</label>
                                                <textarea 
                                                    required 
                                                    name="message"
                                                    rows="4" 
                                                    placeholder="Tell us about your requirements..."
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-indigo/10 focus:border-brand-indigo outline-none transition-all font-semibold resize-none"
                                                ></textarea>
                                            </div>

                                            <button 
                                                type="submit"
                                                disabled={status === "sending"}
                                                className={`w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-indigo/20 ${status === "sending" ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-indigo hover:bg-brand-violet hover:-translate-y-1'}`}
                                            >
                                                {status === "sending" ? "Sending..." : "Submit Inquiry"}
                                                <Send size={20} />
                                            </button>

                                            {status === "success" && (
                                                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-center border border-emerald-100 animate-in fade-in zoom-in">
                                                    Thank you! We'll get back to you shortly.
                                                </div>
                                            )}
                                            {status === "error" && (
                                                <div className="p-4 bg-rose-50 text-rose-700 rounded-xl font-bold text-center border border-rose-100 animate-in fade-in zoom-in">
                                                    Something went wrong. Please try again.
                                                </div>
                                            )}
                                        </form>

                                        <div className="mt-12 pt-8 border-t border-slate-50 grid grid-cols-2 gap-8">
                                            <div className="flex items-center gap-3">
                                                <Clock className="text-brand-indigo" size={20} />
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Office Hours</p>
                                                    <p className="text-xs font-bold text-brand-slate">Mon - Sat: 9 AM - 7 PM</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck className="text-emerald-500" size={20} />
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Expert</p>
                                                    <p className="text-xs font-bold text-brand-slate">Authorized CA/CS Advice</p>
                                                </div>
                                            </div>
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
