import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Star, ChevronDown, Eye, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";

import heroImg from "@/assets/hero-interior.jpg";
import windowForest from "@/assets/window-forest-view.jpg";
import windowCity from "@/assets/window-city-view.jpg";
import windowGarden from "@/assets/window-garden-view.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = [
  {
    title: "Окна ПВХ",
    description: "Энергосберегающие окна из профилей Montblanc, Novotex, KBE",
    gradient: "linear-gradient(135deg, #2A3A4A, #3D5A7A)",
    link: "/windows",
    emoji: "🪟",
  },
  {
    title: "Остекление балконов",
    description: "Тёплое и холодное остекление, отделка под ключ",
    gradient: "linear-gradient(135deg, #243A2A, #3A6040)",
    link: "/balconies",
    emoji: "🏢",
  },
  {
    title: "Двери ПВХ",
    description: "Входные и межкомнатные двери из качественного профиля",
    gradient: "linear-gradient(135deg, #3A2518, #6B3D25)",
    link: "/doors",
    emoji: "🚪",
  },
];

const whyUs = [
  { icon: <Shield className="w-6 h-6" />, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: <Clock className="w-6 h-6" />, title: "Монтаж за 1 день", desc: "Быстрая установка без лишней пыли" },
  { icon: <Award className="w-6 h-6" />, title: "Сертифицированные профили", desc: "Montblanc, Novotex, KBE" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "1500+ довольных клиентов", desc: "За 14 лет работы в Минске" },
];

const processSteps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку на сайте или звоните" },
  { num: "02", title: "Замер", desc: "Бесплатный выезд замерщика" },
  { num: "03", title: "Производство", desc: "Изготовление по вашим размерам" },
  { num: "04", title: "Монтаж", desc: "Профессиональная установка" },
];

const reviews = [
  { name: "Анна К.", text: "Отличные окна! Стало намного теплее и тише. Ребята работали аккуратно, всё убрали за собой.", rating: 5 },
  { name: "Игорь М.", text: "Заказывал остекление балкона. Сделали быстро, качественно. Цена приятно удивила.", rating: 5 },
  { name: "Елена В.", text: "Установили входную дверь ПВХ. Выглядит стильно, держит тепло. Рекомендую!", rating: 5 },
];

const faqData = [
  { q: "Какие профили вы используете?", a: "Мы работаем с проверенными брендами: Montblanc, Novotex, KBE. Все профили сертифицированы и адаптированы для климата Беларуси." },
  { q: "Сколько времени занимает установка?", a: "Стандартная установка окна занимает от 2 до 4 часов. Остекление балкона — 1 рабочий день." },
  { q: "Есть ли гарантия?", a: "Да, мы предоставляем гарантию 10 лет на профиль, 5 лет на фурнитуру и 3 года на монтажные работы." },
  { q: "Вы работаете за пределами Минска?", a: "Да, мы выполняем заказы по всей Минской области. Выезд замерщика бесплатный." },
  { q: "Можно ли установить окна зимой?", a: "Да, современные технологии монтажа позволяют устанавливать окна при температуре до -15°C." },
];

const pricingCards = [
  { img: windowForest, title: "Однокамерное окно", price: "от 250 BYN", specs: "Профиль: Novotex Termo", featured: false },
  { img: windowCity, title: "Двухкамерное окно", price: "от 320 BYN", specs: "Профиль: Montblanc Eco", featured: true },
  { img: windowGarden, title: "Энергосберегающее", price: "от 420 BYN", specs: "Профиль: KBE Engine", featured: false },
];

