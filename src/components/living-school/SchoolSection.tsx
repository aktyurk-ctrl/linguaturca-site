import { cx } from './styles';

export function SchoolSection() {
  return (
    <section className={cx('why wrap section')} id="school" aria-labelledby="why-title">
      <div>
        <p className={cx('eyebrow')}>ШКОЛА И ЕЁ ПОДХОД</p>
        <h2 id="why-title">Турецкий с командой тюркологов.</h2>
      </div>
      <div className={cx('why-quote')}>
        <blockquote>
          «Поэтому я собрала команду тюркологов и создала свои учебные материалы»
        </blockquote>
        <p>
          Дарья Колосова <span>· фрагмент рассказа о школе</span>
        </p>
      </div>
    </section>
  );
}
