// Isolated design demonstration: no requests, analytics, storage or CRM calls.
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  })
);
const theme = document.querySelector('#theme');
theme.addEventListener('click', () => {
  const bold = document.body.classList.toggle('theme-b');
  theme.setAttribute('aria-pressed', String(bold));
  theme.textContent = bold ? 'B → A: вернуть бирюзовый' : 'A → B: сменить палитру';
});
const enroll = document.querySelector('#enroll');
let trigger;
document.querySelectorAll('[data-enroll]').forEach((button) =>
  button.addEventListener('click', () => {
    trigger = button;
    document.querySelector('#choice').textContent =
      button.dataset.choice || 'Помощь с выбором формата';
    document.querySelector('#form-status').textContent = '';
    enroll.showModal();
    document.body.classList.add('no-scroll');
  })
);
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
    if (trigger) trigger.focus({ preventScroll: true });
  });
});
document.querySelector('#demo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#form-status').textContent =
    'Поля заполнены. Это макет: заявка не отправлена.';
});
document.querySelectorAll('[data-review]').forEach((button) =>
  button.addEventListener('click', () => {
    trigger = button;
    document.querySelector('#review-image').src =
      `../../../public/images/review-screenshot-${button.dataset.review}-optimized.webp`;
    document.querySelector('#review-dialog').showModal();
    document.body.classList.add('no-scroll');
  })
);
const compact = matchMedia('(max-width: 1100px)');
function resizePlans() {
  document.querySelectorAll('.price-plan').forEach((plan, index) => {
    plan.open = !compact.matches || index === 0;
  });
}
compact.addEventListener('change', resizePlans);
resizePlans();
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
