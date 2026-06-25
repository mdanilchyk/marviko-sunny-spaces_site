import { useState } from "react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH, type SeoPath } from "@/config/seo";
import PageLayout from "@/components/PageLayout";
import OrderModal from "@/components/OrderModal";
import DoorsHeroSection from "@/components/doors/DoorsHeroSection";
import DoorsTypesSection from "@/components/doors/DoorsTypesSection";
import WhyChooseMarvikoSection from "@/components/WhyChooseMarvikoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WindowsInstallmentSection from "@/components/windows/WindowsInstallmentSection";
import DoorsGallerySection from "@/components/doors/DoorsGallerySection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import CompanyStatsSection from "@/components/CompanyStatsSection";
import FaqSection from "@/components/FaqSection";
import DoorsFinalCtaSection from "@/components/doors/DoorsFinalCtaSection";
import { doorsPageFaq } from "@/data/faq";
import { doorsPageReviews } from "@/data/reviews";
import type { DoorsHeroConfig } from "@/components/doors/doorsPageData";
import { FORM_SUBJECTS, FORM_COPY } from "@/config/site";

const SHORT_MODAL_DESCRIPTION = FORM_COPY.shortDescription;

interface DoorsPageContentProps {
  seoPath: SeoPath;
  path: string;
  hero: DoorsHeroConfig;
  showDoorTypes?: boolean;
}

const DoorsPageContent = ({ seoPath, path, hero, showDoorTypes = false }: DoorsPageContentProps) => {
  const [orderModal, setOrderModal] = useState(false);

  return (
    <>
      <PageSeo seo={SEO_BY_PATH[seoPath]} path={path} />
      <PageLayout onOrderClick={() => setOrderModal(true)}>
        <DoorsHeroSection hero={hero} />

        <WhyChooseMarvikoSection variant="doors" showCertificateBadges />

        {showDoorTypes && <DoorsTypesSection onOrderClick={() => setOrderModal(true)} />}

        <HowWeWorkSection />

        <WindowsInstallmentSection onOrderClick={() => setOrderModal(true)} />

        <DoorsGallerySection />

        <ClientReviewsSection reviews={doorsPageReviews} />

        <CompanyStatsSection />

        <FaqSection items={doorsPageFaq} />

        <DoorsFinalCtaSection variant={hero.variant} />

        <OrderModal
          open={orderModal}
          onClose={() => setOrderModal(false)}
          subject={FORM_SUBJECTS.doorQuote}
          formType="door_quote"
          title="Заказать расчёт"
          description={SHORT_MODAL_DESCRIPTION}
          buttonText="Отправить заявку"
        />
      </PageLayout>
    </>
  );
};

export default DoorsPageContent;
