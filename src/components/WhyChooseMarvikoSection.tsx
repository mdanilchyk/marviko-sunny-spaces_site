import CertificateBadgesRow from "@/components/CertificateBadgesRow";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { whyChooseDefaultItems, whyChooseDoorsItems, whyChooseLandingItems } from "@/data/whyChooseMarviko";

interface WhyChooseMarvikoSectionProps {
  variant?: "default" | "landing" | "doors";
  showCertificateBadges?: boolean;
}

const WhyChooseMarvikoSection = ({
  variant = "default",
  showCertificateBadges = false,
}: WhyChooseMarvikoSectionProps) => {
  const items =
    variant === "landing" ? whyChooseLandingItems : variant === "doors" ? whyChooseDoorsItems : whyChooseDefaultItems;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
      <div className="container mx-auto section-padding">
        <SectionHeader label="Преимущества" title="Почему выбирают Марвико" variant="fade-right" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
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
