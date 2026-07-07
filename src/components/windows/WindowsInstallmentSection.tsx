import { CalendarDays, CreditCard, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface WindowsInstallmentSectionProps {
  onOrderClick?: () => void;
}

const WindowsInstallmentSection = ({ onOrderClick }: WindowsInstallmentSectionProps) => (
  <section id="installment" className="py-16 scroll-mt-24" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <div
          className="rounded-2xl overflow-hidden border border-border card-shadow"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
        >
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-primary-foreground/80 rounded-full" />
              <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wide">Оплата</span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-display text-primary-foreground mb-8 max-w-2xl">
              Рассрочка и удобная оплата
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
              <div className="bg-card/95 backdrop-blur rounded-xl p-6 flex gap-4 items-start border border-white/20">
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-foreground">Рассрочка без %</h3>
                  <p className="text-sm text-muted-foreground text-body leading-relaxed">
                    От 6 до 12 месяцев. Без переплат, без поручителей, справка из банка не требуется
                  </p>
                </div>
              </div>

              <div className="bg-card/95 backdrop-blur rounded-xl p-6 flex gap-4 items-start border border-white/20">
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-foreground">Удобная оплата</h3>
                  <p className="text-sm text-muted-foreground text-body leading-relaxed">
                    Принимаем наличные, банковскую карту и банковский перевод
                  </p>
                </div>
              </div>
            </div>

            {onOrderClick && (
              <button
                type="button"
                onClick={onOrderClick}
                className="bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2"
              >
                Оформить заказ <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WindowsInstallmentSection;
