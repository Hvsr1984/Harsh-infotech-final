import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TVCatalog, { TVItem } from './components/TVCatalog.tsx';
import Services from './components/Services.tsx';
import Stats from './components/Stats.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import TVShowcaseModal from './components/TVShowcaseModal.tsx';
import Contact from './components/Contact.tsx';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Scroll to top helper on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// SEO Manager to dynamically update document title and meta description tag
function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    let title = 'HARSH INFOTECH | Smart TVs & LED TV Repairing Jhotwara Jaipur';
    let description = 'Buy premium smart TVs and get reliable LED TV repairing and installation services in Shiv Nagar, Jhotwara, Jaipur. Contact Jitender Singh.';

    switch (location.pathname) {
      case '/':
        title = 'HARSH INFOTECH | Smart TVs & LED TV Repairing Jhotwara Jaipur';
        description = 'Buy premium smart TVs and get reliable LED TV repairing and installation services in Shiv Nagar, Jhotwara, Jaipur. Contact Jitender Singh.';
        break;
      case '/about':
        title = 'About Us | HARSH INFOTECH Jaipur';
        description = 'Learn why Harsh Infotech is the trusted name in LED TV retail and repair services in Jhotwara, Jaipur. High-quality products and customer support.';
        break;
      case '/products':
        title = 'Smart LED TV Catalog | HARSH INFOTECH Jhotwara';
        description = 'Explore our range of premium Smart TVs from 32 inch to 75 inch. High resolution, elegant design, and custom installation options.';
        break;
      case '/services':
        title = 'LED TV Repairing & Installation Services | HARSH INFOTECH';
        description = 'Get expert LED TV, Smart TV repair and installation services in Jaipur. Reliable technicians and quick support managed by Jitender Singh.';
        break;
      case '/contact':
        title = 'Contact Jitender Singh | HARSH INFOTECH Jaipur';
        description = 'Contact Harsh Infotech in Shiv Nagar, Jhotwara, Jaipur. Phone: +91 93514 32535. View our location map and get in touch today.';
        break;
      default:
        title = 'HARSH INFOTECH | Smart TVs & LED TV Repairing Jhotwara Jaipur';
        description = 'Buy premium smart TVs and get reliable LED TV repairing and installation services in Shiv Nagar, Jhotwara, Jaipur. Contact Jitender Singh.';
    }

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [location.pathname]);

  return null;
}

// Sub-views representing distinct pages
function HomeView() {
  const navigate = useNavigate();
  return (
    <>
      <Hero 
        onExploreCatalog={() => navigate('/products')} 
        onBookRepair={() => navigate('/services')} 
      />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

function AboutView() {
  return (
    <div className="pt-24 min-h-screen">
      <WhyChooseUs />
      <Stats />
      <Testimonials />
    </div>
  );
}

function ProductsView({ onSelectTV }: { onSelectTV: (tv: TVItem) => void }) {
  return (
    <div className="pt-24 min-h-screen">
      <TVCatalog onSelectTV={onSelectTV} />
    </div>
  );
}

function ServicesView() {
  return (
    <div className="pt-24 min-h-screen">
      <Services />
    </div>
  );
}

function ContactView() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  );
}

export default function App() {
  const [selectedTV, setSelectedTV] = useState<TVItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-primary">
      <ScrollToTop />
      <SEOManager />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Render with Page Transitions */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/products" element={<ProductsView onSelectTV={setSelectedTV} />} />
              <Route path="/services" element={<ServicesView />} />
              <Route path="/contact" element={<ContactView />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Multi-column Footer */}
      <Footer />

      {/* Interactive TV Showcase Modal */}
      <AnimatePresence>
        {selectedTV && (
          <TVShowcaseModal
            tv={selectedTV}
            onClose={() => setSelectedTV(null)}
          />
        )}
      </AnimatePresence>

      {/* Float Widgets Wrapper */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 items-end">
        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/95 border border-accentGold/20 p-3 rounded-full text-white shadow-xl hover:scale-105 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Chat Bubble */}
        <motion.a
          href="https://wa.me/919351432535"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 group cursor-pointer pointer-events-auto border border-green-400/20"
          aria-label="Direct Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current text-white animate-pulse" />
          <span className="font-poppins font-bold text-xs uppercase tracking-wider">
            Talk to Owner
          </span>
        </motion.a>
      </div>
    </div>
  );
}
