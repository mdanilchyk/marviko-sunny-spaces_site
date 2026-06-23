import { faqData, windowsAluFaq, windowsPvhFaq } from "@/data/faq";
import { SEO_BY_PATH, type SeoPath } from "@/config/seo";
import { SITE } from "@/config/site";

export type SchemaPath = SeoPath | "not-found";

const SERVICE_PATHS: SeoPath[] = [
  "/windows-pvh",
  "/windows-alu",
  "/doors",
  "/partitions",
  "/windowsills",
  "/accessories",
];

const AREA_SERVED = "Минск и Минская область";

function withContext<T extends Record<string, unknown>>(data: T) {
  return { "@context": "https://schema.org", ...data };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#organization`,
    name: "Марвико",
    url: SITE.domain,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Червень",
      addressCountry: "BY",
    },
    description:
      "Окна ПВХ, двери, перегородки и подоконники в Минске. Гарантия 10 лет, бесплатный замер.",
    areaServed: AREA_SERVED,
    // TODO: align with SITE.workingHours (Пн–Суб 09:00–17:00) if business hours change on site
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    name: "Марвико",
    url: SITE.domain,
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}

export function faqPageSchema(items: typeof faqData = faqData) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(path: (typeof SERVICE_PATHS)[number]) {
  const seo = SEO_BY_PATH[path];
  return {
    "@type": "Service",
    name: seo.ogTitle,
    description: seo.ogDescription,
    url: seo.canonical,
    provider: {
      "@type": "LocalBusiness",
      name: "Марвико",
      telephone: SITE.phone,
      url: SITE.domain,
    },
    areaServed: AREA_SERVED,
  };
}

export function breadcrumbSchema(path: SeoPath) {
  const seo = SEO_BY_PATH[path];
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: `${SITE.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: seo.title.split(" | ")[0] ?? seo.title,
        item: seo.canonical,
      },
    ],
  };
}

function isServicePath(path: SeoPath): path is (typeof SERVICE_PATHS)[number] {
  return (SERVICE_PATHS as readonly string[]).includes(path);
}

export function getSchemasForPath(path: SchemaPath): Record<string, unknown>[] {
  if (path === "not-found") {
    return [];
  }

  if (path === "/") {
    return [
      withContext(localBusinessSchema()),
      withContext(websiteSchema()),
      withContext(faqPageSchema()),
    ];
  }

  if (isServicePath(path)) {
    const schemas = [withContext(serviceSchema(path)), withContext(breadcrumbSchema(path))];
    if (path === "/windows-pvh") {
      schemas.push(withContext(faqPageSchema(windowsPvhFaq)));
    } else if (path === "/windows-alu") {
      schemas.push(withContext(faqPageSchema(windowsAluFaq)));
    }
    return schemas;
  }

  if (path === "/portfolio") {
    return [withContext(breadcrumbSchema(path))];
  }

  return [];
}
