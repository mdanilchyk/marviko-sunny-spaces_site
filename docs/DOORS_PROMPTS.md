# Промпты: страницы дверей ПВХ и алюминиевых дверей

Готовые промпты для Cursor по ТЗ `tz-dveri-pvh-alu.html`. Копируйте по одному — каждый рассчитан на отдельную задачу с минимальным scope.

**Эталон в проекте:** разделение окон уже сделано через `WindowsPageContent` + `WindowsPvh.tsx` / `WindowsAlu.tsx`. Двери — по той же схеме.

---

## Фаза 0 — контекст (вставить в начало любой сессии)

```
Проект: marviko-sunny-spaces_site — Vite + React 18 + TypeScript + Tailwind + react-router-dom + framer-motion + react-helmet-async.
Деплой: FTP, Apache (.htaccess SPA fallback). Build: `vite build` + prerender → dist/{path}/index.html.
Домен: https://marviko.by

ТЗ: разделить /doors на /doors-pvh и /doors-alu; собрать 12 блоков + плавающий виджет мессенджеров.
Эталон архитектуры: src/components/windows/WindowsPageContent.tsx, WindowsHeroSection.tsx, WindowsPvh.tsx.

Уже есть и можно переиспользовать:
- WhyChooseMarvikoSection, CertificateBadgesRow, HowWeWorkSection
- ClientReviewsSection, FaqSection, PriceCalcForm, ImageLightbox
- WindowsInstallmentSection (как образец блока рассрочки)
- src/data/reviews.ts, src/data/faq.ts, src/data/portfolio.ts (getDoorsGalleryImages)
- src/pages/Doors.tsx — текущая объединённая страница (hero, типы дверей, галерея)

Правила:
- Минимальный diff, не трогать несвязанный код
- Следовать паттернам windows/* и существующих Section-компонентов
- SEO: seo.ts + schema.ts + PageSeo; prerender в scripts/prerender.ts
- После правок: npm run build должен проходить
- Коммит только если я попрошу
```

---

## Шаг 0 — разделение страницы (выполнить первым)

### 0.1 Каркас двух страниц дверей

```
ТЗ шаг 0: разделить /doors на две посадочные страницы. Существующую /doors пока не удалять.

Сделай по образцу окон (WindowsPvh / WindowsAlu / WindowsPageContent):

1. src/components/doors/DoorsPageContent.tsx — общий layout страницы дверей
   Props: seoPath: "/doors-pvh" | "/doors-alu", path: string, hero: DoorsHeroConfig, showDoorTypes?: boolean

2. src/components/doors/DoorsHeroSection.tsx — пока заглушка с H1/подзаголовком из hero config (полный hero с формой — в промпте 01)

3. src/components/doors/doorsPageData.ts — константы hero:
   DOORS_PVH_HERO: H1 «Надёжные двери ПВХ для дома и офиса», подзаголовок «Входные, балконные и раздвижные двери ПВХ»
   DOORS_ALU_HERO: H1 «Надёжные алюминиевые двери для дома и офиса», подзаголовок «Входные алюминиевые двери»

4. src/pages/DoorsPvh.tsx и src/pages/DoorsAlu.tsx — тонкие обёртки

5. App.tsx:
   - /doors-pvh → DoorsPvhPage
   - /doors-alu → DoorsAluPage
   - /doors → <Navigate to="/doors-pvh" replace /> (как /windows → /windows-pvh)

6. DoorsPageContent: перенеси из Doors.tsx блок «Типы дверей» и «Фотогалерея» (getDoorsGalleryImages + ImageLightbox).
   showDoorTypes=true только для /doors-pvh; для /doors-alu блок типов не рендерить.

7. PageLayout + OrderModal как на Doors.tsx. PageSeo с временными seo path (обновим в промпте SEO).

Пока НЕ добавляй блоки с главной (преимущества, отзывы и т.д.) — только каркас + существующие типы/галерея.
npm run build.
```

### 0.2 SEO, навигация и prerender для новых URL

```
Добавь маршруты /doors-pvh и /doors-alu в инфраструктуру сайта:

1. src/config/seo.ts — расширь SeoPath:
   - "/doors-pvh": title/description про двери ПВХ (входные, балконные, раздвижные), canonical /doors-pvh
   - "/doors-alu": title/description про алюминиевые входные двери, canonical /doors-alu
   - "/doors": canonical → /doors-pvh (как у /windows → /windows-pvh), тексты можно оставить общие

2. src/config/schema.ts — SERVICE_PATHS: добавь /doors-pvh, /doors-alu; getSchemasForPath для них

3. src/config/prerender.ts — добавь /doors-pvh, /doors-alu (можно убрать /doors если редирект)

4. src/data/navigation.ts — submenu «Двери»:
   - Балконные / Входные ПВХ / Раздвижные → /doors-pvh (или якоря если появятся)
   - Алюминиевые двери → /doors-alu
   footerProductLinks: /doors → /doors-pvh или оба URL

5. public/sitemap.xml — /doors-pvh, /doors-alu вместо или вместе с /doors

6. Index.tsx и другие внутренние ссылки на /doors — оставить редирект или обновить на /doors-pvh где уместно

npm run build. Кратко: какие URL в prerender и sitemap.
```

