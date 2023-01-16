console.log("Who knows Sharayu Better!?");
console.log("__________________________________________________");
console.log(" ");
var score = 0;
var readlineSync = require('readline-sync');
var name = readlineSync.question("Please Enter your name: ");
console.log("Greetings " + name + " Let's start the game!");
console.log("_______________________________________________");
console.log(" ");
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Yaay, your answer is correct!");
    score++;
  } else {
    console.log("Sorry, your answer is incorrect!");
  }
  console.log("Have a look on your score: ", score);
}

var questions = [
  {
    question: "How do Sharayu react when there is argument between two of your friends? \n 1. Try to avoid it. \n 2. Stand there and have fun. \n 3. Try to stop them both.", 
    answer: '3'
  },
  {
    question: " How do Sharayu see the world??\n 1. Full of stupid people \n 2. It's good but we have a long way to go\n 3.A world full of opportunities", 
    answer: '3'
  },
  {
    question: "Which colour Sharayu loves the most?\n1. Black. \n2. Pink\n3. Blue\n", 
    answer: '1'
  },
  {
    question: "What does Sharayu do when she is feeling low?\n 1. Binge watch something\n 2. Lock herself and cries\n3. Share that problem with her family and friends\n",
    answer: '3'
  },
  {
    question: "Will Sharayu ever sacrifise her happiness for someone else?\n 1. Absolutely not\n2. Maybe\n3. Yes, she will\n",
    answer: '2'
  },

];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}