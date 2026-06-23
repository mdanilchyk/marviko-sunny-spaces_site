import type { PriceCalcVariant } from "@/components/PriceCalcForm";
import PriceCalcForm from "@/components/PriceCalcForm";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { WINDOWS_PAGE_HERO_IMAGE } from "@/data/portfolio";

const HERO_GRADIENT = "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)";

export interface WindowsHeroConfig {
  label: string;
  title: string;
  subtitle: string;
  backgroundImageAlt: string;
  variant: PriceCalcVariant;
}

export const WINDOWS_PVH_HERO: WindowsHeroConfig = {
  label: "Окна ПВХ",
  title: "Окна ПВХ для вашего дома",
  subtitle: "Энергосберегающие окна ПВХ с двухкамерным стеклопакетом. Бесплатный замер. Доставка.",
  backgroundImageAlt: "Окна ПВХ в Минске — производство и установка",
  variant: "pvh",
};

export const WINDOWS_ALU_HERO: WindowsHeroConfig = {
  label: "Алюминиевые окна",
  title: "Алюминиевые окна для вашего дома",
  subtitle: "Энергосберегающие алюминиевые окна с двухкамерным стеклопакетом. Бесплатный замер. Доставка.",
  backgroundImageAlt: "Алюминиевые окна в Минске — производство и установка",
  variant: "alu",
};

interface WindowsHeroSectionProps {
  hero: WindowsHeroConfig;
}

const WindowsHeroSection = ({ hero }: WindowsHeroSectionProps) => (
  <section
    id="hero"
    className="dark-section relative flex flex-col justify-center min-h-[calc(100dvh-7rem)] py-4 sm:py-10 lg:py-16"
    style={{ background: HERO_GRADIENT }}
  >
    <div className="absolute inset-0 opacity-15">
      <img src={WINDOWS_PAGE_HERO_IMAGE} alt={hero.backgroundImageAlt} className="w-full h-full object-cover" />
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
          <PriceCalcForm variant={hero.variant} compact className="lg:max-w-md lg:ml-auto w-full" />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default WindowsHeroSection;
