import WindowsPageContent from "@/components/windows/WindowsPageContent";
import { WINDOWS_ALU_HERO } from "@/components/windows/WindowsHeroSection";

const WindowsAluPage = () => (
  <WindowsPageContent
    seoPath="/windows-alu"
    path="/windows-alu"
    hero={WINDOWS_ALU_HERO}
    showPricing={false}
    showAluPricingTable
    showProfiles={false}
    whyChooseVariant="windows-alu"
  />
);

export default WindowsAluPage;
