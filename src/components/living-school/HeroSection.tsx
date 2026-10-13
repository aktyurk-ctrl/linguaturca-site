import { cx } from './styles';
import Image from 'next/image';
import { formats, groupTariffs, individualTariffs } from '@/data/living-school';

export function HeroSection() {
  return (
    <section className={cx('hero wrap')} id="hero" aria-labelledby="hero-title">
      <div className={cx('hero-copy')}>
        <p className={cx('eyebrow')}>
          <span className={cx('brand-dot')}></span>ОНЛАЙН-ШКОЛА ТУРЕЦКОГО ЯЗЫКА
        </p>
        <h1 id="hero-title">
          Турецкий, <br />
          на котором <br />
          <span className={cx('underline')}>говорят.</span>
        </h1>
        <p className={cx('lead')}>
          Онлайн-школа турецкого от тюркологов. Для общения и жизни в Турции — с грамматикой,
          разговорной практикой и культурным контекстом.
        </p>
        <div className={cx('hero-actions')}>
          <div className={cx('primary-action')}>
            <a className={cx('button')} href="#signup">
              Подобрать обучение <span aria-hidden="true">↗</span>
            </a>
            <p className={cx('cta-explanation')}>Бесплатная консультация · 10–15 минут</p>
          </div>
          <a className={cx('text-link')} href="#formats">
            Посмотреть форматы <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={cx('hero-proof')}>
          <span>Профильное образование</span>
          <span>Живые уроки в Zoom</span>
        </div>
      </div>
      <div className={cx('hero-visual')}>
        <figure className={cx('founder-photo')}>
          <Image
            src="/images/founder-optimized.webp"
            alt="Дарья Колосова на набережной в Стамбуле"
            width={1200}
            height={800}
            sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1440px) 45vw, 600px"
            preload={true}
            quality={90}
          />
          <figcaption>
            <strong>Дарья Колосова</strong>
            <span>основатель Linguaturca · тюрколог</span>
          </figcaption>
        </figure>
        <div className={cx('language-note')}>
          <small lang="tr">birlikte / вместе</small>
          <span lang="tr">konuşalım</span>
          <p>давайте поговорим</p>
          <svg viewBox="0 0 156 12" aria-hidden="true">
            <path d="M3 8Q54 1 151 5M39 11Q98 5 153 8"></path>
          </svg>
        </div>
        <span className={cx('photo-place')} lang="tr">
          İstanbul, Türkiye
        </span>
      </div>
      <div className={cx('hero-options')}>
        <a href="#formats">
          <span>В мини-группе</span>
          <strong>
            {formats.find((format) => format.id === 'mini')?.participants} <b>·</b> от{' '}
            {groupTariffs[0]?.price} ₽
          </strong>
          <i aria-hidden="true">↗</i>
        </a>
        <a href="#formats">
          <span>Индивидуально</span>
          <strong>
            В своём темпе <b>·</b> {individualTariffs[0].price} ₽ / урок
          </strong>
          <i aria-hidden="true">↗</i>
        </a>
        <p>
          Начинаете с нуля? <br />
          <a href="#signup">Поможем выбрать формат.</a>
        </p>
      </div>
    </section>
  );
}
