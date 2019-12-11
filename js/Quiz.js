

let totalPoints = 0;
let q1Answer = document.querySelectorAll("input[name = 'q1']")
let q2Answer = document.querySelectorAll("input[name='q2']")
let rangeQuestionResult = document.querySelector("#q3Range")

let results = document.querySelector(".results")
let sendButton = document.querySelector("#FinalButton")
sendButton.addEventListener("click", CheckResult)



// FUNKTIONER -----------------------------------------------


function CheckResult () {
    totalPoints = 0; 
    totalPoints += parseInt(rangeQuestionResult.value, 10);
    totalPoints += parseInt(CheckAnswer(q1Answer), 10)
    totalPoints += parseInt(CheckAnswer(q2Answer), 10)

    if (totalPoints == 0) {
        results.innerHTML = "Du är en östaustraliensk potatis!";
    }
    else if (totalPoints >  1 && totalPoints < 6) {
        results.innerHTML = "Du är en nordengelsk potatis";
    }
    else if (totalPoints >= 6 && totalPoints < 10 ) {
        results.innerHTML = "Du är en västerbotten-potatis"
    }
    else if (totalPoints >= 10 && totalPoints < 14 ) {
        results.innerHTML = "Du är en potatis som Sherlock Holmes skulle vara stolt över!"        
    }
    else if (totalPoints == 14) {
        results.innerHTML = "Du bist ein kartoffelauflauf"
    }
    console.log(totalPoints);
    
}

function CheckAnswer(question){
    let points = 0;
    for (let index = 0; index < question.length; index++) {
        if (question[index].checked) {
            points += question[index].value;
          
        } 
    }
    return points;
}

