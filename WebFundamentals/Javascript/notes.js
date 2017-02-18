// Calling a function that
// does NOT return a value
greetSomeone("Claire");

// This one DOES return a value
var joke = tellMeAGoodJoke();
console.log(joke);

//
function tellMeAGoodJoke() {
var jokeStr = "Have you heard about corduroy pillowcases?";
jokeStr = jokeStr + " .... They're making headlines!";
return jokeStr;
jokeStr += "Thanks, I'm here all week..."; // never runs!
}
// Maybe it's a good joke, but it's a BAD FUNCTION. You can't return twice!
function tellMeAnotherOne() {
var aJoke = "How many surrealists does it take to screw in a lightbulb?";
return aJoke;
return " .... A fish."; // Wha? Oh I get it...but JavaScript won't.
} // Remember: you can’t return twice!

// ARRAYS
// We can avoid this problem by creating a temporary variable to store
// the value of arr[1] before it is overwritten. To swap values in the
// array (or elsewhere), always use a temporary variable. For example:

arr = [2, 10, 6, 8];
temp = arr[1]; // arr == [2, 10,6, 8], temp == 10
arr[1] = arr[3]; // arr == [2, 8, 6, 8], temp == 10
arr[3] = temp; // arr == [2, 8, 6, 10], temp == 10
console.log(arr); // displays [2,8,6,10]
