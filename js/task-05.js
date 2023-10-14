let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

function updateName() {
    let inputValue = nameInput.value.trim();
    if (inputValue !== '') {

        nameOutput.textContent = inputValue;
    } else {

        nameOutput.textContent = 'Anónimo';
    }
}

nameInput.addEventListener('input', updateName);