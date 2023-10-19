// Obtener los elementos necesarios
const controlsDiv = document.getElementById('controls');
const inputNumber = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

// Asignar escucha de evento click al botón de crear
createButton.addEventListener('click', createBoxes);

// Asignar escucha de evento click al botón de borrar
destroyButton.addEventListener('click', destroyBoxes);

// Función para crear los elementos div
function createBoxes() {
    const amount = parseInt(inputNumber.value); // Obtener la cantidad de elementos
    clearBoxes(); // Borrar cualquier elemento existente antes de crear nuevos

    // Crear los nuevos elementos div
    for (let i = 0; i < amount; i++) {
        const size = 30 + (i * 10); // Calculo el tamaño del div
        const color = getRandomHexColor(); // Obtener un color aleatorio

        const box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = color;

        boxesDiv.appendChild(box);
    }
}

// Función para borrar los elementos div
function destroyBoxes() {
    clearBoxes(); // Borrar todos los elementos
}

// Función para borrar los elementos existentes
function clearBoxes() {
    while (boxesDiv.firstChild) {
        boxesDiv.removeChild(boxesDiv.firstChild);
    }
}

// Función para generar un color hexadecimal aleatorio
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}