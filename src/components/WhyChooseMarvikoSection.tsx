import { Shield, Clock, Award, ThumbsUp, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CertificateBadgesRow from "@/components/CertificateBadgesRow";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const defaultItems = [
  { icon: Shield, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: Clock, title: "Работаем с 2007 года", desc: "Более 19 лет на рынке Беларуси" },
  { icon: Award, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: ThumbsUp, title: "Собственное производство", desc: "г. Червень, полный цикл изготовления" },
];

const doorsItems = [
  { icon: Shield, title: "Гарантия 10 лет", desc: "На все виды работ и материалы" },
  { icon: Clock, title: "Работаем с 2007 года", desc: "Более 19 лет на рынке Беларуси" },
  { icon: Award, title: "Сертифицированные профили", desc: "Качественные профильные системы" },
  { icon: Ruler, title: "Бесплатный замер", desc: "Бесплатный выезд замерщика в удобное время" },
];

interface WhyChooseMarvikoSectionProps {
  variant?: "default" | "doors";
  showCertificateBadges?: boolean;
}

const WhyChooseMarvikoSection = ({
  variant = "default",
  showCertificateBadges = false,
}: WhyChooseMarvikoSectionProps) => {
  const items = variant === "doors" ? doorsItems : defaultItems;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
      <div className="container mx-auto section-padding">
        <SectionHeader label="Преимущества" title="Почему выбирают Марвико" variant="fade-right" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon as LucideIcon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.12} variant="slide-up">
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        {showCertificateBadges && <CertificateBadgesRow className="mt-8" />}
      </div>
    </section>
  );
};

export default WhyChooseMarvikoSection;
