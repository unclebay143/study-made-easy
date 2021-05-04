// FILE CONTAINING OBJECTS OF QUESTIONS WITH THEIR ANSWERS
const questions = [{
        id: 1,
        question: "be our contributor",
        answer: "No answer yet",
    },
    {
        id: 2,
        question: "be our contributor",
        answer: "No answer yet",
    },
];

const accordion = document.getElementById("questions");
let createEle = "";
questions.map((item, index) => {
    const { id, question, answer } = item;
    createEle += `<div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne reduce-text">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       ${id}.   ${question}
      </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="reduce-text">
                        ${answer}
                    </div>
                </div>
            </div>
        </div>`;
});
accordion.innerHTML = createEle;