const questionsArray = [
  {question:1, quest: 'What'},
  {question:2, quest:'who'},
  {question:3, quest:'where'},
  {question:4, quest:'when'},
  {question:5, quest:'why'}
];

const answerArray1 = [
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false},
]
const answerArray2 = [
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false},
]
const answerArray3 = [
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false},
]
const answerArray4 = [
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false},
]
const answerArray5 = [
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false},
]



function startScreen(){
  
  console.log("function is running");
  return `
  <div class = "startingDiv">
  <h1> Portland Quiz </h1>
  <p> To begin Quiz, click start </p>
  <button type="submit" id = "startButton" class = "starting" >Start!</button>
  </div>
  `;
  }
function displayStart(){
   $('body').append(startScreen);
}

function question (){
  //document.getElementById("div").innerHTML = "Paragraph changed!";
}
function handleBeginQuizSubmit(){
   $('.startingDiv').on('click', '.starting', function(event) {
    console.log('clicky');
    question();
  });
}
$(displayStart)
$(handleBeginQuizSubmit)

 //$('main').html(quizResultsString);
  //$('body').on('submit', (event) =>{
    //event.preventDefault();