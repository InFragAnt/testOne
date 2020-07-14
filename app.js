/*var myCounter = sequence();
var myCounter2 = sequence2();
function sequence(start = 10, increment = 2){
    return function(){
        var sumToReturn = start;
        sumToReturn+=increment;
        start=sumToReturn;
        return sumToReturn;
    }
}

function sequence2(start = 11, increment = 2){
   let starnNum = start;

    return function(){
        var whatToreturn = starnNum;
        starnNum += increment;
        return whatToreturn;
    }
}

console.log(myCounter2()); 
console.log(myCounter2()); */
var myCounter = sequence();
function sequence(start = 1, increment = 5){
    return function(){
        var sumToReturn = start;
        sumToReturn+=increment;
        start=sumToReturn;
        return sumToReturn;
    }
}

function mkArr(fn, iter) {
    var massive = [];
    for (var i = 0; i < iter; i++) {
        massive.push(myCounter());
    }
    console.log(massive)
}

console.log(myCounter(fn(), 3));


/*
var nabe = "Name";

if(true){

}
function doIt(){
    name = 'John';
    var surname = 'doe';
    console.log(`Hello ${name} ` + surname)
}

console.log(name);


doIt();

*/
