// Get the toggle button element
var toggle = document.getElementById("toggle");

// Add a click event listener to the toggle button
toggle.addEventListener("click", function() {
  // Get the current value of the button
  var mode = toggle.innerHTML;
  // If the mode is light, change it to dark and vice versa
  if (mode == "Light Mode") {
    toggle.innerHTML = "Dark Mode";
    // Change the background color of the body and the panels
    document.body.style.backgroundColor = "#333";
    document.querySelector(".themes").style.backgroundColor = "#222";
    document.querySelector(".fonts").style.backgroundColor = "#222";
  } else {
    toggle.innerHTML = "Light Mode";
    // Change the background color of the body and the panels
    document.body.style.backgroundColor = "#f0e8c5";
    document.querySelector(".themes").style.backgroundColor = "white";
    document.querySelector(".fonts").style.backgroundColor = "white";
  }
});
