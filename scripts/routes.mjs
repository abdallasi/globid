// Single source of truth for public, indexable routes.
// Used by the prerender step and the sitemap generator.

export const BASE_URL = "https://globid.co";

export const publicRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/what-is-globid", changefreq: "monthly", priority: "0.9" },
  { path: "/global-worker-identity", changefreq: "monthly", priority: "0.8" },
  { path: "/global-hiring-compliance", changefreq: "monthly", priority: "0.8" },
  { path: "/employer-of-record-alternative", changefreq: "monthly", priority: "0.8" },
  { path: "/deel-alternative", changefreq: "monthly", priority: "0.8" },
  { path: "/hire-in-mena", changefreq: "monthly", priority: "0.8" },
  { path: "/hire-in-africa", changefreq: "monthly", priority: "0.8" },
  { path: "/hire-in-nigeria", changefreq: "monthly", priority: "0.8" },
  { path: "/worker-verification", changefreq: "monthly", priority: "0.8" },
  { path: "/remote-hiring-risks", changefreq: "monthly", priority: "0.8" },
  { path: "/global-worker-verification", changefreq: "monthly", priority: "0.8" },
  { path: "/remote-work-documents", changefreq: "monthly", priority: "0.7" },
  { path: "/hire-international-talent", changefreq: "monthly", priority: "0.8" },
  { path: "/identity-for-remote-jobs", changefreq: "monthly", priority: "0.7" },
  { path: "/mena-remote-work", changefreq: "monthly", priority: "0.8" },
  { path: "/manifesto", changefreq: "monthly", priority: "0.7" },
  { path: "/demo", changefreq: "monthly", priority: "0.9" },
];

// Routes rendered client-side only (auth-gated or transactional).
export const clientOnlyRoutes = [
  "/auth",
  "/dashboard",
  "/profile",
  "/payment",
  "/verify",
  "/success",
  "/admin/payments",
  "/passport/:uid",
  "/passport/setup",
];
