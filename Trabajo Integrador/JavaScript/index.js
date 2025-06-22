document.getElementById("formulario").addEventListener("submit", function (e) {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const generoValido = validarGenero();
    const estadoValido = validarEstadoCivil();
    const paisValido = validarPais();
    const calleValida = validarCalle();
    const alturaValida = validarAltura();
    const provinciaValida = validarProvincia();
    const emailValido = validarEmail();
    const condicionesValida = validarCondicionesLegales();
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!nombreValido || !apellidoValido || !generoValido || !estadoValido || !paisValido || !calleValida || !alturaValida || !validarProvincia || !emailValido || !condicionesValida || !validarUsuario || !passwordValida) {
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
        error.textContent = "Por favor, ingrese un nombre valido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    const error = document.getElementById("error_apellido");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (apellido === "") {
        error.textContent = "Debe ingresar su apellido.";
        return false;
    } else if (apellido.length < 2 || !regex.test(apellido)) {
        error.textContent = "Por favor, ingrese un apellido valido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarGenero() {
    const genero = document.getElementById("genero");
    const error = document.getElementById("error_genero");
    if (genero.value === "") {
        error.textContent = "Por favor, elija una opcion.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarEstadoCivil() {
    const estado = document.getElementById("estado_civil");
    const error = document.getElementById("error_estado_civil");
    if (estado.value === "") {
        error.textContent = "Por favor, elija una opcion.";
        return false;
    } else {
       error.textContent = "";
        return true;
    }
}

function validarPais() {
    const pais = document.getElementById("pais");
    const error = document.getElementById("error_pais");
    if (pais.value === "") {
        error.textContent = "Por favor, elija una opcion.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarCalle() {
    const calle = document.getElementById("calle").value.trim();
    const error = document.getElementById("error_calle");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (calle === "") {
        error.textContent = "Debe ingresar una calle.";
        return false;
    } else if (calle.length < 2 || !regex.test(calle)) {
        error.textContent = "Por favor, ingrese una calle valida.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarAltura() {
    const altura = document.getElementById("altura").value.trim();
    const error = document.getElementById("error_altura");
    const regex = /^\d{1,5}$/;

    if (altura === "") {
        error.textContent = "Debe ingresar una altura.";
        return false;
    } else if (altura.length < 2 || !regex.test(altura)) {
        error.textContent = "Por favor, ingrese hasta cinco numeros.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarCiudad() {
    const ciudad = document.getElementById("cuidad").value.trim();
    const error = document.getElementById("error_cuidad");

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (ciudad === "") {
        error.textContent = "Debe ingresar una ciudad.";
        return false;
    } else if (ciudad.length < 2 || !regex.test(ciudad)) {
        error.textContent = "Por favor, ingrese una ciudad valida.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarProvincia() {
    const provincia = document.getElementById("provincia");
    const error = document.getElementById("error_provincia");
    if (provincia.value === "") {
        error.textContent = "Por favor, elija una opcion.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error_email");
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

function validarCondicionesLegales() {
    const condiciones = document.getElementById("condiciones");
    const error = document.getElementById("rror_condiciones");
    if (condicione.value === "") {
        error.textContent = "Por favor, elija una opcion.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
};

function validarUsuario() {
    const usuario = document.getElementById("usuario").value.trim();
    const error = document.getElementById("error_usuario");

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (usuario === "") {
        error.textContent = "Debe ingresar su nombre.";
        return false;
    } else if (usuario.length < 2 || !regex.test(usuario)) {
        error.textContent = "Por favor, ingrese un nombre valido.";
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

document.getElementById("primer_nombre").addEventListener('input', validarNombre);
document.getElementById("primer_nombre").addEventListener('blur', validarNombre);

document.getElementById("apellido").addEventListener('input', validarApellido);
document.getElementById("apellido").addEventListener('blur', validarApellido);

document.getElementById("genero").addEventListener('input', validarGenero);
document.getElementById("genero").addEventListener('blur', validarGenero);

document.getElementById("estado_civil").addEventListener('input', validarEstadoCivil);
document.getElementById("estado_civil").addEventListener('blur', validarEstadoCivil);

document.getElementById("pais").addEventListener('input', validarPais);
document.getElementById("pais").addEventListener('blur', validarPais);

document.getElementById("calle").addEventListener('input', validarCalle);
document.getElementById("calle").addEventListener('blur', validarCalle);

document.getElementById("altura").addEventListener('input', validarAltura);
document.getElementById("altura").addEventListener('blur', validarAltura);

document.getElementById("ciudad").addEventListener('input', validarCiudad);
document.getElementById("ciudad").addEventListener('blur', validarCiudad);

document.getElementById("provincia").addEventListener('input', validarProvincia);
document.getElementById("provincia").addEventListener('blur', validarProvincia);

document.getElementById("email").addEventListener('input', validarEmail);
document.getElementById("email").addEventListener('blur', validarEmail);

document.getElementById("condiciones").addEventListener('input', validarCondicionesLegales);
document.getElementById("condiciones").addEventListener('blur', validarCondicionesLegales);

document.getElementById("usuario").addEventListener('input', validarUsuario);
document.getElementById("usuario").addEventListener('blur', validarUsuario);

document.getElementById("password").addEventListener('input', validarPassword);
document.getElementById("password").addEventListener('blur', validarPassword);