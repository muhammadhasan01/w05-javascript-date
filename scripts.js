let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedYear = document.getElementById("year");
let selectedMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

const monthAndYear = document.getElementById('monthAndYear');

showCalendar(currentMonth, currentYear);

function next() {
	currentYear = (currentMonth === 11 ? currentYear + 1 : currentYear);
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previous() {
	currentYear = (currentMonth === 0 ? currentYear - 1 : currentYear);
	currentMonth = (currentMonth === 0 ? 11 : currentMonth - 1);
	showCalendar(currentMonth, currentYear);
}

function jump() {
	currentYear = parseInt(selectedYear.value);
	if (isNaN(currentYear))
			currentYear = today.getFullYear();
	currentMonth = parseInt(selectedMonth.value);
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

	let firstDay = (new Date(year, month)).getDay();
	let daysInMonth = 32 - (new Date(year, month, 32)).getDate();

	let tbl = document.getElementById('calendar-body');

	tbl.innerHTML = "";

	monthAndYear.innerHTML = months[month] + " " + year;

	let date = 1;

	for (let i = 0; i < 6; i++) {
		let row = document.createElement('tr');
		for (let j = 0; j < 7; j++) {
			if (date > daysInMonth) break;
			let cell = document.createElement('td');
			let cellText;
			if (i === 0 && j < firstDay) {
				cellText = document.createTextNode('');
			} else {
				cellText = document.createTextNode(date);	
				if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("bg-info");
        }
				date++;
			}

			cell.appendChild(cellText);
			row.appendChild(cell);
		}

		tbl.appendChild(row);
	}
}