---

## Блок 01 — Hero (H1 + подзаголовок + форма above the fold)

```
ТЗ блок 01: первый экран с H1, подзаголовком и формой расчёта — всё видно без прокрутки.

Доработай src/components/doors/DoorsHeroSection.tsx по образцу WindowsHeroSection.tsx:

- Тёмный hero, min-h как у окон (min-h-[calc(100dvh-7rem)])
- Сетка lg:grid-cols-2: слева H1 + подзаголовок, справа форма (блок 02)
- Фон: door-real-2.jpg или door-hero.jpg из assets (как на текущей Doors.tsx)
- Тексты из DOORS_PVH_HERO / DOORS_ALU_HERO

Под hero в том же «первом экране» должен быть виден блок преимуществ (блок 03) — либо компактная вёрстка hero+form+преимущества на одном viewport, либо hero чуть ниже по высоте. Цель: форма и начало преимуществ без скролла на desktop 1440px.

Подключи DoorsHeroSection в DoorsPageContent вместо заглушки.
```

---

## Блок 02 — Форма расчёта стоимости (упрощённая)

```
ТЗ блок 02: форма «Быстрый расчёт стоимости» — без выбора типа конструкции. Поля: Ширина (мм), Высота (мм), Телефон. Кнопка «Рассчитать стоимость».

Расширь src/components/PriceCalcForm.tsx:

- Новый variant: "doors-pvh" | "doors-alu" (или единый "doors" с prop productLabel в payload)
- Без <select> типа конструкции
- В sendFormEmail передавать фиксированный тип: «Двери ПВХ» или «Алюминиевые двери»
- subject: FORM_SUBJECTS из site.ts (добавь doorPvhQuote / doorAluQuote если нужно)

Используй форму в DoorsHeroSection (compact) и позже в финальном CTA (блок 12).

Не ломай variant "pvh" / "alu" для страниц окон.
```

---

## Блок 03 — Преимущества «Почему выбирают Марвико»

```
ТЗ блок 03: перенести блок с главной с одной заменой карточки.

Доработай src/components/WhyChooseMarvikoSection.tsx:

- Prop variant?: "default" | "doors" (default — текущее поведение для главной и окон)
- Для variant="doors": карточку «Собственное производство» заменить на «Бесплатный замер» (иконка Ruler или MapPin, desc про бесплатный выезд замерщика)
- Остальные 3 карточки без изменений: Гарантия 10 лет, Работаем с 2007 года, Сертифицированные профили

В DoorsPageContent: сразу под DoorsHeroSection:
<WhyChooseMarvikoSection variant="doors" showCertificateBadges /> 
(бейджи — блок 04, можно в этом же промпте или следующем)

Расположение: в пределах первого-второго экрана, под формой.
```

---

## Блок 04 — Бейджи сертификатов

```
ТЗ блок 04: бейджи ISO 9001, СТБ 1108-2017, «С 2007 года» — внутри блока преимуществ или сразу под ним.

CertificateBadgesRow.tsx уже содержит эти три бейджа.

Проверь что на страницах дверей:
<WhyChooseMarvikoSection variant="doors" showCertificateBadges />

Полноценный CertificatesSection с фото НЕ обязателен на дверях (в отличие от окон). Только строка бейджей.

Если бейджи визуально теряются — добавь отступ mt-8 как на windows hero flow.
```

---

## Блок 05 — Типы дверей

```
ТЗ блок 05: существующий блок карточек типов — доработать для ПВХ, убрать для алюминия.

1. Вынеси doorTypes из Doors.tsx в src/components/doors/doorsPageData.ts (или DoorsTypesSection.tsx)

2. src/components/doors/DoorsTypesSection.tsx:
   - Три карточки для ПВХ: балконные, входные, раздвижные (тексты из текущего Doors.tsx, порядок можно оставить)
   - В каждую карточку добавь строку «Гарантия 10 лет» (иконка Check или отдельный badge)
   - Кнопка «Заказать расчёт» → onOrderClick

3. DoorsPageContent: рендерить DoorsTypesSection только если showDoorTypes (только /doors-pvh)
   Для /doors-alu — блок полностью отсутствует

Расположение: после WhyChooseMarvikoSection (блоки 03–04), до HowWeWorkSection.
```

