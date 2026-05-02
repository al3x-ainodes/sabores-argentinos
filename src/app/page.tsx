'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

const galleryImages = [
  '/images/sabores-argentinos1.jpg',
  '/images/sabores-argentinos2.jpg',
  '/images/sabores-argentinos3.jpg',
  '/images/sabores-argentinos4.jpg',
  '/images/sabores-argentinos5.jpg',
  '/images/sabores-argentinos6.jpg',
  '/images/sabores-argentinos7.jpg',
  '/images/sabores-argentinos8.jpg',
  '/images/sabores-argentinos10.jpg',
  '/images/sabores-argentinos11.jpg',
  '/images/sabores-argentinos12.jpg',
  '/images/sabores-argentinos13.jpg',
  '/images/sabores-argentinos14.jpg',
  '/images/sabores-argentinos15.jpg',
  '/images/sabores-argentinos16.jpg',
  '/images/sabores-argentinos17.jpg',
  '/images/sabores-argentinos18.jpg',
  '/images/sabores-argentinos19.jpg',
];

const featuredDishes = [
  { name: 'Empanadas', nameEs: 'Empanadas', price: '3.50', image: '/images/sabores-argentinos5.jpg' },
  { name: 'Picanha', nameEs: 'Picaña', price: '20.75', image: '/images/sabores-argentinos6.jpg' },
  { name: 'Milanesa', nameEs: 'Milanesa', price: '16.50', image: '/images/sabores-argentinos7.jpg' },
];

const testimonials = [
  { text: 'Es perfecto para estar en familia, ofrecen musica en vivo aveces, con especiales de Tango. La comida es genial y los precios accesibles.', date: 'Hace 8 meses' },
  { text: 'Es como si estuviera comiendo en casa y a tu gusto.', date: 'Hace 2 meses' },
  { text: 'El lugar me encanto! He ido a varios lugares de comida argentina, y este fue mi favorito.', date: 'Hace 2 años' },
  { text: 'El nombre lo dice todo, el dueño extremadamente atento, la comida excelente. Muy buenas porciones.', date: 'Hace 4 años' },
  { text: 'La atencion del personal y del dueño es muy buena y es comida verdadera argentina.', date: 'Hace 6 años' },
  { text: 'Un lugar muy familiar. Seguro y se come delicioso. Muy al estilo argentino.', date: 'Hace 6 años' },
  { text: 'Soy argentino me gusto, exquisitas las empanadas, very good hasta ahora en Miami.', date: 'Hace 3 años' },
  { text: 'Super limpio, ambiente muy sabroso, la comida buenisima y la atencion insuperable.', date: 'Hace 3 años' },
  { text: 'Excelente lugar. Comida fantastica. Buenos precios y ambiente relajado.', date: 'Hace 2 años' },
  { text: 'Aunque es un restaurante muy pequeño, la comida es excelente, sobre todo la Tabla de carnes.', date: 'Hace 7 años' },
];

