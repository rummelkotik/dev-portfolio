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
    shortDesc: "Система учёта сдельной работы, услуг\u00A0и аналитики заработка с\u00A0локальной БД\u00A0SQLite.",
    description: "Комплексный веб-сервис для специалистов со\u00A0сдельной и\u00A0посменной оплатой труда. Позволяет фиксировать рабочие смены, учитывать налоги и\u00A0отслеживать финансовые метрики в\u00A0реальном времени.",
    challenge: "Требовалось создать легковесное решение без тяжелых облачных зависимостей, которое гарантирует мгновенную работу с\u00A0данными и\u00A0точный расчет аналитики.",
    solution: "Спроектирована чистая реляционная схема в\u00A0SQLite, бэкенд на\u00A0Express с\u00A0модульной структурой и\u00A0клиентский интерфейс с\u00A0динамическим пересчетом средних чеков и\u00A0чистой прибыли.",
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
    shortDesc: "Автономный мобильный веб-трекер с\u00A0ИИ-распознаванием КБЖУ по\u00A0фото блюд через Gemini Vision\u00A0AI.",
    description: "Автономное PWA-приложение для контроля рациона питания, динамики веса и\u00A0нутриентов с\u00A0автоматическим расчетом калорий и\u00A0макронутриентов напрямую по\u00A0фотографии.",
    challenge: "Обеспечить мгновенную обработку изображений на\u00A0клиенте, надежный парсинг структурированных данных из\u00A0мультимодальной нейросети и\u00A0оффлайн-доступность интерфейса.",
    solution: "Интеграция Gemini Vision API для анализа фото этикеток и\u00A0блюд, архитектура Progressive Web App (PWA) с\u00A0кэшированием ассетов и\u00A0адаптивный мобильный UI.",
    tags: ["JavaScript", "Gemini Vision AI", "PWA", "Prompt Engineering", "REST API", "Mobile First"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/semavik-tracker",
    liveUrl: "https://semavik-tracker.vercel.app"
  },
  {
    id: "soundwave-site",
    title: "Soundwave Landing Showcase",
    category: "Creative Frontend & UI/UX",
    shortDesc: "Пиксель-перфектная верстка нестандартного лендинга с\u00A0кастомными каруселями, WebP-пайплайном и\u00A0Vite.",
    description: "Промо-сайт с\u00A0акцентом на\u00A0современный медиа-визуал, интерактивные слайдеры и\u00A0плавные микроанимации. Полная адаптивность под мобильные и\u00A0десктопные экраны.",
    challenge: "Обеспечить мгновенную загрузку тяжелых медиа-ассетов без просадки FPS и\u00A0реализовать бесшовную карусель баннеров без зазоров.",
    solution: "Интеграция сборщика Vite, автоматическая конвертация и\u00A0оптимизация изображений в\u00A0WebP через кастомный билд-скрипт, модульная архитектура стилей и\u00A0скриптов.",
    tags: ["JavaScript", "CSS3", "Vite", "Image Optimization", "Responsive", "UI/UX"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/soundwave-site",
    liveUrl: "https://soundwave-site-steel.vercel.app"
  }
];