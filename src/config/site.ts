import { Metadata } from "next";

export interface NavItem {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface Testimonial {
  name: string;
  description: string;
  avatar: string;
}

export interface MediaSection {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  mediaAlt: string;
}

export interface TrustSection {
  avatars: {
    src: string;
    alt: string;
  }[];
  customerCount: string;
  rating: string;
}

export interface HeaderConfig {
  nav: NavItem[];
  sticky: boolean;
  transparent: boolean;
}

export interface CTAConfig {
  text: string;
  href: string;
}

export interface SocialConfig {
  discord: string;
  twitter: string;
  instagram: string;
  youtube: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Call of Dragons",
  description: "Refund your Call of Dragons purchases back to your bank account with our refund services.",
  brandLogo: undefined,
  
  metadata: {
    title: "Call of Dragons - Get Your Money Back",
    description: "Refund your Call of Dragons purchases back to your bank account with our refund services.",
    keywords: ["Call of Dragons", "refund", "gaming", "mobile games"],
  } satisfies Metadata,

  header: {
    nav: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Features", href: "/features" },
      { title: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    sticky: true,
    transparent: true,
  },

  hero: {
    title: "Quitting? Get your money back!",
    description: "Refund your Call of Dragons purchases back to your bank account with our refund services.",
    image: "/hero.webp",
    imageAlt: "Hero Image",
  },

  trustSection: {
    avatars: [
      { src: "/avatars/avatar1.png", alt: "Avatar 1" },
      { src: "/avatars/avatar2.webp", alt: "Avatar 2" },
      { src: "/avatars/avatar3.webp", alt: "Avatar 3" },
      { src: "/avatars/avatar4.png", alt: "Avatar 4" },
    ],
    customerCount: "500",
    rating: "4.9",
  },

  mediaSections: [
    {
      title: "Experience the Adventure",
      description: "Immerse yourself in an epic world of dragons and magic. Build your kingdom, train your dragons, and forge alliances with players from around the globe. With stunning graphics and engaging gameplay, every moment is an adventure waiting to happen.",
      mediaUrl: "/chakcha.png",
      mediaType: "image",
      mediaAlt: "Dragon gameplay screenshot"
    },
    {
      title: "Strategic Gameplay",
      description: "Master the art of warfare with deep strategic elements. Command powerful dragons, lead armies, and make crucial decisions that will shape the fate of your kingdom. Every choice matters in your journey to become the ultimate ruler.",
      mediaUrl: "/bakhar.png",
      mediaType: "image",
      mediaAlt: "Strategic gameplay screenshot"
    },
    {
        title: "Join the Adventure",
        description: "Whether you're a seasoned player or new to the world of Call of Dragons, our refund service is here to help. Join the adventure today and experience the thrill of a lifetime.",
        mediaUrl: "/gwanwyn.png",
        mediaType: "image",
        mediaAlt: "Strategic gameplay screenshot"
    },
    {
        title: "Join the Adventure",
        description: "Whether you're a seasoned player or new to the world of Call of Dragons, our refund service is here to help. Join the adventure today and experience the thrill of a lifetime.",
        mediaUrl: "/waldyr.png",
        mediaType: "image",
        mediaAlt: "Strategic gameplay screenshot"
    }
  ] satisfies MediaSection[],

  testimonials: [
    {
      name: "Sarah Johnson",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar1.png"
    },
    {
      name: "Michael Chen",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar2.webp"
    },
    {
      name: "Emma Thompson",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar3.webp"
    }
  ] satisfies Testimonial[],

  footer: {
    sections: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters" },
          { label: "Features", href: "/features" },
          { label: "About", href: "/about" },
        ]
      },
      {
        title: "Community",
        links: [
          { label: "Discord", href: "#" },
          { label: "Twitter", href: "#" },
          { label: "Instagram", href: "#" },
          { label: "YouTube", href: "#" },
        ]
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Contact Us", href: "/contact" },
        ]
      }
    ] satisfies FooterSection[],
    copyright: "© 2024 Call of Dragons. All rights reserved."
  },

  cta: {
    primary: {
      text: "Get Started",
      href: "/contact",
    },
    secondary: {
      text: "Learn More",
      href: "/about",
    },
  },

  social: {
    discord: "https://discord.gg/yourdiscord",
    twitter: "https://twitter.com/yourtwitter",
    instagram: "https://instagram.com/yourinstagram",
    youtube: "https://youtube.com/yourchannel",
  },

  contact: {
    email: "support@callofdragons.com",
    phone: "+1 (555) 123-4567",
    address: "123 Dragon Street, Gaming City, GC 12345",
  },

  company: {
    name: "Call of Dragons",
    legalName: "Call of Dragons Gaming Ltd.",
    founded: "2024",
    registration: "123456789",
  },

  seo: {
    defaultTitle: "Call of Dragons - Get Your Money Back",
    titleTemplate: "%s | Call of Dragons",
    defaultDescription: "Refund your Call of Dragons purchases back to your bank account with our refund services.",
    siteUrl: "https://callofdragons.com",
    twitterHandle: "@callofdragons",
    ogImage: "/og-image.jpg",
  },

  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our services.",
    items: [
      {
        question: "System requirements",
        answer: "Our service works on any modern web browser. No special software or hardware requirements needed."
      },
      {
        question: "Where can I learn more about how to get started?",
        answer: "You can start by contacting our support team. We'll guide you through the entire refund process step by step."
      },
      {
        question: "Is Acme available for Linux?",
        answer: "Yes, our service is platform-independent and works on all operating systems including Linux, Windows, and macOS."
      },
      {
        question: "What about a version for iOS?",
        answer: "Our service is web-based and works perfectly on iOS through any modern browser. No app installation required."
      },
      {
        question: "Will I automatically be charged when my trial ends?",
        answer: "No, we don't automatically charge you. You'll need to explicitly upgrade to continue using our services after the trial period."
      }
    ] satisfies FAQItem[]
  },
} as const;

export type SiteConfig = typeof siteConfig; 