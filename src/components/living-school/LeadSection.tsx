import { LeadForm } from './LeadForm';
import { cx } from './styles';
export function LeadSection() {
  return (
    <section className={cx('signup section')} id="signup" aria-labelledby="signup-title">
      <div className={cx('wrap signup-grid')}>
        <div className={cx('signup-copy')}>
          <p className={cx('eyebrow')}>ДАВАЙТЕ ПОЗНАКОМИМСЯ</p>
          <h2 id="signup-title">Подберём обучение турецкому.</h2>
          <p>Бесплатно, 10–15 минут онлайн. Определим уровень и выберем программу и формат.</p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
