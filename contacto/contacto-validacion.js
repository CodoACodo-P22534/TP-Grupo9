let formulario = document.querySelector(".formulario"); 

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // puede contener acentos y Mayúsculas, entre 3 y 40 letras
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // puede contener acentos y Mayúsculas, entre 1 y 40 letras
    telefono: /^\d{7,20}$/, //numeros de telefono entre 7 y 20 dígitos
    correo: /^[\w\d.-]*@{1}[a-z]+\.{1}[a-z]+$/, //el correo puede contener caracteres especiales 
    mensaje: /^.+$/ // el mensaje puede contener cualquier caracter  
}

let booleanos = {
    nombreb: false,
    apellidob: false,
    telefonob: false,
    correob: false, 
    mensajeb: false
}

function validarCampo(expresion, valorCampo) {
    if(expresion.test(valorCampo)){
        return true; 
    }
    else {
        return false;
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // verifico que cada campo sea válido

    booleanos['nombreb'] = validarCampo(expresiones['nombre'], formulario.nombre.value);
    // console.log(booleanos['nombreb']);
    booleanos['apellidob'] = validarCampo(expresiones['apellido'], formulario.apellido.value);
    // console.log(booleanos['apellidob']);
    booleanos['correob'] = validarCampo(expresiones['correo'], document.getElementById('correo').value);
    // console.log(booleanos['correob']);
    booleanos['telefonob'] = validarCampo(expresiones['telefono'], formulario.telefono.value);
    // console.log(booleanos['telefonob']);
    booleanos['mensajeb'] = validarCampo(expresiones['mensaje'], document.getElementById('mensaje').value);
    // console.log(booleanos['mensajeb']);

    if(booleanos.nombreb && booleanos.apellidob && booleanos.correob && booleanos.telefonob && booleanos.mensajeb){    
        alert("Su formulario a sido enviado correctamente");
        formulario.reset();
    }
    else {
        alert('Error en el envío del formulario');
        if(!booleanos.nombreb){
            alert("El nombre no puede contener números ni caracteres especiales");
        }        
        else if(!booleanos.apellidob){
            alert("El apellido no puede contener números ni caracteres especiales");
        }
        else if(!booleanos.correob){
            alert("La dirección de correo ingresada no es válida");
        }        
        else if(!booleanos.telefonob){
            alert("El teléfono ingresado no es válido");
        }  
        else if(!booleanos.mensajeb){
            alert("La caja de mensajes no puede estar vacía");
        }  
    }
});