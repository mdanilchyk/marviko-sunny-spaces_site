import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Star, ChevronDown, Eye, ArrowRight, Phone, MapPin, Send, FileText, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import WindowDrawing from "@/components/WindowDrawing";

import heroImg from "@/assets/hero-interior.jpg";
import serviceWindows from "@/assets/service-windows.jpg";
import serviceBalconies from "@/assets/service-balconies.jpg";
import serviceDoors from "@/assets/service-doors.jpg";

import workWindowOpen from "@/assets/work-window-open.jpg";
import workWindowTrees from "@/assets/work-window-trees.jpg";
import workHouseExterior from "@/assets/work-house-exterior.jpg";
import workDoorBrown from "@/assets/work-door-brown.jpg";
import workDoorGlass from "@/assets/work-door-glass.jpg";
import workWindowFireplace from "@/assets/work-window-fireplace.jpg";

import certSpk1 from "@/assets/cert-spk-1.jpg";
import certSpk2 from "@/assets/cert-spk-2.jpg";

const categories = [
  {
    title: "Пластиковые окна",
    description: "Окна ПВХ различной формы от бюджетных до премиум класса",
    img: serviceWindows,
    link: "/windows",
    price: "от 302 BYN",
  },
  {
    title: "Балконы и лоджии",
    description: "Тёплое и холодное остекление балконов, отделка",
    img: serviceBalconies,
    link: "/balconies",
    price: "от 450 BYN",
  },
  {
    title: "Входные двери",
    description: "Входные, балконные двери из ПВХ",
    img: serviceDoors,
    link: "/doors",
    price: "от 650 BYN",
  },
];

