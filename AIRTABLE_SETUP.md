# Инструкция по настройке интеграции с Airtable

## 📋 Шаги настройки:

### 1. Создание Personal Access Token в Airtable
1. Войдите в ваш аккаунт Airtable
2. Перейдите в **Account** → **Developer Hub**
3. Нажмите **Personal Access Tokens**
4. Создайте новый токен с правами:
   - `data.records:write` (для записи данных)
   - `data.records:read` (для чтения данных)
5. Скопируйте созданный токен

### 2. Получение Base ID
1. Откройте вашу базу данных в Airtable
2. Скопируйте ID из URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. ID базы - это часть после `app` и до первого `/`

### 3. Название таблицы
1. В вашей базе данных найдите нужную таблицу
2. Название таблицы может быть:
   - `Table%201` (если таблица называется "Table 1")
   - `Заявки` (если таблица называется "Заявки")
   - `Contacts` (если таблица называется "Contacts")

### 4. Настройка переменных окружения
Отредактируйте файл `.env.local` в корне проекта:

```env
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Table%201
```

### 5. Структура таблицы в Airtable
Убедитесь, что в вашей таблице Airtable есть следующие поля:
- `Name` (Single line text)
- `Phone` (Single line text)
- `Email` (Email)
- `Comment` (Long text)
- `Section` (Single line text)
- `Button` (Single line text)
- `Дата отправки` (Date)

### 6. Тестирование
1. Запустите проект: `npm run dev`
2. Откройте сайт: `http://localhost:3000`
3. Нажмите любую кнопку "Записаться"
4. Заполните форму и отправьте
5. Проверьте, что данные появились в Airtable

## 🔧 Устранение неполадок:

### Ошибка 404
- Убедитесь, что файл `src/app/api/airtable/route.ts` создан
- Перезапустите сервер разработки

### Ошибка 500
- Проверьте правильность переменных окружения
- Убедитесь, что API ключ имеет нужные права
- Проверьте название таблицы (должно быть URL-encoded)

### Ошибка авторизации
- Проверьте правильность API ключа
- Убедитесь, что токен не истек
- Проверьте права доступа токена

## 📝 Примеры значений:

```env
# Пример для таблицы "Table 1"
AIRTABLE_TABLE_NAME=Table%201

# Пример для таблицы "Заявки"
AIRTABLE_TABLE_NAME=Заявки

# Пример для таблицы "Contacts"
AIRTABLE_TABLE_NAME=Contacts
```
