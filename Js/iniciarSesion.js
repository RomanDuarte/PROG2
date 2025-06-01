// const formulario = document.getElementById('formulario');
// formulario.addEventListener('submit', function(e) {
// e.preventDefault();
// })

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

