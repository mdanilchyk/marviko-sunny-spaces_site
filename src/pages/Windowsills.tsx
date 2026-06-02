import { useState } from "react";
import { Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import { SEO_BY_PATH } from "@/config/seo";
import CtaBanner from "@/components/CtaBanner";
import OrderModal from "@/components/OrderModal";
import ImageLightbox from "@/components/ImageLightbox";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import { FORM_SUBJECTS } from "@/config/site";
import { getWindowsillsGalleryItems } from "@/data/portfolio";
import windowsillCatalog from "@/assets/windowsill-real-catalog.jpg";

const galleryItems = getWindowsillsGalleryItems();

const WindowsillsPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allGallery = [...galleryItems, { img: windowsillCatalog, caption: "Каталог цветов премиум подоконников" }];
  const lightboxImages = allGallery.map((item) => ({ src: item.img, alt: item.caption }));

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/windowsills"]} />

      <PageHero
        label="Подоконники"
        title="Подоконники ПВХ"
        subtitle="Стандартные и премиум подоконники. Более 30 цветов и фактур — под любой интерьер"
      />

      {/* Product cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Ассортимент</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Выберите подоконник</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <AnimatedSection>
              <div className="rounded-xl p-6 sm:p-8 h-full" style={{ backgroundColor: "#F7F5F2" }}>
                <h3 className="text-xl font-bold mb-2">Стандартные</h3>
                <p className="text-sm text-muted-foreground text-body mb-6">
                  Белые и однотонные подоконники из ПВХ. Практичное решение для любого окна
                </p>
                <ul className="flex flex-col gap-2.5">
                  {["Белый и светлые оттенки", "Устойчивы к влаге", "Легко чистятся", "Доступная цена"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Premium */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl p-6 sm:p-8 h-full" style={{ backgroundColor: "#FDF3EC", border: "1px solid #E8C4A0" }}>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 text-white" style={{ backgroundColor: "#C8441A" }}>
                  Премиум
                </span>
                <h3 className="text-xl font-bold mb-2">Премиум</h3>
                <p className="text-sm text-muted-foreground text-body mb-4">
                  Утолщённые стенки, дополнительные рёбра жёсткости. Защита от бытовой химии. Имитация камня, дерева, глянец, матовые фактуры
                </p>
                <p className="text-sm font-semibold mb-4">Бренды: Кристаллит, Эстера, VPL, ПДК-дизайн</p>
                <ul className="flex flex-col gap-2.5">
                  {["Более 30 цветов и фактур", "Глянцевые и матовые", "Имитация камня и дерева", "Устойчивы к химии", "Долговечны"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Фотогалерея</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Примеры наших подоконников</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
            {/* Catalog as regular grid item */}
            <AnimatedSection delay={0.5}>
              <div
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(galleryItems.length)}
              >
                <img src={windowsillCatalog} alt="Каталог цветов премиум подоконников" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBanner
        variant="warm"
        title="Хотите подобрать подоконник под ваш интерьер?"
        description="Привезём образцы на замер — выберете цвет и фактуру вживую"
        buttonText="Заказать замер"
        onClick={() => setOrderModal(true)}
      />

      <ImageLightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} />

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject={FORM_SUBJECTS.windowsillMeasure}
        title="Заказать замер"
        description="Оставьте свой номер телефона и наш менеджер свяжется с вами."
        buttonText="Отправить заявку"
      />
    </PageLayout>
  );
};

export default WindowsillsPage;
