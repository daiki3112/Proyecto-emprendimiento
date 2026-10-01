// Lógica de Ventana Modal de Servicios
function abrirModal(servicio, precio) {
    document.getElementById('modal-titulo').textContent = 'Solicitar ' + servicio;
    document.getElementById('modal-precio').textContent = precio;
    document.getElementById('modal-compra').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal-compra').style.display = 'none';
}

function confirmarCompra() {
    alert('¡Gracias por tu solicitud en ReStyle Club! Te contactaremos por WhatsApp/Correo para confirmar la recepción de tus prendas.');
    cerrarModal();
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modal-compra');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Lógica del Chatbot de Inteligencia Artificial para Moda
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

    // Respuesta inteligente de moda
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        
        let respuesta = '🤖 ¡Me encanta esa idea! Trae tu prenda al taller y nuestros sastres le darán un corte moderno a tu gusto.';

        const textoMin = mensaje.toLowerCase();

        if (textoMin.includes('ventajas') || textoMin.includes('membresia') || textoMin.includes('ventaja')) {
            respuesta = '👑 Con la **Membresía VIP ($39.90/mes)** traes prendas mensuales. Si la entregas en la mañana, ¡te la entregamos mañana en la tarde sin costo extra!';
        } else if (textoMin.includes('express') || textoMin.includes('24h') || textoMin.includes('rapida') || textoMin.includes('rapido')) {
            respuesta = '⚡ Si no tienes membresía, puedes pagar el **Upgrade Express (+$9.90)** por prenda para tenerla lista al día siguiente por la tarde.';
        } else if (textoMin.includes('sin membresia') || textoMin.includes('ocasional') || textoMin.includes('individual')) {
            respuesta = '✂️ ¡Claro! Puedes pagar solo el **Servicio Individual ($15.90)** por prenda con entrega estándar en 3 a 5 días.';
        } else if (textoMin.includes('hola') || textoMin.includes('buenas')) {
            respuesta = '👋 ¡Hola! Soy tu asistente de estilo. ¿Tienes dudas sobre cómo transformar tu clóset?';
        }

        botDiv.textContent = respuesta;
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

// Simulador Dinámico de Latencia de Red (Ping)
setInterval(() => {
    const pingElement = document.getElementById('ping-val');
    if (pingElement) {
        const randomPing = Math.floor(Math.random() * (32 - 16 + 1)) + 16;
        pingElement.textContent = randomPing + 'ms';
    }
}, 3000);

// Detección de sección visible al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, main');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = 'inicio';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 180)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});