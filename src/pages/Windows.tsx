import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import WindowDrawing from "@/components/WindowDrawing";

const profiles = [
  {
    chambers: "4 камеры",
    width: "58 мм",
    glass: "Двухкамерный 32 мм",
    prices: [
      { type: "single" as const, title: "Одностворчатое", size: "1400×800", price: "302 BYN", furniture: "Winkhaus" },
      { type: "double" as const, title: "Двустворчатое", size: "1400×1300", price: "395 BYN", furniture: "Winkhaus" },
      { type: "triple" as const, title: "Трёхстворчатое", size: "1400×2000", price: "535 BYN", furniture: "Winkhaus" },
      { type: "balcony" as const, title: "Балконный блок", size: "2100×1500", price: "590 BYN", furniture: "Winkhaus" },
    ],
    features: ["Базовая теплоизоляция", "Белый профиль", "Немецкая фурнитура Winkhaus"],
  },
  {
    chambers: "5 камер",
    width: "70 мм",
    glass: "Двухкамерный 40 мм",
    prices: [
      { type: "single" as const, title: "Одностворчатое", size: "1400×800", price: "315 BYN", furniture: "Winkhaus" },
      { type: "double" as const, title: "Двустворчатое", size: "1400×1300", price: "414 BYN", furniture: "Winkhaus" },
      { type: "triple" as const, title: "Трёхстворчатое", size: "1400×2000", price: "565 BYN", furniture: "Winkhaus" },
      { type: "balcony" as const, title: "Балконный блок", size: "2100×1500", price: "625 BYN", furniture: "Winkhaus" },
    ],
    features: ["Улучшенная теплоизоляция", "Армирование 1.5 мм", "Микропроветривание"],
    popular: true,
  },
];

const WindowsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 relative" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Окна ПВХ</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Пластиковые окна для вашего дома</h1>
            <p className="text-lg text-body text-muted-foreground max-w-xl">
              Энергосберегающие окна с двухкамерным стеклопакетом. Бесплатный замер и доставка по Червеню и Минской области.
            </p>
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
                  {/* Header */}
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

                  {/* Features */}
                  <div className="p-6 bg-card border-b border-border">
                    <ul className="flex flex-wrap gap-4">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price grid with window drawings */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {p.prices.map((item, i) => (
                      <div key={i} className="p-6 flex flex-col items-center text-center border-b sm:border-r border-border last:border-r-0 bg-card hover:bg-accent-light/50 transition-colors">
                        <div className="h-32 flex items-center justify-center mb-4 relative">
                          <div className="absolute inset-0 rounded-lg overflow-hidden" style={{
                            background: "linear-gradient(180deg, #e8f0f2 0%, #c8d8dc 50%, #a8c0a8 100%)",
                          }}>
                            <svg className="absolute bottom-0 left-0 right-0 w-full h-[40%]" viewBox="0 0 200 60" preserveAspectRatio="none">
                              <path d="M0,60 L0,35 Q20,20 40,30 Q60,15 80,25 Q100,10 120,28 Q140,18 160,30 Q180,22 200,35 L200,60 Z" fill="rgba(80,120,80,0.25)" />
                            </svg>
                          </div>
                          <WindowDrawing type={item.type} width={120} height={120} className="relative z-10" dark />
                        </div>
                        <p className="text-sm font-semibold mb-1">{item.title}</p>
                        <p className="text-xs font-mono text-muted-foreground mb-1">Размер {item.size} мм</p>
                        <p className="text-xs text-muted-foreground mb-1">Фурнитура {item.furniture}</p>
                        <p className="text-xl font-extrabold text-primary mt-1">{item.price}</p>
                        <button className="mt-3 bg-primary text-primary-foreground py-2 px-5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
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

      <Footer />
    </div>
  );
};

export default WindowsPage;
