document.getElementById("formulario").addEventListener("submit", function (e) {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const fechaValida = validarFecha();
    const generoValido = validarGenero();
    const estadoValido = validarEstadoCivil();

    if (!nombreValido || !apellidoValido || !fechaValida || !generoValido || !estadoValido) {
        e.preventDefault();
    } else {
        e.preventDefault();
        window.location.href = '/pais';
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
    const error = document.getElementById("error_apellido");
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

function validarFecha() {
    const fechaInput = document.getElementById("fecha_nacimiento");
    const fecha = fechaInput.value.trim();
    const error = document.getElementById("error_fecha");

    if (fecha === "") {
        error.textContent = "Debe ingresar su fecha de nacimiento.";
        return false;
    }

    const fecha_objeto = new Date(fecha);
    const hoy = new Date();

    if (isNaN(fecha_objeto.getTime())) {
        error.textContent = "Por favor, ingrese una fecha válida.";
        return false;
    } else if (fecha_objeto > hoy) {
        error.textContent = "La fecha no puede ser futura.";
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
        error.textContent = "Por favor, elija una opción.";
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
        error.textContent = "Por favor, elija una opción.";
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

document.getElementById("fecha_nacimiento").addEventListener('input', validarFecha);
document.getElementById("fecha_nacimiento").addEventListener('blur', validarFecha);

document.getElementById("genero").addEventListener('input', validarGenero);
document.getElementById("genero").addEventListener('blur', validarGenero);

document.getElementById("estado_civil").addEventListener('input', validarEstadoCivil);
document.getElementById("estado_civil").addEventListener('blur', validarEstadoCivil);

document.getElementById("continuar").addEventListener("click", function () {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const fechaValida = validarFecha();
    const generoValido = validarGenero();
    const estadoValido = validarEstadoCivil();

    if (nombreValido && apellidoValido && fechaValida && generoValido && estadoValido) {
        document.getElementById("formulario").dispatchEvent(new Event('submit'));
    }
});
