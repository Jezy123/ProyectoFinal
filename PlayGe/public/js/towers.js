var x=29
var indexBomba=0
probabilidad=1
multiplicador=1
var creditos=0
$(document).ready(function(){
    $(".boton-torre").prop('disabled', true);

    $(".empieza-torres  ").on("click",function(){
        creditos= $(".inputCreditoTowers").val()
  
        if($(this).html()=="Retirar dinero"){
            $(this).css('background-color', 'yellow');
            $(this).html("Empezar juego")
            $(".boton-torre").prop('disabled', true);
        
            x=29
            $(".boton-torre").css('background-image','url("")')
        }else{
            $(this).css('background-color', '#a6ff00');
            $(this).html("Retirar dinero");
            enable(x)
            indexBomba= Math.floor(Math.random() * 3);
        }
    })

    $(".boton-torre").on("click",function(){
        
        if(x>0 && ($(".boton-torre").index(this)%3) != indexBomba){ //fin del juego
            $(".resultado-towers").html(creditos+" X "+Math.round(multiplicador * 100) / 100 +" = "+Math.round((creditos*multiplicador)*100)/100)
            x=x-3
            disabled()
            enable(x)
            indexBomba= Math.floor(Math.random() * 3);
            probabilidad=probabilidad * (2/3)
            multiplicador=1/probabilidad
            $(this).css('background-image', 'url("./css/imgs/coin.svg")');
        }else{

            $(this).css('background-image', 'url("./css/imgs/skull.png")');
            disabled(x)
            $(".resultado-towers").html(creditos+" X 0 = 0")
        }
        console.log(indexBomba)


    })

    function enable(x){
        $(".boton-torre").eq(x).prop('disabled', false);
        $(".boton-torre").eq(x-1).prop('disabled', false);
        $(".boton-torre").eq(x-2).prop('disabled', false);
    
    }
    function disabled(){
        $(".boton-torre").prop('disabled', true);
    }

})


