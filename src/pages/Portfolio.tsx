import { useState } from "react";
import { Eye, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

import workWindowOpen from "@/assets/work-window-open.jpg";
import workWindowTrees from "@/assets/work-window-trees.jpg";
import workHouseExterior from "@/assets/work-house-exterior.jpg";
import workDoorBrown from "@/assets/work-door-brown.jpg";
import workDoorGlass from "@/assets/work-door-glass.jpg";
import workWindowFireplace from "@/assets/work-window-fireplace.jpg";

import partitionsOffice from "@/assets/partitions-office.jpg";
import windowsillReal1 from "@/assets/windowsill-real-1.jpg";
import windowsillReal2 from "@/assets/windowsill-real-2.jpg";
import windowsillReal3 from "@/assets/windowsill-real-3.jpg";
import windowsillReal4 from "@/assets/windowsill-real-4.jpg";
import windowsillReal5 from "@/assets/windowsill-real-5.jpg";
import windowsillReal6 from "@/assets/windowsill-real-6.jpg";

const projects = [
  { img: workWindowOpen, title: "Установка окон в загородном доме", category: "Окна" },
  { img: workWindowTrees, title: "Окна с видом на сад", category: "Окна" },
  { img: workHouseExterior, title: "Остекление частного дома", category: "Окна" },
  { img: workDoorBrown, title: "Входная дверь ПВХ", category: "Двери" },
  { img: workDoorGlass, title: "Дверь со стеклопакетом", category: "Двери" },
  { img: workWindowFireplace, title: "Окна в интерьере", category: "Окна" },
  { img: portfolio1, title: "Установка окон в квартире", category: "Окна" },
  { img: portfolio2, title: "Панорамное остекление балкона", category: "Балконы" },
  { img: portfolio3, title: "Окна в спальне загородного дома", category: "Окна" },
  { img: portfolio4, title: "Входная дверь ПВХ", category: "Двери" },
  { img: portfolio5, title: "Окна на кухне", category: "Окна" },
  { img: portfolio6, title: "Остекление офиса", category: "Окна" },
  { img: partitionsOffice, title: "Офисные перегородки из ПВХ", category: "Перегородки" },
  { img: windowsillReal1, title: "Глянцевый подоконник под дерево", category: "Подоконники" },
  { img: windowsillReal2, title: "Подоконник под мрамор с цветком", category: "Подоконники" },
  { img: windowsillReal3, title: "Подоконник салатовый глянец", category: "Подоконники" },
  { img: windowsillReal4, title: "Сиреневый глянцевый подоконник", category: "Подоконники" },
  { img: windowsillReal5, title: "Подоконник под белый мрамор", category: "Подоконники" },
  { img: windowsillReal6, title: "Подоконник в цвет интерьера", category: "Подоконники" },
];

const filters = ["Все", "Окна", "Балконы", "Двери", "Перегородки", "Подоконники"];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Все");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Все" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="dark-section py-20">
        <div className="container mx-auto section-padding">
          <AnimatedSection>
            <SectionLabel>Портфолио</SectionLabel>
            <h1 className="text-4xl sm:text-5xl text-display mb-6">Наши работы</h1>
            <p className="text-lg text-body max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Примеры выполненных проектов по остеклению окон, балконов, установке дверей, перегородок и подоконников.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
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
              <AnimatedSection key={project.title + filter + i} delay={i * 0.08}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={filtered[lightbox]?.img}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
