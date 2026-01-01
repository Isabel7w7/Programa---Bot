// Obtener el botón por su ID
const botonDudaEspecifica = document.getElementById('dEspecifica');
const botonDudaGeneral = document.getElementById('dGeneral');

// Agregar el evento de click
botonDudaEspecifica.addEventListener('click', function() {
    // Redirigir a la carpeta hermana 'Chat'
    window.location.href = '../Chat/ChatBot.html';
});
botonDudaGeneral.addEventListener('click', function() {
    // Redirigir a la carpeta hermana 'Chat'
    window.location.href = '../PantalladeBot/Pantalla_Preguntas.html';
   }); 
