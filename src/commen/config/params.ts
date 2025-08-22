import { currentYear } from "./utils";
import { routes } from "./routes";

export const params = {
  name: "Levi & Korsinsky",
  tagline: "Serving families across the United States with Active Cases.",
  domain: "https://zlk.com/",
  header: {
    links: [
      { label: "Home", href: routes.home.path },
      { label: "About Us", href: routes.about.path },
      {
        label: "Securities Litigation",
        href: routes.securitiesLitigation.path,
      },
      { label: "Class Actions", href: routes.classActions.path },
      { label: "Chrome Extension", href: routes.chromeExtension.path },
      { label: "Contact", href: routes.contact.path },
    ],
  },
  contact: {
    email: "info@levikorsinsky.com",
    phone: "(212) 363-7500",
    phoneLink: "tel:+12123637500",
    address: "New York, NY",
  },
  footer: {
    company: {
      name: "Levi & Korsinsky",
      tagline: "Leading Securities Litigation Firm",
      description:
        "Serving families across the United States with Active Cases.",
    },
    contact: {
      address: "New York, NY",
      phone: "(212) 363-7500",
      email: "info@levikorsinsky.com",
    },
    services: [
      {
        label: "Securities Litigation",
        href: routes.securitiesLitigation.path,
      },
      { label: "Class Actions", href: routes.classActions.path },
      { label: "Shareholder Rights", href: routes.shareholderRights.path },
      { label: "Corporate Governance", href: routes.corporateGovernance.path },
      { label: "Chrome Extension", href: routes.chromeExtension.path },
    ],
    companyLinks: [
      { label: "About Us", href: routes.about.path },
      { label: "Our Attorneys", href: routes.attorneys.path },
      { label: "Notable Cases", href: routes.cases.path },
      { label: "Careers", href: routes.careers.path },
    ],
    social: [
      { label: "LinkedIn", href: routes.linkedin.path, icon: "Linkedin" },
      { label: "Twitter", href: routes.twitter.path, icon: "Twitter" },
      { label: "Email", href: routes.email.path, icon: "Mail" },
    ],
    legal: [
      { label: "Privacy Policy", href: routes.termsOfService.path },
      { label: "Terms of Service", href: routes.termsOfService.path },
      { label: "Disclaimer", href: routes.disclaimer.path },
    ],
    copyrightText: `© ${currentYear} Levi & Korsinsky LLP. All rights reserved.`,
  },
  hero: {
    badge: {
      text: "Introducing Levi & Korsinsky Active Case Checker",
      link: routes.chromeExtension.path,
    },
    heading: ["Connect", "trading", "data", "to", "active", "cases—securely."],
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
      },
      {
        icon: "Lock",
        text: "TLS in transit • encryption at rest",
      },
      {
        icon: "FileText",
        text: "Privacy • Terms • DPA",
      },
    ],
    cta: {
      primary: {
        text: "Install from Chrome Web Store",
        link: routes.chromeWebStore.path,
      },
      secondary: {
        text: "Request a demo",
        link: routes.demo.path,
      },
    },
  },
};
