import { useState } from "react";
import { Check, ArrowRight, Phone, Send, Eye, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import doorReal1 from "@/assets/door-real-1.jpg";
import doorReal2 from "@/assets/door-real-2.jpg";
import doorReal3 from "@/assets/door-real-3.jpg";
import doorReal4 from "@/assets/door-real-4.jpg";
import doorReal5 from "@/assets/door-real-5.jpg";
import doorReal6 from "@/assets/door-real-6.jpg";
import doorReal7 from "@/assets/door-real-7.jpg";

const doorTypes = [
  {
    title: "Балконные двери ПВХ",
    desc: "Балконные блоки из ПВХ — окно в сочетании с дверью. Тепло, надёжно, долговечно",
    features: ["Двухкамерный стеклопакет", "Поворотно-откидной механизм", "Белая или цветная ламинация"],
  },
  {
    title: "Входные двери",
    desc: "Входные двери из ПВХ и алюминия. Надёжная защита, современный вид, высокая теплоизоляция",
    features: ["ПВХ и алюминий", "Многоточечный замок", "Широкий выбор заполнений", "Любые размеры"],
  },
  {
    title: "Раздвижные двери",
    desc: "Двери ПВХ с наклонно-сдвижной фурнитурой — идеальное решение там, где нет места для распашной двери",
    features: ["Наклонно-сдвижная фурнитура", "Экономия пространства", "ПВХ профиль", "Балконы и террасы"],
  },
];

const sendFormEmail = async (subject: string, data: Record<string, string>) => {
  try {
    await fetch("https://formsubmit.co/ajax/vladdani777@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    return true;
  } catch {
    return false;
  }
};

const DoorsPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "" });
  const [orderErrors, setOrderErrors] = useState({ name: false, phone: false });
  const [orderSending, setOrderSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const galleryImages = [
    { src: doorReal1, alt: "Раздвижная балконная дверь" },
    { src: doorReal3, alt: "Входная дверь зелёная ПВХ" },
    { src: doorReal4, alt: "Входная группа магазина" },
    { src: doorReal5, alt: "Белая входная дверь ПВХ" },
    { src: doorReal6, alt: "Дверь с ламинацией под дерево" },
    { src: doorReal7, alt: "Входная дверь с боковой створкой" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="absolute inset-0 opacity-15">
          <img src={doorReal2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Двери ПВХ</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Надёжные двери для дома и офиса</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Входные, балконные и раздвижные двери из качественного ПВХ-профиля.
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
                <div className="rounded-xl p-6 bg-card card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{door.title}</h3>
                  <p className="text-sm text-muted-foreground text-body mb-6">{door.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {door.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOrderModal(true)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
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
            <SectionLabel>Примеры работ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Наши установленные двери</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: doorReal1, alt: "Раздвижная балконная дверь" },
              { src: doorReal3, alt: "Входная дверь зелёная ПВХ" },
              { src: doorReal4, alt: "Входная группа магазина" },
              { src: doorReal5, alt: "Белая входная дверь ПВХ" },
              { src: doorReal6, alt: "Дверь с ламинацией под дерево" },
              { src: doorReal7, alt: "Входная дверь с боковой створкой" },
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="rounded-xl overflow-hidden group aspect-[3/4]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Order Modal */}
      <AnimatePresence>
        {orderModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/60" onClick={() => { if (!orderSending) setOrderModal(false); }} />
            <motion.div className="relative bg-card rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-border" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
              {formSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-primary mx-auto mb-4"><Send className="w-7 h-7" /></div>
                  <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-sm text-muted-foreground mb-6">Наш менеджер свяжется с вами в течение 15 минут.</p>
                  <button onClick={() => { setOrderModal(false); setFormSubmitted(false); }} className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-border hover:bg-muted transition-colors">Закрыть</button>
                </div>
              ) : (
                <>
                  <button onClick={() => setOrderModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none">×</button>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Заказать расчёт</h3>
                  <p className="text-sm text-muted-foreground mb-6">Оставьте свой номер телефона и наш менеджер свяжется с вами.</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <input type="text" placeholder="* Ваше имя" value={orderForm.name} onChange={(e) => { setOrderForm({ ...orderForm, name: e.target.value }); setOrderErrors({ ...orderErrors, name: false }); }} className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${orderErrors.name ? 'border-destructive' : 'border-border focus:border-primary'}`} disabled={orderSending} />
                      {orderErrors.name && <p className="text-xs text-destructive mt-1">Пожалуйста, введите ваше имя</p>}
                    </div>
                    <div>
                      <input type="tel" placeholder="* Телефон" value={orderForm.phone} onChange={(e) => { setOrderForm({ ...orderForm, phone: e.target.value }); setOrderErrors({ ...orderErrors, phone: false }); }} className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${orderErrors.phone ? 'border-destructive' : 'border-border focus:border-primary'}`} disabled={orderSending} />
                      {orderErrors.phone && <p className="text-xs text-destructive mt-1">Пожалуйста, введите номер телефона</p>}
                    </div>
                    <button disabled={orderSending} onClick={async () => {
                      const errors = { name: !orderForm.name.trim(), phone: !orderForm.phone.trim() };
                      setOrderErrors(errors);
                      if (errors.name || errors.phone) return;
                      setOrderSending(true);
                      await sendFormEmail("Расчёт двери — сайт Марвико", { "Имя": orderForm.name, "Телефон": orderForm.phone });
                      setOrderSending(false);
                      setFormSubmitted(true);
                      setOrderForm({ name: "", phone: "" });
                    }} className="w-full py-3.5 rounded-lg font-semibold text-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70" style={{ backgroundColor: "#C8441A" }} onMouseEnter={(e) => { if (!orderSending) e.currentTarget.style.backgroundColor = "#A33515"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C8441A"; }}>
                      {orderSending ? (<><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>Отправка...</>) : "Отправить заявку"}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Или позвоните: <a href="tel:+375295677756" className="text-primary font-medium">+375 29 567-77-56</a>
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoorsPage;
