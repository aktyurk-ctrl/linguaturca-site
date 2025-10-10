export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFF8F5] text-center px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
        Страница в разработке 💬
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Совсем скоро здесь появится форма для записи на бесплатную консультацию.  
        А пока вы можете написать нам в Telegram или Instagram — мы обязательно ответим!
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="https://t.me/linguaturca"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[#F97362] text-white font-semibold hover:opacity-90 transition"
        >
          Написать в Telegram
        </a>
        <a
          href="https://instagram.com/linguaturca"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#1E3A8A] hover:text-white transition"
        >
          Instagram
        </a>
      </div>
    </main>
  )
}
