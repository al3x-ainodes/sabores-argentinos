'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: 'Menu', labelEs: 'Menú' },
    { href: '#shows', label: 'Shows', labelEs: 'Shows' },
    { href: '#reservation', label: 'Reservation', labelEs: 'Reservas' },
    { href: '#contact', label: 'Contact', labelEs: 'Contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Sabores Argentinos"
                className={`h-16 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, color: '#E03C31' }}
                className={`font-big-shoulders text-lg transition-all duration-300 ${
                  scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {lang === 'en' ? link.label : link.labelEs}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className={`font-big-shoulders text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primaryDark'
                  : 'bg-white/20 text-white border border-white/40 hover:bg-white/30'
              }`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className={`font-big-shoulders text-sm px-3 py-1 rounded mr-4 cursor-pointer transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-white'
                  : 'bg-white/20 text-white border border-white/40'
              }`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block px-3 py-2 font-big-shoulders text-lg text-foreground hover:text-primary hover:pl-6 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {lang === 'en' ? link.label : link.labelEs}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
