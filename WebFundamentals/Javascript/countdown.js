// Countdown
// Create a function that accepts a number as an input
// Return a new array that counts down by one, from the number
// (as array’s ‘zero’th element) down to 0 (as the last element).
// How long is this array?
var value = 15;
var results = countdown(value);
var resultsLen = results.length;

console.log(results);
console.log("The Array Length is:  ",resultsLen);

function countdown(value){
  var i = value;
  var value = [];
  while (i > 0) {
    value.push(i);
    i--;
  }
  return value;
}
