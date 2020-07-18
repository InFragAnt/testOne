var input = document.querySelector("input[type='text']");
var lists = document.querySelectorAll("li");



var tipsBtn = document.querySelector(".tipBtn");

var closeBtn = document.querySelector(".closebtn");
var liUn = document.querySelector(".uncheked");
/*var liCh = document.querySelector(".cheked"); */


var overlay = document.getElementById("overlay");
var trash = document.getElementById("trash");

tipsBtn.addEventListener("click", function(){
    overlay.style.height = '100%';
});

closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.height = "0";
});

trash.addEventListener("click", function(){
    liUn.classList.remove("unchecked");
    liUn.classList.add("checked");
});

/*trash.addEventListener("click", function(){
    liCh.classList.remove("checked");
    liCh.classList.add("unchecked");
});*/