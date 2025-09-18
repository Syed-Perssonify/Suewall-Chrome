import { currentYear } from "./utils";
import { routes } from "./routes";
import { icons } from "lucide-react";

export const params = {
  name: "Levi & Korsinsky",
  tagline: "Serving families across the United States with Active Cases.",
  domain: "https://zlk.com/",
  contact: {
    email: "info@levikorsinsky.com",
    phone: "(212) 363-7500",
    phoneLink: "tel:+12123637500",
    address: "New York, NY",
  },
  header: {
    links: [
      { name: "Home", href: "#home" },
      { name: "How It Works", href: "#howitworks" },
      { name: "Features", href: "#features" },
      { name: "FAQ", href: "#faq" },
    ],
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
    social: [
      { href: routes.linkedin.path, icon: "Linkedin" },
      { href: routes.facebook.path, icon: "Facebook" },
      { href: routes.twitter.path, icon: "Twitter" },
      { href: routes.email.path, icon: "Mail" },
    ],
    legal: [
      { label: "Privacy Policy", href: routes.privacyPolicy.path },
      { label: "Terms of Service", href: routes.termsOfService.path },
    ],
    copyrightText: `© ${currentYear} Levi & Korsinsky LLP. All rights reserved.`,
  },
  hero: {
    heading: [
      "Track",
      "Active",
      "Securities",
      "Cases",
      "Instantly",
      "— Right",
      "from",
      "Your",
      "Browser.",
    ],
    description: [
      "Our",
      "Chrome",
      "extension",
      "is",
      "designed",
      "for",
      "shareholders",
      "and",
      "investors.",
      "Instantly",
      "detect",
      "whether",
      "the",
      "stocks",
      "you",
      "are",
      "following",
      "are",
      "involved",
      "in",
      "securities",
      "class",
      "actions,",
      "receive",
      "timely",
      "alerts,",
      "and",
      "take",
      "action",
      "—",
      "all",
      "while",
      "you",
      "are",
      "browsing",
      "your",
      "favorite",
      "finance",
      "sites.",
    ],
    cta: {
      primary: {
        text: " Install Free on Chrome Web Store",
        link: routes.chromeWebStore.path,
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
    title: "Get Started in 3 Simple Steps",
    subtitle:
      "Seamlessly integrate active case tracking into your workflow in minutes.",
    steps: [
      {
        title: "Install the Extension",
        description:
          "Easily add the extension from the Chrome Web Store in seconds — no technical setup.",
        icon: "Download",
      },
      {
        title: "Get Alerts While You Browse",
        description:
          "Keep browsing your favorite finance website — the extension spots tickers, checks for active class actions, and shows alerts instantly. No extra effort.",
        icon: "Globe",
      },
      {
        title: "Take Action",
        description:
          "With a single click, explore case details, enquire about class actions, or connect with legal support. No additional effort.",
        icon: "FileText",
      },
    ],
    benefits: [
      {
        title: "Real-Time Case Detection",
        description:
          "Instantly determine if your investments are tied to ongoing securities litigation, enabling you to make informed financial decisions.",
        images: "/images/icons/real-time.svg",
      },
      {
        title: "Instant Notifications",
        description:
          "Stay ahead with always-on, real-time alerts for new filings, settlements, and important deadlines, and avoid being caught off guard.",
        images: "/images/icons/instant-notifications.svg",
      },
      {
        title: "Secure & Private",
        description:
          "Your personal data is safeguarded with strict privacy standards — we never track your activity or store your financial information.",
        images: "/images/icons/security.svg",
      },
      {
        title: "Works on Top Financial Platforms",
        description:
          "Integrates seamlessly with Yahoo Finance, Nasdaq, MarketWatch, Morningstar, SeekingAlpha, TipRanks, and more.",
        images: "/images/icons/financial-platforms.svg",
      },
      {
        title: "Simple to Use",
        description:
          "Built with shareholders in mind — an intuitive interface that’s simple and reassuring. Easy pathways to protect investments and exercise rights.",
        images: "/images/icons/simple-to-use.svg",
      },
      {
        title: "Effortless Monitoring",
        description:
          "No more manual searching or cross-checking — the extension delivers case information proactively, so you can focus on your investments.",
        images: "/images/icons/effortless-monitoring.svg",
      },
    ],
  },
};
