alert("I hope I got this right");

//Discounts

//Calculate the discounted price for an item.
var origprice = 1200//This is the amount spent over the five weeks.
var discountpercent = .20//This is the amount added up.
var amountsaved = origprice * discountpercent// The amount after the discount is applied.
var decript = "Macbook Pro"//This is the average of the amount spent over the five weeks.
var tax = .9// Louisiana's tax amount.
var pricewithtax = origprice - amountsaved * tax// This is the price with tax.
var pricewithouttax = origprice - amountsaved// This is the price without tax.
var a = "Your"// This is the variable for the word "your".
var b = "was originally $"// This is the variable for the phrase "was originally $".
var c = "but after a"// This is the variable for the phrase "but after a"
var d = "% discount, it is now $"// This is the variable for the phrase "% discount, it is now $"/.
var e = "without tax, and $"// This is the variable for the phrase "without tax, and $".
var f = "with tax."// This is the variable for the phrase "with tax.".
var answer = a + " " + decript + " " + b + origprice + " " + c + " " + discountpercent + d + pricewithouttax + " " + e + pricewithtax + " " + f// This is what shows in the console.
console.log(answer)// This is what shows in the console.

