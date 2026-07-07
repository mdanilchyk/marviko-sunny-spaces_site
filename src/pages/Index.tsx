import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, MapPin, Send, CreditCard, CalendarDays, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import OrderModal from "@/components/OrderModal";
import { SEO_BY_PATH } from "@/config/seo";
import ImageLightbox from "@/components/ImageLightbox";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection, { ParallaxImage } from "@/components/AnimatedSection";
import PricingWindowSVG from "@/components/PricingWindowSVG";
import { FORM_SUBJECTS, SITE, FORM_COPY } from "@/config/site";
import { HOMEPAGE_PRICING_CARDS, HOMEPAGE_WINDOWS_FROM_PRICE } from "@/data/pricing";
import { HOMEPAGE_PORTFOLIO_ITEMS } from "@/data/portfolio";
import { faqData } from "@/data/faq";
import FaqAccordion from "@/components/FaqAccordion";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import CertificatesSection from "@/components/CertificatesSection";
import SectionHeader from "@/components/SectionHeader";
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

import WhyChooseMarvikoSection from "@/components/WhyChooseMarvikoSection";
const categories = [
  {
    title: "Пластиковые и алюминиевые окна",
    description: "Окна ПВХ и алюминиевые окна различной формы от бюджетных до премиум класса",
    img: serviceWindows,
    link: "/windows-pvh",
    price: HOMEPAGE_WINDOWS_FROM_PRICE,
  },


  {
    title: "Двери",
    description: "Входные двери из ПВХ и алюминия, балконные двери из ПВХ",
    img: serviceDoors,
    link: "/doors-pvh",
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
    link: "/windows-pvh",
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
  { emoji: "📏", title: "Подоконники", desc: "Стандартные и премиум. Более 30 цветов и фактур" },
];
const Index = () => {
  const [formData, setFormData] = useState({ type: "windows", width: "", height: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", question: "" });
  const [contactErrors, setContactErrors] = useState({ name: false, phone: false, question: false });
  const [calcPhone, setCalcPhone] = useState("");
  const [calcPhoneError, setCalcPhoneError] = useState(false);
  const [calcSending, setCalcSending] = useState(false);
  const [calcSubmitError, setCalcSubmitError] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [portfolioLightbox, setPortfolioLightbox] = useState<number | null>(null);
  const [contactSubmitError, setContactSubmitError] = useState(false);

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
          <SectionHeader
            label="Продукция"
            title="Наши услуги"
            subtitle="Окна, двери и перегородки из ПВХ и алюминия"
            variant="fade-left"
          />
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

      <WhyChooseMarvikoSection />

      {/* Pricing - mosokna style clean cards */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <SectionHeader
            label="Цены"
            title="Цены на наши окна"
            subtitle="Стоимость окон ПВХ с монтажом."
            variant="blur"
          />

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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <SectionHeader label="Этапы" title="Как мы работаем" variant="fade-left" />
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
          <SectionHeader
            label="Портфолио"
            title="Наши работы"
            variant="fade-right"
            action={
              <Link to="/portfolio" className="flex items-center gap-1 text-primary font-semibold text-sm">
                Все работы <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
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

      <ClientReviewsSection reviews={reviews} />

      <CertificatesSection />

      {/* Accessories section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <SectionHeader label="Дополнительно" title="Также устанавливаем и продаём" variant="blur" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {accessories.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} variant="fade-left" className="h-full">
                <Link
                  to={item.title === "Подоконники" ? "/windowsills" : "/accessories"}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary flex gap-4 items-start h-full"
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
            <FaqAccordion items={faqData} />

            {/* Contact Form - mosokna style */}
            <div>
              <SectionHeader
                label="Контакты"
                title="Возникли вопросы?"
                subtitle="Напишите, и наши специалисты подробно ответят вам в удобной форме."
              />
              <AnimatedSection delay={0.15}>
                {contactSubmitted ? (
                  <div className="bg-card rounded-xl p-8 card-shadow text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-primary mx-auto mb-4">
                      <Send className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Спасибо!</h3>
                    <p className="text-sm text-muted-foreground">{FORM_COPY.followUp}</p>
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

      <ConsultationCtaSection />

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <SectionHeader label="Контакты" title="Свяжитесь с нами" variant="fade-right" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Телефон", value: SITE.phoneDisplay, href: SITE.phoneTel },
              { icon: <Send className="w-6 h-6" />, title: "Viber / Telegram", value: SITE.phoneDisplay, href: SITE.telegramHref },
              { icon: <MapPin className="w-6 h-6" />, title: "Офис", value: SITE.addressOffice, href: undefined },
              { icon: <MapPin className="w-6 h-6" />, title: "Производство", value: SITE.addressProduction, href: undefined },
            ].map((contact, i) => (
              <AnimatedSection key={i} delay={i * 0.12} variant="slide-up" className="h-full">
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 text-center border border-border hover:border-primary h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4 mx-auto">
                    {contact.icon}
                  </div>
                  <h3 className="font-bold mb-1">{contact.title}</h3>
                  <div className="min-h-12 flex items-center justify-center">
                    {contact.href ? (
                      <a href={contact.href} className="text-sm text-primary font-medium">{contact.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
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
