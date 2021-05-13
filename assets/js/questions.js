import {chapter1} from './chapters/chapter-1.js'


// FILE CONTAINING OBJECTS OF QUESTIONS WITH THEIR ANSWERS
const questions = [
    {
        id: 1,
        question: "Be our first contributor",
        answer: "No answer yet",
        chapter: "7"
    },
    {
        id: 2,
        question: "What solution did Salma suggest to Tomiwa about the EMAL issue?",
        answer: " I was thinking of talking to Labaran to talk to Habib who would put a word for me in ears of the Committee Chairman or the Vice-Chancellor or someone higher up.",
        chapter: "7"
        
    },
    {
        id: 3,
        question: "Salma felt her stomach sink. On what occasion did this happen?",
        answer: "When she was told that it was only prof Dabo that could help her.",
        chapter: "7"
        
    },
    {
        id: 4,
        question: "Why did Salma conclude that no man is worthy to be called a man excerpt for her father?",
        answer: "Every man that has tried to help her always demands sex. Her experience with Dr Dabo, Kola, Kabir, Habib and more.",
        chapter: "7"
        
    },
    {
        id: 5,
        question: "Who was the only one that could help Selma?",
        answer: "Professor Dabo.”The one she disrespected in your 100 level. He is a professor of Biological Sciences",
        chapter: "7"
        
    },
    {
        id: 6,
        question: "What was the established law of EMAL?",
        answer: "simply pack their belongings and leave the school. Write Jamb again and seek admission.",
        chapter: "7"
        
    },
    {
        id: 7,
        question: "How much did Kabir Scam Salma?",
        answer: "100k",
        chapter: "7"
        
    },
    {
        id: 8,
        question: "What does every lawbreaker try to do?",
        answer: "when caught; she tried to find ways around the rules.",
        chapter: "7"


    },
    {
        id: 9,
        question: "",
        answer: "",
        chapter: "7"
        
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