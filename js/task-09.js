// Obtener los elementos necesarios
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Función para cambiar el color de fondo del body y mostrar el valor de color en span
function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
}

// Asignar escucha de evento click al botón de cambio de color
changeColorButton.addEventListener('click', changeBackgroundColor);

// Función para generar un color hexadecimal aleatorio
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}