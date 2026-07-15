import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FORM_COPY } from "@/config/site";

interface FormSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const FormSuccessModal = ({ open, onClose }: FormSuccessModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-success-title"
          className="relative w-full max-w-sm rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground/90 hover:bg-primary-foreground/15 transition-colors text-2xl leading-none"
          >
            ×
          </button>

          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
              <Send className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 id="form-success-title" className="text-xl font-bold mb-2 text-primary-foreground">
              Заявка отправлена!
            </h3>
            <p className="text-sm text-primary-foreground/85 mb-6">{FORM_COPY.followUp}</p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Закрыть
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default FormSuccessModal;
