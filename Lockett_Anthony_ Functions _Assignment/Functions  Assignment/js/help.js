/*
 Anthony Lockett
 SDI Week 4
 Functions Assignment
 6/21/15
 */

//Calculation Of Age


var useryearoftest = prompt("Year")
var useryb = prompt("Year born")
var sub = 1
function monthfix(){
    var fix3 = useryearoftest - 1
    var fix4 = fix3 + useryb

    return fix4
}

alert(monthfix())