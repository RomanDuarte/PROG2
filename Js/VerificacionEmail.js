// const formulario = document.getElementById('formulario');
// formulario.addEventListener('submit', function(e) {
// e.preventDefault();
// })

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