// Log positive numbers starting at 2016
// count down by fours (exclude 0), without a FOR loop.

var i = 2016;
while (i > 0) {
  if (i % 4 == 0){
    console.log("Countdown!  The number is ", i);
}
i--;
}
