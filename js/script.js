const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

//////////////////////////////////////////////////////////////////////////////////////

  // Set the end time for the countdown
  var endTime = new Date("December 31, 2022 23:59:59");

  // Update the countdown every 1 second
  setInterval(function() {
    // Get the current time
    var currentTime = new Date();

    // Calculate the time remaining until the end time
    var timeRemaining = endTime - currentTime;

    // Convert the time remaining to seconds, minutes, and hours
    var seconds = Math.floor((timeRemaining / 1000) % 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);

    // Format the time remaining as a string
    var timeString = hours + "h " + minutes + "m " + seconds + "s";

    // Update the timer element with the time remaining
    document.getElementById("timer").innerHTML = timeString;
  }, 1000);



/////////////////////////////////////////////////////////////////////////////////////

  // Set the timeout duration (in seconds)
  var timeoutDuration = 30;

  // Set a timer to log out the user after the timeout duration
  setTimeout(function() {
    // Redirect the user to the logout page
    window.location.href = "https://jamilo-school.github.io/log-in/";
  }, timeoutDuration * 1000);


////////////////////////////////////////////////////////////////////////////////////

  // Notification message creted by javascript amd cs;javascript code  starts here//

        // Create the pop up notification
var popup = document.createElement("div");
popup.classList.add("popup");

// Add the notification message to the pop up
var message = document.createTextNode("We are going to log you out in 10sec💫..we need to scan your device on main sever.");
popup.appendChild(message);

// Add the pop up to the page
document.body.appendChild(popup);

// Use CSS transitions to create a smooth fade in effect
popup.style.transition = "opacity 0.5s ease-in-out";
popup.style.opacity = 0;


// Show the pop up after a short delay
setTimeout(function() {
  popup.style.opacity = 1;
}, 500);

// Hide the pop up after a few seconds
setTimeout(function() {
  popup.style.opacity = 0;
}, 5000);
// Notification message creted by javascript amd cs;javascript code  ends here//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      





