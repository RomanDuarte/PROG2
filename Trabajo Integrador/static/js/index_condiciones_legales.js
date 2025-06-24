document.getElementById("formulario").addEventListener("submit", function (e) {
    const condicionesValida = validarCondicionesLegales();

    if (!condicionesValida) {
        e.preventDefault();
    }else {
        e.preventDefault();
        window.location.href = '/crear_usuario_clave';
    }
});

function validarCondicionesLegales() {
    const condiciones = document.getElementById("condiciones");
    const error = document.getElementById("error_condiciones");

    if (!condiciones.checked) {
        error.textContent = "Por favor, aceptá las condiciones legales.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("condiciones").addEventListener('input', validarCondicionesLegales);
document.getElementById("condiciones").addEventListener('blur', validarCondicionesLegales);

document.getElementById("continuar").addEventListener("click", function () {
    const condicionesValida = validarCondicionesLegales();

    if (condicionesValida) {
        document.getElementById("formulario").dispatchEvent(new Event('submit'));
    }
});
