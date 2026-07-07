import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/data/faq";

interface FaqSectionProps {
  items: FaqItem[];
}

const FaqSection = ({ items }: FaqSectionProps) => (
  <section id="faq" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
    <div className="container mx-auto section-padding">
      <div className="max-w-3xl">
        <FaqAccordion items={items} />
      </div>
    </div>
  </section>
);

export default FaqSection;
