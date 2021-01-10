

const STORE = { 
  pages: [
  {question:"What is Portland's nickname?", choices:['Rose City','Red City','Rainy City','Riot City'], answer:'Rose City'},
  {question: "How did they decide to name Portland?", choices:['Raffle','Coin Toss','Vote','Naming Contest'], answer:'Coin Toss'},
  {question: "How many bridges are there in Portland that go across the Willamette River?", choices:['6','9','12','15'], answer:'12'},
  {question: "Portland is home of the World's Smallest _______", choices:['Horse','House','Mall','Park'], answer:'Park'},
  {question: "Tourist Love to stop and grab a donut at this famous donut shop", choices:['Voodoo Donuts','Dunkin Donuts','Goldstar Donuts','Oregon Donuts'], answer:'Voodoo Donuts'}],
  questionNum:0, 
  score: 0}

var questionCount = STORE.questionNum + 1

function startScreen(){
 let startingVar=`
  <section class = "startingSection" id = "startingSection">
  <h1> Portland Quiz </h1>
  <p> To begin Quiz, click start </p>
  <button type="submit" id = "startButton" class = "startingButton" >Start!</button>
  </section>
  `;
  return startingVar;
  }

function renderStart(){
   $('.central').append(startScreen);
}

function question (){
  return`
  <section class = "answerSection"><h1>${STORE.pages[STORE.questionNum].question}</h1>
  <h5>Question ${questionCount} of 5</h4>
  <form class = "answerForm">
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[0]}" required/>${STORE.pages[STORE.questionNum].choices[0]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[1]}" required/>${STORE.pages[STORE.questionNum].choices[1]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[2]}" required/>${STORE.pages[STORE.questionNum].choices[2]}<br>
  <input type="radio" id="buttonOption" name = "radbut" value = "${STORE.pages[STORE.questionNum].choices[3]}" required/>${STORE.pages[STORE.questionNum].choices[3]}<br>
  
  </form>
<h3 class = "scoreClass">Score ${STORE.score} of ${STORE.questionNum} possible</h3>
  <h4 class = "questionCountClass">Question ${questionCount}/5</h4>

  <button type = "submit" class = "submitAnswer">Submit Answer</button>
  </section>`;
  
}
function renderQuestion(){
  $('.central').html(question);
}


function handleBeginQuizSubmit(){
  $('.startingSection').on('click', '.startingButton', function(event) {
    renderQuestion();
    $(handleQuestionSubmit)
    $(this).remove();
  });
}

function handleQuestionSubmit(){
  console.log("handleQuestionSubmit running");
  $('.answerSection').on('click', '.submitAnswer', 
   
  function(event) {
  console.log("submit answer clicked");
  console.log('Array Question Number is ' + STORE.questionNum);
    if (!$("input[name='radbut']:checked").val()) {
    return alert("You miss 100% of the shots you don't take, try to answer the question");
  }
 else{
  checkAnswer();
  increaseNumber();
  renderQuestion();
  $(handleQuestionSubmit)
  $(this).remove();}
  })};

function increaseNumber(){
  if (STORE.questionNum < 4){
    questionCount++;
  STORE.questionNum++;
  else{
    $(finalScoreRender)
  }
}

function finalScore(){
  return `
  <section class = "restartingSection">
  <h1> You finished </h1>
  <h3> Your score is ${STORE.score} out of 5 possible points</h3>
   <button type="submit" id = "restartButton" class = "restartingButton" >Restart Quiz!</button>
   </section>` 
}

function handleRestart(){
  $('.restartingSection').on('click', '.restartingButton', function(event) {
    $(handleQuestionSubmit)
    $(this).remove();
    STORE.questionNum = 0;
    STORE.score = 0;
    questionCount = 1;
    renderQuestion();
  });} 

  function finalScoreRender(){
   $('.central').html(finalScore);
   handleRestart();
}

function checkAnswer(){
  var answerToCheck = $('input[name="radbut"]:checked').val();
 if (answerToCheck === STORE.pages[STORE.questionNum].answer){
  alert('You got it! Great Job!');
  STORE.score++;}
  else{
    alert("Failure has consequences, the correct answer is "+ STORE.pages[STORE.questionNum].answer);
}}

$(renderStart)
$(handleBeginQuizSubmit)



