const input = document.getElementById('validation-input');
let expectedLength = parseInt(input.getAttribute('data-length'));
const regex = /./g;

input.addEventListener('keyup', function() {
    const inputValue = input.value;

    /* Aqui valida si el numero de caracteres es correcto colorea el borde color verde,
    si no es cuando se hace click fuera del input coloca borde color rojo.
 */
    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }

    /*   Aqui cada tecla presionada la convierte a caracter */

    input.value = inputValue.replace(regex, '*');
});

input.addEventListener('focus', function() {
    input.classList.remove('valid');
    input.classList.remove('invalid');
});

input.addEventListener('blur', function() {
    const inputValue = input.value;

    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});