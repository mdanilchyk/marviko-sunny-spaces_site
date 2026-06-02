import type { ReactNode } from "react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_GRADIENT = "linear-gradient(135deg, hsl(var(--dark-bg)), #3A2518)";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  children?: ReactNode;
}

const PageHero = ({
  label,
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt = "",
  children,
}: PageHeroProps) => (
  <section className="dark-section py-20 relative" style={{ background: HERO_GRADIENT }}>
    {backgroundImage && (
      <div className="absolute inset-0 opacity-15">
        <img src={backgroundImage} alt={backgroundImageAlt} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="container mx-auto section-padding relative z-10">
      <AnimatedSection>
        <SectionLabel>{label}</SectionLabel>
        <h1 className="text-4xl sm:text-5xl text-display mb-6 max-w-2xl">{title}</h1>
        {subtitle && (
          <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
            {subtitle}
          </p>
        )}
        {children}
      </AnimatedSection>
    </div>
  </section>
);

export default PageHero;
