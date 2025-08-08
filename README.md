# Remrkt - Retention Marketing Landing Page

Сучасний лендінг для компанії Remrkt, що спеціалізується на retention-маркетингу. Проект демонструє кейси клієнтів, послуги та процес роботи з автоматизацією email, SMS, Viber, Telegram та push-повідомлень.

## 🚀 Технології

- **HTML5** - семантична розмітка з SEO-оптимізацією
- **SCSS** - модульна архітектура стилів з змінними
- **JavaScript (ES6+)** - інтерактивність та анімації
- **Gulp** - збірка та автоматизація
- **Prettier** - форматування коду
- **Husky + lint-staged** - pre-commit hooks

## 📁 Структура проекту

```
remrkt/
├── public/
│   └── index.html         # Головна сторінка
├── src/
│   ├── assets/            # Зображення та медіа
│   │   └── images/        # WebP оптимізовані зображення
│   ├── scripts/
│   │   ├── anchor.js      # Плавний скрол
│   │   ├── animation-cards.js # Анімація карток
│   │   ├── banner-change-image.js # Карусель
│   │   ├── faq.js         # Акордеон FAQ
│   │   ├── modal.js       # Модальні вікна
│   │   ├── parallax.js    # Паралакс ефекти
│   │   ├── send-request.js # Форми з валідацією
│   │   ├── steps-animation.js # Анімація кроків
│   │   └── vertical-slider.js # Вертикальний слайдер
│   └── styles/            # SCSS модулі
│       ├── _variables.scss # Змінні кольорів та розмірів
│       ├── _mixins.scss   # Перевикористовувані стилі
│       ├── _base.scss     # Базові стилі
│       ├── _brand.scss
│       ├── _button.scss
│       ├── _challenge.scss
│       ├── _clients.scss
│       ├── _comments.scss
│       ├── _cta.scss
│       ├── _email-form.scss
│       ├── _faq.scss
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _how-work.scss
│       ├── _integration.scss
│       ├── _modal.scss
│       ├── _retention.scss
│       └── main.scss
├── dist/                  # Збірка для продакшену
├── gulpfile.js           # Конфігурація збірки
├── package.json          # Залежності та скрипти
├── .prettierrc          # Налаштування Prettier
├── .prettierignore      # Ігнорування для Prettier
└── .husky/              # Git hooks
```

### Типографіка

- **Шрифт**: Manrope (200-800 weight)

## ⚡ Продуктивність

### Оптимізація зображень

- Всі PNG конвертовані в WebP формат
- Автоматичне lazy loading для зображень
- Оптимізовані розміри та якість

### SEO оптимізація

- Семантична HTML структура
- Meta теги (title, description, keywords)
- Open Graph та Twitter Cards
- Schema.org розмітка
- Canonical URL
- Alt атрибути для всіх зображень

### Швидкість завантаження

- Мініфіковані CSS та JS
- Source maps для розробки
- Оптимізовані шрифти (preconnect)
- Стилі в head, скрипти в кінці body

## 🛠 Розробка

### Встановлення

```bash
npm install
```

### Розробка

```bash
npm run dev
```

Запускає Gulp з live reload на порту 3000

### Збірка

```bash
npm run build
```

Створює оптимізовану версію в папці `dist/`

### Форматування коду

```bash
npm run format
```

Форматує всі файли через Prettier

### Git hooks

- Автоматичне форматування при коміті
- Pre-commit перевірки через Husky

### Prettier

- 2 пробіли для відступів
- Подвійні лапки
- Крапка з комою
- Максимальна довжина рядка: 100 символів

### Gulp

- Автоматична збірка SCSS → CSS
- Конкатенація та мініфікація JS
- Source maps для розробки
- Live reload через Browser Sync

### Husky

- Pre-commit форматування
- Автоматична перевірка стилю коду

## 🚀 Деплой

Проект готовий для деплою на будь-який статичний хостинг:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Файли для продакшену знаходяться в папці `dist/` після збірки.

## 📝 Ліцензія

Проект розроблений для компанії Remrkt. Всі права захищені.
