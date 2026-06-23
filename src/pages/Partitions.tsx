import { useState } from "react";
import { School, Building2, ShoppingCart, Landmark } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH } from "@/config/seo";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import OrderModal from "@/components/OrderModal";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { FORM_SUBJECTS, FORM_COPY } from "@/config/site";
import { getPortfolioByCategory } from "@/data/portfolio";

const partitionPhotos = getPortfolioByCategory("Перегородки");

const objects = [
  { icon: <School className="w-7 h-7" />, title: "Школы и детские сады", desc: "Безопасные и прочные конструкции, соответствующие требованиям учебных учреждений" },
  { icon: <Building2 className="w-7 h-7" />, title: "Офисы", desc: "Функциональное зонирование пространства без капитального ремонта" },
  { icon: <ShoppingCart className="w-7 h-7" />, title: "Магазины и торговые центры", desc: "Перегородки любой конфигурации под коммерческие задачи" },
  { icon: <Landmark className="w-7 h-7" />, title: "Административные здания", desc: "Опыт работы на государственных и коммерческих объектах" },
];

const PartitionsPage = () => {
  const [orderModal, setOrderModal] = useState(false);

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/partitions"]} path="/partitions" />

      <PageHero
        label="Перегородки"
        title="Перегородки из ПВХ и алюминия"
        subtitle="Изготавливаем и устанавливаем перегородки из ПВХ и алюминия для коммерческих и общественных объектов"
      />

      {/* Objects grid */}
      <section id="pvc" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Объекты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Для каких объектов</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objects.map((obj, i) => (
              <AnimatedSection key={obj.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary h-full flex flex-col">
                  <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center text-primary mb-4">
                    {obj.icon}
                  </div>
                  <h3 className="font-bold mb-2">{obj.title}</h3>
                  <p className="text-sm text-muted-foreground text-body">{obj.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section id="aluminum" className="py-20 scroll-mt-24" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Портфолио</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Пример выполненной работы</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              <div>
                <img src={partitionPhotos[0]?.img} alt="Офисные перегородки из ПВХ" className="w-full rounded-xl object-cover aspect-[4/3]" />
                <p className="text-sm text-muted-foreground text-center mt-3">Зонирование помещения с дверным блоком</p>
              </div>
              <div>
                <img src={partitionPhotos[1]?.img} alt="Перегородки ПВХ в офисе" className="w-full rounded-xl object-cover aspect-[4/3]" />
                <p className="text-sm text-muted-foreground text-center mt-3">Офисные перегородки с дверью</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner
        title="Нужна перегородка для вашего объекта?"
        buttonText="Получить расчёт"
        onClick={() => setOrderModal(true)}
      />

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject={FORM_SUBJECTS.partitionQuote}
        formType="partition_quote"
        title="Получить расчёт"
        description={FORM_COPY.shortDescription}
        buttonText="Отправить заявку"
      />
    </PageLayout>
  );
};

export default PartitionsPage;
