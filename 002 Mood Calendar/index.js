const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const firstDay = 1; const lastDay = 28;
const defaultColor = '#797575';
let calendarHTML = '';
let activeColor = '';
let presColor = '';
let selected = false;

const calendar = document.querySelector('.calendar__container');
const moodIcons = document.querySelectorAll('.far');
let daysIcons = '';

//  init calendar
(function() {
	daysOfWeek.forEach( day => {
		calendarHTML += `
			<div class="week-day">${day}</div>
		`;
	});
	for(let i = firstDay ; i <= lastDay ; i++) {
		calendarHTML += `
			<div class="day day${i}">${i}</div>
		`;
	}
	calendar.innerHTML = calendarHTML;
	daysIcons = document.querySelectorAll('.day');
})();

moodIcons.forEach(icon => icon.addEventListener('click', () => {
	if(selected && !icon.classList.contains('active')) {
		moodIcons.forEach(icon => icon.classList.remove('active'));
		selected = false;
	} 
	selected = true;
	activeColor = icon.dataset.color;
	icon.classList.toggle('active');
	if(!icon.classList.contains('active')) {
		activeColor = defaultColor;
	}
}));

daysIcons.forEach(icon => icon.addEventListener('click', () => {
	presColor = icon.style.backgroundColor;
	icon.style.backgroundColor = activeColor;
	if(icon.style.backgroundColor === presColor) {
		icon.style.backgroundColor = defaultColor
	} else {
		icon.style.backgroundColor = activeColor;
	}
}));
