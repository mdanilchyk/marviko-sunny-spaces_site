import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp, Star, ChevronDown, Eye, ArrowRight, Phone, MapPin, Send, FileText, PhoneCall, ChevronLeft, ChevronRight, CreditCard, CalendarDays, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection, { ParallaxImage } from "@/components/AnimatedSection";


import heroImg from "@/assets/hero-interior.jpg";
import serviceWindows from "@/assets/window-work-1.jpg";
import serviceBalconies from "@/assets/service-balconies.jpg";
import serviceDoors from "@/assets/service-doors-hero.jpg";
import servicePartitions from "@/assets/partitions-real-1.jpg";
import serviceWindowsills from "@/assets/windowsill-real-1.jpg";
import serviceWindowWork from "@/assets/service-objects.jpg";

import workHouseExterior from "@/assets/work-house-exterior.jpg";
import workWindowsillGreen from "@/assets/work-windowsill-green.jpg";
import workDoorBlinds from "@/assets/work-door-blinds.jpg";
import workShopWindows from "@/assets/work-shop-windows.jpg";
import workShopDoor from "@/assets/work-shop-door.jpg";
import workFireplaceDoor from "@/assets/work-fireplace-door.jpg";

import certSpk1 from "@/assets/cert-spk-1.jpg";
import certSpk2 from "@/assets/cert-spk-2.jpg";
import svidetelstvoImg from "@/assets/cert-svidetelstvo.jpg";
import isoImg from "@/assets/cert-iso-9001.jpg";

import reviewEkaterina from "@/assets/review-ekaterina.jpg";
import reviewNatalia from "@/assets/review-natalia.jpg";
import reviewBobrovich from "@/assets/review-bobrovich.jpg";
import reviewRentalTrade from "@/assets/review-rental-trade.jpg";


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
  {
    title: "Перегородки ПВХ",
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
  {
    type: "messenger" as const,
    name: "Екатерина",
    date: "10 окт. 2025",
    text: "Спасибо вашему мастеру за окна — работа огонь! Очень красиво всё сделал. Ему надо отдельно от зарплаты хорошую премию выдавать — один сделал такую работу, благодарность надо писать!",
    rating: 5,
    screenshot: reviewEkaterina,
  },
  {
    type: "messenger" as const,
    name: "Наталия Дубовик",
    date: "вчера",
    text: "Хочу сказать Вашей команде большое спасибо — как классно Вы работаете, как всё чётко и красиво. Когда звонишь — очень приятно разговаривать, всегда всё объясните, расскажете, поможете, не завышаете цены. Спасибо Вам огромное!",
    rating: 5,
    screenshot: reviewNatalia,
  },
  {
    type: "messenger" as const,
    name: "Боброви С",
    date: "",
    text: "Долго выбирала, где заказать окна и двери, чтобы цена и качество соответствовали запросам. Выбрала ООО «Марвико» и не прогадала! Очень довольна результатом. Окна и двери отличные, проверены временем. Спасибо за профессионализм и слаженную работу. Рекомендую тем, кто сомневается в выборе.",
    rating: 5,
    screenshot: reviewBobrovich,
  },
  {
    type: "official" as const,
    name: "ООО «Рентал Трейд»",
    position: "Директор Н.В. Кривоносова",
    date: "февраль 2026",
    text: "Обратились с заявкой об установке двери ПВХ. Хотим выразить благодарность за дверь и за её качественный монтаж. Дверь установлена идеально и быстро, отлично выглядит, очень хорошо вписалась в наш интерьер.",
    rating: 5,
    screenshot: reviewRentalTrade,
  },
];

