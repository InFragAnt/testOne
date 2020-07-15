var str = 'Кошка неожиданно укусила за пятку!!!';
var element = 'укусила';
var arr = str.split(' ');

function inArray(Find, arr) {
    var res;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == Find) {
            res = true;
        }
    }

    if(res == undefined) {
        res = false;
    }
    return res;
}

console.log(inArray(element, arr));