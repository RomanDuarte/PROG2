document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const opcionesSeleccionadas = validarOpciones();

    if (opcionesSeleccionadas) {
        window.location.href = "crear_usuario_clave";
    }
});

function validarOpciones() {
    const error = document.getElementById("error_condiciones");

    const checkboxes = [
        document.getElementById("opcion_1"),
        document.getElementById("opcion_2"),
        document.getElementById("opcion_3"),
        document.getElementById("opcion_4"),
    ];

    const algunaSeleccionada = checkboxes.some((chk) => chk.checked);

    if (!algunaSeleccionada) {
        error.textContent = "Debe seleccionar al menos una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

["eopcion_1", "eopcion_2", "eopcion_3", "eopcion_4"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', validarOpciones);
});

document.getElementById("fecha_retroceder").addEventListener("click", function () {
    window.location.href = "/email";
});

