'use client';
import { useState } from 'react';
import { languageExample as example } from '@/data/living-school';
import { cx } from './styles';
export function LanguageNote() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={cx('morphemes')} aria-label="hoca плюс m — hocam" lang="tr">
        <span>
          {example.root}
          <small lang="ru">{example.rootMeaning}</small>
        </span>
        <b>+</b>
        <span className={cx('suffix')}>
          {example.suffix}
          <small lang="ru">{example.suffixMeaning}</small>
        </span>
        <b>→</b>
        <strong>{example.word}</strong>
      </div>
      <button
        type="button"
        id="phrase-toggle"
        aria-expanded={open}
        aria-controls="phrase-meaning"
        onClick={() => setOpen(!open)}
      >
        <span>{example.title}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <p id="phrase-meaning" hidden={!open}>
        {example.explanation}
      </p>
      <p className={cx('language-takeaway')}>{example.takeaway}</p>
      <a className={cx('language-source')} href={example.source}>
        Источник разбора ↗
      </a>
    </>
  );
}
