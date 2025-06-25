document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!usuarioValido || !passwordValida) {
        
        alert("Por favor completá correctamente todos los campos.");
    }   
const user = document.getElementById("usuario").value;
const contra = document.getElementById("password").value;
        fetch("/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: user, clave: contra })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'ok') {
            alert('Login correcto');
            window.location.href = "/inicio";
            localStorage.setItem("nombre", data.nombre);
            localStorage.setItem("apellidos", data.apellido);
            localStorage.setItem("email", data.email);
            localStorage.setItem("saldo", data.saldo);
            localStorage.setItem("id", data.id);
        } else {
            alert('Login fallido');
            document.getElementById("formulario").reset();
        }
    })
    .catch(err => {
        console.error("Error en la solicitud:", err);
    });
});


function validarUsuario() {
    const usuario = document.getElementById("usuario").value.trim();
    const error = document.getElementById("error_usuario");

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (usuario === "") {
        error.textContent = "Debe ingresar su nombre.";
        return false;
    } else if (usuario.length < 2 || !regex.test(usuario)) {
        error.textContent = "Por favor, ingrese un nombre valido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}


function validarPassword() {
    const contra = document.getElementById("password").value.trim();
    const error = document.getElementById("error_password");

    if (contra === "") {
        error.textContent = "Debe ingresar una contraseña.";
        return false;
    } else if (contra.length < 6) {
        error.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById("usuario").addEventListener('input', validarUsuario);
document.getElementById("usuario").addEventListener('blur', validarUsuario);

document.getElementById("password").addEventListener('input', validarPassword);
document.getElementById("password").addEventListener('blur', validarPassword);

// document.getElementById("continuar").addEventListener("click", function() {
//     window.location.href = '/pais_residencia';  
// });


