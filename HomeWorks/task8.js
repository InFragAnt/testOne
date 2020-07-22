var arr=[5,1,2,3,2,4,1,2];
var sum=0, count=0;

for(var i=0; i<arr.length; i++){
    if (sum<=10){
        sum=sum+arr[i];
        count=count+1;
    }
}

console.log(count);