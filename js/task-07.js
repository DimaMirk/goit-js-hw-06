const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};
const { input, span } = refs;

input.addEventListener('input', showChanges);

function showChanges(event) {
  const elem = event.currentTarget;
  const fontSize = elem.value;
  span.setAttribute('style', `font-size:${fontSize}px`);
}
