import { groupTariffs, individualTariffs } from '@/data/living-school';
import { EnrollButton } from './SchoolInteractions';
import { PricingTabs } from './PricingTabs';
import { cx } from './styles';
export function PricingSection() {
  return (
    <section className={cx('pricing section')} id="pricing" aria-labelledby="pricing-title">
      <div className={cx('wrap')}>
        <div className={cx('section-head')}>
          <div>
            <p className={cx('eyebrow')}>СТОИМОСТЬ ОБУЧЕНИЯ</p>
            <h2 id="pricing-title">Что входит в обучение.</h2>
          </div>
          <p>
            Одинаковая основа занятий, разные дополнения: культура, общение или индивидуальная
            практика.
          </p>
        </div>
        <PricingTabs
          group={
            <>
              <p className={cx('price-summary')}>
                <strong>Общая основа всех тарифов:</strong> занятия в группе, учебные материалы и
                обратная связь преподавателя.
              </p>
              <div id="group-tariffs" className={cx('tariff-grid')}>
                {groupTariffs.map((plan) => (
                  <article key={plan.id} className={cx('tariff')} data-plan={plan.id}>
                    <h3>{plan.title}</h3>
                    <p className={cx('tariff-audience-label')}>Кому подходит</p>
                    <p className={cx('tariff-description')}>{plan.description}</p>
                    <p className={cx('price')}>
                      {plan.price} <span>₽</span>
                    </p>
                    <p className={cx('tariff-includes')}>
                      {plan.id === 'base' ? 'В тарифе' : 'Дополнительно к общей основе'}
                    </p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <EnrollButton format="mini" plan={plan.title}>
                      Выбрать тариф
                    </EnrollButton>
                  </article>
                ))}
              </div>
              <p className={cx('price-terms')}>
                Оплачиваемый период мини-группы уточним на консультации.
              </p>
            </>
          }
          individual={
            <>
              <p className={cx('price-summary')}>
                60 минут индивидуальной работы с преподавателем в Zoom.
              </p>
              <div className={cx('individual-prices')}>
                {individualTariffs.map((plan) => (
                  <article key={plan.id}>
                    <span className={cx('label')}>{plan.label}</span>
                    <h3>{plan.title}</h3>
                    <p className={cx('price')}>
                      {plan.price} <span>₽</span>
                    </p>
                    <p>{plan.description}</p>
                    <EnrollButton format="individual" plan={plan.plan}>
                      {plan.cta}
                    </EnrollButton>
                  </article>
                ))}
              </div>
            </>
          }
        />
        <div className={cx('schedule-note')}>
          <div>
            <strong>Когда можно начать?</strong>
            <p>Доступные группы и расписание уточним при подборе обучения.</p>
          </div>
          <a className={cx('text-link')} href="#signup">
            Узнать о занятиях <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
