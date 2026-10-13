// Review-only source data. No API, Airtable, tracking or production imports.
window.schoolTariffs = [
  {
    id: 'base',
    title: 'Базовый',
    price: '7 590',
    description: 'Занятия и основные материалы.',
    features: ['Занятия в группе', 'Учебные материалы', 'Обратная связь преподавателя'],
  },
  {
    id: 'comfort',
    title: 'Комфорт',
    price: '8 600',
    oldPrice: '9 200',
    description: 'Язык, культура и общение со школой.',
    features: [
      'Всё из «Базового»',
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и коммьюнити',
      'Рабочая тетрадь и памятка «Такие похожие слова»',
    ],
  },
  {
    id: 'business',
    title: 'Бизнес',
    price: '13 000',
    oldPrice: '15 200',
    description: 'Расширенный состав занятий.',
    features: [
      'Занятия, материалы и обратная связь',
      'Лекция о турецком менталитете или истории Турции',
      '«Турецкая гостиная»: созвон с Дарьей, чат поддержки и коммьюнити',
      'Дополнительный индивидуальный урок: 30 минут каждую неделю',
      'Курс по произношению в подарок',
    ],
  },
];

// Slots are explicitly incomplete review content, not invented teacher identities.
window.schoolTeam = [
  {
    id: 'darya',
    name: 'Дарья Колосова',
    role: 'Основатель и куратор школы',
    photo: '../../../public/images/founder-optimized.webp',
    description:
      'Лингвист, специалист по турецкому языку. Собирает команду и учебные материалы Linguaturca.',
    education: 'СПбГУ · тюркская филология',
    note: 'В исходных данных указана аспирантура. Точную формулировку образования нужно сверить.',
  },
  { id: 'pending-2', pending: true },
  { id: 'pending-3', pending: true },
  { id: 'pending-4', pending: true },
];
