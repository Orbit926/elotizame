const landingContent = {
  // ─── BUSINESS INFO ────────────────────────────────────────
  business: {
    name: 'El Rincón del Elote',
    slogan: 'El mejor elote de la ciudad',
    shortDescription:
      'Elotes preparados, esquites y snacks callejeros con los mejores ingredientes y el sazón que te hará volver.',
    phone: '+525512345678',
    whatsapp: '525512345678',
    whatsappMessage: '¡Hola! Quiero hacer un pedido 🌽',
    email: 'hola@rincondeelote.com',
    social: {
      instagram: 'https://instagram.com/rincondeelote',
      facebook: 'https://facebook.com/rincondeelote',
      tiktok: 'https://tiktok.com/@rincondeelote',
    },
  },

  // ─── NAVBAR ───────────────────────────────────────────────
  navbar: {
    logo: null,
    links: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Menú', href: '#menu' },
      { label: 'Nosotros', href: '#about' },
      { label: 'Ubicación', href: '#location' },
      { label: 'Contacto', href: '#contact' },
    ],
    ctaLabel: 'Pedir ahora',
  },

  // ─── HERO ─────────────────────────────────────────────────
  hero: {
    headline: 'El mejor elote preparado de la ciudad',
    subheadline:
      'Ingredientes frescos, salsas caseras y el sazón que te hará regresar. ¡Pide el tuyo ahora!',
    backgroundImage: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1400&q=80',
    ctaPrimary: {
      label: '🌽 Pedir por WhatsApp',
      href: '#whatsapp',
    },
    ctaSecondary: {
      label: 'Ver menú',
      href: '#menu',
    },
    badge: '⭐ +500 clientes felices',
  },

  // ─── QUICK INFO ───────────────────────────────────────────
  quickInfo: [
    {
      icon: 'Schedule',
      label: 'Horario',
      value: 'Lun - Dom · 12:00 - 22:00',
    },
    {
      icon: 'LocationOn',
      label: 'Ubicación',
      value: 'Av. Revolución 234, Col. Centro',
    },
    {
      icon: 'LocalDining',
      label: 'Especialidad',
      value: 'Elotes y esquites preparados',
    },
    {
      icon: 'Phone',
      label: 'Teléfono',
      value: '55 1234 5678',
    },
  ],

  // ─── MENU ─────────────────────────────────────────────────
  menuCategories: ['Todo', 'Elotes', 'Esquites', 'Bebidas', 'Extras'],
  menuItems: [
    {
      id: 1,
      name: 'Elote Clásico',
      description: 'Elote con mayonesa, queso cotija, chile y limón.',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Elotes',
      badge: null,
    },
    {
      id: 2,
      name: 'Elote Loco',
      description: 'Elote con salsa de chamoy, Takis, gomitas y queso derretido.',
      price: '$55',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Elotes',
      badge: '🔥 Popular',
    },
    {
      id: 3,
      name: 'Esquites Tradicionales',
      description: 'Granos de elote con epazote, mayonesa, queso y chile.',
      price: '$40',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Esquites',
      badge: null,
    },
    {
      id: 4,
      name: 'Esquites con Tuétano',
      description: 'Esquites con tuétano de res, queso y salsa negra.',
      price: '$70',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Esquites',
      badge: '⭐ Recomendado',
    },
    {
      id: 5,
      name: 'Agua de Horchata',
      description: 'Agua fresca de horchata preparada en casa.',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
      category: 'Bebidas',
      badge: null,
    },
    {
      id: 6,
      name: 'Elote en Vaso',
      description: 'Granos de elote desgranados con todos los ingredientes.',
      price: '$38',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Elotes',
      badge: null,
    },
    {
      id: 7,
      name: 'Salsa Extra',
      description: 'Porción extra de nuestra salsa secreta.',
      price: '$10',
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
      category: 'Extras',
      badge: null,
    },
    {
      id: 8,
      name: 'Agua de Jamaica',
      description: 'Agua fresca de jamaica natural.',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
      category: 'Bebidas',
      badge: null,
    },
  ],

  // ─── FEATURED / DESTACADOS ────────────────────────────────
  featured: {
    title: 'Los más pedidos',
    subtitle: 'Lo que nuestros clientes no dejan de pedir',
    items: [
      {
        id: 1,
        name: 'Elote Loco',
        description: 'Nuestro elote más famoso con chamoy, Takis y queso derretido.',
        price: '$55',
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
        tag: '🔥 #1 en ventas',
      },
      {
        id: 2,
        name: 'Esquites con Tuétano',
        description: 'La combinación perfecta de sabor y textura.',
        price: '$70',
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
        tag: '⭐ Favorito',
      },
      {
        id: 3,
        name: 'Combo Pareja',
        description: '2 elotes + 2 esquites + 2 bebidas a precio especial.',
        price: '$180',
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80',
        tag: '💰 Ahorra $30',
      },
    ],
  },

  // ─── ABOUT ────────────────────────────────────────────────
  about: {
    title: 'Nuestra historia',
    subtitle: 'Más que un puesto de elotes',
    description:
      'Desde 2018, El Rincón del Elote ha llevado el sabor auténtico de la calle mexicana a otro nivel. Empezamos con un carrito en la esquina y hoy somos el favorito del barrio. Usamos ingredientes frescos del mercado local y nuestras salsas son 100% caseras. Cada elote es preparado al momento con el cariño y sazón que nos caracteriza.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    highlights: [
      { icon: 'EmojiEvents', label: '+5 años de experiencia' },
      { icon: 'Favorite', label: '+500 clientes felices' },
      { icon: 'Restaurant', label: 'Ingredientes frescos diarios' },
      { icon: 'Star', label: '4.9 ⭐ en Google' },
    ],
  },

  // ─── LOCATION ─────────────────────────────────────────────
  location: {
    title: 'Encuéntranos',
    address: 'Av. Revolución 234, Col. Centro, CDMX',
    reference: 'A una cuadra del metro Hidalgo, frente al parque.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661!2d-99.1525!3d19.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzQyLjIiTiA5OcKwMDknMDkuMCJX!5e0!3m2!1ses!2smx!4v1234567890',
    googleMapsLink: 'https://goo.gl/maps/example',
    schedule: [
      { days: 'Lunes a Viernes', hours: '12:00 - 22:00' },
      { days: 'Sábado y Domingo', hours: '11:00 - 23:00' },
    ],
  },

  // ─── CONTACT CTA ──────────────────────────────────────────
  contactCTA: {
    title: '¿Se te antojó?',
    subtitle: 'Haz tu pedido ahora y recoge en minutos',
    whatsappLabel: 'Pedir por WhatsApp',
    phoneLabel: 'Llamar directo',
    backgroundImage: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1400&q=80',
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: 'El sabor de la calle, elevado.',
    copyright: `© ${new Date().getFullYear()} El Rincón del Elote. Todos los derechos reservados.`,
    links: [
      { label: 'Menú', href: '#menu' },
      { label: 'Ubicación', href: '#location' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
};

export default landingContent;
