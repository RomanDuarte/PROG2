document.getElementById("formulario").addEventListener("submit", function(e) {
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!usuarioValido || !passwordValida) {
        e.preventDefault();
        alert("Por favor completá correctamente todos los campos.");
    }
    const user=document.getElementById("usuario").value;
const contra=document.getElementById("clave").value;

fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario: user, clave: contra })
})
.then(res => res.json())
.then(data => {
    if (data.status === 'ok') {
        alert('Login correcto');
        localStorage.setItem("nombre", data.nombre);
        localStorage.setItem("apellidos", data.apellido);
        localStorage.setItem("email", data.email);
        localStorage.setItem("saldo", data.saldo);
        window.location.href="/inicio";
    } else {
        alert('Login fallido');
    }
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
    const contra = document.getElementById("clave").value.trim();
    const error = document.getElementById("error_clave");

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

document.getElementById("clave").addEventListener('input', validarPassword);
document.getElementById("clave").addEventListener('blur', validarPassword);


