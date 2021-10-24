const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const table = document.querySelector('#ingredients');

const createLi = ingredients.map((elem) => {
  const li = document.createElement('li');

  li.textContent = elem;

  li.classList.add('item');
  return li;
});
table.append(...createLi);
