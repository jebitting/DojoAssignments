// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000,
// console.log the final sum
// Is there a shortcut?

addInteger = 0
var varMin = -300000
var varMax = 300000
for (var i = varMin; i < varMax; i++){
  if(varMin + varMax == 0){
    console.log(varMin + varMax);
    break;
  }
  else if (i % 2 != 0){
  addInteger = addInteger + i;
  console.log(addInteger);
}
}
console.log("Total :", addInteger);
