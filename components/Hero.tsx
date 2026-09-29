'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] flex-col justify-center px-4 pt-20">
      {/* Мягкие световые акценты на фоне */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-28 left-1/4 -z-10 h-[350px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="mx-auto max-w-4xl text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Доступен для&nbsp;новых проектов
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance"
        >
          Разработка кастомных веб-сервисов и&nbsp;нестандартного фронтенда
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg text-balance"
        >
          Создаю интерактивные интерфейсы, дашборды и&nbsp;веб-приложения с&nbsp;упором на&nbsp;производительность, чистую архитектуру и&nbsp;внимание к&nbsp;деталям.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition-colors"
          >
            Смотреть проекты <ArrowDown size={16} />
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:border-neutral-700 transition-colors"
          >
            Написать в&nbsp;Telegram <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}