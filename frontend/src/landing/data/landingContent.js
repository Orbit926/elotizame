const landingContent = {
  // ─── BUSINESS INFO ────────────────────────────────────────
  business: {
    name: 'Elotizame',
    slogan: 'El antojo que no puedes resistir',
    shortDescription:
      'Elotes preparados, esquites, tostielotes, tostilocos y más. El sabor callejero que te va a volar la cabeza.',
    phone: '+523325979699',
    whatsapp: '523325979699',
    whatsappMessage: '¡Hola! Quiero hacer un pedido 🌽🔥',
    whatsappMessageEvents: '¡Hola! Me interesa cotizar para un evento 🎉',
    email: 'hola@elotizame.com',
    social: {
      instagram: 'https://instagram.com/elotizame',
      facebook: 'https://facebook.com/elotizame',
    },
  },

  // ─── NAVBAR ───────────────────────────────────────────────
  navbar: {
    logo: '/img/icon/image.png',
    links: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Menú', href: '#menu' },
      { label: 'Eventos', href: '#events' },
      { label: 'Nosotros', href: '#about' },
      { label: 'Ubicación', href: '#location' },
      { label: 'Contacto', href: '#contact' },
    ],
    ctaLabel: 'Pedir ahora',
  },

  // ─── HERO ─────────────────────────────────────────────────
  hero: {
    headline: 'El elote que te va a volar la cabeza',
    subheadline:
      'Elotes preparados, esquites, tostilocos y mucho más. Ingredientes frescos, salsas caseras y el sazón que te hará regresar.',
    backgroundImage: '/img/gallery/puesto_akron.png',
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
      value: 'Lun - Dom · 14:00 - 21:00',
    },
    {
      icon: 'LocationOn',
      label: 'Ubicación',
      value: 'Av de la Presa 1953, Guadalajara',
    },
    {
      icon: 'LocalDining',
      label: 'Especialidad',
      value: 'Elotes, esquites y tostilocos',
    },
    {
      icon: 'Phone',
      label: 'Teléfono',
      value: '33 2597 9699',
    },
  ],

  // ─── MENU ─────────────────────────────────────────────────
  menuCategories: ['Todo', 'Elotes', 'Esquites', 'Tostilocos', 'Extras'],
  menuItems: [
    {
      id: 1,
      name: 'Elote Clásico',
      description: 'Elote con mayonesa, queso cotija, chile y limón.',
      price: '$50',
      image: '/img/productos/elote_vaso.png',
      category: 'Elotes',
      badge: null,
    },
    {
      id: 2,
      name: 'Elote Loco',
      description: 'Elote con salsa de chamoy, Takis, gomitas y queso derretido.',
      price: '$70',
      image: '/img/productos/elote_vaso.png',
      category: 'Elotes',
      badge: '🔥 Popular',
    },
    {
      id: 3,
      name: 'Esquites Tradicionales',
      description: 'Granos de elote con epazote, mayonesa, queso y chile.',
      price: '$55',
      image: '/img/productos/elote_vaso.png',
      category: 'Esquites',
      badge: null,
    },
    {
      id: 4,
      name: 'Esquites con Tuétano',
      description: 'Esquites con tuétano de res, queso y salsa negra.',
      price: '$85',
      image: '/img/productos/elote_vaso.png',
      category: 'Esquites',
      badge: '⭐ Recomendado',
    },
    {
      id: 5,
      name: 'Tostielotes',
      description: 'Tostada crujiente con elote, crema, queso, chile y salsa.',
      price: '$65',
      image: '/img/productos/tostielotes.png',
      category: 'Tostilocos',
      badge: '🔥 #1 en ventas',
    },
    {
      id: 6,
      name: 'Tostilocos',
      description: 'Tostada con pepino, jícama, chamoy, gomitas, cacahuate y chile.',
      price: '$60',
      image: '/img/productos/tostilocos.png',
      category: 'Tostilocos',
      badge: null,
    },
    {
      id: 7,
      name: 'Elote en Vaso',
      description: 'Granos de elote desgranados con todos los ingredientes.',
      price: '$55',
      image: '/img/productos/elote_vaso.png',
      category: 'Elotes',
      badge: null,
    },
    {
      id: 8,
      name: 'Salsa Extra',
      description: 'Porción extra de nuestra salsa secreta.',
      price: '$15',
      image: '/img/productos/elote_vaso.png',
      category: 'Extras',
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
        name: 'Tostielotes',
        description: 'Nuestra tostada estrella con elote, crema, queso y todas las salsas.',
        price: '$65',
        image: '/img/productos/tostielotes.png',
        tag: '🔥 #1 en ventas',
      },
      {
        id: 2,
        name: 'Tostilocos',
        description: 'La combinación perfecta de sabores y texturas que te va a encantar.',
        price: '$60',
        image: '/img/productos/tostilocos.png',
        tag: '⭐ Favorito',
      },
      {
        id: 3,
        name: 'Elote en Vaso',
        description: 'Granos de elote con todo: mayonesa, queso, chile y limón.',
        price: '$55',
        image: '/img/productos/elote_vaso.png',
        tag: '💰 Clásico',
      },
    ],
  },

  // ─── EVENTS ───────────────────────────────────────────────
  events: {
    title: 'Llevamos el sabor a tu evento',
    subtitle: 'Fiestas, estadios, corporativos y más',
    description:
      'En Elotizame no solo te esperamos en nuestro puesto. Llevamos toda la experiencia del street food mexicano a donde nos necesites. Hemos estado en el Estadio Akron, con los Astros y en cientos de fiestas privadas y eventos corporativos.',
    features: [
      { icon: 'Stadium', label: 'Estadios y eventos masivos' },
      { icon: 'Celebration', label: 'Fiestas privadas y XV años' },
      { icon: 'Business', label: 'Eventos corporativos' },
      { icon: 'Groups', label: 'Desde 50 hasta 5,000 personas' },
    ],
    images: [
      '/img/gallery/puesto_akron.png',
      '/img/gallery/elote_peluche.png',
    ],
    ctaLabel: 'Cotizar por WhatsApp',
  },

  // ─── ABOUT ────────────────────────────────────────────────
  about: {
    title: 'Nuestra historia',
    subtitle: 'Más que un puesto de elotes',
    description:
      'Elotizame nació en las calles de Guadalajara con una misión simple: hacer el mejor elote preparado que hayas probado. Empezamos con un carrito y hoy estamos en estadios, fiestas y eventos por toda la ciudad. Usamos ingredientes frescos, salsas 100% caseras y el sazón que nos hace diferentes. Cada elote es preparado al momento con el cariño y dedicación que nos caracteriza.',
    image: '/img/gallery/puesto_akron.png',
    highlights: [
      { icon: 'EmojiEvents', label: 'Presentes en Estadio Akron' },
      { icon: 'Favorite', label: '+500 clientes felices' },
      { icon: 'Restaurant', label: 'Ingredientes frescos diarios' },
      { icon: 'Star', label: '4.9 ⭐ en Google' },
    ],
  },

  // ─── LOCATION ─────────────────────────────────────────────
  location: {
    title: 'Encuéntranos',
    address: 'Av de la Presa 1953, Guadalajara, Jalisco',
    reference: 'Ven a visitarnos y prueba el mejor elote de la ciudad.',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Elotizame,+Av+de+la+Presa+1953,+Guadalajara,+Jalisco&output=embed&z=17',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Elotizame+Guadalajara',
    schedule: [
      { days: 'Lunes a Domingo', hours: '14:00 - 21:00' },
    ],
  },

  // ─── CONTACT CTA ──────────────────────────────────────────
  contactCTA: {
    title: '¿Se te antojó?',
    subtitle: 'Haz tu pedido ahora y recoge en minutos. También puedes cotizar para tu evento.',
    whatsappLabel: 'Pedir por WhatsApp',
    phoneLabel: 'Llamar directo',
    backgroundImage: '/img/gallery/puesto_akron.png',
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: 'El antojo que no puedes resistir 🌽🔥',
    copyright: `© ${new Date().getFullYear()} Elotizame. Todos los derechos reservados.`,
    links: [
      { label: 'Menú', href: '#menu' },
      { label: 'Eventos', href: '#events' },
      { label: 'Ubicación', href: '#location' },
      { label: 'Contacto', href: '#contact' },
    ],
    madeBy: {
      label: 'Sitio desarrollado por Orbit',
      href: 'https://www.orbit.com.mx',
    },
  },
};

export default landingContent;
