document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault()
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const fechaValida = validarFecha();
    const generoValido = validarGenero();
    const estadoValido = validarEstadoCivil();
    const emailValido = validarEmail();
    const usuarioValido = validarUsuario();
    const passwordValida = validarPassword();

    if (!nombreValido || !apellidoValido || !fechaValida || !generoValido || !estadoValido || !emailValido || !usuarioValido || !passwordValida) {
        e.preventDefault();
    } else {
    const idUsuario = localStorage.getItem("id");  
    const datosActualizados = {
    nombre: document.getElementById("primer_nombre").value,
    apellido: document.getElementById("apellido").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    genero: document.getElementById("genero").value,
    estado_civil: document.getElementById("estado_civil").value,
    email: document.getElementById("email").value,
    usuario: document.getElementById("usuario").value,
    clave: document.getElementById("password").value
    };
    fetch(`/api/usuarios/${idUsuario}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(datosActualizados)
    })
    .then(res => res.json())
    .then(data => {
    if (data.mensaje) {
        alert("Datos actualizados correctamente");
            localStorage.setItem("nombre", data.nombre);
            localStorage.setItem("apellidos", data.apellido);
            localStorage.setItem("email", data.email);
            localStorage.setItem("saldo", data.saldo);
            localStorage.setItem("id", data.id);
            window.location.href = "/inicio";
    } else {
        alert("Hubo un error al actualizar: " + (data.error || "desconocido"));
    }
    })
    .catch(err => {
    console.error("Error de red o servidor:", err);
    });
    }
    });

function validarNombre() {
    const nombre = document.getElementById("primer_nombre").value.trim();
    const error = document.getElementById("error_nombre");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (nombre === "") {
        error.textContent = "Debe ingresar su nombre.";
        return false;
    } else if (nombre.length < 2 || !regex.test(nombre)) {
        error.textContent = "Por favor, ingrese un nombre válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    const error = document.getElementById("error_apellido");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (apellido === "") {
        error.textContent = "Debe ingresar su apellido.";
        return false;
    } else if (apellido.length < 2 || !regex.test(apellido)) {
        error.textContent = "Por favor, ingrese un apellido válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarFecha() {
    const fecha_imput = document.getElementById("fecha_nacimiento");
    const fecha = fecha_imput.value.trim();
    const error = document.getElementById("error_fecha");

    if (fecha === "") {
        error.textContent = "Debe ingresar su fecha de nacimiento.";
        return false;
    }

    const fecha_objeto = new Date(fecha);
    const hoy = new Date();

    if (isNaN(fecha_objeto.getTime())) {
        error.textContent = "Por favor, ingrese una fecha válida.";
        return false;
    } else if (fecha_objeto > hoy) {
        error.textContent = "La fecha no puede ser futura.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarGenero() {
    const genero = document.getElementById("genero");
    const error = document.getElementById("error_genero");
    if (genero.value === "") {
        error.textContent = "Por favor, elija una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarEstadoCivil() {
    const estado = document.getElementById("estado_civil");
    const error = document.getElementById("error_estado_civil");
    if (estado.value === "") {
        error.textContent = "Por favor, elija una opción.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error_correo_electronico");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        error.textContent = "Debe ingresar un email.";
        return false;
    } else if (!regex.test(email)) {
        error.textContent = "Por favor, ingrese un email válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

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


document.getElementById("primer_nombre").addEventListener('input', validarNombre);
document.getElementById("primer_nombre").addEventListener('blur', validarNombre);

document.getElementById("apellido").addEventListener('input', validarApellido);
document.getElementById("apellido").addEventListener('blur', validarApellido);

document.getElementById("fecha_nacimiento").addEventListener('input', validarFecha);
document.getElementById("fecha_nacimiento").addEventListener('blur', validarFecha);

document.getElementById("genero").addEventListener('input', validarGenero);
document.getElementById("genero").addEventListener('blur', validarGenero);

document.getElementById("estado_civil").addEventListener('input', validarEstadoCivil);
document.getElementById("estado_civil").addEventListener('blur', validarEstadoCivil);

document.getElementById("email").addEventListener('input', validarEmail);
document.getElementById("email").addEventListener('blur', validarEmail);

document.getElementById("usuario").addEventListener('input', validarUsuario);
document.getElementById("usuario").addEventListener('blur', validarUsuario);

document.getElementById("password").addEventListener('input', validarPassword);
document.getElementById("password").addEventListener('blur', validarPassword);


