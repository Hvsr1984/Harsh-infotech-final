import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OFFERS', path: '/products' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full"
      >
        {/* Top bar (Jhotwara location details and slogan) */}
        <div className="hidden lg:block bg-darkMaroon text-[#FAF6EE] py-2 text-[11px] border-b border-accentGold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-poppins font-medium">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-accentGold" />
              <span>Lane No 1, Shiv Nagar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan 302012</span>
            </div>
            <div className="text-accentGold font-cinzel font-bold text-[12px] tracking-wider">
              || Padharo Sa Hmare Des ||
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+919351432535" className="flex items-center space-x-1.5 hover:text-accentGold transition-colors">
                <Phone className="w-3.5 h-3.5 text-accentGold" />
                <span>+91 93514 32535</span>
              </a>
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-accentGold transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-accentGold transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-accentGold transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-primary/95 shadow-md py-2.5 border-b border-accent/10 backdrop-blur-md' 
            : 'bg-primary py-4 border-b border-accent/5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3.5 cursor-pointer group"
            >
              {/* Elegant Shield Logo */}
              <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center border-2 border-accentGold/60 rounded-xl bg-white shadow-sm shadow-accent/5 overflow-hidden">
                <div className="absolute inset-0.5 border border-accentGold/20 rounded-lg"></div>
                <span className="font-cinzel text-xl font-black text-accent">H</span>
              </div>
              <div>
                <h1 className="font-cinzel text-xl font-bold tracking-wide leading-none text-accent">
                  HARSH
                </h1>
                <h1 className="font-cinzel text-lg font-bold tracking-wide leading-none text-accent -mt-0.5">
                  INFOTECH
                </h1>
                <span className="text-[7.5px] text-textMuted tracking-widest uppercase font-bold block mt-1">
                  LED TV & ELECTRONICS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              {menuItems.map((item) => {
                const active = isLinkActive(item.path);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.path)}
                    className={`font-poppins font-bold text-xs tracking-wider transition-all duration-300 relative py-1 hover:text-accent ${
                      active 
                        ? 'text-accent' 
                        : 'text-textMuted'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/919351432535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent/95 px-5 py-2.5 rounded-lg font-poppins font-bold text-xs text-white uppercase tracking-wider transition-all duration-300 shadow-md shadow-accent/15 group"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-textDark p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slideout Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-primary backdrop-blur-xl flex flex-col justify-center px-6 border-b border-accent/20"
          >
            <nav className="flex flex-col space-y-6 text-center pt-20">
              {menuItems.map((item) => {
                const active = isLinkActive(item.path);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.path)}
                    className={`font-poppins font-bold text-xl transition-colors duration-200 ${
                      active ? 'text-accent' : 'text-textMuted hover:text-accent'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-8">
                <a
                  href="https://wa.me/919351432535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-accent w-full max-w-sm py-3.5 rounded-xl font-poppins font-bold text-sm text-white tracking-wide transition-all shadow-lg shadow-accent/20"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
