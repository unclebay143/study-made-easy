

// GET CHAPTER LIST CONTAINER
const chapterListContainer = document.querySelector(".chapter__lists");



// GENERATE LIST OF CHAPTER BUTTONS WITH CLICKS
const renderChapters = () =>{
    const totalChapters = 10;
    let tempHolder = (
        `
            <div 
                class="select__chapter__btn" 
            > 
                <a href="." onclick="alert('feature coming soon')">
                    Generate Random Question
                </a>
            </div>
        `
    )


    for(let i=1; i < totalChapters; i++ ){
        tempHolder +=(
            `
                <div 
                    class="select__chapter__btn" 
                    onclick="setChapter('${i}')"
                >
                    Chapter${i} 
                </div>

            `
        )
    }
    // RENDER CHAPTER BUTTONS TO THE DOM
    chapterListContainer.innerHTML = tempHolder;
}



// FUNCTION THAT HANDLES CHAPTER LIST CLICKS
const setChapter = (clickedChapter) =>{
    // REDIRECT STUDENT TO VIEW CHAPTER QUESTION AND ANSWER
    window.location.assign('./../../public/chapters-questions.html')
    // STORE SELECTED CHAPTER AS CURRENT CHAPTER
    localStorage.setItem("_currentChapter", clickedChapter)
}


// INVOKE FUNCTION ON PAGE LOAD
renderChapters()