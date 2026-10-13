let width = '1440';
const section = document.querySelector('#section');
function update() {
  for (const side of ['before', 'after'])
    document.querySelector('#' + side).src = `evidence/${side}-${width}-${section.value}.png`;
  document.querySelector('.screens').classList.toggle('mobile', width === '390');
}
document.querySelectorAll('[data-width]').forEach((b) =>
  b.addEventListener('click', () => {
    width = b.dataset.width;
    document
      .querySelectorAll('[data-width]')
      .forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    update();
  })
);
section.addEventListener('change', update);
