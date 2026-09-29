'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    number: "01",
    title: "Модульная архитектура",
    desc: "Разделение логики, UI-компонентов\u00A0и данных. Никаких «монолитных простыней»\u00A0— код легко масштабировать\u00A0и поддерживать."
  },
  {
    number: "02",
    title: "Внимание к деталям & Figma",
    desc: "Точный перенос дизайн-системы, продуманные микроанимации\u00A0и отзывчивый интерфейс без\u00A0дерганой верстки."
  },
  {
    number: "03",
    title: "Эффективный бэкенд\u00A0и данные",
    desc: "Работа со\u00A0структурами данных, локальными БД\u00A0(SQLite)\u00A0и асинхронными внешними API без\u00A0оверхеда лишних зависимостей."
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
          Как я подхожу к&nbsp;разработке
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
              <p className="mt-2 text-sm leading-relaxed text-neutral-400 text-balance">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}