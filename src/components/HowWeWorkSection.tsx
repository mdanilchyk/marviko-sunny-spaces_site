import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";

const BASE_PROCESS_STEPS = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку на сайте или звоните" },
  { num: "02", title: "Замер", desc: "Бесплатный выезд замерщика" },
  { num: "03", title: "Просчёт и консультация", desc: "Подбор оптимального решения и расчёт стоимости" },
  { num: "04", title: "Заключение договора", desc: "Оформление документов и согласование сроков" },
  { num: "05", title: "Производство", desc: "Изготовление по вашим размерам" },
  { num: "06", title: "Монтаж", desc: "Профессиональная установка" },
] as const;

const WARRANTY_STEP = {
  num: "07",
  title: "Гарантия 10 лет",
  desc: "На все виды работ и материалы",
} as const;

interface HowWeWorkSectionProps {
  includeWarrantyStep?: boolean;
}

const HowWeWorkSection = ({ includeWarrantyStep = false }: HowWeWorkSectionProps) => {
  const steps = includeWarrantyStep ? [...BASE_PROCESS_STEPS, WARRANTY_STEP] : [...BASE_PROCESS_STEPS];

  return (
    <section id="process" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto section-padding">
        <AnimatedSection variant="fade-left">
          <SectionLabel>Этапы</SectionLabel>
          <h2 className="text-3xl sm:text-4xl text-display mb-12">Как мы работаем</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15} variant="slide-up">
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-primary font-bold text-lg mb-4"
                  style={{ border: "2px solid hsl(var(--primary))" }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-16 w-[calc(100%-4rem)] h-0.5 gradient-line" />
                )}
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-body">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
