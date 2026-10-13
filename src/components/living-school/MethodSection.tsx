import { cx } from './styles';

export function MethodSection() {
  return (
    <section className={cx('method wrap section')} id="method" aria-labelledby="method-title">
      <div className={cx('method-copy')}>
        <p className={cx('eyebrow')}>ОТ УСТРОЙСТВА ТУРЕЦКОГО — К РЕЧИ</p>
        <h2 id="method-title">
          Понимать правило. <br />
          Пользоваться языком.
        </h2>
        <div className={cx('material-slot')} aria-label="Место для настоящего учебного материала">
          <span className={cx('asset-status')}>TODO · МАТЕРИАЛ ШКОЛЫ</span>
          <h3>Фрагмент авторского материала</h3>
          <p>Здесь будет реальное упражнение из рабочей тетради и заметка преподавателя.</p>
        </div>
      </div>
      <ol className={cx('method-list')}>
        <li>
          <h3>Разбираемся в конструкции</h3>
          <p>
            Звуки, аффиксы, порядок слов. Новую грамматику разбираем на примерах, чтобы понимать,
            как устроена турецкая фраза.
          </p>
        </li>
        <li>
          <h3>Слышим и узнаём в контексте</h3>
          <p>
            Короткие диалоги, частотные слова и живая речь. Обсуждаем культурный контекст: кому,
            когда и в какой ситуации говорят.
          </p>
        </li>
        <li>
          <h3>Используем сами</h3>
          <p>
            Закрепляем слова через собственную речь на занятии. Преподаватель даёт обратную связь.
          </p>
        </li>
      </ol>
    </section>
  );
}
