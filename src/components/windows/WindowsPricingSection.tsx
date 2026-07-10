import { Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import PricingWindowSVG from "@/components/PricingWindowSVG";
import { WINDOW_PROFILE_PRICING, formatWindowBlankPackage } from "@/data/pricing";

interface WindowsPricingSectionProps {
  onOrderClick: () => void;
}

const WindowsPricingSection = ({ onOrderClick }: WindowsPricingSectionProps) => (
  <section id="pricing" className="py-20 bg-background scroll-mt-24">
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <SectionLabel>Цены на окна</SectionLabel>
        <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите конфигурацию</h2>
      </AnimatedSection>

      <div className="flex flex-col gap-16">
        {WINDOW_PROFILE_PRICING.map((p, pi) => (
          <AnimatedSection key={pi} delay={pi * 0.1}>
            <div
              className="rounded-xl overflow-hidden border border-border"
              style={
                p.popular
                  ? {
                      borderColor: "hsl(var(--primary))",
                      boxShadow: "0 0 0 1px hsl(var(--primary)), 0 4px 20px rgba(217,79,30,0.1)",
                    }
                  : {}
              }
            >
              <div className="p-6 flex flex-wrap items-center gap-4 bg-card border-b border-border">
                <div className="flex gap-4 text-sm font-mono text-muted-foreground">
                  <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.chambers}</span>
                  <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.width}</span>
                  <span className="px-3 py-1 rounded-md bg-accent-light text-primary font-semibold">{p.glass}</span>
                </div>
                {p.popular && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full ml-auto">
                    Популярный
                  </span>
                )}
              </div>
              <div className="p-6 bg-card border-b border-border pointer-events-none select-none">
                <ul className="flex flex-wrap gap-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {p.prices.map((item, i) => {
                  const blankPackage = formatWindowBlankPackage(item);
                  return (
                  <div
                    key={i}
                    className="p-6 flex flex-col items-center text-center border-b sm:border-r border-border last:border-r-0 bg-card hover:bg-accent-light/50 transition-colors"
                  >
                    <div className="flex items-center justify-center py-4">
                      <PricingWindowSVG
                        type={item.type}
                        width={parseInt(item.size.split("×")[1])}
                        height={parseInt(item.size.split("×")[0])}
                      />
                    </div>
                    <p className="text-sm font-semibold mb-1">{item.title}</p>
                    <p className="text-xs font-mono text-muted-foreground mb-1">Размер {item.size} мм</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Фурнитура: <span className="font-semibold text-foreground">Accado · UPT · MACO</span>
                    </p>
                    {blankPackage && (
                      <p className="text-xs font-mono text-muted-foreground mb-1">{blankPackage}</p>
                    )}
                    <p className="text-xl font-extrabold text-primary mt-1">{item.price}</p>
                    <button
                      type="button"
                      onClick={onOrderClick}
                      className="mt-3 bg-primary text-primary-foreground py-2 px-5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
                    >
                      Заказать
                    </button>
                  </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WindowsPricingSection;
