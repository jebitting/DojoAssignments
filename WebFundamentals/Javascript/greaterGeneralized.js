// Values Greater than Second, Generalized
// write a function that accepts any array
// returns a new array with the array values that are greater than its 2nd value
// return number of values
// what if the array is only one element long?  If it's one value long, it returns
// a zero value.

var array = [1,3,5,7,9,13];
var newArray = [];
var greater = greaterSecond(newArray);
var newArrayLen = greater.length;
console.log("Greater Values are: ",greater);
console.log("Total number of values is ",newArrayLen);

function greaterSecond(newArray){
  var newArray = [];
  for(var i=0; i < array.length; i++){
    if (array[i] > array[i+1]){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
