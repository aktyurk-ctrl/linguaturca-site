import { reviews } from '@/data/living-school';
import { ReviewButton } from './SchoolInteractions';
import { cx } from './styles';
export function ReviewsSection() {
  return (
    <section className={cx('reviews section')} id="reviews" aria-labelledby="reviews-title">
      <div className={cx('wrap')}>
        <div className={cx('section-head')}>
          <div>
            <p className={cx('eyebrow')}>ОТЗЫВЫ УЧЕНИКОВ LINGUATURCA</p>
            <h2 id="reviews-title">
              О занятиях <br />и преподавателях.
            </h2>
          </div>
          <p>
            Короткие фрагменты переписки. <br />
            Каждый можно открыть целиком.
          </p>
        </div>
        <div className={cx('review-grid')}>
          {reviews.map((review) => (
            <figure key={review.id} className={cx('review-card')}>
              <span className={cx('quote-mark')} aria-hidden="true">
                “
              </span>
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                <div>
                  <strong>{review.author}</strong>
                </div>
                <ReviewButton reviewId={review.id} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
