// First Plus Length
// return the sum of the first value in the array, plus the array’s length.
// What happens if the array’s first value is not a number,
// but a string (like "what?") or a boolean (like false)

var arr=[5,6,7,8];
var arrLen=arr.length;
console.log(arr);
console.log(arrLen);
console.log(arr[0]+arrLen);

var arrStr=["what",6,7,8];
var arrStrLen=arrStr.length;
console.log(arrStr);
console.log(arrStrLen);
console.log(arrStr[0]+arrStrLen);

var arrBol=[true,6,7,8];
var arrBolLen=arrBol.length;
console.log(arrBol);
console.log(arrBolLen);
console.log(arrBol[0]+arrBolLen);

// return first + Length both numbers
// first value string = concantenates value with length
// first value boolean = uses the bollean value
// 0:false  1:true