---

## Блок 06 — Схема «Как мы работаем»

```
ТЗ блок 06: перенести блок этапов с главной без изменений. Опционально 7-й шаг «Гарантия 10 лет».

HowWeWorkSection.tsx уже поддерживает includeWarrantyStep.

В DoorsPageContent после DoorsTypesSection (или после преимуществ на /doors-alu):
<HowWeWorkSection includeWarrantyStep />

Шаги: Заявка → Замер → Просчёт → Договор → Производство → Монтаж (+ Гарантия 10 лет).

Расположение: до блока рассрочки.
```

---

## Блок 07 — Блок рассрочки

```
ТЗ блок 07: самостоятельный визуальный блок с текстом:
«Рассрочка без % — от 6 до 12 месяцев. Без переплат, без поручителей, справка из банка не требуется»

Вариант А (предпочтительно): создай src/components/DoorsInstallmentSection.tsx — упрощённая версия WindowsInstallmentSection (одна карточка с текстом из ТЗ, акцентный gradient фон, иконка CalendarDays). Без второй карточки «Удобная оплата» если ТЗ требует только рассрочку.

Вариант Б: добавь prop compactTextOnly в WindowsInstallmentSection и переименуй в общий InstallmentSection — только если diff меньше.

Расположение в DoorsPageContent: после HowWeWorkSection, до галереи.
```

---

## Блок 08 — Фотогалерея (без изменений)

```
ТЗ блок 08: существующая галерея — перенос без правок.

Проверь что в DoorsPageContent галерея из getDoorsGalleryImages() + ImageLightbox идентична текущей Doors.tsx (сетка, hover, lightbox).

Вынеси в src/components/doors/DoorsGallerySection.tsx если ещё inline в DoorsPageContent — без изменения UI.

Расположение: после рассрочки, до отзывов.
```

---

## Блок 09 — Отзывы клиентов (8 шт., строгий порядок)

```
ТЗ блок 09: 8 отзывов в указанном порядке, оформление как на главной.

В src/data/reviews.ts добавь экспорт doorsPageReviews — строгий порядок:
1. ООО «Рентал Трейд»
2. Наталия Дубовик
3. Бобрович С
4. Пуховичский РГС (Минскоблгаз) — reviews[6] в текущем массиве
5. Червенское райпо
6. Денисевич И.
7. ООО «ДСД-СтройИнвест»
8. УП «Нефтебитумный завод» — reviews[11] (или [12] с более свежей датой — один отзыв Нефтебитума)

Используй существующий ClientReviewsSection с prop reviews={doorsPageReviews}.

В DoorsPageContent: после DoorsGallerySection.

Не меняй порядок отзывов на главной и windowsPageReviews.
```

---

## Блок 10 — Цифры компании

```
ТЗ блок 10: новый блок-статистика. Минимум «19 лет на рынке». Второй показатель — только если цифра уже есть на сайте.

1. Создай src/components/CompanyStatsSection.tsx:
   - Горизонтальная строка 1–2 показателей: крупная цифра + подпись
   - Показатель 1: «19» + «лет на рынке» (из «работаем с 2007 года»)
   - Показатель 2: опционально — поищи в Index.tsx / site.ts / WhyChooseMarviko; если нет достоверной цифры клиентов/проектов — не выдумывай, оставь один показатель или TODO-комментарий

2. Стили: в духе сайта (warm-gray или card grid), AnimatedSection

DoorsPageContent: после ClientReviewsSection, до FAQ.
```

---

## Блок 11 — FAQ (2 вопроса)

```
ТЗ блок 11: только 2 вопроса с главной, новые не добавлять:
- «Есть ли гарантия?»
- «Вы работаете за пределами Червеня?»

В src/data/faq.ts:
- doorsPageFaq = pickFaqByQuestions([...]) — по аналогии с windowsAluFaq
- getFaqForPath: добавь /doors-pvh и /doors-alu → doorsPageFaq (одинаково для обеих)

DoorsPageContent: <FaqSection items={doorsPageFaq} /> после CompanyStatsSection.

JSON-LD FAQPage на страницах дверей НЕ добавлять (как на /windows) — только UI блок.
```

---

## Блок 12 — Финальный CTA + форма

