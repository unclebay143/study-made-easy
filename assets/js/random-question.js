import { chapter1 } from "./chapters/chapter-1.js";
//import { chapter7 } from "./chapters/chapter-7.js";

const randomQuestion = [...chapter1];

console.log(randomQuestion.length);

const button = document.querySelector(".click");
console.log(button);
button.addEventListener("click", function () {
  const mainContainer = document.querySelector(".containers");
  let container = "";

  const index = Math.floor(Math.random() * randomQuestion.length);
  randomQuestion.filter((item) => {
    if (index === item.id) {
      container += `<div class="question-container">Question :     ${item.question}</div>
     <p class="show-answers">Answer</p>
     <div class="answer-container">
       ${item.answer}
     </div>`;
    }
  });
  console.log(container);
  mainContainer.innerHTML = container;
  setTimeout(() => {
    const showBtn = document.querySelector(".show-answers");
    showBtn.classList.add("show-button");

    showBtn.addEventListener("click", function () {
      const showAnswers = document.querySelector(".answer-container");
      showAnswers.classList.add("display-answer");
    });
  }, 150000);
});
