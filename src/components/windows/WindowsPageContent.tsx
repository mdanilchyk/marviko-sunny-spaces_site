import { useState } from "react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH, type SeoPath } from "@/config/seo";
import OrderModal from "@/components/OrderModal";
import PageLayout from "@/components/PageLayout";
import WindowsHeroSection, { type WindowsHeroConfig } from "@/components/windows/WindowsHeroSection";
import WhyChooseMarvikoSection from "@/components/WhyChooseMarvikoSection";
import WindowsPricingSection from "@/components/windows/WindowsPricingSection";
import WindowsInstallmentSection from "@/components/windows/WindowsInstallmentSection";
import WindowsProfilesSection from "@/components/windows/WindowsProfilesSection";
import LaminationSection from "@/components/LaminationSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WindowsWorkGallerySection from "@/components/windows/WindowsWorkGallerySection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import CertificatesSection from "@/components/CertificatesSection";
import FaqSection from "@/components/FaqSection";
import { getFaqForPath } from "@/data/faq";
import { windowsPageReviews } from "@/data/reviews";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import { FORM_SUBJECTS } from "@/config/site";

type OrderModalKind = "window" | "call";

interface WindowsPageContentProps {
  seoPath: SeoPath;
  path: string;
  hero: WindowsHeroConfig;
  showLamination?: boolean;
  showPricing?: boolean;
}

const WindowsPageContent = ({
  seoPath,
  path,
  hero,
  showLamination = false,
  showPricing = true,
}: WindowsPageContentProps) => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderModalKind, setOrderModalKind] = useState<OrderModalKind>("window");
  const pageFaq = getFaqForPath(seoPath);

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

      <WindowsHeroSection hero={hero} />

      <WhyChooseMarvikoSection variant="landing" showCertificateBadges />

      {showPricing && <WindowsPricingSection onOrderClick={openWindowOrder} />}

      <WindowsInstallmentSection onOrderClick={openWindowOrder} />

      <WindowsProfilesSection />

      {showLamination && <LaminationSection variant="windows" onOrderClick={openWindowOrder} />}

      <HowWeWorkSection />

      <WindowsWorkGallerySection />

      <ClientReviewsSection reviews={windowsPageReviews} />

      <CertificatesSection showBadges={false} />

      {pageFaq && <FaqSection items={pageFaq} />}

      <ConsultationCtaSection formType="consultation" />

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
