// jshint esversion:6

// Scroll Button - Global

const scrollButton = document.querySelector(".scroll-button");

scrollButton.addEventListener("click", function() {
  $("html, body").animate({scrollTop: 0}, 1200);
});


// Side Navigation Menu - Account Page

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
