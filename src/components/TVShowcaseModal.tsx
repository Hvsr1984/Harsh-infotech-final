import React from 'react';
import { X, ShoppingBag, ShieldCheck, Award, HelpCircle, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { TVItem } from './TVCatalog.tsx';

interface TVShowcaseModalProps {
  tv: TVItem;
  onClose: () => void;
}

export default function TVShowcaseModal({ tv, onClose }: TVShowcaseModalProps) {
  // Generate WhatsApp message automatically
  const whatsappNumber = '919351432535';
  const whatsappMessage = encodeURIComponent(
    `Hello Jitender Ji,\n\nI visited your Harsh Infotech TV website and want to get a price quote for the "${tv.name}" (${tv.size}) model.\n\nPlease share the retail and wholesale pricing details for delivery.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto select-none"
    >
      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white border border-accentGold/40 rounded-[2rem] w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
      >
        {/* Absolute Gold Trim Borders */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accentGold to-accent" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-white hover:bg-accent border border-accent/20 hover:border-accent p-2 rounded-xl text-textDark hover:text-white transition-all shadow-md cursor-pointer animate-none"
          title="Close Modal (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image & Quick Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-b from-[#FAF8F5] to-white relative border-b md:border-b-0 md:border-r border-accent/10 pt-14 md:pt-8">
          {/* Subtle gold glow behind TV */}
          <div className="absolute w-44 h-44 bg-accent/5 blur-[90px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          
          <img
            src={import.meta.env.BASE_URL + tv.image}
            alt={tv.name}
            className="max-h-56 md:max-h-64 object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)] z-10 animate-none"
          />

          <span className="bg-accent text-white text-xs font-poppins font-black uppercase tracking-widest px-4 py-1.5 rounded-full mt-6 shadow-md shadow-accent/15">
            {tv.size} Display
          </span>

          <h3 className="font-cinzel font-black text-2xl text-textDark text-center mt-4 leading-tight">
            {tv.name}
          </h3>
          <p className="text-textMuted text-xs text-center mt-2 max-w-sm">
            {tv.description}
          </p>
        </div>

        {/* Right Side: Detailed Tech Specs & Quote Action */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between pt-8 md:pt-12 bg-white">
          <div>
            <h4 className="font-poppins font-bold text-xs text-accent uppercase tracking-widest mb-4 border-b border-accent/20 pb-2">
              TECHNICAL SPECIFICATIONS
            </h4>

            {/* Spec Sheet Table */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-accent/5 pb-2">
                <span className="text-textMuted font-medium">Display Resolution</span>
                <span className="text-textDark font-bold">{tv.resolution.replace(/\(.*\)/, '')}</span>
              </div>
              <div className="flex justify-between border-b border-accent/5 pb-2">
                <span className="text-textMuted font-medium">Bezel Technology</span>
                <span className="text-textDark font-bold">{tv.panelType}</span>
              </div>
              <div className="flex justify-between border-b border-accent/5 pb-2">
                <span className="text-textMuted font-medium">Operating System</span>
                <span className="text-textDark font-bold">{tv.smartOS.replace(/\(.*\)/, '')}</span>
              </div>
              <div className="flex justify-between border-b border-accent/5 pb-2">
                <span className="text-textMuted font-medium">Wholesale Packages</span>
                <span className="text-textDark font-bold text-right max-w-[180px]">{tv.wholesalePriceRange.split(' ')[0]} Deals Available</span>
              </div>
            </div>

            {/* Service highlights */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2.5 text-xs text-textMuted">
                <Truck className="w-4 h-4 text-accent" />
                <span>Free Doorstep Delivery & Setup</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-textMuted">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>7-Day Replacement Guarantee</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-textMuted">
                <span className="text-accent text-sm leading-none flex items-center justify-center w-4">👤</span>
                <span>Direct Support from Owner Jitender Singh</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-3 bg-accent hover:bg-accent/95 text-white py-4 rounded-2xl font-poppins font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-accent/15 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              <span>Request Price Quote via WhatsApp</span>
            </a>
            <span className="text-[9px] text-textMuted font-bold block text-center mt-2.5">
              GET WHOLESALE & RETAIL DEALS TODAY
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
