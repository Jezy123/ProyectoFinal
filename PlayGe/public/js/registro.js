window.onload=function(){


    var registroContraseña=document.getElementById('registration_form_plainPassword');
    registroContraseña.addEventListener('keyup',seguridad);


}

function seguridad(){

    var input=this.value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var seguridad=0;
    if(input.match(lowerCaseLetters)){
        seguridad++;
    }
    if(input.match(upperCaseLetters)){
        seguridad++;
    }
    if(input.match(numbers)){
        seguridad++;
    }
    var txt=document.getElementById('seguridad');
    if(seguridad==0 || seguridad==1){
        txt.innerHTML="Muy insegura";
        txt.style.color="red";
    }else if(seguridad==2){
        txt.innerHTML="Poco segura";
        txt.style.color="orange";
    }else if(seguridad==3){
        txt.innerHTML="Segura";
        txt.style.color="green";
    }


}