const faqData = [
  { q: "Какие профили вы используете?", a: "Мы работаем с проверенными профильными системами. Все профили сертифицированы и адаптированы для климата Беларуси." },
  { q: "Сколько времени занимает установка?", a: "Стандартная установка окна занимает от 2 до 4 часов. Остекление балкона — 1 рабочий день." },
  { q: "Есть ли гарантия?", a: "Да, мы предоставляем гарантию 10 лет на профиль, 5 лет на монтажные работы и фурнитуру." },
  { q: "Вы работаете за пределами Червеня?", a: "Да, мы выполняем заказы по всей Минской области и за её пределами. Выезд замерщика бесплатный." },
  { q: "Можно ли установить окна зимой?", a: "Да, современные технологии монтажа позволяют устанавливать окна при температуре до -15°C." },
  { q: "Занимаетесь ли вы остеклением частных домов и дач?", a: "Да, мы предлагаем остекление для загородных домов, коттеджей, дачных домов. Готовы выполнить остекление балкона, веранды или террасы. У нас вы можете заказать остекление для беседки или теплицы. Предлагаем холодное и теплое остекление — в зависимости от ваших потребностей." },
  { q: "Ваша специализация — исключительно пластиковые окна?", a: "Нет, мы готовы предложить своим клиентам широкий спектр услуг. Мы устанавливаем пластиковые окна и балконные двери, предлагаем зонирование пространства с помощью межкомнатных перегородок. Также мы выполняем работы по утеплению и отделке балконов. В качестве дополнения вы можете выбрать стильные откосы, ламинацию оконного профиля, необычный подоконник — эти детали помогут органично вписать окна в любой интерьер. Рулонные шторы или жалюзи помогут укрыться от яркого солнца, а москитная сетка — от докучливых насекомых." },
];

const accessories = [
  { emoji: "🦟", title: "Москитные сетки", desc: "Внутренние и наружные. Изготавливаем под размер вашего окна" },
  { emoji: "🔧", title: "Ручки и замки", desc: "Замена и установка ручек, замков, фурнитуры" },
  { emoji: "🪟", title: "Стеклопакеты", desc: "Замена стеклопакетов без демонтажа рамы" },
  { emoji: "🔒", title: "Детские замки", desc: "Защита от открывания ребёнком. Устанавливается на любое окно" },
  { emoji: "🏠", title: "Отливы и доборы", desc: "Отливы и доборные элементы для кровель из оцинкованной стали" },
  { emoji: "📏", title: "Подоконники", desc: "Стандартные и премиум подоконники. Глянцевые, матовые, под камень и дерево" },
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
  { img: workShopWindows, title: "Остекление коммерческого объекта" },
  { img: workFireplaceDoor, title: "Окна в интерьере с камином" },
  { img: workHouseExterior, title: "Остекление частного дома" },
  { img: workDoorBlinds, title: "Дверь ПВХ со встроенными жалюзи" },
  { img: workShopDoor, title: "Входная группа магазина" },
  { img: workWindowsillGreen, title: "Подоконник с видом на природу" },
];

