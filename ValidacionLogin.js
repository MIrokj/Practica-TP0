
// Valores de usuario y contraseña 
var usua = "ramiro";
var cont = "ramiro";
function validarFormulario() {
    var usuarioEntrada = document.getElementById("usuario");
    var contrasenaEntrada = document.getElementById("contrasena");
    var usuarioError = document.getElementById("usuarioError");
    var contrasenaError = document.getElementById("contrasenaError");

    usuarioError.innerHTML = ""; // Limpiar el mensaje de error
    contrasenaError.innerHTML = "";

    // Obtiene los valores del usuario y la contraseña
    var usuario = usuarioEntrada.value.trim();
    var contrasena = contrasenaEntrada.value.trim();

    // Realiza la validación
    if (usuario === "" || contrasena === "") {
        if (usuario === "") {
            usuarioEntrada.classList.add("error");
            usuarioError.innerHTML = "Campo obligatorio";
            setTimeout(function() {
                usuarioEntrada.classList.remove("error");
                usuarioError.innerHTML = "";
            }, 5000);
        }

        if (contrasena === "") {
            contrasenaEntrada.classList.add("error");
            contrasenaError.innerHTML = "Campo obligatorio";
            setTimeout(function() {
                contrasenaE.classList.remove("error");
                contrasenaError.innerHTML = "";
            }, 5000);
        }
    } else {
        
            if (usuario === usua && contrasena === cont) {
                alert("Inicio de sesión exitoso");
            } else {
                alert("Error de inicio de sesión");
            }
    }

    
}