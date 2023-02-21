window.onload=function(){

    setInterval(conteo,1000)
}

var fondo=0;


function conteo(){
    
    var text=document.getElementById('conteoRegresivo');
    var tiempoFalta="texto";
    var fecha= new Date();
    var dia= fecha.getDate();
    var hora=fecha.getHours();
    var minutos=fecha.getMinutes();
    var segundos=fecha.getSeconds();
    var diaObjetivo=20;
    var horaObjetivo=14;
    var minutosObjetivos=44;
    var segundosObjetivo=30;

 
    //Calcula los segudos restantes
    if(segundosObjetivo-segundos<0){
        tiempoFalta=60+segundosObjetivo-segundos+" ";
        minutosObjetivos--;
    }else{
        if(segundosObjetivo-segundos<10){
            tiempoFalta="0"+(segundosObjetivo-segundos).toString()+"";
        }else{
            tiempoFalta=segundosObjetivo-segundos+"";
        }
    }
    //Calcula los minutos restantes
    if(minutosObjetivos-minutos<0){
        tiempoFalta=60+minutosObjetivos-minutos+":"+tiempoFalta;
        horaObjetivo--;
    }else{
        if(minutosObjetivos-minutos<10){
            tiempoFalta="0"+(minutosObjetivos-minutos).toString()+" " + tiempoFalta;
        }else{
            tiempoFalta=minutosObjetivos-minutos+" " +tiempoFalta;
        }
    }
    //Calcula las horas restantes
    if(horaObjetivo-hora<0){
        tiempoFalta=24+horaObjetivo-hora+":"+tiempoFalta;
        diaObjetivo--;
    }else{
        if(horaObjetivo-hora<10){
            tiempoFalta="0"+(horaObjetivo-hora).toString()+" " + tiempoFalta;
        }else{
            tiempoFalta=horaObjetivo-hora+" " +tiempoFalta;
        }
    }
    //Calcula los dias restantes
    if(diaObjetivo-dia<0){
        tiempoFalta=30+diaObjetivo-dia+" dias "+tiempoFalta;
        horaObjetivo--;
    }else{
        tiempoFalta=diaObjetivo-dia+" dias "+tiempoFalta;
    }
    text.innerHTML=tiempoFalta
}