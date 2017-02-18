// The Final Countdown
// Given 4 parameters (param1,param2,param3,param4)
// print the multiples of param1, starting at param2 and extending to param3
// skip if multiple is equal to param4
// Do this using a WHILE loop.

// Example: Given (3,5,17,9), print 6,12,15
// (which are all of the multiples of 3 between 5 and 17, except for the value 9).

var mult = 3
var lowNum = 5
var highNum = 17
var radical = 9

var i = lowNum
while (i < highNum){
  if (i % mult == 0 && i != radical) {
    console.log("The number is ", i);
  }
i++;
}
