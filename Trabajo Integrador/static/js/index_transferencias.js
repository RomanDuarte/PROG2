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

    // formulario.addEventListener("submit", function (e) {
    //     const cbuAliasValido = validarCBUoAlias();
    //     const importeValido = validarImporte();
    //     const cuentaValida = validarCuenta();
    //     const conceptoValido = validarConcepto();

    //     if ( !importeValido || !cuentaValida || !conceptoValido) {
    //         e.preventDefault();
    //     }
    //     else{

    //     }


    // function validarCBUoAlias() {
    //     const cbu = cbuInput.value.trim();
    //     const alias = aliasInput.value.trim();

    //     const errorCBU = document.getElementById("error_cbu");
    //     const errorAlias = document.getElementById("error_alias");

    //     const regex = /^\d{22}$/;

    //     let valido = true;

    //     if (cbu === "" && alias === "") {
    //         errorAlias.textContent = "Ingrese CBU o alias (uno obligatorio).";
    //         return false;
    //     }

    //     if (cbu !== "") {
    //         if (!regex.test(cbu)) {
    //             errorCBU.textContent = "CBU invalido. Debe tener exactamente 22 dígitos.";
    //             valido = false;
    //         } else {
    //             errorCBU.textContent = "";
    //         }
    //     } else {
    //         errorCBU.textContent = "";
    //     }

    //     if (alias !== "") {
    //         if (alias.length < 4 || alias.length > 20) {
    //             errorAlias.textContent = "Alias inválido (debe tener entre 4 y 20 caracteres).";
    //             valido = false;
    //         } else {
    //             errorAlias.textContent = "";
    //         }
    //     } else {
    //         errorAlias.textContent = "";
    //     }

    //     return valido;
    // }

//     function validarImporte() {
//         const importe = document.getElementById("importe").value.trim();
//         const error = document.getElementById("error_importe");

//         if (importe === "") {
//             error.textContent = "Debe ingresar el importe.";
//             return false;
//         } else if (isNaN(importe) || Number(importe) <= 0) {
//             error.textContent = "Importe inválido. Debe ser un número positivo.";
//             return false;
//         } else {
//             error.textContent = "";
//             return true;
//         }
//     }

//     function validarCuenta() {
//         const cuenta = document.getElementById("genero").value;
//         const error = document.getElementById("error_cuenta");

//         if (cuenta === "") {
//             error.textContent = "Debe seleccionar una cuenta.";
//             return false;
//         } else {
//             error.textContent = "";
//             return true;
//         }
//     }

//     function validarConcepto() {
//         const concepto = document.getElementById("concepto").value;
//         const error = document.getElementById("error_concepto");

//         if (concepto === "") {
//             error.textContent = "Debe seleccionar un concepto.";
//             return false;
//         } else {
//             error.textContent = "";
//             return true;
//         }
//     }

//     cbuInput.addEventListener("input", function () {
//         validarCBUoAlias();
//         if (cbuInput.value.trim() !== "") {
//             aliasInput.value = "";
//             aliasInput.disabled = true;
//         } else {
//             aliasInput.disabled = false;
//         }
//     });

//     aliasInput.addEventListener("input", function () {
//         validarCBUoAlias();
//         if (aliasInput.value.trim() !== "") {
//             cbuInput.value = "";
//             cbuInput.disabled = true;
//         } else {
//             cbuInput.disabled = false;
//         }
//     });

//     document.getElementById("importe").addEventListener("input", validarImporte);
//     document.getElementById("importe").addEventListener("blur", validarImporte);

//     document.getElementById("genero").addEventListener("change", validarCuenta);
//     document.getElementById("concepto").addEventListener("change", validarConcepto);


//     document.getElementById("continuar").addEventListener("click", function () {
//         const cbuAliasValido = validarCBUoAlias();
//         const importeValido = validarImporte();
//         const cuentaValida = validarCuenta();
//         const conceptoValido = validarConcepto();

//         if (cbuAliasValido && importeValido && cuentaValida && conceptoValido) {
//             formulario.dispatchEvent(new Event("submit"));
//         }
//     });
// });
