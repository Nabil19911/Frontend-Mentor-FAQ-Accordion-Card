const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach(question => {
  question.addEventListener("click", e => {
    answers.forEach(answer => {
      if (answer.classList.contains("active")) {
        answer.parentElement.childNodes[1].firstElementChild.style.color =
          "hsl(240, 6%, 50%)";
        answer.previousElementSibling.lastElementChild.style.transform =
          "rotate(0deg)";
        answer.parentElement.childNodes[1].firstElementChild.style.fontWeight = 100;
        answer.classList.remove("active");
      }
    });
    question.childNodes[3].style.transform = "rotate(180deg)";
    question.firstElementChild.style.fontWeight = "700";
    question.firstElementChild.style.color = "hsl(238, 29%, 16%)";
    question.nextElementSibling.classList.toggle("active");
  });
});
