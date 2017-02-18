// Values Greater than Second
// for [1,3,5,7,9,13],
// print values that are greater than its 2nd value.
// return number of values

var array = [1,3,5,7,9,13];
var total = 0;
console.log(array[i]," is greater than ",array[i+1]);
console.log(total);

function greaterSecond(){
  for(var i=0; i < array.length; i++){
    if (array[i] < array[i+1]){
      console.log(array[i]," is greater than ",array[i+1]);
      total++
    }
  }
  return total;
}
