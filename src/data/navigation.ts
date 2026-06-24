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
    href: "/windows-pvh",
    submenu: [
      { label: "Окна ПВХ", href: "/windows-pvh", desc: "Энергоэффективные окна из ПВХ-профиля" },
      { label: "Алюминиевые окна", href: "/windows-alu", desc: "Тёплые и холодные алюминиевые системы" },
    ],
  },
  {
    label: "Двери",
    href: "/doors-pvh",
    submenu: [
      { label: "Двери ПВХ", href: "/doors-pvh", desc: "Входные, балконные и раздвижные двери ПВХ" },
      { label: "Алюминиевые двери", href: "/doors-alu", desc: "Прочные входные алюминиевые системы" },
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
  { to: "/windows-pvh", label: "Окна" },
  { to: "/doors-pvh", label: "Двери" },
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
