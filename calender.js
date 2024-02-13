document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [],
    eventClick: function (info) {
      displayEventDetails(info.event);
    },
  });

  calendar.render();

  fetchEventsFromFirebase();

  document
    .getElementById("closeAddEventModal")
    .addEventListener("click", closeAddEventModal);
  document
    .getElementById("closeEventDetailsModal")
    .addEventListener("click", closeEventDetailsModal);
  document.getElementById("saveEvent").addEventListener("click", saveEvent);
});

function fetchEventsFromFirebase() {}

function convertEventDataToArray(eventData) {}

function displayEventDetails(event) {
  const eventTitleDetails = document.getElementById("eventTitleDetails");
  const eventDateDetails = document.getElementById("eventDateDetails");

  eventTitleDetails.textContent = event.title;
  eventDateDetails.textContent = `Start: ${event.start.toLocaleString()}`;

  const eventDetailsModal = document.getElementById("eventDetailsModal");
  eventDetailsModal.style.display = "block";
}

function closeAddEventModal() {
  const addEventModal = document.getElementById("addEventModal");
  addEventModal.style.display = "none";
}

function closeEventDetailsModal() {
  const eventDetailsModal = document.getElementById("eventDetailsModal");
  eventDetailsModal.style.display = "none";
}

function saveEvent() {
  const eventTitle = document.getElementById("eventTitle").value;
  const eventDate = document.getElementById("eventDate").value;

  if (eventTitle && eventDate) {
    const parsedEventDate = new Date(eventDate);

    const event = {
      title: eventTitle,
      start: parsedEventDate,
      end: parsedEventDate,
    };

    const eventsRef = firebase.database().ref("events");
    const newEventRef = eventsRef.push();
    newEventRef.set(event);

    closeAddEventModal();
  }
}
