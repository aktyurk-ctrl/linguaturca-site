'use client';
import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { reviews, type FormatId } from '@/data/living-school';
import { cx } from './styles';
interface Selection {
  format: FormatId;
  plan?: string;
}
interface Interactions {
  selection: Selection;
  select: (selection: Selection) => void;
  enroll: (selection: Selection) => void;
  openReview: (id: string, trigger: HTMLElement) => void;
}
const Context = createContext<Interactions | null>(null);
export function SchoolProvider({ children }: { children: ReactNode }) {
  const [selection, select] = useState<Selection>({ format: 'help' });
  const [reviewId, setReviewId] = useState(reviews[0]?.id);
  const dialog = useRef<HTMLDialogElement>(null);
  const reviewTrigger = useRef<HTMLElement | null>(null);
  const review = reviews.find((review) => review.id === reviewId);
  function enroll(next: Selection) {
    select(next);
    document.getElementById('signup')?.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
    requestAnimationFrame(() => document.getElementById('name')?.focus({ preventScroll: true }));
  }
  function openReview(id: string, trigger: HTMLElement) {
    reviewTrigger.current = trigger;
    setReviewId(id);
    dialog.current?.showModal();
  }
  return (
    <Context.Provider value={{ selection, select, enroll, openReview }}>
      {children}
      <dialog
        ref={dialog}
        id="review-dialog"
        aria-label="Оригинал отзыва"
        onClose={() => reviewTrigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const box = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < box.left ||
              event.clientX > box.right ||
              event.clientY < box.top ||
              event.clientY > box.bottom
            )
              dialog.current?.close();
          }
        }}
      >
        <button
          type="button"
          className={cx('dialog-close')}
          aria-label="Закрыть отзыв"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        {review && (
          <Image
            src={review.image}
            alt={`Исходный отзыв: ${review.author}`}
            width={760}
            height={1000}
            sizes="(max-width: 600px) 92vw, 760px"
            unoptimized
          />
        )}
        <p>Оригинал отзыва</p>
      </dialog>
    </Context.Provider>
  );
}
export function useSchoolInteractions() {
  const context = useContext(Context);
  if (!context) throw new Error('SchoolProvider is required');
  return context;
}
export function EnrollButton({
  format,
  plan,
  outline,
  children,
}: {
  format: FormatId;
  plan?: string;
  outline?: boolean;
  children: ReactNode;
}) {
  const { enroll } = useSchoolInteractions();
  return (
    <button
      type="button"
      className={cx('button', outline && 'outline')}
      data-plan={plan}
      data-enroll={format}
      onClick={() => enroll({ format, plan })}
    >
      {children} <span aria-hidden="true">↗</span>
    </button>
  );
}
export function ReviewButton({ reviewId, children }: { reviewId: string; children?: ReactNode }) {
  const { openReview } = useSchoolInteractions();
  return (
    <button
      type="button"
      className={cx('text-link')}
      data-review={reviewId}
      onClick={(event) => openReview(reviewId, event.currentTarget)}
    >
      {children || 'Оригинал ↗'}
    </button>
  );
}
