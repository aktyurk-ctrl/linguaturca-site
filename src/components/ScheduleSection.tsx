"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLeadModal } from "@/contexts/LeadModalContext";

export default function ScheduleSection() {
  const { openModal } = useLeadModal();
  
  const groups = [
    {
      title: "Курс с нуля",
      startDate: "1 февраля",
      time: "19:00",
      teacher: "Дарья",
      level: "нулевой",
      image: "/images/schedule1-optimized.webp",
      alt: "Турецкий курс для новичков",
      description: "Начнёте говорить по-турецки с первых занятий, освоите базовую грамматику и лексику для общения в повседневных ситуациях. Подходит тем, кто никогда не учил язык раньше."
    },
    {
      title: "Группа A2",
      startDate: "1 февраля",
      time: "20:00",
      teacher: "Дарья",
      level: "средний",
      image: "/images/schedule1-optimized.webp",
      alt: "Турецкий курс среднего уровня",
      description: "Продолжайте изучение турецкого языка на среднем уровне. Углубите знания грамматики и расширите словарный запас для более свободного общения."
    },
  ];

  return (
    <section 
      id="schedule" 
      className="section"
      style={{
        background: 'linear-gradient(180deg, #F8FBFF, #FFFFFF)'
      }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-4xl font-bold text-gray-900 text-center mb-6 md:mb-12 leading-[1.3] md:leading-normal"
        >
          Расписание ближайших <span className="text-sky-500">групп</span>
        </motion.h2>

        {/* Vertical List - All devices */}
        <div className="space-y-6 mb-12 max-w-4xl mx-auto">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[20px] overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              {/* Card layout */}
              <div className="flex flex-col p-5 md:p-6 gap-4">
                {/* Изображение */}
                <div className="relative w-full h-[180px] md:h-[200px] rounded-2xl overflow-hidden">
                  <Image 
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                  />
                </div>

                {/* Текст */}
                <div className="course-info flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {group.title}
                    </h3>
                    <span className="text-lg">🇹🇷</span>
                  </div>
                  
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center">
                      <span className="text-base mr-2">📅</span>
                      <span>Старт: <strong>{group.startDate}</strong><span className="md:hidden"> в <strong>{group.time}</strong></span></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-base mr-2">🎓</span>
                      <span>Уровень: <strong>{group.level}</strong> • Преподаватель: <strong>{group.teacher}</strong></span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      10 занятий по 60 минут, 5 недель
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <motion.button 
                      className="btn-main w-full px-6 py-3 text-base font-semibold"
                      onClick={() => openModal({
                        title: "Занять место в группе",
                        subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                        defaultFormat: group.title,
                        source: "schedule",
                        level: group.level,
                        startDate: group.startDate
                      })}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Занять место
                    </motion.button>
                    <p className="text-xs text-orange-600 font-medium mt-2 text-center">
                      Осталось 3 места
                    </p>
                  </div>
                </div>
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
