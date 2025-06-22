document.getElementById("formulario").addEventListener("submit", function (e) {
    const condicionesValida = validarCondicionesLegales();

    if (!condicionesValida) {
        e.preventDefault();
        alert("Por favor completá correctamente todos los campos.");
    }
});

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


document.getElementById("condiciones").addEventListener('input', validarCondicionesLegales);
document.getElementById("condiciones").addEventListener('blur', validarCondicionesLegales);