// IMPORT CHAPTER QUESTION AND ANSWER MODULE
import {chapter1} from './chapters/chapter-1.js';
import { chapter7 } from "./chapters/chapter-7.js";

// COPY AND COMBINE ALL CHAPTERS
const arrayOfChapters = [...chapter1, ...chapter7]

// GET THE CURRENT CHAPTER FROM LOCAL STORAGE
const currentChapter = localStorage.getItem("_currentChapter")

// SET PAGE TITLE
document.title = `Chapter ${currentChapter} Questions and Answers`

// GET ACCORDION CONTAINTER
const accordion = document.querySelector(".current__chapter__review");

// GET CURRENT CHAPTER HEADING
const currentChapterHeading = document.querySelector(".chapter__heading");
const chapterHasZeroQuestion = document.querySelector(".chapter__zero__question");

// SET CURRENT CHAPTER HEADING
currentChapterHeading.innerHTML = (`<h1>Chapter ${currentChapter} Questions and Answers </h1>`);

// FETCH OUT STUDENT SELECTED CHAPTER
const fetchCurrentChapter =arrayOfChapters.filter(chapters=>chapters.chapter === currentChapter);


// IF NOT QUESTION AND ANSWER FOR THE CURRENT CHAPTER
if(fetchCurrentChapter.length === 0){
    chapterHasZeroQuestion.innerHTML = (
        `
            <span>
                ${fetchCurrentChapter.length} Questions and Answers found for Chapter ${currentChapter} 
                <br> 
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe7fcwYUj8pISRVCxRHdYM122bYFnHBfANGp6eIa2Q5PQ0t_g/viewform" target="_blank
                    >
                    contribute
                </a>
            </span>
        `
    );
}

// ELEMENT TEMP HOLDER
let createEle = "";

// GENERATE HTML WITH FETCHED ELEMENT
fetchCurrentChapter.map((item, index) => {
    const { id, question, answer } = item;
    createEle += `<div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${id}">
                    <button class="accordion-button question__text" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
                        ${id}.   ${question}
                    </button>
                </h2>
                <div id="collapse${id}" class="accordion-collapse collapse" aria-labelledby="heading${id} data-bs-parent="#accordionExample">
                    <div class="accordion-body  answer__text">
                        ${answer}
                    </div>
                </div>
            </div>
        </div>`;
});

// RENDER FECTHED ELEMENTS TO THE DOM
accordion.innerHTML = createEle;



