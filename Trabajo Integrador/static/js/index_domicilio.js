document.getElementById("formulario").addEventListener("submit", function (e) {
    const calleValida = validarCalle();
    const alturaValida = validarAltura();
    const ciudadValida = validarCiudad();
    const provinciaValida = validarProvincia();

    if (!calleValida || !alturaValida || !ciudadValida || !provinciaValida) {
        e.preventDefault();
    }else {
        e.preventDefault();
        window.location.href = '/email';
    }
});

function validarCalle() {
    const calle = document.getElementById("calle").value.trim();
    const error = document.getElementById("error_calle");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (calle === "") {
        error.textContent = "Debe ingresar una calle.";
        return false;
    } else if (calle.length < 2 || !regex.test(calle)) {
        error.textContent = "Por favor, ingrese una calle válida.";
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
    } else if (!regex.test(altura)) {
        error.textContent = "Por favor, ingrese hasta cinco números.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarCiudad() {
    const ciudad = document.getElementById("ciudad").value.trim();
    const error = document.getElementById("error_ciudad");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (ciudad === "") {
        error.textContent = "Debe ingresar una ciudad.";
        return false;
    } else if (ciudad.length < 2 || !regex.test(ciudad)) {
        error.textContent = "Por favor, ingrese una ciudad válida.";
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
        error.textContent = "Por favor, elija una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("calle").addEventListener('input', validarCalle);
document.getElementById("calle").addEventListener('blur', validarCalle);

document.getElementById("altura").addEventListener('input', validarAltura);
document.getElementById("altura").addEventListener('blur', validarAltura);

document.getElementById("ciudad").addEventListener('input', validarCiudad);
document.getElementById("ciudad").addEventListener('blur', validarCiudad);

document.getElementById("provincia").addEventListener('input', validarProvincia);
document.getElementById("provincia").addEventListener('blur', validarProvincia);

document.getElementById("continuar").addEventListener("click", function () {
    const calleValida = validarCalle();
    const alturaValida = validarAltura();
    const ciudadValida = validarCiudad();
    const provinciaValida = validarProvincia();

    if (calleValida && alturaValida && ciudadValida && provinciaValida) {
        document.getElementById("formulario").dispatchEvent(new Event('submit'));
    }
});
