function showAlert() {
    alert('Bienvenido a Finanzas Inteligentes. Aprende a gestionar tu dinero de manera efectiva. Realizado por Yordi Sanchez; 21-0834.');
}

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Correo enviado por ${name} (${email}): ${message}`);
    
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
