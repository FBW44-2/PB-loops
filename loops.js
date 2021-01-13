/////////////
// For Loops
///////////////

// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

//step 1: let i = 1 -> start i at 1
//step 2: i <= 10 -> run the loop as long as i <= 10
//step 3:  i++ -> adding 1 to i each time

for (let i = 1; i <= 10; i++) {
  //   console.log('HELLO:', i);
}

// Count by 3
for (let i = 1; i <= 10; i += 3) {
  //   console.log('HELLO:', i);
}

// Printing first 20 perfect squares
for (let num = 1; num <= 20; num++) {
  //   console.log(`${num}x${num} = ${num * num}`);
}

// count down from 200 by intervals 25
for (let i = 200; i >= 0; i -= 25) {
  //   console.log(i);
}

/////////////
// For Loops with arrays
///////////////

const examScores = [98, 100, 70, 50, 84];

for (let i = 0; i < examScores.length; i++) {
  //   console.log(i, examScores[i]);
}

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Hercules',
    grade: 100,
  },
  {
    firstName: 'Xena',
    grade: 100,
  },
];

// loop over and print out each students grade
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  //   console.log(`${student.firstName} scored ${student.grade}`);
}

// Average all grades in myStudents array
let total = 0;
console.log(total);

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}

// console.log('Average:', total / myStudents.length);

// Reversing a string

const word = 'stressed';
let reversedWord = ''; // will hold a reversed string

// loop backwards over a string
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
// console.log(reversedWord);

// //////////////////////
// NESTED FOR LOOPS
///////////////////////////

for (let i = 1; i <= 10; i++) {
  //   console.log('OUTER LOOP:', i);

  for (let j = 10; j >= 0; j -= 2) {
    // console.log('  INNER LOOP  ', j);
  }
}

// sum all numbers in our game board

const gameBoard = [
  [4, 3, 43, 5],
  [6, 3, 93, 5],
  [9, 3, 46, 5],
  [34, 34, 43, 5],
];

let totalScore = 0;
// outer loop will iterate through the game rows
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  // inner loop will iterate over each cell in the given row
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

console.log('Total score is', totalScore);
