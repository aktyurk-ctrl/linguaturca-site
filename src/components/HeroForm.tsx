"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function HeroForm() {
  const pathname = usePathname();
  const nameInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        format: "Бесплатная консультация",
        source: "hero",
        page: pathname || "/",
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

  const handleReset = () => {
    setSuccess(false);
    setError(null);
    setFormData({ name: "", phone: "" });
    nameInputRef.current?.focus();
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("hero-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 500);
    }
  };

  return (
    <div
      id="hero-form"
      className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto border border-gray-100"
    >
        {success ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Спасибо!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Мы получили заявку и скоро свяжемся с вами.
            </p>
            <button
              onClick={handleReset}
              className="text-sm text-sky-600 hover:text-sky-700 font-medium"
            >
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Бесплатная консультация
            </h3>
            <p className="text-gray-800 text-sm mb-6 font-medium" style={{ color: '#374151' }}>
              Оставьте контакты — мы свяжемся с вами в течение 24 часов
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  ref={nameInputRef}
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
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
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !formData.name || !formData.phone}
                className="w-full bg-sky-500 text-white rounded-xl py-3 font-semibold hover:bg-sky-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

            <p className="text-xs md:text-sm text-center mt-4 leading-relaxed" style={{ color: '#6B7280', fontSize: '13px' }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </>
        )}
      </div>
  );
}
