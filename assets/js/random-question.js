import { chapter1 } from "./chapters/chapter-1.js";
//import { chapter7 } from "./chapters/chapter-7.js";

const randomQuestion = [...chapter1];

<<<<<<< HEAD
console.log(randomQuestion.length);
=======
// console.log(randomQuestion.length);
//let count = 0;
>>>>>>> 4f0e53b3af66d48f1404ad1df5b819c2118dbc74

const button = document.querySelector(".click");


button.addEventListener("click", function () {

  
  // HIDE THE HEADING WHEN THE QUESTION IS BEEN GENERATED 
  document.querySelector(".random-heading").style.display="none"


  const mainContainer = document.querySelector(".containers");
  let container = "";
<<<<<<< HEAD

  const index = Math.floor(Math.random() * randomQuestion.length + 1);
=======
  //count = count + 1;
  const index = Math.floor(Math.random() * randomQuestion.length);

console.log(index);
>>>>>>> 4f0e53b3af66d48f1404ad1df5b819c2118dbc74
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
<<<<<<< HEAD
    showBtn.classList.add("show-button");

=======
>>>>>>> 4f0e53b3af66d48f1404ad1df5b819c2118dbc74
    showBtn.addEventListener("click", function () {
      document.querySelector(".show-answers").style.display="block"
      const showAnswers = document.querySelector(".answer-container");
      showAnswers.classList.add("display-answer");
    });
  }, 150000);
});

document.querySelector(".show-answers").style.display="none"