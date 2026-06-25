import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/config/site";
import { TelegramIcon, ViberIcon } from "@/components/icons/MessengerIcons";

const SCROLL_THRESHOLD = 300;

const messengerLinks = [
  {
    href: SITE.viberHref,
    label: "Написать в Viber",
    Icon: ViberIcon,
    className:
      "bg-[#7360f2] text-white border-transparent shadow-[0_4px_14px_rgba(115,96,242,0.45)] hover:bg-[#5f4fd4] hover:shadow-[0_6px_18px_rgba(115,96,242,0.55)]",
  },
  {
    href: SITE.telegramHref,
    label: "Написать в Telegram",
    Icon: TelegramIcon,
    className:
      "bg-[#229ED9] text-white border-transparent shadow-[0_4px_14px_rgba(34,158,217,0.45)] hover:bg-[#1b8bc4] hover:shadow-[0_6px_18px_rgba(34,158,217,0.55)]",
  },
] as const;

const FloatingMessengerWidget = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-1.5 pointer-events-none"
          role="group"
          aria-label="Быстрый контакт в мессенджерах"
        >
          {messengerLinks.map(({ href, label, Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 ${className}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMessengerWidget;
