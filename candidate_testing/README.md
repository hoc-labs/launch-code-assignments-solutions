# Candidate Testing

All of your code should be written in the file `script.js`. To run your test, click the `Run Program` button on the web page.

## General Requirements
1. Ask the candidate (user) to enter their name
2. Use a loop to ask five questions, one at a time, to the candidate
3. Collect the candidate's answers
4. Check those answers for accuracy (case insensitive equality check)
5. Calculate the candidate's overall percentage
6. Determine if the candidate did well enough to enter our program (need >= 80% to pass)
7. Display the results

### Questions/Correct Answers
```
Who was the first American woman in space?	"Sally Ride"
True or false: 5 kilometer == 5000 meters?	"true"
(5 + 3)/2 * 10 = ?	"40"
Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	"Trajectory"
What is the minimum crew size for the ISS?	"3"
```

### Implementation

The code is already setup with a call to the `runProgram` function when you click the `Run Program` button on the web page. There are four functions that are called from `runProgram`.
*  **askForName**: prompt the user for his name.
*  **askQuestions**: ask the user each of the questions and collect the answers.
* **gradeQuiz**: check the candidate's answers against the correct answers and calculate the total number that are correct and a percentage. Determine if the candidate passed (>=80%).
* **displayResults**: write the results output to the console matching the sample output below.

### Sample Output
```
Candidate Name: Can Twin
1) Who was the first American woman in space?
Your Answer: sally ride
Correct Answer: Sally Ride

2) True or false: 5000 meters = 5 kilometers.
Your Answer: false
Correct Answer: true

3) (5 + 3)/2 * 10 = ?
Your Answer: 45
Correct Answer: 40

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: trajectory
Correct Answer: Trajectory

5) What is the minimum crew size for the ISS?
Your Answer: 10
Correct Answer: 3

>>> Overall Grade: 40% (2 of 5 responses correct) <<<
>>> Status: FAILED <<<
```

