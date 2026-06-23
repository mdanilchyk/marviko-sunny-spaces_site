import windowWork1 from "@/assets/window-work-1.jpg";
import windowWork2 from "@/assets/window-work-2.jpg";
import windowWork3 from "@/assets/window-work-3.jpg";
import windowWork4 from "@/assets/window-work-4.jpg";
import windowWork7 from "@/assets/window-work-7.jpg";
import windowWork8 from "@/assets/window-work-8.jpg";
import windowWork9 from "@/assets/window-work-9.jpg";
import doorReal1 from "@/assets/door-real-1.jpg";
import doorReal3 from "@/assets/door-real-3.jpg";
import doorReal4 from "@/assets/door-real-4.jpg";
import doorReal5 from "@/assets/door-real-5.jpg";
import doorReal6 from "@/assets/door-real-6.jpg";
import doorReal7 from "@/assets/door-real-7.jpg";
import doorReal8 from "@/assets/door-real-8.jpg";
import doorReal9 from "@/assets/door-real-9.jpg";
import doorReal10 from "@/assets/door-real-10.jpg";
import partitionsOffice from "@/assets/partitions-office.jpg";
import partitionsReal1 from "@/assets/partitions-real-1.jpg";
import windowsillReal1 from "@/assets/windowsill-real-1.jpg";
import windowsillReal2 from "@/assets/windowsill-real-2.jpg";
import windowsillReal3 from "@/assets/windowsill-real-3.jpg";
import windowsillReal4 from "@/assets/windowsill-real-4.jpg";
import windowsillReal5 from "@/assets/windowsill-real-5.jpg";
import windowsillReal6 from "@/assets/windowsill-real-6.jpg";
import windowsillReal7 from "@/assets/windowsill-real-7.jpg";
import windowsillReal8 from "@/assets/windowsill-real-8.jpg";
import workShopWindows from "@/assets/work-shop-windows.jpg";
import workFireplaceDoor from "@/assets/work-fireplace-door.jpg";
import workHouseExterior from "@/assets/work-house-exterior.jpg";
import workDoorBlinds from "@/assets/work-door-blinds.jpg";
import workShopDoor from "@/assets/work-shop-door.jpg";
import workWindowsillGreen from "@/assets/work-windowsill-green.jpg";

export type PortfolioCategory = "Окна" | "Двери" | "Перегородки" | "Подоконники";

export interface PortfolioProject {
  id: string;
  category: PortfolioCategory;
  img: string;
  title: string;
  alt?: string;
}

export const PORTFOLIO_FILTERS = ["Все", "Окна", "Двери", "Перегородки", "Подоконники"] as const;
export type PortfolioFilter = (typeof PORTFOLIO_FILTERS)[number];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  { id: "window-7", category: "Окна", img: windowWork7, title: "Остекление многоквартирного дома" },
  { id: "window-8", category: "Окна", img: windowWork8, title: "Окна в частном доме" },
  { id: "window-9", category: "Окна", img: windowWork9, title: "Окна в цветном профиле" },
  { id: "window-1", category: "Окна", img: windowWork1, title: "Установка окон в частном доме" },
  { id: "window-2", category: "Окна", img: windowWork2, title: "Окна в цветном профиле" },
  { id: "window-3", category: "Окна", img: windowWork3, title: "Остекление магазина" },
  { id: "window-4", category: "Окна", img: windowWork4, title: "Остекление многоквартирного дома" },
  { id: "door-8", category: "Двери", img: doorReal8, title: "Входная группа с алюминиевыми дверями" },
  { id: "door-9", category: "Двери", img: doorReal9, title: "Трёхстворчатая дверь с фрамугой" },
  { id: "door-10", category: "Двери", img: doorReal10, title: "Раздвижная дверь в интерьере" },
  { id: "door-1", category: "Двери", img: doorReal1, title: "Раздвижная балконная дверь" },
  { id: "door-3", category: "Двери", img: doorReal3, title: "Входная дверь зелёная ПВХ" },
  { id: "door-4", category: "Двери", img: doorReal4, title: "Входная группа магазина" },
  { id: "door-5", category: "Двери", img: doorReal5, title: "Белая входная дверь ПВХ" },
  { id: "door-6", category: "Двери", img: doorReal6, title: "Дверь с ламинацией под дерево" },
  { id: "door-7", category: "Двери", img: doorReal7, title: "Входная дверь с боковой створкой" },
  { id: "partition-office", category: "Перегородки", img: partitionsOffice, title: "Перегородка в офисе" },
  { id: "partition-1", category: "Перегородки", img: partitionsReal1, title: "Перегородка ПВХ" },
  { id: "windowsill-1", category: "Подоконники", img: windowsillReal1, title: "Глянцевый подоконник под дерево" },
  { id: "windowsill-2", category: "Подоконники", img: windowsillReal2, title: "Подоконник под мрамор с цветком" },
  { id: "windowsill-3", category: "Подоконники", img: windowsillReal3, title: "Подоконник салатовый глянец" },
  { id: "windowsill-4", category: "Подоконники", img: windowsillReal4, title: "Сиреневый глянцевый подоконник" },
  { id: "windowsill-5", category: "Подоконники", img: windowsillReal5, title: "Подоконник под белый мрамор" },
  { id: "windowsill-6", category: "Подоконники", img: windowsillReal6, title: "Подоконник в цвет интерьера" },
  { id: "windowsill-7", category: "Подоконники", img: windowsillReal7, title: "Подоконник венге премиум" },
  { id: "windowsill-8", category: "Подоконники", img: windowsillReal8, title: "Яркий оранжевый подоконник" },
];

/** Превью портфолио на главной (отдельный набор фото). */
/** Фон hero на странице «Окна». */
export const WINDOWS_PAGE_HERO_IMAGE = windowWork8;

export const HOMEPAGE_PORTFOLIO_ITEMS = [
  { img: workShopWindows, title: "Остекление коммерческого объекта" },
  { img: workFireplaceDoor, title: "Окна в интерьере с камином" },
  { img: workHouseExterior, title: "Остекление частного дома" },
  { img: workDoorBlinds, title: "Дверь ПВХ со встроенными жалюзи" },
  { img: workShopDoor, title: "Входная группа магазина" },
  { img: workWindowsillGreen, title: "Подоконник с видом на природу" },
];

export function getPortfolioByCategory(category: PortfolioCategory): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.category === category);
}

export function getWindowsWorkPhotos() {
  return getPortfolioByCategory("Окна").map((p) => ({ img: p.img, title: p.title }));
}

export function getDoorsGalleryImages() {
  return getPortfolioByCategory("Двери").map((p) => ({
    src: p.img,
    alt: p.alt ?? p.title,
  }));
}

export function getWindowsillsGalleryItems() {
  return getPortfolioByCategory("Подоконники").map((p) => ({
    img: p.img,
    caption: p.title,
  }));
}

export function toLightboxImages(projects: Pick<PortfolioProject, "img" | "title" | "alt">[]) {
  return projects.map((p) => ({ src: p.img, alt: p.alt ?? p.title }));
}