const PricingWindowSVG = ({ type }: { type: "single" | "double" | "triple" | "balcony" }) => {
  const frameStroke = "#BDBAB4";
  const impostFill = "#BDBAB4";
  const glassStroke = "#BDBAB4";

  const glassDef = (id: string) => (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#87CEEB" />
        <stop offset="100%" stopColor="#E8F4F8" />
      </linearGradient>
    </defs>
  );

  const hinges = (x: number, y: number, h: number, count = 3) => {
    const items = [];
    const sp = h / (count + 1);
    for (let i = 1; i <= count; i++) items.push(<rect key={i} x={x} y={y + sp * i - 4} width={4} height={8} fill="#C8C8C8" stroke="#AAAAAA" strokeWidth={0.5} rx={1} />);
    return items;
  };
  const handle = (x: number, cy: number) => <rect x={x} y={cy - 7} width={4} height={14} fill="#BBBBBB" stroke="#999" strokeWidth={0.5} rx={1} />;
  const diags = (side: "left" | "right", sx: number, sy: number, sw: number, sh: number) => {
    if (side === "left") return <g opacity={0.7}><line x1={sx} y1={sy + sh} x2={sx + sw} y2={sy} stroke="#AAAAAA" strokeWidth={0.8} /><line x1={sx} y1={sy} x2={sx + sw} y2={sy + sh / 2} stroke="#AAAAAA" strokeWidth={0.8} /></g>;
    return <g opacity={0.7}><line x1={sx + sw} y1={sy + sh} x2={sx} y2={sy} stroke="#AAAAAA" strokeWidth={0.8} /><line x1={sx + sw} y1={sy} x2={sx} y2={sy + sh / 2} stroke="#AAAAAA" strokeWidth={0.8} /></g>;
  };

  if (type === "single") {
    const vw = 100, vh = 130, pad = 6, gx = 10, gy = 10, gw = 80, gh = 110;
    return (
      <svg width="140" height="180" viewBox={`0 0 ${vw} ${vh}`}>
        {glassDef("gs")}
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill="white" stroke={frameStroke} strokeWidth={2} />
        <rect x={gx} y={gy} width={gw} height={gh} rx={1} fill="url(#gs)" stroke={glassStroke} strokeWidth={1} />
        {hinges(gx + gw - 2, gy, gh, 3)}
        {handle(gx + 1, gy + gh / 2)}
        {diags("right", gx, gy, gw, gh)}
      </svg>
    );
  }

  if (type === "double") {
    const vw = 160, vh = 130, pad = 6, impW = 3;
    const ix = pad + 4, iy = pad + 4, tw = vw - 2 * pad - 8, gh = vh - 2 * pad - 8, hw = (tw - impW) / 2;
    const rx = ix + hw + impW;
    return (
      <svg width="180" height="160" viewBox={`0 0 ${vw} ${vh}`}>
        {glassDef("gd")}
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill="white" stroke={frameStroke} strokeWidth={2} />
        <rect x={ix} y={iy} width={hw} height={gh} rx={1} fill="url(#gd)" stroke={glassStroke} strokeWidth={1} />
        <rect x={ix + hw} y={pad} width={impW} height={vh - 2 * pad} fill={impostFill} />
        <rect x={rx} y={iy} width={hw} height={gh} rx={1} fill="url(#gd)" stroke={glassStroke} strokeWidth={1} />
        {hinges(ix, iy, gh, 3)}
        {handle(ix + hw - 5, iy + gh / 2)}
        {diags("left", ix, iy, hw, gh)}
      </svg>
    );
  }

  if (type === "triple") {
    const vw = 220, vh = 130, pad = 6, impW = 3;
    const ix = pad + 4, iy = pad + 4, tw = vw - 2 * pad - 8, gh = vh - 2 * pad - 8, thW = (tw - 2 * impW) / 3;
    const cx = ix + thW + impW, rx = ix + 2 * (thW + impW);
    return (
      <svg width="180" height="160" viewBox={`0 0 ${vw} ${vh}`}>
        {glassDef("gt")}
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill="white" stroke={frameStroke} strokeWidth={2} />
        <rect x={ix} y={iy} width={thW} height={gh} rx={1} fill="url(#gt)" stroke={glassStroke} strokeWidth={1} />
        <rect x={ix + thW} y={pad} width={impW} height={vh - 2 * pad} fill={impostFill} />
        <rect x={cx} y={iy} width={thW} height={gh} rx={1} fill="url(#gt)" stroke={glassStroke} strokeWidth={1} />
        <rect x={cx + thW} y={pad} width={impW} height={vh - 2 * pad} fill={impostFill} />
        <rect x={rx} y={iy} width={thW} height={gh} rx={1} fill="url(#gt)" stroke={glassStroke} strokeWidth={1} />
        {hinges(cx, iy, gh, 3)}
        {handle(cx + thW - 5, iy + gh / 2)}
        {diags("left", cx, iy, thW, gh)}
      </svg>
    );
  }

  // balcony
  const vw = 180, vh = 180, pad = 6, impW = 3, frmH = 4;
  const ix = pad + 4, iy = pad + 4, tw = vw - 2 * pad - 8, th = vh - 2 * pad - 8;
  const dw = tw * 0.45, ww = tw - dw - impW;
  const dtH = th * (2 / 3) - frmH / 2, dbH = th * (1 / 3) - frmH / 2;
  const wx = ix + dw + impW;
  return (
    <svg width="180" height="160" viewBox={`0 0 ${vw} ${vh}`}>
      {glassDef("gb")}
      <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill="white" stroke={frameStroke} strokeWidth={2} />
      <rect x={ix} y={iy} width={dw} height={dtH} rx={1} fill="url(#gb)" stroke={glassStroke} strokeWidth={1} />
      <rect x={ix} y={iy + dtH} width={dw} height={frmH} fill={impostFill} />
      <rect x={ix} y={iy + dtH + frmH} width={dw} height={dbH} rx={1} fill="url(#gb)" stroke={glassStroke} strokeWidth={1} />
      <rect x={ix + dw} y={pad} width={impW} height={vh - 2 * pad} fill={impostFill} />
      <rect x={wx} y={iy} width={ww} height={th} rx={1} fill="url(#gb)" stroke={glassStroke} strokeWidth={1} />
      {hinges(ix, iy, dtH, 3)}
      {handle(ix + dw - 5, iy + dtH / 2)}
      {diags("left", ix, iy, dw, dtH)}
      {hinges(ix, iy + dtH + frmH, dbH, 2)}
      {handle(ix + dw - 5, iy + dtH + frmH + dbH / 2)}
      {diags("left", ix, iy + dtH + frmH, dw, dbH)}
    </svg>
  );
};

