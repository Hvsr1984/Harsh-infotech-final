import React, { useState } from 'react';
import { ShoppingBag, Eye, ShieldCheck, Truck, Wrench, HeartHandshake, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export interface TVItem {
  id: string;
  name: string;
  size: string;
  category: 'Compact' | 'Full HD' | 'Ultra 4K';
  image: string;
  resolution: string;
  panelType: string;
  smartOS: string;
  description: string;
  price: string;
  wholesalePriceRange: string;
}

interface TVCatalogProps {
  onSelectTV: (tv: TVItem) => void;
}

export const tvCatalogData: TVItem[] = [
  {
    id: 'tv-18',
    name: '18 Inch LED TV',
    size: '18"',
    category: 'Compact',
    image: '/18.png',
    resolution: 'HD Ready (1366x768)',
    panelType: 'A+ Grade IPS Panel',
    smartOS: 'Standard TV (Non-Smart)',
    description: 'Perfect for small rooms, shop counters, and security monitors.',
    price: '₹5,499',
    wholesalePriceRange: 'Super budget wholesale pricing available.'
  },
  {
    id: 'tv-24',
    name: '24 Inch LED TV',
    size: '24"',
    category: 'Compact',
    image: '/24.png',
    resolution: 'HD Ready (1366x768)',
    panelType: 'A+ Grade IPS Panel',
    smartOS: 'Standard / Optional Android OS',
    description: 'High durability, low power consumption. Ideal for offices and kitchens.',
    price: '₹7,499',
    wholesalePriceRange: 'Excellent choice for bulk commercial setups.'
  },
  {
    id: 'tv-32',
    name: '32 Inch Smart TV',
    size: '32"',
    category: 'Compact',
    image: '/32.png',
    resolution: 'HD Ready (1366x768)',
    panelType: 'IPS Bezel-Less Panel',
    smartOS: 'Android TV OS (Netflix, Prime, YT)',
    description: 'Our top-selling size. Comes with smart screen mirroring and voice-control remote.',
    price: '₹11,999',
    wholesalePriceRange: 'Best wholesale deal for hotels and guest houses.'
  },
  {
    id: 'tv-40',
    name: '40 Inch Smart TV',
    size: '40"',
    category: 'Full HD',
    image: '/40.png',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS Bezel-Less Panel',
    smartOS: 'Android TV OS (Play Store, Voice Assistant)',
    description: 'Premium mid-sized display offering intense contrast and deep sound output.',
    price: '₹18,999',
    wholesalePriceRange: 'Special discounted wholesale packages for batch purchases.'
  },
  {
    id: 'tv-42',
    name: '42/43 Inch Smart TV',
    size: '43"',
    category: 'Full HD',
    image: '/42.png',
    resolution: 'Full HD (1920x1080)',
    panelType: 'Ultra-Bright IPS Display',
    smartOS: 'Android TV OS (Chromecast built-in)',
    description: 'Elegant slim design, rich audio decoders, and full app support.',
    price: '₹22,999',
    wholesalePriceRange: 'Bulk rates available for business showrooms.'
  },
  {
    id: 'tv-50',
    name: '50 Inch Smart TV',
    size: '50"',
    category: 'Ultra 4K',
    image: '/50.png',
    resolution: '4K Ultra HD (3840x2160)',
    panelType: '4K HDR10+ VA Panel',
    smartOS: 'Google TV UI with Play Store',
    description: 'Theatre experience at home. Deep black levels, dual-band Wi-Fi, and 30W Dolby Audio.',
    price: '₹34,999',
    wholesalePriceRange: 'Elite display package pricing for premium showrooms.'
  },
  {
    id: 'tv-55',
    name: '55 Inch Smart TV',
    size: '55"',
    category: 'Ultra 4K',
    image: '/55.png',
    resolution: '4K Ultra HD (3840x2160)',
    panelType: '4K QLED Bezel-Less',
    smartOS: 'Google TV UI with Smart Remote',
    description: 'Quantum Dot technology for vibrant colors and extreme peak brightness.',
    price: '₹44,999',
    wholesalePriceRange: 'Highly recommended for modern apartments and boardrooms.'
  },
  {
    id: 'tv-65',
    name: '65 Inch Smart TV',
    size: '65"',
    category: 'Ultra 4K',
    image: '/65.png',
    resolution: '4K Ultra HD (3840x2160)',
    panelType: 'Frameless Quantum Dot Panel',
    smartOS: 'Google TV UI (Dolby Atmos / Vision)',
    description: 'Enormous home theatre display with cinematic surround sound.',
    price: '₹59,999',
    wholesalePriceRange: 'Luxury commercial packages for lounges and banquet halls.'
  },
  {
    id: 'tv-75',
    name: '75 Inch Smart TV',
    size: '75"',
    category: 'Ultra 4K',
    image: '/75.png',
    resolution: '4K Ultra HD (3840x2160)',
    panelType: 'IPS Super Panel with local dimming',
    smartOS: 'Google TV UI (120Hz Refresh support)',
    description: 'Grand scale entertainment. Excellent for gaming, sports, and corporate conferences.',
    price: '₹84,999',
    wholesalePriceRange: 'Exclusive pricing structures for corporate office integrations.'
  },
  {
    id: 'tv-80',
    name: '80/85 Inch Smart TV',
    size: '80"',
    category: 'Ultra 4K',
    image: '/80.png',
    resolution: '4K UHD Cinema Display',
    panelType: 'Gold-Standard QLED Screen',
    smartOS: 'Google TV UI with Cinematic Audio',
    description: 'Our ultimate display masterwork. Massive size, high-end specifications.',
    price: '₹1,19,999',
    wholesalePriceRange: 'Premium B2B bulk display solutions and custom installations.'
  }
];

export default function TVCatalog({ onSelectTV }: TVCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Compact', 'Full HD', 'Ultra 4K'];

  const filteredTVs = selectedCategory === 'All'
    ? tvCatalogData
    : tvCatalogData.filter(tv => tv.category === selectedCategory);

  const handleEnquire = (e: React.MouseEvent, tv: TVItem) => {
    e.stopPropagation();
    const msg = `Hello Jitender Ji, I want to enquire about the price and availability of "${tv.name}" (${tv.size}) display.`;
    const whatsappUrl = `https://wa.me/919351432535?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="tv-catalog" className="py-20 bg-primary relative overflow-hidden border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-accent/10 pb-6">
          <div>
            <div className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase block mb-1.5 font-poppins">
              ⚜️ Our Premium Collection ⚜️
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-textDark tracking-tight leading-none">
              Smart TVs For Every Home
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2 mt-6 md:mt-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-poppins font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-accent text-white shadow shadow-accent/15 border-accent'
                    : 'bg-white text-textMuted hover:text-accent border border-accent/15'
                }`}
              >
                {cat === 'All' ? 'All Displays' : `${cat} Models`}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid Layout: Catalog + Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main: Product Display List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredTVs.map((tv, idx) => (
              <motion.div
                key={tv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-accent/10 rounded-2xl p-5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectTV(tv)}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-44 rounded-xl bg-[#FAF8F5] border border-accent/5 p-4 flex items-center justify-center overflow-hidden mb-5">
                    <img
                      loading="lazy"
                      src={tv.image}
                      alt={tv.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Size tag */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-white text-[9px] font-poppins font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                        {tv.size}
                      </span>
                    </div>
                    
                    {/* View Details Eye Overlay */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white border border-accent/20 text-accent p-2.5 rounded-full shadow-md">
                        <Eye className="w-4 h-4 font-black" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-lg text-textDark mb-3 group-hover:text-accent transition-colors leading-tight">
                    {tv.name}
                  </h3>

                  <p className="text-textMuted text-xs leading-relaxed mb-5">
                    {tv.description}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <div className="border-t border-accent/5 pt-4 flex items-center justify-between">
                  <span className="text-[10px] text-textMuted font-bold uppercase tracking-wider">
                    Jaipur Delivery
                  </span>
                  <button
                    onClick={(e) => handleEnquire(e, tv)}
                    className="inline-flex items-center space-x-1.5 border border-accent/30 hover:bg-accent hover:border-accent px-4 py-2 rounded text-[10px] font-poppins font-extrabold text-accent hover:text-white transition-all duration-300"
                  >
                    <span>ENQUIRE NOW</span>
                    <ShoppingBag className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Sidebar: Trust checklist + Namaste portrait box */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Checklist Container */}
            <div className="bg-white border border-accent/10 rounded-2xl p-6 shadow-sm">
              <h4 className="font-cinzel font-bold text-sm text-accent uppercase tracking-wider mb-5 border-b border-accent/10 pb-2.5">
                Why Buy From Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-textDark uppercase leading-none">BEST QUALITY</h5>
                    <p className="text-textMuted text-[10px] mt-1 font-medium">100% Genuine & Trusted Products</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-textDark uppercase leading-none">FAST DELIVERY</h5>
                    <p className="text-textMuted text-[10px] mt-1 font-medium">Quick Delivery & Installation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-textDark uppercase leading-none">EXPERT SERVICE</h5>
                    <p className="text-textMuted text-[10px] mt-1 font-medium">Setup & Installation by Pros</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-textDark uppercase leading-none">WARRANTY SUPPORT</h5>
                    <p className="text-textMuted text-[10px] mt-1 font-medium">Direct Warranty & After Sales Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Namaste Rajasthani Portrait Card */}
            <div className="relative border border-accentGold/40 bg-gradient-to-b from-[#7A1E30] to-[#500F1B] rounded-2xl p-6 text-center shadow-md overflow-hidden select-none">
              {/* Palace background vector overlay (using SVG placeholder path) */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-end justify-center">
                <svg className="w-full h-2/3" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 200h280v-50h-20v-20h-10v20h-10v-30h-20v30h-20v-50h-30v50h-20v-40h-20v40h-20v-70h-30v70h-20v-30h-20v30h-10v-20h-10v20H10v50z" fill="#FAF6EE" />
                </svg>
              </div>

              {/* Turban Portrait Sketch Representation */}
              <div className="relative w-24 h-24 mx-auto mb-4 border-2 border-accentGold/40 rounded-full bg-white/10 flex flex-col items-center justify-center p-2">
                {/* Traditional Turban (Pagri) Representation */}
                <div className="w-16 h-5 bg-accent rounded-full -mt-2 shadow-sm border border-accentGold/30" />
                {/* Namaste Figure Illustration placeholder inside */}
                <span className="text-3xl mt-1.5">🙏</span>
              </div>

              <div className="text-accentGold font-cinzel text-xs tracking-wider block mb-1">
                Padharo Sa
              </div>
              <h4 className="text-white font-cinzel font-extrabold text-xl leading-none uppercase">
                HARSH INFOTECH
              </h4>
              <p className="text-accentGold font-poppins font-bold text-[10px] uppercase tracking-widest mt-2">
                Aapno Apno Store
              </p>
              <div className="text-[#FAF6EE]/90 font-poppins text-xs font-semibold mt-4 pt-3 border-t border-[#FAF6EE]/15">
                Owner: Jitender Singh
              </div>
            </div>

          </div>

        </div>

        {/* TV Repair / Installation Quick Links Icons spacing */}
        <div className="border-t border-accent/10 mt-12 pt-4"></div>

        {/* TV Repair / Installation Quick Links Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center select-none max-w-4xl mx-auto">
          <div className="bg-white border border-accent/5 rounded-xl p-4 flex flex-col items-center hover:border-accent/25 transition-all duration-300">
            <span className="text-2xl mb-2">🔧</span>
            <span className="text-textDark font-poppins font-bold text-[11px] uppercase tracking-wider">TV Repair Service</span>
          </div>
          <div className="bg-white border border-accent/5 rounded-xl p-4 flex flex-col items-center hover:border-accent/25 transition-all duration-300">
            <span className="text-2xl mb-2">📺</span>
            <span className="text-textDark font-poppins font-bold text-[11px] uppercase tracking-wider">Installation Service</span>
          </div>
          <div className="bg-white border border-accent/5 rounded-xl p-4 flex flex-col items-center hover:border-accent/25 transition-all duration-300">
            <span className="text-2xl mb-2">🔌</span>
            <span className="text-textDark font-poppins font-bold text-[11px] uppercase tracking-wider">TV Accessories</span>
          </div>
          <div className="bg-white border border-accent/5 rounded-xl p-4 flex flex-col items-center hover:border-accent/25 transition-all duration-300">
            <span className="text-2xl mb-2">🛡️</span>
            <span className="text-textDark font-poppins font-bold text-[11px] uppercase tracking-wider">Maintenance Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
