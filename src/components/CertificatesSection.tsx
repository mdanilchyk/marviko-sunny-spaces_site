import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import CertificateBadgesRow from "@/components/CertificateBadgesRow";
import { certificateImages } from "@/data/certificates";

interface CertificatesSectionProps {
  showBadges?: boolean;
}

const CertificatesSection = ({ showBadges = true }: CertificatesSectionProps) => {
  const [certModal, setCertModal] = useState<string | null>(null);

  return (
    <>
      <section id="certificates" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Документы</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-3">Сертификаты соответствия</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-2xl">
              Для изготовления своей продукции мы используем только самые высококачественные оригинальные европейские комплектующие.
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              {certificateImages.map((cert, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <button
                    type="button"
                    onClick={() => setCertModal(cert.img)}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] group"
                  >
                    <div className="bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 overflow-hidden card-shadow hover:card-shadow-hover">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">{cert.title}</p>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
          {showBadges && <CertificateBadgesRow className="mt-8" />}
        </div>
      </section>

      <AnimatePresence>
        {certModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80"
            onClick={() => setCertModal(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={certModal}
              alt="Сертификат"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificatesSection;