const whyUs = [
  { icon: <Shield className="w-6 h-6" />, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: <Clock className="w-6 h-6" />, title: "Работаем с 2007 года", desc: "Более 17 лет на рынке Беларуси" },
  { icon: <Award className="w-6 h-6" />, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Собственное производство", desc: "г. Червень, полный цикл изготовления" },
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
  { q: "Какие профили вы используете?", a: "Мы работаем с проверенными профильными системами. Все профили сертифицированы и адаптированы для климата Беларуси." },
  { q: "Сколько времени занимает установка?", a: "Стандартная установка окна занимает от 2 до 4 часов. Остекление балкона — 1 рабочий день." },
  { q: "Есть ли гарантия?", a: "Да, мы предоставляем гарантию 10 лет на профиль, 5 лет на фурнитуру и 3 года на монтажные работы." },
  { q: "Вы работаете за пределами Червеня?", a: "Да, мы выполняем заказы по всей Минской области и за её пределами. Выезд замерщика бесплатный." },
  { q: "Можно ли установить окна зимой?", a: "Да, современные технологии монтажа позволяют устанавливать окна при температуре до -15°C." },
  { q: "Занимаетесь ли вы остеклением частных домов и дач?", a: "Да, мы предлагаем остекление для загородных домов, коттеджей, дачных домов. Готовы выполнить остекление балкона, веранды или террасы. У нас вы можете заказать остекление для беседки или теплицы. Предлагаем холодное и теплое остекление — в зависимости от ваших потребностей." },
  { q: "Ваша специализация — исключительно пластиковые окна?", a: "Нет, мы готовы предложить своим клиентам широкий спектр услуг. Мы устанавливаем пластиковые окна и балконные двери, предлагаем зонирование пространства с помощью межкомнатных перегородок. Также мы выполняем работы по утеплению и отделке балконов. В качестве дополнения вы можете выбрать стильные откосы, ламинацию оконного профиля, необычный подоконник — эти детали помогут органично вписать окна в любой интерьер. Рулонные шторы или жалюзи помогут укрыться от яркого солнца, а москитная сетка — от докучливых насекомых." },
];

const profileSystems = [
  { id: "novotex58", label: "Novotex Techno 58" },
  { id: "novotex70", label: "Novotex Techno 70" },
  { id: "grunhaus70", label: "Grunhaus 70" },
  { id: "rehau70", label: "Rehau Grazio 70" },
];

const pricingByProfile: Record<string, { type: "single" | "double" | "triple" | "balcony"; title: string; size: string; opening: string; glass: string; furniture: string; price: string; featured: boolean }[]> = {
  novotex58: [
    { type: "single", title: "Одностворчатое окно", size: "1400 × 800 мм", opening: "поворотно-откидное", glass: "двухкамерный 32 мм", furniture: "белая", price: "от 302 BYN", featured: false },
    { type: "double", title: "Двухстворчатое окно", size: "1400 × 1300 мм", opening: "1 створка поворотно-откидная", glass: "двухкамерный 32 мм", furniture: "белая", price: "от 395 BYN", featured: true },
    { type: "triple", title: "Трёхстворчатое окно", size: "1400 × 2000 мм", opening: "2 створки поворотно-откидные", glass: "двухкамерный 32 мм", furniture: "белая", price: "от 575 BYN", featured: false },
    { type: "balcony", title: "Балконный блок", size: "2100 × 1500 мм", opening: "окно + балконная дверь", glass: "двухкамерный 32 мм", furniture: "белая", price: "от 590 BYN", featured: false },
  ],
  novotex70: [
    { type: "single", title: "Одностворчатое окно", size: "1400 × 800 мм", opening: "поворотно-откидное", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 340 BYN", featured: false },
    { type: "double", title: "Двухстворчатое окно", size: "1400 × 1300 мм", opening: "1 створка поворотно-откидная", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 445 BYN", featured: true },
    { type: "triple", title: "Трёхстворчатое окно", size: "1400 × 2000 мм", opening: "2 створки поворотно-откидные", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 625 BYN", featured: false },
    { type: "balcony", title: "Балконный блок", size: "2100 × 1500 мм", opening: "окно + балконная дверь", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 650 BYN", featured: false },
  ],
  grunhaus70: [
    { type: "single", title: "Одностворчатое окно", size: "1400 × 800 мм", opening: "поворотно-откидное", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 355 BYN", featured: false },
    { type: "double", title: "Двухстворчатое окно", size: "1400 × 1300 мм", opening: "1 створка поворотно-откидная", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 460 BYN", featured: true },
    { type: "triple", title: "Трёхстворчатое окно", size: "1400 × 2000 мм", opening: "2 створки поворотно-откидные", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 645 BYN", featured: false },
    { type: "balcony", title: "Балконный блок", size: "2100 × 1500 мм", opening: "окно + балконная дверь", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 670 BYN", featured: false },
  ],
  rehau70: [
    { type: "single", title: "Одностворчатое окно", size: "1400 × 800 мм", opening: "поворотно-откидное", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 380 BYN", featured: false },
    { type: "double", title: "Двухстворчатое окно", size: "1400 × 1300 мм", opening: "1 створка поворотно-откидная", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 490 BYN", featured: true },
    { type: "triple", title: "Трёхстворчатое окно", size: "1400 × 2000 мм", opening: "2 створки поворотно-откидные", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 680 BYN", featured: false },
    { type: "balcony", title: "Балконный блок", size: "2100 × 1500 мм", opening: "окно + балконная дверь", glass: "двухкамерный 40 мм", furniture: "белая", price: "от 710 BYN", featured: false },
  ],
};

const portfolioItems = [
  { img: workWindowOpen, title: "Установка окон в загородном доме" },
  { img: workWindowTrees, title: "Окна с видом на сад" },
  { img: workHouseExterior, title: "Остекление частного дома" },
  { img: workDoorBrown, title: "Входная дверь ПВХ" },
  { img: workDoorGlass, title: "Дверь со стеклопакетом" },
  { img: workWindowFireplace, title: "Окна в интерьере" },
];

const PricingWindowSVG = ({ type }: { type: "single" | "double" | "triple" | "balcony" }) => {
  const s = "#BDBAB4";
  const sw = 1.5;
  const glass = "rgba(219,234,254,0.25)";

  if (type === "single") return (
    <svg width="180" height="160" viewBox="0 0 180 160">
      <rect x="10" y="10" width="160" height="140" rx="2" fill="none" stroke={s} strokeWidth={sw + 0.5} />
      <rect x="16" y="16" width="148" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* handle */}
      <line x1="145" y1="72" x2="145" y2="88" stroke={s} strokeWidth={2} strokeLinecap="round" />
      {/* tilt-turn arrow */}
      <path d="M90,130 L90,22 M86,28 L90,18 L94,28" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
      <path d="M22,80 L158,80 M152,76 L162,80 L152,84" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
    </svg>
  );

  if (type === "double") return (
    <svg width="180" height="160" viewBox="0 0 180 160">
      <rect x="10" y="10" width="160" height="140" rx="2" fill="none" stroke={s} strokeWidth={sw + 0.5} />
      {/* left pane - fixed */}
      <rect x="16" y="16" width="71" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* right pane - tilt-turn */}
      <rect x="93" y="16" width="71" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* handle right pane */}
      <line x1="100" y1="72" x2="100" y2="88" stroke={s} strokeWidth={2} strokeLinecap="round" />
      {/* tilt-turn arrows on right */}
      <path d="M128,130 L128,22 M124,28 L128,18 L132,28" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
      <path d="M99,80 L158,80 M152,76 L162,80 L152,84" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
    </svg>
  );

  if (type === "triple") return (
    <svg width="180" height="160" viewBox="0 0 220 160">
      <rect x="10" y="10" width="200" height="140" rx="2" fill="none" stroke={s} strokeWidth={sw + 0.5} />
      {/* left - fixed */}
      <rect x="16" y="16" width="58" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* center - fixed */}
      <rect x="80" y="16" width="58" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* right - tilt-turn */}
      <rect x="144" y="16" width="58" height="128" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* handle */}
      <line x1="152" y1="72" x2="152" y2="88" stroke={s} strokeWidth={2} strokeLinecap="round" />
      {/* tilt-turn arrows */}
      <path d="M173,130 L173,22 M169,28 L173,18 L177,28" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
      <path d="M150,80 L198,80 M192,76 L202,80 L192,84" stroke={s} strokeWidth={1} fill="none" strokeLinecap="round" />
    </svg>
  );

  // balcony block
  return (
    <svg width="180" height="160" viewBox="0 0 180 180">
      {/* window frame left (2/5) */}
      <rect x="10" y="10" width="64" height="160" rx="2" fill="none" stroke={s} strokeWidth={sw + 0.5} />
      <rect x="16" y="16" width="52" height="148" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* door frame right (3/5) */}
      <rect x="80" y="10" width="90" height="160" rx="2" fill="none" stroke={s} strokeWidth={sw + 0.5} />
      {/* door glass top */}
      <rect x="86" y="16" width="78" height="92" rx="1" fill={glass} stroke={s} strokeWidth={sw} />
      {/* door panel bottom */}
      <rect x="86" y="114" width="78" height="50" rx="1" fill="rgba(189,186,180,0.12)" stroke={s} strokeWidth={sw} />
      {/* door handle */}
      <line x1="93" y1="90" x2="93" y2="106" stroke={s} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};


  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ type: "windows", width: "", height: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [showCalcPhone, setShowCalcPhone] = useState(false);
  const [calcPhone, setCalcPhone] = useState("");
  const [certModal, setCertModal] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState("novotex58");

  const currentPricing = pricingByProfile[selectedProfile];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - lighter warm feel */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)" }} />
        </div>
        <div className="container mx-auto section-padding relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <SectionLabel>Окна Марвико</SectionLabel>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-display mb-6 text-foreground">
                Свет и тепло<br />вашего дома
              </h1>
              <p className="text-lg mb-8 text-body text-muted-foreground">
                Производство и установка окон, дверей и балконов в Червене и Минской области. Работаем с 2007 года. Гарантия 10 лет.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+375295677756" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                  Позвонить нам
                </a>
                <Link to="/portfolio" className="px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 border-[1.5px] border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Наши работы
                </Link>
              </div>
            </motion.div>

            {/* Quick calc form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-xl p-6 sm:p-8 bg-card border border-border card-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Быстрый расчёт стоимости</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm mb-1.5 block text-muted-foreground">Тип конструкции</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  >
                    <option value="windows">Окна ПВХ</option>
                    <option value="balconies">Остекление балкона</option>
                    <option value="doors">Двери ПВХ</option>
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

                <AnimatePresence>
                  {showCalcPhone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="text-sm mb-1.5 block text-muted-foreground">Ваш телефон для связи</label>
                      <input
                        type="tel"
                        placeholder="+375 29 XXX-XX-XX"
                        value={calcPhone}
                        onChange={(e) => setCalcPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                        maxLength={20}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => {
                    if (!showCalcPhone) {
                      setShowCalcPhone(true);
                    } else {
                      // Submit form
                      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
                      setShowCalcPhone(false);
                      setCalcPhone("");
                      setFormData({ type: "windows", width: "", height: "" });
                    }
                  }}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 mt-2"
                >
                  {showCalcPhone ? "Отправить заявку" : "Рассчитать"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - mosokna style grid cards with icons */}
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
                  className="block rounded-xl overflow-hidden bg-card border border-border hover:border-primary card-shadow hover:card-shadow-hover transition-all duration-300 group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="w-full h-40 rounded-lg overflow-hidden mb-5 bg-muted">
                      <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground text-body mb-4 flex-1">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-lg">{cat.price}</span>
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
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Преимущества</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Почему выбирают Марвико</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Цены</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">Цены на наши окна</h2>
            <p className="text-muted-foreground text-body mb-8 max-w-xl">Стоимость окон ПВХ с монтажом. Выберите профильную систему для просмотра цен.</p>
          </AnimatedSection>

          {/* Profile selector */}
          <AnimatedSection delay={0.1}>
            <div className="mb-10">
              <p className="text-sm font-semibold text-foreground mb-3">Выберите профильную систему:</p>
              <div className="flex flex-wrap gap-2">
                {profileSystems.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProfile(p.id)}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border"
                    style={{
                      backgroundColor: selectedProfile === p.id ? "hsl(var(--primary))" : "white",
                      color: selectedProfile === p.id ? "white" : "#1C1C1C",
                      borderColor: selectedProfile === p.id ? "hsl(var(--primary))" : "#E2DDD5",
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentPricing.map((card, i) => (
              <AnimatedSection key={`${selectedProfile}-${card.type}`} delay={i * 0.08}>
                <div
                  className="rounded-xl flex flex-col bg-card relative transition-all duration-300 hover:shadow-lg"
                  style={{ border: card.featured ? "2px solid hsl(var(--primary))" : "1px solid #E2DDD5" }}
                >
                  {card.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full z-10"
                      style={{ backgroundColor: "hsl(var(--primary))", color: "white" }}
                    >
                      Популярный
                    </div>
                  )}

                  {/* SVG Window illustration */}
                  <div className="flex items-center justify-center py-6 px-4">
                    <PricingWindowSVG type={card.type} />
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
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-primary-foreground/50 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="+375 29 XXX-XX-XX"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-primary-foreground/50 focus:outline-none"
                />
                <button className="w-full bg-primary-foreground text-primary py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Заказать звонок
                </button>
              </div>
            </div>
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

      {/* Portfolio preview - real work photos */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
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
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "rgba(217,79,30,0.70)" }}>
                    <Eye className="w-8 h-8 text-primary-foreground mb-2" />
                    <span className="text-primary-foreground text-sm font-semibold text-center px-3">{item.title}</span>
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

      {/* Certificates - subtle section */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Сертификаты и документы</h3>
            </div>
          </AnimatedSection>
          <div className="flex flex-wrap gap-4">
            {[
              { img: certSpk1, title: "Свидетельство о технической компетентности" },
              { img: certSpk2, title: "Область технической компетентности" },
            ].map((cert, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <button
                  onClick={() => setCertModal(cert.img)}
                  className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border hover:border-primary transition-colors card-shadow group"
                >
                  <img src={cert.img} alt={cert.title} className="w-12 h-16 object-cover rounded border border-border" />
                  <div className="text-left">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">Нажмите для просмотра</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
            <div className="flex flex-wrap gap-2 items-center ml-4">
              {["ISO 9001", "СТБ 1108-2017", "С 2007 года"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div>
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

      {/* FAQ + Contact Form */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
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

            {/* Contact Form */}
            <div>
              <AnimatedSection>
                <SectionLabel>Напишите нам</SectionLabel>
                <h2 className="text-3xl sm:text-4xl text-display mb-4">Остались вопросы?</h2>
                <p className="text-muted-foreground text-body mb-8">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="bg-card rounded-xl p-6 sm:p-8 card-shadow">
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                      <input
                        type="text"
                        placeholder="Иван Иванов"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                      <input
                        type="tel"
                        placeholder="+375 29 XXX-XX-XX"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Сообщение</label>
                      <textarea
                        placeholder="Опишите ваш вопрос или пожелания..."
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        maxLength={1000}
                      />
                    </div>
                    <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Отправить сообщение
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Телефон", value: "+375 (29) 567-77-56", href: "tel:+375295677756" },
              { icon: <Send className="w-6 h-6" />, title: "Viber / Telegram", value: "+375 (29) 567-77-56", href: "https://t.me/+375295677756" },
              { icon: <MapPin className="w-6 h-6" />, title: "Офис", value: "г. Червень, пл. Свободы, 32, к. 206", href: undefined },
              { icon: <MapPin className="w-6 h-6" />, title: "Производство", value: "г. Червень, ул. Ленинская, 49", href: undefined },
            ].map((contact, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 text-center border border-border hover:border-primary">
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
