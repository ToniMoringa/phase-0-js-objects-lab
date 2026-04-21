//Write your code here

// Task 2: Declare and Initialize an Attendee Object
const attendee = {
  attendeeId: 'T001',
  name: 'Alice Smith',
  event: 'JavaScript Conference',
  ticketType: 'VIP',
  ticketPrice: 150.0,
};

// Task 3: Create a Function to Log Attendee Name
function logAttendeeName(attendeeObject) {
  console.log(attendeeObject.name);
}

// Task 4: Create a Function to Log Ticket Price
function logTicketPrice(attendeeObject) {
  console.log(attendeeObject.ticketPrice);
}

// Task 5: Create a Function to Update Ticket Type
function updateTicketType(attendeeObject, newTicketType) {
  attendeeObject.ticketType = newTicketType;
}

// Task 6: Create a Function to Update Ticket Price
function updateTicketPrice(attendeeObject, newTicketPrice) {
  attendeeObject.ticketPrice = newTicketPrice;
}

// Task 7: Create a Function to Remove the Event Property
function removeEventProperty(attendeeObject) {
  delete attendeeObject.event;
}

// Task 8: Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendeeObject) {
  attendeeObject.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty }),
};
