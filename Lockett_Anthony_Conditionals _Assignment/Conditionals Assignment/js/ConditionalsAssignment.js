/*
 Anthony Lockett
 June 13, 2015
 Conditionals Assignment
 */

//Calculate your wages & see if you are BALLING!

var paytype = prompt("How do you get paid? \n 1. Weekly \n 2. Bi-Weekly \n **Enter Number(s) Only**")// This variable for the users pay type.
if(paytype <= 1){ // This condition directs which section of code to run base on the user's input.
 var hoursaday = prompt("How many hours do you work a day? \n **Enter Number(s) Only**")// This variable asks for the user's hours worked in a day.
 var hourwage = prompt("How much is your hourly wage? \n **Enter Number(s) Only**")// This variable asks for how much is the user's hourly pay.
 var daysworked = prompt("How many days do you work in a week? \n **Enter Number(s) Only**")// This variable asks for how many days the user works a week.
 var weekhours1 = hoursaday * daysworked// This variable calculates the hours worked in a week.
 var gross = hourwage * weekhours1// This variable calculates the user's gross income.
 var net = prompt("Do you pay taxes? \n 1. Yes \n 2. No \n **Enter Number(s) Only**")// This variable calculates the user's net pay based on Louisiana's 9% tax rate.
 if(net >1){ // This condition directs which section of code to run base on the user's input.
  alert("You wage is" + " " + gross)// This alert notifies the user of their gross amount.
 }else{var net2 = gross * .9// This condition directs which section of code to run base on the user's input.
  alert("Your wage is" + " " + net2)}// This alert notifies the user of their net amount.
}else{alert("Bi-Weekly? Ok!") // This condition directs which section of code to run base on the user's input.
 var hoursaday = prompt("How many hours do you work a day \n **Enter Number(s) Only**?")// This variable for the users pay type.
 var hourwage = prompt("How much is your hourly wage? \n **Enter Number(s) Only**")// This variable asks for the user's hours worked in a day.
 var daysworked = prompt("How many days do you work in a week? \n **Enter Number(s) Only**")// This variable asks for how many days the user works a week.
 var weekhours1 = hoursaday * daysworked// This variable calculates the hours worked in a week.
 var weekhours2 = weekhours1 * 2// This variable calculates the hours worked in a 2 week period.
 var gross = hourwage * weekhours2// This variable calculates the user's gross income.
 var net = prompt("Do you pay taxes? \n 1. Yes \n 2. No \n **Enter Number(s) Only**")// This variable calculates the user's net pay based on Louisiana's 9% tax rate.
 if(net >1){ // This condition directs which section of code to run base on the user's input.
  alert("You wage is" + " " + gross)// This alert notifies the user of their gross amount.
 }else{var net2 = gross * .9// This condition directs which section of code to run base on the user's input.
  alert("Your wage is" + " " + net2)}// This alert notifies the user of their net amount.
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
