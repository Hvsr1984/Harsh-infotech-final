import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  role: string;
  avatarBg: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      rating: 5,
      text: "Excellent work, good and fastest service. Very very good price, also extremely reasonable for high-end setups.",
      author: "Ratan Singh",
      role: "Homeowner, Jaipur",
      avatarBg: "from-red-500 to-orange-500"
    },
    {
      rating: 5,
      text: "Nice experience of smart TV models and other custom display products. Direct consultation with the owner was fantastic.",
      author: "Arnav Nagar",
      role: "Developer Partner",
      avatarBg: "from-blue-500 to-indigo-500"
    },
    {
      rating: 5,
      text: "Good service quality product available. They configured all OTT apps and speed-tuned my smart TV instantly.",
      author: "Nemichand",
      role: "Retail Customer",
      avatarBg: "from-emerald-500 to-teal-500"
    },
    {
      rating: 5,
      text: "Great experience. Prompt response, quick installation, and excellent aftersales customer support.",
      author: "Harish Choudhary",
      role: "Business Client",
      avatarBg: "from-purple-500 to-pink-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-2 font-poppins">
            CUSTOMER TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-textDark leading-tight">
            Loved by Our Clients
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-white border border-accent/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-sm flex flex-col justify-center items-center min-h-[300px] select-none">
          {/* Quote Mark */}
          <div className="absolute top-6 left-8 text-accent/5">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6 text-yellow-500">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-textDark text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl font-sans italic">
                "{reviews[currentIndex].text}"
              </p>

              {/* Author Details */}
              <div className="flex items-center space-x-3.5 text-left">
                {/* Simulated Avatar */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${reviews[currentIndex].avatarBg} flex items-center justify-center font-poppins font-black text-white text-lg shadow-md`}>
                  {reviews[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-textDark text-sm sm:text-base leading-none">
                    {reviews[currentIndex].author}
                  </h4>
                  <span className="text-textMuted text-xs font-medium mt-1.5 block">
                    {reviews[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controllers */}
          <div className="absolute left-4 sm:-left-6 right-4 sm:-right-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-accent/20 hover:bg-accent text-textDark hover:text-white flex items-center justify-center pointer-events-auto transition-all shadow-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-accent/20 hover:bg-accent text-textDark hover:text-white flex items-center justify-center pointer-events-auto transition-all shadow-md"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-accent' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
