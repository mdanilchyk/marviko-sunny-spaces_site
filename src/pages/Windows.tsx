import { useState } from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import OrderModal from "@/components/OrderModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import PricingWindowSVG from "@/components/PricingWindowSVG";

import windowWork1 from "@/assets/window-work-1.jpg";
import windowWork2 from "@/assets/window-work-2.jpg";
import windowWork3 from "@/assets/window-work-3.jpg";
import windowWork4 from "@/assets/window-work-4.jpg";
import windowWork5 from "@/assets/window-work-5.jpg";
import windowWork6 from "@/assets/window-work-6.jpg";
import windowWork7 from "@/assets/window-work-7.jpg";
import windowWork8 from "@/assets/window-work-8.jpg";
import windowWork9 from "@/assets/window-work-9.jpg";

const workPhotos = [
  { img: windowWork7, title: "Остекление многоквартирного дома" },
  { img: windowWork8, title: "Окна в частном доме" },
  { img: windowWork9, title: "Окна в цветном профиле" },
  { img: windowWork1, title: "Установка окон в частном доме" },
  { img: windowWork2, title: "Окна в цветном профиле" },
  { img: windowWork3, title: "Остекление магазина" },
  { img: windowWork4, title: "Остекление многоквартирного дома" },
  { img: windowWork5, title: "Подоконник с окном" },
  { img: windowWork6, title: "Глянцевый подоконник" },
];

const profiles = [
  {
    chambers: "3 камеры",
    width: "58 мм",
    glass: "Двухкамерный 32 мм",
    prices: [
      { type: "single" as const, title: "Одностворчатое", size: "1400×800", price: "302 BYN" },
      { type: "double" as const, title: "Двустворчатое", size: "1400×1300", price: "395 BYN" },
      { type: "triple" as const, title: "Трёхстворчатое", size: "1400×2000", price: "535 BYN" },
      { type: "balcony" as const, title: "Балконный блок", size: "2100×1500", price: "590 BYN" },
    ],
    features: ["Базовая теплоизоляция", "Белый профиль", "Фурнитура: Accado, UPT, MACO"],
  },
  {
    chambers: "5 камер",
    width: "70 мм",
    glass: "Двухкамерный 40 мм",
    prices: [
      { type: "single" as const, title: "Одностворчатое", size: "1400×800", price: "315 BYN" },
      { type: "double" as const, title: "Двустворчатое", size: "1400×1300", price: "414 BYN" },
      { type: "triple" as const, title: "Трёхстворчатое", size: "1400×2000", price: "565 BYN" },
      { type: "balcony" as const, title: "Балконный блок", size: "2100×1500", price: "625 BYN" },
    ],
    features: ["Улучшенная теплоизоляция", "Армирование 1.5 мм", "Микропроветривание"],
    popular: true,
  },
];

const windowTypes = [
  "Окна ПВХ", "Алюминиевые окна", "Окна со шпросами", "Арочные окна",
  "Трапециевидные окна", "Треугольные окна", "Энергосберегающие",
  "Мультифункциональные стеклопакеты", "Тонированные", "Тонированные в массе",
];

const accessories = [
  { emoji: "🪲", title: "Москитные сетки", desc: "Внутренние и наружные. Изготавливаем под размер вашего окна" },
  { emoji: "🔧", title: "Ручки и замки", desc: "Замена и установка ручек, замков, фурнитуры" },
  { emoji: "🪟", title: "Стеклопакеты", desc: "Замена стеклопакетов без демонтажа рамы" },
  { emoji: "🛡️", title: "Детские замки", desc: "Защита от открывания ребёнком. Устанавливается на любое окно" },
  { emoji: "🏠", title: "Отливы и доборы", desc: "Отливы и доборные элементы для кровель из оцинкованной стали" },
  { emoji: "🪜", title: "Подоконники", desc: "Стандартные и премиум подоконники. Глянцевые, матовые, под камень и дерево" },
];

const WindowsPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [orderModal, setOrderModal] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="absolute inset-0 opacity-15">
          <img src={windowWork8} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Окна ПВХ</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Пластиковые окна для вашего дома</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Энергосберегающие окна с двухкамерным стеклопакетом. Бесплатный замер и доставка по Червеню и Минской области.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Window types badges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Типы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-8">Виды и исполнения</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {windowTypes.map((t) => (
                <span
                  key={t}
                  className="inline-block rounded-full select-none cursor-default"
                  style={{ backgroundColor: "#FDF3EC", color: "#C8441A", padding: "6px 16px", fontSize: "13px", fontWeight: 600 }}
                >
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Price tables */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Цены на окна</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите конфигурацию</h2>
          </AnimatedSection>

          <div className="flex flex-col gap-16">
            {profiles.map((p, pi) => (
              <AnimatedSection key={pi} delay={pi * 0.1}>
                <div className="rounded-xl overflow-hidden border border-border" style={p.popular ? { borderColor: "hsl(var(--primary))", boxShadow: "0 0 0 1px hsl(var(--primary)), 0 4px 20px rgba(217,79,30,0.1)" } : {}}>
                  <div className="p-6 flex flex-wrap items-center gap-4 bg-card border-b border-border">
                    <div className="flex gap-4 text-sm font-mono text-muted-foreground">
                      <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.chambers}</span>
                      <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.width}</span>
                      <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.glass}</span>
                    </div>
                    {p.popular && (
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full ml-auto">Популярный</span>
                    )}
                  </div>
                  <div className="p-6 bg-card border-b border-border pointer-events-none select-none">
                    <ul className="flex flex-wrap gap-4">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {p.prices.map((item, i) => (
                      <div key={i} className="p-6 flex flex-col items-center text-center border-b sm:border-r border-border last:border-r-0 bg-card hover:bg-accent-light/50 transition-colors">
                        <div className="flex items-center justify-center py-4">
                          <PricingWindowSVG type={item.type} />
                        </div>
                        <p className="text-sm font-semibold mb-1">{item.title}</p>
                        <p className="text-xs font-mono text-muted-foreground mb-1">Размер {item.size} мм</p>
                        <p className="text-xs text-muted-foreground mb-1">Фурнитура: <span className="font-semibold text-foreground">Accado · UPT · MACO</span></p>
                        <p className="text-xl font-extrabold text-primary mt-1">{item.price}</p>
                        <button onClick={() => setOrderModal(true)} className="mt-3 bg-primary text-primary-foreground py-2 px-5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
                          Заказать
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding max-w-4xl">
          <AnimatedSection>
            <SectionLabel>Преимущества</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Почему наши окна?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Энергосбережение", desc: "Снижение теплопотерь до 40% благодаря многокамерному профилю" },
              { title: "Шумоизоляция", desc: "До 45 дБ снижения уровня шума с двухкамерным стеклопакетом" },
              { title: "Долговечность", desc: "Срок службы профилей — более 50 лет без потери свойств" },
              { title: "Безопасность", desc: "Детские замки, противовзломная фурнитура, закалённые стёкла" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Дополнительно</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Также устанавливаем и продаём</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <Link
                  to={item.title === "Подоконники" ? "/windowsills" : "#"}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary flex gap-4 items-start block"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-body">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work examples */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Портфолио</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Примеры работ</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {workPhotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <img src={photo.img} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {lightbox !== null && (
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
              src={workPhotos[lightbox]?.img}
              alt={workPhotos[lightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <OrderModal open={orderModal} onClose={() => setOrderModal(false)} subject="Заказ окна — сайт Марвико" />
    </div>
  );
};

export default WindowsPage;
