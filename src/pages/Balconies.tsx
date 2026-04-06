import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import OrderModal from "@/components/OrderModal";
import balconyHero from "@/assets/balcony-hero.jpg";


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
];

const BalconiesPage = () => {
  const [orderModal, setOrderModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {options.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.15} variant="scale">
                <div
                  className={`rounded-2xl p-8 bg-card transition-all duration-300 h-full flex flex-col ${opt.popular ? 'hover:-translate-y-2' : 'hover:-translate-y-1'}`}
                  style={{
                    boxShadow: opt.popular
                      ? "0 0 0 2.5px hsl(var(--primary)), 0 8px 30px rgba(217,79,30,0.15)"
                      : "0 0 0 1px hsl(var(--border)), 0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  {opt.popular && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-5 self-start">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{opt.title}</h3>
                  <div className="text-3xl font-extrabold text-accent mb-8">{opt.price}</div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[15px]">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOrderModal(true)}
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 text-base"
                  >
                    Заказать расчёт
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      <Footer />

      <OrderModal open={orderModal} onClose={() => setOrderModal(false)} subject="Заказ расчёта балкона — сайт Марвико" />
    </div>
  );
};

export default BalconiesPage;
