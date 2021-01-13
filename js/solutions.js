// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

for (let x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log(x + ' is even');
  } else if (x % 2 === 0) {
    console.log(x + ' is even');
  } else {
    console.log(x + ' is odd');
  }
}

// 2. Write a loop which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' FizzBuzz');
  } else if (i % 3 === 0) {
    console.log(i + ' Fizz');
  } else if (i % 5 === 0) {
    console.log(i + ' Buzz');
  } else {
    console.log(i);
  }
}

// Exercise 1

// Q1 Sum of Numbers

const numArr = [4, 3, 13, 2];
let sum = 0;
let product = 1;
for (let i = 0; i < numArr.length; i++) {
  sum += numArr[i];
  product *= numArr[i];
}
console.log(
  `The sum of the array is ${sum}; the product of the array is ${product}.`
);

const numArr2 = [4, 3, 13, 2];
let sum2 = 0;
let product2 = 1;

for (let num of numArr2) {
  sum2 += num;
  product2 *= num;
}

console.log(
  `The sum of the array is ${sum2}; the product of the array is ${product2}.`
);

// Q2 Hello Frien

const friendsArr = ['Becky', 'Dan', 'Rika', 'Maria', 'Kevin'];

for (let i = 0; i < friendsArr.length; i++) {
  console.log(`Hello ${friendsArr[i]}!`);
  console.log(`${friendsArr[i]} is at index ${i} of my friends array!`);
}

for (let friend of friendsArr) {
  console.log(`Hello ${friend}!`);
  console.log(
    `${friend} is at index ${friendsArr.indexOf(friend)} of my friends array!`
  );
}

// /////////
// Nested Loops
// /////////

//Q1

for (let i = 0; i < 4; i++) {
  let asteriskStr = '';
  for (let y = 0; y <= i; y++) {
    asteriskStr += '*';
  }
  console.log(asteriskStr);
}

//Q2

const arr2 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i = 0; i < arr2.length; i++) {
  console.log(`row ${i}`);
  for (let y = 0; y < arr2[i].length; y++) {
    console.log(` ${arr2[i][y]}`);
  }
}

let i = 1;
for (let row of arr2) {
  console.log(`row ${i++}`);
  for (let i = 0; i < row.length; i++) {
    console.log(row[i]);
  }
}

//Q3

const arrayOne = [];

for (let i = 1; i <= 4; i++) {
  for (let y = 1; y <= 3; y++) {
    let strNums = i.toString();
    arrayOne.push(strNums);
  }
}

console.log(arrayOne.join(' '));

const arrayTwo = [];

for (let i = 0; i <= 2; i++) {
  for (let y = 0; y <= 4; y++) {
    strNums = y.toString();
    arrayTwo.push(strNums);
  }
}

console.log(arrayTwo.join(' '));

//BONUS CHALLENGE

let firstOutput = '';
let secondOutput = '';
for (let i = 1; i <= 5; i++) {
  if (i < 5) {
    firstOutput += i * 111;
    secondOutput += i - 1;
  }
  if (i === 5) {
    for (let j = 0; j < 2; j++) {
      secondOutput += secondOutput.substr(0, 5);
    }
  }
}
console.log(firstOutput.split('').join(' '));
console.log(secondOutput.split('').join(' '));
