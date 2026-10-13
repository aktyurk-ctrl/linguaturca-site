import Link from 'next/link';
import Image from 'next/image';
import { cx } from './living-school/styles';
export function Footer() {
  return (
    <footer className={cx('scope footer')}>
      <div className={cx('wrap footer-grid')}>
        <div>
          <Link className={cx('brand')} href="/">
            <Image src="/logo.png" width={44} height={44} alt="" />
            <span>Linguaturca</span>
          </Link>
          <p>
            Турецкий язык из реальной жизни. <br />С людьми, которые его знают.
          </p>
          <p className={cx('footer-language')}>
            <span lang="tr">Görüşürüz!</span>
            <small>До встречи на занятиях.</small>
          </p>
        </div>
        <div>
          <h2>Школа</h2>
          <Link href="/#formats">Форматы обучения</Link>
          <Link href="/#teachers">Преподаватели</Link>
          <Link href="/#pricing">Стоимость</Link>
          <Link href="/#culture">Язык и культура</Link>
        </div>
        <div>
          <h2>Связаться</h2>
          <a href="mailto:study@linguaturca.ru">study@linguaturca.ru</a>
          <a href="https://t.me/Daria_Kolosova">Telegram · @Daria_Kolosova ↗</a>
        </div>
      </div>
      <div className={cx('wrap footer-bottom')}>
        <span>© Linguaturca 2026</span>
        <Link href="/legal">Публичная оферта</Link>
        <Link href="/policy">Политика обработки данных</Link>
        <Link href="/#hero">Наверх ↑</Link>
      </div>
    </footer>
  );
}
