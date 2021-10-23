const liItemEl = document.querySelectorAll('.item');

const numberOfCategories = liItemEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

const information = liItemEl.forEach((elem) => {
  console.log('');

  const title = elem.firstElementChild.textContent;
  console.log(`Category: ${title} `);

  const elemLength = elem.lastElementChild.children.length;
  console.log(`Elements: ${elemLength} `);
});
