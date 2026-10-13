import { faq } from '@/data/living-school';
import { cx } from './styles';
export function FaqSection() {
  return (
    <section className={cx('faq wrap section')} id="faq" aria-labelledby="faq-title">
      <div>
        <p className={cx('eyebrow')}>ПЕРЕД ЗАПИСЬЮ</p>
        <h2 id="faq-title">Вопросы об обучении.</h2>
        <p>
          Не нашли нужный ответ? <br />
          <a className={cx('text-link')} href="#signup">
            Обсудим на консультации ↗
          </a>
        </p>
      </div>
      <div className={cx('faq-list')}>
        {faq.map((item) => (
          <details key={item.id}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
