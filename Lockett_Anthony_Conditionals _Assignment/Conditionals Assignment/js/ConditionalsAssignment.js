/*
 Anthony Lockett
 June 13, 2015
 Conditionals Assignment
 */

//Calculate your wages & see if you are BALLING!

var paytype = prompt("How do you get paid? \n 1. Weekly \n 2. Bi-Weekly")
if(paytype <= 1){
 var hoursaday = prompt("How many hours do you work a day?")
 var hourwage = prompt("How much is your hourly wage?")
 var daysworked = prompt("How many days do you work in a week?")
 var weekhours1 = hoursaday * daysworked
 var gross = hourwage * weekhours1
 var net = prompt("Do you pay taxes? \n 1. Yes \n 2. No")
 if(net >1){
  alert("You wage is" + " " + gross)
 }else{var net2 = gross * .9
  alert("Your wage is" + " " + net2)}
}else{alert("Bi-Weekly? Ok!")
 var hoursaday = prompt("How many hours do you work a day?")
 var hourwage = prompt("How much is your hourly wage?")
 var daysworked = prompt("How many days do you work in a week?")
 var weekhours1 = hoursaday * daysworked
 var weekhours2 = weekhours1 * 2
 var gross = hourwage * weekhours2
 var net = prompt("Do you pay taxes? \n 1. Yes \n 2. No")
 if(net >1){
  alert("You wage is" + " " + gross)
 }else{var net2 = gross * .9
  alert("Your wage is" + " " + net2)}
}
var ballerstatus = ["Baller Status: Balling!!!", "Baller Status: Maybe Next Check, Hang In There"]
var balling = 380
if(net2 > balling){
 alert(ballerstatus[0])
}else{alert(ballerstatus[1])
}
console.log("Hours A Day:" + hoursaday)
console.log("Hourly Wage:" + hourwage)
console.log("Days Worked A Week:" + daysworked)
console.log("Hours Worked A Week:" + weekhours1)
console.log("Gross Wage:" + gross)
console.log("Net Wage:" + net2)