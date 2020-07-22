var arr=[5,1,2,3,2,4,1,2];

for(var i=0; i<(arr.length/2); i++){
    j=arr.length-i-1;
    var a=arr[j];
    arr[j]=arr[i];
    arr[i]=a;
}

console.log(arr);