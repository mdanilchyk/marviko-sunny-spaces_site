import { useState } from "react";

import { Link } from "react-router-dom";

import PageSeo from "@/components/PageSeo";

import { SEO_BY_PATH, type SeoPath } from "@/config/seo";

import OrderModal from "@/components/OrderModal";

import PageLayout from "@/components/PageLayout";

import SectionLabel from "@/components/SectionLabel";

import AnimatedSection from "@/components/AnimatedSection";

import { WINDOWS_PAGE_HERO_IMAGE } from "@/data/portfolio";

import { accessories, windowTypes } from "@/components/windows/windowsPageData";

import WindowsHeroSection, { type WindowsHeroConfig } from "@/components/windows/WindowsHeroSection";

import WhyChooseMarvikoSection from "@/components/WhyChooseMarvikoSection";

import WindowsPricingSection from "@/components/windows/WindowsPricingSection";

import WindowsInstallmentSection from "@/components/windows/WindowsInstallmentSection";

import WindowsProfilesSection from "@/components/windows/WindowsProfilesSection";

import HowWeWorkSection from "@/components/HowWeWorkSection";

import WindowsWorkGallerySection from "@/components/windows/WindowsWorkGallerySection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import CertificatesSection from "@/components/CertificatesSection";
import FaqSection from "@/components/FaqSection";
import { getFaqForPath } from "@/data/faq";
import { windowsPageReviews } from "@/data/reviews";

import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import PageHero from "@/components/PageHero";
import { FORM_SUBJECTS } from "@/config/site";

type OrderModalKind = "window" | "call";



interface WindowsPageContentProps {

  seoPath: SeoPath;

  path: string;

  hero?: WindowsHeroConfig;

}



const WindowsPageContent = ({ seoPath, path, hero }: WindowsPageContentProps) => {

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderModalKind, setOrderModalKind] = useState<OrderModalKind>("window");
  const pageFaq = hero ? getFaqForPath(seoPath) : null;

  const openWindowOrder = () => {
    setOrderModalKind("window");
    setOrderModalOpen(true);
  };

  const openCallOrder = () => {
    setOrderModalKind("call");
    setOrderModalOpen(true);
  };



  return (

    <PageLayout onOrderClick={openCallOrder}>

      <PageSeo seo={SEO_BY_PATH[seoPath]} path={path} />



      {hero ? (

        <>

          <WindowsHeroSection hero={hero} />

          <WhyChooseMarvikoSection showCertificateBadges />

          <WindowsPricingSection onOrderClick={openWindowOrder} />

          <WindowsInstallmentSection onOrderClick={openWindowOrder} />

          <WindowsProfilesSection />

          <HowWeWorkSection includeWarrantyStep />

          <WindowsWorkGallerySection />
          <ClientReviewsSection reviews={windowsPageReviews} />
          <CertificatesSection showBadges={false} />
          {pageFaq && <FaqSection items={pageFaq} />}
          <ConsultationCtaSection />

        </>

      ) : (

        <PageHero

          label="Окна"

          title="Пластиковые и алюминиевые окна для вашего дома"

          subtitle="Энергосберегающие окна из ПВХ и алюминия с двухкамерным стеклопакетом. Бесплатный замер. Доставка."

          backgroundImage={WINDOWS_PAGE_HERO_IMAGE}

          backgroundImageAlt="Окна ПВХ в Минске — производство и установка"

        />

      )}



      {!hero && (
      <>
      {/* Window types badges */}

      <section id="aluminum" className="py-16 bg-background scroll-mt-24">

        <div className="container mx-auto section-padding">

          <AnimatedSection>

            <SectionLabel>Типы</SectionLabel>

            <h2 className="text-3xl sm:text-4xl text-display mb-8">Виды и исполнения</h2>

          </AnimatedSection>

          <AnimatedSection delay={0.1}>

            <div className="flex flex-wrap gap-3">

              {windowTypes.map((t) => (

                <span

                  key={t}

                  className="inline-block rounded-full select-none cursor-default"

                  style={{ backgroundColor: "#FDF3EC", color: "#C8441A", padding: "6px 16px", fontSize: "13px", fontWeight: 600 }}

                >

                  {t}

                </span>

              ))}

            </div>

          </AnimatedSection>

        </div>

      </section>



      <WindowsProfilesSection />

      <WindowsPricingSection onOrderClick={openWindowOrder} />



      {/* Advantages */}

      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>

        <div className="container mx-auto section-padding max-w-4xl">

          <AnimatedSection>

            <SectionLabel>Преимущества</SectionLabel>

            <h2 className="text-3xl sm:text-4xl text-display mb-10">Почему наши окна?</h2>

          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">

            {[

              { title: "Энергосбережение", desc: "Снижение теплопотерь до 40% благодаря многокамерному профилю" },

              { title: "Шумоизоляция", desc: "До 45 дБ снижения уровня шума с двухкамерным стеклопакетом" },

              { title: "Долговечность", desc: "Срок службы профилей — более 50 лет без потери свойств" },

              { title: "Безопасность", desc: "Детские замки, противовзломная фурнитура, закалённые стёкла" },

            ].map((item, i) => (

              <AnimatedSection key={item.title} delay={i * 0.1}>

                <div className="bg-card rounded-xl p-6 card-shadow">

                  <h3 className="font-bold mb-2">{item.title}</h3>

                  <p className="text-sm text-muted-foreground text-body">{item.desc}</p>

                </div>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>



      {/* Accessories section */}

      <section className="py-20 bg-background">

        <div className="container mx-auto section-padding">

          <AnimatedSection>

            <SectionLabel>Дополнительно</SectionLabel>

            <h2 className="text-3xl sm:text-4xl text-display mb-10">Также устанавливаем и продаём</h2>

          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {accessories.map((item, i) => (

              <AnimatedSection key={item.title} delay={i * 0.08}>

                <Link

                  to={item.title === "Подоконники" ? "/windowsills" : "/accessories"}

                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border hover:border-primary flex gap-4 items-start block"

                >

                  <span className="text-2xl">{item.emoji}</span>

                  <div>

                    <h3 className="font-bold mb-1">{item.title}</h3>

                    <p className="text-sm text-muted-foreground text-body">{item.desc}</p>

                  </div>

                </Link>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>



      <WindowsWorkGallerySection />

      </>
      )}

      <OrderModal
        open={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        {...(orderModalKind === "call"
          ? {
              subject: FORM_SUBJECTS.defaultCall,
              formType: "lead_contact" as const,
              title: "Заказать звонок",
            }
          : {
              subject: "Заказ окна — сайт Марвико",
              formType: "window_order" as const,
            })}
      />

    </PageLayout>

  );

};



export default WindowsPageContent;


