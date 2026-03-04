export const siteConfig = {
  name: "Smart Home Architects",
  title: "Smart Home Architects | Luxury Home Automation in South Africa",
  description:
    "Smart Home Architects designs and installs bespoke automation systems for premium residences, boutique hospitality, and design-led developments in South Africa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smarthomearchitects.co.za",
  ogImage: "/opengraph-image",
  location: "Cape Town & Garden Route, South Africa",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27710000000",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
};

export const navigation = [
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const partnerBrands = [
  "Control4",
  "Lutron",
  "Crestron",
  "Bowers & Wilkins",
  "Sonos Architectural",
  "KNX",
];

export const solutionCards = [
  {
    title: "Smart Home Control",
    description:
      "One intuitive interface for climate, lighting, AV, and security with scene-based automation.",
  },
  {
    title: "Luxury Lighting Control",
    description:
      "Layered lighting scenes that enhance architecture, mood, and efficiency throughout the day.",
  },
  {
    title: "Home Cinema",
    description:
      "Acoustically considered cinema spaces with concealed technology and immersive performance.",
  },
  {
    title: "Multi-Room Audio / AV",
    description:
      "Whole-home entertainment distribution with effortless room-to-room continuity.",
  },
  {
    title: "Motorised Blinds / Curtains",
    description:
      "Quiet, precision shade control for comfort, privacy, and daylight management.",
  },
  {
    title: "Security / Access / Cameras",
    description:
      "Discreet perimeter and access systems designed for confidence without visual clutter.",
  },
];

export const featuredProjects = [
  {
    name: "Clifton Ocean Residence",
    location: "Cape Town",
    outcome: "Unified lighting, shading, and AV control across 4 levels",
    image:
      "/images/project-clifton.jpg",
  },
  {
    name: "Knysna Forest Retreat",
    location: "Garden Route",
    outcome: "Cinema-grade media suite with silent automation and backup resilience",
    image:
      "/images/project-knysna.jpg",
  },
  {
    name: "Bishopscourt Estate Pavilion",
    location: "Cape Town",
    outcome: "Architect-led smart control integration for guest and entertainment zones",
    image:
      "/images/project-bishopscourt.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "The system feels invisible until you need it. Every room responds exactly as intended.",
    author: "Private Client",
    role: "Bishopscourt Homeowner",
  },
  {
    quote:
      "Smart Home Architects translated our lighting concept into a fully coordinated control strategy.",
    author: "Studio Orijin",
    role: "Interior Design Partner",
  },
];
