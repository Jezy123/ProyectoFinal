window.onload=function(){

    var mutlCreditos=document.getElementsByClassName("multiplicaCreditos");

    mutlCreditos[0].addEventListener("click",function(){
        document.getElementsByClassName("inputCreditoBombas")[0].value=mutlCreditos[0].value * document.getElementsByClassName("inputCreditoBombas")[0].value
    })

    mutlCreditos[1].addEventListener("click",function(){ 
        document.getElementsByClassName("inputCreditoBombas")[0].value=mutlCreditos[1].value * document.getElementsByClassName("inputCreditoBombas")[0].value
    })

    
    var masBombas=document.getElementsByClassName("masBombas");

    for( let i=0;i<5;i++){
        masBombas[i].addEventListener("click",function(){
            document.getElementsByClassName("inputBombas")[0].value= masBombas[i].value;
        })
    }
}