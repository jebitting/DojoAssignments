// Range Print
// Create a function that can take a
// start point
// end point
// and skip amount, to print all numbers in the range

// (Should go UP TO, but NOT INCLUDING the end point)
var range = [];
var array = [];

var pass = rangePrt(-5,40,2)
function rangePrt(start, end, skip){
  var i = start;
  while (i < end){
    array.push(i);
    i = i + skip;
    }
    console.log(array);
}
