document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
       initialView: 'dayGridMonth',
       events: [], // Empty array for now
       eventClick: function(info) {
          displayEventDetails(info.event);
       }
    });
 
    // Load the calendar
    calendar.render();
 
    // Fetch events from Firebase and populate the calendar
    fetchEventsFromFirebase();
 
    // Add event listeners for modals and Save button
    document.getElementById('closeAddEventModal').addEventListener('click', closeAddEventModal);
    document.getElementById('closeEventDetailsModal').addEventListener('click', closeEventDetailsModal);
    document.getElementById('saveEvent').addEventListener('click', saveEvent);
 });
 
 function fetchEventsFromFirebase() {
    // Your Firebase code to fetch events and update the calendar
    // Use Firebase Realtime Database or Firestore to store and retrieve events
    // Example:
    // const eventsRef = firebase.database().ref('events');
    // eventsRef.on('value', function(snapshot) {
    //    const eventData = snapshot.val();
    //    const events = convertEventDataToArray(eventData);
    //    calendar.addEventSource(events);
    // });
 }
 
 function convertEventDataToArray(eventData) {
    // Convert Firebase data into an array of events
    // Modify this function to match your Firebase data structure
    // Example:
    // const events = [];
    // for (const key in eventData) {
    //    if (eventData.hasOwnProperty(key)) {
    //       const event = {
    //          id: key,
    //          title: eventData[key].title,
    //          start: eventData[key].start,
    //          end: eventData[key].end
    //       };
    //       events.push(event);
    //    }
    // }
    // return events;
 }
 
 function displayEventDetails(event) {
    // Display event details in the eventDetailsModal
    // You can customize this function to format and display event information
    const eventTitleDetails = document.getElementById('eventTitleDetails');
    const eventDateDetails = document.getElementById('eventDateDetails');
    
    eventTitleDetails.textContent = event.title;
    eventDateDetails.textContent = `Start: ${event.start.toLocaleString()}`;
    
    // Show the eventDetailsModal
    const eventDetailsModal = document.getElementById('eventDetailsModal');
    eventDetailsModal.style.display = 'block';
 }
 
 function closeAddEventModal() {
    // Close the addEventModal
    const addEventModal = document.getElementById('addEventModal');
    addEventModal.style.display = 'none';
 }
 
 function closeEventDetailsModal() {
    // Close the eventDetailsModal
    const eventDetailsModal = document.getElementById('eventDetailsModal');
    eventDetailsModal.style.display = 'none';
 }
 
function saveEvent() {
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = document.getElementById('eventDate').value;
 
    if (eventTitle && eventDate) {
       // Parse the event date and time as needed (e.g., convert to a JavaScript Date object)
       const parsedEventDate = new Date(eventDate);
 
       // Create an event object with the necessary properties
       const event = {
          title: eventTitle,
          start: parsedEventDate,
          end: parsedEventDate, // You can set the end time as needed
       };
 
       // Save the event data to Firebase
       const eventsRef = firebase.database().ref('events');
       const newEventRef = eventsRef.push();
       newEventRef.set(event);
 
       // Close the addEventModal
       closeAddEventModal();
    }
}