export default function Home() {
  const { t, lang } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section id="hero" className="relative h-screen flex items-stretch overflow-hidden" style={{ y: y1 }}>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(45deg, #74ACDF 25%, white 25%, white 50%, #74ACDF 50%, #74ACDF 75%, white 75%)',
            backgroundSize: '60px 60px'
          }}
        >
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(116,172,223,0.3) 0%, transparent 50%)',
            }}
          />
        </div>

         {/* Floating Particles - deterministic positions to avoid hydration mismatch */}
         {[
           { left: 15, top: 20, color: '#74ACDF', duration: 4, delay: 0 },
           { left: 45, top: 60, color: '#FFFFFF', duration: 5, delay: 0.5 },
           { left: 75, top: 30, color: '#FCD116', duration: 3.5, delay: 1 },
           { left: 25, top: 80, color: '#74ACDF', duration: 4.5, delay: 1.5 },
           { left: 85, top: 50, color: '#FFFFFF', duration: 3, delay: 2 },
           { left: 35, top: 10, color: '#FCD116', duration: 5.5, delay: 0.8 },
           { left: 65, top: 70, color: '#74ACDF', duration: 4, delay: 1.2 },
           { left: 10, top: 45, color: '#FFFFFF', duration: 3.8, delay: 0.3 },
           { left: 50, top: 90, color: '#FCD116', duration: 4.2, delay: 1.8 },
           { left: 90, top: 25, color: '#74ACDF', duration: 3.2, delay: 0.7 },
           { left: 30, top: 55, color: '#FFFFFF', duration: 5, delay: 1.3 },
           { left: 70, top: 15, color: '#FCD116', duration: 4.8, delay: 0.9 },
           { left: 20, top: 75, color: '#74ACDF', duration: 3.6, delay: 1.6 },
           { left: 60, top: 40, color: '#FFFFFF', duration: 4.4, delay: 0.4 },
           { left: 95, top: 65, color: '#FCD116', duration: 5.2, delay: 1.1 },
           { left: 40, top: 85, color: '#74ACDF', duration: 3.4, delay: 1.9 },
           { left: 80, top: 35, color: '#FFFFFF', duration: 4.6, delay: 0.6 },
           { left: 5, top: 50, color: '#FCD116', duration: 5.4, delay: 1.4 },
           { left: 55, top: 20, color: '#74ACDF', duration: 3.3, delay: 0.2 },
           { left: 85, top: 70, color: '#FFFFFF', duration: 4.7, delay: 1.7 },
         ].map((p, i) => (
           <motion.div
             key={i}
             className="absolute w-2 h-2 rounded-full"
             style={{
               background: p.color,
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -100, 0],
               opacity: [0, 1, 0],
               scale: [0, 1.5, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/sabores-argentinos1.jpg"
            className="w-full h-full object-cover"
            id="hero-video"
          >
            <source src="/images/video-hero.mp4" type="video/mp4" />
            <source src="/images/video-hero.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Argentina Flag */}
        <div className="absolute top-4 right-4 z-20 opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex flex-col w-16 h-10 rounded-sm overflow-hidden shadow-lg">
            <div className="h-1/3 bg-[#74ACDF]" />
            <div className="h-1/3 bg-white" />
            <div className="h-1/3 bg-[#74ACDF]" />
          </div>
        </div>

        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', function() {
            var video = document.getElementById('hero-video');
            if (video) {
              video.play().catch(function(e) {
                console.log('Video autoplay failed:', e);
              });
            }
          });
        `}} />

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-primary mb-6"
              />

              {/* Luxury Gold Divider */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 120, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6"
              />

              <motion.h1
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-big-shoulders text-[110px] leading-none text-white mb-2"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,215,0,0.3)' }}
              >
                {t('hero.title1')}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-big-shoulders text-[110px] leading-none mb-6"
                style={{
                  color: '#FFD700',
                  textShadow: '0 4px 30px rgba(255,215,0,0.4), 0 0 60px rgba(255,215,0,0.2)',
                  WebkitTextStroke: '1px rgba(255,255,255,0.3)'
                }}
              >
                {t('hero.title2')}
              </motion.h1>

              {/* Decorative Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
              />

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-instrument-serif text-[26px] text-white/95 mb-8"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 flex-wrap"
              >
                <motion.a
                  href="#menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primaryDark text-white font-big-shoulders text-[28px] px-8 py-3 rounded-full transition-colors inline-block"
                >
                  {t('hero.cta_menu')}
                </motion.a>
                <motion.a
                  href="#reservation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-big-shoulders text-[28px] px-8 py-3 rounded-full transition-all inline-block"
                >
                  {t('hero.cta_reserve')}
                </motion.a>
              </motion.div>

              {/* Scrolling Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-white/60"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

       {/* About Us Section */}
       <section id="about" className="py-20 px-4 relative overflow-hidden">
         {/* Cream Background with Subtle Pattern */}
         <div className="absolute inset-0 z-0 bg-white-pattern" />
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 10, top: 15, duration: 4, delay: 0 },
           { left: 25, top: 45, duration: 5, delay: 0.5 },
           { left: 40, top: 20, duration: 4.5, delay: 1 },
           { left: 55, top: 60, duration: 3.5, delay: 1.5 },
           { left: 70, top: 35, duration: 5.5, delay: 0.8 },
           { left: 85, top: 70, duration: 4.2, delay: 1.2 },
           { left: 15, top: 85, duration: 3.8, delay: 0.3 },
           { left: 30, top: 50, duration: 5.2, delay: 1.8 },
           { left: 45, top: 10, duration: 4.8, delay: 0.7 },
           { left: 60, top: 75, duration: 3.2, delay: 1.3 },
           { left: 75, top: 40, duration: 5.8, delay: 0.9 },
           { left: 90, top: 65, duration: 4.4, delay: 1.1 },
           { left: 20, top: 30, duration: 3.6, delay: 1.6 },
           { left: 35, top: 80, duration: 5.6, delay: 0.4 },
           { left: 50, top: 55, duration: 4.6, delay: 1.4 },
         ].map((p, i) => (
           <motion.div
             key={`particle-about-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -80, 0],
               opacity: [0, 0.6, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img src="/images/about.jpg" alt="About Sabores Argentinos" className="w-full h-80 object-cover rounded-lg shadow-2xl" />
              <div className="absolute inset-0 border-4 border-[#FFD700] rounded-lg pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="font-big-shoulders mb-6"
              style={{ 
                fontSize: '72px',
                color: '#8b4513',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {lang === 'en' ? 'AUTHENTIC ARGENTINE CUISINE' : 'COCINA ARGENTINA AUTÉNTICA'}
            </h2>
            <p className="font-instrument-serif text-[20px] mb-6" style={{ color: '#5a3a1a' }}>
              {lang === 'en'
                ? 'Experience the true taste of Argentina in the heart of Miami. From our famous empanadas to premium grilled meats, every dish is crafted with traditional recipes and passion.'
                : 'Experimente el verdadero sabor de Argentina en el corazón de Miami. Desde nuestras famosas empanadas hasta carnes premium a la parrilla, cada plato está elaborado con recetas tradicionales y pasión.'
              }
            </p>
            <p className="font-instrument-serif text-[20px] mb-8" style={{ color: '#5a3a1a' }}>
              {lang === 'en'
                ? 'Our family-owned restaurant brings the authentic asado experience to Miami, serving the community with love and dedication since day one.'
                : 'Nuestro restaurante de familia trae la auténtica experiencia de asado argentino a Miami, sirviendo a la comunidad con amor y dedicación desde el día uno.'
              }
            </p>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block font-big-shoulders text-[28px] px-8 py-3 rounded-full transition-colors"
              style={{
                backgroundColor: '#8b4513',
                color: 'white',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6b3410'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8b4513'}
            >
              {lang === 'en' ? 'Learn More' : 'Saber Más'}
            </motion.a>
          </motion.div>
        </div>
      </section>

       {/* Menu Section */}
       <section id="menu" className="py-20 px-4 relative overflow-hidden">
         {/* Meat Image Background */}
         <div className="absolute inset-0 z-0">
           <img src="/images/menu.jpg" alt="Menu Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/60" />
         </div>
        
        {/* Floating Light Blue Particles */}
        {[
          { left: 12, top: 25, duration: 3, delay: 0 },
          { left: 28, top: 55, duration: 4, delay: 0.5 },
          { left: 45, top: 15, duration: 3.5, delay: 1 },
          { left: 62, top: 70, duration: 4.5, delay: 1.5 },
          { left: 78, top: 35, duration: 3.2, delay: 0.8 },
          { left: 18, top: 80, duration: 4.2, delay: 1.2 },
          { left: 35, top: 45, duration: 3.8, delay: 0.3 },
          { left: 52, top: 10, duration: 4.8, delay: 1.8 },
          { left: 68, top: 60, duration: 3.4, delay: 0.7 },
          { left: 85, top: 25, duration: 4.4, delay: 1.3 },
          { left: 22, top: 75, duration: 3.6, delay: 0.9 },
          { left: 42, top: 40, duration: 4.6, delay: 1.1 },
        ].map((p, i) => (
          <motion.div
            key={`menu-particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-20"
        >
          {/* Menu Title */}
          <h1 
            className="font-big-shoulders text-center mb-12"
            style={{ 
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '6px',
              textTransform: 'uppercase',
              color: '#8b4513',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {lang === 'en' ? 'MEAT MENU' : 'MENÚ DE CARNES'}
          </h1>

          {/* Dark Menu Container with Page Flip */}
          <div className="relative rounded-lg shadow-2xl overflow-hidden bg-menu-dark/60 border-4 border-menu backdrop-blur-sm">
            {/* Ribbon Decorative Element */}
            <div className="absolute top-4 right-4 z-20">
              <div 
                className="inline-block text-white italic font-instrument-serif px-7 py-1.5 text-[1.1rem]"
                style={{ 
                  background: '#c0392b',
                  clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)'
                }}
              >
                ¡Buen Provecho!
              </div>
            </div>

            {/* Menu Header */}
            <div className="text-center py-8 px-6 border-b border-menu" style={{ backgroundColor: 'rgba(28,23,20,0.4)' }}>
              <h2 
                className="font-big-shoulders mb-2"
                style={{ 
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                  color: '#ffffff',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.4)'
                }}
              >
                SABORES ARGENTINOS
              </h2>
              <p className="font-instrument-serif text-[18px] italic" style={{ color: '#dddddd' }}>
                {lang === 'en' ? 'Authentic Argentine Cuisine' : 'Cocina Argentina Auténtica'}
              </p>
            </div>

            {/* Menu Categories with Page Flip Animation */}
            <div className="p-6 space-y-6 relative z-10">
              {[
                {
                  title: "Starters / Entradas",
                  items: [
                    { name: "Turnovers / Empanadas", price: "3.50" },
                    { name: "Spinach and Eggs Tart", price: "7.25" },
                    { name: "Eggplant Florentina", price: "12.25" },
                    { name: "Provolone Cheese / Provoleta", price: "9.25" },
                    { name: "Fried Yucca / Yuca Frita", price: "7.50" },
                    { name: "French Fries / Papas Fritas", price: "7.75" },
                  ]
                },
                {
                  title: "From the Grill / Parrilla",
                  items: [
                    { name: "Flank Meat / Vacío (+8 oz)", price: "19.75" },
                    { name: "Picanha / Picana (+8 oz)", price: "20.75" },
                    { name: "Skirt Steak / Entraña (+8 oz)", price: "25.15" },
                    { name: "New York Strip / Bife de Chorizo", price: "25.25" },
                    { name: "Barbecue for 2 / Parrillada para 2", price: "69.50" },
                  ]
                },
                {
                  title: "Our Kitchen / Nuestra Cocina",
                  items: [
                    { name: "Breaded Meat with Fries", price: "16.50" },
                    { name: "Breaded Chicken Breast", price: "15.50" },
                    { name: "Meat or Chicken Fajita with Rice", price: "16.35" },
                  ]
                },
                {
                  title: "Pasta & Rice / Pastas y Arroces",
                  items: [
                    { name: "Gnocchi / Ñoquis", price: "15.50" },
                    { name: "Meat Lasagna", price: "19.25" },
                    { name: "Rice with Chicken", price: "17.25" },
                  ]
                },
                {
                  title: "Desserts / Postres",
                  items: [
                    { name: "Custard / Flan", price: "5.50" },
                    { name: "Bread Pudding", price: "5.30" },
                    { name: "Cornstarch Alfajores (2)", price: "6.50 / 11.75" },
                  ]
                },
                {
                  title: "Drinks / Bebidas",
                  items: [
                    { name: "Soft drinks", price: "2.90" },
                    { name: "Natural Orange Juice", price: "5.70" },
                    { name: "Natural Lemonade", price: "3.90" },
                  ]
                }
              ].map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.2, duration: 0.8 }}
                  className="rounded-lg p-5"
                  style={{ 
                    backgroundColor: 'rgba(37,33,32,0.5)',
                    transformOrigin: 'left center',
                    borderLeft: '3px solid #e8823a',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <h3 
                    className="font-bold uppercase mb-4"
                    style={{ 
                      fontFamily: 'Arial Black, sans-serif',
                      fontSize: '0.9rem',
                      letterSpacing: '3px',
                      color: '#e8823a',
                      textAlign: 'center'
                    }}
                  >
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIdx * 0.2) + (itemIdx * 0.05) }}
                        className="flex justify-between items-center"
                        style={{ color: '#dddddd', fontSize: '0.9rem' }}
                      >
                        <span className="flex-1">{item.name}</span>
                        <div className="flex-1 border-b border-dotted mx-2" style={{ borderColor: '#555555' }} />
                        <span 
                          className="font-semibold text-right"
                          style={{ 
                            color: '#ffffff',
                            fontFamily: 'monospace',
                            minWidth: '32px'
                          }}
                        >
                          ${item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  {catIdx < 5 && <hr className="border-t mt-4" style={{ borderColor: '#3a3330' }} />}
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="text-center py-4 px-6 border-t border-menu" style={{ backgroundColor: 'rgba(28,23,20,0.4)' }}>
              <p className="font-instrument-serif text-[12px] italic" style={{ color: '#dddddd' }}>
                {lang === 'en' 
                  ? "Consuming raw or undercooked meats may increase your risk of food borne illness. Shared plates have an additional charge of $3.00"
                  : "El consumo de carnes crudas o poco cocidas puede aumentar el riesgo de enfermedades. Los platos compartidos tienen un cargo adicional de $3.00"
                }
              </p>
            </div>
          </div>
        </motion.div>
       </section>

       {/* Shows Section */}
       <section id="shows" className="py-20 px-4 relative overflow-hidden">
         {/* Light Blue Background */}
         <div className="absolute inset-0 z-0 bg-blue-light" />
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 8, top: 20, duration: 3, delay: 0 },
           { left: 22, top: 50, duration: 4, delay: 0.5 },
           { left: 38, top: 15, duration: 3.5, delay: 1 },
           { left: 55, top: 65, duration: 4.5, delay: 1.5 },
           { left: 72, top: 30, duration: 3.2, delay: 0.8 },
           { left: 15, top: 75, duration: 4.2, delay: 1.2 },
           { left: 30, top: 40, duration: 3.8, delay: 0.3 },
           { left: 48, top: 10, duration: 4.8, delay: 1.8 },
           { left: 65, top: 55, duration: 3.4, delay: 0.7 },
           { left: 82, top: 25, duration: 4.4, delay: 1.3 },
           { left: 20, top: 70, duration: 3.6, delay: 0.9 },
           { left: 40, top: 45, duration: 4.6, delay: 1.1 },
         ].map((p, i) => (
           <motion.div
             key={`shows-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 
              className="font-big-shoulders mb-4"
              style={{ 
                fontSize: '72px',
                color: '#8b4513',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {lang === 'en' ? 'DINNER SHOWS & EVENTS' : 'CENAS SHOWS Y EVENTOS'}
            </h1>
            <p 
              className="font-instrument-serif mb-12"
              style={{ 
                fontSize: '20px',
                color: '#000000'
              }}
            >
              {lang === 'en' ? 'Experience Tango and Bolero nights in Miami' : 'Experimente noches de Tango y Bolero en Miami'}
            </p>

            <div className="rounded-lg shadow-2xl overflow-hidden border-4" style={{ borderColor: '#d4c89a' }}>
              <img src="/images/tango.jpg" alt="Tango Show" className="w-full h-96 object-cover" />
              <div className="p-8" style={{ backgroundColor: 'rgba(250,243,230,0.85)' }}>
                <h2 
                  className="font-big-shoulders mb-4"
                  style={{ color: '#000000' }}
                >
                  {lang === 'en' ? 'Tango & Bolero Nights' : 'Noches de Tango y Bolero'}
                </h2>
                <p 
                  className="font-instrument-serif mb-4"
                  style={{ color: '#000000' }}
                >
                  {lang === 'en' 
                    ? "Experience authentic Argentine Tango and Bolero performances while enjoying our delicious cuisine."
                    : "Experimente auténticas presentaciones de Tango y Bolero mientras disfruta de nuestra deliciosa cocina."
                  }
                </p>
                <div className="p-6 rounded-lg border-2" style={{ backgroundColor: 'rgba(245,230,211,0.85)', borderColor: '#d4c89a' }}>
                  <h3 
                    className="font-big-shoulders mb-4"
                    style={{ color: '#000000' }}
                  >
                    {lang === 'en' ? 'Upcoming Event' : 'Próximo Evento'}
                  </h3>
                  <p 
                    className="font-instrument-serif font-semibold mb-2"
                    style={{ color: '#000000' }}>JUEVES 27 DE JUNIO DE 2024</p>
                  <p 
                    className="font-instrument-serif mb-4"
                    style={{ color: '#000000' }}>Jueves de Bolero - Bolero Thursday Night</p>
                  <img src="/images/upcoming-events.jpg" alt="Upcoming Events" className="w-full h-auto object-contain rounded-lg mt-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Featured Dishes */}
       <section className="py-20 relative overflow-hidden">
         {/* Meat Image Background */}
         <div className="absolute inset-0 z-0">
           <img src="/images/freshly-cut-meat.jpg" alt="Fresh Meat" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/50" />
         </div>
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 10, top: 30, duration: 4, delay: 0 },
           { left: 25, top: 60, duration: 5, delay: 0.5 },
           { left: 40, top: 20, duration: 4.5, delay: 1 },
           { left: 55, top: 70, duration: 3.5, delay: 1.5 },
           { left: 70, top: 40, duration: 5.5, delay: 0.8 },
           { left: 85, top: 65, duration: 4.2, delay: 1.2 },
           { left: 15, top: 85, duration: 3.8, delay: 0.3 },
           { left: 30, top: 50, duration: 5.2, delay: 1.8 },
           { left: 45, top: 15, duration: 4.8, delay: 0.7 },
           { left: 60, top: 75, duration: 3.2, delay: 1.3 },
         ].map((p, i) => (
           <motion.div
             key={`featured-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-big-shoulders text-[72px] text-center mb-4"
            style={{ 
              color: '#8b4513',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {t('featured.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-instrument-serif text-[20px] text-center mb-12"
            style={{ color: '#5a3a1a' }}
          >
            {t('featured.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: '2px solid #d4c89a'
                }}
              >
                <img src={dish.image} alt={lang === 'en' ? dish.name : dish.nameEs} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 
                    className="font-big-shoulders text-[36px] mb-2"
                    style={{ color: '#8b4513' }}
                  >
                    {lang === 'en' ? dish.name : dish.nameEs}
                  </h3>
                  <p 
                    className="font-instrument-serif text-[24px] font-semibold"
                    style={{ color: '#8b4513' }}
                  >${dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Gallery */}
       <section className="py-20 px-4 relative overflow-hidden">
         {/* White Pattern Background */}
         <div className="absolute inset-0 z-0 bg-white-pattern" />
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 10, top: 25, duration: 3, delay: 0 },
           { left: 25, top: 55, duration: 4, delay: 0.5 },
           { left: 40, top: 15, duration: 3.5, delay: 1 },
           { left: 55, top: 70, duration: 4.5, delay: 1.5 },
           { left: 70, top: 35, duration: 3.2, delay: 0.8 },
           { left: 85, top: 65, duration: 4.2, delay: 1.2 },
           { left: 15, top: 80, duration: 3.8, delay: 0.3 },
           { left: 30, top: 45, duration: 4.8, delay: 1.8 },
           { left: 45, top: 10, duration: 3.4, delay: 0.7 },
           { left: 60, top: 75, duration: 4.4, delay: 1.3 },
         ].map((p, i) => (
           <motion.div
             key={`gallery-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-big-shoulders text-[72px] text-center mb-12"
            style={{ 
              color: '#8b4513',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {lang === 'en' ? 'GALLERY' : 'GALERÍA'}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
                style={{ 
                  border: '3px solid #d4c89a'
                }}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Expanded Image Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl max-h-screen"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Expanded Gallery Image" 
                  className="w-full h-auto max-h-screen object-contain rounded-lg" 
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

       {/* Testimonials */}
       <section className="py-20 px-4 relative overflow-hidden">
         {/* Gradient Blue Background */}
         <div className="absolute inset-0 z-0 bg-gradient-blue" />
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 12, top: 20, duration: 4, delay: 0 },
           { left: 28, top: 50, duration: 5, delay: 0.5 },
           { left: 45, top: 15, duration: 4.5, delay: 1 },
           { left: 62, top: 65, duration: 3.5, delay: 1.5 },
           { left: 78, top: 35, duration: 5.5, delay: 0.8 },
           { left: 18, top: 75, duration: 4.2, delay: 1.2 },
           { left: 35, top: 40, duration: 3.8, delay: 0.3 },
           { left: 52, top: 10, duration: 4.8, delay: 1.8 },
           { left: 68, top: 55, duration: 3.4, delay: 0.7 },
           { left: 85, top: 25, duration: 4.4, delay: 1.3 },
         ].map((p, i) => (
           <motion.div
             key={`testimonials-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-big-shoulders text-[72px] text-center mb-4"
            style={{ 
              color: '#8b4513',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {lang === 'en' ? 'WHAT OUR CUSTOMERS SAY' : 'QUÉ DICEN NUESTROS CLIENTES'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-instrument-serif text-[20px] text-center mb-12"
            style={{ color: '#faf3e6' }}
          >
            {lang === 'en' ? "Real reviews from real diners" : "Reseñas reales de comensales reales"}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg shadow-xl p-8"
                style={{ 
                  backgroundColor: 'rgba(250,243,230,0.95)',
                  borderLeft: '4px solid #FFD700'
                }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-6 h-6" style={{ color: '#FFD700' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p 
                  className="font-instrument-serif text-[18px] mb-4"
                  style={{ color: '#5a3a1a' }}
                >"{testimonial.text}"</p>
                <p 
                  className="font-big-shoulders text-[16px]"
                  style={{ color: '#8b4513' }}
                >{testimonial.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Reservation Section */}
       <section id="reservation" className="py-20 relative overflow-hidden">
         {/* Burgundy/Wine Background */}
         <div className="absolute inset-0 z-0 bg-reservation" />
         
         {/* Floating Gold Particles */}
         {[
           { left: 8, top: 22, duration: 4, delay: 0 },
           { left: 24, top: 52, duration: 5, delay: 0.5 },
           { left: 42, top: 18, duration: 4.5, delay: 1 },
           { left: 58, top: 68, duration: 3.5, delay: 1.5 },
           { left: 75, top: 32, duration: 5.5, delay: 0.8 },
           { left: 15, top: 78, duration: 4.2, delay: 1.2 },
           { left: 32, top: 42, duration: 3.8, delay: 0.3 },
           { left: 48, top: 12, duration: 4.8, delay: 1.8 },
           { left: 65, top: 58, duration: 3.4, delay: 0.7 },
           { left: 82, top: 28, duration: 4.4, delay: 1.3 },
         ].map((p, i) => (
           <motion.div
             key={`reservation-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full"
             style={{ backgroundColor: '#FFD700' }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 
              className="font-big-shoulders mb-4"
              style={{ 
                fontSize: '72px',
                color: '#8b4513',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {lang === 'en' ? 'RESERVE YOUR TABLE' : 'RESERVE SU MESA'}
            </h1>
            <p 
              className="font-instrument-serif mb-4"
              style={{ 
                fontSize: '20px',
                color: '#faf3e6'
              }}
            >
              {lang === 'en' ? 'Book online and we\'ll confirm via phone' : 'Reserve en línea y confirmaremos por teléfono'}
            </p>
            <p 
              className="font-instrument-serif"
              style={{ 
                fontSize: '16px',
                color: '#FFD700'
              }}
            >
              {lang === 'en' ? 'For immediate booking, please call (786) 360-2110' : 'Para reservas inmediatas, llame al (786) 360-2110'}
            </p>
          </motion.div>
         
          <div className="bg-[#faf3e6] rounded-lg shadow-2xl p-8 border-4" style={{ borderColor: '#d4c89a' }}>
            <ReservationForm lang={lang} />
          </div>
        </div>
       </section>

       {/* Contact Section */}
       <section id="contact" className="py-20 px-4 relative overflow-hidden">
         {/* Cream Solid Background */}
         <div className="absolute inset-0 z-0 bg-cream-solid" />
        
         {/* Floating Light Blue Particles */}
         {[
           { left: 10, top: 28, duration: 4, delay: 0 },
           { left: 26, top: 58, duration: 5, delay: 0.5 },
           { left: 44, top: 22, duration: 4.5, delay: 1 },
           { left: 60, top: 72, duration: 3.5, delay: 1.5 },
           { left: 76, top: 38, duration: 5.5, delay: 0.8 },
           { left: 16, top: 82, duration: 4.2, delay: 1.2 },
           { left: 34, top: 48, duration: 3.8, delay: 0.3 },
           { left: 50, top: 14, duration: 4.8, delay: 1.8 },
           { left: 66, top: 62, duration: 3.4, delay: 0.7 },
           { left: 84, top: 32, duration: 4.4, delay: 1.3 },
         ].map((p, i) => (
           <motion.div
             key={`contact-particle-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#74ACDF] z-0"
             style={{
               left: `${p.left}%`,
               top: `${p.top}%`,
             }}
             animate={{
               y: [0, -60, 0],
               opacity: [0, 0.5, 0],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: p.duration,
               repeat: Infinity,
               delay: p.delay,
             }}
           />
         ))}

        {/* Gold border frame */}
        <div className="absolute inset-0 border-4 border-[#FFD700] m-4 pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 
              className="font-big-shoulders mb-6"
              style={{ 
                fontSize: '72px',
                color: '#000000',
                textShadow: '2px 2px 4px rgba(255,255,255,0.3)'
              }}
            >
              {lang === 'en' ? 'GET IN TOUCH' : 'CONTÁCTENOS'}
            </h1>
            <p 
              className="font-instrument-serif mb-8"
              style={{ 
                fontSize: '20px',
                color: '#000000'
              }}
            >
              {lang === 'en' ? "We'd love to hear from you" : "Nos encantaría saber de usted"}
            </p>
            
            <div className="space-y-4 font-instrument-serif mb-8" style={{ color: '#000000', fontSize: '18px' }}>
              <p><strong style={{ color: '#8b4513' }}>{lang === 'en' ? 'Address:' : 'Dirección:'}</strong> 9648 SW 24 St, Miami, FL 33165</p>
              <p><strong style={{ color: '#8b4513' }}>{lang === 'en' ? 'Phone:' : 'Teléfono:'}</strong> (786) 360-2110</p>
              <p><strong style={{ color: '#8b4513' }}>Email:</strong> eat@saboresargentinosmiami.com</p>
              <div>
                <p className="font-big-shoulders text-[24px] mb-2" style={{ color: '#8b4513' }}>{lang === 'en' ? 'Hours' : 'Horarios'}</p>
                <p style={{ color: '#000000' }}>Mon-Thu: 11:30 AM - 7:00 PM</p>
                <p style={{ color: '#000000' }}>Fri-Sat: 11:30 AM - 8:30 PM</p>
                <p style={{ color: '#000000' }}>Sun: Closed</p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.9823485704477!2d-80.350208!3d25.7467418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8c7224e2423%3A0xb78a76fb164b651!2sSabores%20Argentinos!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#faf3e6] rounded-lg shadow-2xl p-8 border-4" style={{ borderColor: '#d4c89a' }}>
              <ContactForm lang={lang} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ReservationForm({ lang }: { lang: string }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string));
    formData.append('_to', 'eat@saboresargentinosmiami.com');
    formData.append('_subject', lang === 'en' ? 'New Reservation Request' : 'Nueva Solicitud de Reserva');

    try {
      const response = await fetch('https://formspree.io/f/mwkagqzy', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error('Form error:', error);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="font-big-shoulders text-[48px] text-foreground mb-4">{lang === 'en' ? 'Thank You!' : '¡Gracias!'}</h2>
        <p className="font-instrument-serif text-[20px] text-gray-600 mb-8">
          {lang === 'en' ? "We'll confirm your reservation via phone shortly." : "Confirmaremos su reserva por teléfono pronto."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">
          {lang === 'en' ? 'Full Name *' : 'Nombre Completo *'}
        </label>
        <input {...register('name', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Email *' : 'Correo Electrónico *'}</label>
          <input type="email" {...register('email', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Phone *' : 'Número de Teléfono *'}</label>
          <input type="tel" {...register('phone', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Date *' : 'Fecha *'}</label>
          <input type="date" {...register('date', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Time *' : 'Hora *'}</label>
          <input type="time" {...register('time', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Guests *' : 'Invitados *'}</label>
          <select {...register('guests', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary">
            <option value="">{lang === 'en' ? 'Select...' : 'Seleccionar...'}</option>
            {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Special Requests' : 'Solicitudes Especiales'}</label>
        <textarea {...register('requests')} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-primary hover:bg-primaryDark text-white font-big-shoulders text-[32px] py-4 rounded transition-colors"
      >
        {lang === 'en' ? 'Book Table' : 'Reservar Mesa'}
      </motion.button>
    </form>
  );
}

function ContactForm({ lang }: { lang: string }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string));
    formData.append('_to', 'eat@saboresargentinosmiami.com');
    formData.append('_subject', lang === 'en' ? 'New Contact Message' : 'Nuevo Mensaje de Contacto');

    try {
      const response = await fetch('https://formspree.io/f/mwkagqzy', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error('Form error:', error);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="font-big-shoulders text-[48px] text-foreground mb-4">{lang === 'en' ? 'Thank You!' : '¡Gracias!'}</h2>
        <p className="font-instrument-serif text-[20px] text-gray-600 mb-8">
          {lang === 'en' ? "We'll get back to you soon." : "Nos pondremos en contacto pronto."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="font-big-shoulders text-[48px] text-foreground mb-6">{lang === 'en' ? 'Send Message' : 'Enviar Mensaje'}</h2>
      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Name *' : 'Nombre Completo *'}</label>
        <input {...register('name', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>
      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Email *' : 'Correo Electrónico *'}</label>
        <input type="email" {...register('email', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>
      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Subject *' : 'Asunto *'}</label>
        <input {...register('subject', { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>
      <div>
        <label className="block font-big-shoulders text-[24px] text-foreground mb-2">{lang === 'en' ? 'Message *' : 'Mensaje *'}</label>
        <textarea {...register('message', { required: true })} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-instrument-serif text-[18px] focus:outline-none focus:border-primary" />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-primary hover:bg-primaryDark text-white font-big-shoulders text-[32px] py-4 rounded transition-colors"
      >
        {lang === 'en' ? 'Send Message' : 'Enviar Mensaje'}
      </motion.button>
    </form>
  );
}
