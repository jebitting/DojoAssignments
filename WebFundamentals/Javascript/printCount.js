// Print all integer multiples of 5, from 512 to 4096
// Also log how many there were.

// function printCount(){
var arr = [];
var count = 0;
for (var i = 512; i < 4097; i++){
  if ( i % 5 == 0){
    arr.push(i);
    count++;
  }
}
  console.log ("List of integers: ", arr);
  console.log ("Total number: ", count);
// }
