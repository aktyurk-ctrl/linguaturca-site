"use client";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  const groups = [
    {
      title: "Курс с нуля — для самых новичков",
      startDate: "1 ноября",
      time: "19:00",
      teacher: "Дарья",
      level: "A1",
      image: "/images/schedule1.jpg",
      alt: "Турецкий курс для новичков",
    },
    {
      title: "Разговорный клуб — уровень A2–B1",
      startDate: "15 ноября",
      time: "20:00",
      teacher: "Али",
      level: "A2-B1",
      image: "/images/schedule2.jpg",
      alt: "Разговорный клуб по турецкому",
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
        <div className="space-y-8 mb-12">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Левая часть - текст */}
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>📅 Старт: <strong>{group.startDate}</strong></li>
                    <li>🕓 Время: <strong>{group.time}</strong></li>
                    <li>🎓 Уровень: <strong>{group.level}</strong></li>
                    <li>👩‍🏫 Преподаватель: <strong>{group.teacher}</strong></li>
                  </ul>
                </div>
                <button className="btn-main mt-6 w-full md:w-auto self-start">
                  Занять место
                </button>
              </div>
              
              {/* Правая часть - изображение */}
              <div className="md:w-2/5 relative">
                <img 
                  src={group.image}
                  alt={group.alt}
                  className="object-cover h-full w-full md:rounded-r-2xl rounded-b-2xl md:rounded-b-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA кнопка */}
        <div className="text-center mt-10">
          <button className="btn-outline">
            Смотреть все группы
          </button>
        </div>
      </div>
    </section>
  );
}