const textEl = document.querySelector('.text');
const text =
  '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."';
let index = 1;
let timer = 100;

const writeInterval = setInterval(writeText, timer);

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }
}
