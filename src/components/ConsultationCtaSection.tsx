import { useState } from "react";
import { Phone, PhoneCall } from "lucide-react";
import { FORM_COPY, FORM_SUBJECTS, SITE } from "@/config/site";
import FormSuccessModal from "@/components/FormSuccessModal";
import { FORM_SUBMIT_ERROR_MESSAGE, sendFormEmail } from "@/lib/formSubmit";
import { pushFormSubmissionSuccess, type GtmFormType } from "@/lib/gtm";
import { formatPhoneInput, getPhoneValidationError } from "@/lib/phone";

interface ConsultationCtaSectionProps {
  formType?: GtmFormType;
}

const ConsultationCtaSection = ({ formType = "consultation" }: ConsultationCtaSectionProps) => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: false, phone: false });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async () => {
    const nextErrors = {
      name: !form.name.trim(),
      phone: Boolean(getPhoneValidationError(form.phone)),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) return;

    setSending(true);
    setSubmitError(false);
    const ok = await sendFormEmail(FORM_SUBJECTS.consultation, {
      Имя: form.name,
      Телефон: form.phone,
    });
    setSending(false);

    if (ok) {
      pushFormSubmissionSuccess(formType);
      setSubmitted(true);
      setForm({ name: "", phone: "" });
    } else {
      setSubmitError(true);
    }
  };

  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
      <FormSuccessModal open={submitted} onClose={() => setSubmitted(false)} />
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl text-display text-primary-foreground mb-4">
              Закажите бесплатную консультацию
            </h2>
            <p className="text-primary-foreground/80 text-body mb-6">
              Специалисты нашей компании ответят на все ваши вопросы и помогут подобрать оптимальное решение для вашего дома.
            </p>
            <div className="flex flex-wrap gap-6 text-primary-foreground/90 text-sm">
              <span className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5" /> Бесплатная консультация
              </span>
            </div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErrors({ ...errors, name: false });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border focus:outline-none ${errors.name ? "border-red-400" : "border-primary-foreground/20 focus:border-primary-foreground/50"}`}
                  disabled={sending}
                />
                {errors.name && <p className="text-xs text-red-300 mt-1">Пожалуйста, введите ваше имя</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={SITE.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: formatPhoneInput(e.target.value) });
                    setErrors({ ...errors, phone: false });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border focus:outline-none ${errors.phone ? "border-red-400" : "border-primary-foreground/20 focus:border-primary-foreground/50"}`}
                  disabled={sending}
                  maxLength={17}
                  inputMode="tel"
                />
                {errors.phone && (
                  <p className="text-xs text-red-300 mt-1">{getPhoneValidationError(form.phone) ?? "Пожалуйста, введите номер телефона"}</p>
                )}
              </div>
              <button
                type="button"
                disabled={sending}
                onClick={handleSubmit}
                className="w-full bg-primary-foreground text-primary py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="opacity-75"
                      />
                    </svg>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    Заказать звонок
                  </>
                )}
              </button>
              <p className="text-xs sm:text-sm text-primary-foreground/80 text-center">{FORM_COPY.trustLine}</p>
              {submitError && <p className="text-xs text-red-300 mt-2">{FORM_SUBMIT_ERROR_MESSAGE}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCtaSection;
