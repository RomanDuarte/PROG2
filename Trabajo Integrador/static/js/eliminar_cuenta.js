document.getElementById("formulario").addEventListener("submit", async function(event) {
    event.preventDefault();

    const confirmacion = confirm("¿Estás seguro de que querés eliminar tu cuenta? Esta acción es irreversible.");
    if (!confirmacion) return;

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();

    if (!usuario || !clave) {
        alert("Por favor, ingresa usuario y clave.");
        return;
    }

    try {
        const response = await fetch('/api/usuarios/eliminar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, clave })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.mensaje || "Cuenta eliminada exitosamente.");
            localStorage.clear();
            window.location.href = "/";
        } else {
            alert(data.error || "No se pudo eliminar la cuenta.");
        }
    } catch (error) {
        console.error("Error al eliminar la cuenta:", error);
        alert("Hubo un error de red o del servidor.");
    }
});

document.getElementById("flecha_retroceder").addEventListener("click", function() {
    window.location.href = "/ajustes_varios";  
});

