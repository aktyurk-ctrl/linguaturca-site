'use client';
import { useState, type ReactNode } from 'react';
import { cx } from './styles';
export function PricingTabs({ group, individual }: { group: ReactNode; individual: ReactNode }) {
  const [active, setActive] = useState('mini');
  return (
    <>
      <div className={cx('price-tabs')} role="tablist" aria-label="Формат обучения">
        {[
          ['mini', 'Мини-группы'],
          ['individual', 'Индивидуально'],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-controls={`prices-${id}`}
            aria-selected={active === id}
            tabIndex={active === id ? 0 : -1}
            onClick={() => setActive(id!)}
            onKeyDown={(event) => {
              if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                event.preventDefault();
                const next =
                  event.key === 'Home'
                    ? 'mini'
                    : event.key === 'End'
                      ? 'individual'
                      : active === 'mini'
                        ? 'individual'
                        : 'mini';
                setActive(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="prices-mini" role="tabpanel" aria-labelledby="tab-mini" hidden={active !== 'mini'}>
        {group}
      </div>
      <div
        id="prices-individual"
        role="tabpanel"
        aria-labelledby="tab-individual"
        hidden={active !== 'individual'}
      >
        {individual}
      </div>
    </>
  );
}
