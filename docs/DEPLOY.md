# Деплой marviko.by (FTP + nginx/Plesk)

## Сборка

```bash
npm run build
```

Первый раз на машине сборки:

```bash
npm run playwright:install
```

Скрипт `scripts/prerender.ts` (Playwright) создаёт **полный HTML** — и `<head>`, и контент в `#root` (h1, текст) для 7 маршрутов.

| URL | Файл на сервере |
|-----|-----------------|
| `/` | `index.html` (большой файл, вся главная) |
| `/windows/` | `windows/index.html` |
| … | `doors/`, `partitions/`, `windowsills/`, `accessories/`, `portfolio/` |

Проверка: в `dist/windows/index.html` есть `<h1>` и текст, не пустой `<div id="root"></div>`.

## FTP

1. Залить **весь** каталог `dist/` (не только корень).
2. Обязательно папки: `windows/`, `doors/`, `partitions/`, `windowsills/`, `accessories/`, `portfolio/`, `assets/`.
3. Удалить на сервере устаревшие каталоги, если остались от старого prerender: `balconies/`, лишние копии страниц.
4. Файлы: `.htaccess` (для Apache), `sitemap.xml`, `robots.txt`, `og-image.jpg`.

**Важно:** хостинг marviko.by на **nginx** — директивы `.htaccess` **не работают**. Нужны физические папки с `index.html` или nginx-правила ниже.

## nginx (Plesk → «Дополнительные директивы nginx»)

```nginx
location = /windows { return 301 /windows-pvh/; }
location = /windows-pvh { return 301 /windows-pvh/; }
location = /windows-alu { return 301 /windows-alu/; }
location = /doors { return 301 /doors/; }
location = /partitions { return 301 /partitions/; }
location = /windowsills { return 301 /windowsills/; }
location = /accessories { return 301 /accessories/; }
location = /portfolio { return 301 /portfolio/; }
```

После загрузки папок nginx отдаёт `/{path}/index.html` автоматически.

## Проверка после деплоя

```bash
curl -sL https://marviko.by/windows/ | grep '<title>'
curl -sL https://marviko.by/windowsills/ | grep '<title>'
curl -sL https://marviko.by/windowsills/ | grep -c 'application/ld+json'
curl -sL https://marviko.by/sitemap.xml | grep windowsills
```

Ожидание:

- `/windows/` — title про окна, canonical `https://marviko.by/windows`
- `/windowsills/` — title про подоконники, **2** блока JSON-LD
- `sitemap.xml` — 7 URL включая windowsills, accessories, portfolio

## SEO-аудит (Claude и др.)

Проверяйте URL **с завершающим слэшем** (`/windows/`) или после редиректа. Без слэша nginx может отдать главную, если папка маршрута не загружена.

Отчёт «title Балконы, canonical /» обычно значит: на сервере старый HTML или не залита папка маршрута — не ошибка текущего репозитория.
