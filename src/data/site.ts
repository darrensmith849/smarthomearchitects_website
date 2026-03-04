// ============================================================
// SITE CONFIG — Single source of truth for all content + links
// Replace PLACEHOLDER values before launch.
// ============================================================

export const siteConfig = {
  artistName: "PLACEHOLDER_ARTIST_NAME",
  siteUrl: "https://placeholder.vercel.app",
  tagline: "Worship from the secret place",
  description:
    "The debut worship album by PLACEHOLDER_ARTIST_NAME — songs born from prayer, surrender, and encounter.",
  ogImage: "/og.jpg",
  email: "hello@placeholder.com",

  // ── Social links ──────────────────────────────────────────
  socials: {
    instagram: "https://instagram.com/placeholder",
    youtube: "https://youtube.com/@placeholder",
    facebook: "https://facebook.com/placeholder",
    tiktok: "https://tiktok.com/@placeholder",
    spotify: "https://open.spotify.com/artist/placeholder",
    appleMusic: "https://music.apple.com/artist/placeholder",
  },

  // ── Album ─────────────────────────────────────────────────
  album: {
    title: "PLACEHOLDER_ALBUM_TITLE",
    subtitle: "12 songs born from the secret place",
    coverImage: "/images/album-cover.jpg", // recommended: 1200×1200
    releaseDate: "2026-06-01",
    storyParagraphs: [
      "This album was born in the quiet — in early mornings, in prayer rooms, in moments of surrender. Each song carries a story of encounter, of wrestling, and of finding God's presence in the midst of it all.",
      "These aren't just songs for a stage. They're prayers set to music, written for the church, for the living room, for the car ride home when you need to be reminded that you're not alone.",
      "My hope is that these melodies become a soundtrack for your own encounters with God — that they lead you deeper, draw you closer, and remind you of His faithfulness.",
    ],
    pullQuote:
      "These songs were written on my knees before they were ever sung on a stage.",
  },

  // ── Tracks ────────────────────────────────────────────────
  tracks: [
    {
      number: 1,
      title: "Here I Am",
      duration: "4:32",
      previewSrc: "/audio/preview-01.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 2,
      title: "Surrendered",
      duration: "5:18",
      previewSrc: "/audio/preview-02.mp3",
      isFullSingle: true, // full single available
      lyrics: null,
    },
    {
      number: 3,
      title: "In the Waiting",
      duration: "4:05",
      previewSrc: "/audio/preview-03.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 4,
      title: "Faithful One",
      duration: "3:48",
      previewSrc: "/audio/preview-04.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 5,
      title: "Secret Place",
      duration: "6:12",
      previewSrc: "/audio/preview-05.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 6,
      title: "Draw Me Close",
      duration: "4:45",
      previewSrc: "/audio/preview-06.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 7,
      title: "Undone",
      duration: "5:02",
      previewSrc: "/audio/preview-07.mp3",
      isFullSingle: true, // full single available
      lyrics: null,
    },
    {
      number: 8,
      title: "Your Presence",
      duration: "4:20",
      previewSrc: "/audio/preview-08.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 9,
      title: "Overflow",
      duration: "3:55",
      previewSrc: "/audio/preview-09.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 10,
      title: "Holy Ground",
      duration: "5:30",
      previewSrc: "/audio/preview-10.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 11,
      title: "All I Need",
      duration: "4:15",
      previewSrc: "/audio/preview-11.mp3",
      isFullSingle: false,
      lyrics: null,
    },
    {
      number: 12,
      title: "Selah",
      duration: "7:01",
      previewSrc: "/audio/preview-12.mp3",
      isFullSingle: false,
      lyrics: null,
    },
  ],

  // ── Product tiers (link-based checkout) ───────────────────
  products: [
    {
      id: "standard",
      name: "Standard Album",
      subtitle: "MP3 Download",
      features: [
        "Full album in MP3 (320kbps)",
        "Instant digital delivery",
        "Album artwork (digital)",
      ],
      priceZAR: "R149",
      priceUSD: "$8",
      payfast: "https://payfast.co.za/PLACEHOLDER_STANDARD",
      paypal: "https://paypal.com/PLACEHOLDER_STANDARD",
    },
    {
      id: "supporter",
      name: "Supporter Edition",
      subtitle: "MP3 + WAV/FLAC + Bonus",
      features: [
        "Everything in Standard",
        "Lossless WAV/FLAC files",
        "Bonus acoustic track",
        "Early access to future releases",
      ],
      priceZAR: "R249",
      priceUSD: "$14",
      payfast: "https://payfast.co.za/PLACEHOLDER_SUPPORTER",
      paypal: "https://paypal.com/PLACEHOLDER_SUPPORTER",
      featured: true,
    },
    {
      id: "worship-team",
      name: "Worship Team Pack",
      subtitle: "Everything your team needs",
      features: [
        "Everything in Supporter",
        "Chord charts (PDF)",
        "Lyric sheets (PDF)",
        "Multi-track stems",
        "Licence for church use",
      ],
      priceZAR: "R399",
      priceUSD: "$22",
      payfast: "https://payfast.co.za/PLACEHOLDER_WORSHIP_TEAM",
      paypal: "https://paypal.com/PLACEHOLDER_WORSHIP_TEAM",
    },
  ],

  // ── Support / Donate ──────────────────────────────────────
  donate: {
    payfast: "https://payfast.co.za/PLACEHOLDER_DONATE",
    paypal: "https://paypal.com/PLACEHOLDER_DONATE",
    description:
      "Your support helps fund future recordings, music videos, and worship events across South Africa.",
  },

  // ── Videos ────────────────────────────────────────────────
  videos: [
    {
      title: "Surrendered (Official Music Video)",
      youtubeId: "PLACEHOLDER_VIDEO_ID_1",
      type: "music-video" as const,
    },
    {
      title: "Undone (Live Acoustic Session)",
      youtubeId: "PLACEHOLDER_VIDEO_ID_2",
      type: "acoustic" as const,
    },
    {
      title: "Behind the Album — The Story",
      youtubeId: "PLACEHOLDER_VIDEO_ID_3",
      type: "behind-the-scenes" as const,
    },
    {
      title: "Here I Am (Live at PLACEHOLDER Church)",
      youtubeId: "PLACEHOLDER_VIDEO_ID_4",
      type: "live" as const,
    },
  ],

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      quote:
        "These songs carry a genuine anointing. Our congregation has been deeply impacted by this worship.",
      name: "Pastor James",
      role: "Lead Pastor, Grace Community Church",
    },
    {
      quote:
        "Authentic, vulnerable, and powerful. This is the kind of worship music the South African church needs.",
      name: "Sarah M.",
      role: "Worship Leader, Hillside Chapel",
    },
    {
      quote:
        "I've had this album on repeat. Every track feels like a prayer.",
      name: "David K.",
      role: "Listener",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      question: "What format are the downloads?",
      answer:
        "The Standard Album includes MP3 files at 320kbps. The Supporter Edition and Worship Team Pack also include lossless WAV/FLAC files.",
    },
    {
      question: "How do I get my files after purchase?",
      answer:
        "After payment, you'll receive a download link via email. Please check your spam folder if you don't see it within a few minutes.",
    },
    {
      question: "Can I use these songs in my church?",
      answer:
        "Yes! All purchases include a licence for use in church services. The Worship Team Pack includes chord charts and stems specifically for worship teams.",
    },
    {
      question: "Do you ship physical copies?",
      answer:
        "Not yet — this is a digital-only release for now. If there's enough demand, we'll look into physical copies. Join the email list to stay updated.",
    },
    {
      question: "I'm having trouble with my download. Who do I contact?",
      answer:
        "Please email us at hello@placeholder.com and we'll sort it out as quickly as possible.",
    },
    {
      question: "Can I stream this on Spotify?",
      answer:
        "The album will be available on streaming platforms at a later date. For now, buying directly is the best way to support the music and get it first.",
    },
  ],

  // ── MailerLite / Email ────────────────────────────────────
  mailerLite: {
    formAction: "https://assets.mailerlite.com/jsonp/PLACEHOLDER/forms/PLACEHOLDER/subscribe",
    leadMagnet: "Get an unreleased acoustic + devotional note",
    leadMagnetDescription:
      "Sign up and receive an exclusive acoustic recording plus a personal devotional note from the artist — free, straight to your inbox.",
  },

  // ── Booking ───────────────────────────────────────────────
  booking: {
    headline: "Invite PLACEHOLDER_ARTIST_NAME to lead worship",
    description:
      "Available for church services, conferences, worship nights, and special events across South Africa and beyond.",
    includes: [
      "Full worship set (60–90 minutes)",
      "Sound check and setup coordination",
      "Optional: teaching/devotional session",
      "Travel arrangements (discussed per event)",
    ],
    techRequirements: [
      "PA system with monitor mix",
      "At least 2 vocal microphones",
      "DI box for acoustic guitar",
      "Stage area (minimum 3m × 2m)",
    ],
  },

  // ── EPK ───────────────────────────────────────────────────
  epk: {
    shortBio:
      "PLACEHOLDER_ARTIST_NAME is a South African worship artist and songwriter whose music is rooted in authentic, prayer-born worship. Their debut album, PLACEHOLDER_ALBUM_TITLE, is a collection of 12 songs written in the secret place — crafted for the church and the living room alike.",
    longBio:
      "Born and raised in South Africa, PLACEHOLDER_ARTIST_NAME has spent over a decade leading worship in local churches, youth camps, and conferences across the country. Their songwriting is marked by vulnerability, theological depth, and melodies that linger long after the last note fades.\n\nPLACEHOLDER_ALBUM_TITLE, their debut album, was recorded over six months in collaboration with PLACEHOLDER_PRODUCER and features 12 original songs that move between intimate acoustic moments and full-band anthems.\n\nTheir heart is simple: to write songs that help people encounter God.",
    pressContact: "press@placeholder.com",
    highResPhotos: [
      { src: "/images/epk-photo-1.jpg", caption: "Portrait — press use" },
      { src: "/images/epk-photo-2.jpg", caption: "Live worship — press use" },
    ],
  },

  // ── Navigation ────────────────────────────────────────────
  nav: {
    main: [
      { label: "Listen", href: "/listen" },
      { label: "Album", href: "/album" },
      { label: "Shop", href: "/shop" },
      { label: "Videos", href: "/videos" },
      { label: "About", href: "/about" },
      { label: "Book", href: "/book" },
    ],
    footer: [
      { label: "EPK / Press", href: "/epk" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

// ── Type exports ──────────────────────────────────────────
export type Track = (typeof siteConfig.tracks)[number];
export type Product = (typeof siteConfig.products)[number];
export type Video = (typeof siteConfig.videos)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
export type FaqItem = (typeof siteConfig.faq)[number];
