const categoriesList = document.getElementById('categories');

const categories = categoriesList.querySelectorAll('li.item');

const numOfCategories = categories.length;
console.log(`Number of categories: ${numOfCategories}`);

categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;

    const numOfElements = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numOfElements}`);
});