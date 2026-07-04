import type { PriceCalcVariant } from "@/components/PriceCalcForm";
import PriceCalcForm from "@/components/PriceCalcForm";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { WINDOWS_PAGE_HERO_IMAGE } from "@/data/portfolio";

const HERO_GRADIENT = "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)";
const HERO_SUBTITLE_COLOR = "hsl(37 33% 88%)";

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
  subtitle: "Энергосберегающие алюминиевые окна с двухкамерным стеклопакетом. Цветовые решения — по отдельному согласованию",
  backgroundImageAlt: "Алюминиевые окна в Минске — производство и установка",
  variant: "alu",
};

interface WindowsHeroSectionProps {
  hero: WindowsHeroConfig;
}

const WindowsHeroSection = ({ hero }: WindowsHeroSectionProps) => (
  <section
    id="hero"
    className="dark-section relative py-8 sm:py-10 lg:py-12"
    style={{ background: HERO_GRADIENT }}
  >
    <div className="absolute inset-0 opacity-15">
      <img src={WINDOWS_PAGE_HERO_IMAGE} alt={hero.backgroundImageAlt} className="w-full h-full object-cover" />
    </div>
    <div className="container mx-auto section-padding relative z-10">
      <div className="flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <AnimatedSection className="order-1">
          <SectionLabel>{hero.label}</SectionLabel>
          <h1 className="text-[1.625rem] leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-display mb-2 sm:mb-4 max-w-2xl">
            {hero.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="order-2 lg:col-start-2 lg:row-span-2 lg:self-center">
          <PriceCalcForm variant={hero.variant} className="w-full lg:max-w-lg lg:ml-auto" />
        </AnimatedSection>

        <AnimatedSection className="order-3 lg:col-start-1">
          <p className="text-sm sm:text-lg lg:text-lg text-body max-w-xl leading-relaxed" style={{ color: HERO_SUBTITLE_COLOR }}>
            {hero.subtitle}
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default WindowsHeroSection;
