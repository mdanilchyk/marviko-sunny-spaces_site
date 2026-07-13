/** Window pricing — single source of truth (aligned with /windows page). */

export type WindowPriceType = "single" | "double" | "triple" | "balcony";

export interface WindowPriceItem {
  type: WindowPriceType;
  title: string;
  size: string;
  price: string;
  /** Подок — значение с бланка, мм */
  windowsill?: string;
  /** Отлив — значение с бланка, мм */
  drip?: string;
}

function basicWindowPrice(
  type: WindowPriceType,
  title: string,
  size: string,
  price: string,
): WindowPriceItem {
  return {
    type,
    title,
    size,
    price,
    windowsill: "250",
    drip: type === "balcony" ? "200" : "150",
  };
}

export function formatWindowBlankPackage(item: WindowPriceItem): string | null {
  if (!item.windowsill || !item.drip) return null;
  if (item.type === "balcony") {
    return `подок ${item.windowsill} · подоконник ${item.drip}`;
  }
  return `подок ${item.windowsill} · отлив ${item.drip}`;
}

export interface WindowProfilePricing {
  chambers: string;
  width: string;
  glass: string;
  prices: WindowPriceItem[];
  features: string[];
  popular?: boolean;
}

/** Full profile tables for the Windows page. */
export const WINDOW_PROFILE_PRICING: WindowProfilePricing[] = [
  {
    chambers: "3 камеры",
    width: "58 мм",
    glass: "Двухкамерный 32 мм",
    prices: [
      basicWindowPrice("single", "Одностворчатое", "1400×800", "340 BYN"),
      basicWindowPrice("double", "Двустворчатое", "1400×1300", "450 BYN"),
      basicWindowPrice("triple", "Трёхстворчатое", "1400×2000", "610 BYN"),
      basicWindowPrice("balcony", "Балконный блок", "2100×1500", "670 BYN"),
    ],
    features: ["Базовая теплоизоляция", "Армирование 1,5 мм", "Фурнитура: Accado, UPT, MACO"],
  },
  {
    chambers: "5 камер",
    width: "70 мм",
    glass: "Двухкамерный 40 мм",
    prices: [
      basicWindowPrice("single", "Одностворчатое", "1400×800", "355 BYN"),
      basicWindowPrice("double", "Двустворчатое", "1400×1300", "475 BYN"),
      basicWindowPrice("triple", "Трёхстворчатое", "1400×2000", "650 BYN"),
      basicWindowPrice("balcony", "Балконный блок", "2100×1500", "705 BYN"),
    ],
    features: ["Улучшенная теплоизоляция", "Армирование 1,5 мм", "Микропроветривание"],
    popular: true,
  },
];

export interface HomepagePricingCard {
  type: WindowPriceType;
  title: string;
  size: string;
  opening: string;
  glass: string;
  price: string;
  featured: boolean;
}

const HOMEPAGE_CARD_META: Record<
  WindowPriceType,
  Pick<HomepagePricingCard, "title" | "opening" | "featured">
> = {
  single: { title: "Одностворчатое окно", opening: "поворотно-откидное", featured: false },
  double: { title: "Двухстворчатое окно", opening: "1 створка поворотно-откидная", featured: true },
  triple: { title: "Трёхстворчатое окно", opening: "2 створки поворотно-откидные", featured: false },
  balcony: { title: "Балконный блок", opening: "окно + балконная дверь", featured: false },
};

function formatHomepageSize(size: string): string {
  const [height, width] = size.split("×");
  return `${height} × ${width} мм`;
}

function formatHomepagePrice(price: string): string {
  return `от ${price}`;
}

/** Homepage pricing cards (3-camera / 58 mm profile) — derived from WINDOW_PROFILE_PRICING[0]. */
export const HOMEPAGE_PRICING_CARDS: HomepagePricingCard[] = WINDOW_PROFILE_PRICING[0].prices.map(
  (item) => {
    const meta = HOMEPAGE_CARD_META[item.type];
    const profile = WINDOW_PROFILE_PRICING[0];
    return {
      type: item.type,
      title: meta.title,
      size: formatHomepageSize(item.size),
      opening: meta.opening,
      glass: profile.glass.toLowerCase(),
      price: formatHomepagePrice(item.price),
      featured: meta.featured,
    };
  }
);

/** Lowest window price label for category cards (e.g. homepage services grid). */
export const HOMEPAGE_WINDOWS_FROM_PRICE = formatHomepagePrice(WINDOW_PROFILE_PRICING[0].prices[0].price);
