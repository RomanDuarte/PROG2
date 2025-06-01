document.getElementById("formulario").addEventListener("submit", function (e) {
    // Ejecutar validaciones antes de enviar
    validarEmail();
    // Revisar si hay errores visibles
    const errorEmail = document.getElementById("error-mail").textContent;

    if (errorEmail !== "") {
        e.preventDefault(); // Evita que el formulario se envíe
        alert("Por favor completá correctamente todos los campos.");
    }

});

function validarEmail(){
    const email=document.getElementById("email").value.trim();
    const errorEmail=document.getElementById("error-mail");
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email===""){
        errorEmail.textContent="Debe ingresar un email"
    }
    else if (!regex.test(email)){
        errorEmail.textContent="Por favor ingrese un email valido"
    }
    else{
        errorEmail.textContent=""
    }
}
document.getElementById("email").addEventListener('input',validarEmail);
document.getElementById("email").addEventListener('blur',validarEmail);