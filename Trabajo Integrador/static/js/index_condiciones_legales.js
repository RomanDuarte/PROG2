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

    const algunaSeleccionada = checkboxes.some(chk => chk.checked);

    if (!algunaSeleccionada) {
        error.textContent = "Debe seleccionar al menos una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = '/crear_usuario_clave';
    
});
