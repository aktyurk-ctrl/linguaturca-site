"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Teacher } from "@/data/teachers";

interface TeacherModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeacherModal({ teacher, isOpen, onClose }: TeacherModalProps) {
  if (!teacher || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Закрыть"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src={teacher.image}
                alt={teacher.imageAlt}
                width={200}
                height={250}
                sizes="200px"
                className="rounded-xl shadow-md object-cover w-full max-w-[200px] mx-auto"
                quality={75}
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {teacher.name}
              </h3>
              <p className="text-xl text-sky-600 font-semibold mb-4">
                {teacher.role}
              </p>
              
              <div className="inline-flex items-center rounded-full border border-sky-500 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700 mb-6">
                {teacher.levelChip}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {teacher.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-sky-500 flex-shrink-0"
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

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed text-base">
                {teacher.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
