import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { profileBrands } from "@/components/windows/windowsPageData";

const WindowsProfilesSection = () => (
  <section id="profiles" className="py-20 scroll-mt-24" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <SectionLabel>Профили</SectionLabel>
        <h2 className="text-3xl sm:text-4xl text-display mb-4">С какими профилями мы работаем</h2>
        <p className="text-body text-muted-foreground max-w-2xl mb-10">
          Используем проверенные оконные системы от ведущих производителей. Подберём оптимальный профиль под ваши задачи и бюджет.
        </p>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profileBrands.map((b, i) => (
          <AnimatedSection key={b.name} delay={i * 0.06}>
            <div className="bg-card rounded-xl p-5 card-shadow border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
              <h3 className="font-bold text-base mb-2">{b.name}</h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-accent-light text-primary">{b.chambers} камер</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-accent-light text-primary">{b.width} мм</span>
              </div>
              <p className="text-sm text-muted-foreground text-body flex-1">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WindowsProfilesSection;
