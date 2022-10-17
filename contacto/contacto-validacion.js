let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let telefono = document.getElementById('telefono');
let mensaje = document.getElementById('mensaje');

//el return 0 es para que no se envíe el formulario por defecto

function validarFormulario() {
    let errores = new Array();

    if((nombre == null) || (nombre == ' ') || (isNaN(nombre) == false)) {
        errores.push('el campo nombres es incorrecto');    
    }

    if((apellido == null) || (apellido == ' ') || (isNaN(apellido) == false)) {
        errores.push(' el campo apellidos es incorrecto');
    }
    
    if((telefono == null) || (telefono == ' ') || (isNaN(telefono) == true)) {
        errores.push(' el campo telefono es incorrecto');
    }
    
    if((mensaje == null) || (mensaje == ' ') || (isNaN(mensaje) == false)) {
        errores.push(' el campo mensaje es incorrecto');
    }

    alert(errores);

    return false;
}
