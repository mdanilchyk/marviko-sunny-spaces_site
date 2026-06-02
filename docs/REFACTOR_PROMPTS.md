# Промпты для рефакторинга marviko-sunny-spaces_site

Готовые промпты для Cursor. Копируйте по одному — каждый рассчитан на отдельную задачу с минимальным scope.

---

## Фаза 0 — контекст (вставить в начало любой сессии)

```
Проект: marviko-sunny-spaces_site — Vite + React 18 + TypeScript + Tailwind + react-router-dom + framer-motion + react-helmet-async.
Деплой: FTP, nginx SPA (один dist/index.html, без prerender-папок).
Домен: https://marviko.by

Правила:
- Минимальный diff, не трогать несвязанный код
- Следовать существующим паттернам (Tailwind, SectionLabel, AnimatedSection)
- Не добавлять prerender
- После правок: npm run build должен проходить
- Коммит только если я попрошу
```

---

## Фаза 1 — быстрые исправления

### 1.1 Мёртвый код

```
Проект marviko-sunny-spaces_site. Удали или подключи мёртвый код:

1. Удали файлы, если нигде не импортируются:
   - src/components/WindowDrawing.tsx
   - src/components/NavLink.tsx
   - src/App.css (если не импортируется)

2. src/pages/Balconies.tsx — либо добавь роут /balconies в App.tsx, либо удали страницу целиком (предпочтение: удалить, т.к. балконы перенесены в /doors).

3. src/components/AnimatedSection.tsx — удали неиспользуемый экспорт AnimatedCounter.

4. src/components/Footer.tsx — убери неиспользуемый import viberIcon.

5. src/pages/Index.tsx — удали неиспользуемые: certIndex/setCertIndex, svidetelstvoImg (если не в certImages), pricingByProfile.novotex70/grunhaus70/rehau70 если не рендерятся.

6. Проверь неиспользуемые lucide-импорты в Doors.tsx, Partitions.tsx.

Запусти npm run build и eslint. Покажи список удалённого.
```

### 1.2 Кнопка «Заказать звонок» на Portfolio

```
В src/pages/Portfolio.tsx кнопка «Заказать звонок» в Navbar не работает — не передан onOrderClick.

Сделай как на других страницах:
- useState для orderModal
- <Navbar onOrderClick={() => setOrderModal(true)} />
- <OrderModal open={...} onClose={...} subject="Портфолио — сайт Марвико" />

Не дублируй inline-модал. Используй существующий OrderModal.tsx.
```

### 1.3 Исправить sendFormEmail

```
В src/lib/formSubmit.ts sendFormEmail всегда возвращает true, даже при HTTP-ошибке.

Исправь:
- return response.ok после fetch
- при !response.ok логируй status (console.error)
- catch → return false

Обнови OrderModal.tsx и все места, где показывается success — success только при true.

Не меняй endpoint и формат payload.
```

### 1.4 Единый siteConfig

```
Создай src/config/site.ts с константами сайта:

- phone, phoneDisplay, phoneTel (href)
- email, domain
- addressOffice, addressProduction
- workingHours
- formSubmit subjects как enum или объект (опционально)

Замени хардкод в:
- Navbar.tsx (телефон)
- Footer.tsx (телефон, email, адреса)
- OrderModal.tsx (телефон в подписи)
- Index.tsx (контакты, если есть)

Не меняй тексты UI, только источник данных. Один импорт SITE из config.
```

### 1.5 Согласовать цены

```
На главной (Index.tsx) и на /windows (Windows.tsx) разные цены на трёхстворчатое окно (575 vs 535/565 BYN).

Создай src/data/pricing.ts — единый источник профилей и цен Novotex/Grunhaus/Rehau.
Импортируй в Index и Windows. Цены возьми из Windows.tsx как эталон (или согласуй с заказчиком — оставь TODO-комментарий если не уверен).

Удали дублирующие массивы profiles/pricingByProfile из страниц.
```

### 1.6 Sitemap

```
Обнови public/sitemap.xml: добавь все публичные маршруты из App.tsx:
/, /windows, /doors, /partitions, /windowsills, /accessories, /portfolio

lastmod — сегодняшняя дата. priority: главная 1.0, услуги 0.8, portfolio 0.7.
Не добавляй /balconies если роута нет.
```

