var str = "salamaleikum!!";
 
str1 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
 
console.log(str1);

function tUC(str2){
    return str2.charAt(0).toUpperCase()+str2.substring(1);
}
console.log(tUC(str));