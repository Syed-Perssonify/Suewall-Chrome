export const routes = {
  home: {
    path: "/",
  },
  about: {
    path: "/about",
  },
  contact: {
    path: "/contact",
  },
  
  // Services
  securitiesLitigation: {
    path: "/securities-litigation",
  },
  classActions: {
    path: "/class-actions",
  },
  shareholderRights: {
    path: "/shareholder-rights",
  },
  corporateGovernance: {
    path: "/corporate-governance",
  },
  chromeExtension: {
    path: "/chrome-extension",
  },
  
  // Company
  attorneys: {
    path: "/attorneys",
  },
  cases: {
    path: "/cases",
  },
  careers: {
    path: "/careers",
  },
  
  // Legal
  privacyPolicy: {
    path: "/privacy-policy",
  },
  termsOfService: {
    path: "/terms-of-service",
  },
  disclaimer: {
    path: "/disclaimer",
  },
  
  // External links
  github: {
    path: "https://github.com/levikorsinsky",
  },
  linkedin: {
    path: "https://www.linkedin.com/company/levi-korsinsky",
  },
  twitter: {
    path: "https://twitter.com/levikorsinsky",
  },
  email: {
    path: "mailto:info@levikorsinsky.com",
  },
  
  // Chrome Web Store
  chromeWebStore: {
    path: "#link", // Replace with actual Chrome Web Store link
  },
  
  // Demo
  demo: {
    path: "#link", // Replace with actual demo link
  },
} as const;

export type RouteKey = keyof typeof routes;
