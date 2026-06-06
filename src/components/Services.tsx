import React from 'react';
import { Wrench, Tv, Layers, Zap, Cpu, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: 'LED / Smart TV Repairing',
      description: 'Professional chip-level repairing for all major LED & smart TV brands in Jaipur.',
      points: [
        'TV display line & blank screen fixing',
        'Motherboard and power board repairs',
        'Genuine parts and backlight replacements'
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-accent" />,
      title: 'Smart TV Setup & Mounting',
      description: 'Professional wall mount installation and cable routing for flawless room aesthetics.',
      points: [
        'Heavy-duty bracket wall-mounting',
        'HDMI, audio receiver & setup box wiring',
        'Soundbar and home theatre syncing'
      ]
    },
    {
      icon: <Tv className="w-8 h-8 text-accent" />,
      title: 'Android TV OS Setup',
      description: 'Full initial configuration and screen activation for Android & Google TV systems.',
      points: [
        'Google account logins & Chromecast setup',
        'Remote control Bluetooth pairing',
        'Voice search & assistant configurations'
      ]
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      title: 'Wholesale Display Supply',
      description: 'Bulk smart TV display distribution for hotels, business boardrooms, and retail shops.',
      points: [
        'Special B2B discounted pricing tiers',
        'Sizes range from 18" up to 80" displays',
        'Fast transportation & bulk testing'
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: 'Firmware & Software Updates',
      description: 'Keep your smart TV system safe, secure, and compatible with the latest applications.',
      points: [
        'Smart TV firmware & OS updates',
        'Tuning built-in app performance',
        'Bypassing system crashes & boot loops'
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'TV Display Optimization',
      description: 'Image color calibration and refresh optimization for gaming, movies, and sports.',
      points: [
        'Contrast, brightness and HDR tuning',
        'Aspect ratio and pixel mapping setup',
        'System memory and speed optimization'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-darkMaroon relative overflow-hidden border-b border-accentGold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accentGold text-xs font-bold tracking-widest uppercase block mb-2 font-poppins">
            TECHNICAL EXPERTISE & SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white leading-tight">
            TV Sales & Repairing Services
          </h2>
          <p className="text-[#FAF6EE]/75 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Jaipur's trusted smart TV technicians. From screen repairs to custom display installations, we provide professional tech support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-accentGold/20 rounded-3xl p-8 hover:border-accentGold hover:shadow-xl hover:shadow-accentGold/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="bg-accent/5 border border-accent/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                  {svc.icon}
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-xl text-textDark mb-3 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs text-textMuted font-medium border-t border-accent/5 pt-6 mb-8">
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/919351432535?text=Hello%20Jitender%20Ji,%20I%20want%20to%20enquire%20about%20the%20"${encodeURIComponent(svc.title)}"%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-poppins font-bold text-accent uppercase tracking-wider hover:text-accentGoldDark transition-colors"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
