import { Helmet } from "react-helmet-async";
import { getSchemasForPath, type SchemaPath } from "@/config/schema";
import { OG_IMAGE, type SeoMeta } from "@/config/seo";

interface PageSeoProps {
  seo: SeoMeta;
  path?: SchemaPath;
}

const PageSeo = ({ seo, path }: PageSeoProps) => {
  const schemas = path !== undefined ? getSchemasForPath(path) : [];

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta name="robots" content={seo.noindex ? "noindex, follow" : "index, follow"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {schemas.map((schema, index) => (
        <script key={`ld+json-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default PageSeo;
