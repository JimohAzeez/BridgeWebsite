

/* Exiting the Game pane. */
document.getElementById("ToHome").addEventListener('click', () => {
  document.getElementById("ForGaming").classList.remove('showPaneGame')
})
/* Pop up the Game pane. */
function gameJoyStick() {
  let GPane = document.getElementById('ForGaming');
  GPane.classList.add('showPaneGame');

}



/*
document.addEventListener('DOMContentLoaded', function () {
  // your code here

  alert("Checking if we get here==> Entered the DOM ContentLoaded");

  alert("Checking if we get here==> The Array is loaded");

}, false); */


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

