'use client'

import { useEffect, useState } from 'react'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = typeof window !== 'undefined' && localStorage.getItem('cookie-consent')
    if (!accepted) setVisible(true)
  }, [])

  if (!visible) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] card p-4">
      <div className="text-sm text-gray-800">
        Мы используем cookies для улучшения работы сайта. Продолжая пользоваться сайтом, вы
        соглашаетесь с нашей политикой конфиденциальности.
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button
          className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50"
          onClick={() => setVisible(false)}
        >
          Отклонить
        </button>
        <button
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => {
            localStorage.setItem('cookie-consent', 'accepted')
            setVisible(false)
          }}
        >
          Принять
        </button>
      </div>
    </div>
  )
}