### 1.7 FAQ schema — телефон

```
В index.html в JSON-LD FAQPage указан телефон +375 29 501-31-20, на сайте везде +375 29 567-77-56.

Исправь FAQ schema на основной номер 567-77-56. Если есть src/config/site.ts — синхронизируй вручную или оставь комментарий что schema в index.html правится отдельно от React.
```

---

## Фаза 2 — общие компоненты

### 2.1 OrderModal везде

```
Замени inline-модалы заказа на компонент OrderModal во всех страницах:

- src/pages/Doors.tsx (~строки 171-219)
- src/pages/Partitions.tsx (~116-164)
- src/pages/Windowsills.tsx (~190-238)
- src/pages/Index.tsx (~1109-1200) — только order modal, не трогай калькулятор и contact form пока

Удали дублирующий state orderSending/formSubmitted для inline-модала где он больше не нужен.
Сохрани уникальные subject для FormSubmit на каждой странице.
После: npm run build, проверь что модал открывается и закрывается.
```

### 2.2 ImageLightbox

```
Создай src/components/ImageLightbox.tsx:
- props: images: { src: string; alt: string }[], index: number | null, onClose: () => void
- framer-motion AnimatePresence как сейчас на Windows.tsx
- клик по overlay закрывает, Escape закрывает
- кнопка ×

Замени дублирующий lightbox-код в:
- Windows.tsx, Doors.tsx, Windowsills.tsx, Portfolio.tsx, Accessories.tsx, Index.tsx (если есть)

Не меняй сетку галерей — только overlay.
```

### 2.3 PageLayout

```
Создай src/components/PageLayout.tsx:

interface Props {
  children: React.ReactNode;
  onOrderClick?: () => void;
}

Рендерит: <main className="min-h-screen bg-background"><Navbar onOrderClick={...} />{children}<Footer /></main>

Постепенно переведи страницы: Windows, Doors, Partitions, Windowsills, Accessories, Portfolio, Index.
Каждая страница передаёт onOrderClick если нужен OrderModal.

Не ломай dark-section hero внутри children.
```

### 2.4 PageHero

```
Создай src/components/PageHero.tsx для тёмного hero-блока сервисных страниц:

props: title, subtitle?, backgroundImage?, children? (CTA)

Стили как на Windows.tsx (dark-section, py-20, опциональный bg image с overlay).

Замени дублирующие hero-секции в: Doors, Partitions, Windowsills, Accessories (и Balconies если останется).

Windows.tsx можно оставить на потом если hero сложнее — или адаптировать через children.
```

### 2.5 CtaBanner

```
Создай src/components/CtaBanner.tsx — gradient/warm полоска с заголовком и кнопкой onOrder.

props: title, description?, buttonText, onClick, variant?: 'gradient' | 'warm'

Замени в Partitions.tsx, Windowsills.tsx, Accessories.tsx.
```

---

## Фаза 3 — данные

### 3.1 portfolio.ts

```
Создай src/data/portfolio.ts — единый массив проектов:
{ id, category: 'Окна'|'Двери'|..., img, title, alt? }

Перенеси данные из Portfolio.tsx (projects). Windows/Doors/Windowsills берут filter по category или отдельные экспорты getWindowsGallery() и т.д.

Минимизируй дубли импортов JPG — один import на файл в portfolio.ts, страницы импортируют данные оттуда.

Обнови Portfolio.tsx, Windows.tsx (workPhotos), Doors.tsx (galleryImages), Windowsills.tsx.
```

### 3.2 navigation.ts

```
Создай src/data/navigation.ts:
- navItems (из Navbar.tsx с submenu)
- footerProductLinks
- footerInfoLinks

Импортируй в Navbar.tsx и Footer.tsx. Убери дубли массивов ссылок.

Исправь hash-ссылки: либо добавь id="pvc" id="aluminum" на Windows/Partitions, либо убери # из submenu href (предпочтение: добавить id на соответствующие секции).
```

### 3.3 accessories.ts

```
Вынеси статические данные из src/pages/Accessories.tsx (childSafetyItems, mosquitoSections, glassTypes и т.д.) в src/data/accessories.ts.

Страница только рендерит. Без изменения текстов и картинок.
```

