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
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const partnerBrands = [
  "Control4",
  "Lutron",
  "Crestron",
  "Bowers & Wilkins",
  "Sonos Architectural",
  "KNX",
];

export type SolutionFaq = {
  question: string;
  answer: string;
};

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  summary: string;
  heroImage: string;
  outcome: string;
  idealFor: string[];
  capabilities: string[];
  faqs: SolutionFaq[];
};

export const solutions: Solution[] = [
  {
    slug: "smart-home-control",
    title: "Smart Home Control",
    shortTitle: "Control",
    description:
      "One intelligent interface for climate, lighting, AV, and security, tailored to the way you live.",
    summary:
      "We design a single control environment that feels intuitive from day one and remains reliable over the life of your home.",
    heroImage: "/images/hero-interior.jpg",
    outcome: "A home that responds instantly to routines, scenes, and occupancy without visual or interface clutter.",
    idealFor: [
      "New luxury builds requiring complete systems orchestration",
      "High-end renovations replacing fragmented controls",
      "Owners seeking dependable remote access while traveling",
    ],
    capabilities: [
      "Unified mobile, wall keypad, and voice-assisted control",
      "Scene programming for arrival, evening, entertainment, and away modes",
      "Remote diagnostics and proactive performance monitoring",
      "Role-based access for family, guests, and household staff",
    ],
    faqs: [
      {
        question: "Can control systems be kept simple for guests and staff?",
        answer:
          "Yes. We design clear scene-based controls with minimal interfaces so everyday actions are effortless for every user profile.",
      },
      {
        question: "Will this work if internet connectivity drops?",
        answer:
          "Core control remains local-first. Critical scenes, lighting, and access logic are engineered to continue operating without cloud dependency.",
      },
      {
        question: "Do you support future expansion?",
        answer:
          "Every project is documented with expansion pathways for additional zones, media spaces, and security layers as requirements evolve.",
      },
    ],
  },
  {
    slug: "luxury-lighting-control",
    title: "Luxury Lighting Control",
    shortTitle: "Lighting",
    description:
      "Architectural lighting scenes that balance mood, comfort, and efficiency throughout the day.",
    summary:
      "Lighting control is coordinated with architectural intent, furnishing palette, and daylight behavior to shape atmosphere room by room.",
    heroImage: "/images/project-clifton.jpg",
    outcome: "Balanced illumination and seamless scene recall that elevates interiors while reducing unnecessary energy draw.",
    idealFor: [
      "Design-led homes with layered architectural and decorative lighting",
      "Projects needing circadian-aware scene strategy",
      "Hospitality suites where ambience and consistency are essential",
    ],
    capabilities: [
      "Multi-circuit dimming and scene orchestration",
      "Time-of-day adaptive presets and occupancy responses",
      "Blind and curtain synchronization with natural light",
      "Commissioning in partnership with architects and lighting consultants",
    ],
    faqs: [
      {
        question: "Can existing fixtures be integrated into lighting control?",
        answer:
          "In many projects, yes. We audit fixture compatibility and advise where re-specification is needed to preserve dimming quality.",
      },
      {
        question: "How many scenes should a room have?",
        answer:
          "Typically three to five purposeful scenes per room, tuned around use-cases like hosting, reading, cleaning, and evening wind-down.",
      },
      {
        question: "Do lighting controls require visible wall clutter?",
        answer:
          "No. We use low-profile keypads and thoughtful zoning to reduce switch clutter while improving control clarity.",
      },
    ],
  },
  {
    slug: "home-cinema",
    title: "Home Cinema",
    shortTitle: "Cinema",
    description:
      "Private cinema environments with immersive sound, calibrated visuals, and discreet technology.",
    summary:
      "From intimate screening rooms to full reference-grade cinemas, every detail is engineered for performance and elegance.",
    heroImage: "/images/project-knysna.jpg",
    outcome: "A cinematic experience with precise acoustic response, effortless control, and architecture-friendly integration.",
    idealFor: [
      "Dedicated cinema rooms in premium residences",
      "Media lounges requiring hidden performance",
      "Boutique hospitality screening and entertainment suites",
    ],
    capabilities: [
      "Acoustic treatment design and speaker placement planning",
      "Projector, display, and calibration strategy",
      "Integrated lighting and shading scenes for screening modes",
      "High-performance streaming and source management",
    ],
    faqs: [
      {
        question: "How early should cinema planning begin?",
        answer:
          "Ideally during architectural planning. Early coordination ensures room proportions, wiring pathways, and acoustic allowances are optimized.",
      },
      {
        question: "Can performance be achieved in a multi-purpose room?",
        answer:
          "Yes. We design hybrid media spaces with concealed hardware and flexible acoustic strategy tailored to shared-use environments.",
      },
      {
        question: "Do you provide post-install tuning?",
        answer:
          "Calibration and final tuning are part of handover to ensure audio and video performance align with design intent.",
      },
    ],
  },
  {
    slug: "multi-room-audio-av",
    title: "Multi-Room Audio / AV",
    shortTitle: "Audio / AV",
    description:
      "Whole-home entertainment distribution with continuity, control, and discreet installation quality.",
    summary:
      "We deliver room-to-room audio and AV systems that feel cohesive, responsive, and uncomplicated to operate.",
    heroImage: "/images/project-bishopscourt.jpg",
    outcome: "Consistent entertainment across the home with independent room control and centralized reliability.",
    idealFor: [
      "Residences with multiple lounge, terrace, and leisure zones",
      "Owners wanting clean rack-based infrastructure",
      "Developers standardizing premium AV specifications",
    ],
    capabilities: [
      "Distributed audio and video routing architecture",
      "In-ceiling, in-wall, and architectural speaker solutions",
      "Source sharing and synchronized multi-room playback",
      "Rack design, cooling strategy, and long-term serviceability",
    ],
    faqs: [
      {
        question: "Can each room play different content at the same time?",
        answer:
          "Yes. Rooms can run independently or in grouped modes for events and entertaining.",
      },
      {
        question: "Will visible equipment be minimized?",
        answer:
          "Equipment is centralized wherever practical, with discreet endpoints and integrated speaker solutions to protect interior aesthetics.",
      },
      {
        question: "Can we integrate streaming platforms and local media?",
        answer:
          "Both are supported through a curated source strategy based on your preferred platforms and usage patterns.",
      },
    ],
  },
  {
    slug: "motorised-blinds-curtains",
    title: "Motorised Blinds / Curtains",
    shortTitle: "Blinds & Curtains",
    description:
      "Silent, precision shading control for daylight management, privacy, and thermal comfort.",
    summary:
      "Motorised shading is integrated as part of the wider control ecosystem, responding intelligently to time, scene, and occupancy.",
    heroImage: "/images/hero-interior.jpg",
    outcome: "Refined daylight control and privacy with automation that remains unobtrusive and acoustically quiet.",
    idealFor: [
      "Homes with expansive glazing and strong daylight exposure",
      "Projects prioritizing privacy and thermal stability",
      "Design teams requiring concealed shading hardware",
    ],
    capabilities: [
      "Automated blind and curtain scheduling",
      "Sun-position-based scene triggers",
      "Quiet motor specification and commissioning",
      "Fabric and treatment coordination with interior teams",
    ],
    faqs: [
      {
        question: "Can blinds react automatically to sunlight?",
        answer:
          "Yes. Systems can respond to time, solar orientation, and occupancy to protect finishes and improve comfort.",
      },
      {
        question: "Are motors noisy?",
        answer:
          "We specify premium low-noise motors and tune movement profiles for discreet operation.",
      },
      {
        question: "Can motorised treatments still be manually controlled?",
        answer:
          "Absolutely. Wall controls, app access, and manual overrides are all included for practical flexibility.",
      },
    ],
  },
  {
    slug: "security-access-cameras",
    title: "Security / Access / Cameras",
    shortTitle: "Security",
    description:
      "Discreet, layered security systems for perimeter awareness, controlled access, and peace of mind.",
    summary:
      "Security design is integrated with architecture to provide confidence without a visibly defensive aesthetic.",
    heroImage: "/images/project-clifton.jpg",
    outcome: "Confidence through proactive alerts, controlled entry points, and clear remote visibility across the property.",
    idealFor: [
      "Primary residences requiring comprehensive perimeter coverage",
      "Estate homes with gatehouse and multi-entry access",
      "Owners needing remote visibility and control while away",
    ],
    capabilities: [
      "Camera planning with critical zone prioritization",
      "Gate, door, and intercom integration",
      "Automated alerting and remote access workflows",
      "Security scene linking with lighting and occupancy states",
    ],
    faqs: [
      {
        question: "Can alerts be configured to avoid false alarms?",
        answer:
          "Yes. Detection zones and event logic are tuned around real occupancy behavior and environmental factors.",
      },
      {
        question: "How do you handle privacy for internal cameras?",
        answer:
          "We define camera policy, retention periods, and privacy zones upfront to align with household requirements.",
      },
      {
        question: "Can access control integrate with staff schedules?",
        answer:
          "Access permissions can be time-bound and role-based, making secure daily operation straightforward.",
      },
    ],
  },
];

