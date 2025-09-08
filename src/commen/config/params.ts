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
      tagline: "Cases Settlements Attorneys Firm L&K.",
      description:
        "Under the rules of certain jurisdictions, this website may constitute attorney advertising.",
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
      { href: routes.linkedin.path, icon: "Linkedin" },
      { href: routes.facebook.path, icon: "Facebook" },
      { href: routes.twitter.path, icon: "Twitter" },
      { href: routes.email.path, icon: "Mail" },
    ],
    legal: [
      { label: "Privacy Policy", href: routes.termsOfService.path },
      { label: "Terms of Service", href: routes.termsOfService.path },
    ],
    copyrightText: `© ${currentYear} Levi & Korsinsky LLP. All rights reserved.`,
  },
  hero: {
    heading: [
      "Track Active Securities Cases Instantly — Right from Your Browser.",
    ],
    description: [
      "Our Chrome extension lets your legal team and clients securely detect relevant trading-page information, check active securities litigation cases, and sync data directly to case files — without copy-paste or data leaks.",
    ],
    cta: {
      primary: {
        text: "Install Free on Chrome Web Store]",
        link: routes.chromeWebStore.path,
      },
      secondary: {
        text: "Request a demo",
        link: routes.demo.path,
      },
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle:
      "Discover quick and comprehensive answers to common questions about our platform, services, and features.",
    items: [
      {
        id: "item-1",
        question: "How secure is the Chrome extension?",
        answer:
          "All data is encrypted in transit and at rest, SOC 2-ready, and handled via backend APIs only..",
      },
      {
        id: "item-2",
        question: "Does the extension store my personal information?",
        answer:
          "No personal data is stored locally. Your data is processed securely via our backend, with your explicit consent.",
      },
      {
        id: "item-3",
        question: "What trading platforms does it support?",
        answer:
          "Yahoo Finance, Nasdaq, MarketWatch, Morningstar, SeekingAlpha, TipRanks, and many more.",
      },
      {
        id: "item-4",
        question: "Can I request a demo before installing?",
        answer:
          "Yes, absolutely! We offer demo sessions for interested users. You can request a demo by clicking the 'Request a demo' button on our website, and our team will schedule a personalized demonstration of the extension's capabilities.",
      },
      {
        id: "item-5",
        question: "Can I disable scanning on certain websites?",
        answer:
          "Yes, you can manage preferences and snooze scanning from the extension settings.",
      },
      {
        id: "item-6",
        question: "Is it free to install?",
        answer:
          "Yes, the extension is free to install from the Chrome Web Store.",
      },
      {
        id: "item-7",
        question: "How do I get support if I encounter issues?",
        answer:
          "We provide comprehensive customer support through multiple channels. You can contact our support team via email at info@levikorsinsky.com or call us at (212) 363-7500. We're committed to ensuring a smooth experience with our extension.",
      },
    ],
    supportText: "Can't find what you're looking for? Contact our",
    supportLink: "customer support team",
    supportLinkHref: routes.contact.path,
  },
  howItWorks: {
    title: "Get Started in Four Simple Steps",
    subtitle:
      "Seamlessly integrate active case tracking into your workflow in minutes.",
    steps: [
      {
        title: "Install the Extension",
        description:
          "Download from the Chrome Web Store in a single click. No complex setup required.",
        icon: "Download",
      },
      {
        title: "Browse Finance Sites",
        description:
          "Visit supported trading and finance platforms like Yahoo Finance, Nasdaq, MarketWatch, Morningstar, TipRanks, SeekingAlpha, and more.",
        icon: "Globe",
      },
      {
        title: "Auto Detect & Check Cases",
        description:
          "Our extension automatically detects ticker symbols on supported domains and checks against our Active Case Database in real-time.",
        icon: "Shield",
      },
      {
        title: "Take Action",
        description:
          "See matched cases instantly, join class actions securely, and sync captured data directly to your case management system.",
        icon: "FileText",
      },
    ],
    benefits: [
      {
        title: "Real-Time Active Case Detection",
        description:
          "Instantly identify if securities are involved in ongoing litigation.",
        icon: "ShieldCheck",
      },
      {
        title: "Instant Notifications",
        description:
          "Receive real-time alerts for new cases, settlements, and filing deadlines.",
        icon: "Sync",
      },
      {
        title: "Secure Case Sync",
        description:
          "Automatically sync relevant case information directly to your legal workflows with enterprise-grade encryption.",
        icon: "Lock",
      },
      {
        title: "Works on Top Financial Platforms",
        description:
          "Seamlessly integrates with Yahoo Finance, Nasdaq, MarketWatch, Morningstar, SeekingAlpha, TipRanks, and more.",
        icon: "Lock",
      },
      {
        title: "Privacy-First Approach",
        description:
          "Your personal data stays secure — we never expose secrets to the client side, and no PII is stored without consent.",
        icon: "Lock",
      },
    ],
  },
};
