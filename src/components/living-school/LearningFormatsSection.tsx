import { formats, groupTariffs, individualTariffs } from '@/data/living-school';
import { EnrollButton } from './SchoolInteractions';
import { cx } from './styles';
export function LearningFormatsSection() {
  return (
    <section className={cx('formats section')} id="formats" aria-labelledby="formats-title">
      <div className={cx('wrap')}>
        <div className={cx('section-head')}>
          <div>
            <p className={cx('eyebrow')}>ДВА ФОРМАТА · ОНЛАЙН</p>
            <h2 id="formats-title">Мини-группа или один на один.</h2>
          </div>
          <p>Живые занятия в Zoom. Выберите общение в группе или персональный темп.</p>
        </div>
        <div className={cx('format-grid')}>
          {formats.map((format) => (
            <article key={format.id} className={cx('format-card', format.className)}>
              <div className={cx('format-top')}>
                <span className={cx('label')} lang="tr">
                  {format.label}
                </span>
                <span>{format.participants}</span>
              </div>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
              <dl>
                {format.details.map((detail) => (
                  <div key={detail.term}>
                    <dt>{detail.term}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
              <div className={cx('format-bottom')}>
                <div>
                  <strong>
                    {format.id === 'mini'
                      ? 'от ' + groupTariffs[0]?.price
                      : individualTariffs[0].price}{' '}
                    ₽
                  </strong>
                  <small>{format.priceNote}</small>
                </div>
                <EnrollButton format={format.id} outline={format.id === 'individual'}>
                  {format.cta}
                </EnrollButton>
              </div>
            </article>
          ))}
        </div>
        <p className={cx('program-scope')}>
          10 занятий — объём программы в мини-группе. Входной уровень и содержание уточним на
          консультации.
        </p>
        <div className={cx('help-line')}>
          <p>Пока не знаете свой уровень или формат?</p>
          <a href="#signup" className={cx('text-link')}>
            Начните с бесплатной консультации <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
