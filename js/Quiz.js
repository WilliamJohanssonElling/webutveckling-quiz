let totalPoints = 0;
let q1Answer = document.querySelectorAll("input[name = 'q1']")
let q2Answer = document.querySelectorAll("input[name='q2']")
let rangeQuestionResult = document.querySelector("#q3Range")

let result = document.querySelector(".result")
let sendButton = document.querySelector(".SendButton")
let exitButton = document.querySelector(".ExitButton")
let popup = document.querySelector(".Popup")

sendButton.addEventListener("click", CheckResult)
exitButton.addEventListener("click", ClosePopup)

// FUNKTIONER -----------------------------------------------

function CheckResult() {
    totalPoints = 0; 
    totalPoints += parseInt(rangeQuestionResult.value);
    totalPoints += parseInt(CheckAnswer(q1Answer))
    totalPoints += parseInt(CheckAnswer(q2Answer))

    if (totalPoints == 0) {
        result.innerHTML = "Du är en östaustraliensk potatis!";

    } else if (totalPoints >  1 && totalPoints < 6) {
        result.innerHTML = "Du är en nordengelsk potatis";

    } else if (totalPoints >= 6 && totalPoints < 10 ) {
        result.innerHTML = "Du är en västerbotten-potatis"

    } else if (totalPoints >= 10 && totalPoints < 14 ) {
        result.innerHTML = "Du är en potatis som Sherlock Holmes skulle vara stolt över!"
              
    } else if (totalPoints == 14) {
        result.innerHTML = "Du bist ein kartoffelauflauf"
    }

    popup.style.display = "flex"
    console.log(totalPoints);
    
}

function CheckAnswer(question) {
    let points = 0;
    for (let index = 0; index < question.length; index++) {
        if (question[index].checked) {
            points += question[index].value;
          
        } 
    }
    return points;
}

function ClosePopup() {
    popup.style.display = "none"
}