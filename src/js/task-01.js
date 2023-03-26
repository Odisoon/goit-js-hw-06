const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const heading = item.querySelector('h2');
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${heading.textContent}. Elements: ${categoryItems.length}`);
});
