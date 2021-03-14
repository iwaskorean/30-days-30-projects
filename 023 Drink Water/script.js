const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('.liters');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  console.log(idx);
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullGlasses = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullGlasses === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullGlasses / totalCups) * 330}px`;
    percentage.innerText = `${(fullGlasses / totalCups) * 100}%`;
  }

  if (fullGlasses === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${(2 - (250 * fullGlasses) / 1000).toFixed(2)}L`;
  }
}
