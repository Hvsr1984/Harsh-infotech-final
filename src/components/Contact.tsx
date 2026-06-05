import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-primary min-h-screen text-textDark select-none">
      
      {/* Page Banner (Dark Maroon with Gold text) */}
      <div className="bg-darkMaroon py-20 text-center relative overflow-hidden border-b border-accentGold/20">
        {/* Subtle gold decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.06)_0%,transparent_70%)] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-accentGold text-xs font-bold tracking-[0.25em] uppercase block mb-3 font-poppins">
            Get In Touch
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-white leading-none uppercase tracking-wide">
            Contact Us
          </h1>
          <p className="text-[#FAF6EE]/70 text-xs sm:text-sm mt-4 max-w-xl mx-auto font-poppins leading-relaxed">
            Get in touch with Harsh Infotech for premium smart TV purchases, repairing services, and custom setup inquiries in Jaipur.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-accent/10 rounded-3xl p-8 shadow-sm"
          >
            <h3 className="font-cinzel font-bold text-xl text-accent uppercase tracking-wider mb-6 border-b border-accent/10 pb-3">
              Business Details
            </h3>

            <div className="space-y-5 text-sm font-poppins font-medium">
              <div className="flex items-center space-x-3.5 pb-4 border-b border-accent/5">
                <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                  👤
                </div>
                <div>
                  <span className="text-textMuted text-[10px] uppercase font-bold block">Owner</span>
                  <span className="text-textDark font-bold text-sm">Jitender Singh</span>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pb-4 border-b border-accent/5">
                <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-textMuted text-[10px] uppercase font-bold block">Phone</span>
                  <a href="tel:+919351432535" className="text-textDark font-bold text-sm hover:text-accent transition-colors">
                    +91 93514 32535
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pb-4 border-b border-accent/5">
                <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-textMuted text-[10px] uppercase font-bold block">Email</span>
                  <a href="mailto:harshinfotechjaipur@gmail.com" className="text-textDark font-bold text-sm hover:text-accent transition-colors">
                    harshinfotechjaipur@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pb-4 border-b border-accent/5">
                <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-textMuted text-[10px] uppercase font-bold block">Address</span>
                  <span className="text-textDark font-bold text-xs leading-relaxed block">
                    Lane No 1, Shiv Nagar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan 302012
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pb-4 border-b border-accent/5">
                <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-textMuted text-[10px] uppercase font-bold block">Business Timings</span>
                  <span className="text-textDark font-bold text-xs block">
                    9:00 AM - 10:00 PM
                  </span>
                  <span className="text-textMuted text-[10px] block mt-0.5">
                    Open: Monday to Sunday
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Whatsapp CTA */}
            <a
              href="https://wa.me/919351432535?text=Hello%20Jitender%20Ji,%20I%20visited%20your%20website%20and%20want%20to%20enquire%20about%20your%20TV%20sales/repairing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center space-x-2.5 bg-accent hover:bg-accent/95 py-4 rounded-xl font-poppins font-bold text-xs uppercase tracking-wider text-white shadow-md shadow-accent/15 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Enquiry</span>
            </a>
          </motion.div>

          {/* Right Column: Google Maps Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-accent/10 rounded-3xl p-6 shadow-sm h-full"
          >
            <h4 className="font-cinzel font-bold text-sm text-accent uppercase tracking-wider mb-4 border-b border-accent/10 pb-2">
              Our Location in Jaipur
            </h4>
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-accentGold/20 relative">
              <iframe
                src="https://www.google.com/maps?q=HARSH+INFOTECH+LED+TV+REPAIR+SHOP+Jaipur&output=embed"
                title="HARSH INFOTECH location map"
                className="w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
