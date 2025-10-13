"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ScheduleSection() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-brand-text">
            Расписание ближайших <span className="text-brand-primary">групп</span>
          </h2>
          <div className="bg-brand-secondary inline-block px-4 py-1 rounded-full text-sm font-semibold text-brand-text mt-2">
            Курс с нуля — для самых новичков
          </div>
          <p className="mt-6 text-gray-700">
            📅 Старт <strong>1 ноября</strong> <br />
            👩‍🏫 Преподаватель курса — Дарья
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient mt-6"
          >
            Занять место
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/images/schedule.jpg"
            alt="Башня Девы в Стамбуле"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}