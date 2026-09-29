'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="flex items-center gap-6 rounded-full border border-neutral-800 bg-neutral-900/70 px-6 py-2.5 backdrop-blur-md">
        <a href="#" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">
          Главная
        </a>
        <a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors">
          Проекты
        </a>
        <a href="#skills" className="text-sm text-neutral-400 hover:text-white transition-colors">
          Стек
        </a>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
        >
          Связаться
        </a>
      </nav>
    </motion.header>
  );
}