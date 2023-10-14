// Obtener el formulario
var loginForm = document.querySelector('.login-form');

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    var emailInput = loginForm.elements.email; // Obtener el input de email
    var passwordInput = loginForm.elements.password; // Obtener el input de contraseña

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        // Comprobar si hay espacios en blanco en los campos del formulario
        alert('Todos los campos deben ser rellenados');
    } else {
        // Crear un objeto con los datos del formulario
        var formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData); // Mostrar el objeto con los datos introducidos en la consola
        loginForm.reset(); // Borrar los valores de los campos del formulario usando el método reset
    }
}

// Asignar escucha de evento submit al formulario
loginForm.addEventListener('submit', handleSubmit);