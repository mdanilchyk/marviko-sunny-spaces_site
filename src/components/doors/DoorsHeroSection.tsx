import DoorPriceCalcForm from "@/components/doors/DoorPriceCalcForm";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import doorReal2 from "@/assets/door-real-2.jpg";
import type { DoorsHeroConfig } from "@/components/doors/doorsPageData";

const HERO_GRADIENT = "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)";

interface DoorsHeroSectionProps {
  hero: DoorsHeroConfig;
}

const DoorsHeroSection = ({ hero }: DoorsHeroSectionProps) => (
  <section
    id="hero"
    className="dark-section relative flex flex-col justify-center min-h-[calc(100dvh-7rem)] py-4 sm:py-10 lg:py-16"
    style={{ background: HERO_GRADIENT }}
  >
    <div className="absolute inset-0 opacity-15">
      <img src={doorReal2} alt={hero.backgroundImageAlt} className="w-full h-full object-cover" />
    </div>
    <div className="container mx-auto section-padding relative z-10">
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 lg:items-center">
        <AnimatedSection>
          <SectionLabel>{hero.label}</SectionLabel>
          <h1 className="text-[1.625rem] leading-[1.15] sm:text-4xl lg:text-5xl text-display mb-2 sm:mb-4 max-w-2xl">
            {hero.title}
          </h1>
          <p
            className="text-sm sm:text-lg text-body max-w-xl leading-snug"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {hero.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <DoorPriceCalcForm variant={hero.variant} compact className="lg:max-w-md lg:ml-auto w-full" />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DoorsHeroSection;
