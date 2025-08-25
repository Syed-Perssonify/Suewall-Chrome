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
      { label: "Facebook", href: routes.facebook.path, icon: "Facebook" },
      { label: "Twitter", href: routes.twitter.path, icon: "Twitter" },
      { label: "Email", href: routes.email.path, icon: "Mail" },
    ],
    legal: [
      { label: "Privacy Policy", href: routes.termsOfService.path },
      { label: "Terms of Service", href: routes.termsOfService.path },
      { label: "Disclaimer", href: routes.disclaimer.path },
    ],
    copyrightText: `© ${currentYear} Levi & Korsinsky LLP. All rights reserved.`,
    builtBy: "Built by Syed Moinuddin",
  },
  hero: {
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
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Discover quick and comprehensive answers to common questions about our platform, services, and features.",
    items: [
      {
        id: "item-1",
        question: "What is the Levi & Korsinsky Active Case Checker?",
        answer: "The Active Case Checker is a Chrome extension that allows legal teams and clients to securely capture relevant trading-page information and sync it to case files without copy-paste or data leaks. It's designed with SOC2-ready practices and enterprise-grade security.",
      },
      {
        id: "item-2",
        question: "How secure is the Chrome extension?",
        answer: "Our extension implements enterprise-grade security measures including TLS encryption in transit, encryption at rest, and follows SOC2-ready practices. We also provide comprehensive Privacy Policy, Terms of Service, and Data Processing Agreement (DPA) for complete transparency.",
      },
      {
        id: "item-3",
        question: "How do I install the extension?",
        answer: "You can install the extension directly from the Chrome Web Store by clicking the 'Install from Chrome Web Store' button on our website. The installation process is simple and takes just a few clicks.",
      },
      {
        id: "item-4",
        question: "Can I request a demo before installing?",
        answer: "Yes, absolutely! We offer demo sessions for interested users. You can request a demo by clicking the 'Request a demo' button on our website, and our team will schedule a personalized demonstration of the extension's capabilities.",
      },
      {
        id: "item-5",
        question: "What trading platforms does the extension support?",
        answer: "Our Chrome extension is designed to work with major trading platforms and financial websites. It captures relevant information from any webpage, making it versatile for various trading and financial data sources.",
      },
      {
        id: "item-6",
        question: "Is there a cost to use the extension?",
        answer: "The extension is available for free download from the Chrome Web Store. For enterprise users or organizations requiring additional features or support, we offer premium plans. Contact our team for pricing details.",
      },
      {
        id: "item-7",
        question: "How do I get support if I encounter issues?",
        answer: "We provide comprehensive customer support through multiple channels. You can contact our support team via email at info@levikorsinsky.com or call us at (212) 363-7500. We're committed to ensuring a smooth experience with our extension.",
      },
    ],
    supportText: "Can't find what you're looking for? Contact our",
    supportLink: "customer support team",
    supportLinkHref: routes.contact.path,
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Simple steps to get started with our Chrome extension",
    steps: [
      {
        title: "Install the Extension",
        description: "Download our Chrome extension from the Chrome Web Store with just one click. No complex setup required.",
        icon: "Download",
      },
      {
        title: "Navigate to Trading Pages",
        description: "Visit any trading platform or financial website where you need to capture case-relevant information.",
        icon: "Globe",
      },
      {
        title: "Capture Data Securely",
        description: "Click the extension icon to securely capture relevant trading data and case information without any data leaks.",
        icon: "Shield",
      },
      {
        title: "Sync to Case Files",
        description: "Automatically sync captured data to your case management system with enterprise-grade security and encryption.",
        icon: "FileText",
      },
    ],
    benefits: [
      {
        title: "SOC2-Ready Security",
        description: "Built with enterprise-grade security practices and compliance standards.",
      },
      {
        title: "Real-Time Sync",
        description: "Instant data synchronization to keep your case files always up-to-date.",
      },
      {
        title: "No Data Leaks",
        description: "Secure data capture without copy-paste vulnerabilities or information exposure.",
      },
    ],
  },
};
