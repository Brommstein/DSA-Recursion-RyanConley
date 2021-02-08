/* eslint-disable strict */
// Counting Sheep

function CountingSheep(num) {
  if (num === 0) return console.log('All sheep jumped over the fence!');
  else {
    console.log(`${num}: Another sheep jumps over the fence!`);
    CountingSheep(num - 1);
  }
}

// Power Calculator

// Reverse String

// Nth Triangular Number

// String Splitter

// Fibonacci

// Factorial

// Find a way out of the maze

// Find ALL the ways out of the maze

// Anagrams

// Organization Chart

// Binary Representation



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

CountingSheep(7);