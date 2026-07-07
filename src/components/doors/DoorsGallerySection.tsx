import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ImageLightbox from "@/components/ImageLightbox";
import { getDoorsGalleryImages } from "@/data/portfolio";

const DoorsGallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const galleryImages = getDoorsGalleryImages();

  return (
    <>
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <SectionHeader label="Примеры работ" title="Наши установленные двери" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox images={galleryImages} index={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
};

export default DoorsGallerySection;
