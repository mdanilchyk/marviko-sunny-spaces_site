import { useState } from "react";
import { FORM_COPY, SITE } from "@/config/site";
import { FORM_SUBMIT_ERROR_MESSAGE, sendFormEmail } from "@/lib/formSubmit";
import { pushFormSubmissionSuccess, type GtmFormType } from "@/lib/gtm";

export type PriceCalcVariant = "pvh" | "alu" | "doors-pvh" | "doors-alu";
export type PriceCalcFormTheme = "default" | "on-gradient";

const WINDOW_VARIANT_OPTIONS: Record<"pvh" | "alu", { value: string; label: string }[]> = {
  pvh: [
    { value: "windows", label: "Окна ПВХ" },
    { value: "balconies", label: "Балкон из ПВХ" },
  ],
  alu: [
    { value: "alu-windows", label: "Алюминиевые окна" },
    { value: "alu-balconies", label: "Алюминиевые балконы" },
  ],
};

const DOORS_PRODUCT_LABEL: Record<"doors-pvh" | "doors-alu", string> = {
  "doors-pvh": "Двери ПВХ",
  "doors-alu": "Алюминиевые двери",
};

function isDoorsVariant(variant: PriceCalcVariant): variant is "doors-pvh" | "doors-alu" {
  return variant === "doors-pvh" || variant === "doors-alu";
}

interface PriceCalcFormProps {
  variant: PriceCalcVariant;
  className?: string;
  compact?: boolean;
  theme?: PriceCalcFormTheme;
  showTrustLine?: boolean;
  formType?: GtmFormType;
}

const PriceCalcForm = ({
  variant,
  className = "",
  compact = false,
  theme = "default",
  showTrustLine = false,
  formType = "price_calc",
}: PriceCalcFormProps) => {
  const onGradient = theme === "on-gradient";
  const doorsVariant = isDoorsVariant(variant);
  const windowOptions = doorsVariant ? null : WINDOW_VARIANT_OPTIONS[variant];
  const [formData, setFormData] = useState({
    type: windowOptions?.[0].value ?? "",
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

  const labelClass = (hasError: boolean) =>
    onGradient
      ? `text-sm mb-1.5 block ${hasError ? "text-red-300" : "text-primary-foreground/80"}`
      : `text-sm mb-1.5 block ${hasError ? "text-destructive" : "text-muted-foreground"}`;

  const fieldClass = (hasError = false) =>
    onGradient
      ? `w-full px-4 ${inputPy} rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/50 border focus:outline-none ${
          hasError ? "border-red-400" : "border-primary-foreground/20 focus:border-primary-foreground/50"
        }`
      : `w-full px-4 ${inputPy} rounded-lg bg-background text-foreground text-sm border focus:outline-none transition-colors placeholder:text-muted-foreground ${
          hasError ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
        }`;

  const resetForm = () => {
    setCalcPhone("");
    setCalcPhoneError(false);
    setFormData({ type: windowOptions?.[0].value ?? "", width: "", height: "" });
  };

  const shellClass = onGradient
    ? className
    : `rounded-xl ${padding} bg-card border border-border card-shadow text-foreground ${className}`;

  return (
    <div className={shellClass}>
      {!onGradient && <h3 className={`${titleClass} text-foreground`}>Быстрый расчёт стоимости</h3>}
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
            Тип: doorsVariant ? DOORS_PRODUCT_LABEL[variant] : formData.type,
            Ширина: formData.width || "не указана",
            Высота: formData.height || "не указана",
            Телефон: calcPhone,
          });
          setCalcSending(false);
          if (ok) {
            pushFormSubmissionSuccess(formType);
            resetForm();
          } else {
            setCalcSubmitError(true);
          }
        }}
      >
        {!doorsVariant && windowOptions && (
          <div>
            <label className={labelClass(false)}>Тип конструкции</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className={fieldClass()}
            >
              {windowOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass(false)}>Ширина, мм</label>
            <input
              type="number"
              placeholder="1400"
              value={formData.width}
              onChange={(e) => setFormData({ ...formData, width: e.target.value })}
              className={fieldClass()}
            />
          </div>
          <div>
            <label className={labelClass(false)}>Высота, мм</label>
            <input
              type="number"
              placeholder="1300"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className={fieldClass()}
            />
          </div>
        </div>

        <div>
          <label className={labelClass(calcPhoneError)}>* Ваш телефон для связи</label>
          <input
            type="tel"
            placeholder={SITE.phonePlaceholder}
            value={calcPhone}
            onChange={(e) => {
              setCalcPhone(e.target.value);
              setCalcPhoneError(false);
            }}
            className={fieldClass(calcPhoneError)}
            style={
              !onGradient && calcPhoneError
                ? { borderColor: "hsl(var(--destructive))", boxShadow: "0 0 0 1px hsl(var(--destructive))" }
                : undefined
            }
            maxLength={20}
            required
            aria-invalid={calcPhoneError}
            aria-describedby={calcPhoneError ? "calc-phone-error" : undefined}
          />
          {calcPhoneError && (
            <p
              id="calc-phone-error"
              className={`text-xs mt-1 ${onGradient ? "text-red-300" : ""}`}
              style={onGradient ? undefined : { color: "hsl(var(--destructive))" }}
            >
              Пожалуйста, введите номер телефона
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={calcSending}
          className={`w-full ${onGradient ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"} ${
            compact ? "py-3" : "py-3.5"
          } rounded-lg font-semibold hover:opacity-90 transition-all duration-200 mt-1 disabled:opacity-70`}
        >
          {calcSending ? "Отправка..." : doorsVariant ? "Рассчитать стоимость" : "Рассчитать"}
        </button>

        {showTrustLine && (
          <p className="text-xs sm:text-sm text-primary-foreground/80 text-center">{FORM_COPY.trustLine}</p>
        )}

        {calcSubmitError && (
          <p
            className={`text-xs text-center ${onGradient ? "text-red-300" : ""}`}
            style={onGradient ? undefined : { color: "hsl(var(--destructive))" }}
          >
            {FORM_SUBMIT_ERROR_MESSAGE}
          </p>
        )}
      </form>
    </div>
  );
};

export default PriceCalcForm;
