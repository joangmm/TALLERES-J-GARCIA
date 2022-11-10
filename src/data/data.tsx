import {
  //AcademicCapIcon,
  //CalendarIcon,
  //DownloadIcon,
  //FlagIcon,
  MapIcon//,
  //OfficeBuildingIcon,
  //SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';/////
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import mappic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  Sobre_nosotros,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  GaleriaItem,
  Social,
  TestimonialSection
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Talleres J García',
  description: "Taller de reparación y mantenimiento de automóbiles en Santa Coloma de Gramanet, Barcelona.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Inicio',
  Sobre_nosotros: 'Sobre nosotros',
  Contact: 'Contacto',
  Galeria: 'Galería',
  Testimonials: 'Testimonios',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Talleres J García.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">

        Somos un taller de <strong className="text-stone-100"> reparación y mantenimiento de automóviles</strong> ubicado en Santa Coloma de Gramanet, en Barcelona.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Tenemos <strong className="text-stone-100">40 años de experiencia </strong>
      en el campo, y hemos trabajado con todo tipo de marcas de automóbiles, y hecho todo tipo de reparaciones.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contacta con nosotros',
      primary: true,
    },
  ],
};

/**
 * Sobre_nosotros section
 */
export const Sobre_nosotrosData: Sobre_nosotros = {
  profileImageSrc: mappic,
  description: `Todos estos años hemos estado prestando una ámplia variedad de servicios, como los que se muestran a 
  continuación:`
  ,
  reparations: [
    {text: "⛽Pre-ITV"},
    {text: "🛢️Cambio de aceite"},
    {text: "🥶Climatización"},
    {text: "⚡Baterías"},
    {text: "💨Escapes"},
    {text: "⚓Frenos"},
    {text: "🚗Mecánica"},
    {text: "⚫Neumáticos"},
    {text: "⚙️Distribución"},
    {text: "📃Revisión"},
    {text: "⚖️Suspensión"},
    {text: "💡Iluminación"}
  ],
  Sobre_nosotrosItems: [
    {label: 'Ubicación', text: ' C/ Pompeu i Fabra, 26.', Icon: MapIcon}
  ],
};

/**
 * Galeria section
 */
export const portfolioItems: GaleriaItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Àngels Prat',
      text: 'Muy buen profesional, mecánico en el que se puede confiar. Mi coche de 20 años continúa circulando y en buenas condiciones gracias a él.',
      image: 'https://i.postimg.cc/J4b0rmns/woman-medium-light-skin-tone-blond-hair.png',
    },
    {
      name: 'Loren Fer',
      text: 'Mecánico excelente y confiable. He cambiado de domicilio y sigo llevándole el coche porque confío. Buena persona y buen profesional.',
      image: 'https://i.postimg.cc/PJ1kJJXP/man-medium-skin-tone-beard.png',
    },
    {
      name: 'Marc Fernández',
      text: 'Mi mecánico de confianza, rápido, eficiente, buen trato y precio razonable.',
      image: 'https://i.postimg.cc/SQ6Dc21V/man-light-skin-tone-beard.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '¡Ponte en contacto!',
  description: 'O escríbenos vía correo:',
  items: [
    {
      type: ContactType.Email,
      text: '📪 talleresjgarcia@hotmail.com',
      href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Acerca+de...&to=talleresjgarcia@hotmail.com&body=Buenas+Juan,%0A%0ASoy+XXXXX+y+estoy+interesado+en+contactar+contigo+porque...%0A%0AMuchas+gracias,%0A%0A%0A',
    }
  ]
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Call us!', Icon: GithubIcon, href: 'tel:933861615'}
];
