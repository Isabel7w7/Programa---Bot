let correoUsuario = "";
// Selecciona el correo destino
function selectEmail(email) {
    document.getElementById("userInput").value = email;
}

// Click en el botón de enviar → abrir modal
document.getElementById("sendButton").addEventListener("click", abrirModal);

// Abre el modal
function abrirModal() {
    document.getElementById("correoModal").style.display = "block";
}

// Cierra el modal
function cerrarModal() {
    document.getElementById("correoModal").style.display = "none";
}

// Confirmar correo y enviar
function confirmarCorreo() {
    correoUsuario = document.getElementById("correoUsuario").value.trim();

    if (!correoUsuario) {
        alert("Ingresa tu correo.");
        return;
    }

    cerrarModal();
    enviarCorreo();
}

// Enviar correo
function enviarCorreo() {
    const correoDestino = document.getElementById("userInput").value.trim();
    const mensaje = document.getElementById("mensajeInput").value.trim();

    console.log("correoDestino:", correoDestino);
    console.log("mensaje:", mensaje);
    console.log("correoUsuario:", correoUsuario);


    if (!correoDestino) {
        alert("Debes seleccionar un correo de la lista.");
        return;
    }

    if (!mensaje) {
        alert("Escribe un mensaje.");
        return;
    }

    if (!correoUsuario) {
        alert("Ingresa tu correo en el modal.");
        return;
    }

    const params = {
        correo_destino: correoDestino,
        mensaje: mensaje,
        correo_usuario: correoUsuario // NUEVA VARIABLE
    };

    emailjs.send("service_hxm5zrg", "template_d6pe4np", params)
    .then(res => {
        alert("Correo enviado correctamente. El propietario del correo seleccionado te responderá pronto.");
        console.log(res);
    })
    .catch(err => {
        alert("Error al enviar correo.");
        console.error(err);
    });
}

// Botón regresar al menú
document.getElementById('btnRegresar').addEventListener('click', function() {
    // Sube un nivel (../) entra a Pantallademenu y busca el archivo
    window.location.href = '../Pantallademenu/Pantallademenu.html';
});