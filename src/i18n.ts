import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        reservation: "Reservation",
        contact: "Contact",
        shows: "Shows",
        hours: "Hours"
      },
      hero: {
        title1: "SABORES",
        title2: "ARGENTINOS",
        subtitle: "Authentic Argentine Flavors in Miami",
        cta_menu: "View Menu",
        cta_reserve: "Reserve Table"
      },
      about: {
        title: "AUTHENTIC ARGENTINE CUISINE",
        description: "Experience the true taste of Argentina in the heart of Miami. From our famous empanadas to premium grilled meats, every dish is crafted with traditional recipes and passion.",
        cta: "Learn More"
      },
      featured: {
        title: "CHEF'S PICKS",
        subtitle: "Our Signature Dishes"
      },
      testimonials: {
        title: "WHAT OUR CUSTOMERS SAY",
        subtitle: "Real reviews from real diners"
      },
      menu: {
        title: "OUR MENU",
        subtitle: "Authentic Argentine Cuisine",
        disclaimer: "Consuming raw or undercooked meats may increase your risk of food borne illness. Shared plates have an additional charge of $3.00"
      },
      reservation: {
        title: "RESERVE YOUR TABLE",
        subtitle: "Book online and we'll confirm via phone",
        note: "For immediate booking, please call (786) 360-2110",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          date: "Date",
          time: "Time",
          guests: "Number of Guests",
          requests: "Special Requests",
          submit: "Book Table"
        }
      },
      contact: {
        title: "GET IN TOUCH",
        subtitle: "We'd love to hear from you",
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
          submit: "Send Message"
        },
        info: {
          address: "9648 SW 24 St, Miami, FL 33165",
          phone: "(786) 360-2110",
          email: "eat@saboresargentinosmiami.com",
          hours: "Hours"
        }
      },
      hours: {
        title: "STORE HOURS",
        mon_thu: "Monday to Thursday",
        mon_thu_time: "11:30 AM - 7:00 PM",
        fri_sat: "Friday and Saturday",
        fri_sat_time: "11:30 AM - 8:30 PM",
        sun: "Sunday",
        sun_time: "Closed",
        promo_title: "BIRTHDAY PROMOTION",
        promo_text: "On the day of your birthday and up to five days after or before, come with your family and friends to celebrate at SABORES ARGENTINOS and we give you a bottle of Argentinean wine for free. This promotion is valid for parties of two or more people.",
        promo_cta: "Make your reservation at (786) 360-2110"
      },
      shows: {
        title: "DINNER SHOWS & EVENTS",
        subtitle: "Experience Tango and Bolero nights in Miami"
      },
      footer: {
        newsletter: "Subscribe to our newsletter for specials & events!",
        copyright: "© 2025 Sabores Argentinos. All rights reserved.",
        design: "Crafted with love"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        menu: "Menú",
        reservation: "Reservas",
        contact: "Contacto",
        shows: "Shows",
        hours: "Horarios"
      },
      hero: {
        title1: "SABORES",
        title2: "ARGENTINOS",
        subtitle: "Auténticos Sabores Argentinos en Miami",
        cta_menu: "Ver Menú",
        cta_reserve: "Reservar Mesa"
      },
      about: {
        title: "COCINA ARGENTINA AUTÉNTICA",
        description: "Experimente el verdadero sabor de Argentina en el corazón de Miami. Desde nuestras famosas empanadas hasta carnes premium a la parrilla, cada plato está elaborado con recetas tradicionales y pasión.",
        cta: "Saber Más"
      },
      featured: {
        title: "PICKS DEL CHEF",
        subtitle: "Nuestros Platos Signature"
      },
      testimonials: {
        title: "QUÉ DICEN NUESTROS CLIENTES",
        subtitle: "Reseñas reales de comensales reales"
      },
      menu: {
        title: "NUESTRO MENÚ",
        subtitle: "Cocina Argentina Auténtica",
        disclaimer: "El consumo de carnes crudas o poco cocidas puede aumentar el riesgo de enfermedades. Los platos compartidos tienen un cargo adicional de $3.00"
      },
      reservation: {
        title: "RESERVE SU MESA",
        subtitle: "Reserve en línea y confirmaremos por teléfono",
        note: "Para reservas inmediatas, llame al (786) 360-2110",
        form: {
          name: "Nombre Completo",
          email: "Correo Electrónico",
          phone: "Número de Teléfono",
          date: "Fecha",
          time: "Hora",
          guests: "Número de Invitados",
          requests: "Solicitudes Especiales",
          submit: "Reservar Mesa"
        }
      },
      contact: {
        title: "CONTÁCTENOS",
        subtitle: "Nos encantaría saber de usted",
        form: {
          name: "Nombre Completo",
          email: "Correo Electrónico",
          subject: "Asunto",
          message: "Mensaje",
          submit: "Enviar Mensaje"
        },
        info: {
          address: "9648 SW 24 St, Miami, FL 33165",
          phone: "(786) 360-2110",
          email: "eat@saboresargentinosmiami.com",
          hours: "Horarios"
        }
      },
      hours: {
        title: "HORARIOS",
        mon_thu: "Lunes a Jueves",
        mon_thu_time: "11:30 AM - 7:00 PM",
        fri_sat: "Viernes y Sábados",
        fri_sat_time: "11:30 AM - 8:30 PM",
        sun: "Domingo",
        sun_time: "Cerrado",
        promo_title: "PROMOCIÓN CUMPLEAÑOS",
        promo_text: "En el día de su cumpleaños y hasta cinco días posteriores o anteriores, venga con su familia o amigos a festejar en SABORES ARGENTINOS y le regalaremos una botella de vino argentino. Válido para mesas de 2+ personas.",
        promo_cta: "Haga su reserva al (786) 360-2110"
      },
      shows: {
        title: "CENAS SHOWS Y EVENTOS",
        subtitle: "Experimente noches de Tango y Bolero en Miami"
      },
      catering: {
        title: "CATERING Y COCINA EN SITIO",
        subtitle: "Lleve el auténtico asado argentino a su casa u oficina",
        description: "Ofrecemos servicios de catering de asado en sitio para sus eventos especiales. Nuestro equipo preparará auténticas carnes a la parrilla.",
        cta: "Solicitar Cotización"
      },
      footer: {
        newsletter: "¡Suscríbase a nuestro boletín para especiales y eventos!",
        copyright: "© 2025 Sabores Argentinos. Todos los derechos reservados.",
        design: "Hecho con amor"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
