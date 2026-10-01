// Lógica de Ventana Modal de Compra
function abrirModal(servicio, precio) {
    document.getElementById('modal-titulo').textContent = 'Solicitar ' + servicio;
    document.getElementById('modal-precio').textContent = precio;
    document.getElementById('modal-compra').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal-compra').style.display = 'none';
}

function confirmarCompra() {
    alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
    cerrarModal();
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modal-compra');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Lógica del Chatbot de Inteligencia Artificial
function preguntarIA(mensaje) {
    const input = document.getElementById('user-input');
    input.value = mensaje;
    enviarMensajeIA();
}

function enviarMensajeIA() {
    const input = document.getElementById('user-input');
    const mensaje = input.value.trim();
    const chatBox = document.getElementById('chat-box');

    if (mensaje === '') return;

    // Mostrar mensaje del usuario
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = mensaje;
    chatBox.appendChild(userDiv);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // Generar respuesta de IA simulada con retraso realista
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        
        let respuesta = '🤖 Entiendo tu consulta. Para más detalles personalizados, te sugiero completar nuestro formulario de contacto.';

        const textoMin = mensaje.toLowerCase();

        if (textoMin.includes('recomiendas') || textoMin.includes('plan') || textoMin.includes('recomendar')) {
            respuesta = '✨ Te recomiendo el **Plan Emprendedor ($59.99)**: Incluye base de datos y diseño adaptable para cualquier dispositivo.';
        } else if (textoMin.includes('servicios') || textoMin.includes('ofrecen') || textoMin.includes('catalogo')) {
            respuesta = '🚀 Ofrecemos Servicio Básico ($29.99), Plan Emprendedor ($59.99) y Módulo Inteligente con IA ($89.99).';
        } else if (textoMin.includes('contacto') || textoMin.includes('soporte') || textoMin.includes('hablar')) {
            respuesta = '📞 Puedes escribirnos en la sección de Contacto más abajo o dejarnos un mensaje directo.';
        } else if (textoMin.includes('hola') || textoMin.includes('buenas')) {
            respuesta = '👋 ¡Hola! ¿En qué puedo orientarte sobre nuestros servicios digitales hoy?';
        }

        botDiv.textContent = respuesta;
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}