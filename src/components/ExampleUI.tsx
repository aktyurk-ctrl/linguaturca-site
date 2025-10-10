"use client";
import { motion } from "framer-motion";

export default function ExampleUI() {
  return (
    <section className="section text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Наши преподаватели
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="card-hover"
        >
          <p className="badge mb-3">6+ лет опыта</p>
          <h3 className="text-xl font-bold mb-2 text-brand-violet">
            Айше К.
          </h3>
          <p className="text-sm text-muted">
            Магистр турецкого языка, выпускница университета Анкары.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="card-hover"
        >
          <p className="badge-pink mb-3">10+ лет опыта</p>
          <h3 className="text-xl font-bold mb-2 text-brand-violet">
            Дарья К.
          </h3>
          <p className="text-sm text-muted">
            Основательница школы LinguaTurca, преподаватель и лингвист.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="card-hover"
        >
          <p className="badge-mint mb-3">5+ лет опыта</p>
          <h3 className="text-xl font-bold mb-2 text-brand-violet">
            Мехмет А.
          </h3>
          <p className="text-sm text-muted">
            Носитель языка, специалист по разговорной практике.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          Хочу на пробный урок
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-outline"
        >
          Узнать больше
        </motion.button>
      </div>

      <div className="mt-16 gradient-bg rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-brand-violet mb-4">
          Почему выбирают LinguaTurca?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="font-semibold text-brand-violet mb-2">Эксперты</h4>
            <p className="text-sm text-muted">Магистры турецкого языка</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="font-semibold text-brand-violet mb-2">Мини-группы</h4>
            <p className="text-sm text-muted">2-4 человека в группе</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-semibold text-brand-violet mb-2">Практика</h4>
            <p className="text-sm text-muted">Говорим с первого урока</p>
          </div>
        </div>
      </div>
    </section>
  );
}
