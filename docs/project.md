# МамаЭксперт — Документация проекта

## Описание

Сайт-эксперт детских товаров и игрушек для мам с детьми от 0 до 5 лет. Блог с полезными статьями, сравнение ведущих брендов и реферальные ссылки на маркетплейсы.

## Структура сайта

```
my-first-project/
├── hello.html              # Главная страница сайта
├── styles.css              # Стили (CSS)
├── script.js               # Скрипты (JavaScript)
├── .gitignore              # Игнорируемые файлы
├── .github/
│   ├── workflows/
│   │   └── deploy.yml      # CI/CD: валидация и деплой на GitHub Pages
│   └── ISSUE_TEMPLATE/
│       └── task.yml        # Шаблон для создания задач
└── docs/
    ├── project.md          # Документация
    ├── TODO-ISSUES.md      # Задачи для создания в GitHub Issues
    └── features/
        └── loyalty-program.md
```

## Разделы сайта

### 1. Шапка (Header)
- Логотип «МамаЭксперт»
- Навигация: Статьи, Бренды, По возрасту, Подписка, О нас
- Фиксированная при прокрутке

### 2. Hero-секция
- Заголовок: «Помогаем выбрать лучшее для малыша»
- Описание проекта

### 3. Фильтры по возрасту
- Все возрасты
- 0–6 месяцев
- 6–12 месяцев
- 1–2 года
- 2–3 года
- 3–5 лет

### 4. Сравнение брендов
5 ведущих производителей с рейтингами:

| Бренд | Страна | Средняя оценка | Отзывов |
|-------|--------|----------------|---------|
| Philips Avent | Нидерланды | 4.87 | 12 540 |
| Pigeon | Япония | 4.83 | 6 420 |
| Chicco | Италия | 4.77 | 10 350 |
| Fisher-Price | США | 4.73 | 8 920 |
| Happy Baby | Россия | 4.63 | 15 780 |

Источники рейтингов:
- Ozon
- Wildberries
- Яндекс Маркет

### 5. Блог со статьями
Карточки статей с фильтрацией по возрасту ребёнка.

### 6. Подписка
Форма сбора email для рассылки.

### 7. Футер
Информация о проекте и ссылка на политику конфиденциальности.

---

## Реферальные ссылки

### Заглушки для замены

В коде используются заглушки, которые нужно заменить на ваши партнёрские ID:

#### Philips Avent
```
YOUR_REF_ID_AVENT_OZON    → Ozon партнёрский ID
YOUR_REF_ID_AVENT_WB      → Wildberries партнёрский ID
YOUR_REF_ID_AVENT_YM      → Яндекс Маркет clid
```

#### Pigeon
```
YOUR_REF_ID_PIGEON_OZON
YOUR_REF_ID_PIGEON_WB
YOUR_REF_ID_PIGEON_YM
```

#### Chicco
```
YOUR_REF_ID_CHICCO_OZON
YOUR_REF_ID_CHICCO_WB
YOUR_REF_ID_CHICCO_YM
```

#### Fisher-Price
```
YOUR_REF_ID_FISHER_OZON
YOUR_REF_ID_FISHER_WB
YOUR_REF_ID_FISHER_YM
```

#### Happy Baby
```
YOUR_REF_ID_HAPPYBABY_OZON
YOUR_REF_ID_HAPPYBABY_WB
YOUR_REF_ID_HAPPYBABY_YM
```

### Как получить партнёрские ссылки

| Площадка | Партнёрская программа |
|----------|----------------------|
| Ozon | https://seller.ozon.ru (раздел «Партнёрам») |
| Wildberries | https://partners.wildberries.ru |
| Яндекс Маркет | https://partner.market.yandex.ru |

---

## Дизайн

### Цветовая палитра (пастельные тона)

| Элемент | Цвет |
|---------|------|
| Основной фон | `#fef9f3` → `#fdf2f8` (градиент) |
| Шапка/футер | `#f8e1e8` → `#e8d4f0` |
| Акцентный цвет | `#9b6b8a` |
| Текст основной | `#5c4a5a` |
| Текст вторичный | `#7a6a7a` |

### Кнопки маркетплейсов

| Площадка | Цвет |
|----------|------|
| Ozon | `#005bff` (синий) |
| Wildberries | `#cb11ab` (фиолетовый) |
| Яндекс Маркет | `#ffcc00` (жёлтый) |

---

## Технологии

- **HTML5** — разметка
- **CSS3** — стили (встроенные в HTML)
- **JavaScript** — фильтрация статей, форма подписки
- **Адаптивная вёрстка** — поддержка мобильных устройств

---

## Как запустить

1. Откройте файл `hello.html` в браузере
2. Или используйте Live Server в VS Code

---

## TODO

Задачи перенесены в [GitHub Issues](https://github.com/serval8n8-stack/my-first-project/issues).

Подробное описание задач для создания Issues: [docs/TODO-ISSUES.md](TODO-ISSUES.md)

---

## CI/CD

Проект настроен на автоматический деплой через GitHub Actions:
- При пуше в `main` — валидация HTML и деплой на GitHub Pages
- При pull request — только валидация HTML

Для активации GitHub Pages:
1. Перейдите в Settings → Pages
2. Source: GitHub Actions
