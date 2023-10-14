const input = document.getElementById('validation-input');

input.addEventListener('keyup', function() {
    const inputValue = input.value;
    const expectedLength = parseInt(input.getAttribute('data-length'));
    const regex = /./g;

    input.value = inputValue.substring(0, expectedLength).replace(regex, '*');

    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});

input.addEventListener('blur', function() {
    const inputValue = input.value;
    const expectedLength = parseInt(input.getAttribute('data-length'));

    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});