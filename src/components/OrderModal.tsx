import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sendFormEmail = async (subject: string, data: Record<string, string>) => {
  try {
    await fetch("https://formsubmit.co/ajax/Marviko2007@mail.ru", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    return true;
  } catch {
    return false;
  }
};

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  subject?: string;
  title?: string;
  buttonText?: string;
}

const OrderModal = ({ open, onClose, subject = "Заказ звонка — сайт Марвико", title = "Заказать звонок", buttonText = "Заказать звонок" }: OrderModalProps) => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: false, phone: false });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    if (!sending) {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60" onClick={handleClose} />
          <motion.div className="relative bg-card rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-border" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-primary mx-auto mb-4"><Send className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-sm text-muted-foreground mb-6">Наш менеджер свяжется с вами в течение 15 минут.</p>
                <button onClick={handleClose} className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-border hover:bg-muted transition-colors">Закрыть</button>
              </div>
            ) : (
              <>
                <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none">×</button>
                <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mb-6">Нет времени или возможности позвонить? Оставьте свой номер телефона и наш менеджер свяжется с вами в течение 15 минут.</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <input type="text" placeholder="* Ваше имя" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }} className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${errors.name ? 'border-destructive' : 'border-border focus:border-primary'}`} disabled={sending} />
                    {errors.name && <p className="text-xs text-destructive mt-1">Пожалуйста, введите ваше имя</p>}
                  </div>
                  <div>
                    <input type="tel" placeholder="* Телефон" value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }} className={`w-full px-4 py-3 rounded-lg bg-background text-sm border focus:outline-none transition-colors ${errors.phone ? 'border-destructive' : 'border-border focus:border-primary'}`} disabled={sending} />
                    {errors.phone && <p className="text-xs text-destructive mt-1">Пожалуйста, введите номер телефона</p>}
                  </div>
                  <button disabled={sending} onClick={async () => {
                    const errs = { name: !form.name.trim(), phone: !form.phone.trim() };
                    setErrors(errs);
                    if (errs.name || errs.phone) return;
                    setSending(true);
                    await sendFormEmail(subject, { "Имя": form.name, "Телефон": form.phone });
                    setSending(false);
                    setSubmitted(true);
                    setForm({ name: "", phone: "" });
                  }} className="w-full py-3.5 rounded-lg font-semibold text-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70" style={{ backgroundColor: "#C8441A" }} onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#A33515"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C8441A"; }}>
                    {sending ? (<><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>Отправка...</>) : buttonText}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Или обратитесь к нам по телефону: <a href="tel:+375295677756" className="text-primary font-medium">+375 29 567-77-56</a>
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
