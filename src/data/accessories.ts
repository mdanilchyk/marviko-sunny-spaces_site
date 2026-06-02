export { default as accDoorHandleInstalled } from "@/assets/acc-door-handle-installed.jpg";
export { default as accDoorHandleBar } from "@/assets/acc-door-handle-bar.jpg";
export { default as accPressGarnish } from "@/assets/acc-press-garnish.jpg";
export { default as accSingleLock } from "@/assets/acc-single-lock.jpg";
export { default as accMultiLock } from "@/assets/acc-multi-lock.jpg";
export { default as accWindowHandle } from "@/assets/acc-window-handle.jpg";
export { default as accCylinderKey } from "@/assets/acc-cylinder-key.jpg";
export { default as accCylinderThumb } from "@/assets/acc-cylinder-thumb.jpg";

import accLockOverlay from "@/assets/acc-lock-overlay.jpg";
import accCableLock from "@/assets/acc-cable-lock.jpg";
import accHandleKey from "@/assets/acc-handle-key.jpg";
import accDoorHandleInstalled from "@/assets/acc-door-handle-installed.jpg";
import accDoorHandleBar from "@/assets/acc-door-handle-bar.jpg";
import accPressGarnish from "@/assets/acc-press-garnish.jpg";
import accSingleLock from "@/assets/acc-single-lock.jpg";
import accMultiLock from "@/assets/acc-multi-lock.jpg";
import accWindowHandle from "@/assets/acc-window-handle.jpg";
import accCylinderKey from "@/assets/acc-cylinder-key.jpg";
import accCylinderThumb from "@/assets/acc-cylinder-thumb.jpg";

export const childSafetyItems = [
  {
    title: "Накладной замок",
    desc: "Исключает неконтролируемое открытие створки детьми, сохраняя при этом функцию безопасного проветривания.",
    specs: [
      "Тип: накладной замок с ключом",
      "Функция: блокировка распахивания при сохранении режима проветривания",
      "Комплектация: замок, ответная планка, 2 ключа, комплект крепежа, карандаш",
    ],
    img: accLockOverlay,
  },
  {
    title: "Тросовый замок",
    desc: "Трос ограничивает ширину открывания створки, что позволяет безопасно проветривать помещение.",
    specs: [
      "Тип: тросовый блокиратор с замком",
      "Длина троса: 22 см",
      "Функция: ограничение угла открывания окна (безопасное проветривание)",
      "Комплектация: замок с тросом, ответный блок, 2 ключа, комплект крепежа",
    ],
    img: accCableLock,
  },
  {
    title: "Оконная ручка с ключом",
    desc: "Надёжная защита от случайного открывания окна ребёнком.",
    specs: [
      "Длина штифта: 37 мм",
      "Материал: алюминий",
      "Комплектация: 1 ручка, 2 ключа, крепежные винты",
    ],
    img: accHandleKey,
  },
];

export const mosquitoSections = [
  {
    title: "Рамочные москитные сетки",
    desc: "Классический и наиболее распространенный тип сеток, состоящий из алюминиевого профиля c натянутым полотном.",
    features: [
      "Простота установки и демонтажа",
      "Подходят для окон и дверных проемов стандартных размеров",
      "Крепятся с помощью Z-креплений",
      "Могут быть изготовлены в нестандартной форме (трапеция) для индивидуальных проемов",
    ],
  },
  {
    title: "Внутренние москитные сетки",
    desc: "Устанавливаются с внутренней стороны помещения, что удобно для окон, у которых с внешней стороны не за что закрепиться.",
    features: [
      "Эстетичный вид, так как крепления скрыты внутри",
      "Простота в эксплуатации и уходе",
      "Могут комплектоваться различными типами полотен",
    ],
  },
  {
    title: "Москитная сетка «Антикошка»",
    desc: "При изготовлении мы используем полотно PetScreen. Утолщённые нити сетки в 3 раза прочнее стандартного полотна. Устойчиво к когтям и зубам животных — питомец может безопасно карабкаться по сетке без риска выпадения.",
    features: [
      "На зимний период можно не снимать — материал устойчив к ультрафиолету и перепадам температур",
      "Выполняет две функции: защита питомцев и защита от насекомых",
      "Легко моется — достаточно сполоснуть водой",
      "Усиленные крепления — не улетит даже при штормовом ветре",
      "Цвет профиля: белый, коричневый, антрацит",
      "Выдерживает вес питомца до 15 кг",
    ],
  },
  {
    title: "Москитная сетка «Антимошка»",
    desc: "Защищает от крупных насекомых и мелких мошек.",
    features: [
      "Материал полотна: стекловолокно с добавлением нейлоновых нитей",
      "Размер ячейки: 0,8×0,8 мм",
      "Проветриваемость: 4/5",
      "Прозрачность: 4/5",
      "Прочность: 3/5",
    ],
  },
  {
    title: "Москитная сетка «Антипыль»",
    desc: "Специальное покрытие с электростатическим эффектом удерживает мельчайшие пылевые частицы и защищает от попадания мусора с улицы.",
    features: [
      "Легко моется тёплой мыльной водой с мягкой губкой",
      "Проста в установке и долговечна",
      "Экологична — не выделяет токсичных веществ",
      "При правильном уходе служит долго несмотря на перепады погоды",
    ],
  },
];

export const glassTypes = [
  { title: "Однокамерные", desc: "Два стекла, одна камера. Лёгкая конструкция для нежилых помещений" },
  { title: "Двухкамерные", desc: "Три стекла, две камеры. Оптимальный вариант для жилых помещений" },
  { title: "Энергосберегающие", desc: "Низкоэмиссионное покрытие отражает тепло обратно в помещение" },
  { title: "Мультифункциональные", desc: "Летом защищают от перегрева, зимой сохраняют тепло" },
  { title: "Тонированные", desc: "Цветные стёкла для защиты от солнца и декоративного эффекта" },
  { title: "Со шпросом", desc: "Декоративная раскладка внутри стеклопакета для создания классического стиля" },
  { title: "Противоударные", desc: "Повышенная прочность — устойчивость к ударам и взлому" },
  { title: "Стекло триплекс", desc: "Многослойное стекло — при разрушении осколки остаются на плёнке" },
];

export const accessoryLightboxImages = [
  ...childSafetyItems.map((item) => ({ src: item.img, alt: item.title })),
  { src: accDoorHandleInstalled, alt: "Ручка-скоба" },
  { src: accDoorHandleBar, alt: "Ручка-штанга" },
  { src: accPressGarnish, alt: "Нажимной гарнитур" },
  { src: accSingleLock, alt: "Одноточечный замок" },
  { src: accMultiLock, alt: "Многозапорный замок" },
  { src: accCylinderKey, alt: "Цилиндр ключ-ключ" },
  { src: accCylinderThumb, alt: "Цилиндр ключ-барашек" },
  { src: accWindowHandle, alt: "Оконная ручка" },
];

const accessoryLightboxIndexBySrc = new Map(
  accessoryLightboxImages.map((img, i) => [img.src, i]),
);


export function getAccessoryLightboxIndex(src: string): number | null {
  const index = accessoryLightboxIndexBySrc.get(src);
  return index !== undefined ? index : null;
}
