// Anthony Lockett
//June 11, 2015
// Expressions Assignment

//This should help a user calculate how many hours they have worked in a pay period & that will be on they're next paycheck.
var daysworked = prompt("So how many days did you work this week?")// This prompt asks the user for the days they work in 1 week.
var hoursinday = prompt("How many hours do you work a day?")// This prompt asks the user for the hours they work in 1 day.
var weekstilpay = prompt("How many weeks in between pay checks? \n1 or 2?")// This prompt asks the user for how many week(s) are between their paychecks.
var hoursinweek = daysworked * hoursinday// This variable calculates how many hours were worked in 1 week.
var check = hoursinweek * weekstilpay// This variable calculates the hours on the user's next paycheck.
alert("Congratulations!!! \nYou will have" + " " + check + "hours on you next pay check!")// This alert shows the user how many hours that will be on their pay check based on their inputs.
console.log("Days worked:" + " " + daysworked)// Shows the days worked in the console.
console.log("Hours worked each day:" + " " + hoursinday)// Shows the hours worked each day in the console.
console.log("Weeks between paychecks:" + " " + weekstilpay)// Shows the weeks between each paychecks in the console.
console.log("Hours worked in a week:" + " " + hoursinweek)// Shows the hours worked in a week in the console.
console.log("The answer the user gets:" + " " + check)// Shows the the answer the user gets in the console.