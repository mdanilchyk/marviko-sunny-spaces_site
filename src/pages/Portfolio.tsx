import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import ImageLightbox from "@/components/ImageLightbox";
import { SEO_BY_PATH } from "@/config/seo";
import OrderModal from "@/components/OrderModal";
import AnimatedSection from "@/components/AnimatedSection";
import LazyImage from "@/components/LazyImage";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  type PortfolioFilter,
  toLightboxImages,
} from "@/data/portfolio";

const PortfolioPage = () => {
  const [filter, setFilter] = useState<PortfolioFilter>("Все");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [orderModal, setOrderModal] = useState(false);

  const filtered =
    filter === "Все" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);
  const lightboxImages = toLightboxImages(filtered);

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/portfolio"]} />

      <PageHero
        label="Портфолио"
        title="Наши работы"
        subtitle="Примеры выполненных проектов по остеклению окон, балконов, установке дверей, перегородок и подоконников."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="flex flex-wrap gap-2 mb-10">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground card-shadow hover:card-shadow-hover"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id + filter} delay={Math.min(i * 0.06, 0.4)}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <LazyImage
                    src={project.img}
                    alt={project.alt ?? project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} />

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject="Портфолио — сайт Марвико"
      />
    </PageLayout>
  );
};

export default PortfolioPage;
