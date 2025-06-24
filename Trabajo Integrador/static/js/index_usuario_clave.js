document.getElementById("formulario").addEventListener("submit", function (e) {
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!usuarioValido || !passwordValida) {
        e.preventDefault();
    }else {
        e.preventDefault();
        window.location.href = '/crear_usuario_clave';
    }
});

function validarUsuario() {
    const usuario = document.getElementById("usuario").value.trim();
    const error = document.getElementById("error_usuario");

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (usuario === "") {
        error.textContent = "Debe ingresar su nombre.";
        return false;
    } else if (usuario.length < 2 || !regex.test(usuario)) {
        error.textContent = "Por favor, ingrese un nombre válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarPassword() {
    const contra = document.getElementById("password").value.trim();
    const error = document.getElementById("error_password");

    if (contra === "") {
        error.textContent = "Debe ingresar una contraseña.";
        return false;
    } else if (contra.length < 6) {
        error.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("usuario").addEventListener('input', validarUsuario);
document.getElementById("usuario").addEventListener('blur', validarUsuario);

document.getElementById("password").addEventListener('input', validarPassword);
document.getElementById("password").addEventListener('blur', validarPassword);

document.getElementById("continuar").addEventListener("click", function() {
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (usuarioValido && passwordValida) {
        document.getElementById("formulario").dispatchEvent(new Event('submit', { cancelable: true }));
    } else {
    }
});
