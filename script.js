// Mostrar una alerta mas inforacion
function showAlert() {
    alert('Bienvenido a Finanzas Inteligentes. Aprende a gestionar tu dinero de manera efectiva. Realizado por Yordi Sanchez; 21-0834.');
}
// Manejo del envío del formulario de contacto
function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Mostrar una alerta cuando se envíe el formulario
    alert(`Correo enviado por ${name} (${email}): ${message}`);
    
}
// Alternar el modo oscuro en la página web.
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
// Cambiar color al pasar el mouse
const hoverElements = document.querySelectorAll('.Efectocolor');
hoverElements.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        element.style.backgroundColor = 'red';
    });
    element.addEventListener('mouseout', function () {
        element.style.backgroundColor = '';
    });
});