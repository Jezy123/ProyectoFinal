window.onload=function(){

    var formulario=document.getElementById('formularioRegistro');
    var registroContraseña=document.getElementById('registroContrasena');
    registroContraseña.addEventListener('keyup',seguridad);
    formulario.addEventListener('submit',comprobar);
    document.getElementById('registroNombre').focus();

    document.addEventListener("contextmenu",cancelar);
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



function comprobar(event){
    var txt=document.getElementById('seguridad').innerHTML;
    if (txt=='Segura'){
        var registroNombre=document.getElementById('registroNombre');
        var registroApellido=document.getElementById('registroEmail');
        var registroTefono=document.getElementById('registroTelefono');

        var contenido="";

        if(registroNombre.value=='' || registroNombre.value==null){
        contenido = "Debes introducir algun nombre.\n"
        }
        
        if(registroEmail.value=='' || registroEmail.value==null){
            contenido =contenido + "Debes introducir algun apellido.\n";
        }
        if(!(/^\d{9}$/.test(registroTefono.value))){
            contenido= contenido + "Debes intrducir un numero de telefono valido.\n"
        }
        
        if(!(contenido=="")){
            alert(contenido)
            event.preventDefault()
        }
    }else{
        alert('La contraseña no es segura')
        event.preventDefault()
    }



}

function cancelar(event){
    event.preventDefault();
}
