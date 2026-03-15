import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import windowForest from "@/assets/window-forest-view.jpg";
import windowCity from "@/assets/window-city-view.jpg";
import windowGarden from "@/assets/window-garden-view.jpg";

const profiles = [
  {
    name: "Novotex Termo",
    chambers: "4 камеры",
    width: "70 мм",
    glass: "Однокамерный",
    price: "от 250 BYN",
    features: ["Базовая теплоизоляция", "Белый профиль", "Немецкая фурнитура"],
    img: windowForest,
  },
  {
    name: "Montblanc Eco",
    chambers: "5 камер",
    width: "70 мм",
    glass: "Двухкамерный",
    price: "от 320 BYN",
    features: ["Улучшенная теплоизоляция", "Армирование 1.5 мм", "Микропроветривание"],
    img: windowCity,
    popular: true,
  },
  {
    name: "KBE Engine",
    chambers: "5 камер",
    width: "76 мм",
    glass: "Энергосберегающий",
    price: "от 420 BYN",
    features: ["Максимальная энергоэффективность", "i-стекло", "Тройной контур уплотнения"],
    img: windowGarden,
  },
];

const WindowsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #2A3A4A)" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Окна ПВХ</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Пластиковые окна для вашего дома</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Энергосберегающие окна из лучших профильных систем. Бесплатный замер и доставка по Минску.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Профильные системы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите ваш профиль</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div
                  className="rounded-xl overflow-hidden transition-shadow duration-300"
                  style={{
                    boxShadow: p.popular
                      ? "0 0 0 2px hsl(var(--primary)), 0 4px 20px rgba(217,79,30,0.1)"
                      : "0 0 0 1px hsl(var(--border))",
                  }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {p.popular && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        Популярный
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <div className="flex gap-4 text-xs text-muted-foreground mb-4 font-mono">
                      <span>{p.chambers}</span>
                      <span>{p.width}</span>
                      <span>{p.glass}</span>
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-extrabold text-accent mb-4">{p.price}</div>
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                      Заказать расчёт
                    </button>
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
              { title: "Энергосбережение", desc: "Снижение теплопотерь до 40% благодаря многокамерному профилю и i-стеклу" },
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
