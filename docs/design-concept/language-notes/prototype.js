const menu = document.querySelector('.menu'),
  nav = document.querySelector('#nav');
const photoTest = document.getElementById('photo-test');
function setPhotoTest(hidden) {
  document.body.classList.toggle('no-photos', hidden);
  photoTest.setAttribute('aria-pressed', String(hidden));
  photoTest.textContent = hidden ? 'Вернуть фото' : 'Скрыть фото';
}
setPhotoTest(new URLSearchParams(location.search).get('photos') === 'off');
photoTest.addEventListener('click', () =>
  setPhotoTest(photoTest.getAttribute('aria-pressed') !== 'true')
);
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Открыть меню');
  })
);
for (const [buttonId, targetId] of [
  ['cover-translate', 'cover-meaning'],
  ['context-toggle', 'context-copy'],
]) {
  document.getElementById(buttonId).addEventListener('click', (e) => {
    const button = e.currentTarget,
      open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    document.getElementById(targetId).hidden = !open;
  });
}
document.getElementById('assemble').addEventListener('click', (e) => {
  const button = e.currentTarget,
    split = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(split));
  button.innerHTML = split ? 'Собрать слово <span>↔</span>' : 'Разобрать слово <span>↔</span>';
  document.getElementById('language-object').classList.toggle('split', split);
});
function text(tag, value, className) {
  const e = document.createElement(tag);
  e.textContent = value;
  if (className) e.className = className;
  return e;
}
const list = document.getElementById('catalog-list');
window.conceptFormats.forEach((f, i) => {
  const article = document.createElement('article');
  article.className = 'catalog-entry';
  article.dataset.format = f.id;
  const identity = document.createElement('div');
  identity.className = 'catalog-identity';
  identity.append(text('span', String(i + 1).padStart(2, '0'), 'catalog-number'));
  const label = text('span', f.label, 'catalog-tr');
  label.lang = 'tr';
  identity.append(label);
  const description = document.createElement('div');
  description.className = 'catalog-description';
  description.append(text('h3', f.title), text('p', f.description));
  const metadata = document.createElement('dl');
  metadata.className = 'catalog-meta';
  for (const [k, v] of [
    ['Состав', f.people],
    ['Длительность', f.time],
    ['Где', f.place],
  ]) {
    const row = document.createElement('div');
    row.append(text('dt', k), text('dd', v));
    metadata.append(row);
  }
  const price = document.createElement('div');
  price.className = 'catalog-price';
  price.append(text('strong', f.price), text('small', f.unit));
  const link = text('a', 'Условия и запись ↗');
  link.href = f.url;
  price.append(link);
  const word = document.createElement('div');
  word.className = 'catalog-word';
  const tr = text('span', f.word);
  tr.lang = 'tr';
  word.append(tr, text('small', f.translation));
  article.append(identity, description, metadata, price, word);
  list.append(article);
});
