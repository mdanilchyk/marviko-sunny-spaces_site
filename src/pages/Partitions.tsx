import { useState } from "react";
import { Check, School, Building2, ShoppingCart, Landmark, ArrowRight, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import partitionsOffice from "@/assets/partitions-office.jpg";
import partitionsReal1 from "@/assets/partitions-real-1.jpg";

const objects = [
  { icon: <School className="w-7 h-7" />, title: "Школы и детские сады", desc: "Безопасные и прочные конструкции, соответствующие требованиям учебных учреждений" },
  { icon: <Building2 className="w-7 h-7" />, title: "Офисы", desc: "Функциональное зонирование пространства без капитального ремонта" },
  { icon: <ShoppingCart className="w-7 h-7" />, title: "Магазины и торговые центры", desc: "Перегородки любой конфигурации под коммерческие задачи" },
  { icon: <Landmark className="w-7 h-7" />, title: "Административные здания", desc: "Опыт работы на государственных и коммерческих объектах" },
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

const PartitionsPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "" });
  const [orderErrors, setOrderErrors] = useState({ name: false, phone: false });
  const [orderSending, setOrderSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Перегородки</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Перегородки ПВХ</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Изготавливаем и устанавливаем перегородки из ПВХ для коммерческих и общественных объектов
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Objects grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Объекты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Для каких объектов</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objects.map((obj, i) => (
              <AnimatedSection key={obj.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary h-full flex flex-col">
                  <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4">
                    {obj.icon}
                  </div>
                  <h3 className="font-bold mb-2">{obj.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{obj.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Портфолио</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Пример выполненной работы</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              <div>
                <img src={partitionsOffice} alt="Офисные перегородки из ПВХ" className="w-full rounded-xl object-cover aspect-[4/3]" />
                <p className="text-sm text-muted-foreground text-center mt-3">Зонирование помещения с дверным блоком</p>
              </div>
              <div>
                <img src={partitionsReal1} alt="Перегородки ПВХ в офисе" className="w-full rounded-xl object-cover aspect-[4/3]" />
                <p className="text-sm text-muted-foreground text-center mt-3">Офисные перегородки с дверью</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
        <div className="container mx-auto section-padding">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl text-display text-primary-foreground">
              Нужна перегородка для вашего объекта?
            </h2>
            <button
              onClick={() => setOrderModal(true)}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              Получить расчёт <ArrowRight className="w-4 h-4" />
            </button>
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
                  <h3 className="text-xl font-bold mb-2 text-foreground">Получить расчёт</h3>
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
                      await sendFormEmail("Расчёт перегородки — сайт Марвико", { "Имя": orderForm.name, "Телефон": orderForm.phone });
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

export default PartitionsPage;
