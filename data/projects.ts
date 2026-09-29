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
    shortDesc: "Система учёта сдельной работы, услуг и аналитики заработка с локальной БД SQLite.",
    description: "Комплексный веб-сервис для специалистов со сдельной и посменной оплатой труда. Позволяет фиксировать рабочие смены, учитывать налоги и отслеживать финансовые метрики в реальном времени.",
    challenge: "Требовалось создать легковесное решение без тяжелых облачных зависимостей, которое гарантирует мгновенную работу с данными и точный расчет аналитики.",
    solution: "Спроектирована чистая реляционная схема в SQLite, бэкенд на Express с модульной структурой и клиентский интерфейс с динамическим пересчетом средних чеков и чистой прибыли.",
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "Full-stack"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    
    // Твои реальные ссылки:
    githubUrl: "https://github.com/rummelkotik/piecework-calc",
    liveUrl: "https://piecework-calc.vercel.app"
  },
  {
    id: "samavik-tracker",
    title: "Food Vision & Health Tracker",
    category: "AI Vision & PWA SaaS",
    shortDesc: "Автономный мобильный веб-трекер с ИИ-распознаванием КБЖУ по фото блюд через Gemini Vision AI.",
    description: "Автономное PWA-приложение для контроля рациона питания, динамики веса и нутриентов с автоматическим расчетом калорий и макронутриентов напрямую по фотографии.",
    challenge: "Обеспечить мгновенную обработку изображений на клиенте, надежный парсинг структурированных данных из мультимодальной нейросети и оффлайн-доступность интерфейса.",
    solution: "Интеграция Gemini Vision API для анализа фото этикеток и блюд, архитектура Progressive Web App (PWA) с кэшированием ассетов и адаптивный мобильный UI.",
    tags: ["JavaScript", "Gemini Vision AI", "PWA", "Prompt Engineering", "REST API", "Mobile First"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/semavik-tracker",
    liveUrl: "https://semavik-tracker.vercel.app"
  },
  {
    id: "soundwave-site",
    title: "Soundwave Landing Showcase",
    category: "Creative Frontend & UI/UX",
    shortDesc: "Пиксель-перфектная верстка нестандартного лендинга с кастомными каруселями, WebP-пайплайном и Vite.",
    description: "Промо-сайт с акцентом на современный медиа-визуал, интерактивные слайдеры и плавные микроанимации. Полная адаптивность под мобильные и десктопные экраны.",
    challenge: "Обеспечить мгновенную загрузку тяжелых медиа-ассетов без просадки FPS и реализовать бесшовную карусель баннеров без зазоров.",
    solution: "Интеграция сборщика Vite, автоматическая конвертация и оптимизация изображений в WebP через кастомный билд-скрипт, модульная архитектура стилей и скриптов.",
    tags: ["JavaScript", "CSS3", "Vite", "Image Optimization", "Responsive", "UI/UX"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/soundwave-site",
    liveUrl: "https://soundwave-site-steel.vercel.app"
  }
];