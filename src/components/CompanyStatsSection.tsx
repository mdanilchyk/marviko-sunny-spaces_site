import AnimatedSection from "@/components/AnimatedSection";

/** Verified figures from site copy (WhyChooseMarvikoSection, Index hero, Footer). */
const COMPANY_STATS = [
  { value: "19", label: "лет на рынке", hint: "Работаем с 2007 года" },
] as const;

// Projects/clients count: add a stat here only when a verified number exists on the site.

const CompanyStatsSection = () => (
  <section className="py-16 sm:py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
    <div className="container mx-auto section-padding">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {COMPANY_STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1} variant="slide-up">
            <div className="bg-card rounded-xl px-10 py-8 text-center card-shadow border border-border min-w-[220px]">
              <p className="text-4xl sm:text-5xl font-bold text-primary text-display mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground text-body">{stat.hint}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyStatsSection;
