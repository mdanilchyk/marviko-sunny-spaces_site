export interface NavSubmenuItem {
  label: string;
  href: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: NavSubmenuItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Окна",
    href: "/windows",
    submenu: [
      { label: "Окна ПВХ", href: "/windows#pvc", desc: "Энергоэффективные окна из ПВХ-профиля" },
      { label: "Алюминиевые окна", href: "/windows#aluminum", desc: "Тёплые и холодные алюминиевые системы" },
    ],
  },
  {
    label: "Двери",
    href: "/doors",
    submenu: [
      { label: "Балконные двери ПВХ", href: "/doors", desc: "Окно в сочетании с дверью" },
      { label: "Входные двери", href: "/doors", desc: "Надёжная защита и теплоизоляция" },
      { label: "Раздвижные двери", href: "/doors", desc: "Наклонно-сдвижная фурнитура" },
      { label: "Алюминиевые двери", href: "/doors", desc: "Прочность и современный дизайн" },
    ],
  },
  {
    label: "Перегородки",
    href: "/partitions",
    submenu: [
      { label: "Перегородки из ПВХ", href: "/partitions#pvc", desc: "Лёгкие конструкции для офисов и школ" },
      { label: "Перегородки из алюминия", href: "/partitions#aluminum", desc: "Прочные системы для бизнес-центров" },
    ],
  },
  {
    label: "Подоконники",
    href: "/windowsills",
  },
  {
    label: "Аксессуары",
    href: "/accessories",
  },
  {
    label: "Наши работы",
    href: "/portfolio",
  },
];

export const footerProductLinks = [
  { to: "/windows", label: "Окна" },
  { to: "/doors", label: "Двери" },
  { to: "/partitions", label: "Перегородки" },
  { to: "/windowsills", label: "Подоконники" },
  { to: "/accessories", label: "Аксессуары" },
  { to: "/portfolio", label: "Наши работы" },
] as const;

export const footerInfoLinks = [
  { to: "/#pricing", label: "Калькулятор цен" },
  { to: "/#certificates", label: "Сертификаты" },
  { to: "/#faq", label: "Вопросы и ответы" },
] as const;
