import { useState } from "react";
import { Check, ArrowRight, Phone, Send, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

import windowsillReal1 from "@/assets/windowsill-real-1.jpg";
import windowsillReal2 from "@/assets/windowsill-real-2.jpg";
import windowsillReal3 from "@/assets/windowsill-real-3.jpg";
import windowsillReal4 from "@/assets/windowsill-real-4.jpg";
import windowsillReal5 from "@/assets/windowsill-real-5.jpg";
import windowsillReal6 from "@/assets/windowsill-real-6.jpg";
import windowsillReal7 from "@/assets/windowsill-real-7.jpg";
import windowsillReal8 from "@/assets/windowsill-real-8.jpg";
import windowsillCatalog from "@/assets/windowsill-real-catalog.jpg";

const galleryItems = [
  { img: windowsillReal1, caption: "Глянцевый подоконник под дерево" },
  { img: windowsillReal2, caption: "Подоконник под мрамор с цветком" },
  { img: windowsillReal3, caption: "Подоконник салатовый глянец" },
  { img: windowsillReal4, caption: "Сиреневый глянцевый подоконник" },
  { img: windowsillReal5, caption: "Подоконник под белый мрамор" },
  { img: windowsillReal6, caption: "Подоконник в цвет интерьера" },
  { img: windowsillReal7, caption: "Подоконник венге премиум" },
  { img: windowsillReal8, caption: "Яркий оранжевый подоконник" },
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

const WindowsillsPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "" });
  const [orderErrors, setOrderErrors] = useState({ name: false, phone: false });
  const [orderSending, setOrderSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allGallery = [...galleryItems, { img: windowsillCatalog, caption: "Каталог цветов премиум подоконников" }];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      {/* Hero */}
      <section className="dark-section py-20 relative" style={{ background: "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)" }}>
        <div className="container mx-auto section-padding relative z-10">
          <AnimatedSection>
            <SectionLabel>Подоконники</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">Подоконники ПВХ</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Стандартные и премиум подоконники. Более 30 цветов и фактур — под любой интерьер
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Ассортимент</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите подоконник</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <AnimatedSection>
              <div className="rounded-xl p-6 sm:p-8 h-full" style={{ backgroundColor: "#F7F5F2" }}>
                <h3 className="text-xl font-bold mb-2">Стандартные</h3>
                <p className="text-sm text-muted-foreground text-body mb-6">
                  Белые и однотонные подоконники из ПВХ. Практичное решение для любого окна
                </p>
                <ul className="flex flex-col gap-2.5">
                  {["Белый и светлые оттенки", "Устойчивы к влаге", "Легко чистятся", "Доступная цена"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Premium */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl p-6 sm:p-8 h-full" style={{ backgroundColor: "#FDF3EC", border: "1px solid #E8C4A0" }}>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 text-white" style={{ backgroundColor: "#C8441A" }}>
                  Премиум
                </span>
                <h3 className="text-xl font-bold mb-2">Премиум</h3>
                <p className="text-sm text-muted-foreground text-body mb-4">
                  Утолщённые стенки, дополнительные рёбра жёсткости. Защита от бытовой химии. Имитация камня, дерева, глянец, матовые фактуры
                </p>
                <p className="text-sm font-semibold mb-4">Бренды: Кристаллит, Эстера, VPL, ПДК-дизайн</p>
                <ul className="flex flex-col gap-2.5">
                  {["Более 30 цветов и фактур", "Глянцевые и матовые", "Имитация камня и дерева", "Устойчивы к химии", "Долговечны"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Фотогалерея</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Примеры наших подоконников</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div>
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full rounded-xl object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                  <p className="text-[13px] text-muted-foreground mt-2">{item.caption}</p>
                </div>
              </AnimatedSection>
            ))}
            {/* Catalog spans 2 columns */}
            <AnimatedSection delay={0.5} className="sm:col-span-2 lg:col-span-2">
              <div>
                <img
                  src={windowsillCatalog}
                  alt="Каталог цветов премиум подоконников"
                  className="w-full rounded-xl object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
                <p className="text-[13px] text-muted-foreground mt-2">Каталог цветов премиум подоконников</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16" style={{ backgroundColor: "#FDF3EC" }}>
        <div className="container mx-auto section-padding text-center">
          <h2 className="text-2xl sm:text-3xl text-display mb-3" style={{ color: "#1C1C1C" }}>
            Хотите подобрать подоконник под ваш интерьер?
          </h2>
          <p className="text-muted-foreground text-body mb-8 max-w-xl mx-auto">
            Привезём образцы на замер — выберете цвет и фактуру вживую
          </p>
          <button
            onClick={() => setOrderModal(true)}
            className="px-8 py-4 rounded-lg font-semibold text-white transition-colors duration-200 inline-flex items-center gap-2"
            style={{ backgroundColor: "#C8441A" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A33515")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8441A")}
          >
            Заказать замер <ArrowRight className="w-4 h-4" />
          </button>
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
                  <h3 className="text-xl font-bold mb-2 text-foreground">Заказать замер</h3>
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
                      await sendFormEmail("Замер подоконника — сайт Марвико", { "Имя": orderForm.name, "Телефон": orderForm.phone });
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

export default WindowsillsPage;
