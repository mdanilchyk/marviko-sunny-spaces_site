import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  variant?: "gradient" | "warm" | "primary";
  children?: ReactNode;
}

const CtaBanner = ({
  title,
  description,
  buttonText,
  onClick,
  variant = "gradient",
  children,
}: CtaBannerProps) => {
  if (variant === "warm") {
    return (
      <section className="py-16" style={{ backgroundColor: "#FDF3EC" }}>
        <div className="container mx-auto section-padding text-center">
          <h2 className="text-2xl sm:text-3xl text-display mb-3" style={{ color: "#1C1C1C" }}>
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-body mb-8 max-w-xl mx-auto">{description}</p>
          )}
          {buttonText && onClick && (
            <button
              type="button"
              onClick={onClick}
              className="px-8 py-4 rounded-lg font-semibold text-white transition-colors duration-200 inline-flex items-center gap-2"
              style={{ backgroundColor: "#C8441A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#A33515";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C8441A";
              }}
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </button>
          )}
          {children}
        </div>
      </section>
    );
  }

  if (variant === "primary") {
    return (
      <section className="py-16 bg-primary">
        <div className="container mx-auto section-padding text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">{title}</h2>
          {description && <p className="text-primary-foreground/80 mb-6">{description}</p>}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
      <div className="container mx-auto section-padding">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl text-display text-primary-foreground">{title}</h2>
          {buttonText && onClick ? (
            <button
              type="button"
              onClick={onClick}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
