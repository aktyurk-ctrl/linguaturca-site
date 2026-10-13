'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { cx } from './living-school/styles';
const links = [
  ['formats', 'Обучение'],
  ['teachers', 'Преподаватели'],
  ['pricing', 'Стоимость'],
  ['reviews', 'Отзывы'],
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const homeAnchor = (id: string) => `${pathname === '/' ? '' : '/'}#${id}`;
  return (
    <div className={cx('scope')}>
      <a className={cx('skip')} href="#main">
        К содержимому
      </a>
      <header
        className={cx('header wrap')}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false);
            menu.current?.focus();
          }
        }}
      >
        <Link className={cx('brand')} href="/" onClick={() => setOpen(false)}>
          <Image src="/logo.png" width={44} height={44} sizes="44px" alt="" />
          <span>
            Linguaturca<small>школа турецкого языка</small>
          </span>
        </Link>
        <nav id="navigation" aria-label="Основная навигация" className={cx(open && 'open')}>
          {links.map(([id, label]) => (
            <Link key={id} href={homeAnchor(id)} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className={cx('button header-cta')} href={homeAnchor('signup')}>
          Подобрать обучение <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={menu}
          type="button"
          className={cx('menu')}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-controls="navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </header>
    </div>
  );
}
