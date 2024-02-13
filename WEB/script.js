const daysContainer = document.querySelector('.days');
const monthYearElement = document.getElementById('monthYear');
const eventDateElement = document.getElementById('eventDate');
const eventsList = document.getElementById('eventsList');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

let currentDate = new Date();
let selectedDate = null;
let events = {};

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  monthYearElement.textContent = `${months[month]} ${year}`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDayIndex; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day', 'empty');
    daysContainer.appendChild(dayElement);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;

    dayElement.addEventListener('click', () => {
      selectedDate = new Date(year, month, day);
      renderEventDetails();
    });

    if (events[selectedDate]) {
      dayElement.classList.add('has-events');
    }

    daysContainer.appendChild(dayElement);
  }
}

function renderEventDetails() {
  eventDateElement.textContent = selectedDate
    ? selectedDate.toDateString()
    : 'Event Date';
  
  eventsList.innerHTML = '';

  if (events[selectedDate]) {
    events[selectedDate].forEach(event => {
      const li = document.createElement('li');
      li.textContent = event;
      eventsList.appendChild(li);
    });
  }
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
  renderEventDetails();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
  renderEventDetails();
});

// Initial setup
updateCalendar();
