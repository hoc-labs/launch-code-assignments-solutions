const scrabblePointSystem = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function transformScrabblePointSystem() {
  let newPointSystem = {};
  for (const [key, value] of Object.entries(scrabblePointSystem)) {
		value.forEach(x=>{newPointSystem[x] = parseInt(key);})
  }

	return newPointSystem;
}

function calculateScoreTraditional(word) {
  let pointSystem = transformScrabblePointSystem();

  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += pointSystem[word[i]];
  }

  return score;
}

let word = "";
let scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
  },
];

function calculateScoreVowelBonus(word) {
  const vowels = "AEIOU";
  let score = 0;

  for (let i = 0; i < word.length; ++i) {
    score += vowels.includes(word[i]) ? 3 : 1;
  }

  return score;
}

let algorithmNum = null;

function promptForWord() {
  console.log("Let's play some scrabble!");
  return prompt("Enter a word to score:").toUpperCase();
}

function promptForAlgorithmNum() {
	console.log("Which scoring algorithm would you like to use?");
	for (let i=0;i<scoringAlgorithms.length;++i) {
		console.log(`${i} - ${scoringAlgorithms.name}: ${scoringAlgorithms[i].description}`);
	}
	
  return parseInt(prompt("Enter 0, 1, or 2:"));
}

function scoreWord(word, algorithmNum) {
  let score = 0;
  switch (algorithmNum) {
    case 0:
      score = word.length;
      break;
    case 1:
      score = calculateScoreVowelBonus(word);
      break;
    case 2:
      score = calculateScoreTraditional(word);
      break;
  }

  return score;
}

function runProgram() {
  const word = promptForWord();
  if (word) {
		const algorithmNum = promptForAlgorithmNum();
		if (algorithmNum != 0 && algorithmNum != 1 && algorithmNum != 2) {
			console.log(`Unexpected option: ${algorithmNum}`);
			return;
		}
	
		const score = scoreWord(word, algorithmNum);
		console.log(`Score for "${word}": ${score}`);
  }
}

// ************ BEGIN: DO NOT REMOVE THESE LINES **************//
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  runProgram();
});

// ************ END: DO NOT REMOVE THESE LINES **************//
