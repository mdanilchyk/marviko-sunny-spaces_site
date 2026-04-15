import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import viberIcon from "@/assets/viber-icon.png";
import marvikoLogo from "@/assets/marviko-logo.png";

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467.376 4.936-.249 7.983.07 12.613c.32 4.63 1.86 8.003 5.664 9.396v2.775s-.053.89.56 1.073c.74.222 1.174-.48 1.882-1.246.388-.42.924-1.037 1.328-1.508 3.66.307 6.475-.396 6.797-.506.743-.252 4.944-.78 5.63-6.37.707-5.766-.342-9.414-2.262-11.064C18.253 3.973 14.267.052 11.398.002zm.498 1.988h.006c2.382.022 5.985 1.68 7.204 2.78 1.652 1.42 2.543 4.522 1.906 9.635-.588 4.794-4.04 5.243-4.688 5.463-.268.092-2.643.68-5.621.492l-2.838 3.04c-.36.39-.684.52-.903.46-.29-.08-.364-.4-.36-.86l.04-3.514c-3.287-1.142-3.065-4.694-3.065-4.694s-.004-2.848-.03-4.857c.004-4.27 1.248-6.7 3.458-8.403 1.26-.972 3.36-1.558 4.891-1.542zM16.437 7.6a.33.33 0 0 0-.206.096.33.33 0 0 0-.003.467c1.343 1.367 2.082 3.184 2.082 5.12a.33.33 0 0 0 .66 0c0-2.11-.806-4.091-2.27-5.581a.33.33 0 0 0-.263-.101zm-5.408.594c-.186-.017-.382.04-.61.158-.594.316-1.112.72-.962 1.392.007.03.016.058.027.085.335.681.747 1.325 1.23 1.912.64.8 1.397 1.51 2.254 2.084.585.413 1.18.75 1.91.873.02.004.042.005.063.006.457.036.898-.148 1.303-.591.25-.274.404-.572.37-.872.003-.298-.183-.552-.51-.746l-1.585-.936c-.36-.197-.746-.174-1.04.14l-.42.455c-.133.113-.275.13-.362.108a9.622 9.622 0 0 1-1.294-.922 9.622 9.622 0 0 1-.9-1.296c-.015-.046-.01-.153.122-.3l.462-.478c.27-.31.296-.662.091-1.034l-.467-.85-.467-.85c-.14-.253-.334-.427-.57-.491a.673.673 0 0 0-.197-.037zm4.245.81a.33.33 0 0 0-.325.342 3.55 3.55 0 0 0 .539 1.707c.324.397.763.684 1.255.814a.33.33 0 1 0 .18-.635 1.77 1.77 0 0 1-.957-.622 1.77 1.77 0 0 1-.41-1.068.33.33 0 0 0-.282-.538zm.868-.002a.33.33 0 0 0-.33.345c.06 1.155.834 2.115 1.946 2.418a.33.33 0 1 0 .178-.636c-.855-.232-1.45-.971-1.498-1.856a.33.33 0 0 0-.296-.271z" />
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
            <Link to="/" className="mb-5 inline-block">
              <img src={marvikoLogo} alt="Марвико" className="h-14" />
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
                { to: "/windows", label: "Окна" },
                { to: "/doors", label: "Двери" },
                { to: "/partitions", label: "Перегородки" },
                { to: "/windowsills", label: "Подоконники" },
                { to: "/accessories", label: "Аксессуары" },
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
                href="tel:+375296828568"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
              >
                <Phone className="w-4 h-4 shrink-0" />
                +375 (29) 682-85-68 (директор)
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
                <span>Пн–Суб: 09.00 — 17.00</span>
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
