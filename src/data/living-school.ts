// Source: approved living-school at 6f6228b. Content gaps remain explicit.
// See docs/design-concept/living-school/CONTENT-AUDIT.md; source code does not prove current availability.
export type FormatId = 'help' | 'mini' | 'individual';
export interface LearningFormat {
  id: Exclude<FormatId, 'help'>;
  className: string;
  label: string;
  participants: string;
  title: string;
  description: string;
  details: readonly { term: string; value: string }[];
  priceNote: string;
  cta: string;
}
export interface Tariff {
  id: string;
  title: string;
  price: string;
  description: string;
  features: readonly string[];
}
export type Teacher =
  | {
      id: string;
      name: string;
      sourceOnly?: false;
      role: string;
      photo: string | null;
      description: string;
      detail: string;
    }
  | { id: string; name: string; sourceOnly: true; review: string };
export interface Review {
  id: string;
  quote: string;
  author: string;
  image: string;
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export const formats: readonly LearningFormat[] = [
  {
    id: 'mini',
    className: 'group',
    label: 'Mini grup',
    participants: '2–4 человека',
    title: 'В небольшой группе',
    description: 'Для тех, кому нужна разговорная практика с другими учениками.',
    details: [
      {
        term: 'Занятия',
        value: '10 × 60 минут · 5 недель',
      },
      {
        term: 'Встречи',
        value: 'В Zoom, с преподавателем',
      },
      {
        term: 'После урока',
        value: 'Запись, авторские материалы, обратная связь',
      },
    ],
    priceNote: 'тарифы мини-группы',
    cta: 'Выбрать группу',
  },
  {
    id: 'individual',
    className: 'individual',
    label: 'Bire bir',
    participants: '1 ученик + преподаватель',
    title: 'Индивидуально',
    description: 'Для тех, кому нужны свой темп и программа под личную задачу.',
    details: [
      {
        term: 'Занятие',
        value: '60 минут',
      },
      {
        term: 'Формат',
        value: 'Онлайн в Zoom',
      },
      {
        term: 'Программа',
        value: 'Индивидуальная',
      },
    ],
    priceNote: 'за одно занятие',
    cta: 'Учиться один на один',
  },
];
export const groupTariffs: readonly Tariff[] = [
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
// TODO(owner): confirm current roles, education and portraits. Review mentions are NOT current staff records.
export const teachers: readonly Teacher[] = [
  {
    id: 'darya',
    name: 'Дарья Колосова',
    role: 'Основатель и преподаватель',
    photo: null,
    description:
      'Лингвист с высшим образованием. Собрала команду тюркологов и создала учебные материалы школы.',
    detail: 'Преподаёт турецкий и курирует Linguaturca.',
  },
  {
    id: 'margarita-review',
    name: 'Маргарита',
    sourceOnly: true,
    review: '1',
  },
  {
    id: 'valeria-review',
    name: 'Валерия',
    sourceOnly: true,
    review: '2',
  },
  {
    id: 'marina-review',
    name: 'Марина',
    sourceOnly: true,
    review: '3',
  },
];
export const reviews: readonly Review[] = [
  {
    id: '1',
    quote: 'Как педагог скажу, что все последовательно и грамотно.',
    author: 'Из отзыва о занятиях с Маргаритой',
    image: '/images/review-screenshot-1-optimized.webp',
  },
  {
    id: '2',
    quote:
      'Дарья, мне понравилось заниматься у Валерии. Уверена, что и другие преподаватели ваших курсов такие же профессионалы и просто приятные люди.',
    author: 'Динара',
    image: '/images/review-screenshot-2-optimized.webp',
  },
  {
    id: '3',
    quote:
      'Любить учителя, любить занятия, заниматься с удовольствием — это всё благодаря Вам и Вашей школе!!!',
    author: 'Наталья',
    image: '/images/review-screenshot-3-optimized.webp',
  },
];
// No production FAQ existed. These answers are derived from verified product descriptions.
export const faq: readonly FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Можно начать турецкий с нуля?',
    answer:
      'Да, в школе есть обучение для начинающих. Программу и подходящий формат подберём на консультации.',
  },
  {
    id: 'faq-2',
    question: 'Как определить уровень?',
    answer:
      'На бесплатной онлайн-консультации с преподавателем. Она занимает 10–15 минут: определим уровень и подберём программу.',
  },
  {
    id: 'faq-3',
    question: 'Где проходят занятия?',
    answer:
      'В Zoom, вживую с преподавателем. В мини-группе 2–4 ученика, на индивидуальном уроке — один ученик и преподаватель.',
  },
  {
    id: 'faq-4',
    question: 'Что делать, если пропущу урок?',
    answer:
      'В мини-группе есть записи занятий. Срок доступа к ним, условия переноса и отмены уточним перед записью.',
  },
  {
    id: 'faq-5',
    question: 'Какие материалы есть в мини-группе?',
    answer:
      'Авторские учебные материалы, записи уроков и еженедельные памятки со словами по теме. Дополнения, например рабочая тетрадь, зависят от тарифа.',
  },
  {
    id: 'faq-6',
    question: 'Как выбрать между группой и индивидуальными?',
    answer:
      'В группе вы практикуетесь с другими учениками. Индивидуальные занятия подходят, когда важны персональная программа и свой темп. На консультации поможем выбрать.',
  },
];
export const individualTariffs = [
  {
    id: 'single',
    label: 'РАЗОВОЕ ЗАНЯТИЕ',
    title: 'Одна встреча',
    price: '1 900',
    description: '60 минут · один на один',
    plan: 'Одно занятие',
    cta: 'Выбрать занятие',
  },
  {
    id: 'five',
    label: 'АБОНЕМЕНТ',
    title: 'Пять встреч',
    price: '8 200',
    description: '1 640 ₽ за занятие · 5 × 60 минут',
    plan: '5 занятий',
    cta: 'Выбрать абонемент',
  },
] as const;
export const formatLabels: Record<FormatId, string> = {
  help: 'Нужна помощь с выбором',
  mini: 'Мини-группа',
  individual: 'Индивидуальные занятия',
};
export const languageExample = {
  id: 'hocam',
  root: 'hoca',
  rootMeaning: 'преподаватель',
  suffix: 'm',
  suffixMeaning: 'мой / моя',
  word: 'hocam',
  title: 'Больше, чем «мой учитель»',
  explanation:
    'Буквально — «мой преподаватель». Но hocam используют и как уважительное обращение к преподавателю. Смысл передаёт отношение к собеседнику, а не только принадлежность.',
  takeaway: 'Грамматика объясняет форму. Ситуация и отношения между людьми — её употребление.',
  source:
    'https://dergipark.org.tr/en/download/article-file/3460493',
  reviewId: '3',
  editorialStatus:
    'TODO: согласовать редакцию с преподавателем. Разбор слова из реального отзыва, не фрагмент курса.',
} as const;
