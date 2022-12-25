//thời gian đếm ngược
function updateTimer() {
    future = Date.parse("Dec 25, 2022 18:00:00"); //đếm ngược đếm ngày 25 tháng 12 2022
 now = new Date();
 diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 document.getElementById("timer").innerHTML =
  '<div>' + d + '<span>Days</span></div>' +
  '<div>' + h + '<span>Hours</span></div>' +
  '<div>' + m + '<span>Minutes</span></div>' +
  '<div>' + s + '<span>Seconds</span></div>';
}

setInterval('updateTimer()', 1000);

// kiểm tra form

const loginform = document.getElementById("form-register");
const userNameRight = "admin";
const numberRight = "000010000";
const emailRight = "AbcdXyz@gmail.com";

loginform.addEventListener("submit", function(){
    const username = document.getElementById("username").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    checkUser(username, number, email)
});

function checkUser(username, number, email){
    if (username != userNameRight || number != numberRight || email != emailRight){
        alert("please try again !!");
    } else{
        alert("successful book !!")
    }
}
