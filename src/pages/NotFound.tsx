import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageSeo from "@/components/PageSeo";
import { SEO_NOT_FOUND } from "@/config/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <PageSeo seo={SEO_NOT_FOUND} />
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding text-center">
          <p className="text-6xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl text-display mb-4">Страница не найдена</h1>
          <p className="text-muted-foreground text-body mb-8 max-w-md mx-auto">
            Такой страницы нет. Возможно, ссылка устарела или адрес введён с ошибкой.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            На главную
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
