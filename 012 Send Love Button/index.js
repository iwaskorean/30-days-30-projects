const loveButtons = document.querySelectorAll('.button--love');
const container = document.querySelector('.icon__box');
const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');

loveButtons.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    button.style.background = '#fff';
    button.style.color = '#E7273F';
    text.innerHTML = '<span class="text--gray">Sent to:</span> You';

    createHearts();
  });

  button.addEventListener('mouseup', (e) => {
    button.style.background = '#E7273F';
    button.style.color = '#fff';
    text.innerHTML = 'THANK YOU! <i class="fas fa-redo"></i>';
  });
});

function createHearts() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heartEl = document.createElement('span');
      heartEl.classList.add('heart');
      heartEl.innerHTML = '<i class="fas fa-heart"></i>';
      heartEl.style.fontSize = Math.random() * 30 + 10 + 'px';
      heartEl.style.animationDuration = Math.random() * 2 + 0.5 + 's';
      heartEl.style.left = Math.random() * 80 + 10 + '%';
      wrapper.appendChild(heartEl);

      setTimeout(() => {
        heartEl.remove();
      }, 2500);
    }, i * 100);
  }
}
