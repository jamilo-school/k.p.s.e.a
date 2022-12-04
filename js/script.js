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


  // Get the current time
  var currentTime = new Date();

  // Check the current hour
  if (currentTime.getHours() < 12) {
    // If it's before noon, display a morning greeting
    alert("Good morning!");
  } else if (currentTime.getHours() < 18) {
    // If it's between noon and 6 PM, display an afternoon greeting
    alert("Good afternoon!");
  } else {
    // If it's after 6 PM, display an evening greeting
    alert("Good evening!.");
  }





  
  // Get the current time and date
  var currentTime = new Date();

  // Format the time and date as a string
  var timeString = currentTime.toLocaleTimeString();
  var dateString = currentTime.toLocaleDateString();

  // Display the time and date in an alert box
  alert("Lets keep you updated.Your log in time and date is: " + timeString + " " + dateString);



 


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





  // Set the timeout duration (in seconds)
  var timeoutDuration = 10;

  // Set a timer to log out the user after the timeout duration
  setTimeout(function() {
    // Redirect the user to the logout page
    window.location.href = "https://jamilo-school.github.io/log-in/";
  }, timeoutDuration * 1000);





