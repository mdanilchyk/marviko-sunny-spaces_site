import AnimatedSection from "@/components/AnimatedSection";
import DoorPriceCalcForm, { type DoorPriceCalcVariant } from "@/components/doors/DoorPriceCalcForm";

interface DoorsFinalCtaSectionProps {
  variant: DoorPriceCalcVariant;
}

const DoorsFinalCtaSection = ({ variant }: DoorsFinalCtaSectionProps) => (
  <section
    id="final-cta"
    className="py-16 scroll-mt-24"
    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
  >
    <div className="container mx-auto section-padding">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-display text-primary-foreground max-w-xl">
            Остались вопросы? Рассчитайте стоимость бесплатно
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <DoorPriceCalcForm
              variant={variant}
              theme="on-gradient"
              showTrustLine
              formType="door_quote"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DoorsFinalCtaSection;
