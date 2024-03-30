// -------------------- ACCORDION -------------------------------------------------
// get accordion items
const accordion = document.querySelectorAll(".selling-points__accordion-btn");
for (let i = 0; i < accordion.length; i++) {
  let button = accordion[i];
  button.addEventListener("click", () => {
    // loop over accordion items to see what is active or not
    for (let i = 0; i < accordion.length; i++) {
      // get the content block for each item
      let accordionContent = accordion[i].nextElementSibling;
      // if NOT clicked button - ACTIVE - close it
      if (
        accordion[i] !== button &&
        accordion[i].classList.contains("active")
      ) {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = null;
        // if NOT clicked button - NOT ACTIVE - stay closed
      } else if (
        accordion[i] !== button &&
        !accordion[i].classList.contains("active")
      ) {
        accordionContent.style.maxHeight = null;
        // if IS clicked button - ACTIVE - close it
      } else if (
        accordion[i] === button &&
        accordion[i].classList.contains("active")
      ) {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = null;
        // if IS clicked button - NOT ACTIVE - open it
      } else {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    }
  });
}

// -------------------- SLIDER -----------------------------------------------------
// get slides
const slideContainer = document.querySelector(".testimonials__card-slider");
const slides = document.querySelectorAll(".testimonials__card");

// get the slider buttons
const buttons = document.querySelectorAll(".testimonials__btn");

// initialise slide size var
let size = slides[0].clientWidth;

// initialise slide number
let slideNumber = 0;

// resize listener
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    slideNumber = 0;
    updateSlides();
  }
  //carouselSlide.style.transition = "none";
  size = slides[0].clientWidth;
  updateSlides();
});

// for each button, check active status and update slides
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    checkBtnActiveStatus(e);
  });
}

// check button clicked and set status
function checkBtnActiveStatus(e) {
  // loop through buttons
  for (let button of buttons) {
    // check if button is the button that has been clicked
    if (button === e.target) {
      // update slideNumber
      slideNumber = Number(button.getAttribute("btnNumber"));
      // check status of button that has been clicked
      if (!button.classList.contains("testimonials__btn--active")) {
        // if its not active, then set it to active
        button.classList.toggle("testimonials__btn--active");
        // then update the slides
        updateSlides();
      }
    } else {
      // if button is NOT the button that has been clicked,
      // then remove active class
      button.classList.remove("testimonials__btn--active");
    }
  }
}

// update slide positions
function updateSlides() {
  size = slides[0].clientWidth;
  if (size > 0) {
    size = size + 2;
  }
  slideContainer.style.transform = "translateX(" + -size * slideNumber + "px)";
}
