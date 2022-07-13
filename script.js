// Intializes global variables for game.
let triesLeft = 0;
let numCorrect = 0;
let userCorrectAnswers = [];
let correctAnswers;

// Fetches q&a file and selects a random question for the current game session.
async function startGame() {
    try {
        let promise = await fetch('./q&a.json');
        let json = await promise.json();
        let question = json[Math.floor(json.length * Math.random())];
        document.getElementById("question").innerHTML = question["question"];
        // correctAnswers = question["answers"]
        return question["answers"]
    } catch(error) {
        console.log(error);
    }
}
