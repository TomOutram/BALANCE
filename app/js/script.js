// -------------------- ACCORDION --------------------
// get accordion items
const accordion = document.querySelectorAll(".selling-points__accordion-btn");
for (let i = 0; i < accordion.length; i++) {
  let button = accordion[i];
  button.addEventListener("click", () => {
    // loop over accordion items to see what is active or not
    for (let i = 0; i < accordion.length; i++) {
      // get the content block for each item
      let accordionContent = accordion[i].nextElementSibling;
      // NOT the button we click - ACTIVE - close it
      if (
        accordion[i] !== button &&
        accordion[i].classList.contains("active")
      ) {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = null;
        // NOT the button we click - NOT ACTIVE - stay closed
      } else if (
        accordion[i] !== button &&
        !accordion[i].classList.contains("active")
      ) {
        accordionContent.style.maxHeight = null;
        // IS the button we click - ACTIVE - close it
      } else if (
        accordion[i] === button &&
        accordion[i].classList.contains("active")
      ) {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = null;
        // IS the button we click - NOT ACTIVE - open it
      } else {
        accordion[i].classList.toggle("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    }
  });
}
