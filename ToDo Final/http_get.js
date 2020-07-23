var input = document.querySelector("input[type='text']");
export function getRequest(){
    var request = new XMLHttpRequest();
    var tempFeelsLike;
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=520555&appid=292045967d602692ad4e00c26e42256b', false);

    request.send({
        "id":"520555", // id города
        "appid":"292045967d602692ad4e00c26e42256b", //ключ для погоды
    });

    if (request.status != 200) {
    alert( request.status + ': ' + request.statusText );
    } else {
        console.log(request.responseText);
        var requestInd=request.responseText.indexOf("feels_like");
        console.log(requestInd);
        tempFeelsLike=request.responseText.slice(requestInd + 12 , requestInd + 15) -270;
        console.log(tempFeelsLike); // responseText -- текст ответа.
        input.placeholder="Планируй дела правильно, на улице " + tempFeelsLike + " градусов";
    }
    
}
