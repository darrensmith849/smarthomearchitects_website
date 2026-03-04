export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  body: string[];
  relatedSolutions: string[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "planning-smart-home-infrastructure-before-build",
    title: "Planning Smart Home Infrastructure Before Construction Begins",
    excerpt:
      "How early-stage coordination protects architecture, reduces rework, and improves long-term system performance.",
    date: "2026-03-04",
    readTime: "6 min read",
    category: "Planning",
    heroImage: "/images/project-clifton.jpg",
    body: [
      "High-end automation projects perform best when systems design is integrated during architectural development, not after finish selections are complete.",
      "Early planning allows cable pathways, rack space, and control locations to be resolved before costly site changes appear during construction.",
      "The most successful teams align automation milestones with electrical, HVAC, and interior packages so commissioning remains predictable.",
    ],
    relatedSolutions: ["/solutions/smart-home-control", "/solutions/luxury-lighting-control"],
  },
  {
    slug: "lighting-control-for-luxury-interiors",
    title: "Lighting Control Strategies for Luxury Interiors",
    excerpt:
      "Scene strategy, dimming quality, and interface discipline for atmosphere-led residential design.",
    date: "2026-03-04",
    readTime: "5 min read",
    category: "Lighting",
    heroImage: "/images/project-bishopscourt.jpg",
    body: [
      "Lighting control should support architecture rather than distract from it. That starts with clear zoning and purpose-built scenes.",
      "Premium results come from close coordination between fixture specification, dimming protocol, and commissioning tolerances.",
      "A restrained keypad strategy often improves both usability and interior clarity, especially in large-format open-plan homes.",
    ],
    relatedSolutions: ["/solutions/luxury-lighting-control", "/solutions/motorised-blinds-curtains"],
  },
  {
    slug: "designing-discreet-home-security",
    title: "Designing Discreet Security for Design-Led Homes",
    excerpt:
      "How to achieve layered residential security while preserving a calm, premium architectural language.",
    date: "2026-03-04",
    readTime: "5 min read",
    category: "Security",
    heroImage: "/images/project-knysna.jpg",
    body: [
      "Security integration should be visibly quiet but operationally rigorous. Camera planning and access zones are most effective when tied to daily routines.",
      "Entry workflows for owners, guests, and household staff need role-based logic from day one to prevent operational friction.",
      "Combining perimeter awareness with scene-linked lighting improves response while maintaining hospitality-grade ambience.",
    ],
    relatedSolutions: ["/solutions/security-access-cameras", "/solutions/smart-home-control"],
  },
];