### 3.4 reviews + faq

```
Вынеси из Index.tsx в src/data/reviews.ts и src/data/faq.ts массивы отзывов и FAQ.

Index импортирует и мапит. Не меняй UI. Уменьши Index.tsx на ~150 строк.
```

---

## Фаза 4 — SEO

### 4.1 Helmet на все страницы

```
Добавь react-helmet-async на страницы без meta:

- Index.tsx (главная)
- Windowsills.tsx
- Accessories.tsx
- Portfolio.tsx
- NotFound.tsx (noindex, follow no, title на русском)

Создай src/config/seo.ts — map path → { title, description, canonical, ogTitle, ogDescription }.

Используй SITE.domain из site.ts. Canonical: https://marviko.by/path

По образцу Windows.tsx и Doors.tsx.
```

### 4.2 NotFound

```
Перепиши src/pages/NotFound.tsx:
- Русский текст
- PageLayout с Navbar/Footer
- Helmet: title "Страница не найдена", robots noindex
- Link to="/" вместо <a href="/">
```

### 4.3 SEO этап 1 — JSON-LD через schema.ts + PageSeo (без prerender)

```
Контекст: marviko-sunny-spaces_site — Vite + React 18 + react-helmet-async. Деплой FTP + Apache (.htaccess SPA fallback). Prerender НЕ добавлять.

Цель этапа 1: единый источник structured data в TypeScript, вывод через Helmet на каждой странице. Убрать дублирующий JSON-LD из index.html (оставить только fallback для главной до гидрации — см. ниже).

---

## 1. Создать src/config/schema.ts

Импорты: SITE из site.ts, SEO_BY_PATH и SeoPath из seo.ts, faqData из data/faq.ts.

Экспортируй функции, возвращающие plain object (без @context внутри каждого — добавляй @context при сборке):

### localBusinessSchema()
На основе текущего блока в index.html (LocalBusiness):
- @type LocalBusiness, name "Марвико", url SITE.domain, telephone SITE.phone
- address: PostalAddress, addressLocality "Червень", addressCountry "BY"
- description — кратко, как на главной
- areaServed: "Минск и Минская область"
- openingHoursSpecification: Пн–Пт 09:00–18:00 (как в index.html; не выдумывать Сб если в SITE.workingHours другое — оставь TODO если расходится)

### websiteSchema()
- @type WebSite, name, url SITE.domain
- publisher: { @id: `${SITE.domain}/#organization` } или ссылка на LocalBusiness
- potentialAction SearchAction НЕ добавлять (на сайте нет поиска)

### faqPageSchema()
Генерировать FAQPage из src/data/faq.ts — mainEntity из faqData:
- Question.name = item.q
- Answer.text = item.a
- В ответах, где уместно, можно подставить SITE.phoneShort (только если в тексте ответа логично упомянуть телефон; не переписывай все ответы)
- Все 8 вопросов из faqData, без выдуманных SEO-вопросов из старого index.html

### serviceSchema(path: SeoPath)
Только для путей услуг: /windows, /doors, /partitions, /windowsills, /accessories (не /, не /portfolio):
- @type Service
- name, description — из SEO_BY_PATH[path].ogTitle и ogDescription (или description)
- url — canonical из SEO_BY_PATH
- provider: { @type LocalBusiness, name: "Марвико", telephone: SITE.phone, url: SITE.domain }
- areaServed: как у LocalBusiness

### breadcrumbSchema(path: SeoPath)
- @type BreadcrumbList
- itemListElement: [Главная → текущая страница]
- Позиции 1 и 2; для "/" не вызывать

### getSchemasForPath(path: SeoPath | "not-found"): object[]
Возвращает массив JSON-LD объектов с @context: "https://schema.org" для каждого:
- "/": [localBusinessSchema, websiteSchema, faqPageSchema]
- услуги: [serviceSchema, breadcrumbSchema]
- "/portfolio": [breadcrumbSchema] только (без Service)
- "not-found": [] (пустой массив)

Типы: экспортируй SchemaPath = SeoPath | "not-found" если нужно для NotFound.

---

