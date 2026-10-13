import { cx } from './styles';

export function LessonExperienceSection() {
  return (
    <section
      className={cx('lesson-process wrap section')}
      id="lessons"
      aria-labelledby="lessons-title"
    >
      <div>
        <p className={cx('eyebrow')}>КАК ОРГАНИЗОВАНО ОБУЧЕНИЕ</p>
        <h2 id="lessons-title">
          Урок в Zoom. <br />
          Материалы после.
        </h2>
        <div className={cx('class-slot')} aria-label="Место для настоящего кадра занятия">
          <span className={cx('asset-status')}>TODO · КАДР ЗАНЯТИЯ</span>
          <h3>Преподаватель и ученики в Zoom</h3>
          <p>Здесь будет кадр реального урока, с разрешения участников.</p>
        </div>
      </div>
      <div className={cx('process-steps')}>
        <div>
          <span>1</span>
          <div>
            <h3>Определяем уровень</h3>
            <p>На бесплатной консультации подбираем программу и формат под вашу задачу.</p>
          </div>
        </div>
        <div>
          <span>2</span>
          <div>
            <h3>Встречаемся на занятии</h3>
            <p>
              В мини-группе — 2–4 ученика и преподаватель. Индивидуально — один на один. Оба формата
              проходят в Zoom.
            </p>
          </div>
        </div>
        <div>
          <span>3</span>
          <div>
            <h3>Возвращаемся к пройденному</h3>
            <p>
              В мини-группе остаётся запись урока. Каждую неделю — памятки со словами по теме,
              дополнительно к авторским материалам.
            </p>
          </div>
        </div>
        <a className={cx('text-link')} href="#signup">
          Подобрать обучение ↗
        </a>
      </div>
    </section>
  );
}
