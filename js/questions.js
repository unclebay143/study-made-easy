// FILE CONTAINING OBJECTS OF QUESTIONS WITH THEIR ANSWERS
const questions = [{
        id: 1,
        question: "What is a man doing here What is a man doing here What is a man doing here What is a man doing here What is a man doing here ? ",
        answer: "I am coming home soon",
    },
    {
        id: 2,
        question: "This is a dummy sample?",
        answer: "you can replace me",
    },
];

const accordion = document.getElementById("accord");
let createEle = "";
questions.map((item, index) => {
    const { id, question, answer } = item;
    createEle += `<div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       ${id}.   ${question}
      </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        ${answer}
                    </div>
                </div>
            </div>
        </div>`;
});
accordion.innerHTML = createEle;