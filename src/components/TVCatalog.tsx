import React, { useState } from 'react';
import { ShoppingBag, Eye, ShieldCheck, Truck, Wrench, HeartHandshake, HelpCircle, Sparkles, Award, Tv, Plug } from 'lucide-react';
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
    image: '18.png',
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
    image: '24.png',
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
    image: '32.png',
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
    image: '40.png',
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
    image: '42.png',
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
    image: '50.png',
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
    image: '55.png',
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
    image: '65.png',
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
    image: '75.png',
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
    image: '80.png',
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
                  <div className="relative h-44 rounded-xl border border-accent/5 overflow-hidden mb-5">
                    <img
                      loading="lazy"
                      src={import.meta.env.BASE_URL + tv.image}
                      alt={tv.name}
                      className="w-full h-full object-cover filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500"
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
                    Doorstep Delivery
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

            {/* Royal Welcome Note Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="relative border border-accent/15 bg-white rounded-3xl p-6 shadow-sm overflow-hidden group select-none"
            >
              {/* Dynamic glowing background elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accentGold/5 rounded-full blur-xl group-hover:bg-accentGold/10 transition-colors duration-500" />
              
              {/* Gold & Red gradient border accent */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-accent via-accentGold to-accent" />

              <div className="flex items-center space-x-2.5 mb-4">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-accent font-poppins font-black text-[10px] uppercase tracking-[0.2em] block">
                  A Royal Welcome
                </span>
              </div>

              <h4 className="font-cinzel font-bold text-lg text-textDark mb-3 leading-tight">
                Quality Beyond Compare
              </h4>
              
              <p className="text-textMuted text-xs leading-relaxed font-medium mb-4">
                Step into the future of smart entertainment. At Harsh Infotech, we combine cutting-edge display technology with traditional trust, ensuring every client receives tailored premium solutions.
              </p>

              {/* Padharo Mhare Des welcome statement */}
              <div className="bg-[#FAF8F5] border border-accent/5 rounded-2xl p-4 relative overflow-hidden shadow-inner">
                <div className="absolute -right-3 -bottom-5 text-accent/5 text-5xl select-none font-cinzel font-black">
                  HI
                </div>
                <p className="text-accent font-cinzel font-extrabold text-[10px] uppercase tracking-wider leading-relaxed">
                  "Padharo Mhare Des — We promise verified quality, doorstep testing, and lifelong support."
                </p>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-accent/5 text-center">
                <div className="bg-[#FAF8F5] rounded-xl p-2.5 border border-accent/5 hover:border-accent/15 transition-all duration-300">
                  <div className="flex justify-center mb-1 text-accent">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-textDark font-poppins font-black text-xs block leading-none">5000+</span>
                  <span className="text-textMuted text-[8px] font-bold uppercase tracking-wider block mt-1.5 leading-none">Happy Homes</span>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-2.5 border border-accent/5 hover:border-accent/15 transition-all duration-300">
                  <div className="flex justify-center mb-1 text-accent">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-textDark font-poppins font-black text-xs block leading-none">100%</span>
                  <span className="text-textMuted text-[8px] font-bold uppercase tracking-wider block mt-1.5 leading-none">Satisfaction</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* TV Repair / Installation Quick Links Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            {
              icon: <Wrench className="w-5 h-5 text-accent" />,
              title: "TV Repair Service",
              desc: "Chip-level troubleshooting & screen repairs",
              link: "#services",
            },
            {
              icon: <Tv className="w-5 h-5 text-accent" />,
              title: "Installation Service",
              desc: "Secure wall mounting & cable routing",
              link: "#why-choose",
            },
            {
              icon: <Plug className="w-5 h-5 text-accent" />,
              title: "TV Accessories",
              desc: "Premium HDMI cables, soundbars & mounts",
              link: "#wholesale-b2b",
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-accent" />,
              title: "Maintenance Support",
              desc: "Direct brand-level hardware warranty support",
              link: "#why-choose",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-accent/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-accent/35 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group relative overflow-hidden select-none"
              onClick={() => {
                const element = document.getElementById(item.link.replace('#', ''));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container with glowing background */}
              <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <span className="text-textDark font-poppins font-bold text-xs uppercase tracking-wider group-hover:text-accent transition-colors duration-200">
                {item.title}
              </span>
              
              {/* Description */}
              <p className="text-textMuted text-[10px] font-medium mt-1.5 leading-normal max-w-[170px]">
                {item.desc}
              </p>

              {/* Interactive subtle hover arrow */}
              <div className="text-[10px] font-poppins font-bold text-accent opacity-0 group-hover:opacity-100 mt-3 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-1">
                <span>View Details</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
