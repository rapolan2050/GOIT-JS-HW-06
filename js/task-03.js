const ul = document.querySelector('.gallery');

// En esta parte del código, definimos una constante llamada `images` que es un array de objetos.
//Cada objeto representa una imagen y tiene dos propiedades: `url` (la URL de la imagen) y `alt` (el atributo `alt` de la image*/

const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


// En esta sección, utilizamos el método `map()` para iterar sobre el array `images` y crear un nuevo array con elementos li` de HTML. Para cada objeto `image` en el array `images`,
//utilizamos el template string para generar una cadena HTML que contiene un `li` con una etiqueta `img` que tiene la URL y el atributo `alt` correspondiente. */

const galleryHTML = images.map(function(image) {
    return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}).join('');

/* Luego, usamos el método `join('')` en el nuevo array generado por `map()` para fusionar todos los elementos en una sola cadena HTML */

ul.insertAdjacentHTML('beforeEnd', galleryHTML);

// Finalmente, utilizamos el método `insertAdjacentHTML()` para agregar la cadena HTML generada al final del contenido existente dentro del elemento `ul`. Utilizamos el argumento `'beforeEnd'` para especificar que queremos insertar el HTML antes del cierre de la etiqueta `ul`, es decir, como el último elemento hijo dentro del elemento ul