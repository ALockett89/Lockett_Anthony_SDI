alert("I hope I got this right");

//Average shopping bill

//Calculate the average amount spent on groceries.
var fiveweeks = [25, 20, 25, 35, 20]//This is the amount spent over the five weeks.
var total = fiveweeks[0] + fiveweeks[1] +fiveweeks[2] + fiveweeks[3] + fiveweeks[4]//This is the amount added up.
var average = total / 5//This is the average of the amount spent over the five weeks.
var a = "You have spent a total of $"// This is the variable for the phrase "You have spent a total of $".
var b = "on groceries over 5 weeks. That is an average of $"// This is the variable for the phrase "on groceries over 5 weeks. That is an average of $".
var c = "per week."// This is the variable for the phrase "per week.".
var answer = a + total + " " + b + average + " " + c// This is what shows in the console.
console.log(answer)// This is what shows in the console.