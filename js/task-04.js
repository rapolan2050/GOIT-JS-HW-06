// Crear variable counterValue e inicializarla con 0
let counterValue = 0;

// Obtener referencia a los elementos del DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

decrementButton.addEventListener('click', decrementCounter);
incrementButton.addEventListener('click', incrementCounter);


function decrementCounter() {
    counterValue--;
    updateCounter();
}

function incrementCounter() {
    counterValue++;
    updateCounter();
}

function updateCounter() {
    valueElement.textContent = counterValue;
}