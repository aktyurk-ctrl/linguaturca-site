"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function CourseMiniGroupSection() {
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
  return (
    <section className="section bg-sky-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Текстовая часть */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Мини-группы
          </h2>
          <p className="text-lg italic mb-6 text-gray-600">5 недель, 10 живых онлайн-уроков</p>
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>– 10 занятий в мини-группе в Zoom</li>
              <li>– записи уроков</li>
              <li>– авторские материалы</li>
              <li>– доступ в личный кабинет</li>
              <li>– каждую неделю памятки со словами на тематику недели</li>
              <li>– пожизненный доступ ко всем материалам</li>
              <li>– обучение с нулевого уровня до B2</li>
            </ul>
          </div>

          <div className="mt-6">
             <button 
               className="btn-main"
               data-form-button
               data-section="Мини-группы"
             >
               Записаться в мини-группу
             </button>
            <p className="text-sm text-gray-600 mt-2">
              от 2 до 4 человек в группе
            </p>
          </div>
        </motion.div>

        {/* Изображение */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/images/class1.jpg"
              alt="Мини-группа изучает турецкий"
              width={500}
              height={500}
              className="rounded-2xl shadow-md object-cover hover:shadow-lg transition-shadow duration-300 aspect-square"
            />
          </div>
        </motion.div>
      </div>

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </section>
  );
}
