"use client";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  const groups = [
    {
      tag: "Курс с нуля — для самых новичков",
      startDate: "1 ноября",
      time: "19:00",
      teacher: "Дарья",
      level: "A1",
    },
    {
      tag: "Разговорный клуб — уровень A2–B1",
      startDate: "15 ноября",
      time: "20:00",
      teacher: "Али",
      level: "A2-B1",
    },
    {
      tag: "Интенсивный курс — для быстрого результата",
      startDate: "20 ноября",
      time: "18:00",
      teacher: "Дарья",
      level: "A1-A2",
    },
  ];

  return (
    <section id="schedule" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Расписание ближайших <span className="text-sky-500">групп</span>
        </motion.h2>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <span className="inline-block bg-sky-100 text-sky-800 font-semibold px-3 py-1 rounded-full mb-4 text-sm">
                {group.tag}
              </span>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-gray-700">📅 Старт <strong>{group.startDate}</strong></p>
                <p className="text-gray-700">🕓 Время <strong>{group.time}</strong></p>
                <p className="text-gray-700">🎓 Уровень <strong>{group.level}</strong></p>
                <p className="text-gray-700">👩‍🏫 Преподаватель — <strong>{group.teacher}</strong></p>
              </div>
              <button className="btn-main w-full">
                Занять место
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-outline">
            Смотреть все группы
          </button>
        </div>
      </div>
    </section>
  );
}