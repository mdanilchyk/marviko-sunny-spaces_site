import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";

const ViberIcon = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5" fill="currentColor">
    <path d="M24.3 3C20.8 3.1 13.6 3.6 10 6.8 5.8 10.6 5.1 16.2 5 24.8c-.1 8.6-.3 24.6 15 29.1h.1l-.1 6.6s-.1 1.9 1.1 2.3c1.5.5 2.4-1 3.9-2.7.8-1 2-2.3 2.9-3.3 8 .7 14.2-.9 14.9-1.1 1.6-.4 10.8-1.7 12.3-13.8 1.5-12.5-1-20.4-1-20.4S51.5 4 29.3 3h-.1zM25 7.8c0 0 14.2-.8 16.5 10.2 0 0 1.3 5 .2 13.2-1 7.5-6.7 8.3-7.6 8.6-.6.1-5.8 1.5-12 .7l-6.9 6.3c-.5.5-1 .7-1.4.6-.5-.2-.6-.8-.6-1.4l.1-7.4C7 35.6 7.4 22.1 7.6 16.2c.2-5.8 1.6-11 5.6-14.3C16.4 0 21.2 0 23.7 0L25 7.8zM32.4 24.4c0 0-.5-5.7-6.2-6.1v0c-.1 0-.1 0 0 0-5.5.4-6.3 5.3-6.3 5.3-.3 2.3.7 3.8 2.3 4.9l.2.1c.1.1.3.2.4.2.1.1.2.1.3.2.4.3.8.5 1.3.8.8.5 1.8.8 2.8.9h.3c1.1 0 2.1-.3 3-.9.5-.3.9-.7 1.3-1.2.3-.6.5-1.3.5-2 .1-.8 0-1.5-.1-2.2z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="dark-section">
      <div className="container mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-primary-foreground font-extrabold text-lg"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              >
                М
              </div>
              <span className="text-xl font-bold tracking-tight">Марвико</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 60%)" }}>
              ООО «Марвико». Производство и установка окон, дверей и балконов. Работаем с 2007 года.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="viber://chat?number=%2B375295677756"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#7360f2"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "hsl(0 0% 100% / 0.08)"; e.currentTarget.style.color = "hsl(0 0% 60%)"; }}
                title="Viber"
              >
                <ViberIcon />
              </a>
              <a
                href="https://t.me/+375295677756"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#229ED9"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "hsl(0 0% 100% / 0.08)"; e.currentTarget.style.color = "hsl(0 0% 60%)"; }}
                title="Telegram"
              >
                <TelegramIcon />
              </a>
              <a
                href="https://www.instagram.com/okna_dveri_marviko"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E4405F"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "hsl(0 0% 100% / 0.08)"; e.currentTarget.style.color = "hsl(0 0% 60%)"; }}
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "hsl(0 0% 80%)" }}>Продукция</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/windows", label: "Окна ПВХ" },
                { to: "/balconies", label: "Остекление балконов" },
                { to: "/doors", label: "Двери ПВХ" },
                { to: "/partitions", label: "Перегородки" },
                { to: "/windowsills", label: "Подоконники" },
                { to: "/portfolio", label: "Наши работы" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  style={{ color: "hsl(0 0% 60%)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "hsl(0 0% 80%)" }}>Информация</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/#pricing", label: "Калькулятор цен" },
                { to: "/#certificates", label: "Сертификаты" },
                { to: "/#faq", label: "Вопросы и ответы" },
              ].map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  style={{ color: "hsl(0 0% 60%)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "hsl(0 0% 80%)" }}>Контакты</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+375295677756"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Phone className="w-4 h-4 shrink-0" />
                +375 (29) 567-77-56
              </a>
              <a
                href="mailto:vladdani777@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Mail className="w-4 h-4 shrink-0" />
                vladdani777@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "hsl(0 0% 60%)" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Офис: г. Червень, пл. Свободы, 32, к. 206</p>
                  <p className="mt-1">Производство: г. Червень, ул. Ленинская, 49</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 60%)" }}>
                <Clock className="w-4 h-4 shrink-0" />
                <span>Пн–Пт: 9:00 — 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 50%)" }}
        >
          <p>© {new Date().getFullYear()} ООО «Марвико», УНП 690603009. Все права защищены.</p>
          <div className="flex flex-wrap gap-2">
            {["ISO 9001", "СТБ 1108-2017", "Гарантия 10 лет"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-md text-xs font-medium"
                style={{ border: "1px solid hsl(0 0% 100% / 0.1)", color: "hsl(0 0% 60%)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
