import { Service } from './types';
import { Language } from './types';
import { 
  Video, 
  Film, 
  Aperture, 
  Radio, 
  Mic2, 
  Music, 
  Lightbulb, 
  Share2, 
  Camera 
} from 'lucide-react';

export const BRAND_NAME = "SoraProEvent";
export const CONTACT_PHONE = "06 30 62 82 88";
export const CONTACT_EMAIL = "Soraproevent1@Gmail.com";
export const CONTACT_ADDRESS = "55 Boulevard Zerktouni Espace Zerktouni 1er Etage N° 3, Casablanca, Maroc";

export const SOCIAL_LINKS = {
  instagram: "http://instagram.com/soraevent1/",
  linkedin: "https://www.linkedin.com/in/sora-event-6b1694354/"
};

export const getServices = (lang: Language): Service[] => {
  const isFr = lang === 'fr';

  return [
    {
      id: 'video',
      title: isFr ? "Tournage Vidéo Professionnel" : "Professional Video Shooting",
      description: isFr ? "Nous assurons des tournages adaptés à tous types de projets, du film institutionnel aux événements privés." : "We provide filming adapted to all types of projects, from corporate films to private events.",
      features: isFr ? [
        "Films institutionnels et corporate",
        "Publicités & campagnes de marque",
        "Vidéos promotionnelles & storytelling",
        "Captation d'événements privés et publics",
        "Interviews, portraits et reportages"
      ] : [
        "Corporate & institutional films",
        "Ads & brand campaigns",
        "Promotional videos & storytelling",
        "Private & public event coverage",
        "Interviews, portraits & reports"
      ],
      image: "https://picsum.photos/800/600?random=1",
      icon: Video
    },
    {
      id: 'montage',
      title: isFr ? "Montage & Post-Production" : "Editing & Post-Production",
      description: isFr ? "Le montage est l'élément clé qui transforme les images en message percutant." : "Editing is the key element that transforms footage into a powerful message.",
      features: isFr ? [
        "Montage narratif et dynamique",
        "Étalonnage couleur professionnel",
        "Habillage graphique & animations",
        "Sound design & mixage audio",
        "Déclinaisons multi-formats (TV, web, réseaux sociaux)"
      ] : [
        "Narrative & dynamic editing",
        "Professional color grading",
        "Motion graphics & animations",
        "Sound design & audio mixing",
        "Multi-format adaptation (TV, web, social media)"
      ],
      image: "https://picsum.photos/800/600?random=2",
      icon: Film
    },
    {
      id: 'drone',
      title: isFr ? "Drone & Prises de Vue Aériennes" : "Drone & Aerial Shots",
      description: isFr ? "Apportez une dimension spectaculaire à vos contenus avec des images aériennes immersives." : "Bring a spectacular dimension to your content with immersive aerial imagery.",
      features: isFr ? [
        "Plans aériens cinématographiques",
        "Valorisation de sites, événements et projets immobiliers",
        "Images immersives et innovantes",
        "Pilotes certifiés",
        "Qualité Full HD / 4K"
      ] : [
        "Cinematic aerial shots",
        "Site, event & real estate showcase",
        "Immersive & innovative images",
        "Certified pilots",
        "Full HD / 4K Quality"
      ],
      image: "https://picsum.photos/800/600?random=3",
      icon: Aperture
    },
    {
      id: 'streaming',
      title: isFr ? "Streaming & Captation Live" : "Streaming & Live Coverage",
      description: isFr ? "Nous diffusons vos événements en direct avec une qualité professionnelle." : "We broadcast your events live with professional quality.",
      features: isFr ? [
        "Conférences & séminaires",
        "Lancements de produits",
        "Événements institutionnels et culturels",
        "Multi-caméras & régie live",
        "Interaction en temps réel"
      ] : [
        "Conferences & seminars",
        "Product launches",
        "Institutional & cultural events",
        "Multi-camera & live control room",
        "Real-time interaction"
      ],
      image: "https://picsum.photos/800/600?random=4",
      icon: Radio
    },
    {
      id: 'lumiere',
      title: isFr ? "Lumière & Éclairage Scénique" : "Lighting & Stage Design",
      description: isFr ? "La maîtrise de la lumière transforme l'image et l'ambiance de votre événement." : "Mastery of light transforms the image and atmosphere of your event.",
      features: isFr ? [
        "Éclairage cinéma et studio",
        "Mise en valeur de décors et de scènes",
        "Ambiances adaptées à chaque projet",
        "Coordination lumière / image / son"
      ] : [
        "Cinema & studio lighting",
        "Set & stage enhancement",
        "Atmospheres adapted to each project",
        "Light / image / sound coordination"
      ],
      image: "https://picsum.photos/800/600?random=5",
      icon: Lightbulb
    },
    {
      id: 'son',
      title: isFr ? "Sonorisation & Solutions Audio" : "Sound & Audio Solutions",
      description: isFr ? "Le son est essentiel à l'expérience. Nous garantissons clarté et équilibre." : "Sound is essential to the experience. We guarantee clarity and balance.",
      features: isFr ? [
        "Sonorisation d'événements",
        "Micros HF & filaires",
        "Gestion audio live",
        "Enregistrement et diffusion"
      ] : [
        "Event sound systems",
        "Wireless & wired microphones",
        "Live audio management",
        "Recording & broadcasting"
      ],
      image: "https://picsum.photos/800/600?random=6",
      icon: Mic2
    },
    {
      id: 'dj',
      title: isFr ? "DJ & Animation Musicale" : "DJ & Musical Entertainment",
      description: isFr ? "Nous créons l'ambiance sonore parfaite pour vos événements." : "We create the perfect sound atmosphere for your events.",
      features: isFr ? [
        "DJ professionnels",
        "Sélection musicale sur mesure",
        "Animation moderne et élégante",
        "Coordination avec le timing événementiel"
      ] : [
        "Professional DJs",
        "Tailored music selection",
        "Modern & elegant entertainment",
        "Coordination with event timing"
      ],
      image: "https://picsum.photos/800/600?random=7",
      icon: Music
    },
    {
      id: 'photo',
      title: isFr ? "Photographie Professionnelle" : "Professional Photography",
      description: isFr ? "L'image fixe reste un pilier de la communication. Des images élégantes et naturelles." : "Still images remain a pillar of communication. Elegant and natural photos.",
      features: isFr ? [
        "Photographie événementielle",
        "Portraits corporate & professionnels",
        "Produits, packshots & lifestyle",
        "Retouches et colorimétrie soignées"
      ] : [
        "Event photography",
        "Corporate & professional portraits",
        "Products, packshots & lifestyle",
        "Careful retouching & color grading"
      ],
      image: "https://picsum.photos/800/600?random=8",
      icon: Camera
    },
    {
      id: 'digital',
      title: isFr ? "Digital & Réseaux Sociaux" : "Digital & Social Media",
      description: isFr ? "Nous créons des contenus pensés pour le digital et la performance." : "We create content designed for digital and performance.",
      features: isFr ? [
        "Vidéos courtes (Reels, Shorts, Stories)",
        "Contenus publicitaires digitaux",
        "Adaptation aux codes des plateformes",
        "Optimisation du format et du rythme"
      ] : [
        "Short videos (Reels, Shorts, Stories)",
        "Digital advertising content",
        "Adaptation to platform codes",
        "Format & rhythm optimization"
      ],
      image: "https://picsum.photos/800/600?random=9",
      icon: Share2
    }
  ];
};

export const CLIENTS: string[] = [
  "Atelier Vert",
  "Boston Scientific",
  "Sothema",
  "Morocco Roleplay",
  "AtomY",
  "MFC",
  "MEA Distribution",
  "Moroccan Combat League"
];