import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("✅ Диагностика завершена: API route найден и доступен"); // FIXED BY CURSOR
    
    const data = await request.json();

    console.log("📩 Получен запрос:", data);

    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
      throw new Error("❌ Переменные окружения Airtable не найдены");
    }

    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Имя: data.name,
          Телефон: data.phone,
          Email: data.email,
          Формат: data.format,
          Секция: data.section,
          Кнопка: data.button,
        },
      }),
    });

    const result = await res.json();
    console.log("✅ Ответ Airtable:", result);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("🔥 Ошибка при запросе к Airtable:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}