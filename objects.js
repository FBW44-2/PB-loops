const person1 = ['Helon', 'Roop', 1988, 'teacher', ['nic', 'john', 'bob']];

// Object
const helon = {
  firstName: 'Helon',
  lastName: 'Roop',
  birthYear: 1988,
  occcupation: 'teacher',
  friends: ['nic', 'john', 'bob'],
};

const nameKey = 'Name';

// console.log(helon);
// console.log(helon.lastName);
// console.log(helon['lastName']);
// console.log(helon['first' + nameKey]);
// console.log(helon.'first' + nameKey);

// const fitBitData = [12343,546464,2345246];

const fitBitData = {
  totalSteps: 30877,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
};
//////////////////
// ACCESSING OBJECT PROPERITES
//////////////////

// const palette = {
//   red: '#eb4d4b',
//   yellow: '#f9ca24',
//   blue: '#30336b',
// };

// DOT NOTATION
// console.log(palette.red);

// SQUARE BRACKET NOTATION
// console.log(palette['yellow']);

// With square brackets we can use dynamic key names
// let mysteryColor = 'blue';
// console.log(palette[mysteryColor]);

//////////////////
// ADDING AND UPDATING OBJECT PROPERITES
//////////////////

const userReviews = {};

// Adding a new property
userReviews['queenBee45'] = 4.0;
userReviews.mrSmith = 3.5;

userReviews.mrSmith += 2;

console.log(userReviews);

//////////////////
// Nested Arrays and objects
//////////////////

const student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  strengths: ['Math', 'Science'],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
// console.log(student.strengths[0]);

const shoppingCart = [
  { product: 'Jenga', price: 6.5, quantity: 1 },
  { product: 'Jenga', price: 6.5, quantity: 1 },
  { product: 'Jenga', price: 6.5, quantity: 1 },
];

const game = {
  player1: {
    username: 'john',
    playingAs: 'X',
  },
  player2: {
    username: 'sarah',
    playingAs: 'O',
  },
  board: [
    ['O', null, 'X'],
    ['O', 'X', 'X'],
    ['O', null, 'X'],
  ],
};

// console.log(shoppingCart[1]);

///////////
// Objects and Reference types
///////////

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

// Objects & arrays are reference types
const palette2 = palette;

palette2.green = '#ebf876';
palette.red = 'red';

// console.log(palette.green);
// console.log(palette2.green);
// console.log(palette2);

///////////
// array object equality
///////////

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

console.log(nums === mystery);
console.log(nums === moreNums);

const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: [],
};

if (user.notifications === []) {
  console.log('No new notifcations');
}

if (!user.notifications.length) {
  console.log('No new notifications');
}
