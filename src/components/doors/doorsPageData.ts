import type { PriceCalcVariant } from "@/components/PriceCalcForm";

export interface DoorsHeroConfig {
  label: string;
  title: string;
  subtitle: string;
  backgroundImageAlt: string;
  variant: Extract<PriceCalcVariant, "doors-pvh" | "doors-alu">;
}

export const DOORS_PVH_HERO: DoorsHeroConfig = {
  label: "Двери ПВХ",
  title: "Надёжные двери ПВХ для дома и офиса",
  subtitle: "Входные, балконные и раздвижные двери ПВХ",
  backgroundImageAlt: "Входные и межкомнатные двери ПВХ в Минске",
  variant: "doors-pvh",
};

export const DOORS_ALU_HERO: DoorsHeroConfig = {
  label: "Алюминиевые двери",
  title: "Надёжные алюминиевые двери для дома и офиса",
  subtitle: "Входные алюминиевые двери",
  backgroundImageAlt: "Алюминиевые входные двери в Минске",
  variant: "doors-alu",
};

export const doorTypes = [
  {
    title: "Балконные двери ПВХ",
    desc: "Балконные двери из ПВХ. Тепло, надёжно, долговечно",
    features: [
      "Двухкамерный стеклопакет",
      "Поворотно-откидной механизм",
      "Белая или цветная ламинация",
      "Гарантия 10 лет",
    ],
  },
  {
    title: "Входные двери ПВХ",
    desc: "Входные двери из ПВХ. Надёжная защита, современный вид, высокая теплоизоляция",
    features: ["ПВХ профиль", "Многоточечный замок", "Широкий выбор заполнений", "Любые размеры", "Гарантия 10 лет"],
  },
  {
    title: "Раздвижные двери",
    desc: "Двери ПВХ с наклонно-сдвижной фурнитурой — идеальное решение там, где нет места для распашной двери",
    features: [
      "Наклонно-сдвижная фурнитура",
      "Экономия пространства",
      "ПВХ профиль",
      "Балконы и террасы",
      "Гарантия 10 лет",
    ],
  },
];
