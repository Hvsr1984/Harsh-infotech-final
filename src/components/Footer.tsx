import React from 'react';
import { Tv, MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-darkMaroon text-[#FAF6EE] pt-16 pb-8 border-t border-accentGold/20 relative overflow-hidden select-none">
      
      {/* Decorative Gold Arch silhouette background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accentGold/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 border-b border-accentGold/10 pb-12">
          
          {/* Column 1: Brand details & Socials */}
          <div className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center border border-accentGold/50 rounded-lg bg-white overflow-hidden shadow-sm">
                <span className="font-cinzel text-lg font-black text-accent">H</span>
              </div>
              <div>
                <h3 className="font-cinzel text-base font-bold tracking-wider leading-none text-accentGold">
                  HARSH INFOTECH
                </h3>
                <span className="text-[7.5px] text-[#FAF6EE]/60 tracking-widest uppercase font-bold block mt-0.5">
                  LED TV & ELECTRONICS
                </span>
              </div>
            </Link>
            <p className="text-[#FAF6EE]/75 text-xs leading-relaxed max-w-xs pt-2">
              Your Trusted Destination for Smart TVs & LED Solutions in Jaipur, Rajasthan. Experience retail and wholesale displays with trusted service.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a href="#" className="w-8 h-8 rounded-full border border-accentGold/20 flex items-center justify-center text-accentGold hover:bg-accentGold hover:text-darkMaroon transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-accentGold/20 flex items-center justify-center text-accentGold hover:bg-accentGold hover:text-darkMaroon transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-accentGold/20 flex items-center justify-center text-accentGold hover:bg-accentGold hover:text-darkMaroon transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 text-left md:pl-4">
            <h4 className="font-cinzel font-bold text-xs text-accentGold uppercase tracking-wider border-b border-accentGold/10 pb-1.5">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-semibold text-[#FAF6EE]/80">
              <Link to="/" className="hover:text-accentGold transition-colors text-left w-fit">Home</Link>
              <Link to="/about" className="hover:text-accentGold transition-colors text-left w-fit">About Us</Link>
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">Products</Link>
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">Offers</Link>
              <Link to="/contact" className="hover:text-accentGold transition-colors text-left w-fit">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Categories */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 text-left md:pl-2">
            <h4 className="font-cinzel font-bold text-xs text-accentGold uppercase tracking-wider border-b border-accentGold/10 pb-1.5">
              Categories
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#FAF6EE]/75 font-semibold">
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">Smart TVs</Link>
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">4K UHD TVs</Link>
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">LED TVs</Link>
              <Link to="/products" className="hover:text-accentGold transition-colors text-left w-fit">Frameless TVs</Link>
              <Link to="/services" className="hover:text-accentGold transition-colors text-left w-fit">Accessories</Link>
            </div>
          </div>

          {/* Column 4: Services */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 text-left">
            <h4 className="font-cinzel font-bold text-xs text-accentGold uppercase tracking-wider border-b border-accentGold/10 pb-1.5">
              Services
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#FAF6EE]/75 font-semibold">
              <Link to="/services" className="hover:text-accentGold transition-colors text-left w-fit">TV Repair Service</Link>
              <Link to="/services" className="hover:text-accentGold transition-colors text-left w-fit">Installation Service</Link>
              <Link to="/services" className="hover:text-accentGold transition-colors text-left w-fit">Maintenance Support</Link>
              <Link to="/services" className="hover:text-accentGold transition-colors text-left w-fit">Accessories Support</Link>
            </div>
          </div>

          {/* Column 5: Contact Us info */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5 text-left">
            <h4 className="font-cinzel font-bold text-xs text-accentGold uppercase tracking-wider border-b border-accentGold/10 pb-1.5">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF6EE]/80 font-medium">
              <div className="flex items-center space-x-2">
                <span className="text-accentGold text-sm leading-none flex items-center justify-center w-4 font-bold">👤</span>
                <span>Owner: Jitender Singh</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5" />
                <span className="leading-tight">Lane No 1, Shiv Nagar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan 302012</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accentGold flex-shrink-0" />
                <span>+91 93514 32535</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accentGold flex-shrink-0" />
                <span>harshinfotechjaipur@gmail.com</span>
              </div>
            </div>

            {/* Quick WhatsApp Contact CTA */}
            <a
              href="https://wa.me/919351432535"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 border border-accentGold/20 py-2.5 rounded-lg font-poppins font-bold text-xs uppercase tracking-wider text-white shadow-lg transition-all duration-300 w-full"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Column 6: Our Location embedded map */}
        <div className="w-full mb-12">
          <h4 className="font-cinzel font-bold text-xs text-accentGold uppercase tracking-wider mb-4 text-left">
            Our Location
          </h4>
          <div className="w-full h-48 rounded-xl overflow-hidden border border-accentGold/20 shadow-md relative group">
            <iframe
              src="https://www.google.com/maps?q=HARSH+INFOTECH+LED+TV+REPAIR+SHOP+Jaipur&output=embed"
              title="HARSH INFOTECH location map"
              className="w-full h-full border-none opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-accentGold/10 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF6EE]/60 font-medium">
          <p>© {currentYear} HARSH INFOTECH TV & ELECTRONICS. All Rights Reserved.</p>
          <div className="text-accentGold font-cinzel font-bold text-xs my-2 md:my-0">
            || Padharo Sa Hmare Des ||
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-accentGold cursor-default">Privacy Policy</span>
            <span className="hover:text-accentGold cursor-default">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
