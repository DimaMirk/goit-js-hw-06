const form = document.querySelector('.login-form');

form.addEventListener('submit', validation);

function validation(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email == '' || password == '') {
    alert('Все поля должны быть заполнены!');
  } else {
    alert('Данные успешно добавлены!');
    const user = new User(email, password);
    console.log('user :>> ', user);
    form.reset();
  }
}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
