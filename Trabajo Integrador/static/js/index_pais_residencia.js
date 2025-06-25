document.getElementById("formulario").addEventListener("submit", function (e) {
    const paisValido = validarPais();

    if (!paisValido) {
        e.preventDefault();
    }else {
        e.preventDefault();
    }

        const new_pais=document.getElementById('pais').value
        localStorage.setItem("register_pais",new_pais );
        window.location.href = '/datos_domicilio';
});

function validarPais() {
    const pais = document.getElementById("pais");
    const error = document.getElementById("error_pais");
    if (pais.value === "") {
        error.textContent = "Por favor, elija una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("pais").addEventListener('input', validarPais);
document.getElementById("pais").addEventListener('blur', validarPais);

document.getElementById("continuar").addEventListener("click", function () {
    const paisValido = validarPais();

    if (paisValido) {
        document.getElementById("formulario").dispatchEvent(new Event('submit'));
    }
});
