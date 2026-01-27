"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teachers, Teacher } from "@/data/teachers";
import TeacherModal from "./TeacherModal";

export default function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById("hero-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const nameInput = formElement.querySelector('input[name="name"]') as HTMLInputElement;
        nameInput?.focus();
      }, 500);
    }
  };

  const handleOpenModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTeacher(null), 300);
  };

  return (
    <>
      <section id="teachers" className="section py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Наши преподаватели
            </h2>
            <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sky-600 font-semibold mb-4">
                    {teacher.role}
                  </p>

                  {/* Level Chip */}
                  <div className="inline-flex items-center rounded-full border border-sky-500 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 mb-4 w-fit">
                    {teacher.levelChip}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {teacher.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <svg
                          className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Подробнее button */}
                  <button
                    onClick={() => handleOpenModal(teacher)}
                    className="w-full text-sky-600 hover:text-sky-700 font-semibold text-sm py-2 border border-sky-200 rounded-lg hover:bg-sky-50 transition-colors duration-200"
                  >
                    Подробнее
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={scrollToForm}
              className="btn-main text-lg px-8 py-3"
            >
              Записаться на консультацию
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <TeacherModal
        teacher={selectedTeacher}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
