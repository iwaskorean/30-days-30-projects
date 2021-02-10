const buttonToggle = document.querySelector('.button-toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');

const html = document.querySelector('html');
let currentTheme = 'light';

buttonToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (currentTheme === 'light') {
    buttonToggle.innerHTML = 'Light Mode';
    currentTheme = 'dark';
  } else {
    buttonToggle.innerHTML = 'Dark Mode';
    currentTheme = 'light';
  }
});

function getScale(value, maxValue, maxDeg) {
  return (value / maxValue) * maxDeg;
}

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(0%, -100%) rotate(${getScale(
    hours % 12,
    12,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(0%, -100%) rotate(${getScale(
    minutes,
    59,
    360
  )}deg)`;

  secondEl.style.transform = `translate(0%, -100%) rotate(${getScale(
    seconds,
    59,
    360
  )}deg)`;

  timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

setTime();

setInterval(setTime, 1000);
