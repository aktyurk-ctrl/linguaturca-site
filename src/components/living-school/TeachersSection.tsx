import Image from 'next/image';
import { teachers } from '@/data/living-school';
import { ReviewButton } from './SchoolInteractions';
import { cx } from './styles';
export function TeachersSection() {
  return (
    <section className={cx('teachers section')} id="teachers" aria-labelledby="teachers-title">
      <div className={cx('wrap')}>
        <div className={cx('section-head')}>
          <div>
            <p className={cx('eyebrow')}>ОСНОВАТЕЛЬ И ПРЕПОДАВАТЕЛИ</p>
            <h2 id="teachers-title">Кто преподаёт в Linguaturca.</h2>
          </div>
        </div>
        <div className={cx('team-grid')} id="school-team">
          <div className={cx('confirmed-team')}>
            {teachers
              .filter((teacher) => !teacher.sourceOnly)
              .map(
                (person) =>
                  !person.sourceOnly && (
                    <article key={person.id} className={cx('confirmed-person')}>
                      {person.photo && (
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={600}
                          height={600}
                          sizes="(max-width: 600px) 90vw, 40vw"
                        />
                      )}
                      <span className={cx('label')}>{person.role}</span>
                      <h3>{person.name}</h3>
                      <p>{person.description}</p>
                      <p className={cx('person-detail')}>{person.detail}</p>
                    </article>
                  )
              )}
          </div>
          {teachers.some((teacher) => teacher.sourceOnly) && (
            <div className={cx('source-team')}>
              <h3 className={cx('source-team-title')}>Преподаватели в отзывах учеников</h3>
              {teachers.map(
                (person) =>
                  person.sourceOnly && (
                    <article key={person.id} className={cx('source-person')}>
                      <div className={cx('portrait-slot')}>
                        <span>Фото</span>
                        <small>TODO</small>
                      </div>
                      <div>
                        <h4>{person.name}</h4>
                        <ReviewButton reviewId={person.review}>Упомянута в отзыве ↗</ReviewButton>
                      </div>
                    </article>
                  )
              )}
              <p className={cx('team-source-note')}>
                TODO: подтвердить текущий состав, фотографии, образование и специализацию. Имена
                выше взяты из отзывов и не означают подтверждённый состав на сегодня.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
