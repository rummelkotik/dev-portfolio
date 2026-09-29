'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    number: "01",
    title: "Модульная архитектура",
    desc: "Разделение логики, UI и данных. Чистый код без монолитов — удобно масштабировать, поддерживать."
  },
  {
    number: "02",
    title: "Внимание к деталям & Figma",
    desc: "Точный перенос дизайн-системы, плавные микроанимации, стабильный адаптивный интерфейс."
  },
  {
    number: "03",
    title: "Бэкенд и структуры данных",
    desc: "Локальные базы SQLite, асинхронные API, минимальный оверхед сторонних библиотек."
  }
];

export default function Approach() {
  return (
    <section className="py-20 px-4 border-t border-neutral-900 bg-neutral-950/20">
      <div className="mx-auto max-w-5xl">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          Подход
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
          Принципы разработки
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/20 p-6"
            >
              <span className="font-mono text-2xl font-bold text-neutral-600">
                {item.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400 text-pretty">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}