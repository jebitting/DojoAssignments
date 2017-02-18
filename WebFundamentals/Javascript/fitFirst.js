// Fit the First Value
// Your function should accept an array
// If the value at [0] is greater than array’s length, print "Too big!"
// if the value at [0] is less than array’s length, print "Too small!"
// otherwise print "Just right!".

var arr = [9,2,3,4,5];
if (arr[0] > arr.length){
  console.log("Too Big!");
}
if (arr[0] < arr.length){
  console.log("Too Small!");
}
if (arr[0] == arr.length){
  console.log("Just Right!");
}
