import { useState } from "react";
import { SITE } from "@/config/site";
import { FORM_SUBMIT_ERROR_MESSAGE, sendFormEmail } from "@/lib/formSubmit";
import { pushFormSubmissionSuccess } from "@/lib/gtm";

export type PriceCalcVariant = "pvh" | "alu";

const VARIANT_OPTIONS: Record<PriceCalcVariant, { value: string; label: string }[]> = {
  pvh: [
    { value: "windows", label: "Окна ПВХ" },
    { value: "balconies", label: "Балкон из ПВХ" },
  ],
  alu: [
    { value: "alu-windows", label: "Алюминиевые окна" },
    { value: "alu-balconies", label: "Алюминиевые балконы" },
  ],
};

interface PriceCalcFormProps {
  variant: PriceCalcVariant;
  className?: string;
  compact?: boolean;
}

const PriceCalcForm = ({ variant, className = "", compact = false }: PriceCalcFormProps) => {
  const options = VARIANT_OPTIONS[variant];
  const [formData, setFormData] = useState({
    type: options[0].value,
    width: "",
    height: "",
  });
  const [calcPhone, setCalcPhone] = useState("");
  const [calcPhoneError, setCalcPhoneError] = useState(false);
  const [calcSending, setCalcSending] = useState(false);
  const [calcSubmitError, setCalcSubmitError] = useState(false);

  const padding = compact ? "p-4 sm:p-6" : "p-6 sm:p-8";
  const titleClass = compact ? "text-lg sm:text-xl font-bold mb-3 sm:mb-4" : "text-xl font-bold mb-6";
  const fieldGap = compact ? "gap-2.5 sm:gap-3" : "gap-4";
  const inputPy = compact ? "py-2.5" : "py-3";

  const resetForm = () => {
    setCalcPhone("");
    setCalcPhoneError(false);
    setFormData({ type: options[0].value, width: "", height: "" });
  };

  return (
    <div className={`rounded-xl ${padding} bg-card border border-border card-shadow ${className}`}>
      <h3 className={`${titleClass} text-foreground`}>Быстрый расчёт стоимости</h3>
      <form
        className={`flex flex-col ${fieldGap}`}
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          if (!calcPhone.trim()) {
            setCalcPhoneError(true);
            return;
          }
          setCalcSending(true);
          setCalcSubmitError(false);
          const ok = await sendFormEmail("Расчёт стоимости — сайт Марвико", {
            "Тип": formData.type,
            "Ширина": formData.width || "не указана",
            "Высота": formData.height || "не указана",
            "Телефон": calcPhone,
          });
          setCalcSending(false);
          if (ok) {
            pushFormSubmissionSuccess("price_calc");
            resetForm();
          } else {
            setCalcSubmitError(true);
          }
        }}
      >
        <div>
          <label className="text-sm mb-1.5 block text-muted-foreground">Тип конструкции</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className={`w-full px-4 ${inputPy} rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors text-foreground`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm mb-1.5 block text-muted-foreground">Ширина, мм</label>
            <input
              type="number"
              placeholder="1400"
              value={formData.width}
              onChange={(e) => setFormData({ ...formData, width: e.target.value })}
              className={`w-full px-4 ${inputPy} rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground`}
            />
          </div>
          <div>
            <label className="text-sm mb-1.5 block text-muted-foreground">Высота, мм</label>
            <input
              type="number"
              placeholder="1300"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className={`w-full px-4 ${inputPy} rounded-lg bg-background text-sm border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground`}
            />
          </div>
        </div>

        <div>
          <label className={`text-sm mb-1.5 block ${calcPhoneError ? "text-destructive" : "text-muted-foreground"}`}>
            * Ваш телефон для связи
          </label>
          <input
            type="tel"
            placeholder={SITE.phonePlaceholder}
            value={calcPhone}
            onChange={(e) => {
              setCalcPhone(e.target.value);
              setCalcPhoneError(false);
            }}
            className={`w-full px-4 ${inputPy} rounded-lg bg-background text-sm border focus:outline-none transition-colors placeholder:text-muted-foreground ${calcPhoneError ? "" : "border-border focus:border-primary"}`}
            style={calcPhoneError ? { borderColor: "hsl(var(--destructive))", boxShadow: "0 0 0 1px hsl(var(--destructive))" } : undefined}
            maxLength={20}
            required
            aria-invalid={calcPhoneError}
            aria-describedby={calcPhoneError ? "calc-phone-error" : undefined}
          />
          {calcPhoneError && (
            <p id="calc-phone-error" className="text-xs mt-1" style={{ color: "hsl(var(--destructive))" }}>
              Пожалуйста, введите номер телефона
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={calcSending}
          className={`w-full bg-primary text-primary-foreground ${compact ? "py-3" : "py-3.5"} rounded-lg font-semibold hover:opacity-90 transition-all duration-200 mt-1 disabled:opacity-70`}
        >
          {calcSending ? "Отправка..." : "Рассчитать"}
        </button>
        {calcSubmitError && (
          <p className="text-xs text-center" style={{ color: "hsl(var(--destructive))" }}>
            {FORM_SUBMIT_ERROR_MESSAGE}
          </p>
        )}
      </form>
    </div>
  );
};

export default PriceCalcForm;
