/** Стартовые цены на алюминиевые окна — бланки заказа + блок «Цены». */

import type { DoorsPricingGroup } from "@/data/doorsPricing";

export type WindowAluPriceType =
  | "single-alu-w62"
  | "double-alu-w62-po"
  | "double-alu-w62-mixed"
  | "triple-alu-w62-mixed"
  | "double-alu-w62-fixed";

const GLAZING = "остекление 4и-12Ар-4-12Ар-4и";
const PROFILE = "AluminTechno W62, RAL 9016";
const WALL_JUNCTION = "примыкание W72.0921";
const HARDWARE = "фурнитура Stublina";

export const WINDOWS_ALU_PRICING: DoorsPricingGroup = {
  title: "Стартовые цены",
  intro: "Стандартные размеры по бланку. Цена за изготовление — без монтажа и демонтажа. Бесплатный замер.",
  items: [
    {
      type: "single-alu-w62",
      title: "Одностворчатое алюминиевое окно",
      size: "1500×800",
      profile: PROFILE,
      specs: `поворотно-откидная створка · ${GLAZING} · ${HARDWARE} · ${WALL_JUNCTION}`,
      price: "от 1768 BYN",
    },
    {
      type: "double-alu-w62-po",
      title: "Двухстворчатое алюминиевое окно",
      size: "1500×1300",
      profile: PROFILE,
      specs: `2 поворотно-откидные створки · ${GLAZING} · ${HARDWARE} · ${WALL_JUNCTION}`,
      price: "от 3165 BYN",
    },
    {
      type: "double-alu-w62-mixed",
      title: "Двухстворчатое алюминиевое окно",
      size: "1500×1300",
      profile: PROFILE,
      specs: `глухое поле + поворотно-откидная створка · ${GLAZING} · ${HARDWARE} · ${WALL_JUNCTION}`,
      price: "от 2285 BYN",
    },
    {
      type: "triple-alu-w62-mixed",
      title: "Трёхстворчатое алюминиевое окно",
      size: "1500×2000",
      profile: PROFILE,
      specs: `2 глухих поля + поворотно-откидная створка · ${GLAZING} · ${HARDWARE} · ${WALL_JUNCTION}`,
      price: "от 2954 BYN",
    },
    {
      type: "double-alu-w62-fixed",
      title: "Глухое двухстворчатое алюминиевое окно",
      size: "1500×1300",
      profile: PROFILE,
      specs: `2 глухих поля · ${GLAZING} · ${WALL_JUNCTION}`,
      price: "от 1400 BYN",
    },
  ],
  footnote: "Точная стоимость рассчитывается после замера. Цены указаны за изготовление, без монтажа.",
};
