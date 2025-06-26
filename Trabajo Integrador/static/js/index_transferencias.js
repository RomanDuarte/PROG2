document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const cbuInput = document.getElementById("origen");
    const aliasInput = document.getElementById("destino");
    
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const monto = parseFloat(document.getElementById("importe").value);

fetch("/api/transfer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        origen: origen,
        destino: destino,
        monto: monto
    })
})
.then(res => res.json())
.then(data => {
    if (data.status === "ok") {
        localStorage.setItem("saldo", data.monto);
        alert("Transferencia realizada con éxito");
        
    } else {
        alert("Error: " + data.mensaje);
    }
})
.catch(err => {
    console.error("Error en la transferencia:", err);
});
    });
    });