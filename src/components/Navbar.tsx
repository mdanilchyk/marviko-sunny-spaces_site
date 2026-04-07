import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/marviko-logo.png";

interface SubmenuItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "Окна ПВХ",
    href: "/windows",
    submenu: [
      { label: "Все окна ПВХ", href: "/windows", desc: "Полный каталог оконных конструкций" },
      { label: "Цены на окна", href: "/windows", desc: "Актуальный прайс-лист" },
    ],
  },


  {
    label: "Двери",
    href: "/doors",
    submenu: [
      { label: "Балконные двери ПВХ", href: "/doors", desc: "Окно в сочетании с дверью" },
      { label: "Входные двери", href: "/doors", desc: "Надёжная защита и теплоизоляция" },
      { label: "Раздвижные двери", href: "/doors", desc: "Наклонно-сдвижная фурнитура" },
      { label: "Алюминиевые двери", href: "/doors", desc: "Прочность и современный дизайн" },
    ],
  },
  {
    label: "Перегородки",
    href: "/partitions",
  },
  {
    label: "Подоконники",
    href: "/windowsills",
  },
  {
    label: "Наши работы",
    href: "/portfolio",
  },
];

interface NavbarProps {
  onOrderClick?: () => void;
}

const Navbar = ({ onOrderClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-foreground text-background text-xs">
        <div className="container mx-auto section-padding flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 opacity-60" />
              Пн–Пт 9:00–17:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/okna_dveri_marviko" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="tel:+375295677756" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3 h-3 opacity-60" />
              +375 (29) 567-77-56
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-card/95 backdrop-blur-md" style={{ boxShadow: "0 1px 0 0 hsl(var(--border))" }}>
        <div className="container mx-auto section-padding flex items-center justify-between h-[68px]">
          <Link to="/" className="flex items-center gap-2 shrink-0" style={{ background: 'none', border: 'none', boxShadow: 'none', margin: 0, padding: 0 }}>
            <img src={logo} alt="Марвико — окна, двери, балконы" className="h-[60px] w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/"
                  ? "text-primary bg-accent-light"
                  : "text-foreground hover:text-primary hover:bg-accent-light"
              }`}
            >
              Главная
            </Link>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    location.pathname === item.href
                      ? "text-primary bg-accent-light"
                      : "text-foreground hover:text-primary hover:bg-accent-light"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.submenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-card rounded-xl border border-border shadow-lg min-w-[280px] p-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="flex flex-col gap-0.5 px-3.5 py-2.5 rounded-lg hover:bg-accent-light transition-colors group"
                          >
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {sub.label}
                            </span>
                            {sub.desc && (
                              <span className="text-xs text-muted-foreground">{sub.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+375295677756" className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Phone className="w-4 h-4" />
              +375 (29) 567-77-56
            </a>
            <button
              onClick={onOrderClick}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200"
            >
              Заказать звонок
            </button>
          </div>

          <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="section-padding py-4 flex flex-col gap-1">
                <Link to="/" onClick={() => setMobileOpen(false)} className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === "/" ? "text-primary bg-accent-light" : "text-foreground"}`}>
                  Главная
                </Link>

                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center">
                      <Link to={item.href} onClick={() => setMobileOpen(false)} className={`flex-1 px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.href ? "text-primary bg-accent-light" : "text-foreground"}`}>
                        {item.label}
                      </Link>
                      {item.submenu && (
                        <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} className="p-3 text-muted-foreground">
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.submenu && mobileExpanded === item.label && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col gap-0.5">
                            {item.submenu.map((sub) => (
                              <Link key={sub.label} to={sub.href} onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-accent-light transition-colors">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="mt-3 pt-3 border-t border-border flex flex-col gap-3">
                  <a href="tel:+375295677756" className="flex items-center gap-2 text-primary font-semibold px-4">
                    <Phone className="w-4 h-4" />
                    +375 (29) 567-77-56
                  </a>
                  <button
                    onClick={() => { setMobileOpen(false); onOrderClick?.(); }}
                    className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold mx-4"
                  >
                    Заказать звонок
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
