"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { usePathname } from "next/navigation";

const FORMAT_OPTIONS = [
  "Бесплатная консультация",
  "Индивидуальные занятия",
  "Мини-группа",
  "Группа A1",
  "Группа A2",
  "Группа B1",
  "Группа B2",
] as const;

export default function LeadModal() {
  const { isOpen, config, closeModal } = useLeadModal();
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    format: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen && config) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        format: config.defaultFormat || "",
      });
      setSuccess(false);
      setError(null);
    }
  }, [isOpen, config]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        format: formData.format || undefined,
        source: config?.source || undefined,
        page: pathname || undefined,
        level: config?.level || undefined,
        startDate: config?.startDate || undefined,
      };

      const res = await fetch("/api/airtable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Ошибка при отправке формы");
      }

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Произошла ошибка. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !config) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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

          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Спасибо!
              </h3>
              <p className="text-gray-600 mb-6">
                Мы получили заявку и свяжемся с вами в ближайшее время.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-500 text-white rounded-xl py-3 font-semibold hover:bg-blue-600 transition-all duration-200"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {config.title}
                </h3>
                <p className="text-gray-600 text-sm">{config.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (обязательно)"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <select
                    name="format"
                    value={formData.format}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Формат занятий (необязательно)</option>
                    {FORMAT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading || !formData.name || !formData.phone || !formData.email}
                  className="w-full bg-blue-500 text-white rounded-xl py-3 font-semibold hover:bg-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    "Отправить заявку"
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
