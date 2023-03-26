const counterValue = document.querySelector('#value');
let value = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});