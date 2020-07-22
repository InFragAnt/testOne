var str1='https://mail.google.com/mail/';
var str2='http://mail.google.com/mail/';

function check(str){
    if(str.indexOf('https://')==0){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

check(str1);
check(str2);
