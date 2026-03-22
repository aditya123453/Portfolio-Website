import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 py-4 md:px-8 md:py-6 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-6 rounded-full border border-white/20 shadow-lg md:shadow-none md:border-none">
          <motion.a 
            href="#hero" 
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl font-black bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent`}
          >
            ADITYA.
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50' 
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-indigo-200 shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 border-t"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-4 py-3 text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl font-bold text-lg transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}