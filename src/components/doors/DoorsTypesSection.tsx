import { Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { doorTypes } from "@/components/doors/doorsPageData";

interface DoorsTypesSectionProps {
  onOrderClick: () => void;
}

const DoorsTypesSection = ({ onOrderClick }: DoorsTypesSectionProps) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <SectionLabel>Типы дверей</SectionLabel>
        <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите тип двери</h2>
      </AnimatedSection>
      <div className="grid lg:grid-cols-3 gap-6">
        {doorTypes.map((door, i) => (
          <AnimatedSection key={door.title} delay={i * 0.1}>
            <div className="rounded-xl p-6 bg-card card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary h-full flex flex-col">
              <h3 className="text-xl font-bold mb-2">{door.title}</h3>
              <p className="text-sm text-muted-foreground text-body mb-6">{door.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {door.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOrderClick}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
              >
                Заказать расчёт
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DoorsTypesSection;
