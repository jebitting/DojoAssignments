// For a Few Billion
// king offered a servant $10,000
// servant instead asked for 30 days double starting with a penny
// for loops to answer the following:

// var days = 30;
// NOTE:  Days to $10,000 = 19 <-

var days = 30
var payday = Infinity;
var paycheck = 0.01;
var i = 1;

// 30 Day Paycheck
console.log("  - 30 DAY PAYCHECK -  ")
for (var i=0; i <=30; i++){
  paycheck = paycheck + paycheck;
  console.log ("Today is day", i, " - Paycheck today is:", paycheck);
}
console.log(" ")
console.log("  - THE ULTIMATE PAYCHECK -  ")
console.log(" ")
// Infinity Paycheck
while (paycheck < payday){
  paycheck = paycheck + paycheck;
  console.log ("Today is day", i, " - Paycheck today is:", paycheck);
  i++;
}
console.log("  Complete.  ")

// How much was the reward after 30 days?
// Bonus (Only If You Have Time):
// 19 Days ->  How many days would it take the servant to make $10,000?
// How about 1 billion?
// 1030 ->  how many days until the servant has infinite money?
