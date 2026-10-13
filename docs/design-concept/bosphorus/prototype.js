const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
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
const examples = [
  ['Kad<em>ı</em>köy', 'Кадыкёй — район Стамбула.<br>В названии — ı без точки.'],
  ['<em>İ</em>stanbul', 'Стамбул. В турецком написании<br>заглавная İ сохраняет точку.'],
  ['<em>ç</em>ay', 'Чай. Буква ç помогает узнать<br>знакомое слово в турецком написании.'],
];
document.querySelectorAll('[data-word]').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('[data-word]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    const [word, meaning] = examples[Number(button.dataset.word)];
    document.querySelector('#word').innerHTML = word;
    document.querySelector('#meaning').innerHTML = meaning;
  })
);
