import React from 'react';
import { Play, Award, Calendar, CheckSquare, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export interface WholesalePackage {
  id: string;
  title: string;
  badge: string;
  rating: string;
  bgGradient: string;
  includes: string[];
  description: string;
  whatsappMsg: string;
}

const wholesalePackages: WholesalePackage[] = [
  {
    id: 'pkg-hotel',
    title: 'Maharajah Hotel Display Pack',
    badge: 'Premium B2B',
    rating: '4.9',
    bgGradient: 'from-accentRed via-red-950 to-primary',
    includes: [
      'Custom smart TV sizes (32" - 55")',
      'Heavy-duty tilt wall mounts included',
      'Bulk account setting (Netflix, Hotstar)',
      'Free Jaipur transport & layout install'
    ],
    description: 'Designed exclusively for Jaipur hotels, resorts, and modern guest houses. Transform guest rooms with luxury smart displays.',
    whatsappMsg: 'Hello Jitender Ji, I want details regarding the "Maharajah Hotel Display Pack" for commercial installation.'
  },
  {
    id: 'pkg-retail',
    title: 'Darbar Shop Dealer Bundle',
    badge: 'Retailer Deal',
    rating: '4.8',
    bgGradient: 'from-amber-700 via-orange-950 to-primary',
    includes: [
      'Assorted display sizes (18" to 43" TVs)',
      'Special dealer wholesale price tier',
      '7-Day quick replacement guarantee',
      'Continuous direct stock support'
    ],
    description: 'Special stock packs for retail shops, distributors, and bulk electronics showrooms across Rajasthan.',
    whatsappMsg: 'Hello Jitender Ji, I want details regarding the "Darbar Shop Dealer Bundle" for retail stores.'
  },
  {
    id: 'pkg-luxury',
    title: 'Royal Home Theater Setup',
    badge: 'Home Luxury',
    rating: '5.0',
    bgGradient: 'from-purple-900 via-indigo-950 to-primary',
    includes: [
      'Ultra 4K QLED Displays (65" - 80" TV)',
      'Dolby Atmos soundbar calibration',
      'Google Assistant voice integration',
      'Lifetime custom hardware support'
    ],
    description: 'The ultimate royal screen setup for modern Rajasthan mansions and premium home theatres.',
    whatsappMsg: 'Hello Jitender Ji, I want details regarding the "Royal Home Theater Setup" for luxury residential rooms.'
  }
];

interface RoyalWholesaleProps {
  onEnquire: (msg: string) => void;
}

export default function RoyalWholesale({ onEnquire }: RoyalWholesaleProps) {
  return (
    <section id="wholesale-b2b" className="py-24 bg-primary relative overflow-hidden border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-2 font-poppins">
            RETAIL & WHOLESALE BULK SUPPLY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-cinzel text-textDark leading-none">
            Wholesale B2B Bundles
          </h2>
          <p className="text-textMuted text-sm sm:text-base mt-3 max-w-xl">
            Get Jaipur's best wholesale pricing structures for commercial TV displays, hotels, retail shops, and home installations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wholesalePackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative bg-white group rounded-3xl overflow-hidden cursor-default shadow-sm border border-accent/10 flex flex-col justify-between h-[30rem]"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accentGold/5 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-700 -z-10" />
              
              {/* Card Contents */}
              <div className="p-8">
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-accent/10 border border-accent/20 text-accent text-[10px] font-poppins font-black uppercase tracking-wider px-3 py-1 rounded">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-cinzel font-bold text-2xl text-textDark mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {pkg.title}
                </h3>
                
                {/* Short Description */}
                <p className="text-textMuted text-xs leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Bullets included */}
                <div className="space-y-2.5 border-t border-accent/5 pt-6">
                  {pkg.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start space-x-2.5 text-xs text-textMuted font-medium">
                      <CheckSquare className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-8 pt-0 z-10">
                <button
                  onClick={() => onEnquire(pkg.whatsappMsg)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white border border-accent/20 hover:bg-accent hover:border-accent py-3 rounded-xl font-poppins font-bold text-xs uppercase tracking-wider text-accent hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-accent group-hover:text-white fill-current" />
                  <span>Enquire Price Pack</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
