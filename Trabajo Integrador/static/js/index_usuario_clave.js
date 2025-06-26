document.getElementById("formulario").addEventListener("submit", function (e) {
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!usuarioValido || !passwordValida) {
        e.preventDefault();
    }else {
        e.preventDefault();
    }


const new_user=document.getElementById('usuario').value;

const new_user_password=document.getElementById('password').value;
localStorage.setItem("password", new_user_password);
const nombre = localStorage.getItem("register_nombre");
const apellido = localStorage.getItem("register_apellido");
const fecha_nac = localStorage.getItem("register_fecha_nacimiento");
const genero = localStorage.getItem("register_genero");
const estado_civil = localStorage.getItem("register_estado_civil");
const pais = localStorage.getItem("register_pais");
const email = localStorage.getItem("register_email");

fetch("/api/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        usuario: new_user,
        clave: new_user_password,
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento:fecha_nac,
        email: email,
        genero: genero,
        pais:pais,
        estado_civil: estado_civil
    })
})

.then(res => res.json())
.then(data => {
    if (data.status === "ok") {
        alert("Registro exitoso");
        window.location.href = "/login";
    } else {
         document.getElementById("error_usuario").textContent = "Nombre de usuario ya registrado";
    }
})
.catch(err => {
    console.error("Error en el registro:", err);
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
        error.textContent = "Por favor, ingrese un nombre válido.";
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

document.getElementById("continuar").addEventListener("click", function() {
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (usuarioValido && passwordValida) {
        document.getElementById("formulario").dispatchEvent(new Event('submit', { cancelable: true }));
    } else {
    }
});

