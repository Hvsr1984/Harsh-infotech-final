import React, { useState, useEffect } from 'react';
import { ShoppingBag, Wrench, ShieldCheck, Tag, Zap, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onExploreCatalog: () => void;
  onBookRepair: () => void;
}

export default function Hero({ onExploreCatalog, onBookRepair }: HeroProps) {
  const [isTvOn, setIsTvOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTvOn(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="home" className="relative min-h-screen w-full bg-primary pt-24 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Decorative Top Arch Shadow */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-darkMaroon/5 to-transparent pointer-events-none -z-10" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-8 lg:pt-12">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left select-none">
          {/* Slogan with Sparkles */}
          <div className="flex items-center space-x-1.5 text-accentGoldDark font-poppins font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padharo Sa</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          {/* Main Headings using Cinzel Font */}
          <h1 className="font-cinzel text-5xl sm:text-6xl lg:text-7xl font-extrabold text-textDark leading-none uppercase tracking-tight">
            PREMIUM TV'S
          </h1>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mt-2 leading-none uppercase tracking-wider">
            PADHARO <span className="text-textDark">HARSH INFOTECH</span>
          </h2>

          {/* Key Bullet Features */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-accent font-poppins font-bold text-xs uppercase tracking-widest mt-6">
            <span>Best Quality</span>
            <span className="text-accentGoldDark">•</span>
            <span>Best Price</span>
            <span className="text-accentGoldDark">•</span>
            <span>Best Service</span>
          </div>

          {/* Hinglish Description */}
          <p className="text-textMuted font-poppins text-xs sm:text-sm leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            Smart TVs, 4K UHD, LED TVs aur complete home entertainment solutions ab aapke apne Rajasthan ke saath. Experience the finest display setups with local support.
          </p>

          {/* Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button
              onClick={onExploreCatalog}
              className="flex items-center justify-center space-x-2.5 bg-accent hover:bg-accent/95 px-8 py-3.5 rounded-lg font-poppins font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-accent/15 transition-all duration-300 group"
            >
              <span>EXPLORE COLLECTION</span>
              <ShoppingBag className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onBookRepair}
              className="flex items-center justify-center space-x-2.5 bg-white border border-accent/20 hover:bg-primary px-8 py-3.5 rounded-lg font-poppins font-bold text-xs uppercase tracking-wider text-accent transition-all duration-300"
            >
              <Wrench className="w-4 h-4 text-accent" />
              <span>BOOK TV REPAIRING</span>
            </button>
          </div>
        </div>

        {/* Right Column: TV Mockup + Lantern + Offer Banner */}
        <div className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[360px] lg:min-h-[460px]">
          
          {/* Archway Background Graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] max-w-[480px] aspect-[4/3] bg-gradient-to-tr from-accentGold/5 via-[#FAF6EE] to-accent/5 rounded-full blur-3xl -z-10" />

          {/* Hawa Mahal Sunset TV Mockup */}
          <div className="relative w-full max-w-[480px] z-10">
            {/* TV Frame Bezel */}
            <div className="bg-black/95 rounded-lg p-2.5 pb-3.5 shadow-2xl border border-white/10 relative">
              {/* TV Screen Content Area */}
              <div className="w-full aspect-[16/9] rounded overflow-hidden relative bg-slate-950">
                {/* TV Static Noise when TV is off */}
                <AnimatePresence>
                  {!isTvOn && (
                    <motion.div
                      key="static"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 tv-static z-20"
                    />
                  )}
                </AnimatePresence>

                {/* TV screen turn-on flash line overlay */}
                <AnimatePresence>
                  {isTvOn && (
                    <motion.div
                      key="flash"
                      initial={{ scaleY: 0, scaleX: 1, opacity: 1, backgroundColor: '#FFFFFF' }}
                      animate={{ 
                        scaleY: [0, 0.05, 1], 
                        scaleX: [0.01, 1, 1], 
                        opacity: [1, 1, 0],
                        backgroundColor: ['#FFFFFF', '#FAF6EE', 'transparent']
                      }}
                      transition={{ 
                        duration: 0.6,
                        times: [0, 0.4, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 z-30 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Hawa Mahal Sunset TV Mockup display image */}
                <motion.img
                  src="/hero.png"
                  alt="Premium TV Hawa Mahal Sunset display"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={isTvOn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Simulated Standby power LED indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center space-x-1">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 shadow-sm ${
                  isTvOn 
                    ? 'bg-emerald-500 shadow-emerald-500/80 animate-pulse' 
                    : 'bg-red-500 shadow-red-500/80'
                }`} />
                <span className="text-[5px] text-[#FAF6EE]/30 font-poppins tracking-widest uppercase">
                  harsh
                </span>
              </div>
            </div>
            
            {/* TV Stand Base */}
            <div className="w-32 h-2.5 bg-slate-800 mx-auto rounded-b relative -mt-0.5 z-10" />
            <div className="w-40 h-1 bg-slate-700 mx-auto rounded-b relative z-10" />

            {/* TV Table Top (Wooden desk representation) */}
            <div className="h-4 bg-gradient-to-b from-[#8B5A2B] to-[#5C3A21] w-[115%] -ml-[7.5%] mt-1.5 rounded-md shadow-lg border-b-2 border-black/20" />
          </div>

          {/* Lantern and Arch Graphics (Behind & Beside TV) */}
          <div className="absolute right-2 -top-12 lg:-top-20 z-20 pointer-events-none hidden sm:block">
            {/* Traditional Arch Frame Vector Overlay using CSS */}
            <div className="relative w-28 h-56 border-r-2 border-t-2 border-accentGold/20 rounded-tr-[4rem] flex flex-col items-center">
              {/* Hanging Lantern (Yellow Glow SVG) */}
              <div className="w-8 h-1 bg-accentGold/40 mt-10" />
              <div className="w-0.5 h-12 bg-accentGold/40" />
              <div className="relative w-7 h-10 bg-gradient-to-b from-amber-400 to-yellow-600 rounded-full shadow-lg shadow-amber-500/25 flex items-center justify-center">
                <div className="absolute w-5 h-7 bg-yellow-300 rounded-full blur-[2px]" />
                <span className="text-[8px] font-bold text-darkMaroon relative z-10">☀️</span>
              </div>
            </div>
          </div>

          {/* Festival Offer Banner Card */}
          <div className="absolute left-0 -bottom-8 sm:left-4 sm:bottom-0 z-30 max-w-[170px] bg-darkMaroon border border-accentGold/30 text-white rounded-xl shadow-2xl overflow-hidden font-poppins select-none transform hover:scale-105 transition-transform duration-300">
            {/* Red Arch Banner Header */}
            <div className="bg-accent px-4 py-2 text-center border-b border-accentGold/20">
              <span className="text-[9px] font-black tracking-widest uppercase block text-accentGold">
                Festival
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider block text-white">
                Special Offer
              </span>
            </div>
            {/* Card Content Body */}
            <div className="p-3.5 text-center flex flex-col items-center">
              <span className="text-[9px] text-[#FAF6EE]/60 font-semibold block uppercase">
                Up To
              </span>
              <span className="text-3xl font-black font-cinzel text-accentGold block my-0.5 leading-none">
                20% OFF
              </span>
              <span className="text-[8px] text-[#FAF6EE]/80 font-bold block uppercase tracking-wider mb-3">
                On Selected TVs
              </span>
              <button
                onClick={onExploreCatalog}
                className="bg-accentGold hover:bg-accentGoldDark text-darkMaroon font-extrabold text-[9px] uppercase px-3 py-1.5 rounded transition-colors w-full tracking-wider"
              >
                GRAB THE DEAL
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Row: Trust Badges (Cream background, red borders) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16 lg:mt-20 z-10 border-t border-accentGold/15 pt-8 select-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          <div className="flex items-center space-x-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full border border-accent/30 bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-textDark font-poppins font-black text-xs uppercase tracking-wider block">100% Genuine</span>
              <span className="text-textMuted text-[10px]">Verified products.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full border border-accent/30 bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-textDark font-poppins font-black text-xs uppercase tracking-wider block">Best Price</span>
              <span className="text-textMuted text-[10px]">Guaranteed rates.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full border border-accent/30 bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-textDark font-poppins font-black text-xs uppercase tracking-wider block">Fast Setup</span>
              <span className="text-textMuted text-[10px]">Quick Jhotwara setup.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full border border-accent/30 bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <span className="text-textDark font-poppins font-black text-xs uppercase tracking-wider block">Trusted Since</span>
              <span className="text-textMuted text-[10px]">Top Jaipur dealer.</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
