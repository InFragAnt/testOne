function getDivisors(a){
    let arr=[]; for(let i=1; i<=a; i++) {
        if(a%i==0){
            arr.push(i);
        } 
    } 
    return arr; 
}

console.log(getDivisors(24));