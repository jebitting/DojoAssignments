// If You Don't Mind, Can I Have The Time?
// Create a program that will tell you the time.
// With the following variables

var HOUR = 10;
var MINUTE = 15;
var PERIOD = "PM";

var hourBefore = "It's almost";
var hourAfter = "It's just after";
var clock15 = "quarter past";
var clock30 = "half past";
var clock45 = "quarter till"
var clockAM = "in the morning";
var clockPM = "in the evening";
var clock = clockPM;
var quarter = false;
var time = "";
var quarter = false;

// set the clock
if (PERIOD == "AM"){
  clock = clockAM;
}
//on the quarter
if (MINUTE == 15){
  time = clock15;
  quarter = true;
}
if (MINUTE == 30){
  time = clock30;
  quarter = true;
}
if (MINUTE == 45){
  time = clock45;
  quarter = true;
}
if (quarter == true){
  console.log("It's", time, HOUR + 1, clock);
}
else {
  console.log(hourAfter, HOUR, clock);
}


// set minutes

// ...print "It's almost 9 in the morning"

// change to
// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";
// ...print "It's just after 7 in the evening"

// Bonus
// Add functionality for "quarter after", "half past", "5 after"
// Distinguish between "in the afternoon", "at night", "noon", "midnight"
