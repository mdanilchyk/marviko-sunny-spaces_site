import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import marvikoLogo from "@/assets/marviko-logo-white.svg";
import { SITE } from "@/config/site";
import { footerInfoLinks, footerProductLinks } from "@/data/navigation";
import { TelegramIcon, ViberIcon } from "@/components/icons/MessengerIcons";

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
            <Link to="/" className="mb-5 inline-block">
              <img src={marvikoLogo} alt="Марвико" className="h-24" />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 60%)" }}>
              ООО «Марвико». Производство и установка окон, дверей и балконов. Работаем с 2007 года.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={SITE.viberHref}
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
                href={SITE.telegramHref}
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
                href={SITE.instagramHref}
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
              {footerProductLinks.map((link) => (
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
              {footerInfoLinks.map((link) => (
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
            <address className="flex flex-col gap-4 not-italic">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Phone className="w-4 h-4 shrink-0" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.phoneDirectorTel}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Phone className="w-4 h-4 shrink-0" />
                {SITE.phoneDirectorLabel}
              </a>
              <a
                href={SITE.emailMailto}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Mail className="w-4 h-4 shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "hsl(0 0% 60%)" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>{SITE.addressOfficeLabeled}</p>
                  <p className="mt-1">{SITE.addressProductionLabeled}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 60%)" }}>
                <Clock className="w-4 h-4 shrink-0" />
                <span>{SITE.workingHours}</span>
              </div>
            </address>
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