```
ТЗ блок 12: последний блок перед футером.

Создай src/components/doors/DoorsFinalCtaSection.tsx:

- Заголовок: «Остались вопросы? Рассчитайте стоимость бесплатно»
- PriceCalcForm variant doors-pvh / doors-alu (те же 3 поля что в блоке 02)
- Под формой строка: «Гарантия 10 лет · Бесплатный замер · Рассрочка без %»
- Оформление: gradient или warm секция (можно по образцу ConsultationCtaSection, но форма — PriceCalcForm, не имя+телефон)

Props: variant: "doors-pvh" | "doors-alu"

DoorsPageContent: последняя секция перед закрытием PageLayout (после FAQ).
```

---

## Постоянный элемент — плавающий виджет мессенджеров

```
ТЗ: плавающий виджет Viber + Telegram на обеих страницах дверей. Ссылки из SITE.viberHref и SITE.telegramHref (как в Footer.tsx).

Создай src/components/FloatingMessengerWidget.tsx:

- position: fixed, bottom-right, z-index выше контента но ниже модалов
- Две кнопки-иконки (переиспользуй SVG из Footer или вынеси иконки в shared)
- Появляется после scrollY > 300 (или сразу на mobile — на усмотрение, главное не перекрывать форму в hero)
- aria-label, target="_blank" rel="noopener noreferrer"
- Не показывать на всём сайте пока — только подключи в DoorsPageContent

Опционально позже: вынести в PageLayout для всех страниц — сейчас scope только двери.
```

---

## Финализация — порядок блоков и чистка

### Сборка полного DoorsPageContent

```
Собери итоговый порядок секций в DoorsPageContent (сверь с ТЗ):

01 DoorsHeroSection (H1 + PriceCalcForm)
02 (форма внутри hero)
03–04 WhyChooseMarvikoSection variant="doors" showCertificateBadges
05 DoorsTypesSection — только /doors-pvh
06 HowWeWorkSection includeWarrantyStep
07 DoorsInstallmentSection
08 DoorsGallerySection
09 ClientReviewsSection doorsPageReviews
10 CompanyStatsSection
11 FaqSection doorsPageFaq
12 DoorsFinalCtaSection
+ FloatingMessengerWidget

Удали или пометь deprecated src/pages/Doors.tsx если всё перенесено (роут /doors уже редиректит).

npm run build + визуально проверь обе страницы.
```

### Удалить старую страницу Doors.tsx

```
После проверки /doors-pvh и /doors-alu:

- Удали src/pages/Doors.tsx если логика полностью в doors/*
- App.tsx: импорт DoorsPage убрать, оставить только DoorsPvh/DoorsAlu + Navigate с /doors
- Проверь что нигде не остался импорт Doors.tsx

npm run build.
```

---

## Мега-промпт (всё по порядку)

```
ТЗ: доработка страниц дверей ПВХ и алюминиевых дверей (marviko.by). Выполняй строго по шагам, после каждого npm run build.

Шаг 0: DoorsPageContent + DoorsPvh/DoorsAlu + редирект /doors + SEO/prerender/sitemap/navigation
Шаг 1: DoorsHeroSection + PriceCalcForm variant doors (без select типа)
Шаг 2: WhyChooseMarvikoSection variant doors + showCertificateBadges
Шаг 3: DoorsTypesSection (ПВХ + «Гарантия 10 лет» в карточках; alu — без блока)
Шаг 4: HowWeWorkSection + DoorsInstallmentSection + DoorsGallerySection
Шаг 5: doorsPageReviews + ClientReviewsSection
Шаг 6: CompanyStatsSection + doorsPageFaq + DoorsFinalCtaSection
Шаг 7: FloatingMessengerWidget
Шаг 8: финальная проверка порядка блоков, удалить Doors.tsx

Эталон: WindowsPageContent. Коммиты только по моей просьбе.
```

---

## Как пользоваться

| Цель | Промпты |
|------|---------|
| Начать с нуля | 0.1 → 0.2 → 01 → 02 → … по порядку |
| Только разделение URL | 0.1 + 0.2 |
| Hero + форма above the fold | 01 + 02 + 03 |
| Контент с главной | 03, 04, 06, 09, 11 |
| Новые блоки | 07, 10, 12, виджет |
| Один сеанс | Мега-промпт |

---

## Справка: отличия /doors-pvh vs /doors-alu

| Блок | /doors-pvh | /doors-alu |
|------|------------|------------|
| H1 | Надёжные двери ПВХ для дома и офиса | Надёжные алюминиевые двери для дома и офиса |
| Подзаголовок | Входные, балконные и раздвижные двери ПВХ | Входные алюминиевые двери |
| Типы дверей | 3 карточки + «Гарантия 10 лет» | **Блок убрать** |
| Остальные блоки | Одинаково | Одинаково |
| Форма (тип в payload) | Двери ПВХ | Алюминиевые двери |
