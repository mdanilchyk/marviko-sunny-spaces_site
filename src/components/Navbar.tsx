import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/windows", label: "Окна ПВХ" },
  { href: "/balconies", label: "Балконы" },
  { href: "/doors", label: "Двери" },
  { href: "/portfolio", label: "Наши работы" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md" style={{ boxShadow: "0 0 0 1px hsl(var(--border))" }}>
      <div className="container mx-auto section-padding flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-primary-foreground font-extrabold text-lg" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
            М
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">Марвико</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-primary bg-accent-light"
                  : "text-foreground hover:text-primary hover:bg-accent-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+375291234567" className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Phone className="w-4 h-4" />
            +375 (29) 123-45-67
          </a>
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200" style={{ transition: "background 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
            Заказать звонок
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="section-padding py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-accent-light"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+375291234567" className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="w-4 h-4" />
                  +375 (29) 123-45-67
                </a>
                <button className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold">
                  Заказать звонок
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
