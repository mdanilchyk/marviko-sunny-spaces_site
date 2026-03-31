import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import balconyHero from "@/assets/balcony-hero.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const options = [
  {
    title: "Холодное остекление",
    price: "от 180 BYN/м²",
    features: ["Алюминиевый профиль", "Защита от осадков и ветра", "Лёгкая конструкция", "Раздвижные створки"],
  },
  {
    title: "Тёплое остекление",
    price: "от 320 BYN/м²",
    features: ["ПВХ-профиль 70 мм", "Двухкамерный стеклопакет", "Полноценная теплоизоляция", "Распашные створки"],
    popular: true,
  },
  {
    title: "Под ключ",
    price: "от 500 BYN/м²",
    features: ["Тёплое остекление", "Утепление стен и пола", "Внутренняя отделка", "Электрика и освещение"],
  },
];

const BalconiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #243A2A)" }}>
        <div className="absolute inset-0 opacity-20">
          <img src={balconyHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Балконы</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Остекление балконов и лоджий</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Холодное и тёплое остекление, отделка под ключ. Превратите балкон в уютное пространство.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Варианты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите решение</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {options.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.1}>
                <div
                  className="rounded-xl p-6 bg-card transition-shadow duration-300"
                  style={{
                    boxShadow: opt.popular
                      ? "0 0 0 2px hsl(var(--primary)), 0 4px 20px rgba(217,79,30,0.1)"
                      : "0 0 0 1px hsl(var(--border))",
                  }}
                >
                  {opt.popular && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{opt.title}</h3>
                  <div className="text-2xl font-extrabold text-accent mb-6">{opt.price}</div>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {opt.features.map((f) => (
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

      {/* Example */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <SectionLabel>Пример работы</SectionLabel>
                <h2 className="text-3xl text-display mb-6">Тёплый балкон под ключ</h2>
                <p className="text-body text-muted-foreground mb-6">
                  Полное преображение балкона: остекление профилем Novotex 70, утепление пенополистиролом, отделка ПВХ-панелями, укладка ламината, монтаж электрики.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Площадь", value: "6 м²" },
                    { label: "Срок", value: "3 дня" },
                    { label: "Профиль", value: "Novotex" },
                    { label: "Стоимость", value: "2 400 BYN" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card rounded-lg p-4 card-shadow">
                      <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                      <div className="font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={portfolio2} alt="Остекление балкона" className="w-full h-80 object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BalconiesPage;
