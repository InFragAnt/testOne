var arr=[];

function arrayFill(element,counter){
    for (var i=0; i<counter; i++){
        arr.push(element);
    }
}


arrayFill('x',5);

console.log(arr);