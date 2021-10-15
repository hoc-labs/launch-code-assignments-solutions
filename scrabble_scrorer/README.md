# Scrabble Scorer

All of your code should be written in the file `script.js`. Your ouput should be written to the console log.

To run your test, click the `Run Program` button on the web page.

## Overview
You are going to build a word scoring program. You are going to present the user with three options for how to score the word they enter.

The three options are described below:

Option | Name |	Description	
------ | ---- |  ----------- 
0 | Simple Score |	Each letter is worth 1 point.
1 | Bonus Vowels |	Vowels are 3 pts, consonants are 1 pt.
2 | Scrabble |	The traditional scoring algorithm, looks up point value for each letter.


Here's a sample interaction:

```
Let's play some Scrabble!

Enter a word to score: coconut
Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: 0
Score for 'coconut': 7
```

You are given an initial data structure for the point values for the Scrabble scoring algorithm to use.

```js
const scrabblePointSystem = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
```

## Step 1 - Build the program without prompting the user for the scoring algorithm to use. Use the Scrabble algorithm.
  * prompt the user for the word
  * build a function to calculate the total score using the scrabblePointSystem.
  * display a detailed output of the score for each letter.

```js
Let's play some Scrabble!

Enter a word to score: pineapple
Points for 'P': 3
Points for 'I': 1
Points for 'N': 1
Points for 'E': 1
Points for 'A': 1
Points for 'P': 3
Points for 'P': 3
Points for 'L': 1
Points for 'E': 1
Score: 15
```

## Step 2 - Improve your point system data structure.
* modify your function that calculates the score to call a function that will transform the scrabblePointSystem data structure to the newPointSystem data structure in the code sample below.
* use the new data structure to calculate the points for the Scrabble algorithm.

```js
function transformPointSystem() {
  // todo: programmatically generate a structure 
  // like the following:

  // const newPointSystem = {
  //   "A": 1,
  //   "B": 3,
  //   "C": 3,
  //   "D": 2,
  //   // etc..
  // }

  // return newPointSystem;

}
const newPointSystem = transformPointSystem();
```

Get your program working with the new data structure.

## Step 3 - Add the other scoring algorithms.
* create functions to score by options 0 and 1.
* prompt the user to allow them to specify which option to use. 
* use the correct scoring algorithm based on the selected option.

**Note:** you cannot hard-code the scoring options. You must generate them from a data structure that you have stored them in.

The output should look like the following:

```
Let's play some Scrabble!

Enter a word to score: rum
Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: 2
Score for 'rum': 5
```




