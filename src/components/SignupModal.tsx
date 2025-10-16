"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalContext {
  section: string;
  action: string;
}

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: ModalContext;
}

export default function SignupModal({ isOpen, onClose, context }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Определяем контент в зависимости от контекста
  let title = "Запишитесь на занятие";
  let subtitle = "Оставьте заявку, и мы свяжемся с вами";

  if (context.section === "nav" && context.action === "signup") {
    title = "Начните обучение в LinguaTurca";
    subtitle = "Оставьте заявку, чтобы подобрать формат обучения";
  } else if (context.section === "hero") {
    title = "Запишитесь на курс турецкого";
    subtitle = "Первое занятие — в подарок 🎁";
  } else if (context.section === "pricing" && context.action === "group") {
    title = "Запишитесь в мини-группу";
    subtitle = "Учитесь в команде и достигайте цели вместе";
  } else if (context.section === "consultation") {
    title = "Бесплатная консультация";
    subtitle = "Познакомьтесь с преподавателем и узнайте свой уровень";
  } else if (context.section === "upcoming_groups") {
    title = "Занять место в группе";
    subtitle = "Количество мест ограничено!";
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Выводим данные в консоль
    console.log({
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      section: context.section,
      action: context.action,
    });
    
    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setFormData({ name: "", phone: "", message: "" });
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mx-4 relative min-h-[60vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition-colors duration-200"
          >
            ×
          </button>

          {/* Заголовок */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            {title}
          </h2>

          {/* Подзаголовок */}
          <p className="text-gray-600 mb-6 text-center">
            {subtitle}
          </p>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
            {/* Поле имени */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ваше имя"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Поле телефона */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Номер телефона"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Поле комментария */}
            <div className="flex-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Комментарий (по желанию)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Кнопка отправки */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#009EFF] hover:bg-[#007ACC] text-white font-semibold rounded-full py-3 px-6 w-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Отправляем..." : "Отправить заявку"}
            </motion.button>
          </form>

          {/* Дополнительная информация */}
          <p className="text-center mt-4 text-sm text-gray-500">
            Мы свяжемся с вами в течение 24 часов
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
