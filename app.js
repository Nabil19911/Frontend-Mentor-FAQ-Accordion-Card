const questions = document.querySelectorAll(".question");

// Basic Accordion
questions.forEach(question => {
  question.addEventListener("click", element => {
    // Get the active class element
    const currentActive = document.querySelector(".question.active");
    // if active class is already in dom remove it // reset the style
    if (currentActive && currentActive !== question) {
      currentActive.children[0].style.color = "hsl(240, 6%, 50%)";
      currentActive.children[0].style.fontWeight = 100;
      currentActive.children[1].style.transform = "rotate(0deg)";
      currentActive.classList.remove("active");
      currentActive.nextElementSibling.style.maxHeight = 0;
    }
    // Toggle the active class
    question.classList.toggle("active");
    // get the sibilings of the current element
    const answer = question.nextElementSibling;
    // Check the clicked element as active class
    if (question.classList.contains("active")) {
      // make the answer max height to its scrollheight
      answer.style.maxHeight = answer.scrollHeight + "px";
      // Reset the style
      question.children[0].style.color = "hsl(238, 29%, 16%)";
      question.children[0].style.fontWeight = "700";
      question.children[1].style.transform = "rotate(180deg)";
    } else {
      // reset the style
      question.children[0].style.color = "hsl(240, 6%, 50%)";
      question.children[0].style.fontWeight = 100;
      question.children[1].style.transform = "rotate(0deg)";
      // reset the max height to 0
      answer.style.maxHeight = 0;
    }
  });
});
