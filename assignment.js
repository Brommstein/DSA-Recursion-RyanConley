/* eslint-disable strict */

let tinyMaze = [
  [' ', ' ', 'e']
];

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// Counting Sheep

function CountingSheep(num) {
  if (num === 0) return console.log('All sheep jumped over the fence!');
  else {
    console.log(`${num}: Another sheep jumps over the fence!`);
    CountingSheep(num - 1);
  }
}

// Power Calculator

function powerCalculator(num1, num2, total = num1) {
  //error checking...
  if (num2 < 0) return console.log('Exponent should be >= 0!');
  if (num2 === 0) return console.log(1);
  //base answer
  if (num2 === 1) return console.log(total);
  if (num2 > 1) {
    total *= num1;
    powerCalculator(num1, num2 - 1, total);
  }
}

// Reverse String

function reverseString(string, newString = '') {
  if (string === '') return console.log(newString);
  else {
    newString += string.charAt(string.length - 1);
    reverseString(string.slice(0, string.length - 1), newString);
  }
}

// Nth Triangular Number

function triangularNumber(num, total = 0, inc = 1) {
  if (num === 0) return console.log(`Total number of dots is ${total}.`);
  else {
    total += inc;
    triangularNumber(num - 1, total, inc + 1);
  }
}

// String Splitter

function stringSplitter(date, newDate = '') {
  if (date === '') return console.log(`["${newDate}"]`);
  else {
    if (date.charAt(0) === '/') newDate += '", "';
    else newDate += date.charAt(0);
    stringSplitter(date.slice(1, date.length), newDate);
  }
}

// Fibonacci

function fibonacci(num, first = 0, second = 0, last = 1) {
  if (num === 0) return console.log(`The final fibonacci number is ${last}`);
  else {
    console.log(last);
    first = last;
    last = first + second;
    second = first;
    fibonacci(num - 1, first, second, last);
  }
}

// Factorial

function factorial(num, total = 1) {
  if (num === 0) return console.log(total);
  else {
    total *= num;
    factorial(num - 1, total);
  }
}

// Find a way out of the maze

function mazeEscape(maze, x = 0, y = 0, solution = '') {
  //Checks if your on final position
  if (maze[y][x] === 'e') return console.log(`The solution is ${solution}`);
  //Starts movement
  else {
    if (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e') {
      solution += 'R';
      mazeEscape(maze, x + 1, y, solution);
    }
    else if (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e') {
      solution += 'D';
      mazeEscape(maze, x, y + 1, solution);
    }
    else if (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') {
      solution += 'L';
      mazeEscape(maze, x - 1, y, solution);
    }
    else if (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e') {
      solution += 'U';
      mazeEscape(maze, x, y - 1, solution);
    }
  }
}

// Find ALL the ways out of the maze

function fullMazeEscape(maze, x = 0, y = 0, solution = '', traveled = []) {
  //Checks if your on final position && creates traveled array
  if (maze[y][x] === 'e') {
    if(solution)
      console.log(`Path to the exit: ${solution}`);
    traveled.push(solution);
  }
  //Starts movement
  else {
    if (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e') {
      solution += 'R';
      mazeEscape(maze, x + 1, y, solution);
    }
    else if (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e') {
      solution += 'D';
      mazeEscape(maze, x, y + 1, solution);
    }
    else if (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') {
      solution += 'L';
      mazeEscape(maze, x - 1, y, solution);
    }
    else if (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e') {
      solution += 'U';
      mazeEscape(maze, x, y - 1, solution);
    }
  }
}

// Anagrams

// Organization Chart

// Binary Representation


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

console.log('Counting Sheep');

CountingSheep(7);

console.log('');
console.log('Power Calculator');

powerCalculator(10, 2);

console.log('');
console.log('Reverse String');

reverseString('Coding is so fun but is stressful at times!');

console.log('');
console.log('Triangular Number');

triangularNumber(9);

console.log('');
console.log('String Splitter');

stringSplitter('10/20/2021');

console.log('');
console.log('Fibonacci');

fibonacci(12);

console.log('');
console.log('Factorial');

factorial(7);

console.log('');
console.log('Way out of maze');

mazeEscape(maze);

console.log('');
console.log('All ways out of the maze');

fullMazeEscape(maze);