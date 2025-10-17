import { NextResponse } from "next/server";

// ⚙️ Этот API-роут принимает данные формы LinguaTurca и отправляет их в Airtable.
// Ожидаемые поля: name, phone, email, format, section, button

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📩 Получен запрос:", body);

    // соответствие английских ключей и русских полей
    const Имя = body.name || body.Имя;
    const Телефон = body.phone || body.Телефон;
    const Email = body.email || body.Email;
    const Формат = body.format || body["Формат обучения"];
    const Секция = body.section || body["Секция сайта"];
    const Кнопка = body.button || body["Текст кнопки"];

    if (!Имя || !Телефон || !Email) {
      console.error("❌ Отсутствуют обязательные поля:", {
        name: !!Имя,
        phone: !!Телефон,
        email: !!Email,
      });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_NAME) {
      console.error('❌ Отсутствуют переменные окружения Airtable')
      return NextResponse.json(
        { success: false, error: 'Ошибка конфигурации сервера' },
        { status: 500 }
      )
    }

    const airtablePayload = {
      fields: {
        Имя,
        Телефон,
        Email,
        "Формат обучения": Формат || '',
        "Секция сайта": Секция || '',
        "Текст кнопки": Кнопка || '',
      },
    };

    console.log('📤 Отправляем в Airtable:', airtablePayload);

    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtablePayload),
      }
    );

    const data = await res.json();
    console.log("✅ Ответ Airtable:", data);

    if (!res.ok) throw new Error(JSON.stringify(data));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("💥 Ошибка при отправке в Airtable:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
