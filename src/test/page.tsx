"use client";

import { useEffect } from "react";

declare global {
  interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    sendData: (data: string) => void;
  }

  interface TelegramNamespace {
    WebApp?: TelegramWebApp;
  }

  interface Window {
    Telegram?: TelegramNamespace;
  }
}

export default function TestPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  const sendDemoResult = () => {
    if (
      typeof window !== "undefined" &&
      window.Telegram?.WebApp?.sendData
    ) {
      window.Telegram.WebApp.sendData(
        JSON.stringify({
          level: "A1",
          score: 5,
          segment: "beginner",
        })
      );
    }
    alert("Тестовый результат отправлен боту!");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "480px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>LinguaTurca Mini App</h1>
      <p>Это шаблон теста уровня турецкого языка. Всё работает корректно.</p>

      <p style={{ marginTop: 20, opacity: 0.8 }}>
        Позже здесь появится полноценный адаптивный тест от Дарьи.
      </p>

      <button
        onClick={sendDemoResult}
        style={{
          marginTop: "30px",
          padding: "16px 20px",
          background: "#0088cc",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Отправить тестовый результат боту
      </button>
    </div>
  );
}
