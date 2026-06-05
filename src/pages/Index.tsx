import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Star, ChevronDown, Eye, ArrowRight, Phone, MapPin, Send, FileText, PhoneCall, ChevronLeft, ChevronRight, CreditCard, CalendarDays, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import OrderModal from "@/components/OrderModal";
import { SEO_BY_PATH } from "@/config/seo";
import ImageLightbox from "@/components/ImageLightbox";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection, { ParallaxImage } from "@/components/AnimatedSection";
import PricingWindowSVG from "@/components/PricingWindowSVG";
import { FORM_SUBJECTS, SITE } from "@/config/site";
import { HOMEPAGE_PRICING_CARDS, HOMEPAGE_WINDOWS_FROM_PRICE } from "@/data/pricing";
import { HOMEPAGE_PORTFOLIO_ITEMS } from "@/data/portfolio";
import { faqData } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { FORM_SUBMIT_ERROR_MESSAGE, sendFormEmail } from "@/lib/formSubmit";
import { pushFormSubmissionSuccess } from "@/lib/gtm";


import heroImg from "@/assets/hero-interior.jpg";
import serviceWindows from "@/assets/window-work-1.jpg";

import serviceDoors from "@/assets/service-doors-hero.jpg";
import servicePartitions from "@/assets/partitions-real-1.jpg";
import serviceWindowsills from "@/assets/windowsill-real-1.jpg";
import serviceWindowWork from "@/assets/service-objects.jpg";
import serviceAccessories from "@/assets/acc-handle-key.jpg";

import certSpk1 from "@/assets/cert-spk-1.jpg";
import certSpk2 from "@/assets/cert-spk-2.jpg";
import isoImg from "@/assets/cert-iso-9001.jpg";

const categories = [
  {
    title: "Пластиковые и алюминиевые окна",
    description: "Окна ПВХ и алюминиевые окна различной формы от бюджетных до премиум класса",
    img: serviceWindows,
    link: "/windows",
    price: HOMEPAGE_WINDOWS_FROM_PRICE,
  },


  {
    title: "Двери",
    description: "Входные двери из ПВХ и алюминия, балконные двери из ПВХ",
    img: serviceDoors,
    link: "/doors",
    price: "от 650 BYN",
  },
  {
    title: "Перегородки из ПВХ и алюминия",
    description: "Зонирование офисов, школ и коммерческих помещений",
    img: servicePartitions,
    link: "/partitions",
    price: "по запросу",
  },
  {
    title: "Подоконники",
    description: "Стандартные и премиум. Глянцевые, матовые, под камень и дерево",
    img: serviceWindowsills,
    link: "/windowsills",
    price: "от 35 BYN",
  },
  {
    title: "Остекление объектов",
    description: "Магазины, офисы, многоквартирные дома — под ключ",
    img: serviceWindowWork,
    link: "/windows",
    price: "по запросу",
  },
  {
    title: "Аксессуары",
    description: "Ручки, замки, фурнитура и детская безопасность",
    img: serviceAccessories,
    link: "/accessories",
    price: "от 15 BYN",
  },
];

const whyUs = [
  { icon: <Shield className="w-6 h-6" />, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: <Clock className="w-6 h-6" />, title: "Работаем с 2007 года", desc: "Более 19 лет на рынке Беларуси" },
  { icon: <Award className="w-6 h-6" />, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Собственное производство", desc: "г. Червень, полный цикл изготовления" },
];

const processSteps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку на сайте или звоните" },
  { num: "02", title: "Замер", desc: "Бесплатный выезд замерщика" },
  { num: "03", title: "Просчёт и консультация", desc: "Подбор оптимального решения и расчёт стоимости" },
  { num: "04", title: "Заключение договора", desc: "Оформление документов и согласование сроков" },
  { num: "05", title: "Производство", desc: "Изготовление по вашим размерам" },
  { num: "06", title: "Монтаж", desc: "Профессиональная установка" },
];

