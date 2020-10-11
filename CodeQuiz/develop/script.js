
//set variables for start quiz button
// var start = document.querySelector("#button");

var position = 0;
var correct = 0;
var test = ""
var test_status = ""
var option = "";
var options = "";
var selA = "";
var selB = "";
var selC = "";
var selD = "";

var ansOptions1 = document.getElementById("userinput1")
var ansOptions2 = document.getElementById("userinput2")
var ansOptions3 = document.getElementById("userinput3")
var ansOptions4 = document.getElementById("userinput4")


//set variables for questions, options and answers
var questions = [
    {
        question: "Commonly used data types DO NOT include ____.",
        a: "strings", b: "alerts", c: "booleans", d: "numbers",
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        a: "quotes", b: "curly brackets", c: "parentheses", d: "square brackets",
        answer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: "numbers and strings", b: "other arrays", c: "booleans", d: "all of the above",
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a: "parentheses", b: "commas", c: "curly brackets", d: "quotes",
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript", b: "terminal/bash", c: "for loops", d: "console log",
        answer: "console log"
    }]

//console log questions, options and answer to verify code is working to this point
console.log(questions)

//simplify getElementById    
function get(x) {
    return document.getElementById(x)
}
console.log("GET function works")

//render a question to display in the quiz
function renderQuestion() {
    document.getElementById("start").addEventListener("click", startQuiz)   
    test = get("button");
    if (position >= window.question) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("submission").innerHTML = "Test completed";
        //resets variable for quiz restart
        position = 0;
        correct = 0;
        //stops renderQuestion function when test is complete
        return false;
    }
    get("quest").innerHTML = "Question " + (position + 1) + " of " + questions.length;

    question = questions[position].question;
    chA = questions[position].a;
    chB = questions[position].b;
    chC = questions[position].c;
    chD = questions[position].d;
    console.log("these are the questions")
    // display the question
    question.innerHTML = "<h3>" + question + "</h3>";
    console.log("this is the question")
    // display the answer options
    get 
    // document.getElementById("userinput1").value = "chA";
    // document.getElementById("userinput2").value = "chB";
    // document.getElementById("userinput3").value = "chC";
    // document.getElementById("userinput4").value = "chD";

}
console.log("these are the options")

function checkAnswer() {
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice == questions[position].answer) {
        //each time there is a correct answer this value increases
        correct++;
    }
    // changes position of which character user is on
    position++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}
console.log("what?")
//add eventListener to call render Question on page load event
window.addEventListener("load", renderQuestion);
console.log("oh..okay")



//var time;
//1
//start the time
//2
//countdown
//2.5
//countdownwrong reduce 10s
//3
//stop time

//localstorage 
// var userScore=
// [
//     {
//         name:"sue", 
//         score:10
//     },
//     {
//         name:"sam", 
//         score:1
//     }
// ]

// //display the results run a for loop based on userScore.length
// userScore[1].name
// userScore[1].score



    //else function endGame()

   //index=0;
   //restart time;






    //onclick for the btn=> grab userinput
    //checkResults(userinput, game.answer[index]);
    //index++;
    //renderCard();
    //if out of bound.. go to endGame()
//}

//function checkResults(userinput, answer){
    //if they are the same keep on going
    //else wrong tell them.. and decrement time
//}


//BEGIN EXTRAS HERE
//ACCEPTANCE CRITERIA
//GIVEN I am taking a code quiz
//WHEN I click the start button (in HTML file)
///THEN a timer starts and I am presented with a question

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

//OPTIONAL RESTART
//function restart(){
    //reappend container contents