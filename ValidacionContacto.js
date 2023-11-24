/* Validacion de datos*/
function validarFormulario() {
    var nombre = document.getElementById('nombre').innerText.trim();
    var apellido = document.getElementById('apellido').innerText.trim();
    var email = document.getElementById('email').innerText.trim();
    var telefono = document.getElementById('telefono').innerText.trim();

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

    if (!isValidEmail(email)) {
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
