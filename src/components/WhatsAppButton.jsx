import React, { useState } from 'react';
import { X } from 'lucide-react';

// Authentic WhatsApp SVG Path
const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = "9177314545";
  const message = "Hi ZOO Team, I'd like to know more about your registration and compliance services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[95] flex flex-col items-end gap-2 md:gap-3 group">
      {showTooltip && (
        <div className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4 animate-fade-up">
           <div className="flex-1">
             <p className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Need Help?</p>
             <p className="text-xs md:text-sm font-black text-brand-slate whitespace-nowrap">Chat with our experts</p>
           </div>
           <button onClick={() => setShowTooltip(false)} className="p-1 md:p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
             <X className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
           </button>
        </div>
      )}
      
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <span className="absolute inset-0 bg-[#25D366] rounded-xl md:rounded-[1.5rem] animate-ping opacity-25"></span>
        <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
