// Write a function that determines whether a given year is a leap year
// If a year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

// function leapYear(year)
year = 2020
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year");
  }
else {
  console.log("Not a Leap Year");
}
//}
