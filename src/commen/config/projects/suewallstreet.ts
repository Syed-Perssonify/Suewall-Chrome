import { currentYear } from "../utils";
import { routes } from "../routes";
import { features } from "process";

export const params = {
  name: "SueWallSt — Active Case Tracker",
  tagline: "Track Securities Class Actions Instantly",
  domain: "https://zlk.com/",
  contact: {
    email: "info@suewallst.com",
    phone: "(212) 363-7500",
    phoneLink: "tel:+12123637500",
    address: "New York, NY",
  },
  header: {
    logo: "/images/logo/logo.svg",
    links: [
      { name: "Home", href: "#home" },
      { name: "How It Works", href: "#howitworks" },
      { name: "Features", href: "#features" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  footer: {
    company: {
      name: "SueWallSt",
      tagline: "Track Securities Class Actions Instantly.",
      description:
        "Under the rules of certain jurisdictions, this website may constitute attorney advertising.",
    },
    contact: {
      address: "New York, NY",
      phone: "(212) 363-7500",
      email: "info@suewallst.com",
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
    copyrightText: `© ${currentYear} SueWallSt. All rights reserved.`,
  },
  hero: {
    heading: [
      "Spot",
      "Lawsuits",
      "While",
      "You",
      "Doomscroll",
      "Through",
      "Finance",
      "News",
    ],
    description: [
      "Why wait for the fine print to catch you off guard? Our Chrome extension is like having a Wall Street watchdog that growls the second a ticker you’re eyeing is knee-deep in a class action. Real-time alerts, zero jargon, all while you keep browsing the finance sites you already stalk.",
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
          "We provide comprehensive customer support through multiple channels. You can contact our support team via email at info@suewallst.com or call us at (212) 363-7500. We're committed to ensuring a smooth experience with our extension.",
      },
    ],
    supportText: "Can't find what you're looking for? Contact our",
    supportLink: "customer support team",
    supportLinkHref: routes.contact.path,
  },
  howItWorks: {
    title: "How to Get Rolling ",
    steps: [
      {
        title: "Install the Extension",
        description:
          "One click. No IT guy, no passwords longer than your life savings. Just add it from the Chrome Store and you’re in.",
        icon: "Download",
      },
      {
        title: "Get Alerts While You Browse",
        description:
          "Keep doing your usual scroll on Yahoo Finance, MarketWatch, or wherever you binge market gossip. We’ll auto-flag tickers tangled in lawsuits.",
        icon: "Globe",
      },
      {
        title: "Take Action",
        description:
          "Click once. See case details, ask about class actions, or connect with legal firepower. It’s like fast food — but instead of fries, you get rights.",
        icon: "FileText",
      },
    ],
    benefits: [
      {
        title: "Red Flags in Real Time",
        description:
          "Find out instantly if your stocks are hiding skeletons in SEC filings. Save yourself from nasty surprises before the market does.",
        images: "/images/icons/real-time.svg",
      },
      {
        title: "Ping, You’re Protected",
        description:
          "From filings to settlements to deadlines, alerts hit you faster than meme stocks tank on earnings day.",
        images: "/images/icons/instant-notifications.svg",
      },
      {
        title: "We Respect Privacy",
        description:
          "Your personal data is safeguarded with strict privacy standards — we never track your activity or store your financial information.",
        images: "/images/icons/security.svg",
      },
      {
        title: "Plays Nice Everywhere",
        description:
          "Yahoo Finance? MarketWatch? Morningstar? SeekingAlpha? Yes, yes, yes, and yes. It works across many of your favorite financial haunts.",
        images: "/images/icons/financial-platforms.svg",
      },
      {
        title: "Investor-Friendly Design",
        description:
          "Built so shareholders don’t have to be lawyers. One screen, clear choices, no legal Sudoku.",
        images: "/images/icons/simple-to-use.svg",
      },
      {
        title: "Effortless Oversight",
        description:
          "No more Googling “[Company] + class action” at 2 AM. We serve the lawsuit news hot and ready.",
        images: "/images/icons/effortless-monitoring.svg",
      },
    ],
  },
  features: {
    title: "Stay Informed",
    titleHighlight: "Protect Your Investments.",
    description: "Your portfolio deserves a heads-up, not hindsight. Our Chrome extension puts lawsuit radar right on your finance pages — before you miss deadlines, settlements, or your chance at recovery.",
    cards: [
      {
        title: "Cut Down Risk",
        description: "Catch litigation before it nukes your holdings. Pivot, diversify, or seek legal advice before things escalate.",
        image: "/images/22.png",
        alt: "Active Case Checker"
      },
      {
        title: "Claim What's Yours",
        description: "Don't leave settlement checks on the table. If a company cooked the books, you are entitled to a refund.",
        image: "/images/Claim What's Yours-2 (1).png",
        alt: "Instant Notifications"
      },
      {
        title: "See the Big Picture",
        description: "One dashboard. Multiple holdings. Lawsuit alerts are consolidated so you know exactly where your portfolio stands.",
        image: "/images/Claim What's Yours.png",
        alt: "Big Picture View"
      }
    ],
    trusted: {
      title: "Trusted by thousands of investors across the United States",
      benefits: [
        {
          icon: "/icons/instant-setup.svg",
          text: "Free to Install",
          alt: "Free to Install"
        },
        {
          icon: "/icons/no-personal-data-required.svg",
          text: "No Personal Data Required", 
          alt: "No Personal Data Required"
        },
        {
          icon: "/icons/cloud-arrow-down.svg",
          text: "Instant Setup",
          alt: "Instant Setup"
        }
      ]
    }
  },
};
