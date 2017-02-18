// Print and Return
// function receives an array with two numbers
// Print the first value, and return the second

var value = [9,7];
var _print = printReturn(value[0]);
var _return = printReturn(value[1]);
console.log("The First Value is: ",_print);
return _return;

function printReturn(value){
  return value;
}
