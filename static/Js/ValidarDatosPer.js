document.getElementById("formulario").addEventListener("submit", function (e) {
    // Ejecutar validaciones antes de enviar
    validarNombre();
    validarApellido();
    estadoCivil();

    // Revisar si hay errores visibles
    const errorNombre = document.getElementById("error-nombre").textContent;
    const errorApellido = document.getElementById("error-apellido").textContent;

    if (errorNombre !== "" || errorApellido !== "") {
        e.preventDefault(); // Evita que el formulario se envíe
        alert("Por favor completá correctamente todos los campos.");
    }

});

// validar Nombre
function validarNombre(){
    const nombre=document.getElementById("primerNombre").value;
    const errorNombre=document.getElementById("error-nombre");
    const regex=/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
    if (nombre===""){
        errorNombre.textContent="Debe ingresar su nombre"
    }
    else if ((nombre.length)<2){
        errorNombre.textContent="Por favor ingrese un nombre valido"
    }
    else if (!regex.test(nombre)){
        errorNombre.textContent="Por favor ingrese un nombre valido"
    }
    else{
        errorNombre.textContent=""
    }
}
document.getElementById("primerNombre").addEventListener('input',validarNombre);
document.getElementById("primerNombre").addEventListener('blur',validarNombre);

//validar apellido
function validarApellido(){
    const apellido=document.getElementById("apellido").value.trim();
    const errorApellido=document.getElementById("error-apellido");
    const regex=/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
    if (apellido===""){
        errorApellido.textContent="Debe ingresar su apellido"
    }
    else if ((apellido.length)<2){
        errorApellido.textContent="Por favor ingrese un apellido valido"
    }
    else if (!regex.test(apellido)){
        errorApellido.textContent="Por favor ingrese un apellido valido"
    }
    else{
        errorApellido.textContent=""
    }
}
document.getElementById("apellido").addEventListener('input',validarApellido);
document.getElementById("apellido").addEventListener('blur',validarApellido);

//Estado civil interactivo

function estadoCivil(){
    const genero=document.getElementById("Genero").value;
    const opcion1=document.getElementById("opcion1");
    const opcion2=document.getElementById("opcion2");
    if (genero=="Femenino"){
        opcion1.textContent="Casada"
        opcion2.textContent="Soltera"
    }
    else if (genero=="Masculino"){
        opcion1.textContent="Casado"
        opcion2.textContent="Soltero"
    }
}
document.getElementById("Genero").addEventListener('input',estadoCivil);
document.getElementById("Genero").addEventListener('blur',estadoCivil);

