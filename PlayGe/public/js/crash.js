var miNumero=100;
var multiplicador=0;
var timeStep=100;
var rocketStats=0;
var angulo=0;
var animacion=0;
var tiempoMultiplicador=0;


$(document).ready(function(){


    $(".mantener-crash").prop('disabled', true);

    $(".empieza-crash").on("click",function(){
        $(".empieza-crash").prop('disabled', true);
        $(".mantener-crash").prop('disabled', false);

        $.getJSON( `/lose/${$('.userinfo').data("id")}/${ $(".inputCredito").val()*100}`,function(data){
            $(".creditosUsuario").html(data.toFixed(2))
        })
        $(".inputCredito").prop('disabled', false);

        multiplicador=0
        tiempoMultiplicador=0
        miNumero=100
        timeAnimation=100

    })

    $(".mantener-crash").on("click",function(){
        console.log("click")
    })

    $(".mantener-crash").on("mouseup",function(){
        $(".mantener-crash").prop('disabled', true);
        $(".mantener-crash").prop('display', false);
        console.log("arriba")
        multiplicador=miNumero/100;

        $(".muestraDelResultado").html( $(".inputCredito").val()+" X " +multiplicador)
        var creditosSumar=($(".inputCredito").val())*multiplicador*100

        $.getJSON( `/win/${$('.userinfo').data("id")}/${creditosSumar}`,function(data){
            $(".creditosUsuario").html(data.toFixed(2))
        })
        
    })

    $(".mantener-crash").on("mousedown",async function(){
        console.log("abajo")
        tiempoMultiplicador=Math.floor((Math.random() * (10001)) + 0)+100
        tiempoMultiplicador= tiempoMultiplicador * tiempoMultiplicador /100000
        tiempoMultiplicador=Math.floor(tiempoMultiplicador)
        if(tiempoMultiplicador<100){
            tiempoMultiplicador=100;
        }
        console.log(tiempoMultiplicador)

       
        function steps(){ 
            
            var myInterval= setInterval(function (){

                $(".numeroMultiplicado").html(miNumero/100)

                if(miNumero==tiempoMultiplicador){
                    clearInterval(myInterval);
                    $('.rocket-img').stop(true,false)
                    $(".inputCredito").prop('disabled', true);
                    $(".mantener-crash").prop('disabled', true);
                    $(".mantener-crash").prop('display', false);
                    $(".empieza-crash").prop('disabled', false);
                }

                miNumero= miNumero +1
                if(miNumero==150 || miNumero==200 || miNumero==250 || miNumero==300 || miNumero==350 || miNumero==400 || miNumero==450 || miNumero==500 || miNumero==550 ){
                 
                    timeAnimation = timeAnimation -10;
                    clearInterval(myInterval);
                    steps();
                    console.log(timeAnimation)
                    return false;
                    
                }
                
                }, timeAnimation)
                
        }
        steps();
        mover()


    })

    async function mover(){

        if($(".recuadroMovimiento-cohete").width() < $(".recuadroMovimiento-cohete").height()){
            var radio=  $(".recuadroMovimiento-cohete").width()/2- $(".rocket-img").width()/2
        }else{
            var radio=  $(".recuadroMovimiento-cohete").height()/2- $(".rocket-img").width()/2
        }

       
        
        $(".rocket-img").animate({
            left: (Math.cos(angulo))*radio + $(".recuadroMovimiento-cohete").width()/2 - $(".rocket-img").width()/2 ,
            top:  (Math.sin(angulo))*radio+ radio, 
            
        },timeAnimation-10,'linear')

        angulo=angulo+Math.PI/100;
        var anguloGrados=(angulo * (180/Math.PI)+180) % 360

        $(".rocket-img").css({
            "-webkit-transform": "rotate("+ anguloGrados+"deg)",
            "-moz-transform":  "rotate("+ anguloGrados+"deg)",
            "transform":  "rotate("+ anguloGrados+"deg)", /* For modern browsers(CSS3)  */
        });

        if(animacion<5 ){
            $('.rocket-img').attr('src', "./css/imgs/rocket1.png");
        }else{
            $(".rocket-img").attr('src', "./css/imgs/rocket2.png");
        }
        animacion++;
        if(animacion>10){
            animacion=0;
        }

        if(tiempoMultiplicador !== miNumero - 1){
            var myTime=setTimeout(mover,timeAnimation+10)
        }
    


    }

})