const input = document.querySelector('#validation-input');

input.addEventListener('blur', validationInputValue);

function validationInputValue(event) {
  const elem = event.currentTarget;
  const numberForvalidation = elem.getAttribute('data-length');
  if (elem.value.length === Number(numberForvalidation)) {
    elem.classList.add('valid');
    elem.classList.remove('invalid');
  } else {
    elem.classList.add('invalid');
    elem.classList.remove('valid');
  }
}
