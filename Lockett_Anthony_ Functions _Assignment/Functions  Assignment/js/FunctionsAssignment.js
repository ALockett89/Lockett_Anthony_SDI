 /*
Anthony Lockett
SDI Week 4
Functions Assignment
6/21/15
 */

 //Calculation Of Age

dateoftest()

function dateoftest(){
    var testyear = prompt("What is today's year?")
    while(testyear==="" || isNaN(testyear)){
        if(testyear===""){
            testyear = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is today's year?")
        }else if(isNaN(testyear)){
            testyear = prompt("ONLY USE NUMBERS!!!\n What is today's year?")

        }


    }
}