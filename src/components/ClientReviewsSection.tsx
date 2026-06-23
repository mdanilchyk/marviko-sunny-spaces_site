import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Eye, FileText } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import type { Review } from "@/data/reviews";

interface ClientReviewsSectionProps {
  reviews: Review[];
}

const ClientReviewsSection = ({ reviews }: ClientReviewsSectionProps) => {
  const [reviewModal, setReviewModal] = useState<string | null>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection variant="fade-left">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Отзывы</SectionLabel>
                <h2 className="text-3xl sm:text-4xl text-display">Что говорят клиенты</h2>
              </div>
              <div className="hidden sm:flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = reviewsRef.current;
                    if (el) el.scrollBy({ left: -340, behavior: "smooth" });
                  }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = reviewsRef.current;
                    if (el) el.scrollBy({ left: 340, behavior: "smooth" });
                  }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>
          <div
            ref={reviewsRef}
            className="flex gap-6 overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start">
                <button
                  type="button"
                  onClick={() => setReviewModal(review.screenshot)}
                  className="text-left w-full h-full"
                >
                  {review.type === "messenger" ? (
                    <div className="bg-white rounded-2xl rounded-tl-sm p-5 border-2 border-primary relative h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-primary-foreground"
                          style={{ backgroundColor: "#7360F2" }}
                        >
                          V
                        </span>
                        <span className="font-bold text-sm">{review.name}</span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-body text-foreground flex-1">{review.text}</p>
                      {review.date && (
                        <p className="text-[11px] text-muted-foreground text-right mt-3">{review.date}</p>
                      )}
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Показать скриншот
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl p-5 border-2 border-primary h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-bold text-sm block">{review.name}</span>
                          {"position" in review && (
                            <span className="text-xs text-muted-foreground">{review.position}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-body text-muted-foreground flex-1">{review.text}</p>
                      {review.date && (
                        <p className="text-xs text-muted-foreground text-right mt-3">{review.date}</p>
                      )}
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Показать оригинал
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {reviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80"
            onClick={() => setReviewModal(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={reviewModal}
              alt="Отзыв"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientReviewsSection;
