import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import type { DoorsPricingGroup } from "@/data/doorsPricing";

interface DoorsPricingSectionProps {
  pricing: DoorsPricingGroup;
  onOrderClick: () => void;
  itemColumnLabel?: string;
}

const DoorsPricingSection = ({
  pricing,
  onOrderClick,
  itemColumnLabel = "Тип двери",
}: DoorsPricingSectionProps) => (
  <section id="pricing" className="py-20 bg-background scroll-mt-24">
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <SectionLabel>Цены</SectionLabel>
        <h2 className="text-3xl sm:text-4xl text-display mb-10">{pricing.title}</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <p className="px-6 py-4 text-sm text-muted-foreground border-b border-border bg-muted/20">
            {pricing.intro}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-left">
                  <th className="px-6 py-4 font-semibold">{itemColumnLabel}</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Размер, мм</th>
                  <th className="px-6 py-4 font-semibold">Профиль</th>
                  <th className="px-6 py-4 font-semibold">Комплектация</th>
                  <th className="px-6 py-4 font-semibold text-right whitespace-nowrap">Цена от</th>
                </tr>
              </thead>
              <tbody>
                {pricing.items.map((item) => (
                  <tr
                    key={item.type}
                    className="border-b border-border last:border-b-0 hover:bg-accent-light/40 transition-colors align-top"
                  >
                    <td className="px-6 py-4 font-medium">{item.title}</td>
                    <td className="px-6 py-4 font-mono text-muted-foreground">
                      {item.size === "по размерам" ? "—" : item.size}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{item.profile}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.specs}</td>
                    <td className="px-6 py-4 text-right font-bold text-primary whitespace-nowrap text-base sm:text-lg">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-muted/20">
            <p className="text-xs text-muted-foreground">{pricing.footnote}</p>
            <button
              type="button"
              onClick={onOrderClick}
              className="shrink-0 bg-primary text-primary-foreground py-3 px-6 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DoorsPricingSection;
