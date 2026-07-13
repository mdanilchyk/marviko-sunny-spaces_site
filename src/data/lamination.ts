import laminationWalnutNatural from "@/assets/lamination-walnut-natural.png";
import laminationOakLight from "@/assets/lamination-oak-light.png";
import laminationAnthracite from "@/assets/lamination-anthracite.png";
import laminationOakRustic from "@/assets/lamination-oak-rustic.png";
import laminationWalnutGolden from "@/assets/lamination-walnut-golden.png";
import laminationMahogany from "@/assets/lamination-mahogany.png";
import laminationOakNatural from "@/assets/lamination-oak-natural.png";
import laminationOakDark from "@/assets/lamination-oak-dark.png";
import laminationOakGolden from "@/assets/lamination-oak-golden.png";

export interface LaminationColor {
  name: string;
  code: string;
  img: string;
}

/** Популярные декоры ламинации — на складе более 40 видов. */
export const laminationColors: LaminationColor[] = [
  { name: "Орех натуральный", code: "UQ902_Z8", img: laminationWalnutNatural },
  { name: "Светлый дуб", code: "UF711_G7", img: laminationOakLight },
  { name: "Антрацитово-серый", code: "KDB74_28", img: laminationAnthracite },
  { name: "Рустикальный дуб", code: "G1501_28", img: laminationOakRustic },
  { name: "Золотой орех", code: "UK103_U4", img: laminationWalnutGolden },
  { name: "Махагон", code: "UJ301_Z8", img: laminationMahogany },
  { name: "Натуральный дуб", code: "UR001_Z8", img: laminationOakNatural },
  { name: "Тёмный дуб", code: "UQ901_Z8", img: laminationOakDark },
  { name: "Золотой дуб", code: "UK117_Z8", img: laminationOakGolden },
];

export const laminationColorNames = laminationColors.map((c) => c.name);

export const laminationLightboxImages = laminationColors.map((color) => ({
  src: color.img,
  alt: `Ламинация ${color.name}`,
}));

/** Строка условий под сеткой образцов — срок, доплата, армирование. */
export const laminationConditionsLine = {
  windows:
    "Срок изготовления ламинированных окон — 3 недели. Доплата за ламинацию рассчитывается индивидуально и зависит от площади и заполнения. В ламинированные изделия устанавливаем армирование 2,0 мм.",
  doors:
    "Ламинация для дверей ПВХ — те же декоры, что и для окон. Срок изготовления — 3 недели. Доплата зависит от площади и заполнения. Армирование 2,0 мм.",
} as const;

export const laminationSectionCopy = {
  windows: {
    title: "Ламинация — окна под цвет интерьера",
    subtitle:
      "Подберите декор под фасад или интерьер: от светлого дуба до антрацитово-серого. Ниже — популярные варианты, полный каталог — более 40 декоров.",
  },
  doors: {
    title: "Ламинация — двери под цвет интерьера",
    subtitle:
      "Ламинация для дверей ПВХ — те же декоры, что и для окон. Ниже — популярные варианты, в наличии более 40 видов.",
  },
} as const;
