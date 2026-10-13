let width = '1440';
const section = document.querySelector('#section');
function update() {
  document.querySelector('#before').src =
    `../bosphorus/evidence/after-${width}-${section.value}.png`;
  document.querySelector('#after').src = `evidence/after-${width}-${section.value}.png`;
  document.querySelector('.screens').classList.toggle('mobile', width === '390');
}
document.querySelectorAll('[data-width]').forEach((button) =>
  button.addEventListener('click', () => {
    width = button.dataset.width;
    document
      .querySelectorAll('[data-width]')
      .forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    update();
  })
);
section.addEventListener('change', update);