const portfolioItems = [
  { img: portfolio1, title: "Окна в квартире" },
  { img: portfolio2, title: "Остекление балкона" },
  { img: portfolio3, title: "Окна в спальне" },
  { img: portfolio4, title: "Входная дверь" },
  { img: portfolio5, title: "Окна на кухне" },
  { img: portfolio6, title: "Окна в офисе" },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ type: "windows", width: "", height: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="dark-section relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(217,79,30,0.12), transparent)",
        }} />
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto section-padding relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <SectionLabel>Окна Марвико</SectionLabel>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-display mb-6">
                Свет и тепло<br />вашего дома
              </h1>
              <p className="text-lg mb-8 text-body" style={{ color: "hsl(var(--muted-foreground))" }}>
                Профессиональное остекление в Минске и области. Окна, балконы и двери из сертифицированных профилей с гарантией 10 лет.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                  Рассчитать стоимость
                </button>
                <Link to="/portfolio" className="px-7 py-3.5 rounded-lg font-semibold transition-all duration-200" style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.9)" }}>
                  Наши работы
                </Link>
              </div>
            </motion.div>

            {/* Quick calc form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-xl p-6 sm:p-8"
              style={{ background: "rgba(42,37,32,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-xl font-bold mb-6">Быстрый расчёт стоимости</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Тип конструкции</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-transparent text-sm"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "inherit" }}
                  >
                    <option value="windows" style={{ color: "#1C1C1C" }}>Окна ПВХ</option>
                    <option value="balconies" style={{ color: "#1C1C1C" }}>Остекление балкона</option>
                    <option value="doors" style={{ color: "#1C1C1C" }}>Двери ПВХ</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Ширина, мм</label>
                    <input
                      type="number"
                      placeholder="1400"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-transparent text-sm placeholder:text-muted-foreground"
                      style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Высота, мм</label>
                    <input
                      type="number"
                      placeholder="1300"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-transparent text-sm placeholder:text-muted-foreground"
                      style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                    />
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 mt-2">
                  Рассчитать
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Продукция</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Наши услуги</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <Link
                  to={cat.link}
                  className="block rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
                >
                  <div className="h-40 flex items-center justify-center text-5xl" style={{ background: cat.gradient }}>
                    {cat.emoji}
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground text-body">{cat.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
                      Подробнее <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Преимущества</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Почему выбирают Марвико</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="dark-section py-20">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Цены</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Стоимость окон</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div
                  className="rounded-xl overflow-hidden transition-shadow duration-300"
                  style={{
                    border: card.featured ? "1px solid hsl(var(--primary))" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: card.featured ? "0 0 30px rgba(217,79,30,0.15)" : "none",
                  }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    {card.featured && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        Популярный
                      </div>
                    )}
                  </div>
                  <div className="p-6" style={{ backgroundColor: "hsl(var(--dark-card))" }}>
                    <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>{card.specs}</p>
                    <div className="text-2xl font-extrabold mb-4" style={{ color: "hsl(var(--accent))" }}>{card.price}</div>
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                      Заказать
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Этапы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-12">Как мы работаем</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary font-bold text-lg mb-4" style={{ border: "2px solid hsl(var(--primary))" }}>
                    {step.num}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-16 w-[calc(100%-4rem)] h-0.5 gradient-line" />
                  )}
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Портфолио</SectionLabel>
                <h2 className="text-3xl sm:text-4xl text-display">Галерея работ</h2>
              </div>
              <Link to="/portfolio" className="hidden sm:flex items-center gap-1 text-primary font-semibold text-sm">
                Все работы <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "rgba(217,79,30,0.70)" }}>
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <Link to="/portfolio" className="sm:hidden flex items-center justify-center gap-1 text-primary font-semibold text-sm mt-6">
            Все работы <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Отзывы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Что говорят клиенты</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-body mb-4 text-muted-foreground">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold text-sm">{review.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding max-w-3xl">
          <AnimatedSection>
            <SectionLabel>Вопросы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Часто задаваемые вопросы</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {faqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-xl card-shadow overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-sm text-muted-foreground text-body">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Контакты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Свяжитесь с нами</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Телефон", value: "+375 (29) 123-45-67", href: "tel:+375291234567" },
              { icon: <Mail className="w-6 h-6" />, title: "Email", value: "info@marviko.by", href: "mailto:info@marviko.by" },
              { icon: <MapPin className="w-6 h-6" />, title: "Адрес", value: "г. Минск, ул. Примерная, 123", href: undefined },
            ].map((contact, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4 mx-auto">
                    {contact.icon}
                  </div>
                  <h3 className="font-bold mb-1">{contact.title}</h3>
                  {contact.href ? (
                    <a href={contact.href} className="text-sm text-primary font-medium">{contact.value}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  )}
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

export default Index;
