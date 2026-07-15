import DoorPriceCalcForm from "@/components/doors/DoorPriceCalcForm";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import doorReal2 from "@/assets/door-real-2.jpg";
import type { DoorsHeroConfig } from "@/components/doors/doorsPageData";

const HERO_GRADIENT = "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)";
const HERO_SUBTITLE_COLOR = "hsl(37 33% 88%)";

interface DoorsHeroSectionProps {
  hero: DoorsHeroConfig;
}

const DoorsHeroSection = ({ hero }: DoorsHeroSectionProps) => (
  <section
    id="hero"
    className="dark-section relative py-8 sm:py-10 lg:py-12"
    style={{ background: HERO_GRADIENT }}
  >
    <div className="absolute inset-0 opacity-15">
      <img src={doorReal2} alt={hero.backgroundImageAlt} className="w-full h-full object-cover" />
    </div>
    <div className="container mx-auto section-padding relative z-10">
      <div className="flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <AnimatedSection className="order-1 lg:col-start-1">
          <SectionLabel>{hero.label}</SectionLabel>
          <h1 className="text-[1.625rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-2 sm:mb-4 max-w-2xl">
            {hero.title}
          </h1>
          <p
            className="text-sm sm:text-lg text-body max-w-xl leading-relaxed"
            style={{ color: HERO_SUBTITLE_COLOR }}
          >
            {hero.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="order-2 lg:col-start-2 lg:row-span-2 lg:self-center">
          <DoorPriceCalcForm
            variant={hero.variant}
            className="w-full lg:max-w-lg lg:ml-auto"
            formType="door_quote"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DoorsHeroSection;
