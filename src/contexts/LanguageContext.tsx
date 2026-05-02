'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  en: {
    nav: { home: "Home", menu: "Menu", reservation: "Reservation", contact: "Contact", shows: "Shows", hours: "Hours" },
    hero: { title1: "SABORES", title2: "ARGENTINOS", subtitle: "Authentic Argentine Flavors in Miami", cta_menu: "View Menu", cta_reserve: "Reserve Table" },
    about: { title: "AUTHENTIC ARGENTINE CUISINE", description: "Experience the true taste of Argentina in the heart of Miami.", cta: "Learn More" },
    featured: { title: "CHEF'S PICKS", subtitle: "Our Signature Dishes" }
  },
  es: {
    nav: { home: "Inicio", menu: "Menú", reservation: "Reservas", contact: "Contacto", shows: "Shows", hours: "Horarios" },
    hero: { title1: "SABORES", title2: "ARGENTINOS", subtitle: "Auténticos Sabores Argentinos en Miami", cta_menu: "Ver Menú", cta_reserve: "Reservar Mesa" },
    about: { title: "COCINA ARGENTINA AUTÉNTICA", description: "Experimente el verdadero sabor de Argentina en el corazón de Miami.", cta: "Saber Más" },
    featured: { title: "PICKS DEL CHEF", subtitle: "Nuestros Platos Signature" }
  }
};

interface LanguageContextType {
  lang: 'en' | 'es';
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
}
