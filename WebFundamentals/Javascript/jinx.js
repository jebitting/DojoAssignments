// This Length, That Value
// Given two numbers,
// return array of length num1 with each value num2
// Print "Jinx!" if they are same

var i = 0;
var num1 = 10;
var num2 = 10;
var prize = [];

if (num1 == num2){
  console.log("Jinx!!!");
}
while(i < num1){
  prize.push(num2);
  i++
}
console.log(prize);
