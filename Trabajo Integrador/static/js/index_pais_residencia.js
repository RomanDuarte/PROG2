document.getElementById("formulario").addEventListener("submit", function (e) {
   
    const paisValido = validarPais();
   

    if (!paisValido) {
        e.preventDefault();
        alert("Por favor completá correctamente todos los campos.");
    }
});


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


document.getElementById("pais").addEventListener('input', validarPais);
document.getElementById("pais").addEventListener('blur', validarPais);

document.getElementById("boton_continuar").addEventListener("click", function() {
    window.location.href = '/domicilio';  
}); 