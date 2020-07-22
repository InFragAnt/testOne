var str = "var_text_hello";
var words = "";
var res = "";
 
 
words=str.split("_");
 
//console.log(words);

for (var word in words) {
    b = words[word].charAt(0).toUpperCase() + words[word].slice(1);
    res = res + b;
};
console.log(res);