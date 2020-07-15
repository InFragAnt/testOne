var a = '53571';

function lessNine (a) {
    var arr=a.split('');
    var sum=0;
    for(var i=0; i < arr.length; i++){
        sum += +arr[i];
    }
    if (sum > 9){
        lessNine(sum+'');
    }else{
        console.log(sum);
    }
}

lessNine(a);