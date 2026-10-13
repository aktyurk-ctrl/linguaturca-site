const nav = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Открыть меню');
  nav.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});

function node(tag, value, className) {
  const el = document.createElement(tag);
  if (value) el.textContent = value;
  if (className) el.className = className;
  return el;
}
const tariffs = document.querySelector('#group-tariffs');
window.schoolTariffs.forEach((plan) => {
  const card = node('article', null, 'tariff');
  card.dataset.plan = plan.id;
  card.append(node('h3', plan.title), node('p', plan.description, 'tariff-description'));
  const price = node('p', plan.price + ' ', 'price');
  price.append(node('span', '₽'));
  if (plan.oldPrice) price.append(node('s', plan.oldPrice + ' ₽'));
  card.append(price, node('p', 'стоимость предложения*', 'price-unit'));
  const ul = node('ul');
  plan.features.forEach((f) => ul.append(node('li', f)));
  card.append(ul);
  const button = node('button', 'Выбрать тариф ', 'button');
  button.append(node('span', '↗'));
  button.dataset.enroll = 'mini';
  button.dataset.plan = plan.title;
  card.append(button);
  tariffs.append(card);
});

const priceTabs = [...document.querySelectorAll('[data-price-tab]')];
function selectPriceTab(button) {
  priceTabs.forEach((tab) => {
    const active = tab === button;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}
priceTabs.forEach((button, index) => {
  button.addEventListener('click', () => selectPriceTab(button));
  button.addEventListener('keydown', (e) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === 'Home'
          ? 0
          : e.key === 'End'
            ? priceTabs.length - 1
            : (index + (e.key === 'ArrowRight' ? 1 : -1) + priceTabs.length) % priceTabs.length;
      selectPriceTab(priceTabs[next]);
      priceTabs[next].focus();
    }
  });
});
document.querySelector('#phrase-toggle').addEventListener('click', (e) => {
  const button = e.currentTarget,
    open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.lastElementChild.textContent = open ? '−' : '+';
  document.querySelector('#phrase-meaning').hidden = !open;
});

const reviewDialog = document.querySelector('#review-dialog');
document.querySelectorAll('[data-review]').forEach((button) =>
  button.addEventListener('click', () => {
    document.querySelector('#review-image').src =
      `../../../public/images/review-screenshot-${button.dataset.review}-optimized.webp`;
    reviewDialog.showModal();
  })
);
document.querySelector('.dialog-close').addEventListener('click', () => reviewDialog.close());
reviewDialog.addEventListener('click', (e) => {
  if (e.target === reviewDialog) {
    const r = reviewDialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      reviewDialog.close();
  }
});

const form = document.querySelector('#enroll-form'),
  fields = document.querySelector('#form-fields'),
  submit = document.querySelector('#submit-button'),
  status = document.querySelector('#form-status'),
  format = document.querySelector('#format'),
  selectedPlan = document.querySelector('#selected-plan');
let pendingTimer,
  formState = 'idle';
const stateButtons = [...document.querySelectorAll('[data-state]')];
function renderState(state) {
  clearTimeout(pendingTimer);
  formState = state;
  fields.disabled = state === 'loading';
  fields.hidden = state === 'success';
  submit.disabled = state === 'loading';
  submit.classList.toggle('loading', state === 'loading');
  form.setAttribute('aria-busy', String(state === 'loading'));
  status.hidden = state === 'idle';
  status.dataset.status = state;
  status.setAttribute('role', state === 'error' ? 'alert' : 'status');
  status.replaceChildren();
  if (state === 'loading') {
    submit.textContent = 'Отправляем…';
    status.append(node('p', 'Демонстрация загрузки. Сетевой запрос не выполняется.'));
  } else if (state === 'error') {
    submit.textContent = 'Попробовать ещё раз ↗';
    status.append(
      node('strong', 'Не удалось отправить'),
      node('p', 'Демо ошибки: ваши поля сохранены. Проверьте связь и попробуйте ещё раз.')
    );
  } else if (state === 'success') {
    submit.textContent = 'Вернуться к форме';
    status.append(
      node('strong', 'Спасибо за обращение!'),
      node(
        'p',
        'Так будет выглядеть подтверждение. В этом прототипе заявка не отправлена; школа не получила ваши контакты.'
      )
    );
  } else {
    submit.replaceChildren(document.createTextNode('Оставить заявку '), node('span', '↗'));
  }
  stateButtons.forEach((button) =>
    button.setAttribute('aria-pressed', String(button.dataset.state === state))
  );
}
function clearErrors() {
  for (const key of ['name', 'phone', 'email']) {
    document.getElementById(key).removeAttribute('aria-invalid');
    document.getElementById(key + '-error').hidden = true;
  }
}
function validForm() {
  clearErrors();
  const phone = document.getElementById('phone').value;
  const digits = phone.replace(/\D/g, '');
  const bad = [];
  if (!document.getElementById('name').value.trim()) bad.push('name');
  if (digits.length < 7 || digits.length > 15 || !/^\+?[\d\s()\-]+$/.test(phone.trim()))
    bad.push('phone');
  const email = document.getElementById('email');
  if (email.value && !email.validity.valid) bad.push('email');
  bad.forEach((key) => {
    document.getElementById(key).setAttribute('aria-invalid', 'true');
    document.getElementById(key + '-error').hidden = false;
  });
  if (bad.length) document.getElementById(bad[0]).focus();
  return !bad.length;
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formState === 'success') {
    renderState('idle');
    document.querySelector('#name').focus();
    return;
  }
  if (!validForm()) return;
  renderState('loading');
  pendingTimer = setTimeout(() => {
    renderState('success');
    status.focus();
  }, 900);
});
stateButtons.forEach((button) =>
  button.addEventListener('click', () => {
    clearErrors();
    renderState(button.dataset.state);
  })
);
document.querySelectorAll('[data-enroll]').forEach((button) =>
  button.addEventListener('click', () => {
    renderState('idle');
    format.value = button.dataset.enroll;
    selectedPlan.hidden = !button.dataset.plan;
    selectedPlan.textContent = button.dataset.plan ? 'Выбран тариф: ' + button.dataset.plan : '';
    document.querySelector('#signup').scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth',
    });
    document.querySelector('#name').focus({ preventScroll: true });
  })
);
format.addEventListener('change', () => {
  selectedPlan.hidden = true;
  selectedPlan.textContent = '';
});
renderState('idle');
