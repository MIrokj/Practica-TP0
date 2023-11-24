function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').innerText.trim();
    var apellido = document.getElementById('apellido').innerText.trim();
    var edad = document.getElementById('edad').innerText.trim();
    var correo = document.getElementById('correo').innerText.trim();
    var telefono = document.getElementById('telefono').innerText.trim();
    var barrio = document.getElementById('barrio').innerText.trim();
    var localidad = document.getElementById('localidad').innerText.trim();

    if (!isValidText(nombre)) {
        mostrarMensajeValidacion('mensajeNombre', 'Por favor, ingresa un nombre válido.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeNombre');
    }

    if (!isValidText(apellido)) {
        mostrarMensajeValidacion('mensajeApellido', 'Por favor, ingresa un apellido válido.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeApellido');
    }

    if (!isValidText(edad)) {
        mostrarMensajeValidacion('mensajeEdad', 'Por favor, ingresa una edad válida.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeEdad');
    }

    if (!isValidEmail(correo)) {
        mostrarMensajeValidacion('mensajeEmail', 'Por favor, ingresa un correo electrónico válido.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeEmail');
    }

    if (!isValidPhone(telefono)) {
        mostrarMensajeValidacion('mensajeTelefono', 'Por favor, ingresa un número de teléfono válido.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeTelefono');
    }

    if (!isValidText(barrio)) {
        mostrarMensajeValidacion('mensajeBarrio', 'Por favor, ingresa un barrio válido.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeBarrio');
    }

    if (!isValidText(localidad)) {
        mostrarMensajeValidacion('mensajeLocalidad', 'Por favor, ingresa una localidad válida.');
        return false;
    } else {
        ocultarMensajeValidacion('mensajeLocalidad');
    }

    // Devolver true para enviar el formulario
    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidText(text) {
    return /^[a-zA-Z\s]+$/.test(text);
}

function isValidPhone(phone) {
    return /^\d+$/.test(phone);
}

function mostrarMensajeValidacion(idMensaje, mensaje) {
    var elementoMensaje = document.getElementById(idMensaje);
    elementoMensaje.innerHTML = mensaje;
}

function ocultarMensajeValidacion(idMensaje) {
    var elementoMensaje = document.getElementById(idMensaje);
    elementoMensaje.innerHTML = '';
}