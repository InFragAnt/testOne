var input = document.querySelector("input[type='text']");
var lists = document.querySelectorAll("li");



var tipsBtn = document.querySelector(".tipBtn");

var closeBtn = document.querySelector(".closebtn");

var overlay = document.getElementById("overlay");

tipsBtn.addEventListener("click", function(){
    overlay.style.height = '100%';
});

closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.height = "0";
});