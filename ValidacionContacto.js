function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').innerText.trim();
    var apellido = document.getElementById('apellido').innerText.trim();
     var correo = document.getElementById('correo').innerText.trim();
    var telefono = document.getElementById('telefono').innerText.trim();
   
    // Verifica que el nombre no esté vacío y solo contenga letras
       
    if (nombre === '' || !/^[a-zA-Z\s]+$/.test(nombre)) {
        mostrarMensajeValidacion("mensajeNombre", "El nombre no puede estar vacío y debe contener solo letras.");
        return false;
    }else {
        ocultarMensajeValidacion('mensajeNombre');
    }

    // Verificar que el apellido no esté vacío y solo contenga letras
    if (apellido === '' || !/^[a-zA-Z\s]+$/.test(apellido)) {
        mostrarMensajeValidacion("mensajeApellido", "El apellido no puede estar vacío y debe contener solo letras.");
        return false;
    }else {
        ocultarMensajeValidacion('mensajeApellido');
    }


     // Verifica que el correo no este vacío y contenga al menos un "@" o un "."
     if (correo === '' || correo.indexOf('@') === -1 || correo.indexOf('.') === -1) {
        mostrarMensajeValidacion("mensajeCorreo", "El correo no es valido.");
        return false;
    }else {
        ocultarMensajeValidacion('mensajeCorreo');
    }

     // Verifica si el teléfono está vacío o si contiene letras
     if (telefono === '' || /[a-zA-Z]/.test(telefono)) {
        mostrarMensajeValidacion("mensajeTelefono", "El telefono no es valido.");
        return false;
    }else {
        ocultarMensajeValidacion('mensajeTelefono');
    }

    // Si la validación es exitosa, puedes enviar el formulario
    return true; 
}


function mostrarMensajeValidacion(idMensaje, mensaje) {
    var mensajeMostrar = document.getElementById(idMensaje);
    mensajeMostrar.innerHTML = mensaje;
}


function ocultarMensajeValidacion(idMensaje) {
    var elementoMensaje = document.getElementById(idMensaje);
    elementoMensaje.innerHTML = '';
}