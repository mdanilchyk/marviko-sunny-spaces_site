import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import OrderModal from "@/components/OrderModal";

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

const childSafetyItems = [
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

const mosquitoSections = [
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

const glassTypes = [
  { title: "Однокамерные", desc: "Два стекла, одна камера. Лёгкая конструкция для нежилых помещений" },
  { title: "Двухкамерные", desc: "Три стекла, две камеры. Оптимальный вариант для жилых помещений" },
  { title: "Энергосберегающие", desc: "Низкоэмиссионное покрытие отражает тепло обратно в помещение" },
  { title: "Мультифункциональные", desc: "Летом защищают от перегрева, зимой сохраняют тепло" },
  { title: "Тонированные", desc: "Цветные стёкла для защиты от солнца и декоративного эффекта" },
  { title: "Со шпросом", desc: "Декоративная раскладка внутри стеклопакета для создания классического стиля" },
  { title: "Противоударные", desc: "Повышенная прочность — устойчивость к ударам и взлому" },
  { title: "Стекло триплекс", desc: "Многослойное стекло — при разрушении осколки остаются на плёнке" },
];

const doorHandleImages = [
  { img: accDoorHandleInstalled, title: "Ручка-скоба" },
  { img: accDoorHandleBar, title: "Ручка-штанга" },
];

const AccessoriesPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Аксессуары</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Фурнитура и комплектующие</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Москитные сетки, замки, ручки, стеклопакеты и другие комплектующие для окон и дверей ПВХ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Child safety locks */}
      <section id="locks" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Безопасность</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Детские замки и ручки с ключом</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {childSafetyItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border card-shadow hover:card-shadow-hover transition-shadow overflow-hidden h-full flex flex-col">
                  <button onClick={() => setLightbox(item.img)} className="aspect-square overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <ul className="space-y-1.5 mt-auto">
                      {item.specs.map((s, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mosquito nets */}
      <section id="mosquito" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Москитные сетки</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">Изготавливаем москитные сетки</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-2xl">
              Обычные, антикошка, антимошка, антипыль. Цвета профиля: белый, серый, коричневый. Доставка по г. Червень бесплатная.
            </p>
          </AnimatedSection>
          <div className="space-y-6">
            {mosquitoSections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-6 sm:p-8 border border-border card-shadow">
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{section.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {section.features.map((f, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2 items-start">
                        <span className="text-primary shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Glass units */}
      <section id="glass" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Стеклопакеты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Виды стеклопакетов</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {glassTypes.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 border border-border card-shadow hover:border-primary transition-colors h-full">
                  <h3 className="font-bold mb-2 text-sm">{g.title}</h3>
                  <p className="text-xs text-muted-foreground text-body">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Door handles */}
      <section id="handles" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Дверная фурнитура</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Ручки и замки для дверей</h2>
          </AnimatedSection>

          {/* Locks, cylinders, garnish — unified card grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Door handle (скоба + штанга) */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <div className="grid grid-cols-2 aspect-[4/3]">
                  <button onClick={() => setLightbox(accDoorHandleInstalled)} className="overflow-hidden">
                    <img src={accDoorHandleInstalled} alt="Ручка-скоба" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                  <button onClick={() => setLightbox(accDoorHandleBar)} className="overflow-hidden">
                    <img src={accDoorHandleBar} alt="Ручка-штанга" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Ручка дверная</h3>
                  <p className="text-sm text-muted-foreground">Конфигурации: ручка-скоба, ручка-штанга. В различных цветах и размерах.</p>
                </div>
              </div>

              {/* Press garnish */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => setLightbox(accPressGarnish)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accPressGarnish} alt="Нажимной гарнитур" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Нажимной гарнитур</h3>
                  <p className="text-sm text-muted-foreground mb-4">Комплект нажимного гарнитура для входных дверей ПВХ.</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Белый", "Коричневый", "Антрацит"].map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Single lock */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => setLightbox(accSingleLock)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accSingleLock} alt="Одноточечный замок" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Одноточечный замок</h3>
                  <p className="text-sm text-muted-foreground">Базовый замок для балконных и входных дверей ПВХ.</p>
                </div>
              </div>

              {/* Multi-point lock */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => setLightbox(accMultiLock)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accMultiLock} alt="Многозапорный замок" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Многозапорный замок</h3>
                  <p className="text-sm text-muted-foreground">Повышенная безопасность — несколько точек запирания по всей высоте двери.</p>
                </div>
              </div>

              {/* Cylinders */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <div className="grid grid-cols-2 aspect-[4/3]">
                  <button onClick={() => setLightbox(accCylinderKey)} className="overflow-hidden">
                    <img src={accCylinderKey} alt="Цилиндр ключ-ключ" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                  <button onClick={() => setLightbox(accCylinderThumb)} className="overflow-hidden">
                    <img src={accCylinderThumb} alt="Цилиндр ключ-барашек" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Цилиндры</h3>
                  <p className="text-sm text-muted-foreground">Конфигурации: ключ-ключ, ключ-барашек.</p>
                </div>
              </div>

              {/* Window handle */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => setLightbox(accWindowHandle)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accWindowHandle} alt="Оконная ручка" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Оконная ручка</h3>
                  <p className="text-sm text-muted-foreground">Цвета: белый, коричневый, антрацит.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto section-padding text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Нужна консультация?</h2>
          <p className="text-primary-foreground/80 mb-6">Позвоните нам или оставьте заявку — подберём нужные комплектующие</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+375295677756" className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              +375 (29) 567-77-56
            </a>
            <button onClick={() => setOrderModal(true)} className="bg-background/20 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold hover:bg-background/30 transition-all">
              Заказать звонок
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Фото"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <OrderModal open={orderModal} onClose={() => setOrderModal(false)} subject="Аксессуары — сайт Марвико" />
    </div>
  );
};

export default AccessoriesPage;