## 2. Расширить src/components/PageSeo.tsx

Добавь опциональный prop path?: SeoPath (или обязательный schemaPath).

Импортируй getSchemasForPath из schema.ts.

Для каждого объекта schema рендери в Helmet:
<script type="application/ld+json">{JSON.stringify(schema)}</script>

Используй ключи React (например key={`ld+json-${index}`}) при map.

Не дублируй title/meta — только добавь JSON-LD к существующему Helmet.

---

## 3. Обновить все страницы с PageSeo

Передай path в PageSeo:
- Index → path="/"
- Windows → "/windows", Doors → "/doors", Partitions, Windowsills, Accessories, Portfolio
- NotFound → не передавать path или path с пустой schema (noindex уже есть)

Пример: <PageSeo seo={SEO_BY_PATH["/windows"]} path="/windows" />

---

## 4. Упростить index.html

Удали оба <script type="application/ld+json"> из index.html.

Оставь в <head> только статические meta/title главной (как сейчас) — это fallback до гидрации React; Helmet на главной перезапишет/дополнит при загрузке.

Обнови комментарий в src/config/site.ts: JSON-LD теперь в schema.ts, не в index.html.

---

## 5. Чего НЕ делать

- Не добавлять vite-plugin-prerender, react-snap, SSR
- Не добавлять Product/Offer с ценами
- Не менять тексты UI, faq.ts, seo.ts (кроме импортов если нужны типы)
- Не трогать public/.htaccess, sitemap, og-image
- Коммит только если я попрошу

---

## 6. Проверка

После правок:
1. npm run build — без ошибок
2. npm run preview, открыть / и /windows — в DevTools Elements в <head> должны быть script type="application/ld+json"
3. На / — LocalBusiness + WebSite + FAQPage (8 вопросов из faq.ts)
4. На /windows — Service + BreadcrumbList, без FAQPage
5. На /portfolio — только BreadcrumbList
6. dist/index.html — без встроенного JSON-LD (только meta главной)

Кратко отчитайся: какие файлы созданы/изменены, сколько schema-блоков на каждом маршруте.
```

---

## Фаза 5 — Index.tsx

### 5.1a Hero + категории

```
Разбей Index.tsx: вынеси в src/components/home/HomeHero.tsx и HomeCategories.tsx всё до секции pricing. Index только импортирует и собирает state/modals сверху.
```

### 5.1b Pricing

```
Вынеси секцию калькулятора/цен из Index.tsx в src/components/home/HomePricing.tsx. Данные из src/data/pricing.ts. Props: onOrderClick.
```

### 5.1c Reviews + FAQ

```
Вынеси HomeReviews.tsx и HomeFaq.tsx из Index.tsx. Данные из src/data/reviews.ts и faq.ts.
```

### 5.1d Contacts + forms

```
Вынеси HomeContacts.tsx и оставшиеся формы. Index.tsx должен стать <200 строк — только state, OrderModal, сборка секций.
```

### 5.2 Inline styles → Tailwind

```
В Index.tsx и Footer.tsx замени inline style={{ backgroundColor: '#C8441A' }} и onMouseEnter hover на Tailwind классы (bg-primary, hover:opacity-90).

Не меняй визуал заметно. Бренд #C8441A уже в tailwind.config как primary — используй его.
```

---

## Фаза 6 — производительность

### 6.1 Lazy routes

```
В App.tsx добавь React.lazy + Suspense для страниц кроме Index (или для всех):

const WindowsPage = lazy(() => import('./pages/Windows.tsx'));

Fallback: простой div "Загрузка..." по центру.

Проверь npm run build — чанки должны разделиться.
```

### 6.2 LazyImage

```
Используй LazyImage из src/components/LazyImage.tsx в галереях Windows, Doors, Windowsills (сейчас только Portfolio).

Не трогай hero above-the-fold. loading="lazy" для сеток ниже fold.
```

### 6.3 Убрать мёртвые зависимости

```
Проанализируй package.json и src/components/ui/. Удали неиспользуемые shadcn ui-компоненты (всё кроме tooltip, toaster, sonner если они нужны).

