import { useState } from "react";
import { ZoomIn } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ImageLightbox from "@/components/ImageLightbox";
import {
  laminationColors,
  laminationColorNames,
  laminationConditionsLine,
  laminationLightboxImages,
  laminationSectionCopy,
} from "@/data/lamination";

interface LaminationSectionProps {
  variant: "windows" | "doors";
  onOrderClick?: () => void;
}

const LaminationSection = ({ variant, onOrderClick }: LaminationSectionProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const copy = laminationSectionCopy[variant];
  const conditionsLine = laminationConditionsLine[variant];

  return (
    <>
      <section id="lamination" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto section-padding">
          <SectionHeader label="Ламинация" title={copy.title} subtitle={copy.subtitle} variant="fade-right" />

          <AnimatedSection delay={0.08}>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Виды ламинации</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {laminationColorNames.map((name) => (
                <span
                  key={name}
                  className="inline-block rounded-full select-none"
                  style={{ backgroundColor: "#FDF3EC", color: "#C8441A", padding: "6px 14px", fontSize: "13px", fontWeight: 600 }}
                >
                  {name}
                </span>
              ))}
              <span
                className="inline-block rounded-full select-none border border-dashed border-primary/40 text-primary"
                style={{ padding: "6px 14px", fontSize: "13px", fontWeight: 600 }}
              >
                + ещё 30+ декоров
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
            {laminationColors.map((color, i) => (
              <AnimatedSection key={color.code} delay={i * 0.06} variant="scale">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group w-full text-left bg-card rounded-xl overflow-hidden card-shadow border border-border hover:border-primary hover:card-shadow-hover transition-all duration-300 cursor-pointer"
                  aria-label={`Увеличить: ${color.name}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={color.img}
                      alt={`Ламинация ${color.name}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-sm sm:text-base leading-snug">{color.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{color.code}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <p className="text-sm sm:text-base text-body text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              {conditionsLine}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={onOrderClick}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
              >
                Рассчитать стоимость с ламинацией
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ImageLightbox images={laminationLightboxImages} index={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
};

export default LaminationSection;
