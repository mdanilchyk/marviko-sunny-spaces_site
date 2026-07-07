import { useState } from "react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH, type SeoPath } from "@/config/seo";
import PageLayout from "@/components/PageLayout";
import OrderModal from "@/components/OrderModal";
import DoorsHeroSection from "@/components/doors/DoorsHeroSection";
import DoorsTypesSection from "@/components/doors/DoorsTypesSection";
import DoorsPricingSection from "@/components/doors/DoorsPricingSection";
import LaminationSection from "@/components/LaminationSection";
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
import { DOORS_ALU_PRICING, DOORS_PVH_PRICING } from "@/data/doorsPricing";
import type { DoorsHeroConfig } from "@/components/doors/doorsPageData";
import { FORM_SUBJECTS, FORM_COPY } from "@/config/site";

const SHORT_MODAL_DESCRIPTION = FORM_COPY.shortDescription;

interface DoorsPageContentProps {
  seoPath: SeoPath;
  path: string;
  hero: DoorsHeroConfig;
  showDoorTypes?: boolean;
  showLamination?: boolean;
}

const DoorsPageContent = ({ seoPath, path, hero, showDoorTypes = false, showLamination = false }: DoorsPageContentProps) => {
  const [orderModal, setOrderModal] = useState(false);
  const pricing = hero.variant === "doors-pvh" ? DOORS_PVH_PRICING : DOORS_ALU_PRICING;

  return (
    <>
      <PageSeo seo={SEO_BY_PATH[seoPath]} path={path} />
      <PageLayout onOrderClick={() => setOrderModal(true)}>
        <DoorsHeroSection hero={hero} />

        <WhyChooseMarvikoSection variant="doors" showCertificateBadges />

        {showDoorTypes && <DoorsTypesSection onOrderClick={() => setOrderModal(true)} />}

        <DoorsPricingSection pricing={pricing} onOrderClick={() => setOrderModal(true)} />

        {showLamination && <LaminationSection variant="doors" onOrderClick={() => setOrderModal(true)} />}

        <HowWeWorkSection includeWarrantyStep />

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
