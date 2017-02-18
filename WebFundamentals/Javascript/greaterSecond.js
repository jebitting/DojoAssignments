// Values Greater than Second
// array [1,3,5,7,9,13]
// print values that are greater than its 2nd value
// return number of values

var array = [1,3,5,7,9,13];
var _total = 0;
var greater = greaterSecond(_total);

console.log("Total number of values is ",greater);

function greaterSecond(_total){
  for(var i=0; i < array.length; i++){
    if (array[i] > array[i+1]){
      _lower = array[i];
      _upper = array[i+1];
      _total++
      console.log(_lower," is greater than ",_upper);
    }
  }
  return _total;
}
