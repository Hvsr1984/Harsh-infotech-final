import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
}

function AnimatedCounter({ value, suffix, label, decimal = false }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentValue = easedProgress * (end - start) + start;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  const formatValue = (val: number) => {
    if (decimal) {
      return val.toFixed(1);
    }
    return Math.floor(val).toLocaleString();
  };

  return (
    <div ref={ref} className="text-center px-4 py-8 rounded-3xl bg-white border border-accent/10 shadow-sm flex flex-col justify-center items-center">
      <div className="font-poppins text-4xl sm:text-5xl md:text-6xl font-black text-accent tracking-tighter flex items-baseline justify-center">
        <span>{formatValue(count)}</span>
        <span className="text-accentGoldDark ml-0.5">{suffix}</span>
      </div>
      <p className="text-textMuted text-xs sm:text-sm uppercase font-poppins font-bold tracking-widest mt-3">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const stats: StatItem[] = [
    { value: 5000, suffix: '+', label: 'Happy Customers' },
    { value: 10, suffix: '+', label: 'TV Sizes Available' },
    { value: 7, suffix: ' Days', label: 'Service Guarantee' },
    { value: 5.0, suffix: '', label: 'Star Rating', decimal: true }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden border-y border-accent/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,30,48,0.02)_0%,transparent_70%)] z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
