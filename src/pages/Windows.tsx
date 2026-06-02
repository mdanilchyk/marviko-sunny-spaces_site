import { useState } from "react";
import { Check } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH } from "@/config/seo";
import { Link } from "react-router-dom";
import OrderModal from "@/components/OrderModal";
import ImageLightbox from "@/components/ImageLightbox";
import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import PricingWindowSVG from "@/components/PricingWindowSVG";
import { WINDOW_PROFILE_PRICING } from "@/data/pricing";
import { getWindowsWorkPhotos, toLightboxImages, WINDOWS_PAGE_HERO_IMAGE } from "@/data/portfolio";

const workPhotos = getWindowsWorkPhotos();

const profileBrands = [
  { name: "Novotex Techno 70", chambers: 5, width: 70, desc: "Универсальный 5-камерный профиль с отличной теплоизоляцией" },
  { name: "Novotex Techno 58", chambers: 3, width: 58, desc: "Экономичный 3-камерный вариант для стандартного остекления" },
  { name: "Grunhaus Prestige 70", chambers: 5, width: 70, desc: "Премиальный профиль с улучшенной шумоизоляцией" },
  { name: "Grunhaus Standart 70", chambers: 5, width: 70, desc: "Надёжный профиль с оптимальным соотношением цена-качество" },
  { name: "Rehau Grazio 70", chambers: 5, width: 70, desc: "Элегантный дизайн с увеличенным световым проёмом" },
  { name: "Rehau Intelio 80", chambers: 6, width: 80, desc: "Максимальная энергоэффективность для холодного климата" },
  { name: "Brusbox Аэро 70", chambers: 5, width: 70, desc: "Энергоэффективный профиль с улучшенной тепло- и звукоизоляцией" },
  { name: "Kommerling 76", chambers: 6, width: 76, desc: "Немецкое качество, высочайшая долговечность" },
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
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/windows"]} />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="absolute inset-0 opacity-15">
          <img src={WINDOWS_PAGE_HERO_IMAGE} alt="Окна ПВХ в Минске — производство и установка" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Окна</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Пластиковые и алюминиевые окна для вашего дома</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Энергосберегающие окна из ПВХ и алюминия с двухкамерным стеклопакетом. Бесплатный замер. Доставка.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Window types badges */}
      <section id="aluminum" className="py-16 bg-background scroll-mt-24">
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

      {/* Profiles */}
      <section id="pvc" className="py-20 scroll-mt-24" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Профили</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">С какими профилями мы работаем</h2>
            <p className="text-body text-muted-foreground max-w-2xl mb-10">
              Используем проверенные оконные системы от ведущих производителей. Подберём оптимальный профиль под ваши задачи и бюджет.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileBrands.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 card-shadow border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
                  <h3 className="font-bold text-base mb-2">{b.name}</h3>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-accent-light text-primary">{b.chambers} камер</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-accent-light text-primary">{b.width} мм</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-body flex-1">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
            {WINDOW_PROFILE_PRICING.map((p, pi) => (
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
                          <PricingWindowSVG type={item.type} width={parseInt(item.size.split("×")[1])} height={parseInt(item.size.split("×")[0])} />
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
                  to={item.title === "Подоконники" ? "/windowsills" : "/accessories"}
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

      <ImageLightbox
        images={toLightboxImages(workPhotos.map((p) => ({ img: p.img, title: p.title })))}
        index={lightbox}
        onClose={() => setLightbox(null)}
      />

      <OrderModal open={orderModal} onClose={() => setOrderModal(false)} subject="Заказ окна — сайт Марвико" />
    </PageLayout>
  );
};

export default WindowsPage;
