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
    challenge: "Разработка автономного решения без внешних облачных сервисов и обеспечение моментального отклика базы данных.",
    solution: "Реляционная база SQLite, модульный сервер Express, динамический подсчёт чистой прибыли на клиенте.",
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "Full-stack"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/piecework-calc",
    liveUrl: "https://piecework-calc.vercel.app"
  },
  {
    id: "samavik-tracker",
    title: "Food Vision & Health Tracker",
    category: "AI Vision & PWA SaaS",
    shortDesc: "PWA-трекер питания: распознавание КБЖУ блюд через Gemini Vision AI.",
    description: "Автономное PWA-приложение: контроль рациона, веса и нутриентов, моментальный AI-анализ блюд по фото.",
    challenge: "Быстрая обработка фото на клиенте, парсинг JSON мультимодальной нейросети, оффлайн-доступность интерфейса.",
    solution: "Интеграция Gemini Vision API для анализа блюд, Service Workers для кэширования, адаптивный Mobile-First UI.",
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
    description: "Промо-сайт с современным медиа-визуалом, интерактивными слайдерами и плавными интерфейсными анимациями.",
    challenge: "Обеспечение быстрой загрузки графики без просадки FPS, плавная цикличная карусель баннеров.",
    solution: "Автоматический билд-пайплайн WebP через Vite, модульная структура скриптов, аппаратное ускорение анимаций.",
    tags: ["JavaScript", "CSS3", "Vite", "Image Optimization", "Responsive", "UI/UX"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/rummelkotik/soundwave-site",
    liveUrl: "https://soundwave-site-steel.vercel.app"
  }
];