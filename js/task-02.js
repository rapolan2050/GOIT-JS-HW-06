const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


const ulingredientes = document.querySelector('#ingredients');

/* creo funcion de flecha para crear nuevo array con map */

const liarray = ingredients.map(ingredients => {

    //  crea el elemento li para guardarlo en la variable li.
    const li = document.createElement('li');
    //  a cada elemento de li se asigna un elemento del array
    li.textContent = ingredients;
    // a cada elemento dentro de la variable li se le asigna un clase llamada item
    li.classList.add('item');
    //  finalmente retorna la funcion el li esperado
    return li;
});


/* En esta ultima parte utilizamos  el metodo append en el elemento ul 'ulingredientes'  para agregar como elementos li  al ul  con el id  ingredients  en el documento HTML. */
ulingredientes.append(...liarray);