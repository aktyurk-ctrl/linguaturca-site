// Review-only source data. No API, Airtable, tracking or production imports.
window.schoolTariffs = [
  {
    id: 'base',
    title: 'Базовый',
    price: '7 590',
    description: 'Если хотите сосредоточиться на основном курсе.',
    features: ['Основная программа без дополнительных лекций и индивидуальных встреч.'],
  },
  {
    id: 'comfort',
    title: 'Комфорт',
    price: '8 600',
    description: 'Если хотите дополнить уроки культурой и общением со школой.',
    features: [
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и сообщество школы',
      'Рабочая тетрадь с упражнениями и памятка «Такие похожие слова»',
    ],
  },
  {
    id: 'business',
    title: 'Бизнес',
    price: '13 000',
    description: 'Если к группе хотите добавить индивидуальную работу с преподавателем.',
    features: [
      'Дополнительный индивидуальный урок: 30 минут каждую неделю',
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и сообщество школы',
      'Курс по произношению',
    ],
  },
];

// Current teacher identity comes from production AboutSection; other names only from review originals.
window.schoolTeam = [
  {
    id: 'darya',
    name: 'Дарья Колосова',
    role: 'Основатель и преподаватель',
    photo: null,
    description:
      'Лингвист с высшим образованием. Собрала команду тюркологов и создала учебные материалы школы.',
    detail: 'Преподаёт турецкий и курирует Linguaturca.',
  },
  { id: 'margarita-review', name: 'Маргарита', sourceOnly: true, review: '1' },
  { id: 'valeria-review', name: 'Валерия', sourceOnly: true, review: '2' },
  { id: 'marina-review', name: 'Марина', sourceOnly: true, review: '3' },
];