const sendFormEmail = async (subject: string, data: Record<string, string>) => {
  try {
    await fetch("https://formsubmit.co/ajax/vladdani777@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    return true;
  } catch {
    return false;
  }
};

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ type: "windows", width: "", height: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", question: "" });
  const [contactErrors, setContactErrors] = useState({ name: false, phone: false, question: false });
  const [showCalcPhone, setShowCalcPhone] = useState(false);
  const [calcPhone, setCalcPhone] = useState("");
  const [certModal, setCertModal] = useState<string | null>(null);
  const [certIndex, setCertIndex] = useState(0);
  const [orderModal, setOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "" });
  const [orderErrors, setOrderErrors] = useState({ name: false, phone: false });
  const [formSubmitted, setFormSubmitted] = useState({ contact: false, order: false });
  const [orderSending, setOrderSending] = useState(false);
  const [portfolioLightbox, setPortfolioLightbox] = useState<number | null>(null);
  const [ctaForm, setCtaForm] = useState({ name: "", phone: "" });
  const [ctaErrors, setCtaErrors] = useState({ name: false, phone: false });
  const [ctaSending, setCtaSending] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [reviewModal, setReviewModal] = useState<string | null>(null);
  const certImages = [
    { img: certSpk1, title: "Свидетельство о технической компетентности" },
    { img: certSpk2, title: "Область технической компетентности" },
    
    { img: isoImg, title: "Сертификат соответствия СТБ ISO 9001-2015 (действителен до 14.05.2026)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOrderClick={() => setOrderModal(true)} />

      {/* Hero - lighter warm feel */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />
        </div>
        <div className="container mx-auto section-padding relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <SectionLabel>Окна Марвико</SectionLabel>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
                Уют начинается<br />с правильных окон
              </h1>
              <p className="text-lg mb-8 text-body text-muted-foreground">
                Производим и устанавливаем окна, двери и балконы с 2007 года. Бесплатный замер, профессиональный монтаж, гарантия 10 лет.
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
                      sendFormEmail("Расчёт стоимости — сайт Марвико", {
                        "Тип": formData.type,
                        "Ширина": formData.width || "не указана",
                        "Высота": formData.height || "не указана",
                        "Телефон": calcPhone,
                      });
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
          <AnimatedSection variant="fade-left">
            <SectionLabel>Продукция</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Наши услуги</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.12} variant="scale">
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
            <p className="text-muted-foreground text-body mb-10 max-w-xl">Стоимость окон ПВХ с монтажом для профиля Novotex Techno 58.</p>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingByProfile.novotex58.map((card, i) => (
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
                      placeholder="+375 29 XXX-XX-XX"
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
                      await sendFormEmail("Консультация с сайта Марвико", { "Имя": ctaForm.name, "Телефон": ctaForm.phone });
                      setCtaSending(false);
                      setCtaSubmitted(true);
                      setCtaForm({ name: "", phone: "" });
                    }}
                    className="w-full bg-primary-foreground text-primary py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {ctaSending ? (<><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>Отправка...</>) : (<><Phone className="w-4 h-4" />Заказать звонок</>)}
                  </button>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} variant="scale">
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
            <SectionLabel>Отзывы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Что говорят клиенты</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1} variant="fade-right">
                <button
                  onClick={() => setReviewModal(review.screenshot)}
                  className="text-left w-full h-full"
                >
                  {review.type === "messenger" ? (
                    <div className="bg-muted rounded-2xl rounded-tl-sm p-5 relative h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
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
                    <div className="bg-card rounded-xl p-5 border-2 border-primary h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
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
                        <p className="text-xs text-muted-foreground mt-3">{review.date}</p>
                      )}
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Показать оригинал
                      </p>
                    </div>
                  )}
                </button>
              </AnimatedSection>
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
                  to={item.title === "Подоконники" ? "/windowsills" : "#"}
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

            {/* Contact Form - mosokna style */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl text-display mb-2">Возникли вопросы?</h2>
                <p className="text-muted-foreground text-body mb-8">
                  Напишите, и наши специалисты подробно ответят вам в удобной форме.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                {formSubmitted.contact ? (
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
                          placeholder="+375 29 XXX-XX-XX"
                          value={contactForm.phone}
                          onChange={(e) => { setContactForm({ ...contactForm, phone: e.target.value }); setContactErrors({ ...contactErrors, phone: false }); }}
                          className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${contactErrors.phone ? 'border-destructive' : 'border-border focus:border-primary'}`}
                          maxLength={20}
                        />
                      </div>
                      <button
                        onClick={() => {
                          const errors = {
                            question: !contactForm.question.trim(),
                            name: !contactForm.name.trim(),
                            phone: !contactForm.phone.trim(),
                          };
                          setContactErrors(errors);
                          if (errors.question || errors.name || errors.phone) return;
                          sendFormEmail("Вопрос с сайта Марвико", {
                            "Вопрос": contactForm.question,
                            "Имя": contactForm.name,
                            "Телефон": contactForm.phone,
                          });
                          setFormSubmitted({ ...formSubmitted, contact: true });
                          setContactForm({ name: "", phone: "", question: "" });
                        }}
                        className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground transition-colors duration-200"
                        style={{ backgroundColor: "hsl(var(--primary))" }}
                      >
                        Отправить
                      </button>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-right">
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

      <Footer />

      {/* Order Modal */}
      <AnimatePresence>
        {orderModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => { if (!orderSending) setOrderModal(false); }} />
            <motion.div
              className="relative bg-card rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-border"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {formSubmitted.order ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-primary mx-auto mb-4">
                    <Send className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-sm text-muted-foreground mb-6">Наш менеджер свяжется с вами в течение 15 минут.</p>
                  <button
                    onClick={() => { setOrderModal(false); setFormSubmitted({ ...formSubmitted, order: false }); }}
                    className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-border hover:bg-muted transition-colors"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setOrderModal(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none"
                  >
                    ×
                  </button>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Заказать звонок</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Нет времени или возможности позвонить? Оставьте свой номер телефона и наш менеджер свяжется с вами в течение 15 минут.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="* Ваше имя"
                        value={orderForm.name}
                        onChange={(e) => { setOrderForm({ ...orderForm, name: e.target.value }); setOrderErrors({ ...orderErrors, name: false }); }}
                        className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors placeholder:text-muted-foreground ${orderErrors.name ? 'border-destructive' : 'border-border focus:border-primary'}`}
                        disabled={orderSending}
                      />
                      {orderErrors.name && <p className="text-xs text-destructive mt-1">Пожалуйста, введите ваше имя</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="* Телефон"
                        value={orderForm.phone}
                        onChange={(e) => { setOrderForm({ ...orderForm, phone: e.target.value }); setOrderErrors({ ...orderErrors, phone: false }); }}
                        className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors placeholder:text-muted-foreground ${orderErrors.phone ? 'border-destructive' : 'border-border focus:border-primary'}`}
                        disabled={orderSending}
                      />
                      {orderErrors.phone && <p className="text-xs text-destructive mt-1">Пожалуйста, введите номер телефона</p>}
                    </div>
                    <button
                      disabled={orderSending}
                      onClick={async () => {
                        const errors = { name: !orderForm.name.trim(), phone: !orderForm.phone.trim() };
                        setOrderErrors(errors);
                        if (errors.name || errors.phone) return;
                        setOrderSending(true);
                        await sendFormEmail("Заказ звонка — сайт Марвико", {
                          "Имя": orderForm.name,
                          "Телефон": orderForm.phone,
                        });
                        setOrderSending(false);
                        setFormSubmitted({ ...formSubmitted, order: true });
                        setOrderForm({ name: "", phone: "" });
                        setOrderErrors({ name: false, phone: false });
                      }}
                      className="w-full py-3.5 rounded-lg font-semibold text-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                      style={{ backgroundColor: "#C8441A" }}
                      onMouseEnter={(e) => { if (!orderSending) e.currentTarget.style.backgroundColor = "#A33515"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C8441A"; }}
                    >
                      {orderSending ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                          </svg>
                          Отправка...
                        </>
                      ) : (
                        "Заказать звонок"
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Или обратитесь к нам по телефону: <a href="tel:+375295677756" className="text-primary font-medium">+375 29 567-77-56</a>
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Lightbox */}
      <AnimatePresence>
        {portfolioLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            onClick={() => setPortfolioLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setPortfolioLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={portfolioItems[portfolioLightbox]?.img}
              alt={portfolioItems[portfolioLightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
