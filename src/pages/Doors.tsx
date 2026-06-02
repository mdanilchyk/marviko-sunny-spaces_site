import { useState } from "react";
import { Check } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { SEO_BY_PATH } from "@/config/seo";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import OrderModal from "@/components/OrderModal";
import ImageLightbox from "@/components/ImageLightbox";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { FORM_SUBJECTS } from "@/config/site";
import doorReal2 from "@/assets/door-real-2.jpg";
import { getDoorsGalleryImages } from "@/data/portfolio";

const SHORT_MODAL_DESCRIPTION = "Оставьте свой номер телефона и наш менеджер свяжется с вами.";

const doorTypes = [
  {
    title: "Балконные двери ПВХ",
    desc: "Балконные блоки из ПВХ — окно в сочетании с дверью. Тепло, надёжно, долговечно",
    features: ["Двухкамерный стеклопакет", "Поворотно-откидной механизм", "Белая или цветная ламинация"],
  },
  {
    title: "Входные двери",
    desc: "Входные двери из ПВХ и алюминия. Надёжная защита, современный вид, высокая теплоизоляция",
    features: ["ПВХ и алюминий", "Многоточечный замок", "Широкий выбор заполнений", "Любые размеры"],
  },
  {
    title: "Раздвижные двери",
    desc: "Двери ПВХ с наклонно-сдвижной фурнитурой — идеальное решение там, где нет места для распашной двери",
    features: ["Наклонно-сдвижная фурнитура", "Экономия пространства", "ПВХ профиль", "Балконы и террасы"],
  },
];

const DoorsPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const galleryImages = getDoorsGalleryImages();

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/doors"]} path="/doors" />

      <PageHero
        label="Двери"
        title="Надёжные двери для дома и офиса"
        subtitle="Входные, балконные и раздвижные двери из ПВХ и алюминия"
        backgroundImage={doorReal2}
        backgroundImageAlt="Входные и межкомнатные двери ПВХ в Минске"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Типы дверей</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите тип двери</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {doorTypes.map((door, i) => (
              <AnimatedSection key={door.title} delay={i * 0.1}>
                <div className="rounded-xl p-6 bg-card card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{door.title}</h3>
                  <p className="text-sm text-muted-foreground text-body mb-6">{door.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {door.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOrderModal(true)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Заказать расчёт
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Примеры работ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Наши установленные двери</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative w-full h-full">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox images={galleryImages} index={lightbox} onClose={() => setLightbox(null)} />

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject={FORM_SUBJECTS.doorQuote}
        title="Заказать расчёт"
        description={SHORT_MODAL_DESCRIPTION}
        buttonText="Отправить заявку"
      />
    </PageLayout>
  );
};

export default DoorsPage;
