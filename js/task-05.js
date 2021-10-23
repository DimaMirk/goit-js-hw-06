const refs = {
  span: document.querySelector('#name-output'),
  input: document.querySelector('#name-input'),
};

const { span, input } = refs;

input.addEventListener('input', addInputValueInSpan);

function addInputValueInSpan(event) {
  event.currentTarget.value === ''
    ? (span.textContent = 'Anonymous')
    : (span.textContent = event.currentTarget.value);
}
