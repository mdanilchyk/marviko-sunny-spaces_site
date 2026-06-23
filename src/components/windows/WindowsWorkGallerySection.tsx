import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import ImageLightbox from "@/components/ImageLightbox";
import { getWindowsWorkPhotos, toLightboxImages } from "@/data/portfolio";

const WindowsWorkGallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const workPhotos = getWindowsWorkPhotos();

  return (
    <>
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Портфолио</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Примеры работ</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {workPhotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={photo.img}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={toLightboxImages(workPhotos.map((p) => ({ img: p.img, title: p.title })))}
        index={lightbox}
        onClose={() => setLightbox(null)}
      />
    </>
  );
};

export default WindowsWorkGallerySection;
