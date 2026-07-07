import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import type { FaqItem } from "@/data/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader label="Вопросы" title="Часто задаваемые вопросы" />
      <div className="flex flex-col gap-3">
        {items.map((faq, i) => (
          <AnimatedSection key={faq.q} delay={i * 0.05}>
            <div className="bg-card rounded-xl card-shadow overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground text-body">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
