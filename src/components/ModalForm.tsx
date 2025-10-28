"use client";
import { useState, useEffect } from "react";

export default function ModalForm() {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState({ section: "", button: "" });
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    email: "",
    format: ""
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Слушаем клики по кнопкам с data-атрибутами
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const button = target.closest("[data-form-button]") as HTMLElement;
      if (button) {
        const section = button.dataset.section || "Не указано";
        const text = button.innerText?.trim() || "";
        setContext({ section, button: text });
        setOpen(true);
        // Сбрасываем состояние формы
        setSent(false);
        setFormData({ name: "", phone: "", email: "", format: "" });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/airtable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          section: context.section,
          button: context.button,
        }),
      });

      const result = await res.json();
      if (result.success) setSent(true);
      else alert("Ошибка при отправке формы");
    } catch (err) {
      alert("Ошибка соединения");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Отлично!</h3>
            <p className="text-green-600 text-lg font-medium">
              Спасибо! Мы скоро свяжемся с вами 💫
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {context.button || "Запись на занятие"}
              </h3>
              <p className="text-gray-600 text-sm">
                Оставьте контакты, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  required
                  value={formData.phone}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email (обязательно)"
                  value={formData.email}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <select
                  value={formData.format}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-white"
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                >
                  <option value="">Формат занятий (необязательно)</option>
                  <option value="Мини-группа">Мини-группа</option>
                  <option value="Индивидуально">Индивидуально</option>
                  <option value="Пока не знаю">Пока не знаю</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !formData.name || !formData.phone}
                className="w-full bg-blue-500 text-white rounded-xl py-3 font-semibold hover:bg-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
      </div>
    </div>
  );
}
