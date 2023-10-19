// En esta línea de código, se selecciona el elemento con el ID "categories" y se asigna a la variable `categoriesList`
const categoriesList = document.getElementById('categories');

// En esta línea, se utiliza el método querySelectorAll() en el elemento categoriesList para seleccionar todos los elementos li con la clase "item" que son hijos directos del elemento categoriesList. Estos elementos representan las categorías de la lista y se asignan a la variable `categories`.
const categories = categoriesList.querySelectorAll('li.item');

const numOfCategories = categories.length; // se captura el tamaño del array

console.log(`Number of categories: ${numOfCategories}`); //utilizando console.log()` y el operador de interpolación (`${}`) para insertar el valor de `numOfCategories` en el mensaje.

categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;

    const numOfElements = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numOfElements}`);
});