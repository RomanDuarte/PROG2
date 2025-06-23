document.getElementById("formulario").addEventListener("submit", function (e) {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const generoValido = validarGenero();
    const emailValido = validarEmail();
    const contraValida = validarContra();

    if (!nombreValido || !apellidoValido || !generoValido || !emailValido || !contraValida) {
        e.preventDefault();
        alert("Por favor completá correctamente todos los campos.");
    }


    















});


function validarNombre() {
    const nombre = document.getElementById("primer_nombre").value.trim();
    const error = document.getElementById("error_nombre");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (nombre === "") {
        error.textContent = "Debe ingresar su nombre.";
        return false;
    } else if (nombre.length < 2 || !regex.test(nombre)) {
        error.textContent = "Por favor, ingrese un nombre válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    const error = document.getElementById("error-apellido");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (apellido === "") {
        error.textContent = "Debe ingresar su apellido.";
        return false;
    } else if (apellido.length < 2 || !regex.test(apellido)) {
        error.textContent = "Por favor, ingrese un apellido válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarGenero() {
    const genero = document.getElementById("genero");
    if (genero.value === "") {
        genero.style.border = "2px solid red";
        return false;
    } else {
        genero.style.border = "";
        return true;
    }
}

function validarEstadoCivil() {
    const estado = document.getElementById("estado_civil");
    if (estado.value === "") {
        estado.style.border = "2px solid red";
        return false;
    } else {
        estado.style.border = "";
        return true;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error-mail");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        error.textContent = "Debe ingresar un email.";
        return false;
    } else if (!regex.test(email)) {
        error.textContent = "Por favor, ingrese un email válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarContra() {
    const contra = document.getElementById("password").value.trim();
    const error = document.getElementById("error-password");

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

// ---------------------- EVENTOS EN TIEMPO REAL ----------------------

document.getElementById("primer_nombre").addEventListener('input', validarNombre);
document.getElementById("primer_nombre").addEventListener('blur', validarNombre);

document.getElementById("apellido").addEventListener('input', validarApellido);
document.getElementById("apellido").addEventListener('blur', validarApellido);

// document.getElementById("email").addEventListener('input', validarEmail);
// document.getElementById("email").addEventListener('blur', validarEmail);

document.getElementById("password").addEventListener('input', validarContra);
document.getElementById("password").addEventListener('blur', validarContra);


document.getElementById("boton_continuar").addEventListener("click", function() {
window.location.href = "/pais_residencia";  
}); 

