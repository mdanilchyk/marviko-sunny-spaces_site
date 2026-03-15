import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import doorHero from "@/assets/door-hero.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const doorTypes = [
  {
    title: "Входные двери ПВХ",
    price: "от 650 BYN",
    features: ["Многоточечный замок", "Тёплый профиль 76 мм", "Стальное армирование", "Порог с термоизоляцией"],
  },
  {
    title: "Межкомнатные двери ПВХ",
    price: "от 380 BYN",
    features: ["Стеклянная вставка", "Тихое закрывание", "Влагостойкий профиль", "Белый или ламинация"],
    popular: true,
  },
  {
    title: "Балконные двери",
    price: "от 280 BYN",
    features: ["Поворотно-откидной механизм", "Двухкамерный стеклопакет", "Низкий порог", "Москитная сетка в комплекте"],
  },
];

const DoorsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="absolute inset-0 opacity-15">
          <img src={doorHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Двери ПВХ</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Надёжные двери для дома и офиса</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Входные, межкомнатные и балконные двери из качественного ПВХ-профиля.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Типы дверей</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите тип двери</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {doorTypes.map((door, i) => (
              <AnimatedSection key={door.title} delay={i * 0.1}>
                <div
                  className="rounded-xl p-6 bg-card transition-shadow duration-300"
                  style={{
                    boxShadow: door.popular
                      ? "0 0 0 2px hsl(var(--primary)), 0 4px 20px rgba(217,79,30,0.1)"
                      : "0 0 0 1px hsl(var(--border))",
                  }}
                >
                  {door.popular && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{door.title}</h3>
                  <div className="text-2xl font-extrabold text-accent mb-6">{door.price}</div>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {door.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                    Заказать расчёт
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-xl overflow-hidden">
                <img src={portfolio4} alt="Установка двери" className="w-full h-80 object-cover" />
              </div>
              <div>
                <SectionLabel>Характеристики</SectionLabel>
                <h2 className="text-3xl text-display mb-6">Почему двери ПВХ?</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Теплоизоляция", desc: "Многокамерный профиль сохраняет тепло в доме" },
                    { title: "Безопасность", desc: "Многоточечная система запирания и стальное армирование" },
                    { title: "Долговечность", desc: "ПВХ не ржавеет, не гниёт и не требует покраски" },
                    { title: "Дизайн", desc: "Широкий выбор ламинации — от белого до дерева" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoorsPage;
