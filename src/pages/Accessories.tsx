import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import { SEO_BY_PATH } from "@/config/seo";
import CtaBanner from "@/components/CtaBanner";
import ImageLightbox from "@/components/ImageLightbox";
import { SITE } from "@/config/site";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import OrderModal from "@/components/OrderModal";
import {
  childSafetyItems,
  mosquitoSections,
  glassTypes,
  accessoryLightboxImages,
  getAccessoryLightboxIndex,
  accDoorHandleInstalled,
  accDoorHandleBar,
  accPressGarnish,
  accSingleLock,
  accMultiLock,
  accWindowHandle,
  accCylinderKey,
  accCylinderThumb,
} from "@/data/accessories";

const AccessoriesPage = () => {
  const [orderModal, setOrderModal] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const openLightbox = (src: string) => setLightbox(getAccessoryLightboxIndex(src));

  return (
    <PageLayout onOrderClick={() => setOrderModal(true)}>
      <PageSeo seo={SEO_BY_PATH["/accessories"]} path="/accessories" />

      <PageHero
        label="Аксессуары"
        title="Фурнитура и комплектующие"
        subtitle="Москитные сетки, замки, ручки, стеклопакеты и другие комплектующие для окон и дверей ПВХ."
      />

      {/* Child safety locks */}
      <section id="locks" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Безопасность</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Детские замки и ручки с ключом</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {childSafetyItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border card-shadow hover:card-shadow-hover transition-shadow overflow-hidden h-full flex flex-col">
                  <button onClick={() => openLightbox(item.img)} className="aspect-square overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <ul className="space-y-1.5 mt-auto">
                      {item.specs.map((s, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mosquito nets */}
      <section id="mosquito" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Москитные сетки</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-4">Изготавливаем москитные сетки</h2>
            <p className="text-muted-foreground text-body mb-10 max-w-2xl">
              Обычные, антикошка, антимошка, антипыль. Цвета профиля: белый, серый, коричневый.
            </p>
          </AnimatedSection>
          <div className="space-y-6">
            {mosquitoSections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-6 sm:p-8 border border-border card-shadow">
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{section.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {section.features.map((f, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2 items-start">
                        <span className="text-primary shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Glass units */}
      <section id="glass" className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Стеклопакеты</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Виды стеклопакетов</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {glassTypes.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 border border-border card-shadow hover:border-primary transition-colors h-full">
                  <h3 className="font-bold mb-2 text-sm">{g.title}</h3>
                  <p className="text-xs text-muted-foreground text-body">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Door handles */}
      <section id="handles" className="py-20" style={{ backgroundColor: "hsl(var(--warm-gray))" }}>
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Дверная фурнитура</SectionLabel>
            <h2 className="text-3xl sm:text-4xl text-display mb-10">Ручки и замки для дверей</h2>
          </AnimatedSection>

          {/* Locks, cylinders, garnish — unified card grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Door handle (скоба + штанга) */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <div className="grid grid-cols-2 aspect-[4/3] bg-white">
                  <button onClick={() => openLightbox(accDoorHandleInstalled)} className="overflow-hidden p-2">
                    <img src={accDoorHandleInstalled} alt="Ручка-скоба" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                  </button>
                  <button onClick={() => openLightbox(accDoorHandleBar)} className="overflow-hidden p-2">
                    <img src={accDoorHandleBar} alt="Ручка-штанга" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                  </button>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Ручка дверная</h3>
                  <p className="text-sm text-muted-foreground">Конфигурации: ручка-скоба, ручка-штанга. В различных цветах и размерах.</p>
                </div>
              </div>

              {/* Press garnish */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => openLightbox(accPressGarnish)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accPressGarnish} alt="Нажимной гарнитур" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Нажимной гарнитур</h3>
                  <p className="text-sm text-muted-foreground mb-4">Комплект нажимного гарнитура для входных дверей ПВХ.</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Белый", "Коричневый", "Антрацит"].map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Single lock */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => openLightbox(accSingleLock)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accSingleLock} alt="Одноточечный замок" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Одноточечный замок</h3>
                  <p className="text-sm text-muted-foreground">Базовый замок для балконных и входных дверей ПВХ.</p>
                </div>
              </div>

              {/* Multi-point lock */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => openLightbox(accMultiLock)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accMultiLock} alt="Многозапорный замок" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Многозапорный замок</h3>
                  <p className="text-sm text-muted-foreground">Повышенная безопасность — несколько точек запирания по всей высоте двери.</p>
                </div>
              </div>

              {/* Cylinders */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <div className="grid grid-cols-2 aspect-[4/3] bg-white">
                  <button onClick={() => openLightbox(accCylinderKey)} className="overflow-hidden p-2">
                    <img src={accCylinderKey} alt="Цилиндр ключ-ключ" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                  </button>
                  <button onClick={() => openLightbox(accCylinderThumb)} className="overflow-hidden p-2">
                    <img src={accCylinderThumb} alt="Цилиндр ключ-барашек" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                  </button>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Цилиндры</h3>
                  <p className="text-sm text-muted-foreground">Конфигурации: ключ-ключ, ключ-барашек.</p>
                </div>
              </div>

              {/* Window handle */}
              <div className="bg-card rounded-xl border border-border card-shadow overflow-hidden flex flex-col">
                <button onClick={() => openLightbox(accWindowHandle)} className="aspect-[4/3] w-full overflow-hidden">
                  <img src={accWindowHandle} alt="Оконная ручка" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2">Оконная ручка</h3>
                  <p className="text-sm text-muted-foreground">Цвета: белый, коричневый, антрацит.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner
        variant="primary"
        title="Нужна консультация?"
        description="Позвоните нам или оставьте заявку — подберём нужные комплектующие"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <a href={SITE.phoneTel} className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOrderModal(true)}
            className="bg-background/20 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold hover:bg-background/30 transition-all"
          >
            Заказать звонок
          </button>
        </div>
      </CtaBanner>

      <ImageLightbox
        images={accessoryLightboxImages}
        index={lightbox}
        onClose={() => setLightbox(null)}
      />

      <OrderModal
        open={orderModal}
        onClose={() => setOrderModal(false)}
        subject="Аксессуары — сайт Марвико"
        formType="accessories"
      />
    </PageLayout>
  );
};

export default AccessoriesPage;
