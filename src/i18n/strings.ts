/**
 * NAB Financial — bilingual copy table.
 *
 * Single source of truth for every string on the page. Consumed at build
 * time by the Astro components (default language = `es`) and again in the
 * client bundle so the ES/EN header toggle can swap all copy instantly
 * without a page reload. Ported verbatim from the design prototype's `STR`.
 */

export type Lang = 'es' | 'en';

export interface Service {
  icon: string;
  title: string;
  desc: string;
  accent: 'brand' | 'accent';
}

export interface Point {
  icon: string;
  t: string;
  d: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface Strings {
  navServices: string;
  navAbout: string;
  navReviews: string;
  navFaq: string;
  ctaBook: string;
  ctaView: string;
  ctaCall: string;
  ctaMore: string;
  heroEyebrow: string;
  heroTitleA: string;
  heroTitleHi: string;
  heroBody: string;
  heroRating: string;
  heroCardA: string;
  heroCardB: string;
  heroChip: string;
  featEyebrow: string;
  featTitle: string;
  featBody: string;
  featF1: string;
  featF2: string;
  featF3: string;
  featCta: string;
  featBadge: string;
  featSub: string;
  featPanelBody: string;
  servHeadEyebrow: string;
  servHeadTitle: string;
  servHeadBody: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutChipSub: string;
  voicesEyebrow: string;
  voicesTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  faqNote: string;
  bandTitle: string;
  bandBody: string;
  footTagline: string;
  footContactH: string;
  footServicesH: string;
  footHours: string;
  footRights: string;
  modalEyebrow: string;
  modalTitle: string;
  modalBody: string;
  mName: string;
  mNamePh: string;
  mPhone: string;
  mPhonePh: string;
  mEmail: string;
  mEmailPh: string;
  mHelp: string;
  mConsent: string;
  mSubmit: string;
  mSentTitle: string;
  mSentBody: string;
  mDone: string;
  mClose: string;
  trust: [string, string][];
  services: Service[];
  points: Point[];
  testimonials: Testimonial[];
  faq: Faq[];
  footServiceLinks: string[];
  modalOptions: Option[];
}

const es: Strings = {
  navServices: 'Servicios',
  navAbout: 'Nosotros',
  navReviews: 'Opiniones',
  navFaq: 'Preguntas',
  ctaBook: 'Agenda tu cita',
  ctaView: 'Ver servicios',
  ctaCall: 'Llámanos',
  ctaMore: 'Saber más',
  heroEyebrow: 'NAB Financial Consulting · Houston, TX',
  heroTitleA: 'Tus impuestos, en manos ',
  heroTitleHi: 'expertas.',
  heroBody:
    'Más de 15 años ayudando a la comunidad de Houston con la preparación de impuestos, trámite de ITIN, inmigración, payroll y notaría pública — siempre con atención personal y en español.',
  heroRating: 'familias y negocios atendidos',
  heroCardA: 'Declaración segura',
  heroCardB: 'IRS e-file autorizado',
  heroChip: 'Atención bilingüe',
  featEyebrow: 'Servicio destacado',
  featTitle: 'Tus impuestos, en manos expertas',
  featBody:
    'Declaraciones personales y de negocios, presentadas con precisión para maximizar tu reembolso. Somos proveedor autorizado de e-file ante el IRS.',
  featF1: 'Impuestos personales',
  featF2: 'Impuestos de negocios',
  featF3: 'Declaración segura por e-file',
  featCta: 'Agenda tu declaración',
  featBadge: 'IRS e-file · Autorizado',
  featSub: 'en español, paso a paso',
  featPanelBody:
    'Te explicamos cada formulario sin tecnicismos, para que entiendas exactamente lo que firmas.',
  servHeadEyebrow: 'Nuestros servicios',
  servHeadTitle: 'Todo lo financiero, bajo un mismo techo',
  servHeadBody:
    'Desde tus impuestos personales hasta la contabilidad de tu empresa, la inmigración y la notaría — te acompañamos en cada paso.',
  aboutEyebrow: 'Por qué NAB',
  aboutTitle: 'Tu socio financiero de confianza en Houston',
  aboutBody:
    'Desde hace más de quince años acompañamos a familias y pequeños negocios de la comunidad. Nuestra misión es simple: que entiendas tus finanzas y cumplas con tranquilidad.',
  aboutChipSub: 'años de experiencia',
  voicesEyebrow: 'Opiniones',
  voicesTitle: 'Lo que dice nuestra comunidad',
  faqEyebrow: 'Preguntas frecuentes',
  faqTitle: 'Resolvemos tus dudas',
  faqNote: '¿No ves tu pregunta? Llámanos al (832) 801-0188.',
  bandTitle: 'Empieza tu declaración hoy mismo',
  bandBody:
    'Agenda una cita sin costo y deja tus impuestos en manos de quienes conocen tu comunidad.',
  footTagline:
    'Servicios de impuestos, contabilidad, inmigración y notaría para la comunidad de Houston desde hace más de 15 años.',
  footContactH: 'Contacto',
  footServicesH: 'Servicios',
  footHours: 'Lun–Sáb · 9:00 AM – 7:00 PM',
  footRights: '© 2026 NAB Financial Consulting LLC. Todos los derechos reservados.',
  modalEyebrow: 'Agenda tu cita',
  modalTitle: 'Cuéntanos de ti',
  modalBody: 'Déjanos tus datos y un asesor te contactará. Sin compromiso.',
  mName: 'Nombre completo',
  mNamePh: 'Ana Bello',
  mPhone: 'Teléfono',
  mPhonePh: '(832) 000-0000',
  mEmail: 'Correo',
  mEmailPh: 'tu@email.com',
  mHelp: '¿En qué te ayudamos?',
  mConsent: 'Acepto que NAB me contacte por teléfono o correo.',
  mSubmit: 'Solicitar cita',
  mSentTitle: '¡Cita solicitada!',
  mSentBody: 'Gracias. Te contactaremos muy pronto para confirmar tu cita.',
  mDone: 'Listo',
  mClose: 'Cerrar',
  trust: [
    ['15+', 'Años de experiencia'],
    ['5,000+', 'Familias y negocios'],
    ['7', 'Servicios financieros'],
    ['100%', 'Atención bilingüe'],
  ],
  services: [
    {
      icon: 'badge-check',
      title: 'ITIN Number',
      desc: 'Te guiamos paso a paso para tramitar tu ITIN Number (Formulario W-7), de forma rápida y correcta.',
      accent: 'accent',
    },
    {
      icon: 'file-check-2',
      title: 'Documentos legales',
      desc: 'Apoyo en el llenado y la presentación de tus documentos legales, de forma correcta y sin estrés.',
      accent: 'brand',
    },
    {
      icon: 'landmark',
      title: 'Inmigración',
      desc: 'Residencia, ciudadanía, DACA y asesoría — te acompañamos en cada paso de tu proceso.',
      accent: 'accent',
    },
    {
      icon: 'calculator',
      title: 'Contabilidad',
      desc: 'Bookkeeping mensual para personas y empresas, con reportes que de verdad entiendes.',
      accent: 'brand',
    },
    {
      icon: 'wallet',
      title: 'Payroll',
      desc: 'Procesamos la nómina de tu negocio a tiempo y en regla en cada periodo de pago.',
      accent: 'accent',
    },
    {
      icon: 'stamp',
      title: 'Notaría pública',
      desc: 'Servicios de notaría para tus documentos importantes, aquí mismo en la oficina.',
      accent: 'brand',
    },
  ],
  points: [
    ['users', 'Trato personal', 'Te atiende siempre alguien de nuestro equipo, que conoce tu caso por nombre.'],
    ['languages', 'Todo en español', 'Explicamos cada formulario en tu idioma, sin tecnicismos confusos.'],
    ['shield-check', 'Presentación segura', 'Proveedor autorizado para presentar declaraciones por e-file ante el IRS.'],
    ['map-pin', 'En tu comunidad', 'Oficina en Sam Houston Pkwy, Houston — fácil de visitar y siempre cerca de ti.'],
  ].map(([icon, t, d]) => ({ icon, t, d })),
  testimonials: [
    ['Me ayudaron con mi ITIN y la declaración de toda mi familia. Rápido, claro y todo en español.', 'María G.', 'Cliente personal', 'MG'],
    ['Llevan la contabilidad y el payroll de mi taller hace años. Por fin entiendo mis números.', 'Jorge R.', 'Dueño de negocio', 'JR'],
    ['Profesionales y muy pacientes. Explicaron cada documento sin prisa. Los recomiendo.', 'Lucía M.', 'Cliente personal', 'LM'],
  ].map(([quote, name, role, initials]) => ({ quote, name, role, initials })),
  faq: [
    ['¿Qué documentos necesito para mi declaración de impuestos?', 'Por lo general: identificación oficial, números de Seguro Social o ITIN de tu familia, formularios W-2 o 1099, y comprobantes de gastos deducibles. Te enviamos una lista completa al agendar tu cita.'],
    ['¿Cómo obtengo mi ITIN Number?', 'Te ayudamos a preparar el Formulario W-7 y a reunir los documentos requeridos (pasaporte vigente y tu declaración). Tenemos experiencia en este trámite y te guiamos paso a paso.'],
    ['¿Atienden casos de inmigración?', 'Sí. Ofrecemos asesoría y acompañamiento en renovación de residencia, ciudadanía y renovación de DACA, además del llenado de documentos legales.'],
    ['¿Atienden a negocios además de personas?', 'Sí. Ofrecemos contabilidad, payroll y declaraciones para empresas de todos los tamaños, además de los servicios personales.'],
    ['¿Toda la atención es en español?', 'Por supuesto. Todo nuestro equipo es bilingüe y te explicamos cada paso en el idioma en el que te sientas más cómodo.'],
  ].map(([q, a]) => ({ q, a })),
  footServiceLinks: ['Preparación de impuestos', 'Trámite de ITIN', 'Inmigración', 'Contabilidad y Payroll', 'Notaría pública'],
  modalOptions: [
    ['taxes', 'Preparación de impuestos'],
    ['itin', 'Trámite de ITIN'],
    ['immigration', 'Inmigración'],
    ['accounting', 'Contabilidad'],
    ['payroll', 'Payroll'],
    ['notary', 'Notaría pública'],
    ['legal', 'Documentos legales'],
  ].map(([value, label]) => ({ value, label })),
};

const en: Strings = {
  navServices: 'Services',
  navAbout: 'About',
  navReviews: 'Reviews',
  navFaq: 'FAQ',
  ctaBook: 'Book appointment',
  ctaView: 'See services',
  ctaCall: 'Call us',
  ctaMore: 'Learn more',
  heroEyebrow: 'NAB Financial Consulting · Houston, TX',
  heroTitleA: 'Your taxes, in ',
  heroTitleHi: 'expert hands.',
  heroBody:
    'Over 15 years helping the Houston community with tax preparation, ITIN, immigration, payroll and notary services — always with personal, bilingual service.',
  heroRating: 'families and businesses served',
  heroCardA: 'Secure filing',
  heroCardB: 'IRS e-file authorized',
  heroChip: 'Bilingual service',
  featEyebrow: 'Featured service',
  featTitle: 'Your taxes, in expert hands',
  featBody:
    'Personal and business returns, filed accurately to maximize your refund. We are an IRS-authorized e-file provider.',
  featF1: 'Personal taxes',
  featF2: 'Business taxes',
  featF3: 'Secure e-file filing',
  featCta: 'Start your return',
  featBadge: 'IRS e-file · Authorized',
  featSub: 'in your language, step by step',
  featPanelBody: 'We explain every form in plain language, so you know exactly what you sign.',
  servHeadEyebrow: 'Our services',
  servHeadTitle: 'All your finances, under one roof',
  servHeadBody:
    'From personal taxes to your company bookkeeping, immigration and notary — we guide you every step of the way.',
  aboutEyebrow: 'Why NAB',
  aboutTitle: 'Your trusted financial partner in Houston',
  aboutBody:
    'For over fifteen years we have supported families and small businesses in the community. Our mission is simple: that you understand your finances and file with peace of mind.',
  aboutChipSub: 'years of experience',
  voicesEyebrow: 'Reviews',
  voicesTitle: 'What our community says',
  faqEyebrow: 'FAQ',
  faqTitle: 'We answer your questions',
  faqNote: 'Not seeing your question? Call us at (832) 801-0188.',
  bandTitle: 'Start your return today',
  bandBody:
    'Book a free appointment and put your taxes in the hands of people who know your community.',
  footTagline:
    'Tax, bookkeeping, immigration and notary services for the Houston community for over 15 years.',
  footContactH: 'Contact',
  footServicesH: 'Services',
  footHours: 'Mon–Sat · 9:00 AM – 7:00 PM',
  footRights: '© 2026 NAB Financial Consulting LLC. All rights reserved.',
  modalEyebrow: 'Book appointment',
  modalTitle: 'Tell us about you',
  modalBody: 'Leave your details and an advisor will contact you. No obligation.',
  mName: 'Full name',
  mNamePh: 'Ana Bello',
  mPhone: 'Phone',
  mPhonePh: '(832) 000-0000',
  mEmail: 'Email',
  mEmailPh: 'you@email.com',
  mHelp: 'How can we help?',
  mConsent: 'I agree that NAB may contact me by phone or email.',
  mSubmit: 'Request appointment',
  mSentTitle: 'Appointment requested!',
  mSentBody: 'Thank you. We will contact you soon to confirm your appointment.',
  mDone: 'Done',
  mClose: 'Close',
  trust: [
    ['15+', 'Years of experience'],
    ['5,000+', 'Families and businesses'],
    ['7', 'Financial services'],
    ['100%', 'Bilingual service'],
  ],
  services: [
    {
      icon: 'badge-check',
      title: 'ITIN Number',
      desc: 'We guide you step by step to apply for your ITIN Number (Form W-7), quickly and correctly.',
      accent: 'accent',
    },
    {
      icon: 'file-check-2',
      title: 'Legal documents',
      desc: 'Help filling and filing your legal documents — done right, stress-free.',
      accent: 'brand',
    },
    {
      icon: 'landmark',
      title: 'Immigration',
      desc: 'Residency, citizenship, DACA and advising — we walk you through every step of your process.',
      accent: 'accent',
    },
    {
      icon: 'calculator',
      title: 'Bookkeeping',
      desc: 'Monthly bookkeeping for people and businesses, with reports you actually understand.',
      accent: 'brand',
    },
    {
      icon: 'wallet',
      title: 'Payroll',
      desc: 'We run your business payroll on time and by the book, every pay period.',
      accent: 'accent',
    },
    {
      icon: 'stamp',
      title: 'Notary public',
      desc: 'Notary services for your important documents, right here in the office.',
      accent: 'brand',
    },
  ],
  points: [
    ['users', 'Personal service', 'You are always helped by someone on our team who knows your case by name.'],
    ['languages', 'Bilingual service', 'We explain every form in the language you are most comfortable with.'],
    ['shield-check', 'Secure filing', 'Authorized provider to e-file returns with the IRS.'],
    ['map-pin', 'In your community', 'Office on Sam Houston Pkwy, Houston — easy to visit and always close by.'],
  ].map(([icon, t, d]) => ({ icon, t, d })),
  testimonials: [
    ['They helped me with my ITIN and the returns for my whole family. Fast, clear and all in Spanish.', 'María G.', 'Personal client', 'MG'],
    ['They have handled my shop bookkeeping and payroll for years. I finally understand my numbers.', 'Jorge R.', 'Business owner', 'JR'],
    ['Professional and very patient. They explained every document without rushing. Highly recommend.', 'Lucía M.', 'Personal client', 'LM'],
  ].map(([quote, name, role, initials]) => ({ quote, name, role, initials })),
  faq: [
    ['What documents do I need for my tax return?', 'Generally: a photo ID, Social Security or ITIN numbers for your family, W-2 or 1099 forms, and receipts for deductible expenses. We send you a full checklist when you book.'],
    ['How do I get my ITIN Number?', 'We help you prepare Form W-7 and gather the required documents (a valid passport and your return). We have experience with this process and guide you step by step.'],
    ['Do you handle immigration cases?', 'Yes. We offer advising and support with residency renewal, citizenship and DACA renewal, plus filling out legal documents.'],
    ['Do you serve businesses as well as individuals?', 'Yes. We offer bookkeeping, payroll and returns for businesses of all sizes, in addition to personal services.'],
    ['Is all service available in Spanish?', 'Absolutely. Our whole team is bilingual and we explain every step in the language you are most comfortable with.'],
  ].map(([q, a]) => ({ q, a })),
  footServiceLinks: ['Tax preparation', 'ITIN filing', 'Immigration', 'Bookkeeping and Payroll', 'Notary public'],
  modalOptions: [
    ['taxes', 'Tax preparation'],
    ['itin', 'ITIN filing'],
    ['immigration', 'Immigration'],
    ['accounting', 'Bookkeeping'],
    ['payroll', 'Payroll'],
    ['notary', 'Notary public'],
    ['legal', 'Legal documents'],
  ].map(([value, label]) => ({ value, label })),
};

export const STR: Record<Lang, Strings> = { es, en };

export const DEFAULT_LANG: Lang = 'es';
