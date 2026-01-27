import { NextResponse } from "next/server";

// ⚙️ Этот API-роут принимает данные формы LinguaTurca и отправляет их в Airtable.
  // Ожидаемые поля: name, phone, email, format, source, page

// Разрешенные значения для поля "Формат обучения" в Airtable
const ALLOWED_FORMATS = [
  "Бесплатная консультация",
  "Индивидуальные занятия",
  "Мини-группа",
  "Группа A1",
  "Группа A2",
  "Группа B1",
  "Группа B2",
] as const;

function mapFormatToAirtable(format?: string): string {
  if (!format) return "";
  
  // Проверяем, есть ли формат в разрешенном списке
  if (ALLOWED_FORMATS.includes(format as any)) {
    return format;
  }
  
  // Если формат не найден, возвращаем пустую строку (поле будет пропущено)
  console.warn(`⚠️ Неизвестный формат: "${format}". Поле будет пропущено.`);
  return "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📩 Получен запрос:", body);

    // соответствие английских ключей и русских полей
    const Имя = body.name || body.Имя;
    const Телефон = body.phone || body.Телефон;
    const Email = body.email || body.Email;
    const source = body.source || body["Секция сайта"] || "";
    const page = body.page || "";
    const level = body.level || "";
    const startDate = body.startDate || "";
    
    // Маппим формат в безопасное значение
    const rawFormat = body.format || body["Формат обучения"];
    const Формат = mapFormatToAirtable(rawFormat);

    if (!Имя || !Телефон) {
      console.error("❌ Отсутствуют обязательные поля:", {
        name: !!Имя,
        phone: !!Телефон,
        email: !!Email,
      });
      return NextResponse.json(
        { success: false, error: "Отсутствуют обязательные поля" },
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

    // Формируем payload для Airtable (явный allow-list полей)
    const airtableFields: Record<string, string> = {
      Имя,
      Телефон,
    };

    // Добавляем email только если он есть
    if (Email) {
      airtableFields.Email = Email;
    }

    // Добавляем формат только если он валидный
    if (Формат) {
      airtableFields["Формат обучения"] = Формат;
    }

    // Добавляем источник, если он есть
    if (source) {
      airtableFields["Секция сайта"] = source;
    }

    // Добавляем уровень и дату старта как текстовые поля (безопасно)
    if (level) {
      airtableFields["Уровень"] = level;
    }

    if (startDate) {
      airtableFields["Дата старта"] = startDate;
    }

    const airtablePayload = {
      fields: airtableFields,
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

    if (!res.ok) {
      // Логируем полный ответ от Airtable для отладки
      console.error("❌ Ошибка Airtable:", JSON.stringify(data, null, 2));
      
      // Извлекаем понятное сообщение об ошибке
      let errorMessage = "Ошибка при отправке данных";
      if (data.error?.message) {
        errorMessage = data.error.message;
      } else if (data.error?.type === "INVALID_MULTIPLE_CHOICE_OPTIONS") {
        errorMessage = "Некорректное значение поля 'Формат обучения'";
      }
      
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("💥 Ошибка при отправке в Airtable:", error);
    const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка сервера";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
