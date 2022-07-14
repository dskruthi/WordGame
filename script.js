// Intializes global variables for game.
let triesLeft = 0;
let numCorrect = 0;
let userCorrectAnswers = [];
let correctAnswers;
startGame().then(() => {
    // Listens for answer submissions
    document.getElementById("submit-button").addEventListener('click', () => {checkAnswer(document.getElementById("user-input").value.toLowerCase().trim())});
});

// Fetches q&a file and selects a random question for the current game session.
async function startGame() {
    try {
        let promise = await fetch('./question-bank.json');
        let json = await promise.json();
        let question = json[Math.floor(json.length * Math.random())];
        document.getElementById("prompt").innerHTML = question["question"];
        correctAnswers = question["answers"];
    } catch(error) {
        console.log(error);
    }
}

// Checks if submitted answer is correct.
async function checkAnswer(answer) {
    triesLeft--;
    document.getElementById("user-input").value = "";

    // Answer is correct
    if(!userCorrectAnswers.includes(answer) && correctAnswers.includes(answer)) {
        numCorrect++;
        userCorrectAnswers.push(answer);

        document.getElementById("validity").classList.remove("incorrect");
        document.getElementById("validity").classList.add("correct");

        // Player won game
        if (numCorrect === 5) {
            document.getElementById("gameStatus").classList.add("won");
        }
    } 
    // Answer is wrong;
    else {
        document.getElementById("validity").classList.remove("correct");
        document.getElementById("validity").classList.add("incorrect");

        // Player lost game
        if(triesLeft === 0){
            document.getElementById("gameStatus").classList.add("lost");
        }
    }
}