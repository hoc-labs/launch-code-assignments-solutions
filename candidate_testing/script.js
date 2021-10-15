
let candidateName = '';

let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
  "What is the minimum crew size for the ISS?"
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

let numberCorrect = 0;
let percentCorrect = 0;

function askForName() {
  candidateName = prompt("What is your name?");
}

function askQuestions() {
  for (let i=0; i<questions.length; ++i) {
    candidateAnswers[i] = prompt(questions[i]);
  }
}

function gradeQuiz() {
  for (let i=0; i<correctAnswers.length; ++i) {
    if (candidateAnswers[i]===correctAnswers[i]) {
      numberCorrect++;
    }
  }

  percentCorrect = (numberCorrect/questions.length)*100;
}

function displayResults() {

  console.log(`Candidate Name: ${candidateName}`);
  for (let i=0; i<questions.length; ++i) {
    console.log(`${i}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
  }

  console.log(`>>> Overall Grade: ${percentCorrect}% (${numberCorrect} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${percentCorrect>=80?"PASSED":"FAILED"} <<<`);
}



// ************ BEGIN: DO NOT REMOVE THESE LINES **************//
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> { runProgram(); })

function runProgram() {
  askForName();
  askQuestions();
  gradeQuiz();
  displayResults();
}
// ************ END: DO NOT REMOVE THESE LINES **************//

