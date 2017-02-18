// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts
// the number of degrees Celsius
// returns the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number?
// The scientific calculation can be complex,
// so for this challenge just try a series of Celsius integer
// values starting at 200, going downward (descending),
// checking whether it is equal to the corresponding Fahrenheit value.

var degC = [-20,-15,-10,-5,0,5,10,15,20];

var degArray = [];
var fDegrees = 0;
var fDegrees2 = 0;
var degF = 0;
var degF2 = 0;

var fDegrees = celsiusToFahrenheit(degF);
console.log("Degrees Farenheit: ",fDegrees);
var fDegrees2 = CtoFOption2(degF2);
console.log("Degrees Farenheit2: ",fDegrees2);

function celsiusToFahrenheit(degF){
  var i = 2
  var degF = 0;
  var degArray = [];
  while (i < degC.length){
    degF = (9/5 * degC[i]) + 32;  // C to F
    degArray.push(degF);
    i++
  }
  return degArray;
}

function CtoFOption2(degF2){
  var i = 600
  var degF2 = 0;
  var degArray2 = [];
  while (i > -600){
    degF2 = (9/5 * i) + 32;  // C to F
    if (degF2 == i){
      degArray2.push(degF2);
    }
    i--
  }
  return degArray2;
}
