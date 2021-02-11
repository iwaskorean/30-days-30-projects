const container = document.querySelector('.card-container');
const authorsEl = document.querySelectorAll('.author');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const testimonials = [
  {
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!",
    name: 'Arthur Birnbaum',
    color: 'rgba(235, 59, 90,1.0)',
  },
  {
    text:
      "Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough.",
    name: 'Phoebe Kotliar',
    color: 'rgba(250, 130, 49,1.0)',
  },
  {
    text:
      "Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.",
    name: 'Louisa P. Huard',
    color: 'rgba(75, 123, 236,1.0)',
  },
];

authorsEl.forEach((author, idx) =>
  author.addEventListener('click', () => {
    addContent(idx);
    author.classList.add('selected');
  })
);

function addContent(idx) {
  const content = testimonials[idx];
  nameEl.innerHTML = content.name;
  textEl.innerHTML = content.text;
  container.style.backgroundColor = content.color;
  container.style.boxShadow = `0px 5px 10px ${content.color}`;
  authorsEl.forEach((author) => author.classList.remove('selected'));
}

addContent(0);
