import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark-section">
      <div className="container mx-auto section-padding py-16">
        {/* Certificates */}
        <div className="mb-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 className="text-lg font-bold mb-6">Сертификаты и гарантии</h3>
          <div className="flex flex-wrap gap-3">
            {["ISO 9001", "СТБ 1108-98", "Гарантия 10 лет", "УНП 690603009", "С 2007 года"].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ border: "1px solid rgba(217,79,30,0.4)", color: "hsl(var(--accent))" }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-primary-foreground font-extrabold text-lg" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
                М
              </div>
              <span className="text-xl font-bold tracking-tight">Марвико</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              ООО «Марвико». Производство и установка окон, дверей и балконов. Работаем с 2007 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/windows", label: "Окна ПВХ" },
                { to: "/balconies", label: "Остекление балконов" },
                { to: "/doors", label: "Двери ПВХ" },
                { to: "/portfolio", label: "Наши работы" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+375295677756" className="flex items-center gap-2.5 text-sm text-primary">
                <Phone className="w-4 h-4" />
                +375 (29) 567-77-56
              </a>
              <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                Viber / Telegram: +375 (29) 567-77-56
              </p>
              <a href="https://www.instagram.com/okna_dveri_marviko" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                @okna_dveri_marviko
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Офис: г. Червень, пл. Свободы, 32, к. 206</p>
                  <p className="mt-1">Производство: г. Червень, ул. Ленинская, 49</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="font-bold mb-4">Режим работы</h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>Пн–Пт: 9:00 — 17:00</p>
              <p>Сб–Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "hsl(var(--muted-foreground))" }}>
          © {new Date().getFullYear()} ООО «Марвико», УНП 690603009. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