Удали из dependencies если нигде не импортируется после чистки:
- @tanstack/react-query (и QueryClientProvider из App.tsx)
- react-hook-form, zod, @hookform/resolvers — если form.tsx удалён
- recharts, embla-carousel, cmdk, vaul, date-fns, next-themes — если только в удалённых ui

Один из Toaster/Sonner — оставь один. npm run build после.
```

---

## Фаза 7 — TypeScript и тесты

### 7.1 Типы

```
Создай src/types/content.ts:
- GalleryItem, PricingCard, Review, NavItem, SeoMeta

Примени к src/data/*.ts и компонентам галерей. Без any. AnimatedSection: замени Record<string, any> на Variants из framer-motion.
```

### 7.2 Smoke tests

```
Добавь Playwright e2e tests/e2e/routes.spec.ts:
- visit /, /windows, /doors, /partitions, /windowsills, /accessories, /portfolio
- expect h1 visible
- expect no console errors (опционально)

playwright.config.ts уже есть — допиши baseURL http://localhost:4173, webServer vite preview.
```

### 7.3 Form test

```
Vitest unit test для sendFormEmail: mock fetch, проверь return true при ok, false при 4xx/5xx и при throw.

Файл src/lib/formSubmit.test.ts
```

### 7.4 Pricing consistency test

```
Vitest: импорт pricing.ts и проверка что triple window price одинаков для novotex58 во всех профилях где дублировалось. Или snapshot массива цен.
```

---

## Фаза 8 — опционально

### 8.1 vercel.json

```
Добавь vercel.json для SPA rewrite всех путей на /index.html (кроме /assets/*).

Нужно для marviko-site.vercel.app — подстраницы сейчас 404.
```

### 8.2 Формы Index на react-hook-form

```
Переведи формы на Index (калькулятор, CTA, контакты) на react-hook-form + zod. Общая схема: name min 2, phone min 7. Переиспользуй sendFormEmail. Не меняй поля UI.
```

---

## Мега-промпт (всё по порядку)

```
Рефакторинг marviko-sunny-spaces_site. Выполняй строго по шагам, после каждого шага npm run build.

Шаг 1: site.ts, pricing.ts, исправить formSubmit.ts, sitemap, FAQ phone
Шаг 2: удалить мёртвый код, fix Portfolio Navbar + OrderModal
Шаг 3: ImageLightbox + OrderModal на Doors/Partitions/Windowsills/Index order modal
Шаг 4: PageLayout, PageHero, CtaBanner
Шаг 5: portfolio.ts, navigation.ts, hash ids или убрать #
Шаг 6: seo.ts + Helmet на все страницы + NotFound RU
Шаг 7: разбить Index.tsx на home/* компоненты
Шаг 8: React.lazy routes, LazyImage в галереях
Шаг 9: удалить неиспользуемый shadcn/ui и deps
Шаг 10: types + playwright smoke + formSubmit test

Не добавлять prerender. Не force push. Коммиты только по моей просьбе.
```

---

## Как пользоваться

| Цель | Промпты |
|------|---------|
| Один вечер, максимум пользы | 1.1 → 1.3 → 1.4 → 1.5 → 2.1 → 2.2 |
| Только баги | 1.2, 1.3, 1.5, 1.6 |
| SEO meta (Helmet) | 1.6, 1.7, 4.1, 4.2 |
| SEO schema этап 1 | 4.3 |
| SEO schema этап 2 (prerender) | отдельно, не в репо |
| Чистота репо | 1.1, 6.3 |
| Главная страница | 5.1a–d, 3.4 |
| Полный рефакторинг | Мега-промпт |

---

## Справка: что рефакторить (кратко)

| Проблема | Файлы |
|----------|-------|
| Index.tsx 1248 строк | `src/pages/Index.tsx` |
| Inline-модалы | Doors, Partitions, Windowsills, Index |
| Дубли lightbox | 5 страниц |
| Мёртвый код | Balconies, WindowDrawing, NavLink, ~46 ui/ |
| Разные цены | Index vs Windows |
| Portfolio кнопка | `Portfolio.tsx` без `onOrderClick` |
| sendFormEmail | `src/lib/formSubmit.ts` |
| Sitemap 4 URL | `public/sitemap.xml` |
| Нет Helmet | Index, Windowsills, Accessories, Portfolio |
