// Anthony Lockett
//June 11, 2015
// Expressions Assignment

//This should help a user calculate how many hours they have worked in a pay period.
var daysworked = prompt("So how many days did you work this week?")
var hoursinday = prompt("How many hours do you work a day")
var weekstilpay = prompt("How many weeks in between pay checks? \n1 or 2?")
var hoursinweek = daysworked * hoursinday
var check = hoursinweek * weekstilpay
alert("Congratulations!!! \nYou will have" + " " + check + "hours on you next pay check!")
