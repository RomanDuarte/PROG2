/* document.getElementById("formulario").addEventListener("submit", function (e) {
    // Ejecutar validaciones antes de enviar
    validarEmail();
    validarContra();

    // Revisar si hay errores visibles
    const errorEmail = document.getElementById("error-mail").textContent;
    const errorContra = document.getElementById("error-password").textContent;

    if (errorEmail !== "" || errorContra !== "") {
        e.preventDefault(); // Evita que el formulario se envíe
        alert("Por favor completá correctamente todos los campos.");
    }
}); //evita que se envie si hay errores// */

// validar email
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
document.getElementById("email").addEventListener('change',validarEmail);

//validar contraseña
function validarContra(){
    const contra=document.getElementById("password").value.trim();
    const errorContra=document.getElementById("error-password");

    if (contra===""){
        errorContra.textContent="Debe ingresar una contraseña"
    }
    else if ((contra.length)<6){
        errorContra.textContent="Ingrese una contraseña de almenos 6 caracteres"
    }
    else{
        errorContra.textContent=""
    }
}
document.getElementById("password").addEventListener('input',validarContra);
document.getElementById("password").addEventListener('change',validarContra);

