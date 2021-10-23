function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtnEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
};
const { changeColorBtnEl, bodyEl, spanColor } = refs;

changeColorBtnEl.addEventListener('click', changeColorBody);

function changeColorBody() {
  const colorNumber = getRandomHexColor();
  bodyEl.setAttribute('style', `background-color:${colorNumber}`);
  viewColorNumber(colorNumber);
}
function viewColorNumber(color) {
  spanColor.textContent = color;
}
