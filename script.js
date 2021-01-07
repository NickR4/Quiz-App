

const STORE = { 
  pages: [
  {question:"What is Portland's nickname?", choices:['Rose City','Red City','Rainy City','Riot City'], answer:'Rose City'},
  {question: "How did they decide to name Portland?", choices:['Raffle','Coin Toss','Vote','Naming Contest'], answer:'Coin Toss'},
  {question: "How many bridges are there in Portland that go across the Willamette River?", choices:['6','9','12','15'], answer:'12'},
  {question: "Portland is home of the World's Smallest _______", choices:['Horse','House','Mall','Park'], answer:'Park'},
  {question: "Tourist Love to stop and grab a donut at this famous donut shop", choices:['Voodoo Donuts','Dunkin Donuts','Goldstar Donuts','Oregon Donuts'], answer:'Voodoo Donuts'}],
  questionNum:0, 
  score: 0}

console.log("Curren questionNum value is "+STORE.questionNum);

var questionCount = STORE.questionNum + 1
var iQuestion = 0;

function startScreen(){
   
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
   $('.central').append(startScreen);
}

function question (){
  
  console.log('question activated');
  console.log('answers displaying');

  
  return`
  <div class = "answerDiv"><h1>${STORE.pages[STORE.questionNum].question}</h1>
  <h4>Question number ${questionCount}</h4>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[0]}">${STORE.pages[STORE.questionNum].choices[0]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[1]}">${STORE.pages[STORE.questionNum].choices[1]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[2]}">${STORE.pages[STORE.questionNum].choices[2]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[3]}">${STORE.pages[STORE.questionNum].choices[3]}<br>
<h3 class = "scoreClass">Score ${STORE.score}</h3>
  <h4 class = "questionCountClass">Question ${questionCount}/5</h4>

  <button type = "submit" class = "submitAnswer">Submit Answer</button>
  </div>`;
  
}
function displayQuestion(){
  console.log('displayQuestion Function Running');

  $('.central').html(question);
}


function handleBeginQuizSubmit(){
  $('.startingDiv').on('click', '.startingButton', function(event) {
    console.log('start button clicked');
    displayQuestion();
    $(handleQuestionSubmit)
    $(this).remove();
  });
  
}

function handleQuestionSubmit(){
  console.log("handleQuestionSubmit running");
  $('.answerDiv').on('click', '.submitAnswer', function(event) {
    console.log("submit answer clicked");
  console.log('Array Question Number is ' + STORE.questionNum);
  checkAnswer();
    increaseNumber();
    displayQuestion();
    $(handleQuestionSubmit)
    $(this).remove();

  })};

function increaseNumber(){
  console.log('IncreaseNumber Function Activated');
  if (STORE.questionNum < 4){
    questionCount++;
  STORE.questionNum++;
  console.log('questioNum '+STORE.questionNum);}
  else{
    $(finalScoreDisplay)
  }
}

function finalScore(){
  return `
  <div class = "restartingDiv">
  <h1> You finished </h1>
  <h3> Your score is ${STORE.score}</h3>
   <button type="submit" id = "restartButton" class = "restartingButton" >Restart Quiz!</button>
   </div>
  `
   
}



function handleRestart(){
  $('.restartingDiv').on('click', '.restartingButton', function(event) {
    console.log('restart button clicked');
    $(handleQuestionSubmit)
    $(this).remove();
    STORE.questionNum = 0;
    STORE.score = 0;
    questionCount = 1;
    displayQuestion();
  });} 

  function finalScoreDisplay(){
   $('.central').html(finalScore);
   handleRestart();
}

function checkAnswer(){
  var answerToCheck = $('input[name="radbut"]:checked').val();
  console.log('checking answer ' + answerToCheck);
  
  if (answerToCheck === STORE.pages[STORE.questionNum].answer){
  console.log("CORRECT");
  alert('CORRECT!');
  STORE.score++;}
  else{console.log("INCORRECT");
    alert("WRONG! The correct answer is "+ STORE.pages[STORE.questionNum].answer);
}}

$(displayStart)
$(handleBeginQuizSubmit)



