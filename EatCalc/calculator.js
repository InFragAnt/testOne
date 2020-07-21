document.getElementById("form").addEventListener('submit', (e)=>{
    e.preventDefault();
    var size = document.querySelector('input[name="radio"]:checked').value;
    var typeOfAdd = document.querySelector('input[name="radio2"]:checked').value;
    wok.calculate(size, typeOfAdd);
})

var wok = {
    prise:0,
    calories:0, 

    smallBox:  {
        prise:300,
        calories:250,     
    },

    largeBox: {
        prise:380,
        calories:400,
       
    },

    megaBox:{
        prise:430,
        calories:530,
    },


    pig : {
        prise:60,
        calories: 100 
    },

    beef : {
        prise:80,
        calories:150 
    },
    chiken: {
        prise:40,
        calories:80 
    },
    marbleBeef :{
        prise:120,
        calories:260
    },
    rabbit :{
        prise:70,
        calories:90 
    },


    rusks: {
        prise:15,
        calories:10
    },

    sauce: {
        prise:20,
        calories:5
    },

    sesame: {
        prise:20,
        calories:5
    },
    
    calculate :function(size, typeOfAdd){

        this.prise=0;
        this.calories =0;
        
        this.prise=wok[size].prise + wok[typeOfAdd].prise;
        this.calories =wok[size].calories + wok[typeOfAdd].calories;
       
       

        var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
        console.log(checkboxArr);
        for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].value;
            this.prise+= wok[type].prise;
            this.calories+= wok[type].calories;    
        }

        wok.result(this.prise,this.calories);
        
    },

    result: function(prise,calories){
        document.getElementById("pay1").innerHTML = prise;
        document.getElementById("pay2").innerHTML = calories;
    },
    reset_all: function(){
        this.price=0;
        this.calories=0;
    }
}
