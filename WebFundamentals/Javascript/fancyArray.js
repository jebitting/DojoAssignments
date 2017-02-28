// Fancy Array
// Let's make it look fancy! Write a function that will make it print like:
// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack

var array = ["James","Jill","Jane","Jack"];
for (var i=0; i < array.length; i++){
  console.log(i, "->", array[i]);
}

// Bonus (Only If You Have Time):
// pass in the symbol that will print (ex: "->", "=>", "::", "-----")
// Have an extra parameter reversed.
// If the user passes true, print the elements in reverse order
