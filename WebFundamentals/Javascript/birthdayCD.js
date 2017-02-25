// For every day, print how many days left.
// more than 30 days, print a sad message.
// If it's less than 30 days, print a message sound excited!
// If it's less than 5 days, SCREAM IT!
// On your birthday = ONCE IT'S YOUR BIRTHDAY HAVE PARTY!

var daysUntilMyBirthday = 60;

var sixty = "days until my birthday. Such a long time... :(";
var thirty = "days until my birthday.  Almost Here!";
var fiveLess = "DAYS UNTIL MY BIRTHDAY!!!";
var bdayParty1 = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*";
var bdayParty2 = "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪";
var bdayParty3 = "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«";

while (daysUntilMyBirthday > 30){
  console.log(daysUntilMyBirthday, sixty);
  daysUntilMyBirthday --;
}
while (daysUntilMyBirthday > 5){
  console.log(daysUntilMyBirthday, thirty);
  daysUntilMyBirthday --;
}
while (daysUntilMyBirthday > 1){
  console.log(daysUntilMyBirthday, fiveLess);
  daysUntilMyBirthday --;
}
while (daysUntilMyBirthday == 1){
  console.log(bdayParty1);
  console.log(bdayParty2);
  console.log(bdayParty3);
  daysUntilMyBirthday --;
}