const accessories = [
  { emoji: "🦟", title: "Москитные сетки", desc: "Внутренние и наружные. Изготавливаем под размер вашего окна" },
  { emoji: "🔧", title: "Ручки и замки", desc: "Замена и установка ручек, замков, фурнитуры" },
  { emoji: "🪟", title: "Стеклопакеты", desc: "Замена стеклопакетов без демонтажа рамы" },
  { emoji: "🔒", title: "Детские замки", desc: "Защита от открывания ребёнком. Устанавливается на любое окно" },
  { emoji: "🏠", title: "Отливы и доборы", desc: "Отливы и доборные элементы для кровель из оцинкованной стали" },
  { emoji: "📏", title: "Подоконники", desc: "Стандартные и премиум подоконники. Глянцевые, матовые, под камень и дерево" },
];
const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ type: "windows", width: "", height: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", question: "" });
  const [contactErrors, setContactErrors] = useState({ name: false, phone: false, question: false });
  const [calcPhone, setCalcPhone] = useState("");
  const [calcPhoneError, setCalcPhoneError] = useState(false);
  const [calcSending, setCalcSending] = useState(false);
  const [calcSubmitError, setCalcSubmitError] = useState(false);
  const [certModal, setCertModal] = useState<string | null>(null);
  const [orderModal, setOrderModal] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [portfolioLightbox, setPortfolioLightbox] = useState<number | null>(null);
  const [ctaForm, setCtaForm] = useState({ name: "", phone: "" });
  const [ctaErrors, setCtaErrors] = useState({ name: false, phone: false });
  const [ctaSending, setCtaSending] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [ctaSubmitError, setCtaSubmitError] = useState(false);
  const [contactSubmitError, setContactSubmitError] = useState(false);
  const [reviewModal, setReviewModal] = useState<string | null>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const certImages = [
    { img: certSpk1, title: "Свидетельство о технической компетентности" },
    { img: certSpk2, title: "Область технической компетентности" },
    
    { img: isoImg, title: "Сертификат соответствия СТБ ISO 9001-2015 (действителен до 14.05.2026)" },
  ];

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/"]} path="/" />

      {/* Hero - lighter warm feel */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Остекление балконов и окна ПВХ в Минске — Марвико"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />
        </div>
        <div className="container mx-auto section-padding relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <SectionLabel>Окна Марвико</SectionLabel>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
                Уют начинается<br />с правильных окон
              </h1>
              <p className="text-lg mb-8 text-body text-muted-foreground">
                Производим и устанавливаем окна, двери и балконы с 2007 года. Бесплатный замер, профессиональный монтаж, гарантия 10 лет.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={SITE.phoneTel} className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                  Позвонить нам
                </a>
                <Link to="/portfolio" className="px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 border-[1.5px] border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Наши работы
                </Link>
              </div>
            </motion.div>

            {/* Quick calc form */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl p-6 sm:p-8 bg-card border border-border card-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Быстрый расчёт стоимости</h3>
              <form
                className="flex flex-col gap-4"
                noValidate
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!calcPhone.trim()) {
                    setCalcPhoneError(true);
                    return;
                  }
                  setCalcSending(true);
                  setCalcSubmitError(false);
                  const ok = await sendFormEmail("Расчёт стоимости — сайт Марвико", {
                    "Тип": formData.type,
                    "Ширина": formData.width || "не указана",
                    "Высота": formData.height || "не указана",
                    "Телефон": calcPhone,
                  });
                  setCalcSending(false);
                  if (ok) {
                    pushFormSubmissionSuccess("price_calc");
                    setCalcPhone("");
                    setCalcPhoneError(false);
                    setFormData({ type: "windows", width: "", height: "" });
                  } else {
                    setCalcSubmitError(true);
                  }
                }}
              >
                <div>
                  <label className="text-sm mb-1.5 block text-muted-foreground">Тип конструкции</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  >
                    <option value="windows">Окна ПВХ</option>
                    <option value="alu-windows">Алюминиевые окна</option>
                    <option value="balconies">Балкон из ПВХ</option>
                    <option value="alu-balconies">Алюминиевые балконы</option>
                    <option value="doors">Двери ПВХ</option>
                    <option value="alu-doors">Алюминиевые двери</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm mb-1.5 block text-muted-foreground">Ширина, мм</label>
                    <input
                      type="number"
                      placeholder="1400"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-1.5 block text-muted-foreground">Высота, мм</label>
                    <input
                      type="number"
                      placeholder="1300"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-sm mb-1.5 block ${calcPhoneError ? "text-destructive" : "text-muted-foreground"}`}>
                    * Ваш телефон для связи
                  </label>
                  <input
                    type="tel"
                    placeholder={SITE.phonePlaceholder}
                    value={calcPhone}
                    onChange={(e) => {
                      setCalcPhone(e.target.value);
                      setCalcPhoneError(false);
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors placeholder:text-muted-foreground ${calcPhoneError ? "" : "border-border focus:border-primary"}`}
                    style={calcPhoneError ? { borderColor: "hsl(var(--destructive))", boxShadow: "0 0 0 1px hsl(var(--destructive))" } : undefined}
                    maxLength={20}
                    required
                    aria-invalid={calcPhoneError}
                    aria-describedby={calcPhoneError ? "calc-phone-error" : undefined}
                  />
                  {calcPhoneError && (
                    <p id="calc-phone-error" className="text-xs mt-1" style={{ color: "hsl(var(--destructive))" }}>
                      Пожалуйста, введите номер телефона
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={calcSending}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 mt-2 disabled:opacity-70"
                >
                  {calcSending ? "Отправка..." : "Рассчитать"}
                </button>
                {calcSubmitError && (
                  <p className="text-xs text-destructive mt-2">{FORM_SUBMIT_ERROR_MESSAGE}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - mosokna style grid cards with icons */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-left">
            <SectionLabel>Продукция</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-xl">Окна, двери и перегородки из ПВХ и алюминия</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.12} variant="scale" className="h-full">
                <Link
                  to={cat.link}
                  className="block rounded-xl overflow-hidden bg-card border border-border hover:border-primary card-shadow hover:card-shadow-hover transition-all duration-300 group h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="w-full h-40 rounded-lg overflow-hidden mb-5 bg-muted">
                      <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground text-body mb-4 flex-1">{cat.description}</p>
                    <div className="flex items-center justify-end">
                      <span className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Подробнее <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-right">
            <SectionLabel>Преимущества</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Почему выбирают Марвико</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12} variant="slide-up">
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary h-full flex flex-col">
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

      {/* Pricing - mosokna style clean cards */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="blur">
            <SectionLabel>Цены</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">Цены на наши окна</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-xl">Стоимость окон ПВХ с монтажом.</p>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOMEPAGE_PRICING_CARDS.map((card, i) => (
              <AnimatedSection key={card.type} delay={i * 0.08}>
                <div
                  className="rounded-xl flex flex-col bg-card relative transition-all duration-300 cursor-pointer h-full hover:shadow-lg"
                  style={{ border: "2px solid transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8441A")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  onClick={() => setOrderModal(true)}
                >
                  {/* SVG Window illustration */}
                  <div className="flex items-center justify-center py-6 px-4">
                    <PricingWindowSVG type={card.type} width={card.type === "single" ? 800 : card.type === "double" ? 1300 : card.type === "triple" ? 2000 : 1500} height={card.type === "balcony" ? 2100 : 1400} />
                  </div>

                  <div className="px-6 pb-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-base mb-1" style={{ color: "#1C1C1C" }}>{card.title}</h3>
                    <p className="text-[13px] mb-2" style={{ color: "#7A7268" }}>Размер: {card.size}</p>
                    <div className="text-[13px] leading-relaxed mb-3" style={{ color: "#7A7268" }}>
                      <p>Тип: {card.opening}</p>
                      <p>Стеклопакет: {card.glass}</p>
                      <p>Фурнитура: {card.furniture}</p>
                    </div>

                    <div
                      className="inline-block font-bold text-lg rounded-lg px-4 py-2 mb-4 mt-auto self-start"
                      style={{ backgroundColor: "#FDF3EC", color: "#C8441A" }}
                    >
                      {card.price}
                    </div>

                    <button
                      className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-colors duration-200"
                      style={{ backgroundColor: "#C8441A" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A33515")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8441A")}
                      onClick={(e) => { e.stopPropagation(); setOrderModal(true); }}
                    >
                      Заказать замер
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Note */}
          <p className="text-xs mt-6" style={{ color: "#7A7268" }}>
            * Цены указаны ориентировочно для стандартных размеров. Точная стоимость рассчитывается после бесплатного замера.
          </p>

          {/* CTA strip */}
          <div
            className="mt-8 rounded-xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ backgroundColor: "#FDF3EC" }}
          >
            <p className="font-semibold text-sm sm:text-base" style={{ color: "#1C1C1C" }}>
              Не нашли нужный размер? Получите точный расчёт бесплатно
            </p>
            <button
              className="px-6 py-3 rounded-lg font-semibold text-sm text-white whitespace-nowrap flex items-center gap-2 transition-colors duration-200"
              style={{ backgroundColor: "#C8441A" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A33515")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8441A")}
              onClick={() => setOrderModal(true)}
            >
              Заказать замер <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA - Order call / consultation */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl text-display text-primary-foreground mb-4">Закажите бесплатную консультацию</h2>
              <p className="text-primary-foreground/80 text-body mb-6">Специалисты нашей компании ответят на все ваши вопросы и помогут подобрать оптимальное решение для вашего дома.</p>
              <div className="flex flex-wrap gap-6 text-primary-foreground/90 text-sm">
                <span className="flex items-center gap-2"><PhoneCall className="w-5 h-5" /> Бесплатная консультация</span>
                <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> Перезвоним за 15 минут</span>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              {ctaSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">Заявка отправлена!</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">Наш менеджер свяжется с вами в течение 15 минут.</p>
                  <button onClick={() => setCtaSubmitted(false)} className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Закрыть</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={ctaForm.name}
                      onChange={(e) => { setCtaForm({ ...ctaForm, name: e.target.value }); setCtaErrors({ ...ctaErrors, name: false }); }}
                      className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border focus:outline-none ${ctaErrors.name ? 'border-red-400' : 'border-primary-foreground/20 focus:border-primary-foreground/50'}`}
                      disabled={ctaSending}
                    />
                    {ctaErrors.name && <p className="text-xs text-red-300 mt-1">Пожалуйста, введите ваше имя</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={SITE.phonePlaceholder}
                      value={ctaForm.phone}
                      onChange={(e) => { setCtaForm({ ...ctaForm, phone: e.target.value }); setCtaErrors({ ...ctaErrors, phone: false }); }}
                      className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border focus:outline-none ${ctaErrors.phone ? 'border-red-400' : 'border-primary-foreground/20 focus:border-primary-foreground/50'}`}
                      disabled={ctaSending}
                    />
                    {ctaErrors.phone && <p className="text-xs text-red-300 mt-1">Пожалуйста, введите номер телефона</p>}
                  </div>
                  <button
                    disabled={ctaSending}
                    onClick={async () => {
                      const errors = { name: !ctaForm.name.trim(), phone: !ctaForm.phone.trim() };
                      setCtaErrors(errors);
                      if (errors.name || errors.phone) return;
                      setCtaSending(true);
                      setCtaSubmitError(false);
                      const ok = await sendFormEmail("Консультация с сайта Марвико", { "Имя": ctaForm.name, "Телефон": ctaForm.phone });
                      setCtaSending(false);
                      if (ok) {
                        pushFormSubmissionSuccess("consultation");
                        setCtaSubmitted(true);
                        setCtaForm({ name: "", phone: "" });
                      } else {
                        setCtaSubmitError(true);
                      }
                    }}
                    className="w-full bg-primary-foreground text-primary py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {ctaSending ? (<><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>Отправка...</>) : (<><Phone className="w-4 h-4" />Заказать звонок</>)}
                  </button>
                  {ctaSubmitError && (
                    <p className="text-xs text-red-300 mt-2">{FORM_SUBMIT_ERROR_MESSAGE}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-left">
            <SectionLabel>Этапы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-12">Как мы работаем</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15} variant="slide-up">
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

      {/* Portfolio preview - real work photos */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-right">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Портфолио</SectionLabel>
                <h2 className="text-3xl sm:text-4xl text-display">Наши работы</h2>
              </div>
              <Link to="/portfolio" className="hidden sm:flex items-center gap-1 text-primary font-semibold text-sm">
                Все работы <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {HOMEPAGE_PORTFOLIO_ITEMS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} variant="scale">
                <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]" onClick={() => setPortfolioLightbox(i)}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
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
          <AnimatedSection variant="fade-left">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Отзывы</SectionLabel>
                <h2 className="text-3xl sm:text-4xl text-display">Что говорят клиенты</h2>
              </div>
              <div className="hidden sm:flex gap-2">
                <button
                  onClick={() => { const el = reviewsRef.current; if (el) el.scrollBy({ left: -340, behavior: 'smooth' }); }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { const el = reviewsRef.current; if (el) el.scrollBy({ left: 340, behavior: 'smooth' }); }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>
          <div
            ref={reviewsRef}
            className="flex gap-6 overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start">
                <button
                  onClick={() => setReviewModal(review.screenshot)}
                  className="text-left w-full h-full"
                >
{review.type === "messenger" ? (
                    <div className="bg-white rounded-2xl rounded-tl-sm p-5 border-2 border-primary relative h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-primary-foreground" style={{ backgroundColor: "#7360F2" }}>V</span>
                        <span className="font-bold text-sm">{review.name}</span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-body text-foreground flex-1">{review.text}</p>
                      {review.date && (
                        <p className="text-[11px] text-muted-foreground text-right mt-3">{review.date}</p>
                      )}
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Показать скриншот
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl p-5 border-2 border-primary h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-bold text-sm block">{review.name}</span>
                          {"position" in review && <span className="text-xs text-muted-foreground">{review.position}</span>}
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-body text-muted-foreground flex-1">{review.text}</p>
{review.date && (
                        <p className="text-xs text-muted-foreground text-right mt-3">{review.date}</p>
                      )}
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Показать оригинал
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review screenshot modal */}
      <AnimatePresence>
        {reviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80"
            onClick={() => setReviewModal(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={reviewModal}
              alt="Отзыв"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificates - mosokna carousel style */}
      <section id="certificates" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Документы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-3">Сертификаты соответствия</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-2xl">
              Для изготовления своей продукции мы используем только самые высококачественные оригинальные европейские комплектующие.
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              {certImages.map((cert, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <button
                    onClick={() => setCertModal(cert.img)}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] group"
                  >
                    <div className="bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 overflow-hidden card-shadow hover:card-shadow-hover">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">{cert.title}</p>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-8">
            {["ISO 9001", "СТБ 1108-2017", "С 2007 года"].map((badge) => (
              <span key={badge} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate modal */}
      <AnimatePresence>
        {certModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80"
            onClick={() => setCertModal(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={certModal}
              alt="Сертификат"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessories section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="blur">
            <SectionLabel>Дополнительно</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Также устанавливаем и продаём</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} variant="fade-left">
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

      {/* FAQ + Contact Form - mosokna style */}
      <section id="faq" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* FAQ */}
            <div>
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
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <p className="text-sm text-muted-foreground text-body">{faq.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Contact Form - mosokna style */}
            <div>
              <AnimatedSection>
                <SectionLabel>Контакты</SectionLabel>
                <h2 className="text-2xl sm:text-3xl text-display mb-2">Возникли вопросы?</h2>
                <p className="text-muted-foreground text-body mb-8">
                  Напишите, и наши специалисты подробно ответят вам в удобной форме.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                {contactSubmitted ? (
                  <div className="bg-card rounded-xl p-8 card-shadow text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-primary mx-auto mb-4">
                      <Send className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Спасибо!</h3>
                    <p className="text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                ) : (
                  <div className="bg-card rounded-xl p-6 sm:p-8 card-shadow">
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-sm font-medium">* Ваш вопрос</label>
                          {contactErrors.question && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "hsl(0 84% 60% / 0.1)", color: "hsl(var(--destructive))" }}>
                              Обязательное поле
                            </span>
                          )}
                        </div>
                        <textarea
                          placeholder="Опишите ваш вопрос..."
                          rows={3}
                          value={contactForm.question}
                          onChange={(e) => { setContactForm({ ...contactForm, question: e.target.value }); setContactErrors({ ...contactErrors, question: false }); }}
                          className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors resize-none ${contactErrors.question ? 'border-destructive' : 'border-border focus:border-primary'}`}
                          maxLength={1000}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-sm font-medium">* Ваше имя</label>
                          {contactErrors.name && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "hsl(0 84% 60% / 0.1)", color: "hsl(var(--destructive))" }}>
                              Обязательное поле
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="Иван Иванов"
                          value={contactForm.name}
                          onChange={(e) => { setContactForm({ ...contactForm, name: e.target.value }); setContactErrors({ ...contactErrors, name: false }); }}
                          className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${contactErrors.name ? 'border-destructive' : 'border-border focus:border-primary'}`}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-sm font-medium">* Телефон</label>
                          {contactErrors.phone && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "hsl(0 84% 60% / 0.1)", color: "hsl(var(--destructive))" }}>
                              Обязательное поле
                            </span>
                          )}
                        </div>
                        <input
                          type="tel"
                          placeholder={SITE.phonePlaceholder}
                          value={contactForm.phone}
                          onChange={(e) => { setContactForm({ ...contactForm, phone: e.target.value }); setContactErrors({ ...contactErrors, phone: false }); }}
                          className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${contactErrors.phone ? 'border-destructive' : 'border-border focus:border-primary'}`}
                          maxLength={20}
                        />
                      </div>
                      <button
                        onClick={async () => {
                          const errors = {
                            question: !contactForm.question.trim(),
                            name: !contactForm.name.trim(),
                            phone: !contactForm.phone.trim(),
                          };
                          setContactErrors(errors);
                          if (errors.question || errors.name || errors.phone) return;
                          setContactSubmitError(false);
                          const ok = await sendFormEmail("Вопрос с сайта Марвико", {
                            "Вопрос": contactForm.question,
                            "Имя": contactForm.name,
                            "Телефон": contactForm.phone,
                          });
                          if (ok) {
                            pushFormSubmissionSuccess("question");
                            setContactSubmitted(true);
                            setContactForm({ name: "", phone: "", question: "" });
                          } else {
                            setContactSubmitError(true);
                          }
                        }}
                        className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground transition-colors duration-200"
                        style={{ backgroundColor: "hsl(var(--primary))" }}
                      >
                        Отправить
                      </button>
                      {contactSubmitError && (
                        <p className="text-xs text-destructive text-center">{FORM_SUBMIT_ERROR_MESSAGE}</p>
                      )}
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая на кнопку «Отправить», Вы принимаете условия обработки персональных данных.
                      </p>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>



      {/* Contacts */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-right">
            <SectionLabel>Контакты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Свяжитесь с нами</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Телефон", value: SITE.phoneDisplay, href: SITE.phoneTel },
              { icon: <Send className="w-6 h-6" />, title: "Viber / Telegram", value: SITE.phoneDisplay, href: SITE.telegramHref },
              { icon: <MapPin className="w-6 h-6" />, title: "Офис", value: SITE.addressOffice, href: undefined },
              { icon: <MapPin className="w-6 h-6" />, title: "Производство", value: SITE.addressProduction, href: undefined },
            ].map((contact, i) => (
              <AnimatedSection key={i} delay={i * 0.12} variant="slide-up">
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 text-center border border-border hover:border-primary">
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

          {/* Payment block */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl p-6 card-shadow border border-border flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Удобная оплата</h3>
                  <p className="text-sm text-muted-foreground text-body">Принимаем наличные, банковскую карту и банковский перевод на расчётный счёт</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-xl p-6 card-shadow border border-border flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Рассрочка без %</h3>
                  <p className="text-sm text-muted-foreground text-body">От 6 до 12 месяцев. Без переплат, без поручителей, справка из банка не требуется</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject={FORM_SUBJECTS.defaultCall}
        formType="lead_contact"
        title="Заказать звонок"
      />

      <ImageLightbox
        images={HOMEPAGE_PORTFOLIO_ITEMS.map((item) => ({ src: item.img, alt: item.title }))}
        index={portfolioLightbox}
        onClose={() => setPortfolioLightbox(null)}
      />
    </PageLayout>
  );
};

export default Index;
