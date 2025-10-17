import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, format, section, button } = body

    // Проверяем обязательные поля
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    // Данные для отправки в Airtable
    const airtableData = {
      fields: {
        'Имя': name,
        'Телефон': phone,
        'Email': email || '',
        'Формат занятий': format || '',
        'Секция сайта': section || '',
        'Кнопка': button || '',
        'Дата заявки': new Date().toISOString(),
        'Источник': 'Сайт LinguaTurca'
      }
    }

    // Отправляем данные в Airtable
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Заявки`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableData),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Airtable API Error:', errorData)
      return NextResponse.json(
        { success: false, error: 'Ошибка при сохранении данных' },
        { status: 500 }
      )
    }

    const result = await response.json()
    console.log('Successfully saved to Airtable:', result)

    return NextResponse.json({ success: true, data: result })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
