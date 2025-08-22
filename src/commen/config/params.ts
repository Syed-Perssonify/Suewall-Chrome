import { currentYear } from "./utils";

export const params = {
  name: "Levi & Korsinsky",
  tagline: "Serving families across the United States with Active Cases.",
  domain: "https://zlk.com/",
  contact: {
    email: "hello@zlk.com",
    phone: "(720) 662-7615",
    phoneLink: "tel:+17206627615",
    address: "Denver, CO",
  },
  footer: {
    copyrightText: `Copyright © ${currentYear} • Levi & Korsinsky • All Rights Reserved • We want all users to have a great experience on our website. If you are having trouble understanding any portion of this website please call us at (720) 662-7615.`,
  },
  hero: {
    badge: {
      text: "Introducing Levi & Korsinsky Active Case Checker",
      link: "#link",
    },
    heading: [
      "Connect",
      "trading",
      "data",
      "to",
      "active",
      "cases—securely.",
    ],
    description: [
      "Our",
      "Chrome",
      "extension",
      "lets",
      "your",
      "legal",
      "team",
      "and",
      "clients",
      "securely",
      "capture",
      "relevant",
      "trading-page",
      "information",
      "and",
      "sync",
      "it",
      "to",
      "case",
      "files—without",
      "copy‑paste",
      "or",
      "data",
      "leaks.",
    ],
    features: [
      {
        icon: "ShieldCheck",
        text: "SOC2-ready practices",
        color: "text-blue-600",
      },
      {
        icon: "Lock",
        text: "TLS in transit • encryption at rest",
        color: "text-blue-600",
      },
      {
        icon: "FileText",
        text: "Privacy • Terms • DPA",
        color: "text-blue-600",
      },
    ],
    cta: {
      primary: {
        text: "Install from Chrome Web Store",
        link: "#link",
      },
      secondary: {
        text: "Request a demo",
        link: "#link",
      },
    },
  },
};
