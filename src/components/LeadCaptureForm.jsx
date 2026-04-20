import React, { useState } from 'react';
import { indianStates } from '../data/states';

const LeadCaptureForm = ({ packageName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.state) newErrors.state = "Please select a state";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');

      try {
        // Construct WhatsApp Message
        const message = `🚀 *New Lead: ${packageName}*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*State:* ${formData.state}`;

        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp directly
        const whatsappNumber = "9177509985";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Mark form as successfully submitted natively 
        setIsSubmitted(true);
      } catch (err) {
        setSubmitError('Failed to process request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-800 p-8 rounded-3xl border border-green-500/30 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-slate-300 text-lg">Your form was successfully submitted.</p>
        <p className="text-slate-400 mt-4">We received your details safely! Our team will contact you shortly.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-[#c084fc] hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-brand-indigo/30 rounded-full blur-3xl pointer-events-none"></div>

      <h3 className="text-2xl font-bold text-white mb-6">Start Your {packageName}</h3>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-all`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="phone">Phone Number *</label>
          <div className="flex">
            <span className="inline-flex items-center px-4 bg-slate-900 border border-r-0 border-white/10 rounded-l-xl text-slate-400">
              +91
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`flex-1 w-full bg-slate-900 border ${errors.phone ? 'border-red-500' : 'border-white/10'} text-white rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-all`}
              placeholder="9876543210"
            />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="state">Select State *</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full bg-slate-900 border ${errors.state ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-all appearance-none`}
          >
            <option value="" disabled>Select a state</option>
            {indianStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
        </div>

        {submitError && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl text-sm mt-4">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          )}
          {isSubmitting ? 'Sending Details...' : 'Submit Details'}
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
