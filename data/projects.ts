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
    shortDesc: "Учёт сдельной работы, услуг, аналитика заработка. Локальная база SQLite.",
    description: "Сервис для специалистов со сдельной или посменной оплатой. Фиксация рабочих смен, учёт налогов, расчет чистой прибыли в реальном времени.",
    challenge: "Создать автономное легковесное решение без внешних облачных зависимостей с мгновенным откликом базы данных.",
    solution: "Реляционная архитектура на SQLite, модульный бэкенд Express, клиентский дашборд с динамическим пересчетом ключевых финансовых метрик.",
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "Full-stack"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/piecework-calc",
    liveUrl: "https://piecework-calc.vercel.app"
  },
  {
    id: "samavik-tracker",
    title: "Food Vision & Health Tracker",
    category: "AI Vision & PWA SaaS",
    shortDesc: "Мобильный PWA-трекер: распознавание КБЖУ блюд через Gemini Vision AI.",
    description: "Автономное PWA-приложение для контроля рациона питания, веса и нутриентов с моментальным AI-анализом состава блюд по фотографии.",
    challenge: "Обеспечить быструю клиентскую обработку фото, надежный парсинг JSON из мультимодальной нейросети, оффлайн-доступность интерфейса.",
    solution: "Интеграция Gemini Vision API для сканирования блюд и этикеток, Service Workers для кэширования ассетов, адаптивный Mobile-First UI.",
    tags: ["JavaScript", "Gemini Vision AI", "PWA", "Prompt Engineering", "REST API", "Mobile First"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/semavik-tracker",
    liveUrl: "https://semavik-tracker.vercel.app"
  },
  {
    id: "soundwave-site",
    title: "Soundwave Landing Showcase",
    category: "Creative Frontend & UI/UX",
    shortDesc: "Интерактивный медиа-лендинг: кастомные карусели, WebP-пайплайн, сборка Vite.",
    description: "Промо-сайт с фокусом на современный медиа-визуал, интерактивные слайдеры и плавные интерфейсные микроанимации.",
    challenge: "Обеспечить мгновенную загрузку тяжелой графики без просадки FPS и реализовать плавную цикличную карусель баннеров.",
    solution: "Автоматический билд-пайплайн оптимизации WebP через Vite, модульная структура скриптов, аппаратное ускорение анимаций.",
    tags: ["JavaScript", "CSS3", "Vite", "Image Optimization", "Responsive", "UI/UX"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/soundwave-site",
    liveUrl: "https://soundwave-site-steel.vercel.app"
  }
];