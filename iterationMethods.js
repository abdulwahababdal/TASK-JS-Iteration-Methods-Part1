// Array of numbers
const numbers = [10, 13, 20, 25, 38, 35, 40];

// 1) Using `greaterThanTwentyFive` function that returns a new array containing numbers that are greater than or equal to 25.
const greaterThanTwentyFive = (numbers) => {
  return numbers.filter((number) => number >= 25);
};

// 2) Using `divisibleByFive` function return a new array containing numbers that are divisible by 5.
const divisibleByFive = (numbers) => {
  return numbers.filter((number) => !(number % 5));
};

// 3) Using `squaredNumbers` function return a new array that contains each number squared.
const squaredNumbers = (numbers) => {
  return (squares = numbers.map((number) => number * number));
};

// 4) Using `doubledNumbers` function return a new array that contains each number multiplied by 2.
const doubledNumbers = (numbers) => {
  return (squares = numbers.map((number) => number * 2));
};

// 5) Using `filteredAndSquared` function return the numbers that are greater than or equal to 20 and then square each of them.
const filteredAndSquared = (numbers) => {
  return numbers
    .filter((number) => number >= 20)
    .map((number) => number * number);
};

// 6) Using `filteredAndTripled` return the numbers that are divisible by 5 and then multiply each of them by 3.
const filteredAndTripled = (numbers) => {
  return numbers.filter((number) => !(number % 5)).map((number) => number * 3);
};

// 🌶️🌶️🌶️ Extra

// 1) Using `logger` function log every element in an array
function logger(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

// 2) using `toCelsius` function return an array of temperatures in Celsius
function toCelsius(temperatures) {
  return temperatures.map((temp) => (temp - 32) * (5 / 9));
}

// 3) using `hottestDays` function return an array of temperatures that exceed the threshold
function hottestDays(temperatures, threshold) {
  return temperatures.filter((temp) => temp > threshold);
}

// 4) Using `logHottestDays` function log temperatures that exceed the threshold to the console IN DEGREES CELSIUS  (hint: you can combine all previous functions)
function logHottestDays(temperatures, threshold) {
  const tempInFarenheight = hottestDays(temperatures, threshold);
  const tempInCelusius = toCelsius(tempInFarenheight);
  logger(tempInCelusius);
}

module.exports = {
  greaterThanTwentyFive,
  divisibleByFive,
  squaredNumbers,
  doubledNumbers,
  filteredAndSquared,
  filteredAndTripled,
  logger,
  toCelsius,
  hottestDays,
  logHottestDays,
};
