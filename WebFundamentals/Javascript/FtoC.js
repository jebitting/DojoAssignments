// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales
// Create fahrenheitToCelsius(fDegrees) that accepts
// a number of degrees in Fahrenheit
// returns the equivalent temperature as expressed in Celsius degrees.

var degF = [-20,-15,-10,-5,0,5,10,15,20];

var degArray = [];
var cDegrees = 0;
var degC = 0;

var cDegrees = fahrenheitToCelsius(degC);
console.log("Degrees Celcius: ",cDegrees);

function fahrenheitToCelsius(degC){
  var i = 0;
  var degC = 0;
  var degArray = [];
  while (i < degF.length){
    degC = ((degF[i] - 32) * 5) / 9;  //F to C
    degArray.push(degC.toPrecision(4));
    i++
  }
  return degArray;
}
