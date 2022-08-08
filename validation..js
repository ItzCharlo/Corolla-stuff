function myFunction(){
    let x = document.getElementById("numb").value;
    let text;
    if (x < 1 || x > 10) {
        text = "Not valid";
    }
    else if(x < 3)
    {
        text = "DU TAGER FUCKING FEJL DIN SÆK"
    }else{
        text = "tak for dit svar";
    }
    
    document.getElementById("demo").innerHTML = text;
}