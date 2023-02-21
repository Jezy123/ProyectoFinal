var indicesDeLasBombas=[];
var nBombasDisabled=0;
var numeroDeBombas=0;
var multiplicador=1;
var probabilidad=1;
var numeroDeCasillas=25;
var creditos=0;

$(document).ready(function(){
    $(".boton-bomba").prop('disabled', true);

    $(".empieza-bombas").on("click",function(){
      

        if($(this).html()=="Retirar dinero"){

            $(this).css('background-color', 'yellow');
            $(this).html("Empezar juego")
            $(".boton-bomba").prop('disabled', true);
            $(".boton-bomba").css('background-image', 'url("./css/imgs/logowebb.svg")');
            indicesDeLasBombas=[];
            numeroDeCasillas=25;
            multiplicador=1;
            probabilidad=1;
            nBombasDisabled=0;

            $(".inputCreditoBombas").prop('disabled', false);
            $(".inputBombas").prop('disabled', false);
            $(".resultado-bombas").html("")
            $(".multiplicaCreditos").prop('disabled',false)
            $(".masBombas").prop('disabled',false)


        }else{
            $(".boton-bomba").prop('disabled', false);
            $(this).css('background-color', '#a6ff00');
            $(this).html("Retirar dinero");
            numeroDeBombas=$(".inputBombas").val()
            $(".inputBombas").prop('disabled', true);
            creditos=$(".inputCreditoBombas").val();
            $(".inputCreditoBombas").prop('disabled', true);

           
                $(".boton-bomba").css('background-image', 'url("./css/imgs/logowebb.svg")');
                $(".boton-bomba").prop('disabled', false);
               $(".multiplicaCreditos").prop('disabled',true)
               $(".masBombas").prop('disabled',true)
            

            for(var i=0; i<numeroDeBombas;i++){
                var numero= Math.floor((Math.random() * (24 - 0 + 1)) + 0)
                if(jQuery.inArray(numero, indicesDeLasBombas) !== -1){
                    i--;
                }else {
                    indicesDeLasBombas.push(numero)
                    
                }
            }
            console.log(indicesDeLasBombas)
            
        }
    })


    $(".boton-bomba").on("click",function(){
       
        if(jQuery.inArray($(".boton-bomba").index(this), indicesDeLasBombas) !== -1){
          
            $(".boton-bomba").each(function(){
                    
                if(jQuery.inArray($(".boton-bomba").index(this), indicesDeLasBombas) !== -1){
                    $(this).css('background-image', 'url("./css/imgs/skull.png")');
                }else{
                    $(this).css('background-image', 'url("./css/imgs/coin.svg")');
                }
            })

            $(".boton-bomba").prop('disabled', true);
            $(".resultado-bombas").html(creditos+" X "+ "0  =  0")

            
        }else{
    
            $(this).css('background-image', 'url("./css/imgs/coin.svg")');
            $(this).prop('disabled', true);
            probabilidad= probabilidad * ((numeroDeCasillas-numeroDeBombas)/numeroDeCasillas); 
            probabilidad=probabilidad;
            multiplicador=1/(0.01+probabilidad)
            numeroDeCasillas--;
            $(".resultado-bombas").html(creditos+" X "+Math.round(multiplicador * 100) / 100 +" = "+Math.round((creditos*multiplicador)*100)/100)
        }
    })


})



   