export const solutionCards = solutions.map((solution) => ({
  title: solution.title,
  description: solution.description,
  href: `/solutions/${solution.slug}`,
}));

export type Project = {
  slug: string;
  name: string;
  location: string;
  sector: string;
  image: string;
  gallery: string[];
  challenge: string;
  solutionStory: string;
  stack: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "clifton-ocean-residence",
    name: "Clifton Ocean Residence",
    location: "Cape Town",
    sector: "Private Residence",
    image: "/images/project-clifton.jpg",
    gallery: ["/images/project-clifton.jpg", "/images/hero-interior.jpg", "/images/project-bishopscourt.jpg"],
    challenge:
      "The brief called for complete systems integration across four levels while preserving a calm architectural language and minimizing visible hardware.",
    solutionStory:
      "We coordinated early with the architect and interior team to consolidate control, lighting, AV, and shading into a single scene-driven ecosystem with low-profile interfaces.",
    stack: ["Control4 Core", "Lutron Lighting", "Triad Audio", "Pakedge Network", "Hikvision Surveillance"],
    outcomes: [
      "Unified scene recall for day, evening, and entertaining routines",
      "Reduced wall clutter through keypad consolidation",
      "Remote diagnostics and owner access across all critical zones",
    ],
  },
  {
    slug: "knysna-forest-retreat",
    name: "Knysna Forest Retreat",
    location: "Garden Route",
    sector: "Holiday Residence",
    image: "/images/project-knysna.jpg",
    gallery: ["/images/project-knysna.jpg", "/images/project-clifton.jpg", "/images/hero-interior.jpg"],
    challenge:
      "The retreat required resilient media and automation infrastructure in a remote setting with intermittent connectivity and seasonal occupancy.",
    solutionStory:
      "We designed a local-first control architecture with cinema-grade AV, structured backup strategies, and intuitive handover presets for rotating guest usage.",
    stack: ["Crestron Home", "Bowers & Wilkins", "Sony Projection", "UniFi Network", "KNX Gateway"],
    outcomes: [
      "Cinema-grade media performance with one-touch operation",
      "Stable control during connectivity interruptions",
      "Simplified arrival and departure scenes for guests and staff",
    ],
  },
  {
    slug: "bishopscourt-estate-pavilion",
    name: "Bishopscourt Estate Pavilion",
    location: "Cape Town",
    sector: "Estate Extension",
    image: "/images/project-bishopscourt.jpg",
    gallery: ["/images/project-bishopscourt.jpg", "/images/project-clifton.jpg", "/images/project-knysna.jpg"],
    challenge:
      "A new entertainment pavilion needed full smart integration and security zoning without compromising the estate's established design language.",
    solutionStory:
      "We delivered a layered automation strategy for guest areas, exterior lighting, access control, and distributed AV while aligning all interfaces to the architectural palette.",
    stack: ["Control4", "Lutron Shades", "Sonos Architectural", "Axis Cameras", "DoorBird Access"],
    outcomes: [
      "Frictionless hosting with synchronized lighting, music, and shading scenes",
      "Discrete security and controlled access for event periods",
      "Future-ready infrastructure for additional outdoor zones",
    ],
  },
];

export const featuredProjects = projects.map((project) => ({
  name: project.name,
  location: project.location,
  outcome: project.outcomes[0],
  image: project.image,
  href: `/projects/${project.slug}`,
}));

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
