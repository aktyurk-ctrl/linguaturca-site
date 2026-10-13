import { cx } from './styles';
import Image from 'next/image';
import { LanguageNote } from './LanguageNote';
import { ReviewButton } from './SchoolInteractions';

export function CultureSection() {
  return (
    <section className={cx('culture wrap section')} id="culture" aria-labelledby="culture-title">
      <div className={cx('culture-heading')}>
        <p className={cx('eyebrow')}>СЛОВО ИЗ НАСТОЯЩЕГО ОТЗЫВА</p>
        <h2 id="culture-title">
          Турецкий <br />
          вне учебника.
        </h2>
        <p>
          Ученица называет преподавателя <span lang="tr">hocam</span>. Что стоит за этим словом?
        </p>
        <div className={cx('language-study')}>
          <LanguageNote />
        </div>
      </div>
      <div className={cx('culture-content')}>
        <figure className={cx('school-language-quote')}>
          <blockquote>
            «Раньше у меня были сильные комплексы, сейчас я на одной волне со своей{' '}
            <span lang="tr">hocam</span> !»
          </blockquote>
          <figcaption>
            <span>Наталья · из переписки</span>
            <ReviewButton reviewId="3" />
          </figcaption>
        </figure>
        <figure className={cx('city-photo')}>
          <Image
            src="/tea-minigroup.png"
            alt="Два стакана турецкого чая на блюдцах в руках"
            width={160}
            height={125}
            sizes="160px"
            quality={90}
          />
          <figcaption>
            <span>Турция в повседневных деталях</span>
          </figcaption>
        </figure>
        <div className={cx('journal-links')}>
          <a href="/articles/turetskiy-yazyk-s-nulya">
            <small>ИЗ СТАТЕЙ ШКОЛЫ</small>
            <h3>С чего начать турецкий</h3>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="/articles/turetskiy-dlya-pereezda">
            <small>ЯЗЫК ДЛЯ ЖИЗНИ</small>
            <h3>Турецкий для переезда</h3>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
