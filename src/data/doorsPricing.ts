/** Стартовые цены на двери — бланки заказа + ТЗ блока «Цены». */

export type DoorPriceType =
  | "balcony-pvh"
  | "entrance-pvh"
  | "sliding-pvh"
  | "entrance-alu"
  | "double-alu-c48"
  | "entrance-alu-w72"
  | "double-alu-w72";

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
  intro: "Стандартные размеры по бланку. Цена за изготовление — без монтажа и демонтажа. Бесплатный замер.",
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
      profile: "Grunhaus Prestige 70, белый",
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
  intro: "Стандартные размеры по бланку. Цена за изготовление — без монтажа и демонтажа. Бесплатный замер.",
  items: [
    {
      type: "entrance-alu",
      title: "Входная алюминиевая дверь",
      size: "2050×900",
      profile: "AluminTechno C48, RAL 9016",
      specs:
        "1 створка наружу, петли справа · остекление 4-16-4 · сэндвич 24 мм, 2 листа металла · накладка на цилиндр RAL 9016 · ручка Stublina RAL 9016 · замок фалевый 24 мм · цилиндр с барашком 35/35 · петля двухсекционная 67 мм RAL 9016 · порог 14 мм",
      price: "от 1760 BYN",
    },
    {
      type: "double-alu-c48",
      title: "Двухстворчатая алюминиевая дверь",
      size: "2050×1300",
      profile: "AluminTechno C48, RAL 9016",
      specs:
        "2 створки наружу (400+900), петли справа · остекление 4-16-4 · сэндвич 24 мм, 2 листа металла · замок роликовый · накладка на цилиндр RAL 9016 · ручка офисная RAL 9016 · шпингалет дверной RAL 9016 · цилиндр с барашком 35/35 · петля двухсекционная 67 мм RAL 9016 · доводчик ECO Schulte TS 11F RAL 9016 · порог 14 мм",
      price: "от 3120 BYN",
    },
    {
      type: "entrance-alu-w72",
      title: "Входная алюминиевая дверь",
      size: "2050×900",
      profile: "AluminTechno W72 PF, RAL 9016",
      specs:
        "1 створка наружу, петли справа · остекление 4и-18Ар-4-16Ар-4и · сэндвич 40 мм, 2 листа металла · накладка на цилиндр RAL 9016 · ручка Stublina RAL 9016 · замок многозапорный фалевый · цилиндр с барашком 35/65 · петля двухсекционная 67 мм RAL 9016 · порог 20 мм, 2 контура уплотнения",
      price: "от 2760 BYN",
    },
    {
      type: "double-alu-w72",
      title: "Двухстворчатая алюминиевая дверь",
      size: "2050×1300",
      profile: "AluminTechno W72 PF, RAL 9016",
      specs:
        "2 створки наружу (400+900), петли справа · остекление 4и-18Ар-4-16Ар-4и · сэндвич 40 мм, 2 листа металла · защёлка роликовая · накладка на цилиндр RAL 9016 · ручка офисная RAL 9016 · шпингалет дверной RAL 9016 · замок многозапорный Fuhr · цилиндр с барашком 35/65 · петля двухсекционная 67 мм RAL 9016 · доводчик ECO Schulte TS 11F RAL 9016 · порог 20 мм, 2 контура уплотнения",
      price: "от 4925 BYN",
    },
  ],
  footnote: "Точная стоимость рассчитывается после замера. Цены указаны за изготовление, без монтажа.",
};
