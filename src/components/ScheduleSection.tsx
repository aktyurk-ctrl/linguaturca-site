"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function ScheduleSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState({ section: "", action: "" });

  const handleOpenModal = (section: string, action: string) => {
    setModalContext({ section, action });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContext({ section: "", action: "" });
  };
  const groups = [
    {
      title: "Курс с нуля — для самых новичков",
      startDate: "1 ноября",
      time: "19:00",
      teacher: "Дарья",
      level: "A1",
      image: "/images/schedule1.jpg",
      alt: "Турецкий курс для новичков",
      description: "Начнёте говорить по-турецки с первых занятий, освоите базовую грамматику и лексику для общения в повседневных ситуациях. Подходит тем, кто никогда не учил язык раньше."
    },
    {
      title: "Разговорный клуб — уровень A2–B1",
      startDate: "15 ноября",
      time: "20:00",
      teacher: "Али",
      level: "A2-B1",
      image: "/images/schedule1.jpg",
      alt: "Разговорный клуб по турецкому",
      description: "Практикуйте разговорную речь в дружеской атмосфере, обсуждайте интересные темы и преодолевайте языковой барьер. Идеально для тех, кто хочет уверенно общаться на турецком."
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
              className="bg-white rounded-[20px] overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              {/* Desktop layout */}
              <div className="hidden md:flex items-start justify-between p-9 gap-6">
                {/* Левая часть - текст */}
                <div 
                  className="course-info flex flex-col gap-3 flex-1"
                  style={{ maxWidth: '480px' }}
                >
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {group.title}
                    </h3>
                    <span className="text-lg">🇹🇷</span>
                  </div>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">📅</span>
                      <span>Старт: <strong>{group.startDate}</strong> в <strong>{group.time}</strong></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🎓</span>
                      <span>Уровень: <strong>{group.level}</strong> • Преподаватель: <strong>{group.teacher}</strong></span>
                    </div>
                    <div className="text-sm text-gray-600 mt-3">
                      8 занятий онлайн по 60 минут
                    </div>
                  </div>
                  
                  <div className="mt-4">
                     <motion.button 
                       className="btn-main px-8 py-3 text-lg font-semibold"
                       data-form-button
                       data-section="Расписание"
                       whileHover={{ 
                         scale: 1.05,
                         boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
                       }}
                       whileTap={{ scale: 0.98 }}
                     >
                       Занять место
                     </motion.button>
                    <p className="text-sm text-orange-600 font-medium mt-2">
                      Осталось 3 места
                    </p>
                  </div>
                </div>
                
                {/* Правая часть - изображение */}
                <motion.div 
                  className="flex-shrink-0 relative"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={group.image}
                    alt={group.alt}
                    className="rounded-2xl object-cover shadow-lg"
                    style={{ width: '300px', height: '200px' }}
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none"></div>
                </motion.div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden p-6 flex flex-col gap-5">
                {/* Изображение */}
                <div className="flex justify-center">
                  <img 
                    src={group.image}
                    alt={group.alt}
                    className="rounded-2xl object-cover w-full"
                    style={{ maxWidth: '340px', height: '200px' }}
                  />
                </div>
                
                {/* Текст */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {group.title}
                    </h3>
                    <span className="text-lg">🇹🇷</span>
                  </div>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">📅</span>
                      <span>Старт: <strong>{group.startDate}</strong> в <strong>{group.time}</strong></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🎓</span>
                      <span>Уровень: <strong>{group.level}</strong> • Преподаватель: <strong>{group.teacher}</strong></span>
                    </div>
                    <div className="text-sm text-gray-600 mt-3">
                      8 занятий онлайн по 60 минут
                    </div>
                  </div>
                  
                  <div className="mt-4">
                     <motion.button 
                       className="btn-main w-full px-8 py-3 text-lg font-semibold"
                       data-form-button
                       data-section="Расписание"
                       whileHover={{ 
                         scale: 1.05,
                         boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
                       }}
                       whileTap={{ scale: 0.98 }}
                     >
                 Занять место
                     </motion.button>
                    <p className="text-sm text-orange-600 font-medium mt-2 text-center">
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

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </section>
  );
}