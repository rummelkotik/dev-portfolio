export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "worklog-pro",
    title: "Worklog Pro Dashboard",
    category: "Full-stack & Architecture",
    shortDesc: "Автономный финансовый дашборд: аналитика смен и\u00A0сдельного дохода на\u00A0базе SQLite.",
    description: "Инструмент самозанятых специалистов: оперативный трекинг рабочих смен, учёт налоговой ставки, моментальный расчёт чистой прибыли.",
    challenge: "Создание полностью автономного стека без\u00A0сторонних облачных API при\u00A0минимальном времени отклика локальной БД.",
    solution: "Реляционная база данных SQLite, модульный Express-бэкенд, клиентские алгоритмы пересчёта сводных финансовых метрик.",
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "Full-stack"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/piecework-calc",
    liveUrl: "https://piecework-calc.vercel.app"
  },
  {
    id: "samavik-tracker",
    title: "Food Vision & Health Tracker",
    category: "AI Vision & PWA SaaS",
    shortDesc: "Оффлайн-совместимый PWA-трекер: определение КБЖУ рациона нейросетью Gemini Vision.",
    description: "Прогрессивное веб-приложение контроля питания, массы тела и\u00A0нутриентов посредством моментального визуального анализа блюд нейросетью.",
    challenge: "Оптимизация клиентской компрессии изображений, валидация ответа нейросети, обеспечение оффлайн-работы интерфейса.",
    solution: "Интеграция Gemini Vision API, локальное кэширование через Service Workers, адаптивная верстка Mobile-First.",
    tags: ["JavaScript", "Gemini Vision AI", "PWA", "Prompt Engineering", "REST API", "Mobile First"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/semavik-tracker",
    liveUrl: "https://semavik-tracker.vercel.app"
  },
  {
    id: "soundwave-site",
    title: "Soundwave Landing Showcase",
    category: "Creative Frontend & UI/UX",
    shortDesc: "Интерактивный медиа-лендинг: кастомные карусели, оптимизация графики, сборка Vite.",
    description: "Промо-лендинг с\u00A0интерактивными слайдерами и\u00A0плавными интерфейсными анимациями.",
    challenge: "Быстрая загрузка тяжёлой графики и\u00A0плавная анимация без\u00A0просадок FPS.",
    solution: "Сжатие изображений в\u00A0формат WebP через Vite, модульный JavaScript, плавные CSS\u2011эффекты.",
    tags: ["JavaScript", "CSS3", "Vite", "Image Optimization", "Responsive", "UI/UX"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/soundwave-site",
    liveUrl: "https://soundwave-site-steel.vercel.app"
  }
];