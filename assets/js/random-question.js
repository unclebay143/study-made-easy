import { chapter1 } from "./chapters/chapter-1.js";
//import { chapter7 } from "./chapters/chapter-7.js";

const randomQuestion = [...chapter1];

// console.log(randomQuestion.length);
//let count = 0;

const button = document.querySelector(".click");


button.addEventListener("click", function () {

  
  // HIDE THE HEADING WHEN THE QUESTION IS BEEN GENERATED 
  document.querySelector(".random-heading").style.display="none"
  const mainContainer = document.querySelector(".containers");
  let container = "";
  //count = count + 1;
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
  // console.log(container);
  mainContainer.innerHTML = container;
  setTimeout(() => {
    const showBtn = document.querySelector(".show-answers");
    showBtn.addEventListener("click", function () {
      document.querySelector(".show-answers").style.display="block"
      const showAnswers = document.querySelector(".answer-container");
      showAnswers.classList.add("display-answer");
    });
  }, 4000);
});

document.querySelector(".show-answers").style.display="none"