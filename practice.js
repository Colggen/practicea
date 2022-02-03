document.getElementById("name").innerHTML="Maxim Lukyanchuk CS-2113S ";

var currentdate = new Date(); 
var dayOfWeek = "";
if(currentdate.getDay() == 0){
    dayOfWeek = "Sunday";
}
if(currentdate.getDay() == 1){
    dayOfWeek = "Monday";
}
if(currentdate.getDay() == 2){
    dayOfWeek = "Tusday";
}
if(currentdate.getDay() == 3){
    dayOfWeek = "Wednesday";
}
if(currentdate.getDay() == 4){
    dayOfWeek = "Thursday";
}
if(currentdate.getDay() == 5){
    dayOfWeek = "Friday";
}
if(currentdate.getDay() == 6){
    dayOfWeek = "Saturday";
}
document.getElementById("date").innerHTML = "Year:"+ currentdate.getFullYear();
document.getElementById("date1").innerHTML = "Today is: "+ dayOfWeek;
document.getElementById("date2").innerHTML = "Date: "+ currentdate.getDate();
document.getElementById("date3").innerHTML = "Month: "+ (currentdate.getMonth()+1);
document.getElementById("date4").innerHTML = "Current time is: "+ currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();

var date1 = new Date("02/03/2022");
var date2 = new Date("06/27/2024");
  
var Difference_In_Days = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
  
document.getElementById("leftdays").innerHTML = Difference_In_Days + " days left until the freedom";

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}