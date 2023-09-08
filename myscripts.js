// Create an array of days in a week
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current date
var date = new Date();



// Define a function that updates the time
function updateTime() {
    // Get the current date
    var date = new Date();

    // Get the day number (0-6)
    var dayNumber = date.getDay();

    // Get the day name from the array
    var dayName = days[dayNumber];
  
    // Get the timestamp in milliseconds (UTC)
    var timestamp = date.getTime();
  
    // Get the UTC string representation
    var utcString = date.toUTCString();
    // split the string by empty space to get different parts
    var parts = utcString.split(" ")
  
    // Display the timestamp and the UTC string in paragraph elements with id="timestamp" and id="utc"
    document.getElementById("day").innerHTML = dayName;
    document.getElementById("timestamp").innerHTML = parts[4];
    document.getElementById("utc").innerHTML = parts[5];
  }
  
  // Call the function when the page loads
  updateTime();
  
  // Call the function every second using setInterval()
  setInterval(updateTime, 1000);


