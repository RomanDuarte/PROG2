document.getElementById("formulario").addEventListener("submit", function (e) {
    const emailValido = validarEmail();

    if (!emailValido) {
        e.preventDefault();
    }else {
        e.preventDefault();
        window.location.href = '/condiciones';
    }
});

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

document.getElementById("email").addEventListener('input', validarEmail);
document.getElementById("email").addEventListener('blur', validarEmail);

document.getElementById("continuar").addEventListener("click", function () {
    const emailValido = validarEmail();

    if (emailValido) {
        document.getElementById("formulario").dispatchEvent(new Event('submit'));
    }
});
