import { Helmet } from "react-helmet-async";

const BASE_URL = "https://globid.co";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  /** Extra JSON-LD blocks to inject into <head>. */
  jsonLd?: Record<string, unknown>[];
  /** Breadcrumb trail for inner pages: [{ name, path }]. Home is prepended automatically. */
  breadcrumbs?: { name: string; path: string }[];
}

const Seo = ({
  title,
  description,
  path,
  type = "website",
  image = `${BASE_URL}/icon-512.png`,
  noindex = false,
  jsonLd = [],
  breadcrumbs,
}: SeoProps) => {
  const url = `${BASE_URL}${path}`;

  const schemas: Record<string, unknown>[] = [...jsonLd];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      })),
    });
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GlobID" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
