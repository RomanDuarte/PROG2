const formulario = document.getElementById('registroForm');
formulario.addEventListener('submit', function(e) {
e.preventDefault();
})


function validarEmail(){
    const email=document.getElementById("email").value.trim();
    const errorEmail=document.getElementById("error-email").value.trim();
    if (email===""){
        errorEmail.textContent="Debe ingresar un email"
    }
}

document.addEventListener()