/*
 Anthony Lockett
 SDI Week 4
 Functions Assignment
 6/21/15
 */

//Calculation Of Age



function dateoftest(){
    var testyear = prompt("What is today's year?")
    while(testyear==="" || isNaN(testyear)){
        if(testyear===""){
            testyear = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is today's year?")
        }else if(isNaN(testyear)){
            testyear = prompt("ONLY USE NUMBERS!!!\n What is today's year?")
        }
    }return testyear
}
var useryearoftest = dateoftest()

function dateoftest2(){
    var testmonth = prompt("What is today's month?")
    while(testmonth==="" || isNaN(testmonth)){
        if(testmonth===""){
            testmonth = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is today's month?")
        }else if(isNaN(testmonth)){
            testmonth = prompt("ONLY USE NUMBERS!!!\n What is today's month?")
        }
    }return testmonth
}
var usermonthoftest = dateoftest2()

function dateoftest3(){
    var testday = prompt("What is today's day?")
    while(testday==="" || isNaN(testday)){
        if(testday===""){
            testday = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is today's day?")
        }else if(isNaN(testday)){
            testday = prompt("ONLY USE NUMBERS!!!\n What is today's day?")
        }
    }return testday
}
var userdayoftest = dateoftest3()

function dateofbirth(){
    var birthyear = prompt("What is your birth year?")
    while(birthyear==="" || isNaN(birthyear)){
        if(birthyear===""){
            birthyear = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is your birth year?")
        }else if(isNaN(birthyear)){
            birthyear = prompt("ONLY USE NUMBERS!!!\n What is your birth year?")
        }
    }return birthyear
}
var useryearofbirth = dateofbirth()

function dateofbirth2(){
    var birthmonth = prompt("What is your birth month?")
    while(birthmonth==="" || isNaN(birthmonth)){
        if(birthmonth===""){
            birthmonth = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is your birth month?")
        }else if(isNaN(birthmonth)){
            birthmonth = prompt("ONLY USE NUMBERS!!!\n What is your birth month?")
        }
    }return birthmonth
}
var usermonthofbirth = dateofbirth2()

function dateofbirth3(){
    var birthday = prompt("What is your birth day?")
    while(birthday==="" || isNaN(birthday)){
        if(birthday===""){
            birthday = prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is your birth day?")
        }else if(isNaN(birthday)){
            birthday = prompt("ONLY USE NUMBERS!!!\n What is your birth day?")
        }
    }return birthday
}
var userdayofbirth = dateofbirth3()

function dayfix(){
    var fix = usermonthoftest - 1
    return fix
}

function dayfix1(){
    var fix2 = userdayoftest +++30
    return fix2
}

daytotalfix()

function daytotalfix(){
    if(userdayoftest < userdayofbirth){
        dayfix()
        dayfix1()
        var totalageyear = useryearoftest - useryearofbirth
        var chronologicalagedayfix = "Your Chronological Age is:\n" +totalageyear + " " + "years," + " " +dayfix() + " " + "months, and" + " " +dayfix1() + " " + "days old!"
        alert(chronologicalagedayfix)
        console.log("Today's year:" + " " +useryearoftest)
        console.log("Today's month:" + " " +usermonthoftest)
        console.log("Today's day:" + " " +userdayoftest)
        console.log("Your birth year:" + " " +useryearofbirth)
        console.log("Your birth month:" + " " +usermonthofbirth)
        console.log("Your birth day:" + " " +userdayofbirth)
        console.log(chronologicalagedayfix)
        return dayfix()
        return dayfix1()
    }else{
        var totalageday = userdayoftest - userdayofbirth
        var totalagemonth = usermonthoftest - usermonthofbirth
        var totalageyear = useryearoftest - useryearofbirth
        var chronologicalage = "Your Chronological Age is:\n" +totalageyear + " " + "years," + " " +totalagemonth + " " + "months, and" + " " +totalageday + " " + "days old!"
        alert(chronologicalage)
        console.log("Today's year:" + " " +useryearoftest)
        console.log("Today's month:" + " " +usermonthoftest)
        console.log("Today's day:" + " " +userdayoftest)
        console.log("Your birth year:" + " " +useryearofbirth)
        console.log("Your birth month:" + " " +usermonthofbirth)
        console.log("Your birth day:" + " " +userdayofbirth)
        console.log(chronologicalage)
    }
}

function monthfix(){
    var fix3 = useryearoftest - 1
    return fix3
}

function monthfix1(){
    var fix4 = usermonthoftest +++12
    return fix4
}

function monthtotalfix1(){
    if(usermonthoftest < usermonthofbirth){
        monthfix()
        monthfix1()
    }
}

var totalageday = userdayoftest - userdayofbirth
var totalagemonth = usermonthoftest - usermonthofbirth
var totalageyear = useryearoftest - useryearofbirth
var chronologicalage = "Your Chronological Age is:\n" +totalageyear + " " + "years," + " " +totalagemonth + " " + "months, and" + " " +totalageday + " " + "days old!"
var chronologicalagedayfix = "Your Chronological Age is:\n" +totalageyear + " " + "years," + " " +dayfix() + " " + "months, and" + " " +dayfix1() + " " + "days old!"


//alert(chronologicalage)

//console.log("Today's year:" + " " +useryearoftest)
//console.log("Today's month:" + " " +usermonthoftest)
//console.log("Today's day:" + " " +userdayoftest)
//console.log("Your birth year:" + " " +useryearofbirth)
//console.log("Your birth month:" + " " +usermonthofbirth)
//console.log("Your birth day:" + " " +userdayofbirth)
//console.log(chronologicalage)