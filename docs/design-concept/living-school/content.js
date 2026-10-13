// Review-only source data. No API, Airtable, tracking or production imports.
window.schoolTariffs = [
  {
    id: 'base',
    title: 'Базовый',
    price: '7 590',
    description: 'Занятия в мини-группе.',
    features: ['Общая основа: занятия, материалы и обратная связь.'],
  },
  {
    id: 'comfort',
    title: 'Комфорт',
    price: '8 600',
    description: 'К занятиям — культура и общение.',
    features: [
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и коммьюнити',
      'Рабочая тетрадь и памятка «Такие похожие слова»',
    ],
  },
  {
    id: 'business',
    title: 'Бизнес',
    price: '13 000',
    description: 'К занятиям — индивидуальная практика.',
    features: [
      'Дополнительный индивидуальный урок: 30 минут каждую неделю',
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и коммьюнити',
      'Курс по произношению',
    ],
  },
];

// Slots are explicitly incomplete review content, not invented teacher identities.
window.schoolTeam = [
  {
    id: 'darya',
    name: 'Дарья Колосова',
    role: 'Основатель и куратор школы',
    // The only portrait is already in the hero. Add a distinct approved photo here later.
    photo: null,
    description: 'Лингвист, специалист по турецкому языку.',
    education: null,
    note: 'В исходных данных указана аспирантура. Точную формулировку образования нужно сверить.',
  },
  { id: 'pending-2', pending: true },
  { id: 'pending-3', pending: true },
  { id: 'pending-4', pending: true },
];
