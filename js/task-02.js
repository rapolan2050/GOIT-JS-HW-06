const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


const ingredientList = document.getElementById('ingredients');

ingredients.forEach(function(ingredient) {
    let li = document.createElement('li');
    li.innerHTML = ingredient;
    li.classList.add('item');
    ingredientList.appendChild(li);
});