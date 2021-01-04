var iQuestion = 0; 

const questionsArray = [
  {question:1, quest: "What is Portland's nickname"},
  {question:2, quest:'who'},
  {question:3, quest:'where'},
  {question:4, quest:'when'},
  {question:5, quest:'why'}
];

const answersArray = [
[
  {answer:1, ans: "Rose City", correct: true},
  {answer:2, ans: "Red City", correct: false},
  {answer:3, ans: "Rainy City", correct: false},
  {answer:4, ans: "Riot City", correct: false}],

[
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false}],

[
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false}],

[
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false}],

[
  {answer:1, ans: "A", correct: true},
  {answer:2, ans: "B", correct: false},
  {answer:3, ans: "C", correct: false},
  {answer:4, ans: "D", correct: false}]];



function startScreen(){
   var iQuestion = 0;
  console.log("start function running");
 let startingVar=`
  <div class = "startingDiv" id = "startingDiv">
  <h1> Portland Quiz </h1>
  <p> To begin Quiz, click start </p>
  <button type="submit" id = "startButton" class = "startingButton" >Start!</button>
  </div>
  `;
  return startingVar;
  }
function displayStart(){
   $('body').append(startScreen);
}


function question (){
  console.log('question activated');

  var displayChoice1 = answersArray[iQuestion][0].ans;
  var displayChoice2 = answersArray[iQuestion][1].ans;
  var displayChoice3 = answersArray[iQuestion][2].ans;
  var displayChoice4 = answersArray[iQuestion][3].ans;
  console.log('answers displaying');
  console.log('current question is '+(iQuestion+1));
  return`
  <div class = "answerDiv"><h1>${questionsArray[iQuestion].quest}</h1>
  <p><input type="radio" class = "radioButton"></input>${displayChoice1}</p>
  <p><input type="radio" class = "radioButton"></input>${displayChoice2}</p>
  <p><input type="radio" class = "radioButton"></input>${displayChoice3}</p>
  <p><input type="radio" class = "radioButton"></input>${displayChoice4}</p>
  <button type = "submit" class = "submitAnswer">Submit Answer</button>
  </div>`;
  
}
function displayQuestion(){
  $('body').append(question);
}

function correctAnswer(){
  if (answersArray[iQuestion][0].correct === true){console.log('CORRECT');
  } else {console.log('FALSE');}
    //radio button clicked, true, correct, false incorrect
  
  
}

function handleBeginQuizSubmit(){
  $('.startingDiv').on('click', '.startingButton', function(event) {
    console.log('start button clicked');
    displayQuestion();
    $(handleQuestionNext)
  });
}

function handleQuestionNext(){
  console.log("handleQuestionNumber running");
  $('.answerDiv').on('click', '.submitAnswer', function(event) {
    console.log("submit answer clicked");
    correctAnswer();
  iQuestion++;
  console.log("variable iQuestion at " +iQuestion);
  displayQuestion();

  if (iQuestion >= 5){
    return
    $(displayStart);
  }
  });}

$(displayStart)
$(handleBeginQuizSubmit)


