"use client";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  const groups = [
    {
      tag: "Курс с нуля — для самых новичков",
      startDate: "1 ноября",
      teacher: "Дарья",
    },
    {
      tag: "Разговорный клуб — уровень A2–B1",
      startDate: "15 ноября",
      teacher: "Али",
    },
  ];

  return (
    <section id="schedule" className="schedule-section py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-12 px-6">
        
        {/* Левая колонка с карточками */}
        <div className="flex-1 flex flex-col justify-center gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Расписание ближайших <span className="text-sky-500">групп</span>
          </motion.h2>

          {/* Карточки */}
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-block bg-sky-200 text-sky-900 font-semibold px-4 py-1.5 rounded-full mb-4">
                {group.tag}
              </span>
              <p className="text-lg mb-1 text-gray-700">📅 Старт <strong>{group.startDate}</strong></p>
              <p className="text-lg mb-4 text-gray-700">👩‍🏫 Преподаватель курса — {group.teacher}</p>
              <button className="bg-sky-500 text-white font-semibold rounded-2xl px-6 py-3 hover:bg-sky-600 transition active:scale-95">
                Занять место
              </button>
            </motion.div>
          ))}
        </div>

        {/* Правая колонка с одним изображением */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src="/images/schedule.jpg"
            alt="Istanbul view"
            className="object-cover w-full h-full rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}