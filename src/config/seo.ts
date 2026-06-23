import { SITE } from "@/config/site";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  noindex?: boolean;
}

export type SeoPath =
  | "/"
  | "/windows"
  | "/windows-pvh"
  | "/windows-alu"
  | "/doors"
  | "/partitions"
  | "/windowsills"
  | "/portfolio"
  | "/accessories";

const phone = SITE.phoneShort;

function canonical(path: SeoPath): string {
  return path === "/" ? `${SITE.domain}/` : `${SITE.domain}${path}`;
}

export const SEO_BY_PATH: Record<SeoPath, SeoMeta> = {
  "/": {
    title: "Марвико — Окна ПВХ, двери и перегородки в Минске",
    description:
      "Производство и установка окон ПВХ, дверей и перегородок в Минске и области. Гарантия 10 лет, бесплатный замер. Звоните: " +
      phone,
    canonical: canonical("/"),
    ogTitle: "Марвико — Окна ПВХ, двери и перегородки в Минске",
    ogDescription:
      "Профессиональное остекление в Минске и области. Окна ПВХ, двери, перегородки. Гарантия 10 лет.",
  },
  "/windows": {
    title: "Окна ПВХ в Минске — цены и установка | Марвико",
    description:
      "Окна ПВХ в Минске от производителя. Профили Montblanc, гарантия 10 лет, бесплатный замер. Звоните: " + phone,
    canonical: canonical("/windows-pvh"),
    ogTitle: "Окна ПВХ в Минске — цены и установка | Марвико",
    ogDescription: "Окна ПВХ от производителя. Бесплатный замер, гарантия 10 лет.",
  },
  "/windows-pvh": {
    title: "Окна ПВХ для вашего дома — цены и установка в Минске | Марвико",
    description:
      "Энергосберегающие окна ПВХ с двухкамерным стеклопакетом. Бесплатный замер. Доставка. Производство и монтаж в Минске и области. Звоните: " +
      phone,
    canonical: canonical("/windows-pvh"),
    ogTitle: "Окна ПВХ для вашего дома — Марвико",
    ogDescription: "Энергосберегающие окна ПВХ с двухкамерным стеклопакетом. Бесплатный замер. Доставка.",
  },
  "/windows-alu": {
    title: "Алюминиевые окна для вашего дома — установка в Минске | Марвико",
    description:
      "Энергосберегающие алюминиевые окна с двухкамерным стеклопакетом. Бесплатный замер. Доставка. Изготовление и монтаж в Минске и области. Звоните: " +
      phone,
    canonical: canonical("/windows-alu"),
    ogTitle: "Алюминиевые окна для вашего дома — Марвико",
    ogDescription: "Энергосберегающие алюминиевые окна с двухкамерным стеклопакетом. Бесплатный замер. Доставка.",
  },
  "/doors": {
    title: "Двери ПВХ в Минске — входные и межкомнатные | Марвико",
    description:
      "Двери ПВХ в Минске. Входные и межкомнатные, установка под ключ. Гарантия 10 лет. Звоните: " + phone,
    canonical: canonical("/doors"),
    ogTitle: "Двери ПВХ в Минске — входные и межкомнатные | Марвико",
    ogDescription: "Входные, балконные и раздвижные двери ПВХ. Установка под ключ.",
  },
  "/partitions": {
    title: "Перегородки ПВХ в Минске — офисные и домашние | Марвико",
    description:
      "Перегородки ПВХ в Минске. Офисные и домашние, под заказ. Бесплатный замер. Звоните: " + phone,
    canonical: canonical("/partitions"),
    ogTitle: "Перегородки ПВХ в Минске | Марвико",
    ogDescription: "Перегородки из ПВХ и алюминия для офисов, школ и коммерческих объектов.",
  },
  "/windowsills": {
    title: "Подоконники ПВХ в Минске — стандарт и премиум | Марвико",
    description:
      "Подоконники ПВХ в Минске. Стандартные и премиум, более 30 цветов и фактур. Замер и установка. Звоните: " +
      phone,
    canonical: canonical("/windowsills"),
    ogTitle: "Подоконники ПВХ в Минске | Марвико",
    ogDescription: "Стандартные и премиум подоконники под любой интерьер.",
  },
  "/portfolio": {
    title: "Портфолио — наши работы | Марвико",
    description:
      "Примеры остекления, установки дверей, перегородок и подоконников от Марвико. Реальные объекты в Минске и области.",
    canonical: canonical("/portfolio"),
    ogTitle: "Портфолио — наши работы | Марвико",
    ogDescription: "Фото выполненных проектов: окна, двери, перегородки, подоконники.",
  },
  "/accessories": {
    title: "Аксессуары для окон и дверей — сетки, фурнитура | Марвико",
    description:
      "Москитные сетки, замки, ручки, стеклопакеты и фурнитура для окон и дверей ПВХ. Консультация и подбор. Звоните: " +
      phone,
    canonical: canonical("/accessories"),
    ogTitle: "Аксессуары для окон и дверей | Марвико",
    ogDescription: "Москитные сетки, детские замки, фурнитура и стеклопакеты.",
  },
};

export const SEO_NOT_FOUND: SeoMeta = {
  title: "Страница не найдена | Марвико",
  description: "Запрашиваемая страница не существует. Перейдите на главную или выберите раздел в меню.",
  canonical: `${SITE.domain}/`,
  ogTitle: "Страница не найдена | Марвико",
  ogDescription: "Запрашиваемая страница не существует.",
  noindex: true,
};

export const OG_IMAGE = `${SITE.domain}/og-image.jpg`;
