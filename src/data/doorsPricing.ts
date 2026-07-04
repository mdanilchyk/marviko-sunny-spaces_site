/** Стартовые цены на двери — бланки заказа + ТЗ блока «Цены». */

export type DoorPriceType = "balcony-pvh" | "entrance-pvh" | "sliding-pvh" | "entrance-alu";

export interface DoorPriceItem {
  type: DoorPriceType;
  title: string;
  size: string;
  profile: string;
  specs: string;
  price: string;
}

export interface DoorsPricingGroup {
  title: string;
  intro: string;
  items: DoorPriceItem[];
  footnote: string;
}

export const DOORS_PVH_PRICING: DoorsPricingGroup = {
  title: "Стартовые цены",
  intro: "Стандартные размеры по бланку. Цена за изготовление — без монтажа, замера и демонтажа.",
  items: [
    {
      type: "balcony-pvh",
      title: "Балконная дверь ПВХ",
      size: "2050×700",
      profile: "Grunhaus 70, белый",
      specs: "Поворотно-откидная, UPT/Accado · стеклопакет 40 мм · сэндвич-панель",
      price: "от 410 BYN",
    },
    {
      type: "entrance-pvh",
      title: "Входная дверь ПВХ",
      size: "2000×1000",
      profile: "Профиль 70-116, белый",
      specs: "Сэндвич · ручка-скоба · замок · доводчик · армирование 2,0 мм",
      price: "от 895 BYN",
    },
    {
      type: "sliding-pvh",
      title: "Раздвижная дверь ПВХ",
      size: "по размерам",
      profile: "ПВХ-профиль",
      specs: "Наклонно-сдвижная фурнитура",
      price: "по запросу",
    },
  ],
  footnote: "Точная стоимость рассчитывается после замера. Цены указаны за изготовление, без монтажа.",
};

export const DOORS_ALU_PRICING: DoorsPricingGroup = {
  title: "Стартовые цены",
  intro: "Стандартный размер по бланку. Цена за изготовление — без монтажа, замера и демонтажа.",
  items: [
    {
      type: "entrance-alu",
      title: "Входная алюминиевая дверь",
      size: "2050×900",
      profile: "AluminTechno C48, RAL 9016",
      specs: "1 створка наружу · остекление 4-16-4 · сэндвич 24 мм",
      price: "от 1760 BYN",
    },
  ],
  footnote: "Точная стоимость рассчитывается после замера. Цены указаны за изготовление, без монтажа.",
};
