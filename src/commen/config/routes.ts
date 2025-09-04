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
  website:{
    path: "https://zlk.com/",
  },
  facebook: {
    path: "https://www.facebook.com/levikorsinsky/",
  },
  linkedin: {
    path: "https://www.linkedin.com/company/levi-&-korsinsky-llp/",
  },
  twitter: {
    path: "https://twitter.com/MergerAlerts",
  },
  email: {
    path: "mailto:info@levikorsinsky.com",
  },

  // Chrome Web Store
  chromeWebStore: {
    path: "https://chromewebstore.google.com/detail/active-case-checker/jgjgjgjgjgjgjgjgjgjgjgjgjgjgjgjg", // Replace with actual Chrome Web Store link
  },

  // Demo
  demo: {
    path: "https://www.levikorsinsky.com/demo", // Replace with actual demo link don't forget to add https://
  },
} as const;

export type RouteKey = keyof typeof routes;
