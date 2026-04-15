import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import LazyImage from "@/components/LazyImage";

// Windows
import windowWork1 from "@/assets/window-work-1.jpg";
import windowWork2 from "@/assets/window-work-2.jpg";
import windowWork3 from "@/assets/window-work-3.jpg";
import windowWork4 from "@/assets/window-work-4.jpg";
import windowWork7 from "@/assets/window-work-7.jpg";
import windowWork8 from "@/assets/window-work-8.jpg";
import windowWork9 from "@/assets/window-work-9.jpg";

// Doors
import doorReal1 from "@/assets/door-real-1.jpg";
import doorReal3 from "@/assets/door-real-3.jpg";
import doorReal4 from "@/assets/door-real-4.jpg";
import doorReal5 from "@/assets/door-real-5.jpg";
import doorReal6 from "@/assets/door-real-6.jpg";
import doorReal7 from "@/assets/door-real-7.jpg";
import doorReal8 from "@/assets/door-real-8.jpg";
import doorReal9 from "@/assets/door-real-9.jpg";
import doorReal10 from "@/assets/door-real-10.jpg";

// Partitions
import partitionsOffice from "@/assets/partitions-office.jpg";
import partitionsReal1 from "@/assets/partitions-real-1.jpg";

// Windowsills
import windowsillReal1 from "@/assets/windowsill-real-1.jpg";
import windowsillReal2 from "@/assets/windowsill-real-2.jpg";
import windowsillReal3 from "@/assets/windowsill-real-3.jpg";
import windowsillReal4 from "@/assets/windowsill-real-4.jpg";
import windowsillReal5 from "@/assets/windowsill-real-5.jpg";
import windowsillReal6 from "@/assets/windowsill-real-6.jpg";
import windowsillReal7 from "@/assets/windowsill-real-7.jpg";
import windowsillReal8 from "@/assets/windowsill-real-8.jpg";

const projects = [
  // Окна
  { img: windowWork7, title: "Остекление многоквартирного дома", category: "Окна" },
  { img: windowWork8, title: "Окна в частном доме", category: "Окна" },
  { img: windowWork9, title: "Окна в цветном профиле", category: "Окна" },
  { img: windowWork1, title: "Установка окон в частном доме", category: "Окна" },
  { img: windowWork2, title: "Окна в цветном профиле", category: "Окна" },
  { img: windowWork3, title: "Остекление магазина", category: "Окна" },
  { img: windowWork4, title: "Остекление многоквартирного дома", category: "Окна" },
  // Двери
  { img: doorReal8, title: "Входная группа с алюминиевыми дверями", category: "Двери" },
  { img: doorReal9, title: "Трёхстворчатая дверь с фрамугой", category: "Двери" },
  { img: doorReal10, title: "Раздвижная дверь в интерьере", category: "Двери" },
  { img: doorReal1, title: "Раздвижная балконная дверь", category: "Двери" },
  { img: doorReal3, title: "Входная дверь зелёная ПВХ", category: "Двери" },
  { img: doorReal4, title: "Входная группа магазина", category: "Двери" },
  { img: doorReal5, title: "Белая входная дверь ПВХ", category: "Двери" },
  { img: doorReal6, title: "Дверь с ламинацией под дерево", category: "Двери" },
  { img: doorReal7, title: "Входная дверь с боковой створкой", category: "Двери" },
  // Перегородки
  { img: partitionsOffice, title: "Перегородка в офисе", category: "Перегородки" },
  { img: partitionsReal1, title: "Перегородка ПВХ", category: "Перегородки" },
  // Подоконники
  { img: windowsillReal1, title: "Глянцевый подоконник под дерево", category: "Подоконники" },
  { img: windowsillReal2, title: "Подоконник под мрамор с цветком", category: "Подоконники" },
  { img: windowsillReal3, title: "Подоконник салатовый глянец", category: "Подоконники" },
  { img: windowsillReal4, title: "Сиреневый глянцевый подоконник", category: "Подоконники" },
  { img: windowsillReal5, title: "Подоконник под белый мрамор", category: "Подоконники" },
  { img: windowsillReal6, title: "Подоконник в цвет интерьера", category: "Подоконники" },
  { img: windowsillReal7, title: "Подоконник венге премиум", category: "Подоконники" },
  { img: windowsillReal8, title: "Яркий оранжевый подоконник", category: "Подоконники" },
];

const filters = ["Все", "Окна", "Двери", "Перегородки", "Подоконники"];

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
              <AnimatedSection key={project.title + filter + i} delay={Math.min(i * 0.06, 0.4)}>
                <div
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <LazyImage
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
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
