import type { LucideIcon } from "lucide-react";
import { Award, Clock, Ruler, Shield, Wrench } from "lucide-react";

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/** Главная — общие формулировки. */
export const whyChooseDefaultItems: WhyChooseItem[] = [
  { icon: Shield, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: Clock, title: "Работаем с 2007 года", desc: "Более 19 лет на рынке Беларуси" },
  { icon: Award, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: Wrench, title: "Собственное производство", desc: "г. Червень, полный цикл изготовления" },
];

/**
 * Посадочные страницы окон (/windows-pvh, /windows-alu) — конкретные параметры
 * по бланкам заказа и ТЗ блока «Почему выбирают Марвико».
 */
export const whyChooseLandingItems: WhyChooseItem[] = [
  {
    icon: Shield,
    title: "Гарантия 10 лет на изделия и монтаж",
    desc: "Гарантийное обслуживание — регулировка фурнитуры и другие работы",
  },
  {
    icon: Award,
    title: "Армирование 1,5 мм",
    desc: "Работаем со многими профильными системами. В изделиях с ламинацией — армирование 2,0 мм",
  },
  {
    icon: Wrench,
    title: "Фурнитура UPT, Accado и MACO",
    desc: "Поворотно-откидная фурнитура базового комплекта — надёжные механизмы в стандартной комплектации",
  },
  {
    icon: Clock,
    title: "Изготовление за 5 рабочих дней",
    desc: "Сертифицированное производство в г. Червень. Монтажники с опытом от 10 лет. Бесплатный выезд замерщика",
  },
];

/** Страницы дверей — 4-я карточка «Бесплатный замер». */
export const whyChooseDoorsItems: WhyChooseItem[] = [
  { icon: Shield, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: Clock, title: "Работаем с 2007 года", desc: "Более 19 лет на рынке Беларуси" },
  { icon: Award, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: Ruler, title: "Бесплатный замер", desc: "Бесплатный выезд замерщика в удобное время" },
];
