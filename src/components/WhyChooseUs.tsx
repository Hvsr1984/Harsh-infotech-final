import React from 'react';
import { Truck, ShoppingBag, Star, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      icon: <Truck className="w-5 h-5 text-accent" />,
      title: 'Home Delivery & Setup',
      description: 'Fast doorstep delivery across Jaipur with trusted protective packaging and direct setup.'
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-accent" />,
      title: 'Wholesale B2B Supply',
      description: 'Unbeatable bulk pricing models for retail shops, dealers, hotels, and businesses.'
    },
    {
      icon: <Star className="w-5 h-5 text-accent" />,
      title: 'Latest Smart TVs',
      description: 'Access the newest LED and QLED smart TV models with voice control and streaming apps pre-installed.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-accent" />,
      title: 'Direct Owner Support',
      description: 'Speak straight to owner Jitender Singh for accurate technical advice and custom pricing.'
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: 'Fast Mounting & Repairs',
      description: 'Quick response installation, screen replacements, and motherboard debugging across Jaipur.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: 'Premium Tested Quality',
      description: 'Every television unit is rigorously tested for display pixels, sound output, and ports before delivery.'
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-primary relative overflow-hidden border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Interactive TV Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* TV Outer frame */}
            <div className="relative mx-auto w-full max-w-[440px] aspect-[16/10] bg-slate-950 rounded-2xl sm:rounded-[2.5rem] p-2.5 sm:p-3 shadow-2xl border-2 sm:border-4 border-slate-800/80 shadow-accent/5">
              {/* Camera dot */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-800 rounded-full" />
              
              {/* Screen Content */}
              <div className="w-full h-full rounded-xl sm:rounded-[2rem] overflow-hidden relative bg-slate-900 border border-slate-800 flex flex-col justify-between p-3 sm:p-6">
                
                {/* Simulated TV Menu Bar */}
                <div className="flex justify-between items-center text-[8px] sm:text-[10px] font-bold font-poppins text-white/40">
                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                    <span className="text-white">HARSH INFOTECH</span>
                  </div>
                  <span>JAIPUR</span>
                </div>

                {/* Simulated Player UI */}
                <div className="my-auto text-center py-2 sm:py-6">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 animate-pulse">
                    <Star className="w-4 h-4 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <span className="bg-accent/20 text-accent font-poppins font-black text-[8px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                    TRUSTED BRAND
                  </span>
                  <h4 className="font-poppins font-black text-sm sm:text-2xl text-white mt-1.5 sm:mt-3 leading-tight">
                    Quality Redefined
                  </h4>
                  <p className="text-white/60 text-[10px] mt-1 sm:mt-2 max-w-xs mx-auto hidden xs:block">
                    Optimized display technologies with professional chip-level technical aftercare.
                  </p>
                </div>

                {/* Overlay specs indicators */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 border-t border-white/5 pt-2 sm:pt-4 text-center">
                  <div>
                    <span className="text-white font-extrabold text-xs sm:text-sm block leading-none">100%</span>
                    <span className="text-[7px] sm:text-[9px] text-white/50 uppercase font-bold tracking-wider mt-0.5 sm:mt-1 block">Tested</span>
                  </div>
                  <div>
                    <span className="text-white font-extrabold text-xs sm:text-sm block leading-none">18"-80"</span>
                    <span className="text-[7px] sm:text-[9px] text-white/50 uppercase font-bold tracking-wider mt-0.5 sm:mt-1 block">Sizes</span>
                  </div>
                  <div>
                    <span className="text-white font-extrabold text-xs sm:text-sm block leading-none">Jaipur</span>
                    <span className="text-[7px] sm:text-[9px] text-white/50 uppercase font-bold tracking-wider mt-0.5 sm:mt-1 block">Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient behind-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Right Column: Title and Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-2 font-poppins">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-textDark leading-tight mb-6">
              A Better Television Experience
            </h2>
            <p className="text-textMuted text-sm sm:text-base leading-relaxed mb-10">
              Unlike generic electronic suppliers, we provide direct communication with owner Jitender Singh to ensure that you get verified deals, fast setup, and trusted local technical support.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start space-x-3.5 group"
                >
                  <div className="bg-accent/5 border border-accent/10 group-hover:bg-accent/15 group-hover:border-accent/30 p-2.5 rounded-xl transition-all duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-textDark group-hover:text-accent transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-textMuted text-xs leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
