"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLeadModal } from "@/contexts/LeadModalContext";

export default function CourseMiniGroupSection() {
  const { openModal } = useLeadModal();
  return (
    <section className="section bg-sky-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Mobile: Image at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:hidden mb-6"
        >
          <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
            <Image
              src="/images/class1-optimized.webp"
              alt="Мини-группа изучает турецкий"
              fill
              sizes="100vw"
              className="object-cover"
              quality={75}
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Текстовая часть */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-800 mb-3 md:mb-4 leading-[1.3] md:leading-normal">
              Мини-группы
            </h2>
            <p className="text-[15px] md:text-lg italic mb-4 md:mb-6 text-gray-600">5 недель, 10 живых онлайн-уроков</p>
            
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
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
                 onClick={() => openModal({
                   title: "Записаться в мини-группу",
                   subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                   defaultFormat: "Мини-группа",
                   source: "mini-groups"
                 })}
               >
                 Записаться в мини-группу
               </button>
              <p className="text-sm text-gray-600 mt-2">
                от 2 до 4 человек в группе
              </p>
            </div>
          </motion.div>

          {/* Desktop: Image on right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-1 justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/class1-optimized.webp"
                alt="Мини-группа изучает турецкий"
                fill
                sizes="50vw"
                className="object-cover hover:shadow-lg transition-shadow duration-300"
                quality={75}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
