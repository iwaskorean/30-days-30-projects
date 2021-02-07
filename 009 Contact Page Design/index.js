const buttonSubmit = document.querySelector('.button-submit');
const container = document.querySelector('.container');

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  container.innerHTML = '';
  container.innerHTML = `
    <div class="">Thanks for your message. <br /> I\'ll get back to you soon. 😃</div>
  `;
});
