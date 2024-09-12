//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Toggle password 
document.addEventListener("DOMContentLoaded", function() {
  var togglePasswordElements = document.querySelectorAll(".toggle-password");

  togglePasswordElements.forEach(function(togglePasswordElement) {
      togglePasswordElement.addEventListener("click", function() {
          // Toggle the icon classes
          togglePasswordElement.classList.toggle("fa-eye");
          togglePasswordElement.classList.toggle("fa-eye-slash");

          // Find the associated input field
          var input = togglePasswordElement.parentElement.querySelector("input");

          // Toggle the input field type between password and text
          if (input.type === "password") {
              input.type = "text";
          } else {
              input.type = "password";
          }
      });
  });
});

// function handleClick(element) {
//   const allElements = document.querySelectorAll('.col-item');
//   allElements.forEach(el => el.classList.remove('selected'));

//   element.parentElement.classList.add('selected');
// }


// Animation on scroll function
function initAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

window.addEventListener("load", () => {
  initAOS();
});

AOS.init();

